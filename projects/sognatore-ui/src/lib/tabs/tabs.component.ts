import { Component, Input, Output, EventEmitter, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: string;
  closable?: boolean;
}

@Component({
  selector: 'sog-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-content" [style.display]="active ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .tab-content {
      padding: 16px 0;
    }
  `]
})
export class SognatoreTab {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() closable: boolean = false;
  @Input() active: boolean = false;
}

@Component({
  selector: 'sog-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  `,
  styles: [
    `
      .sog-tabs {
        width: 100%;
        
        &.top {
          .tabs-nav {
            border-bottom: 1px solid #e0e0e0;
          }
        }
        
        &.bottom {
          display: flex;
          flex-direction: column-reverse;
          
          .tabs-nav {
            border-top: 1px solid #e0e0e0;
            border-bottom: none;
          }
        }
        
        &.left {
          display: flex;
          
          .tabs-nav {
            flex-direction: column;
            border-right: 1px solid #e0e0e0;
            border-bottom: none;
            min-width: 200px;
            
            .scroll-container {
              flex-direction: column;
            }
          }
          
          .tabs-content {
            flex: 1;
            padding-left: 16px;
          }
        }
        
        &.right {
          display: flex;
          flex-direction: row-reverse;
          
          .tabs-nav {
            flex-direction: column;
            border-left: 1px solid #e0e0e0;
            border-bottom: none;
            min-width: 200px;
            
            .scroll-container {
              flex-direction: column;
            }
          }
          
          .tabs-content {
            flex: 1;
            padding-right: 16px;
          }
        }
        
        &.basic {
          .tabs-nav {
            display: flex;
            position: relative;
            
            &.scrollable {
              overflow: hidden;
              
              .scroll-container {
                overflow-x: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
                
                &::-webkit-scrollbar {
                  display: none;
                }
              }
            }
            
            .scroll-container {
              display: flex;
              min-width: 100%;
            }
            
            .tab-item {
              display: flex;
              align-items: center;
              padding: 12px 16px;
              cursor: pointer;
              font-weight: 500;
              color: #666;
              border-bottom: 2px solid transparent;
              transition: all 0.2s ease;
              white-space: nowrap;
              user-select: none;
              outline: none;
              
              &:hover:not(.disabled) {
                color: #3498db;
                background: rgba(52, 152, 219, 0.05);
              }
              
              &:focus {
                color: #3498db;
                box-shadow: inset 0 0 0 2px #3498db;
              }
              
              &.active {
                color: #3498db;
                border-bottom-color: #3498db;
                background: rgba(52, 152, 219, 0.05);
              }
              
              &.disabled {
                color: #999;
                cursor: not-allowed;
              }
              
              .tab-icon {
                width: 16px;
                height: 16px;
                margin-right: 8px;
                display: inline-block;
              }
              
              .tab-label {
                margin-right: 8px;
              }
              
              .tab-close {
                background: none;
                border: none;
                cursor: pointer;
                padding: 2px;
                border-radius: 2px;
                color: #666;
                display: flex;
                align-items: center;
                justify-content: center;
                
                &:hover {
                  background: rgba(0, 0, 0, 0.1);
                  color: #333;
                }
              }
            }
            
            .scroll-button {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: white;
              border: 1px solid #e0e0e0;
              border-radius: 4px;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 1;
              
              &.left {
                left: 0;
              }
              
              &.right {
                right: 0;
              }
              
              &:hover:not(:disabled) {
                background: #f8f9fa;
              }
              
              &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
              }
            }
          }
          
          .tabs-content {
            padding: 16px 0;
          }
        }
        
        &.material {
          .tabs-nav {
            display: flex;
            position: relative;
            background: #f5f5f5;
            
            .scroll-container {
              display: flex;
              min-width: 100%;
            }
            
            .tab-item {
              display: flex;
              align-items: center;
              padding: 16px 24px;
              cursor: pointer;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.6);
              text-transform: uppercase;
              font-size: 14px;
              letter-spacing: 0.5px;
              border-bottom: 2px solid transparent;
              transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              white-space: nowrap;
              user-select: none;
              outline: none;
              min-height: 48px;
              
              &:hover:not(.disabled) {
                color: #3f51b5;
                background: rgba(63, 81, 181, 0.04);
              }
              
              &:focus {
                color: #3f51b5;
                background: rgba(63, 81, 181, 0.12);
              }
              
              &.active {
                color: #3f51b5;
                border-bottom-color: #3f51b5;
              }
              
              &.disabled {
                color: rgba(0, 0, 0, 0.26);
                cursor: not-allowed;
              }
              
              .tab-icon {
                width: 16px;
                height: 16px;
                margin-right: 8px;
                display: inline-block;
              }
              
              .tab-close {
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                border-radius: 50%;
                color: rgba(0, 0, 0, 0.54);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
                
                &:hover {
                  background: rgba(0, 0, 0, 0.04);
                  color: rgba(0, 0, 0, 0.87);
                }
              }
            }
          }
          
          .tabs-content {
            padding: 24px 0;
          }
        }
        
        .tab-panel {
          outline: none;
        }
      }
    `,
  ],
})
export class SognatoreTabs implements OnInit, AfterContentInit {
  @Input() variant: 'basic' | 'material' = 'basic';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tabs: TabItem[] = [];
  @Input() activeTabId: string = '';
  @Input() scrollable: boolean = false;
  
  @Output() tabChange = new EventEmitter<string>();
  @Output() tabClose = new EventEmitter<string>();
  
  @ContentChildren(SognatoreTab) tabComponents!: QueryList<SognatoreTab>;
  
  canScrollLeft = false;
  canScrollRight = false;

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

  private updateTabsFromContent() {
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

  selectTab(tab: TabItem, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    if (tab.disabled) return;
    
    this.activeTabId = tab.id;
    
    // Update content children if they exist
    if (this.tabComponents) {
      this.tabComponents.forEach(tabComponent => {
        tabComponent.active = tabComponent.id === this.activeTabId;
      });
    }
    
    this.tabChange.emit(tab.id);
  }

  closeTab(tab: TabItem, event: Event) {
    event.stopPropagation();
    
    if (tab.disabled) return;
    
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
    const container = document.querySelector('.scroll-container') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const container = document.querySelector('.scroll-container') as HTMLElement;
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  trackByFn(index: number, tab: TabItem): string {
    return tab.id;
  }
}