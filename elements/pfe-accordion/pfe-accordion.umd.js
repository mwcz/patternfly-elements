(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeAccordion = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*!
   * PatternFly Elements: PfeAccordion 1.0.0
   * @license
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

  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, "findIndex", {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return k.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return -1.
        return -1;
      }
    });
  }

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  var PfeAccordion = function (_PFElement) {
    inherits(PfeAccordion, _PFElement);
    createClass(PfeAccordion, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host{display:block;position:relative;overflow:hidden;margin:0;color:var(--pfe-broadcasted--color--text)}:host([on=dark]){--pfe-broadcasted--color--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--ui-link--on-dark, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--ui-link--on-dark--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--ui-link--on-dark--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--ui-link--on-dark--focus, #cce6ff)}:host([on=light]){--pfe-broadcasted--color--text:var(--pfe-theme--color--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--ui-link, #06c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--ui-link--visited, rebeccapurple);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--ui-link--hover, #003366);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--ui-link--focus, #003366)}</style><slot></slot>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-accordion.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-accordion.html";
      }
    }, {
      key: 'schemaUrl',
      get: function get$$1() {
        return "pfe-accordion.json";
      }
    }], [{
      key: 'version',
      get: function get$$1() {
        return "1.0.0";
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return { "on": { "title": "Context", "type": "string", "enum": ["light", "dark"], "default": "light", "prefixed": false } };
      }
    }, {
      key: 'slots',
      get: function get$$1() {
        return { "default": { "title": "Default", "type": "array", "namedSlot": false, "items": { "oneOf": [{ "$ref": "pfe-accordion-header" }, { "$ref": "pfe-accordion-panel" }] } } };
      }
    }, {
      key: 'tag',
      get: function get$$1() {
        return "pfe-accordion";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["on"];
      }
    }, {
      key: 'cascadingAttributes',
      get: function get$$1() {
        return {
          on: "pfe-accordion-header, pfe-accordion-panel"
        };
      }

      // Declare the type of this component

    }, {
      key: 'PfeType',
      get: function get$$1() {
        return PFElement.PfeTypes.Container;
      }
    }]);

    function PfeAccordion() {
      classCallCheck(this, PfeAccordion);

      var _this = possibleConstructorReturn(this, (PfeAccordion.__proto__ || Object.getPrototypeOf(PfeAccordion)).call(this, PfeAccordion, { type: PfeAccordion.PfeType }));

      _this._linkPanels = _this._linkPanels.bind(_this);
      _this._observer = new MutationObserver(_this._linkPanels);
      return _this;
    }

    createClass(PfeAccordion, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        get(PfeAccordion.prototype.__proto__ || Object.getPrototypeOf(PfeAccordion.prototype), 'connectedCallback', this).call(this);

        this.setAttribute("role", "presentation");
        this.setAttribute("defined", "");

        this.addEventListener(PfeAccordion.tag + ':change', this._changeHandler);
        this.addEventListener("keydown", this._keydownHandler);

        Promise.all([customElements.whenDefined(PfeAccordionHeader.tag), customElements.whenDefined(PfeAccordionPanel.tag)]).then(function () {
          if (_this2.children.length) {
            _this2._linkPanels();
          }

          _this2._observer.observe(_this2, { childList: true });
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.removeEventListener(PfeAccordion.tag + ':change', this._changeHandler);
        this.removeEventListener("keydown", this._keydownHandler);
        this._observer.disconnect();
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        get(PfeAccordion.prototype.__proto__ || Object.getPrototypeOf(PfeAccordion.prototype), 'attributeChangedCallback', this).call(this, attr, oldVal, newVal);
      }
    }, {
      key: 'toggle',
      value: function toggle(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        if (!header.expanded) {
          this._expandHeader(header);
          this._expandPanel(panel);
        } else {
          this._collapseHeader(header);
          this._collapsePanel(panel);
        }
      }
    }, {
      key: 'expand',
      value: function expand(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        this._expandHeader(header);
        this._expandPanel(panel);
      }
    }, {
      key: 'expandAll',
      value: function expandAll() {
        var _this3 = this;

        var headers = this._allHeaders();
        var panels = this._allPanels();

        headers.forEach(function (header) {
          return _this3._expandHeader(header);
        });
        panels.forEach(function (panel) {
          return _this3._expandPanel(panel);
        });
      }
    }, {
      key: 'collapse',
      value: function collapse(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        this._collapseHeader(header);
        this._collapsePanel(panel);
      }
    }, {
      key: 'collapseAll',
      value: function collapseAll() {
        var _this4 = this;

        var headers = this._allHeaders();
        var panels = this._allPanels();

        headers.forEach(function (header) {
          return _this4._collapseHeader(header);
        });
        panels.forEach(function (panel) {
          return _this4._collapsePanel(panel);
        });
      }
    }, {
      key: '_linkPanels',
      value: function _linkPanels() {
        var _this5 = this;

        var headers = this._allHeaders();
        headers.forEach(function (header) {
          var panel = _this5._panelForHeader(header);

          if (!panel) {
            return;
          }

          header.setAttribute("aria-controls", panel.pfeId);
          panel.setAttribute("aria-labelledby", header.pfeId);
        });
      }
    }, {
      key: '_changeHandler',
      value: function _changeHandler(evt) {
        if (this.classList.contains("animating")) {
          return;
        }

        var header = evt.target;
        var panel = evt.target.nextElementSibling;

        if (evt.detail.expanded) {
          this._expandHeader(header);
          this._expandPanel(panel);
        } else {
          this._collapseHeader(header);
          this._collapsePanel(panel);
        }
      }
    }, {
      key: '_toggle',
      value: function _toggle(header, panel) {}
    }, {
      key: '_expandHeader',
      value: function _expandHeader(header) {
        header.expanded = true;
      }
    }, {
      key: '_expandPanel',
      value: function _expandPanel(panel) {
        if (!panel) {
          console.error(PfeAccordion.tag + ': Trying to expand a panel that doesn\'t exist');
          return;
        }

        if (panel.expanded) {
          return;
        }

        panel.expanded = true;

        var height = panel.getBoundingClientRect().height;
        this._animate(panel, 0, height);
      }
    }, {
      key: '_collapseHeader',
      value: function _collapseHeader(header) {
        header.expanded = false;
      }
    }, {
      key: '_collapsePanel',
      value: function _collapsePanel(panel) {
        if (!panel) {
          console.error(PfeAccordion.tag + ': Trying to collapse a panel that doesn\'t exist');
          return;
        }

        if (!panel.expanded) {
          return;
        }

        var height = panel.getBoundingClientRect().height;
        panel.expanded = false;

        this._animate(panel, height, 0);
      }
    }, {
      key: '_animate',
      value: function _animate(panel, start, end) {
        var _this6 = this;

        var header = panel.previousElementSibling;
        panel.classList.add("animating");
        header.classList.add("animating");
        panel.style.height = start + 'px';

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            panel.style.height = end + 'px';
            panel.addEventListener("transitionend", _this6._transitionEndHandler);
          });
        });
      }
    }, {
      key: '_keydownHandler',
      value: function _keydownHandler(evt) {
        var currentHeader = evt.target;

        if (!this._isHeader(currentHeader)) {
          return;
        }

        var newHeader = void 0;

        switch (evt.key) {
          case "ArrowDown":
          case "Down":
          case "ArrowRight":
          case "Right":
            newHeader = this._nextHeader();
            break;
          case "ArrowUp":
          case "Up":
          case "ArrowLeft":
          case "Left":
            newHeader = this._previousHeader();
            break;
          case "Home":
            newHeader = this._firstHeader();
            break;
          case "End":
            newHeader = this._lastHeader();
            break;
          default:
            return;
        }

        newHeader.shadowRoot.querySelector("button").focus();
      }
    }, {
      key: '_transitionEndHandler',
      value: function _transitionEndHandler(evt) {
        var header = evt.target.previousElementSibling;
        header.classList.remove("animating");
        evt.target.style.height = "";
        evt.target.classList.remove("animating");
        evt.target.removeEventListener("transitionend", this._transitionEndHandler);
      }
    }, {
      key: '_allHeaders',
      value: function _allHeaders() {
        return [].concat(toConsumableArray(this.querySelectorAll(PfeAccordionHeader.tag)));
      }
    }, {
      key: '_allPanels',
      value: function _allPanels() {
        return [].concat(toConsumableArray(this.querySelectorAll(PfeAccordionPanel.tag)));
      }
    }, {
      key: '_panelForHeader',
      value: function _panelForHeader(header) {
        var next = header.nextElementSibling;

        if (!next) {
          return;
        }

        if (next.tagName.toLowerCase() !== PfeAccordionPanel.tag) {
          console.error(PfeAccordion.tag + ': Sibling element to a header needs to be a panel');
          return;
        }

        return next;
      }
    }, {
      key: '_previousHeader',
      value: function _previousHeader() {
        var headers = this._allHeaders();
        var newIndex = headers.findIndex(function (header) {
          return header === document.activeElement;
        }) - 1;
        return headers[(newIndex + headers.length) % headers.length];
      }
    }, {
      key: '_nextHeader',
      value: function _nextHeader() {
        var headers = this._allHeaders();
        var newIndex = headers.findIndex(function (header) {
          return header === document.activeElement;
        }) + 1;
        return headers[newIndex % headers.length];
      }
    }, {
      key: '_firstHeader',
      value: function _firstHeader() {
        var headers = this._allHeaders();
        return headers[0];
      }
    }, {
      key: '_lastHeader',
      value: function _lastHeader() {
        var headers = this._allHeaders();
        return headers[headers.length - 1];
      }
    }, {
      key: '_isHeader',
      value: function _isHeader(element) {
        return element.tagName.toLowerCase() === PfeAccordionHeader.tag;
      }
    }]);
    return PfeAccordion;
  }(PFElement);

  var PfeAccordionHeader = function (_PFElement2) {
    inherits(PfeAccordionHeader, _PFElement2);
    createClass(PfeAccordionHeader, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host{display:block}:host>*{margin:0}:host button{--pfe-accordion--main:transparent;--pfe-accordion--aux:var(--pfe-theme--color--surface--lightest--text, #333);--pfe-accordion--BorderLeft:var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) transparent;--pfe-accordion--BorderRight:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;--pfe-accordion--BorderBottom:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf);--pfe-accordion--BorderLeftColor--focus:var(--pfe-theme--color--surface--lightest--link, #06c);-webkit-appearance:button;margin:0;width:100%;height:auto;font-family:inherit;font-weight:700;font-weight:var(--pfe-theme--font-weight--bold,700);text-align:left;cursor:pointer;z-index:1;position:relative;font-size:calc(16px * 1.1);font-size:calc(var(--pfe-theme--font-size,16px) * 1.1);line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);color:var(--pfe-accordion--aux);background-color:var(--pfe-accordion--main);border-left:var(--pfe-accordion--BorderLeft);border-right:var(--pfe-accordion--BorderRight);border-bottom:var(--pfe-accordion--BorderBottom);border-top:0;padding:1rem 50px 1rem calc(1rem * 1.5);padding:var(--pfe-theme--container-spacer,1rem) 50px var(--pfe-theme--container-spacer,1rem) calc(var(--pfe-theme--container-spacer,1rem) * 1.5)}:host button:hover{outline:0;border-left-color:var(--pfe-accordion--BorderLeftColor--focus);z-index:2}:host button:focus{outline:0;z-index:2;text-decoration:underline}:host button::-moz-focus-inner{border:0}:host button[aria-expanded=true]{--pfe-accordion--main:var(--pfe-theme--color--surface--lightest, #fff);--pfe-accordion--aux:var(--pfe-theme--color--surface--lightest--text, #333);--pfe-accordion--focus:var(--pfe-theme--color--surface--lightest--link, #06c);--pfe-accordion--BorderLeft:var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--lightest--link, #06c);--pfe-accordion--BorderRight:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf);position:relative;display:block;border-bottom:0}:host button[aria-expanded=true]::after{content:"";position:absolute;top:calc((1rem * .75) + .55em);top:calc((var(--pfe-theme--container-spacer,1rem) * .75) + .55em);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;text-align:center;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:.1em .1em 0 0;border-bottom:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:calc(1rem * 1.5);right:calc(var(--pfe-theme--container-spacer,1rem) * 1.5)}:host button[aria-expanded=false]::after{content:"";position:absolute;top:calc((1rem * .75) + .55em);top:calc((var(--pfe-theme--container-spacer,1rem) * .75) + .55em);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;text-align:center;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:0 .1em .1em 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);right:calc(1rem * 1.5);right:calc(var(--pfe-theme--container-spacer,1rem) * 1.5)}:host(:first-child) button{border-top:1px solid #dfdfdf;border-top:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--surface--border,#dfdfdf)}:host(:last-of-type) button[aria-expanded=false]{border-bottom:1px solid #dfdfdf;border-bottom:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--surface--border,#dfdfdf);border-top:0}:host(.animating){-webkit-transition:-webkit-transform .3s cubic-bezier(.465,.183,.153,.946);transition:-webkit-transform .3s cubic-bezier(.465,.183,.153,.946);transition:transform .3s cubic-bezier(.465,.183,.153,.946);transition:transform .3s cubic-bezier(.465,.183,.153,.946),-webkit-transform .3s cubic-bezier(.465,.183,.153,.946);-webkit-transition:-webkit-transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:-webkit-transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946)),-webkit-transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946))}:host(.animating) button{position:relative;display:block;border-bottom:0;--pfe-accordion--main:var(--pfe-theme--color--surface--lightest, #fff);--pfe-accordion--aux:var(--pfe-theme--color--surface--lightest--text, #333);--pfe-accordion--focus:var(--pfe-theme--color--surface--lightest--link, #06c);--pfe-accordion--BorderLeft:var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--lightest--link, #06c);--pfe-accordion--BorderRight:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf)}:host([on=dark]) button{--pfe-accordion--main:transparent;--pfe-accordion--aux:var(--pfe-theme--color--surface--darkest--text, #fff);--pfe-accordion--BorderLeftColor--focus:var(--pfe-theme--color--surface--lightest, #fff)}:host([on=dark]) button[aria-expanded=true]{--pfe-accordion--main:var(--pfe-theme--color--surface--darker, #464646);--pfe-accordion--aux:var(--pfe-theme--color--surface--darkest--text, #fff);--pfe-accordion--BorderLeft:var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf);--pfe-accordion--BorderRight:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf);--pfe-accordion--BorderLeftColor--focus:var(--pfe-theme--color--surface--lightest, #fff)}:host([on=dark].animating) button{--pfe-accordion--main:var(--pfe-theme--color--surface--darker, #464646);--pfe-accordion--aux:var(--pfe-theme--color--surface--darkest--text, #fff);--pfe-accordion--BorderLeft:var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf);--pfe-accordion--BorderRight:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border, #dfdfdf);--pfe-accordion--BorderLeftColor--focus:var(--pfe-theme--color--surface--lightest, #fff)}</style><button type="button" aria-expanded="false" role="tab"></button>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-accordion-header.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-accordion-header.html";
      }
    }, {
      key: 'pfeId',
      get: function get$$1() {
        return this.getAttribute("pfe-id");
      },
      set: function set$$1(id) {
        if (!id) {
          return;
        }

        this.setAttribute("pfe-id", id);
      }
    }], [{
      key: 'version',
      get: function get$$1() {
        return "1.0.0";
      }
    }, {
      key: 'tag',
      get: function get$$1() {
        return "pfe-accordion-header";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["aria-expanded"];
      }
    }]);

    function PfeAccordionHeader() {
      classCallCheck(this, PfeAccordionHeader);

      var _this7 = possibleConstructorReturn(this, (PfeAccordionHeader.__proto__ || Object.getPrototypeOf(PfeAccordionHeader)).call(this, PfeAccordionHeader));

      _this7.button = _this7.shadowRoot.querySelector("button");

      _this7._init = _this7._init.bind(_this7);
      _this7._clickHandler = _this7._clickHandler.bind(_this7);
      _this7._observer = new MutationObserver(_this7._init);
      return _this7;
    }

    createClass(PfeAccordionHeader, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeAccordionHeader.prototype.__proto__ || Object.getPrototypeOf(PfeAccordionHeader.prototype), 'connectedCallback', this).call(this);

        if (this.children.length || this.textContent.trim().length) {
          this._init();
        }

        this.addEventListener("click", this._clickHandler);
        this._observer.observe(this, { childList: true });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.removeEventListener("click", this._clickHandler);
        this._observer.disconnect();
      }
    }, {
      key: '_init',
      value: function _init() {
        if (window.ShadyCSS) {
          this._observer.disconnect();
        }

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "header");
        }

        if (!this.pfeId) {
          this.pfeId = PfeAccordionHeader.tag + '-' + generateId();
        }

        var child = this.children[0];
        var isHeaderTag = false;

        if (child) {
          switch (child.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
              isHeaderTag = true;
              break;
          }

          var wrapperTag = document.createElement(child.tagName);
          this.button.innerText = child.innerText;

          wrapperTag.appendChild(this.button);
          this.shadowRoot.appendChild(wrapperTag);
        } else {
          this.button.innerText = this.textContent.trim();
        }

        if (!isHeaderTag) {
          console.warn(PfeAccordionHeader.tag + ': The first child in the light DOM must be a Header level tag (h1, h2, h3, h4, h5, or h6)');
        }

        if (window.ShadyCSS) {
          this._observer.observe(this, { childList: true });
        }
      }
    }, {
      key: '_clickHandler',
      value: function _clickHandler(event) {
        this.dispatchEvent(new CustomEvent(PfeAccordion.tag + ':change', {
          detail: { expanded: !this.expanded },
          bubbles: true
        }));
      }
    }, {
      key: 'expanded',
      get: function get$$1() {
        return this.hasAttribute("aria-expanded");
      },
      set: function set$$1(val) {
        val = Boolean(val);

        if (val) {
          this.setAttribute("aria-expanded", true);
          this.button.setAttribute("aria-expanded", true);
        } else {
          this.removeAttribute("aria-expanded");
          this.button.setAttribute("aria-expanded", false);
        }
      }
    }]);
    return PfeAccordionHeader;
  }(PFElement);

  var PfeAccordionPanel = function (_PFElement3) {
    inherits(PfeAccordionPanel, _PFElement3);
    createClass(PfeAccordionPanel, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host{display:none;overflow:hidden;will-change:height;border-color:transparent;opacity:0}:host(.animating),:host([expanded]){display:block;position:relative;opacity:1;border-right:1px solid transparent;border-right:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) transparent;border-left:3px solid transparent;border-left:var(--pfe-theme--surface--border-width--heavy,3px) var(--pfe-theme--surface--border-style,solid) transparent;-webkit-box-shadow:0 5px 3px rgba(140,140,140,.35);box-shadow:0 5px 3px rgba(140,140,140,.35);-webkit-box-shadow:0 5px var(--pfe-theme--surface--border-width--heavy,3px) rgba(140,140,140,.35);box-shadow:0 5px var(--pfe-theme--surface--border-width--heavy,3px) rgba(140,140,140,.35);border-left-color:#06c;border-left-color:var(--pfe-theme--color--surface--lightest--link,#06c);background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);border-right-color:#dfdfdf;border-right-color:var(--pfe-theme--color--surface--border,#dfdfdf);border-bottom:1px solid #dfdfdf;border-bottom:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--surface--border,#dfdfdf)}:host([on=dark].animating),:host([on=dark][expanded]){--pfe-broadcasted--color--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--ui-link--on-dark, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--ui-link--on-dark--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--ui-link--on-dark--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--ui-link--on-dark--focus, #cce6ff);border-right:1px solid transparent;border-right:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) transparent;border-left:3px solid transparent;border-left:var(--pfe-theme--surface--border-width--heavy,3px) var(--pfe-theme--surface--border-style,solid) transparent;-webkit-box-shadow:none;box-shadow:none;background-color:#464646;background-color:var(--pfe-theme--color--surface--darker,#464646);border-left-color:#dfdfdf;border-left-color:var(--pfe-theme--color--surface--border,#dfdfdf);border-right-color:#dfdfdf;border-right-color:var(--pfe-theme--color--surface--border,#dfdfdf)}:host(.animating){display:block;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out}.container{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 3em 1rem calc(1rem * 1.5);padding:0 3em var(--pfe-theme--container-spacer,1rem) calc(var(--pfe-theme--container-spacer,1rem) * 1.5)}:host(:last-of-type[expanded]){margin-bottom:0}</style><div tabindex="-1" role="tabpanel">\n  <div class="container">\n    <slot></slot>\n  </div>\n</div>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-accordion-panel.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-accordion-panel.html";
      }
    }, {
      key: 'pfeId',
      get: function get$$1() {
        return this.getAttribute("pfe-id");
      },
      set: function set$$1(id) {
        if (!id) {
          return;
        }

        this.setAttribute("pfe-id", id);
      }
    }], [{
      key: 'version',
      get: function get$$1() {
        return "1.0.0";
      }
    }, {
      key: 'tag',
      get: function get$$1() {
        return "pfe-accordion-panel";
      }
    }]);

    function PfeAccordionPanel() {
      classCallCheck(this, PfeAccordionPanel);
      return possibleConstructorReturn(this, (PfeAccordionPanel.__proto__ || Object.getPrototypeOf(PfeAccordionPanel)).call(this, PfeAccordionPanel));
    }

    createClass(PfeAccordionPanel, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeAccordionPanel.prototype.__proto__ || Object.getPrototypeOf(PfeAccordionPanel.prototype), 'connectedCallback', this).call(this);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "region");
        }

        if (!this.pfeId) {
          this.pfeId = PfeAccordionPanel.tag + '-' + generateId();
        }
      }
    }, {
      key: 'expanded',
      get: function get$$1() {
        return this.hasAttribute("expanded");
      },
      set: function set$$1(val) {
        var value = Boolean(val);

        if (value) {
          this.setAttribute("expanded", "");
        } else {
          this.removeAttribute("expanded");
        }
      }
    }]);
    return PfeAccordionPanel;
  }(PFElement);

  PFElement.create(PfeAccordionHeader);
  PFElement.create(PfeAccordionPanel);
  PFElement.create(PfeAccordion);

  return PfeAccordion;

})));
//# sourceMappingURL=pfe-accordion.umd.js.map
