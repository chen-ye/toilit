import {LitElement, html, css} from 'https://cdn.skypack.dev/lit';
import memoize from 'https://cdn.skypack.dev/memoize-one';
import applyDefaultValues from '../toilit-lib/toilit-apply-default-values.js';
import '../toilit-styles/toilit-styles.js';

export class ToilitComponent extends LitElement {
  static get properties() {
    return {
      stringProperty: {
        type: String,
        value: 'Default String',
      },
      numberAProperty: {
        type: Number,
        value: 16,
      },
      numberBProperty: {
        type: Number,
        value: 16,
      },
      _summedProperty: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    applyDefaultValues(this);
    this._computeSummedProperty = memoize(this._computeSummedProperty);
  }

  _computeSummedProperty(numberAProperty, numberBProperty) {
    return numberAProperty + numberBProperty;
  }

  update(changedProperties) {
    this._summedProperty = this._computeSummedProperty(this.numberAProperty, this.numberBProperty);

    super.update(changedProperties);
  }

  static get styles() {
    return css`
      :host {
        color: var(--toilit-swatch-teal-300);
      }
    `;
  }

  render() {
    return html`
      <h2>Hello, world!</h2>
      <p>
        String: ${this.stringProperty}
      </p>
      <p>
        Numbers: ${this.numberAProperty} + ${this.numberBProperty} = ${this._summedProperty}
      </p>
    `
  }
}
export const tagName = 'toilit-component';
customElements.define(tagName, ToilitComponent);