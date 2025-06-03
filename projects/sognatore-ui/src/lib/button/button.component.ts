import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sog-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="sog-button" [ngClass]="appearance">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .sog-button {
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        &.primary {
          background-color: #3498db;
          color: white;
        }
        &.default {
          background-color: #f2f2f2;
          color: black;
        }
      }
    `,
  ],
})
export class SognatoreButton {
  @Input() appearance: string = 'default';
}
