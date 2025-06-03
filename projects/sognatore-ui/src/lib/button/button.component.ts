import { Component, Input } from '@angular/core';

@Component({
  selector: 'sog-button',
  standalone: true,
  template: `@if(appearance === 'primary') {
    <button class="sog-button">
      <ng-content></ng-content>
    </button>
    } @else {
    <button>
      <ng-content></ng-content>
    </button>
    }`,
  styles: [
    `
      .sog-button {
        background-color: #3498db;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }
    `,
  ],
})
export class SognatoreButtonComponent {
  @Input() appearance: string = 'primary';
}
