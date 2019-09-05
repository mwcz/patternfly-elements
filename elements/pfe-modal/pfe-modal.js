import PFElement from '../pfelement/pfelement.js';

/*!
 * PatternFly Elements: PfeModal 1.0.0-prerelease.25
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

// StartsWith polyfill
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    return this.substr(position || 0, searchString.length) === searchString;
};
}

class PfeModal extends PFElement {
  static get version() {
    return "1.0.0-prerelease.25";
  }

  get html() {
    return `<style>:host{--pfe-modal--MaxWidth:70vw;--pfe-modal--MinWidth:50vw;--pfe-modal--MaxWidth--mobile:94vw;--pfe-modal--MaxHeight:90vh;--pfe-modal--Padding:calc(var(--pfe-theme--container-padding, 1rem) * 2) calc(var(--pfe-theme--container-padding, 1rem) * 3.5) calc(var(--pfe-theme--container-padding, 1rem) * 2) calc(var(--pfe-theme--container-padding, 1rem) * 2);--pfe-modal__overlay--BackgroundColor:var(--pfe-theme--color--overlay, rgba(45, 45, 45, 0.5));--pfe-modal__close--size:calc(var(--pfe-theme--ui--element--size, 20px) - 4px);display:block;position:relative}@media screen and (max-height:640px){:host{--pfe-modal--Padding:0 0 0 calc(var(--pfe-theme--container-padding, 1rem) * 2)}}.pfe-modal__outer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:99;z-index:var(--pfe-theme--zindex--modal,99)}.pfe-modal__outer[hidden]{display:none}.pfe-modal__overlay{position:fixed;height:100%;width:100%;top:0;left:0;background-color:var(--pfe-modal__overlay--BackgroundColor);cursor:pointer}.pfe-modal__overlay[hidden]{display:none}.pfe-modal__window{position:relative;max-width:var(--pfe-modal--MaxWidth--mobile);min-width:var(--pfe-modal--MinWidth);max-height:var(--pfe-modal--MaxHeight);margin:0 auto;-webkit-box-shadow:0 .1875rem .4375rem .1875rem rgba(#131313,.13),0 .6875rem 1.5rem 1rem rgba(#131313,.12);box-shadow:0 .1875rem .4375rem .1875rem rgba(#131313,.13),0 .6875rem 1.5rem 1rem rgba(#131313,.12);-webkit-box-shadow:var(--pfe-theme--box-shadow--lg,0 .1875rem .4375rem .1875rem rgba(#131313,.13),0 .6875rem 1.5rem 1rem rgba(#131313,.12));box-shadow:var(--pfe-theme--box-shadow--lg,0 .1875rem .4375rem .1875rem rgba(#131313,.13),0 .6875rem 1.5rem 1rem rgba(#131313,.12));background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);border-radius:2px;border-radius:var(--pfe-theme--ui--border-radius,2px)}@media screen and (min-width:640px){.pfe-modal__window{max-width:var(--pfe-modal--MaxWidth)}}.pfe-modal__container{position:relative;max-height:inherit}.pfe-modal__container[hidden]{display:none}.pfe-modal__content{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:var(--pfe-modal--MaxHeight);padding:var(--pfe-modal--Padding);-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-height:640px){.pfe-modal__content{--pfe-modal--Padding:var(--pfe-theme--container-padding, 1rem) calc(var(--pfe-theme--container-padding, 1rem) * 3) var(--pfe-theme--container-padding, 1rem) var(--pfe-theme--container-padding, 1rem)}}:host(:not([has_header])) .pfe-modal__content ::slotted(:nth-child(1)),:host(:not([has_header])) .pfe-modal__content ::slotted(:nth-child(2)){margin-top:0!important}.pfe-modal__content ::slotted([slot=pfe-modal--header]){margin-top:0!important}.pfe-modal__close{background-color:transparent;border:none;margin:0;padding:0;position:absolute;top:calc(1rem * .25);top:calc(var(--pfe-theme--container-padding,1rem) * .25);right:calc(1rem * .25);right:calc(var(--pfe-theme--container-padding,1rem) * .25);cursor:pointer;line-height:.5;padding:1rem;padding:var(--pfe-theme--container-padding,1rem)}@media screen and (min-width:640px){.pfe-modal__close{top:1rem;top:var(--pfe-theme--container-padding,1rem);right:1rem;right:var(--pfe-theme--container-padding,1rem)}}@media screen and (max-height:640px) and (min-width:640px){.pfe-modal__close{top:calc(1rem / 2);top:calc(var(--pfe-theme--container-padding,1rem)/ 2);right:calc(1rem / 2);right:calc(var(--pfe-theme--container-padding,1rem)/ 2)}}.pfe-modal__close>svg{fill:var(--pfe-broadcasted--text);height:20px;height:var(--pfe-theme--ui--element--size,20px);width:20px;width:var(--pfe-theme--ui--element--size,20px);height:var(--pfe-modal__close--size);width:var(--pfe-modal__close--size)}</style><slot name="pfe-modal--trigger"></slot>
<section class="pfe-modal__outer" hidden>
	<div class="pfe-modal__overlay"></div>
	<div class="pfe-modal__window" tabindex="0" role="dialog" hidden>
		<div class="pfe-modal__container">
			<div class="pfe-modal__content">
				<slot name="pfe-modal--header"></slot>
				<slot></slot>
			</div>
			<button class="pfe-modal__close" aria-label="Close dialog">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="-11 11 22 23">
					<path d="M30 16.669v-1.331c0-0.363-0.131-0.675-0.394-0.938s-0.575-0.394-0.938-0.394h-10.669v-10.65c0-0.362-0.131-0.675-0.394-0.938s-0.575-0.394-0.938-0.394h-1.331c-0.363 0-0.675 0.131-0.938 0.394s-0.394 0.575-0.394 0.938v10.644h-10.675c-0.362 0-0.675 0.131-0.938 0.394s-0.394 0.575-0.394 0.938v1.331c0 0.363 0.131 0.675 0.394 0.938s0.575 0.394 0.938 0.394h10.669v10.644c0 0.363 0.131 0.675 0.394 0.938 0.262 0.262 0.575 0.394 0.938 0.394h1.331c0.363 0 0.675-0.131 0.938-0.394s0.394-0.575 0.394-0.938v-10.637h10.669c0.363 0 0.675-0.131 0.938-0.394 0.269-0.262 0.4-0.575 0.4-0.938z" transform="rotate(45)"/>
				</svg>
			</button>
		</div>
	</div>
</section>`;
  }

  static get properties() {
    return {};
  }

  static get slots() {
    return {"trigger":{"title":"Trigger","type":"array","namedSlot":true,"items":{"oneOf":[{"$ref":"raw"}]}},"header":{"title":"Header","type":"array","namedSlot":true,"items":{"oneOf":[{"$ref":"raw"}]}},"body":{"title":"Body","type":"array","namedSlot":false,"items":{"oneOf":[{"$ref":"raw"}]}}};
  }
  static get tag() {
    return "pfe-modal";
  }

  get templateUrl() {
    return "pfe-modal.html";
  }

  get schemaUrl() {
    return "pfe-modal.json";
  }

  get styleUrl() {
    return "pfe-modal.scss";
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Container;
  }

  constructor() {
    super(PfeModal, { type: PfeModal.PfeType });

    this.header_id = this.randomId;
    this.isOpen = false;

    this._keydownHandler = this._keydownHandler.bind(this);
    this.toggle = this.toggle.bind(this);

    // These fire custom events
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this._modalWindow = this.shadowRoot.querySelector(`.${this.tag}__window`);
    this._modalCloseButton = this.shadowRoot.querySelector(`.${this.tag}__close`);
    this._overlay = this.shadowRoot.querySelector(`.${this.tag}__overlay`);
    this._container = this.shadowRoot.querySelector(`.${this.tag}__container`);
    this._outer = this.shadowRoot.querySelector(`.${this.tag}__outer`);

    this._observer = new MutationObserver(() => {
      this._mapSchemaToSlots(this.tag, this.slots);
      this._init();
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this._init();

    this.addEventListener("keydown", this._keydownHandler);
    this._modalCloseButton.addEventListener("keydown", this._keydownHandler);
    this._modalCloseButton.addEventListener("click", this.close);
    this._overlay.addEventListener("click", this.close);

    this._observer.observe(this, { childList: true });
  }

  disconnectedCallback() {
    this.removeEventListener("keydown", this._keydownHandler);
    this._modalCloseButton.removeEventListener("click", this.close);
    this._modalCloseButton.removeEventListener("click", this.close);
    this._overlay.removeEventListener("click", this.close);

    if (this.trigger) {
      this.trigger.removeEventListener("click", this.open);
    }

    this._observer.disconnect();
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    super.attributeChangedCallback(attr, oldVal, newVal);
  }

  _init() {
    this.trigger = this.querySelector(`[slot="pfe-modal--trigger"]`);
    this.header = this.querySelector(`[slot="pfe-modal--header"]`);
    this.body = [...this.querySelectorAll(`*:not([slot])`)];

    if (this.trigger) {
      this.trigger.addEventListener("click", this.open);
    }

    if (this.header) {
      this.header.setAttribute("id", this.header_id);
      this._modalWindow.setAttribute("aria-labelledby", this.header_id);
    } else {
      // Get the first heading in the modal if it exists
      const headings = this.body.filter(el => el.tagName.startsWith("H"));
      if (headings.length > 0) {
        headings[0].setAttribute("id", this.header_id);
        this._modalWindow.setAttribute("aria-labelledby", this.header_id);
      } else if (this.trigger) {
        this._modalWindow.setAttribute("aria-label", this.trigger.innerText);
      }
    }
  }

  _keydownHandler(event) {
    let target = event.target || window.event.srcElement;
    let key = event.key || event.keyCode;
    switch (key) {
      case "Tab":
      case 9:
        if (target === this._modalCloseButton) {
          event.preventDefault();
          this._modalWindow.focus();
        }
        return;
      case "Escape":
      case "Esc":
      case 27:
        this.close(event);
        return;
      case "Enter":
      case 13:
          if (target === this.trigger) {
            this.open(event);
          }
          return;
    }
  }

  toggle(event) {
    this.isOpen ? this.close(event) : this.open(event);
    return this;
  }

  open(event) {
    if (event) {
      event.preventDefault();
      this.trigger = event ? event.target : window.event.srcElement;
    }

    const detail = {
      open: true
    };

    if (event && this.trigger) {
      detail.trigger = this.trigger;
    }

    this.isOpen = true;
    // Reveal the container and overlay
    this._modalWindow.removeAttribute("hidden");
    this._overlay.removeAttribute("hidden");
    this._outer.removeAttribute("hidden");
    // This prevents background scroll
    document.body.style.overflow = "hidden";
    // Set the focus to the container
    this._modalWindow.focus();

    this.dispatchEvent(
      new CustomEvent(`${this.tag}:open`, {
        detail: detail,
        bubbles: true
      })
    );

    return this;
  }

  close(event) {
    if (event) {
      event.preventDefault();
    }

    this.isOpen = false;
    // Hide the container and overlay
    this._modalWindow.setAttribute("hidden", true);
    this._overlay.setAttribute("hidden", true);
    this._outer.setAttribute("hidden", true);
    // Return scrollability
    document.body.style.overflow = "auto";

    if (this.trigger) {
      // Move focus back to the trigger element
      this.trigger.focus();
      this.trigger = null;
    }

    this.dispatchEvent(
      new CustomEvent(`${this.tag}:close`, {
        detail: {
          open: false
        },
        bubbles: true
      })
    );

    return this;
  }
}

PFElement.create(PfeModal);

export default PfeModal;
//# sourceMappingURL=pfe-modal.js.map
