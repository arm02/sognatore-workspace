import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
  id: string;
  title: string;
  content?: string;
  disabled?: boolean;
  expanded?: boolean;
}

@Component({
  selector: 'sog-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  `,
  styles: [
    `
      .sog-accordion {
        width: 100%;
        
        &.basic {
          .accordion-item {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin-bottom: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
            
            &.first {
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
            }
            
            &.last {
              border-bottom-left-radius: 8px;
              border-bottom-right-radius: 8px;
              margin-bottom: 0;
            }
            
            &.expanded {
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            &.disabled {
              opacity: 0.6;
              cursor: not-allowed;
            }
            
            .accordion-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px 20px;
              background: #f8f9fa;
              cursor: pointer;
              transition: background-color 0.2s ease;
              outline: none;
              
              &:hover:not(.disabled) {
                background: #e9ecef;
              }
              
              &:focus {
                background: #e9ecef;
                box-shadow: inset 0 0 0 2px #3498db;
              }
              
              .header-content {
                display: flex;
                align-items: center;
                flex: 1;
                
                .accordion-title {
                  font-weight: 600;
                  color: #333;
                  font-size: 16px;
                }
              }
              
              .accordion-icon {
                color: #666;
                transition: transform 0.3s ease;
                
                &.expanded {
                  transform: rotate(180deg);
                }
              }
            }
            
            &.expanded .accordion-header {
              background: #e9ecef;
              border-bottom: 1px solid #e0e0e0;
            }
            
            .accordion-content {
              overflow: hidden;
              transition: height 0.3s ease;
              
              .content-wrapper {
                padding: 20px;
                
                .default-content {
                  color: #555;
                  line-height: 1.6;
                }
              }
            }
          }
        }
        
        &.material {
          .accordion-item {
            border: none;
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 0;
            border-radius: 0;
            
            &:last-child {
              border-bottom: none;
            }
            
            &.expanded {
              background: #f5f5f5;
            }
            
            .accordion-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 24px;
              background: transparent;
              cursor: pointer;
              transition: background-color 0.2s ease;
              outline: none;
              
              &:hover:not(.disabled) {
                background: rgba(0, 0, 0, 0.04);
              }
              
              &:focus {
                background: rgba(0, 0, 0, 0.04);
              }
              
              .header-content {
                display: flex;
                align-items: center;
                flex: 1;
                
                .accordion-title {
                  font-weight: 500;
                  color: rgba(0, 0, 0, 0.87);
                  font-size: 16px;
                }
              }
              
              .accordion-icon {
                color: rgba(0, 0, 0, 0.54);
                transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                
                &.expanded {
                  transform: rotate(180deg);
                }
              }
            }
            
            .accordion-content {
              overflow: hidden;
              transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              
              .content-wrapper {
                padding: 0 24px 24px 24px;
                
                .default-content {
                  color: rgba(0, 0, 0, 0.6);
                  line-height: 1.5;
                }
              }
            }
          }
        }
        
        &.outlined {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          
          .accordion-item {
            border: none;
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 0;
            border-radius: 0;
            
            &:last-child {
              border-bottom: none;
            }
            
            .accordion-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px 20px;
              background: white;
              cursor: pointer;
              transition: background-color 0.2s ease;
              outline: none;
              
              &:hover:not(.disabled) {
                background: #f8f9fa;
              }
              
              &:focus {
                background: #f8f9fa;
                box-shadow: inset 0 0 0 2px #3498db;
              }
              
              .header-content {
                display: flex;
                align-items: center;
                flex: 1;
                
                .accordion-title {
                  font-weight: 500;
                  color: #333;
                  font-size: 15px;
                }
              }
              
              .accordion-icon {
                color: #666;
                transition: transform 0.3s ease;
                
                &.expanded {
                  transform: rotate(180deg);
                }
              }
            }
            
            &.expanded .accordion-header {
              background: #f8f9fa;
            }
            
            .accordion-content {
              overflow: hidden;
              transition: height 0.3s ease;
              background: white;
              
              .content-wrapper {
                padding: 16px 20px;
                
                .default-content {
                  color: #555;
                  line-height: 1.5;
                }
              }
            }
          }
        }
      }
    `,
  ],
})
export class SognatoreAccordion implements OnInit {
  @Input() variant: 'basic' | 'material' | 'outlined' = 'basic';
  @Input() items: AccordionItem[] = [];
  @Input() multiple: boolean = false;
  @Input() closeOthers: boolean = true;
  
  @Output() itemToggle = new EventEmitter<{ item: AccordionItem; expanded: boolean }>();
  @Output() itemExpanded = new EventEmitter<AccordionItem>();
  @Output() itemCollapsed = new EventEmitter<AccordionItem>();

  ngOnInit() {
    // Ensure only one item is expanded initially if multiple is false
    if (!this.multiple && this.closeOthers) {
      const expandedItems = this.items.filter(item => item.expanded);
      if (expandedItems.length > 1) {
        expandedItems.slice(1).forEach(item => item.expanded = false);
      }
    }
  }

  toggle(item: AccordionItem, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    if (item.disabled) return;

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
    } else {
      this.itemCollapsed.emit(item);
    }
  }

  expand(itemId: string) {
    const item = this.items.find(i => i.id === itemId);
    if (item && !item.disabled && !item.expanded) {
      this.toggle(item);
    }
  }

  collapse(itemId: string) {
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

  trackByFn(index: number, item: AccordionItem): string {
    return item.id;
  }
}