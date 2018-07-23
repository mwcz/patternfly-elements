import Rhelement from "../rhelement/rhelement.js";

/*
 * DO NOT EDIT. This will be autopopulated with the
 * html from rh-button.html and css from
 * rh-button.scss
 */
const template = document.createElement("template");
template.innerHTML = `
<style>:host {
  display: inline-block; }

:host button {
  padding: var(--rh-button--Padding, 0.25rem 1rem);
  font-size: var(--rh-button--FontSize, 16px);
  line-height: var(--rh-button--LineHeight, 1.2);
  border: var(--rh-button--BorderWidth, 1px) solid transparent;
  border-radius: var(--rh-button--BorderRadius, 2px);
  transition: background var(--rh-button--theme--animation-speed, 250ms) var(--rh-theme--animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946));
  cursor: pointer; }
  :host button:focus {
    outline: none;
    box-shadow: var(--rh-theme--focus--Outline, 0 0 0 2px #3399ff); }

:host button {
  background: var(--rh-button--theme--default-color--Background, #d2d2d2);
  color: var(--rh-button--theme--default-color--Color, #333); }
  :host button:hover, :host button:focus {
    background: var(--rh-button--theme--default-color--hover--Background, #acacac);
    color: var(--rh-button--theme--default-color--hover--Color, #333); }

:host([unfilled]) button {
  background: transparent !important;
  color: var(--rh-button--theme--default-color--BorderColor, #464646); }
  :host([unfilled]) button:hover, :host([unfilled]) button:focus {
    background: var(--rh-button--theme--default-color--hover--Background, #acacac) !important;
    color: var(--rh-button--theme--default-color--hover--Color, #333); }

:host([inverted]) button {
  background: #fff;
  color: var(--rh-button--theme--default-color--BorderColor, #464646); }
  :host([inverted]) button:hover, :host([inverted]) button:focus {
    background: var(--rh-button--theme--default-color--hover--Background, #acacac);
    color: var(--rh-button--theme--default-color--hover--Color, #333); }

:host([bordered]) button {
  border-color: var(--rh-button--theme--default-color--BorderColor, #464646); }
  :host([bordered]) button:hover, :host([bordered]) button:focus {
    border-color: var(--rh-button--theme--default-color--hover--BorderColor, #202020); }

:host button:active,
:host([unfilled]) button:active,
:host([inverted]) button:active,
:host([bordered]) button:active {
  background: var(--rh-button--theme--default-color--active--Background, #7551a6) !important;
  color: var(--rh-button--theme--default-color--active--Color, #fff) !important; }

:host([theme="primary"]) button {
  background: var(--rh-button--theme--primary-color--Background, #0076e0);
  color: var(--rh-button--theme--primary-color--Color, #fff); }
  :host([theme="primary"]) button:hover, :host([theme="primary"]) button:focus {
    background: var(--rh-button--theme--primary-color--hover--Background, #004e94);
    color: var(--rh-button--theme--primary-color--hover--Color, #fff); }

:host([theme="primary"][unfilled]) button {
  background: transparent !important;
  color: var(--rh-button--theme--primary-color--BorderColor, #0076e0); }
  :host([theme="primary"][unfilled]) button:hover, :host([theme="primary"][unfilled]) button:focus {
    background: var(--rh-button--theme--primary-color--hover--Background, #004e94) !important;
    color: var(--rh-button--theme--primary-color--hover--Color, #fff); }

:host([theme="primary"][inverted]) button {
  background: #fff;
  color: var(--rh-button--theme--primary-color--BorderColor, #0076e0); }
  :host([theme="primary"][inverted]) button:hover, :host([theme="primary"][inverted]) button:focus {
    background: var(--rh-button--theme--primary-color--hover--Background, #004e94);
    color: var(--rh-button--theme--primary-color--hover--Color, #fff); }

:host([theme="primary"][bordered]) button {
  border-color: var(--rh-button--theme--primary-color--BorderColor, #0076e0); }
  :host([theme="primary"][bordered]) button:hover, :host([theme="primary"][bordered]) button:focus {
    border-color: var(--rh-button--theme--primary-color--hover--BorderColor, #004e94); }

:host([theme="primary"]) button:active,
:host([theme="primary"][unfilled]) button:active,
:host([theme="primary"][inverted]) button:active,
:host([theme="primary"][bordered]) button:active {
  background: var(--rh-button--theme--default-color--active--Background, #7551a6) !important;
  color: var(--rh-button--theme--default-color--active--Color, #fff) !important; }

:host([theme="secondary"]) button {
  background: var(--rh-button--theme--secondary-color--Background, #464646);
  color: var(--rh-button--theme--secondary-color--Color, #fff); }
  :host([theme="secondary"]) button:hover, :host([theme="secondary"]) button:focus {
    background: var(--rh-button--theme--secondary-color--hover--Background, #202020);
    color: var(--rh-button--theme--secondary-color--hover--Color, #fff); }

:host([theme="secondary"][unfilled]) button {
  background: transparent !important;
  color: var(--rh-button--theme--secondary-color--BorderColor, #464646); }
  :host([theme="secondary"][unfilled]) button:hover, :host([theme="secondary"][unfilled]) button:focus {
    background: var(--rh-button--theme--secondary-color--hover--Background, #202020) !important;
    color: var(--rh-button--theme--secondary-color--hover--Color, #fff); }

:host([theme="secondary"][inverted]) button {
  background: #fff;
  color: var(--rh-button--theme--secondary-color--BorderColor, #464646); }
  :host([theme="secondary"][inverted]) button:hover, :host([theme="secondary"][inverted]) button:focus {
    background: var(--rh-button--theme--secondary-color--hover--Background, #202020);
    color: var(--rh-button--theme--secondary-color--hover--Color, #fff); }

:host([theme="secondary"][bordered]) button {
  border-color: var(--rh-button--theme--secondary-color--BorderColor, #464646); }
  :host([theme="secondary"][bordered]) button:hover, :host([theme="secondary"][bordered]) button:focus {
    border-color: var(--rh-button--theme--secondary-color--hover--BorderColor, #202020); }

:host([theme="secondary"]) button:active,
:host([theme="secondary"][unfilled]) button:active,
:host([theme="secondary"][inverted]) button:active,
:host([theme="secondary"][bordered]) button:active {
  background: var(--rh-button--theme--default-color--active--Background, #7551a6) !important;
  color: var(--rh-button--theme--default-color--active--Color, #fff) !important; }

:host([theme="accent"]) button {
  background: var(--rh-button--theme--accent-color--Background, #3f9c35);
  color: var(--rh-button--theme--accent-color--Color, #fff); }
  :host([theme="accent"]) button:hover, :host([theme="accent"]) button:focus {
    background: var(--rh-button--theme--accent-color--hover--Background, #286322);
    color: var(--rh-button--theme--accent-color--hover--Color, #fff); }

:host([theme="accent"][unfilled]) button {
  background: transparent !important;
  color: var(--rh-button--theme--accent-color--BorderColor, #3f9c35); }
  :host([theme="accent"][unfilled]) button:hover, :host([theme="accent"][unfilled]) button:focus {
    background: var(--rh-button--theme--accent-color--hover--Background, #286322) !important;
    color: var(--rh-button--theme--accent-color--hover--Color, #fff); }

:host([theme="accent"][inverted]) button {
  background: #fff;
  color: var(--rh-button--theme--accent-color--BorderColor, #3f9c35); }
  :host([theme="accent"][inverted]) button:hover, :host([theme="accent"][inverted]) button:focus {
    background: var(--rh-button--theme--accent-color--hover--Background, #286322);
    color: var(--rh-button--theme--accent-color--hover--Color, #fff); }

:host([theme="accent"][bordered]) button {
  border-color: var(--rh-button--theme--accent-color--BorderColor, #3f9c35); }
  :host([theme="accent"][bordered]) button:hover, :host([theme="accent"][bordered]) button:focus {
    border-color: var(--rh-button--theme--accent-color--hover--BorderColor, #286322); }

:host([theme="accent"]) button:active,
:host([theme="accent"][unfilled]) button:active,
:host([theme="accent"][inverted]) button:active,
:host([theme="accent"][bordered]) button:active {
  background: var(--rh-button--theme--default-color--active--Background, #7551a6) !important;
  color: var(--rh-button--theme--default-color--active--Color, #fff) !important; }</style>
<button><slot></slot></button>
`;
/* end DO NOT EDIT */

class RhButton extends Rhelement {
  constructor() {
    super("rh-button", template);
  }
}

window.customElements.define("rh-button", RhButton);
