import { Component, forwardRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreSelect {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.class = 'basic';
        this.placeholder = 'Select an option';
        this.disabled = false;
        this.options = [];
        this.selectionChange = new EventEmitter();
        this.value = null;
        this.isOpen = false;
        this.selectedOption = null;
        this.highlightedOption = null;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    onDocumentClick(event) {
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
    selectOption(option) {
        if (!option.disabled) {
            this.value = option.value;
            this.selectedOption = option;
            this.isOpen = false;
            this.onChange(option.value);
            this.selectionChange.emit(option);
        }
    }
    onKeyDown(event) {
        if (this.disabled)
            return;
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (!this.isOpen) {
                    this.isOpen = true;
                    this.highlightedOption = this.selectedOption;
                }
                else if (this.highlightedOption) {
                    this.selectOption(this.highlightedOption);
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.isOpen = true;
                    this.highlightedOption = this.selectedOption || this.options[0];
                }
                else {
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
    highlightNext() {
        const currentIndex = this.options.indexOf(this.highlightedOption);
        const nextIndex = (currentIndex + 1) % this.options.length;
        this.highlightedOption = this.options[nextIndex];
    }
    highlightPrevious() {
        const currentIndex = this.options.indexOf(this.highlightedOption);
        const prevIndex = currentIndex <= 0 ? this.options.length - 1 : currentIndex - 1;
        this.highlightedOption = this.options[prevIndex];
    }
    trackByValue(index, option) {
        return option.value;
    }
    writeValue(value) {
        this.value = value;
        this.selectedOption = this.options.find(option => option.value === value) || null;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreSelect, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreSelect, isStandalone: true, selector: "sog-select", inputs: { class: "class", placeholder: "placeholder", disabled: "disabled", options: "options" }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreSelect),
                multi: true,
            },
        ], ngImport: i0, template: `
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
  `, isInline: true, styles: [".sog-select{position:relative;display:inline-block;width:100%}.sog-select.basic .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:10px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background-color .3s ease}.sog-select.basic .select-trigger:hover:not(.disabled){background:#e8e8e8}.sog-select.basic .select-trigger:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-select.basic .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border-radius:10px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.outlined .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:4px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:border-color .3s ease}.sog-select.outlined .select-trigger:hover:not(.disabled){border-color:#bbb}.sog-select.outlined .select-trigger:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-select.outlined .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.disabled .select-trigger{background:#e0e0e0!important;color:#999;cursor:not-allowed;border-color:#e0e0e0!important}.sog-select .select-value{flex:1;color:inherit}.sog-select .select-arrow{transition:transform .3s ease;color:#666}.sog-select .select-arrow.open{transform:rotate(180deg)}.sog-select .select-option{padding:12px 15px;cursor:pointer;transition:background-color .2s ease;font-size:14px}.sog-select .select-option:hover:not(.disabled){background:#f5f5f5}.sog-select .select-option.selected{background:#3498db;color:#fff}.sog-select .select-option.highlighted{background:#e3f2fd}.sog-select .select-option.disabled{color:#999;cursor:not-allowed}.sog-select .select-option:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.sog-select .select-option:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreSelect, decorators: [{
            type: Component,
            args: [{ selector: 'sog-select', standalone: true, imports: [CommonModule], template: `
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
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreSelect),
                            multi: true,
                        },
                    ], styles: [".sog-select{position:relative;display:inline-block;width:100%}.sog-select.basic .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:10px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background-color .3s ease}.sog-select.basic .select-trigger:hover:not(.disabled){background:#e8e8e8}.sog-select.basic .select-trigger:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-select.basic .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border-radius:10px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.outlined .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:4px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:border-color .3s ease}.sog-select.outlined .select-trigger:hover:not(.disabled){border-color:#bbb}.sog-select.outlined .select-trigger:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-select.outlined .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.disabled .select-trigger{background:#e0e0e0!important;color:#999;cursor:not-allowed;border-color:#e0e0e0!important}.sog-select .select-value{flex:1;color:inherit}.sog-select .select-arrow{transition:transform .3s ease;color:#666}.sog-select .select-arrow.open{transform:rotate(180deg)}.sog-select .select-option{padding:12px 15px;cursor:pointer;transition:background-color .2s ease;font-size:14px}.sog-select .select-option:hover:not(.disabled){background:#f5f5f5}.sog-select .select-option.selected{background:#3498db;color:#fff}.sog-select .select-option.highlighted{background:#e3f2fd}.sog-select .select-option.disabled{color:#999;cursor:not-allowed}.sog-select .select-option:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.sog-select .select-option:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { class: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZ25hdG9yZS11aS9zcmMvbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFjLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFvTnpFLE1BQU0sT0FBTyxlQUFlO0lBZTFCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFkakMsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixnQkFBVyxHQUFXLGtCQUFrQixDQUFDO1FBQ3pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFtQixFQUFFLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU3RCxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBQ2xCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBd0IsSUFBSSxDQUFDO1FBQzNDLHNCQUFpQixHQUF3QixJQUFJLENBQUM7UUFFOUMsYUFBUSxHQUF5QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUMsY0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUVZLENBQUM7SUFHOUMsZUFBZSxDQUFDLEtBQVk7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUss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QUFlO2tCQTVNM0IsU0FBUzsrQkFDRSxZQUFZLGNBQ1YsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLFlBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQ1QsYUFDVTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7K0VBNkpRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLGVBQWU7c0JBQXhCLE1BQU07Z0JBYVAsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPcHRpb24ge1xuICB2YWx1ZTogYW55O1xuICBsYWJlbDogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZy1zZWxlY3QnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic29nLXNlbGVjdFwiIFtuZ0NsYXNzXT1cIltjbGFzcywgeyAnZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ29wZW4nOiBpc09wZW4gfV1cIj5cbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzPVwic2VsZWN0LXRyaWdnZXJcIiBcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcbiAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IDBcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0LXZhbHVlXCI+XG4gICAgICAgICAge3sgc2VsZWN0ZWRPcHRpb24/LmxhYmVsIHx8IHBsYWNlaG9sZGVyIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1hcnJvd1wiIFtuZ0NsYXNzXT1cInsgJ29wZW4nOiBpc09wZW4gfVwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yIDRMNiA4TDEwIDRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiAqbmdJZj1cImlzT3BlblwiPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvblwiIFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeVZhbHVlXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7IFxuICAgICAgICAgICAgJ3NlbGVjdGVkJzogb3B0aW9uLnZhbHVlID09PSB2YWx1ZSwgXG4gICAgICAgICAgICAnZGlzYWJsZWQnOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICAgICAgICAnaGlnaGxpZ2h0ZWQnOiBvcHRpb24gPT09IGhpZ2hsaWdodGVkT3B0aW9uXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJoaWdobGlnaHRlZE9wdGlvbiA9IG9wdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uIGRpc2FibGVkXCIgKm5nSWY9XCJvcHRpb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgIE5vIG9wdGlvbnMgYXZhaWxhYmxlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU29nbmF0b3JlU2VsZWN0KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctc2VsZWN0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgJi5iYXNpYyB7XG4gICAgICAgICAgLnNlbGVjdC10cmlnZ2VyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggIzM0OThkYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnNlbGVjdC1kcm9wZG93biB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5vdXRsaW5lZCB7XG4gICAgICAgICAgLnNlbGVjdC10cmlnZ2VyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2JiYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAuc2VsZWN0LXRyaWdnZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZTBlMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc2VsZWN0LXZhbHVlIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc2VsZWN0LWFycm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIFxuICAgICAgICAgICYub3BlbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnNlbGVjdC1vcHRpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmhpZ2hsaWdodGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb2duYXRvcmVTZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnYmFzaWMnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdCBhbiBvcHRpb24nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXSA9IFtdO1xuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RPcHRpb24+KCk7XG4gIFxuICB2YWx1ZTogYW55ID0gbnVsbDtcbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHNlbGVjdGVkT3B0aW9uOiBTZWxlY3RPcHRpb24gfCBudWxsID0gbnVsbDtcbiAgaGlnaGxpZ2h0ZWRPcHRpb246IFNlbGVjdE9wdGlvbiB8IG51bGwgPSBudWxsO1xuICBcbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uID0gdGhpcy5zZWxlY3RlZE9wdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RPcHRpb24ob3B0aW9uOiBTZWxlY3RPcHRpb24pIHtcbiAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkNoYW5nZShvcHRpb24udmFsdWUpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChvcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG4gICAgXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkT3B0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRPcHRpb24pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbih0aGlzLmhpZ2hsaWdodGVkT3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkT3B0aW9uIHx8IHRoaXMub3B0aW9uc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRQcmV2aW91cygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlnaGxpZ2h0TmV4dCgpIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLm9wdGlvbnMuaW5kZXhPZih0aGlzLmhpZ2hsaWdodGVkT3B0aW9uISk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uID0gdGhpcy5vcHRpb25zW25leHRJbmRleF07XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodFByZXZpb3VzKCkge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleE9mKHRoaXMuaGlnaGxpZ2h0ZWRPcHRpb24hKTtcbiAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggPD0gMCA/IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxIDogY3VycmVudEluZGV4IC0gMTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uID0gdGhpcy5vcHRpb25zW3ByZXZJbmRleF07XG4gIH1cblxuICB0cmFja0J5VmFsdWUoaW5kZXg6IG51bWJlciwgb3B0aW9uOiBTZWxlY3RPcHRpb24pOiBhbnkge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlKSB8fCBudWxsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufSJdfQ==