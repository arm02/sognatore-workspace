import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'sog-input',
  imports: [CommonModule, FormsModule],
  template: `
    <input
      [type]="type"
      [name]="name"
      [placeholder]="placeholder"
      [required]="required"
      class="sog-input"
      [ngClass]="class"
      [value]="value"
      (input)="handleInput($event)"
      (blur)="onTouched()"
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SognatoreInput),
      multi: true,
    },
  ],
  styles: [
    `
      :host .sog-input {
        &.basic {
          font-family: Roboto, sans-serif;
          outline: 0;
          background: #f2f2f2;
          width: 100%;
          border: 0;
          margin: 0 0 15px;
          padding: 15px;
          box-sizing: border-box;
          font-size: 14px;
          border-radius: 10px;
        }
      }
    `,
  ],
})
export class SognatoreInput implements ControlValueAccessor {
  @Input() class: string = 'basic';
  @Input() type: string = 'text';
  @Input() name: string = 'name';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onChange(target.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
