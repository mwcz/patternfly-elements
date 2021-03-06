import PFElement from "../pfelement/pfelement.js";

// StartsWith polyfill
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    return this.substr(position || 0, searchString.length) === searchString;
};
}

class PfeModal extends PFElement {
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
