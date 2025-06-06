import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
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
    <div class="sog-input-container" [ngClass]="getContainerClasses()">
      <label *ngIf="label" class="sog-input-label" [for]="inputId">{{ label }}</label>
      <div class="sog-input-wrapper">
        <span *ngIf="prefixIcon" class="sog-input-icon prefix">{{ prefixIcon }}</span>
        <input
          [id]="inputId"
          [type]="type"
          [name]="name"
          [placeholder]="placeholder"
          [required]="required"
          [disabled]="disabled"
          [readonly]="readonly"
          class="sog-input"
          [ngClass]="getInputClasses()"
          [value]="value"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)"
          (focus)="handleFocus($event)"
        />
        <span *ngIf="suffixIcon" class="sog-input-icon suffix">{{ suffixIcon }}</span>
      </div>
      <div *ngIf="helperText || errorMessage" class="sog-input-helper">
        <span *ngIf="errorMessage && state === 'error'" class="error-text">{{ errorMessage }}</span>
        <span *ngIf="helperText && state !== 'error'" class="helper-text">{{ helperText }}</span>
      </div>
    </div>
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
      .sog-input-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
      }
      
      .sog-input-label {
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
        margin-bottom: 0.25rem;
      }
      
      .sog-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
      
      .sog-input {
        width: 100%;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        background-color: white;
        transition: all 0.2s ease;
        font-family: inherit;
        line-height: 1.5;
        
      }
      
      .sog-input:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
      
      .sog-input:disabled {
        background-color: #f9fafb;
        color: #6b7280;
        cursor: not-allowed;
      }
      
      .sog-input:read-only {
        background-color: #f9fafb;
      }
      
      .sog-input.has-prefix {
        padding-left: 2.5rem;
      }
      
      .sog-input.has-suffix {
        padding-right: 2.5rem;
      }
      
      /* Sizes */
      .sog-input.small {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
      }
      
      .sog-input.small.has-prefix {
        padding-left: 2rem;
      }
      
      .sog-input.small.has-suffix {
        padding-right: 2rem;
      }
      
      .sog-input.large {
        padding: 1rem 1.25rem;
        font-size: 1.125rem;
      }
      
      .sog-input.large.has-prefix {
        padding-left: 3rem;
      }
      
      .sog-input.large.has-suffix {
        padding-right: 3rem;
      }
      
      /* Variants */
      .sog-input.outlined {
        border: 1px solid #d1d5db;
        background-color: white;
      }
      
      .sog-input.filled {
        border: 1px solid transparent;
        background-color: #f3f4f6;
      }
      
      .sog-input.filled:focus {
        background-color: white;
        border-color: #3b82f6;
      }
      
      .sog-input.underlined {
        border: none;
        border-bottom: 2px solid #d1d5db;
        border-radius: 0;
        background-color: transparent;
        padding-left: 0;
        padding-right: 0;
      }
      
      .sog-input.underlined:focus {
        border-bottom-color: #3b82f6;
        box-shadow: none;
      }
      
      /* States */
      .sog-input.error {
        border-color: #ef4444;
      }
      
      .sog-input.error:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }
      
      .sog-input.success {
        border-color: #10b981;
      }
      
      .sog-input.success:focus {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
      }
      
      .sog-input.warning {
        border-color: #f59e0b;
      }
      
      .sog-input.warning:focus {
        border-color: #f59e0b;
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
      }
      
      .sog-input-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #6b7280;
        font-size: 1rem;
        pointer-events: none;
        
      }
      
      .sog-input-icon.prefix {
        left: 0.75rem;
      }
      
      .sog-input-icon.suffix {
        right: 0.75rem;
      }
      
      .sog-input-helper {
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
      
      .error-text {
        color: #ef4444;
      }
      
      .helper-text {
        color: #6b7280;
      }
      
      /* Container size variants */
      .sog-input-container.small .sog-input-icon {
        font-size: 0.875rem;
      }
      
      .sog-input-container.small .sog-input-icon.prefix {
        left: 0.5rem;
      }
      
      .sog-input-container.small .sog-input-icon.suffix {
        right: 0.5rem;
      }
      
      .sog-input-container.large .sog-input-icon {
        font-size: 1.125rem;
      }
      
      .sog-input-container.large .sog-input-icon.prefix {
        left: 1rem;
      }
      
      .sog-input-container.large .sog-input-icon.suffix {
        right: 1rem;
      }
    `,
  ],
})
export class SognatoreInput implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() helperText: string = '';
  @Input() errorMessage: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'outlined' | 'filled' | 'underlined' = 'outlined';
  @Input() state: 'default' | 'error' | 'success' | 'warning' = 'default';
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() inputId: string = `sog-input-${Math.random().toString(36).substr(2, 9)}`;
  
  @Output() focus = new EventEmitter<Event>();
  @Output() blur = new EventEmitter<Event>();
  @Output() inputChange = new EventEmitter<string>();
  
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(target.value);
    this.inputChange.emit(target.value);
  }
  
  handleFocus(event: Event) {
    this.focus.emit(event);
  }
  
  handleBlur(event: Event) {
    this.onTouched();
    this.blur.emit(event);
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

  getContainerClasses(): string[] {
    const safeSize = typeof this.size === 'string' ? this.size : 'medium';
    const safeVariant = typeof this.variant === 'string' ? this.variant : 'outlined';
    const safeState = typeof this.state === 'string' ? this.state : 'default';
    
    return [safeSize, safeVariant, safeState];
  }

  getInputClasses(): string[] {
    const safeSize = typeof this.size === 'string' ? this.size : 'medium';
    const safeVariant = typeof this.variant === 'string' ? this.variant : 'outlined';
    const safeState = typeof this.state === 'string' ? this.state : 'default';
    
    const classes: string[] = [safeSize, safeVariant, safeState];
    
    if (this.prefixIcon) {
      classes.push('has-prefix');
    }
    
    if (this.suffixIcon) {
      classes.push('has-suffix');
    }
    
    return classes;
  }
}
