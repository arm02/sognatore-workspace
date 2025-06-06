import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sog-datepicker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sog-datepicker" [ngClass]="class">
      <input
        type="date"
        [value]="value"
        [min]="min"
        [max]="max"
        [disabled]="disabled"
        [placeholder]="placeholder"
        class="datepicker-input"
        (input)="handleInput($event)"
        (blur)="onTouched()"
      />
      <div class="datepicker-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SognatoreDatepicker),
      multi: true,
    },
  ],
  styles: [
    `
      .sog-datepicker {
        position: relative;
        display: inline-block;
        width: 100%;
        
        &.basic {
          .datepicker-input {
            font-family: Roboto, sans-serif;
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0;
            padding: 15px 45px 15px 15px;
            box-sizing: border-box;
            font-size: 14px;
            border-radius: 10px;
            color: #333;
            
            &:focus {
              background: #e8e8e8;
              box-shadow: 0 0 0 2px #3498db;
            }
            
            &:disabled {
              background: #e0e0e0;
              color: #999;
              cursor: not-allowed;
            }
          }
          
          .datepicker-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            pointer-events: none;
          }
        }
        
        &.outlined {
          .datepicker-input {
            font-family: Roboto, sans-serif;
            outline: 0;
            background: white;
            width: 100%;
            border: 1px solid #ddd;
            margin: 0;
            padding: 15px 45px 15px 15px;
            box-sizing: border-box;
            font-size: 14px;
            border-radius: 4px;
            color: #333;
            transition: border-color 0.3s ease;
            
            &:focus {
              border-color: #3498db;
              box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
            }
            
            &:disabled {
              background: #f5f5f5;
              border-color: #e0e0e0;
              color: #999;
              cursor: not-allowed;
            }
          }
          
          .datepicker-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            pointer-events: none;
          }
        }
      }
    `,
  ],
})
export class SognatoreDatepicker implements ControlValueAccessor {
  @Input() class: string = 'basic';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() min: string = '';
  @Input() max: string = '';
  
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(target.value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}