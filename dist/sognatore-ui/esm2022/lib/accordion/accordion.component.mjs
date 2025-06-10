import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreAccordion {
    constructor() {
        this.variant = 'basic';
        this.items = [];
        this.multiple = false;
        this.closeOthers = true;
        this.itemToggle = new EventEmitter();
        this.itemExpanded = new EventEmitter();
        this.itemCollapsed = new EventEmitter();
    }
    ngOnInit() {
        // Ensure only one item is expanded initially if multiple is false
        if (!this.multiple && this.closeOthers) {
            const expandedItems = this.items.filter(item => item.expanded);
            if (expandedItems.length > 1) {
                expandedItems.slice(1).forEach(item => item.expanded = false);
            }
        }
    }
    toggle(item, event) {
        if (event) {
            event.preventDefault();
        }
        if (item.disabled)
            return;
        const wasExpanded = item.expanded;
        // If closeOthers is true and we're expanding this item, close others
        if (!wasExpanded && this.closeOthers && !this.multiple) {
            this.items.forEach(i => {
                if (i !== item) {
                    i.expanded = false;
                }
            });
        }
        // Toggle the current item
        item.expanded = !wasExpanded;
        // Emit events
        this.itemToggle.emit({ item, expanded: item.expanded });
        if (item.expanded) {
            this.itemExpanded.emit(item);
        }
        else {
            this.itemCollapsed.emit(item);
        }
    }
    expand(itemId) {
        const item = this.items.find(i => i.id === itemId);
        if (item && !item.disabled && !item.expanded) {
            this.toggle(item);
        }
    }
    collapse(itemId) {
        const item = this.items.find(i => i.id === itemId);
        if (item && !item.disabled && item.expanded) {
            this.toggle(item);
        }
    }
    expandAll() {
        if (this.multiple) {
            this.items.forEach(item => {
                if (!item.disabled) {
                    item.expanded = true;
                }
            });
        }
    }
    collapseAll() {
        this.items.forEach(item => {
            if (!item.disabled) {
                item.expanded = false;
            }
        });
    }
    trackByFn(index, item) {
        return item.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreAccordion, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreAccordion, isStandalone: true, selector: "sog-accordion", inputs: { variant: "variant", items: "items", multiple: "multiple", closeOthers: "closeOthers" }, outputs: { itemToggle: "itemToggle", itemExpanded: "itemExpanded", itemCollapsed: "itemCollapsed" }, ngImport: i0, template: `
    <div class="sog-accordion" [ngClass]="variant">
      <div 
        class="accordion-item" 
        *ngFor="let item of items; trackBy: trackByFn"
        [ngClass]="{ 
          'expanded': item.expanded, 
          'disabled': item.disabled,
          'first': item === items[0],
          'last': item === items[items.length - 1]
        }"
      >
        <div 
          class="accordion-header" 
          (click)="toggle(item)"
          [attr.aria-expanded]="item.expanded"
          [attr.aria-controls]="'content-' + item.id"
          [attr.tabindex]="item.disabled ? -1 : 0"
          (keydown.enter)="toggle(item)"
          (keydown.space)="toggle(item, $event)"
        >
          <div class="header-content">
            <span class="accordion-title">{{ item.title }}</span>
            <ng-content [select]="'[slot=header-' + item.id + ']'"></ng-content>
          </div>
          
          <div class="accordion-icon" [ngClass]="{ 'expanded': item.expanded }">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 7.5L10 12.5L15 7.5" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div 
          class="accordion-content" 
          [attr.id]="'content-' + item.id"
          [attr.aria-labelledby]="'header-' + item.id"
          [style.height]="item.expanded ? 'auto' : '0'"
        >
          <div class="content-wrapper">
            <div *ngIf="item.content" class="default-content">{{ item.content }}</div>
            <ng-content [select]="'[slot=content-' + item.id + ']'"></ng-content>
            <ng-content [select]="'[slot=' + item.id + ']'"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-accordion{width:100%}.sog-accordion.basic .accordion-item{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:8px;overflow:hidden;transition:all .3s ease}.sog-accordion.basic .accordion-item.first{border-top-left-radius:8px;border-top-right-radius:8px}.sog-accordion.basic .accordion-item.last{border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-bottom:0}.sog-accordion.basic .accordion-item.expanded{box-shadow:0 2px 8px #0000001a}.sog-accordion.basic .accordion-item.disabled{opacity:.6;cursor:not-allowed}.sog-accordion.basic .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#f8f9fa;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.basic .accordion-item .accordion-header:hover:not(.disabled){background:#e9ecef}.sog-accordion.basic .accordion-item .accordion-header:focus{background:#e9ecef;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.basic .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.basic .accordion-item .accordion-header .header-content .accordion-title{font-weight:600;color:#333;font-size:16px}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.basic .accordion-item.expanded .accordion-header{background:#e9ecef;border-bottom:1px solid #e0e0e0}.sog-accordion.basic .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper{padding:20px}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.6}.sog-accordion.material .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.material .accordion-item:last-child{border-bottom:none}.sog-accordion.material .accordion-item.expanded{background:#f5f5f5}.sog-accordion.material .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:24px;background:transparent;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.material .accordion-item .accordion-header:hover:not(.disabled){background:#0000000a}.sog-accordion.material .accordion-item .accordion-header:focus{background:#0000000a}.sog-accordion.material .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.material .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#000000de;font-size:16px}.sog-accordion.material .accordion-item .accordion-header .accordion-icon{color:#0000008a;transition:transform .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.material .accordion-item .accordion-content{overflow:hidden;transition:height .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-content .content-wrapper{padding:0 24px 24px}.sog-accordion.material .accordion-item .accordion-content .content-wrapper .default-content{color:#0009;line-height:1.5}.sog-accordion.outlined{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.sog-accordion.outlined .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.outlined .accordion-item:last-child{border-bottom:none}.sog-accordion.outlined .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.outlined .accordion-item .accordion-header:hover:not(.disabled){background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-header:focus{background:#f8f9fa;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.outlined .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.outlined .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#333;font-size:15px}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.outlined .accordion-item.expanded .accordion-header{background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease;background:#fff}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper{padding:16px 20px}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.5}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreAccordion, decorators: [{
            type: Component,
            args: [{ selector: 'sog-accordion', standalone: true, imports: [CommonModule], template: `
    <div class="sog-accordion" [ngClass]="variant">
      <div 
        class="accordion-item" 
        *ngFor="let item of items; trackBy: trackByFn"
        [ngClass]="{ 
          'expanded': item.expanded, 
          'disabled': item.disabled,
          'first': item === items[0],
          'last': item === items[items.length - 1]
        }"
      >
        <div 
          class="accordion-header" 
          (click)="toggle(item)"
          [attr.aria-expanded]="item.expanded"
          [attr.aria-controls]="'content-' + item.id"
          [attr.tabindex]="item.disabled ? -1 : 0"
          (keydown.enter)="toggle(item)"
          (keydown.space)="toggle(item, $event)"
        >
          <div class="header-content">
            <span class="accordion-title">{{ item.title }}</span>
            <ng-content [select]="'[slot=header-' + item.id + ']'"></ng-content>
          </div>
          
          <div class="accordion-icon" [ngClass]="{ 'expanded': item.expanded }">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 7.5L10 12.5L15 7.5" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div 
          class="accordion-content" 
          [attr.id]="'content-' + item.id"
          [attr.aria-labelledby]="'header-' + item.id"
          [style.height]="item.expanded ? 'auto' : '0'"
        >
          <div class="content-wrapper">
            <div *ngIf="item.content" class="default-content">{{ item.content }}</div>
            <ng-content [select]="'[slot=content-' + item.id + ']'"></ng-content>
            <ng-content [select]="'[slot=' + item.id + ']'"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `, styles: [".sog-accordion{width:100%}.sog-accordion.basic .accordion-item{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:8px;overflow:hidden;transition:all .3s ease}.sog-accordion.basic .accordion-item.first{border-top-left-radius:8px;border-top-right-radius:8px}.sog-accordion.basic .accordion-item.last{border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-bottom:0}.sog-accordion.basic .accordion-item.expanded{box-shadow:0 2px 8px #0000001a}.sog-accordion.basic .accordion-item.disabled{opacity:.6;cursor:not-allowed}.sog-accordion.basic .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#f8f9fa;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.basic .accordion-item .accordion-header:hover:not(.disabled){background:#e9ecef}.sog-accordion.basic .accordion-item .accordion-header:focus{background:#e9ecef;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.basic .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.basic .accordion-item .accordion-header .header-content .accordion-title{font-weight:600;color:#333;font-size:16px}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.basic .accordion-item.expanded .accordion-header{background:#e9ecef;border-bottom:1px solid #e0e0e0}.sog-accordion.basic .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper{padding:20px}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.6}.sog-accordion.material .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.material .accordion-item:last-child{border-bottom:none}.sog-accordion.material .accordion-item.expanded{background:#f5f5f5}.sog-accordion.material .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:24px;background:transparent;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.material .accordion-item .accordion-header:hover:not(.disabled){background:#0000000a}.sog-accordion.material .accordion-item .accordion-header:focus{background:#0000000a}.sog-accordion.material .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.material .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#000000de;font-size:16px}.sog-accordion.material .accordion-item .accordion-header .accordion-icon{color:#0000008a;transition:transform .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.material .accordion-item .accordion-content{overflow:hidden;transition:height .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-content .content-wrapper{padding:0 24px 24px}.sog-accordion.material .accordion-item .accordion-content .content-wrapper .default-content{color:#0009;line-height:1.5}.sog-accordion.outlined{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.sog-accordion.outlined .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.outlined .accordion-item:last-child{border-bottom:none}.sog-accordion.outlined .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.outlined .accordion-item .accordion-header:hover:not(.disabled){background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-header:focus{background:#f8f9fa;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.outlined .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.outlined .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#333;font-size:15px}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.outlined .accordion-item.expanded .accordion-header{background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease;background:#fff}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper{padding:16px 20px}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.5}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], items: [{
                type: Input
            }], multiple: [{
                type: Input
            }], closeOthers: [{
                type: Input
            }], itemToggle: [{
                type: Output
            }], itemExpanded: [{
                type: Output
            }], itemCollapsed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZ25hdG9yZS11aS9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUEwVC9DLE1BQU0sT0FBTyxrQkFBa0I7SUFoVC9CO1FBaVRXLFlBQU8sR0FBc0MsT0FBTyxDQUFDO1FBQ3JELFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUE4QyxDQUFDO1FBQzVFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDakQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztLQThFN0Q7SUE1RUMsUUFBUTtRQUNOLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUM3QixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEUsQ0FBQztRQUNILENB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QUFrQixnUkE1U25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFEVCx1NEpBdERTLFlBQVk7OzRGQTZTWCxrQkFBa0I7a0JBaFQ5QixTQUFTOytCQUNFLGVBQWUsY0FDYixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsWUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRFQ7OEJBd1BRLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBBY2NvcmRpb25JdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBleHBhbmRlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZy1hY2NvcmRpb24nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic29nLWFjY29yZGlvblwiIFtuZ0NsYXNzXT1cInZhcmlhbnRcIj5cbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWl0ZW1cIiBcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgXG4gICAgICAgICAgJ2V4cGFuZGVkJzogaXRlbS5leHBhbmRlZCwgXG4gICAgICAgICAgJ2Rpc2FibGVkJzogaXRlbS5kaXNhYmxlZCxcbiAgICAgICAgICAnZmlyc3QnOiBpdGVtID09PSBpdGVtc1swXSxcbiAgICAgICAgICAnbGFzdCc6IGl0ZW0gPT09IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoaXRlbSlcIlxuICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiaXRlbS5leHBhbmRlZFwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCInY29udGVudC0nICsgaXRlbS5pZFwiXG4gICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiaXRlbS5kaXNhYmxlZCA/IC0xIDogMFwiXG4gICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwidG9nZ2xlKGl0ZW0pXCJcbiAgICAgICAgICAoa2V5ZG93bi5zcGFjZSk9XCJ0b2dnbGUoaXRlbSwgJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjb3JkaW9uLXRpdGxlXCI+e3sgaXRlbS50aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IFtzZWxlY3RdPVwiJ1tzbG90PWhlYWRlci0nICsgaXRlbS5pZCArICddJ1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWljb25cIiBbbmdDbGFzc109XCJ7ICdleHBhbmRlZCc6IGl0ZW0uZXhwYW5kZWQgfVwiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxwYXRoIFxuICAgICAgICAgICAgICAgIGQ9XCJNNSA3LjVMMTAgMTIuNUwxNSA3LjVcIiBcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzcz1cImFjY29yZGlvbi1jb250ZW50XCIgXG4gICAgICAgICAgW2F0dHIuaWRdPVwiJ2NvbnRlbnQtJyArIGl0ZW0uaWRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInaGVhZGVyLScgKyBpdGVtLmlkXCJcbiAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cIml0ZW0uZXhwYW5kZWQgPyAnYXV0bycgOiAnMCdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uY29udGVudFwiIGNsYXNzPVwiZGVmYXVsdC1jb250ZW50XCI+e3sgaXRlbS5jb250ZW50IH19PC9kaXY+XG4gICAgICAgICAgICA8bmctY29udGVudCBbc2VsZWN0XT1cIidbc2xvdD1jb250ZW50LScgKyBpdGVtLmlkICsgJ10nXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgW3NlbGVjdF09XCInW3Nsb3Q9JyArIGl0ZW0uaWQgKyAnXSdcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctYWNjb3JkaW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIFxuICAgICAgICAmLmJhc2ljIHtcbiAgICAgICAgICAuYWNjb3JkaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmxhc3Qge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzM0OThkYjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuYWNjb3JkaW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5hY2NvcmRpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuZXhwYW5kZWQgLmFjY29yZGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmFjY29yZGlvbi1jb250ZW50IHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmRlZmF1bHQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLm1hdGVyaWFsIHtcbiAgICAgICAgICAuYWNjb3JkaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5hY2NvcmRpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmFjY29yZGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuYWNjb3JkaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYWNjb3JkaW9uLWNvbnRlbnQge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHggMjRweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuZGVmYXVsdC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5vdXRsaW5lZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcbiAgICAgICAgICAuYWNjb3JkaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmFjY29yZGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMzQ5OGRiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5hY2NvcmRpb24tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmFjY29yZGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5leHBhbmRlZCAuYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5hY2NvcmRpb24tY29udGVudCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5kZWZhdWx0LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvZ25hdG9yZUFjY29yZGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdiYXNpYycgfCAnbWF0ZXJpYWwnIHwgJ291dGxpbmVkJyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIGl0ZW1zOiBBY2NvcmRpb25JdGVtW10gPSBbXTtcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY2xvc2VPdGhlcnM6IGJvb2xlYW4gPSB0cnVlO1xuICBcbiAgQE91dHB1dCgpIGl0ZW1Ub2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbTogQWNjb3JkaW9uSXRlbTsgZXhwYW5kZWQ6IGJvb2xlYW4gfT4oKTtcbiAgQE91dHB1dCgpIGl0ZW1FeHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWNjb3JkaW9uSXRlbT4oKTtcbiAgQE91dHB1dCgpIGl0ZW1Db2xsYXBzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFjY29yZGlvbkl0ZW0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gRW5zdXJlIG9ubHkgb25lIGl0ZW0gaXMgZXhwYW5kZWQgaW5pdGlhbGx5IGlmIG11bHRpcGxlIGlzIGZhbHNlXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIHRoaXMuY2xvc2VPdGhlcnMpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVkSXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uZXhwYW5kZWQpO1xuICAgICAgaWYgKGV4cGFuZGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBleHBhbmRlZEl0ZW1zLnNsaWNlKDEpLmZvckVhY2goaXRlbSA9PiBpdGVtLmV4cGFuZGVkID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZShpdGVtOiBBY2NvcmRpb25JdGVtLCBldmVudD86IEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2FzRXhwYW5kZWQgPSBpdGVtLmV4cGFuZGVkO1xuICAgIFxuICAgIC8vIElmIGNsb3NlT3RoZXJzIGlzIHRydWUgYW5kIHdlJ3JlIGV4cGFuZGluZyB0aGlzIGl0ZW0sIGNsb3NlIG90aGVyc1xuICAgIGlmICghd2FzRXhwYW5kZWQgJiYgdGhpcy5jbG9zZU90aGVycyAmJiAhdGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICBpZiAoaSAhPT0gaXRlbSkge1xuICAgICAgICAgIGkuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRvZ2dsZSB0aGUgY3VycmVudCBpdGVtXG4gICAgaXRlbS5leHBhbmRlZCA9ICF3YXNFeHBhbmRlZDtcbiAgICBcbiAgICAvLyBFbWl0IGV2ZW50c1xuICAgIHRoaXMuaXRlbVRvZ2dsZS5lbWl0KHsgaXRlbSwgZXhwYW5kZWQ6IGl0ZW0uZXhwYW5kZWQgfSk7XG4gICAgXG4gICAgaWYgKGl0ZW0uZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuaXRlbUV4cGFuZGVkLmVtaXQoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbUNvbGxhcHNlZC5lbWl0KGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZChpdGVtSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoaSA9PiBpLmlkID09PSBpdGVtSWQpO1xuICAgIGlmIChpdGVtICYmICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmV4cGFuZGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZShpdGVtSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoaSA9PiBpLmlkID09PSBpdGVtSWQpO1xuICAgIGlmIChpdGVtICYmICFpdGVtLmRpc2FibGVkICYmIGl0ZW0uZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZEFsbCgpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICBpdGVtLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VBbGwoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgIGl0ZW0uZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyLCBpdGVtOiBBY2NvcmRpb25JdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxufSJdfQ==