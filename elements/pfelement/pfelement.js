/*
 * Copyright 2019 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

let logger = () => null;

function reveal() {
  logger(`[reveal] elements ready, revealing the body`);
  window.document.body.removeAttribute("unresolved");
}

function autoReveal(logFunction) {
  logger = logFunction;
  // If Web Components are already ready, run the handler right away.  If they
  // are not yet ready, wait.
  //
  // see https://github.com/github/webcomponentsjs#webcomponents-loaderjs for
  // info about web component readiness events
  const polyfillPresent = window.WebComponents;
  const polyfillReady = polyfillPresent && window.WebComponents.ready;

  if (!polyfillPresent || polyfillReady) {
    handleWebComponentsReady();
  } else {
    window.addEventListener("WebComponentsReady", handleWebComponentsReady);
  }
}

function handleWebComponentsReady() {
  logger("[reveal] web components ready");
  reveal();
}

/*
 * Copyright 2019 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/
const prefix = "pfe-";

class PFElement extends HTMLElement {
  static create(pfe) {
    window.customElements.define(pfe.tag, pfe);
  }

  static debugLog(preference = null) {
    if (preference !== null) {
      PFElement._debugLog = !!preference;
    }
    return PFElement._debugLog;
  }

  static log(...msgs) {
    if (PFElement.debugLog()) {
      console.log(...msgs);
    }
  }

  static get PfeTypes() {
    return {
      Container: "container",
      Content: "content",
      Combo: "combo"
    };
  }

  get pfeType() {
    return this.getAttribute(`${prefix}type`);
  }

  set pfeType(value) {
    this.setAttribute(`${prefix}type`, value);
  }

  // Returns a single element assigned to that slot; if multiple, it returns the first
  has_slot(name) {
    return this.querySelector(`[slot='${name}']`);
  }

  // Returns an array with all elements assigned to that slot
  has_slots(name) {
    return [...this.querySelectorAll(`[slot='${name}']`)];
  }

  constructor(pfeClass, { type = null, delayRender = false } = {}) {
    super();

    this.connected = false;
    this._pfeClass = pfeClass;
    this.tag = pfeClass.tag;
    this.props = pfeClass.properties;
    this._queue = [];
    this.template = document.createElement("template");

    this.attachShadow({ mode: "open" });

    if (type) {
      this._queueAction({
        type: "setProperty",
        data: {
          name: "pfeType",
          value: type
        }
      });
    }

    if (!delayRender) {
      this.render();
    }
  }

  connectedCallback() {
    this.connected = true;

    if (window.ShadyCSS) {
      window.ShadyCSS.styleElement(this);
    }

    this.classList.add("PFElement");

    if (typeof this.props === "object") {
      this._mapSchemaToProperties(this.tag, this.props);
    }

    if (this._queue.length) {
      this._processQueue();
    }
  }

  disconnectedCallback() {
    this.connected = false;
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (!this._pfeClass.cascadingAttributes) {
      return;
    }

    const cascadeTo = this._pfeClass.cascadingAttributes[attr];
    if (cascadeTo) {
      this._copyAttribute(attr, cascadeTo);
    }
  }

  _copyAttribute(name, to) {
    const recipients = [
      ...this.querySelectorAll(to),
      ...this.shadowRoot.querySelectorAll(to)
    ];
    const value = this.getAttribute(name);
    const fname = value == null ? "removeAttribute" : "setAttribute";
    for (const node of recipients) {
      node[fname](name, value);
    }
  }

  // Map the imported properties json to real props on the element
  // @notice static getter of properties is built via tooling
  // to edit modify src/element.json
  _mapSchemaToProperties(tag, properties) {
    // Loop over the properties provided by the schema
    Object.keys(properties).forEach(attr => {
      let data = properties[attr];
      // Set the attribute's property equal to the schema input
      this[attr] = data;
      // Initialize the value to null
      this[attr].value = null;

      // If the attribute exists on the host
      if (this.hasAttribute(`${prefix}${attr}`)) {
        // Set property value based on the existing attribute
        this[attr].value = this.getAttribute(`${prefix}${attr}`);
      }
      // Otherwise, look for a default and use that instead
      else if (data.default) {
        const dependency_exists = this._hasDependency(tag, data.options);
        const no_dependencies =
          !data.options || (data.options && !data.options.dependencies.length);
        // If the dependency exists or there are no dependencies, set the default
        if (dependency_exists || no_dependencies) {
          this.setAttribute(`${prefix}${attr}`, data.default);
          this[attr].value = data.default;
        }
      }
    });
  }

  // Test whether expected dependencies exist
  _hasDependency(tag, opts) {
    // Get any possible dependencies for this attribute to exist
    let dependencies = opts ? opts.dependencies : [];
    // Initialize the dependency return value
    let hasDependency = false;
    // Check that dependent item exists
    // Loop through the dependencies defined
    for (let i = 0; i < dependencies.length; i += 1) {
      const slot_exists =
        dependencies[i].type === "slot" &&
        this.has_slot(`${tag}--${dependencies[i].id}`);
      const attribute_exists =
        dependencies[i].type === "attribute" &&
        this.getAttribute(`${prefix}${dependencies[i].id}`);
      // If the type is slot, check that it exists OR
      // if the type is an attribute, check if the attribute is defined
      if (slot_exists || attribute_exists) {
        // If the slot does exist, add the attribute with the default value
        hasDependency = true;
        // Exit the loop
        break;
      }
    }
    // Return a boolean if the dependency exists
    return hasDependency;
  }

  _queueAction(action) {
    this._queue.push(action);
  }

  _processQueue() {
    this._queue.forEach(action => {
      this[`_${action.type}`](action.data);
    });

    this._queue = [];
  }

  _setProperty({ name, value }) {
    this[name] = value;
  }

  static var(name, element = document.body) {
    return window
      .getComputedStyle(element)
      .getPropertyValue(name)
      .trim();
  }

  var(name) {
    return PFElement.var(name, this);
  }

  render() {
    this.shadowRoot.innerHTML = "";
    this.template.innerHTML = this.html;

    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, this.tag);
    }

    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  log(...msgs) {
    PFElement.log(`[${this.tag}]`, ...msgs);
  }
}

autoReveal(PFElement.log);

export default PFElement;
//# sourceMappingURL=pfelement.js.map
