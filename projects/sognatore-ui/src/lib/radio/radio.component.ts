import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sog-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="sog-radio" [ngClass]="[class, { 'disabled': disabled, 'checked': isChecked }]">
      <input
        type="radio"
        [name]="name"
        [value]="value"
        [checked]="isChecked"
        [disabled]="disabled"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="radio-input"
      />
      <div class="radio-circle">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SognatoreRadio),
      multi: true,
    },
  ],
  styles: [
    `
      .sog-radio {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        user-select: none;
        
        &.basic {
          .radio-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .radio-circle {
            width: 18px;
            height: 18px;
            border: 2px solid #ddd;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            margin-right: 8px;
            position: relative;
            
            .radio-dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: white;
              transform: scale(0);
              transition: all 0.2s ease;
            }
          }
          
          .radio-label {
            font-family: Roboto, sans-serif;
            font-size: 14px;
            color: #333;
            margin-left: 4px;
          }
          
          &:hover:not(.disabled) .radio-circle {
            border-color: #3498db;
          }
          
          &.checked .radio-circle {
            border-color: #3498db;
            background: #3498db;
            
            .radio-dot {
              transform: scale(1);
            }
          }
          
          &.disabled {
            cursor: not-allowed;
            
            .radio-circle {
              background: #f5f5f5;
              border-color: #e0e0e0;
            }
            
            .radio-label {
              color: #999;
            }
            
            &.checked .radio-circle {
              background: #e0e0e0;
              border-color: #e0e0e0;
              
              .radio-dot {
                background: #999;
              }
            }
          }
        }
        
        &.material {
          .radio-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .radio-circle {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(0, 0, 0, 0.54);
            border-radius: 50%;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            margin-right: 8px;
            position: relative;
            
            .radio-dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #3f51b5;
              transform: scale(0);
              transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            }
          }
          
          .radio-label {
            font-family: Roboto, sans-serif;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.87);
            margin-left: 4px;
          }
          
          &:hover:not(.disabled) .radio-circle {
            border-color: #3f51b5;
          }
          
          &.checked .radio-circle {
            border-color: #3f51b5;
            
            .radio-dot {
              transform: scale(1);
            }
          }
          
          &.disabled {
            cursor: not-allowed;
            
            .radio-circle {
              border-color: rgba(0, 0, 0, 0.26);
            }
            
            .radio-label {
              color: rgba(0, 0, 0, 0.38);
            }
            
            &.checked .radio-circle {
              .radio-dot {
                background: rgba(0, 0, 0, 0.26);
              }
            }
          }
        }
      }
    `,
  ],
})
export class SognatoreRadio implements ControlValueAccessor {
  @Input() class: string = 'basic';
  @Input() label: string = '';
  @Input() value: any = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  
  selectedValue: any = null;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  get isChecked(): boolean {
    return this.selectedValue === this.value;
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectedValue = this.value;
      this.onChange(this.value);
    }
  }

  writeValue(value: any): void {
    this.selectedValue = value;
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