import { Component, forwardRef, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: any;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'sog-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sog-select" [ngClass]="[class, { 'disabled': disabled, 'open': isOpen }]">
      <div 
        class="select-trigger" 
        (click)="toggle()"
        [attr.tabindex]="disabled ? -1 : 0"
        (keydown)="onKeyDown($event)"
      >
        <span class="select-value">
          {{ selectedOption?.label || placeholder }}
        </span>
        <div class="select-arrow" [ngClass]="{ 'open': isOpen }">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div class="select-dropdown" *ngIf="isOpen">
        <div 
          class="select-option" 
          *ngFor="let option of options; trackBy: trackByValue"
          [ngClass]="{ 
            'selected': option.value === value, 
            'disabled': option.disabled,
            'highlighted': option === highlightedOption
          }"
          (click)="selectOption(option)"
          (mouseenter)="highlightedOption = option"
        >
          {{ option.label }}
        </div>
        <div class="select-option disabled" *ngIf="options.length === 0">
          No options available
        </div>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SognatoreSelect),
      multi: true,
    },
  ],
  styles: [
    `
      .sog-select {
        position: relative;
        display: inline-block;
        width: 100%;
        
        &.basic {
          .select-trigger {
            font-family: Roboto, sans-serif;
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s ease;
            
            &:hover:not(.disabled) {
              background: #e8e8e8;
            }
            
            &:focus {
              background: #e8e8e8;
              box-shadow: 0 0 0 2px #3498db;
            }
          }
          
          .select-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            margin-top: 4px;
            max-height: 200px;
            overflow-y: auto;
          }
        }
        
        &.outlined {
          .select-trigger {
            font-family: Roboto, sans-serif;
            outline: 0;
            background: white;
            width: 100%;
            border: 1px solid #ddd;
            margin: 0;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: border-color 0.3s ease;
            
            &:hover:not(.disabled) {
              border-color: #bbb;
            }
            
            &:focus {
              border-color: #3498db;
              box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
            }
          }
          
          .select-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            margin-top: 4px;
            max-height: 200px;
            overflow-y: auto;
          }
        }
        
        &.disabled {
          .select-trigger {
            background: #e0e0e0 !important;
            color: #999;
            cursor: not-allowed;
            border-color: #e0e0e0 !important;
          }
        }
        
        .select-value {
          flex: 1;
          color: inherit;
        }
        
        .select-arrow {
          transition: transform 0.3s ease;
          color: #666;
          
          &.open {
            transform: rotate(180deg);
          }
        }
        
        .select-option {
          padding: 12px 15px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          font-size: 14px;
          
          &:hover:not(.disabled) {
            background: #f5f5f5;
          }
          
          &.selected {
            background: #3498db;
            color: white;
          }
          
          &.highlighted {
            background: #e3f2fd;
          }
          
          &.disabled {
            color: #999;
            cursor: not-allowed;
          }
          
          &:first-child {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
          }
          
          &:last-child {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
          }
        }
      }
    `,
  ],
})
export class SognatoreSelect implements ControlValueAccessor {
  @Input() class: string = 'basic';
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  @Input() options: SelectOption[] = [];
  @Output() selectionChange = new EventEmitter<SelectOption>();
  
  value: any = null;
  isOpen: boolean = false;
  selectedOption: SelectOption | null = null;
  highlightedOption: SelectOption | null = null;
  
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen && this.selectedOption) {
        this.highlightedOption = this.selectedOption;
      }
    }
  }

  selectOption(option: SelectOption) {
    if (!option.disabled) {
      this.value = option.value;
      this.selectedOption = option;
      this.isOpen = false;
      this.onChange(option.value);
      this.selectionChange.emit(option);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;
    
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!this.isOpen) {
          this.isOpen = true;
          this.highlightedOption = this.selectedOption;
        } else if (this.highlightedOption) {
          this.selectOption(this.highlightedOption);
        }
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.isOpen = true;
          this.highlightedOption = this.selectedOption || this.options[0];
        } else {
          this.highlightNext();
        }
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        if (this.isOpen) {
          this.highlightPrevious();
        }
        break;
        
      case 'Escape':
        this.isOpen = false;
        break;
    }
  }

  private highlightNext() {
    const currentIndex = this.options.indexOf(this.highlightedOption!);
    const nextIndex = (currentIndex + 1) % this.options.length;
    this.highlightedOption = this.options[nextIndex];
  }

  private highlightPrevious() {
    const currentIndex = this.options.indexOf(this.highlightedOption!);
    const prevIndex = currentIndex <= 0 ? this.options.length - 1 : currentIndex - 1;
    this.highlightedOption = this.options[prevIndex];
  }

  trackByValue(index: number, option: SelectOption): any {
    return option.value;
  }

  writeValue(value: any): void {
    this.value = value;
    this.selectedOption = this.options.find(option => option.value === value) || null;
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