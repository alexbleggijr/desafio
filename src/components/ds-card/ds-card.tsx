import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.scss',
  shadow: true,
})
export class DsCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
