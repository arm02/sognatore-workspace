import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sog-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="sog-checkbox" [ngClass]="[class, { 'disabled': disabled, 'checked': checked }]">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="checkbox-input"
      />
      <div class="checkbox-box">
        <svg 
          class="checkbox-icon" 
          [ngClass]="{ 'visible': checked || indeterminate }"
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            *ngIf="!indeterminate"
            d="M2 6L5 9L10 3" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
          <path 
            *ngIf="indeterminate"
            d="M3 6H9" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round"
          />
        </svg>
      </div>
      <span class="checkbox-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SognatoreCheckbox),
      multi: true,
    },
  ],
  styles: [
    `
      .sog-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        user-select: none;
        
        &.basic {
          .checkbox-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .checkbox-box {
            width: 18px;
            height: 18px;
            border: 2px solid #ddd;
            border-radius: 3px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            margin-right: 8px;
            
            .checkbox-icon {
              color: white;
              opacity: 0;
              transform: scale(0.5);
              transition: all 0.2s ease;
              
              &.visible {
                opacity: 1;
                transform: scale(1);
              }
            }
          }
          
          .checkbox-label {
            font-family: Roboto, sans-serif;
            font-size: 14px;
            color: #333;
            margin-left: 4px;
          }
          
          &:hover:not(.disabled) .checkbox-box {
            border-color: #3498db;
          }
          
          &.checked .checkbox-box {
            background: #3498db;
            border-color: #3498db;
          }
          
          &.disabled {
            cursor: not-allowed;
            
            .checkbox-box {
              background: #f5f5f5;
              border-color: #e0e0e0;
            }
            
            .checkbox-label {
              color: #999;
            }
            
            &.checked .checkbox-box {
              background: #e0e0e0;
              border-color: #e0e0e0;
              
              .checkbox-icon {
                color: #999;
              }
            }
          }
        }
        
        &.material {
          .checkbox-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .checkbox-box {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(0, 0, 0, 0.54);
            border-radius: 2px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            margin-right: 8px;
            
            .checkbox-icon {
              color: white;
              opacity: 0;
              transform: scale(0);
              transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
              
              &.visible {
                opacity: 1;
                transform: scale(1);
              }
            }
          }
          
          .checkbox-label {
            font-family: Roboto, sans-serif;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.87);
            margin-left: 4px;
          }
          
          &:hover:not(.disabled) .checkbox-box {
            border-color: #3f51b5;
          }
          
          &.checked .checkbox-box {
            background: #3f51b5;
            border-color: #3f51b5;
          }
          
          &.disabled {
            cursor: not-allowed;
            
            .checkbox-box {
              border-color: rgba(0, 0, 0, 0.26);
            }
            
            .checkbox-label {
              color: rgba(0, 0, 0, 0.38);
            }
            
            &.checked .checkbox-box {
              background: rgba(0, 0, 0, 0.26);
              border-color: rgba(0, 0, 0, 0.26);
            }
          }
        }
      }
    `,
  ],
})
export class SognatoreCheckbox implements ControlValueAccessor {
  @Input() class: string = 'basic';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() indeterminate: boolean = false;
  
  checked: boolean = false;
  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.indeterminate = false;
    this.onChange(this.checked);
  }

  writeValue(value: boolean): void {
    this.checked = value || false;
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