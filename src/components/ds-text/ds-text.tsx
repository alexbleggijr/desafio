import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-text',
  styleUrl: 'ds-text.scss',
  shadow: true,
})
export class DsText {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
