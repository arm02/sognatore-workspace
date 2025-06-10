import { Component, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreTab {
    constructor() {
        this.id = '';
        this.label = '';
        this.disabled = false;
        this.icon = '';
        this.closable = false;
        this.active = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTab, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreTab, isStandalone: true, selector: "sog-tab", inputs: { id: "id", label: "label", disabled: "disabled", icon: "icon", closable: "closable", active: "active" }, ngImport: i0, template: `
    <div class="tab-content" [style.display]="active ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".tab-content{padding:16px 0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTab, decorators: [{
            type: Component,
            args: [{ selector: 'sog-tab', standalone: true, imports: [CommonModule], template: `
    <div class="tab-content" [style.display]="active ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `, styles: [".tab-content{padding:16px 0}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], closable: [{
                type: Input
            }], active: [{
                type: Input
            }] } });
export class SognatoreTabs {
    constructor() {
        this.variant = 'basic';
        this.position = 'top';
        this.tabs = [];
        this.activeTabId = '';
        this.scrollable = false;
        this.tabChange = new EventEmitter();
        this.tabClose = new EventEmitter();
        this.canScrollLeft = false;
        this.canScrollRight = false;
    }
    ngOnInit() {
        // Set initial active tab if not specified
        if (!this.activeTabId && this.tabs.length > 0) {
            const firstEnabledTab = this.tabs.find(tab => !tab.disabled);
            if (firstEnabledTab) {
                this.activeTabId = firstEnabledTab.id;
            }
        }
    }
    ngAfterContentInit() {
        // Handle content children tabs
        if (this.tabComponents.length > 0) {
            this.updateTabsFromContent();
            this.tabComponents.changes.subscribe(() => {
                this.updateTabsFromContent();
            });
        }
    }
    updateTabsFromContent() {
        const contentTabs = this.tabComponents.toArray();
        // Set active tab for content children
        if (!this.activeTabId && contentTabs.length > 0) {
            const firstEnabledTab = contentTabs.find(tab => !tab.disabled);
            if (firstEnabledTab) {
                this.activeTabId = firstEnabledTab.id;
            }
        }
        // Update active state
        contentTabs.forEach(tab => {
            tab.active = tab.id === this.activeTabId;
        });
    }
    selectTab(tab, event) {
        if (event) {
            event.preventDefault();
        }
        if (tab.disabled)
            return;
        this.activeTabId = tab.id;
        // Update content children if they exist
        if (this.tabComponents) {
            this.tabComponents.forEach(tabComponent => {
                tabComponent.active = tabComponent.id === this.activeTabId;
            });
        }
        this.tabChange.emit(tab.id);
    }
    closeTab(tab, event) {
        event.stopPropagation();
        if (tab.disabled)
            return;
        // If closing the active tab, select another one
        if (tab.id === this.activeTabId) {
            const currentIndex = this.tabs.findIndex(t => t.id === tab.id);
            const nextTab = this.tabs[currentIndex + 1] || this.tabs[currentIndex - 1];
            if (nextTab && !nextTab.disabled) {
                this.selectTab(nextTab);
            }
        }
        this.tabClose.emit(tab.id);
    }
    scrollLeft() {
        const container = document.querySelector('.scroll-container');
        if (container) {
            container.scrollBy({ left: -200, behavior: 'smooth' });
        }
    }
    scrollRight() {
        const container = document.querySelector('.scroll-container');
        if (container) {
            container.scrollBy({ left: 200, behavior: 'smooth' });
        }
    }
    trackByFn(index, tab) {
        return tab.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTabs, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreTabs, isStandalone: true, selector: "sog-tabs", inputs: { variant: "variant", position: "position", tabs: "tabs", activeTabId: "activeTabId", scrollable: "scrollable" }, outputs: { tabChange: "tabChange", tabClose: "tabClose" }, queries: [{ propertyName: "tabComponents", predicate: SognatoreTab }], ngImport: i0, template: `
    <div class="sog-tabs" [ngClass]="[variant, position]">
      <!-- Tab Navigation -->
      <div class="tabs-nav" [ngClass]="{ 'scrollable': scrollable }">
        <div class="scroll-container">
          <div 
            class="tab-item" 
            *ngFor="let tab of tabs; trackBy: trackByFn"
            [ngClass]="{ 
              'active': tab.id === activeTabId, 
              'disabled': tab.disabled 
            }"
            (click)="selectTab(tab)"
            [attr.tabindex]="tab.disabled ? -1 : 0"
            (keydown.enter)="selectTab(tab)"
            (keydown.space)="selectTab(tab, $event)"
          >
            <span class="tab-icon" *ngIf="tab.icon" [innerHTML]="tab.icon"></span>
            <span class="tab-label">{{ tab.label }}</span>
            <button 
              *ngIf="tab.closable" 
              class="tab-close"
              (click)="closeTab(tab, $event)"
              [attr.aria-label]="'Close ' + tab.label"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Scroll buttons for horizontal scrollable tabs -->
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button left"
          (click)="scrollLeft()"
          [disabled]="!canScrollLeft"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button right"
          (click)="scrollRight()"
          [disabled]="!canScrollRight"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <!-- Tab Content -->
      <div class="tabs-content">
        <ng-content></ng-content>
        
        <!-- Dynamic content if using tabs array -->
        <div 
          *ngFor="let tab of tabs; trackBy: trackByFn"
          class="tab-panel"
          [style.display]="tab.id === activeTabId ? 'block' : 'none'"
          [attr.id]="'panel-' + tab.id"
          [attr.aria-labelledby]="'tab-' + tab.id"
          role="tabpanel"
        >
          <ng-content [select]="'[slot=' + tab.id + ']'"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-tabs{width:100%}.sog-tabs.top .tabs-nav{border-bottom:1px solid #e0e0e0}.sog-tabs.bottom{display:flex;flex-direction:column-reverse}.sog-tabs.bottom .tabs-nav{border-top:1px solid #e0e0e0;border-bottom:none}.sog-tabs.left{display:flex}.sog-tabs.left .tabs-nav{flex-direction:column;border-right:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.left .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.left .tabs-content{flex:1;padding-left:16px}.sog-tabs.right{display:flex;flex-direction:row-reverse}.sog-tabs.right .tabs-nav{flex-direction:column;border-left:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.right .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.right .tabs-content{flex:1;padding-right:16px}.sog-tabs.basic .tabs-nav{display:flex;position:relative}.sog-tabs.basic .tabs-nav.scrollable{overflow:hidden}.sog-tabs.basic .tabs-nav.scrollable .scroll-container{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.sog-tabs.basic .tabs-nav.scrollable .scroll-container::-webkit-scrollbar{display:none}.sog-tabs.basic .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.basic .tabs-nav .tab-item{display:flex;align-items:center;padding:12px 16px;cursor:pointer;font-weight:500;color:#666;border-bottom:2px solid transparent;transition:all .2s ease;white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none}.sog-tabs.basic .tabs-nav .tab-item:hover:not(.disabled){color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item:focus{color:#3498db;box-shadow:inset 0 0 0 2px #3498db}.sog-tabs.basic .tabs-nav .tab-item.active{color:#3498db;border-bottom-color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item.disabled{color:#999;cursor:not-allowed}.sog-tabs.basic .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.basic .tabs-nav .tab-item .tab-label{margin-right:8px}.sog-tabs.basic .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:2px;border-radius:2px;color:#666;display:flex;align-items:center;justify-content:center}.sog-tabs.basic .tabs-nav .tab-item .tab-close:hover{background:#0000001a;color:#333}.sog-tabs.basic .tabs-nav .scroll-button{position:absolute;top:50%;transform:translateY(-50%);background:#fff;border:1px solid #e0e0e0;border-radius:4px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1}.sog-tabs.basic .tabs-nav .scroll-button.left{left:0}.sog-tabs.basic .tabs-nav .scroll-button.right{right:0}.sog-tabs.basic .tabs-nav .scroll-button:hover:not(:disabled){background:#f8f9fa}.sog-tabs.basic .tabs-nav .scroll-button:disabled{opacity:.5;cursor:not-allowed}.sog-tabs.basic .tabs-content{padding:16px 0}.sog-tabs.material .tabs-nav{display:flex;position:relative;background:#f5f5f5}.sog-tabs.material .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.material .tabs-nav .tab-item{display:flex;align-items:center;padding:16px 24px;cursor:pointer;font-weight:500;color:#0009;text-transform:uppercase;font-size:14px;letter-spacing:.5px;border-bottom:2px solid transparent;transition:all .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none;min-height:48px}.sog-tabs.material .tabs-nav .tab-item:hover:not(.disabled){color:#3f51b5;background:#3f51b50a}.sog-tabs.material .tabs-nav .tab-item:focus{color:#3f51b5;background:#3f51b51f}.sog-tabs.material .tabs-nav .tab-item.active{color:#3f51b5;border-bottom-color:#3f51b5}.sog-tabs.material .tabs-nav .tab-item.disabled{color:#00000042;cursor:not-allowed}.sog-tabs.material .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.material .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:4px;border-radius:50%;color:#0000008a;display:flex;align-items:center;justify-content:center;margin-left:8px}.sog-tabs.material .tabs-nav .tab-item .tab-close:hover{background:#0000000a;color:#000000de}.sog-tabs.material .tabs-content{padding:24px 0}.sog-tabs .tab-panel{outline:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTabs, decorators: [{
            type: Component,
            args: [{ selector: 'sog-tabs', standalone: true, imports: [CommonModule], template: `
    <div class="sog-tabs" [ngClass]="[variant, position]">
      <!-- Tab Navigation -->
      <div class="tabs-nav" [ngClass]="{ 'scrollable': scrollable }">
        <div class="scroll-container">
          <div 
            class="tab-item" 
            *ngFor="let tab of tabs; trackBy: trackByFn"
            [ngClass]="{ 
              'active': tab.id === activeTabId, 
              'disabled': tab.disabled 
            }"
            (click)="selectTab(tab)"
            [attr.tabindex]="tab.disabled ? -1 : 0"
            (keydown.enter)="selectTab(tab)"
            (keydown.space)="selectTab(tab, $event)"
          >
            <span class="tab-icon" *ngIf="tab.icon" [innerHTML]="tab.icon"></span>
            <span class="tab-label">{{ tab.label }}</span>
            <button 
              *ngIf="tab.closable" 
              class="tab-close"
              (click)="closeTab(tab, $event)"
              [attr.aria-label]="'Close ' + tab.label"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Scroll buttons for horizontal scrollable tabs -->
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button left"
          (click)="scrollLeft()"
          [disabled]="!canScrollLeft"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button right"
          (click)="scrollRight()"
          [disabled]="!canScrollRight"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <!-- Tab Content -->
      <div class="tabs-content">
        <ng-content></ng-content>
        
        <!-- Dynamic content if using tabs array -->
        <div 
          *ngFor="let tab of tabs; trackBy: trackByFn"
          class="tab-panel"
          [style.display]="tab.id === activeTabId ? 'block' : 'none'"
          [attr.id]="'panel-' + tab.id"
          [attr.aria-labelledby]="'tab-' + tab.id"
          role="tabpanel"
        >
          <ng-content [select]="'[slot=' + tab.id + ']'"></ng-content>
        </div>
      </div>
    </div>
  `, styles: [".sog-tabs{width:100%}.sog-tabs.top .tabs-nav{border-bottom:1px solid #e0e0e0}.sog-tabs.bottom{display:flex;flex-direction:column-reverse}.sog-tabs.bottom .tabs-nav{border-top:1px solid #e0e0e0;border-bottom:none}.sog-tabs.left{display:flex}.sog-tabs.left .tabs-nav{flex-direction:column;border-right:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.left .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.left .tabs-content{flex:1;padding-left:16px}.sog-tabs.right{display:flex;flex-direction:row-reverse}.sog-tabs.right .tabs-nav{flex-direction:column;border-left:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.right .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.right .tabs-content{flex:1;padding-right:16px}.sog-tabs.basic .tabs-nav{display:flex;position:relative}.sog-tabs.basic .tabs-nav.scrollable{overflow:hidden}.sog-tabs.basic .tabs-nav.scrollable .scroll-container{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.sog-tabs.basic .tabs-nav.scrollable .scroll-container::-webkit-scrollbar{display:none}.sog-tabs.basic .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.basic .tabs-nav .tab-item{display:flex;align-items:center;padding:12px 16px;cursor:pointer;font-weight:500;color:#666;border-bottom:2px solid transparent;transition:all .2s ease;white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none}.sog-tabs.basic .tabs-nav .tab-item:hover:not(.disabled){color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item:focus{color:#3498db;box-shadow:inset 0 0 0 2px #3498db}.sog-tabs.basic .tabs-nav .tab-item.active{color:#3498db;border-bottom-color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item.disabled{color:#999;cursor:not-allowed}.sog-tabs.basic .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.basic .tabs-nav .tab-item .tab-label{margin-right:8px}.sog-tabs.basic .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:2px;border-radius:2px;color:#666;display:flex;align-items:center;justify-content:center}.sog-tabs.basic .tabs-nav .tab-item .tab-close:hover{background:#0000001a;color:#333}.sog-tabs.basic .tabs-nav .scroll-button{position:absolute;top:50%;transform:translateY(-50%);background:#fff;border:1px solid #e0e0e0;border-radius:4px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1}.sog-tabs.basic .tabs-nav .scroll-button.left{left:0}.sog-tabs.basic .tabs-nav .scroll-button.right{right:0}.sog-tabs.basic .tabs-nav .scroll-button:hover:not(:disabled){background:#f8f9fa}.sog-tabs.basic .tabs-nav .scroll-button:disabled{opacity:.5;cursor:not-allowed}.sog-tabs.basic .tabs-content{padding:16px 0}.sog-tabs.material .tabs-nav{display:flex;position:relative;background:#f5f5f5}.sog-tabs.material .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.material .tabs-nav .tab-item{display:flex;align-items:center;padding:16px 24px;cursor:pointer;font-weight:500;color:#0009;text-transform:uppercase;font-size:14px;letter-spacing:.5px;border-bottom:2px solid transparent;transition:all .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none;min-height:48px}.sog-tabs.material .tabs-nav .tab-item:hover:not(.disabled){color:#3f51b5;background:#3f51b50a}.sog-tabs.material .tabs-nav .tab-item:focus{color:#3f51b5;background:#3f51b51f}.sog-tabs.material .tabs-nav .tab-item.active{color:#3f51b5;border-bottom-color:#3f51b5}.sog-tabs.material .tabs-nav .tab-item.disabled{color:#00000042;cursor:not-allowed}.sog-tabs.material .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.material .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:4px;border-radius:50%;color:#0000008a;display:flex;align-items:center;justify-content:center;margin-left:8px}.sog-tabs.material .tabs-nav .tab-item .tab-close:hover{background:#0000000a;color:#000000de}.sog-tabs.material .tabs-content{padding:24px 0}.sog-tabs .tab-panel{outline:none}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], position: [{
                type: Input
            }], tabs: [{
                type: Input
            }], activeTabId: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], tabChange: [{
                type: Output
            }], tabClose: [{
                type: Output
            }], tabComponents: [{
                type: ContentChildren,
                args: [SognatoreTab]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2duYXRvcmUtdWkvc3JjL2xpYi90YWJzL3RhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLGVBQWUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQXlCL0MsTUFBTSxPQUFPLFlBQVk7SUFmekI7UUFnQlcsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBWSxLQUFLLENBQUM7S0FDbEM7K0dBUFksWUFBWTttR0FBWixZQUFZLHFMQVhiOzs7O0dBSVQsdUdBTFMsWUFBWTs7NEZBWVgsWUFBWTtrQkFmeEIsU0FBUzsrQkFDRSxTQUFTLGNBQ1AsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLFlBQ2I7Ozs7R0FJVDs4QkFRUSxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLOztBQW9XUixNQUFNLE9BQU8sYUFBYTtJQWpXMUI7UUFrV1csWUFBTyxHQUF5QixPQUFPLENBQUM7UUFDeEMsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdEQsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FB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QXZXbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5RVQseW5JQTFFUyxZQUFZOzs0RkE4VlgsYUFBYTtrQkFqV3pCLFNBQVM7K0JBQ0UsVUFBVSxjQUNSLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxZQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUVUOzhCQXFSUSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVJLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFFd0IsYUFBYTtzQkFBM0MsZUFBZTt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiSXRlbSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgY2xvc2FibGU/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2ctdGFiJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgW3N0eWxlLmRpc3BsYXldPVwiYWN0aXZlID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnRhYi1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFNvZ25hdG9yZVRhYiB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY2xvc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZy10YWJzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNvZy10YWJzXCIgW25nQ2xhc3NdPVwiW3ZhcmlhbnQsIHBvc2l0aW9uXVwiPlxuICAgICAgPCEtLSBUYWIgTmF2aWdhdGlvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzLW5hdlwiIFtuZ0NsYXNzXT1cInsgJ3Njcm9sbGFibGUnOiBzY3JvbGxhYmxlIH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItaXRlbVwiIFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyB0cmFja0J5OiB0cmFja0J5Rm5cIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyBcbiAgICAgICAgICAgICAgJ2FjdGl2ZSc6IHRhYi5pZCA9PT0gYWN0aXZlVGFiSWQsIFxuICAgICAgICAgICAgICAnZGlzYWJsZWQnOiB0YWIuZGlzYWJsZWQgXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RUYWIodGFiKVwiXG4gICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCJ0YWIuZGlzYWJsZWQgPyAtMSA6IDBcIlxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VsZWN0VGFiKHRhYilcIlxuICAgICAgICAgICAgKGtleWRvd24uc3BhY2UpPVwic2VsZWN0VGFiKHRhYiwgJGV2ZW50KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWItaWNvblwiICpuZ0lmPVwidGFiLmljb25cIiBbaW5uZXJIVE1MXT1cInRhYi5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWItbGFiZWxcIj57eyB0YWIubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAqbmdJZj1cInRhYi5jbG9zYWJsZVwiIFxuICAgICAgICAgICAgICBjbGFzcz1cInRhYi1jbG9zZVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZVRhYih0YWIsICRldmVudClcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidDbG9zZSAnICsgdGFiLmxhYmVsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjUgMy41TDMuNSAxMC41TTMuNSAzLjVMMTAuNSAxMC41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFNjcm9sbCBidXR0b25zIGZvciBob3Jpem9udGFsIHNjcm9sbGFibGUgdGFicyAtLT5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAqbmdJZj1cInNjcm9sbGFibGUgJiYgcG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgICBjbGFzcz1cInNjcm9sbC1idXR0b24gbGVmdFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNjcm9sbExlZnQoKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIiFjYW5TY3JvbGxMZWZ0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAxMkw2IDhMMTAgNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAqbmdJZj1cInNjcm9sbGFibGUgJiYgcG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgICBjbGFzcz1cInNjcm9sbC1idXR0b24gcmlnaHRcIlxuICAgICAgICAgIChjbGljayk9XCJzY3JvbGxSaWdodCgpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNhblNjcm9sbFJpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02IDRMMTAgOEw2IDEyXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPCEtLSBUYWIgQ29udGVudCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzLWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICBcbiAgICAgICAgPCEtLSBEeW5hbWljIGNvbnRlbnQgaWYgdXNpbmcgdGFicyBhcnJheSAtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG4gICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZWxcIlxuICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInRhYi5pZCA9PT0gYWN0aXZlVGFiSWQgPyAnYmxvY2snIDogJ25vbmUnXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCIncGFuZWwtJyArIHRhYi5pZFwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIid0YWItJyArIHRhYi5pZFwiXG4gICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250ZW50IFtzZWxlY3RdPVwiJ1tzbG90PScgKyB0YWIuaWQgKyAnXSdcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctdGFicyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgJi50b3Age1xuICAgICAgICAgIC50YWJzLW5hdiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICBcbiAgICAgICAgICAudGFicy1uYXYge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5sZWZ0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIFxuICAgICAgICAgIC50YWJzLW5hdiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC50YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgIFxuICAgICAgICAgIC50YWJzLW5hdiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zY3JvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnRhYnMtY29udGVudCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuYmFzaWMge1xuICAgICAgICAgIC50YWJzLW5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNjcm9sbC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRhYi1pdGVtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMDUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0OThkYjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzM0OThkYjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQ5OGRiO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMDUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAudGFiLWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC50YWItbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAudGFiLWNsb3NlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNjcm9sbC1idXR0b24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmLmxlZnQge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAudGFicy1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYubWF0ZXJpYWwge1xuICAgICAgICAgIC50YWJzLW5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNjcm9sbC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50YWItaXRlbSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjMsIDgxLCAxODEsIDAuMDQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNmNTFiNTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjEyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC50YWItaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnRhYi1jbG9zZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC50YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRhYi1wYW5lbCB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvZ25hdG9yZVRhYnMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSB2YXJpYW50OiAnYmFzaWMnIHwgJ21hdGVyaWFsJyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICd0b3AnO1xuICBASW5wdXQoKSB0YWJzOiBUYWJJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgYWN0aXZlVGFiSWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzY3JvbGxhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBAT3V0cHV0KCkgdGFiQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSB0YWJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBcbiAgQENvbnRlbnRDaGlsZHJlbihTb2duYXRvcmVUYWIpIHRhYkNvbXBvbmVudHMhOiBRdWVyeUxpc3Q8U29nbmF0b3JlVGFiPjtcbiAgXG4gIGNhblNjcm9sbExlZnQgPSBmYWxzZTtcbiAgY2FuU2Nyb2xsUmlnaHQgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBTZXQgaW5pdGlhbCBhY3RpdmUgdGFiIGlmIG5vdCBzcGVjaWZpZWRcbiAgICBpZiAoIXRoaXMuYWN0aXZlVGFiSWQgJiYgdGhpcy50YWJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0RW5hYmxlZFRhYiA9IHRoaXMudGFicy5maW5kKHRhYiA9PiAhdGFiLmRpc2FibGVkKTtcbiAgICAgIGlmIChmaXJzdEVuYWJsZWRUYWIpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJZCA9IGZpcnN0RW5hYmxlZFRhYi5pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gSGFuZGxlIGNvbnRlbnQgY2hpbGRyZW4gdGFic1xuICAgIGlmICh0aGlzLnRhYkNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVUYWJzRnJvbUNvbnRlbnQoKTtcbiAgICAgIHRoaXMudGFiQ29tcG9uZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlVGFic0Zyb21Db250ZW50KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRhYnNGcm9tQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50VGFicyA9IHRoaXMudGFiQ29tcG9uZW50cy50b0FycmF5KCk7XG4gICAgXG4gICAgLy8gU2V0IGFjdGl2ZSB0YWIgZm9yIGNvbnRlbnQgY2hpbGRyZW5cbiAgICBpZiAoIXRoaXMuYWN0aXZlVGFiSWQgJiYgY29udGVudFRhYnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RFbmFibGVkVGFiID0gY29udGVudFRhYnMuZmluZCh0YWIgPT4gIXRhYi5kaXNhYmxlZCk7XG4gICAgICBpZiAoZmlyc3RFbmFibGVkVGFiKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSWQgPSBmaXJzdEVuYWJsZWRUYWIuaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIFVwZGF0ZSBhY3RpdmUgc3RhdGVcbiAgICBjb250ZW50VGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICB0YWIuYWN0aXZlID0gdGFiLmlkID09PSB0aGlzLmFjdGl2ZVRhYklkO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0VGFiKHRhYjogVGFiSXRlbSwgZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRhYi5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuYWN0aXZlVGFiSWQgPSB0YWIuaWQ7XG4gICAgXG4gICAgLy8gVXBkYXRlIGNvbnRlbnQgY2hpbGRyZW4gaWYgdGhleSBleGlzdFxuICAgIGlmICh0aGlzLnRhYkNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMudGFiQ29tcG9uZW50cy5mb3JFYWNoKHRhYkNvbXBvbmVudCA9PiB7XG4gICAgICAgIHRhYkNvbXBvbmVudC5hY3RpdmUgPSB0YWJDb21wb25lbnQuaWQgPT09IHRoaXMuYWN0aXZlVGFiSWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy50YWJDaGFuZ2UuZW1pdCh0YWIuaWQpO1xuICB9XG5cbiAgY2xvc2VUYWIodGFiOiBUYWJJdGVtLCBldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBcbiAgICBpZiAodGFiLmRpc2FibGVkKSByZXR1cm47XG4gICAgXG4gICAgLy8gSWYgY2xvc2luZyB0aGUgYWN0aXZlIHRhYiwgc2VsZWN0IGFub3RoZXIgb25lXG4gICAgaWYgKHRhYi5pZCA9PT0gdGhpcy5hY3RpdmVUYWJJZCkge1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy50YWJzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRhYi5pZCk7XG4gICAgICBjb25zdCBuZXh0VGFiID0gdGhpcy50YWJzW2N1cnJlbnRJbmRleCArIDFdIHx8IHRoaXMudGFic1tjdXJyZW50SW5kZXggLSAxXTtcbiAgICAgIFxuICAgICAgaWYgKG5leHRUYWIgJiYgIW5leHRUYWIuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUYWIobmV4dFRhYik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMudGFiQ2xvc2UuZW1pdCh0YWIuaWQpO1xuICB9XG5cbiAgc2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxCeSh7IGxlZnQ6IC0yMDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxSaWdodCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxCeSh7IGxlZnQ6IDIwMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyLCB0YWI6IFRhYkl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiB0YWIuaWQ7XG4gIH1cbn0iXX0=