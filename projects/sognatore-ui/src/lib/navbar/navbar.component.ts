import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  route?: string;
  icon?: string;
  action?: () => void;
  children?: NavItem[];
  disabled?: boolean;
}

@Component({
  selector: 'sog-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="sog-navbar" [class]="variant" [ngClass]="{ 'fixed': fixed, 'mobile-open': isMobileMenuOpen }">
      <div class="navbar-container">
        <!-- Brand/Logo -->
        <div class="navbar-brand" (click)="onBrandClick()">
          <ng-content select="[slot=brand]"></ng-content>
          <span *ngIf="!hasBrandSlot && title" class="brand-title">{{ title }}</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-nav desktop-nav">
          <div 
            class="nav-item" 
            *ngFor="let item of items"
            [ngClass]="{ 'disabled': item.disabled, 'has-children': item.children?.length }"
            (click)="onItemClick(item)"
          >
            <span class="nav-link">
              <i *ngIf="item.icon" class="nav-icon" [innerHTML]="item.icon"></i>
              {{ item.label }}
              <svg 
                *ngIf="item.children?.length" 
                class="dropdown-arrow" 
                width="12" 
                height="12" 
                viewBox="0 0 12 12"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </span>
            
            <!-- Dropdown Menu -->
            <div class="dropdown-menu" *ngIf="item.children?.length">
              <div 
                class="dropdown-item" 
                *ngFor="let child of item.children"
                [ngClass]="{ 'disabled': child.disabled }"
                (click)="onItemClick(child, $event)"
              >
                <i *ngIf="child.icon" class="nav-icon" [innerHTML]="child.icon"></i>
                {{ child.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Actions Slot -->
        <div class="navbar-actions">
          <ng-content select="[slot=actions]"></ng-content>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="isMobileMenuOpen"
          [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              *ngIf="!isMobileMenuOpen"
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
            />
            <path 
              *ngIf="isMobileMenuOpen"
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" [ngClass]="{ 'open': isMobileMenuOpen }">
        <div 
          class="mobile-nav-item" 
          *ngFor="let item of items"
          [ngClass]="{ 'disabled': item.disabled }"
          (click)="onMobileItemClick(item)"
        >
          <span class="mobile-nav-link">
            <i *ngIf="item.icon" class="nav-icon" [innerHTML]="item.icon"></i>
            {{ item.label }}
          </span>
          
          <!-- Mobile Submenu -->
          <div class="mobile-submenu" *ngIf="item.children?.length && item === expandedMobileItem">
            <div 
              class="mobile-submenu-item" 
              *ngFor="let child of item.children"
              [ngClass]="{ 'disabled': child.disabled }"
              (click)="onItemClick(child, $event)"
            >
              <i *ngIf="child.icon" class="nav-icon" [innerHTML]="child.icon"></i>
              {{ child.label }}
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .sog-navbar {
        width: 100%;
        z-index: 1000;
        
        &.fixed {
          position: fixed;
          top: 0;
          left: 0;
        }
        
        &.basic {
          background: #f8f9fa;
          border-bottom: 1px solid #e0e0e0;
          
          .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
          }
          
          .navbar-brand {
            display: flex;
            align-items: center;
            cursor: pointer;
            
            .brand-title {
              font-size: 20px;
              font-weight: 600;
              color: #333;
            }
          }
          
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 8px;
            
            .nav-item {
              position: relative;
              
              .nav-link {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 500;
                color: #555;
                transition: all 0.2s ease;
                
                &:hover {
                  background: rgba(52, 152, 219, 0.1);
                  color: #3498db;
                }
              }
              
              &.disabled .nav-link {
                color: #999;
                cursor: not-allowed;
                
                &:hover {
                  background: none;
                  color: #999;
                }
              }
              
              .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                border: 1px solid #e0e0e0;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                min-width: 160px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.2s ease;
                z-index: 1001;
              }
              
              &:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
              }
              
              .dropdown-item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px 16px;
                cursor: pointer;
                color: #555;
                border-bottom: 1px solid #f0f0f0;
                
                &:last-child {
                  border-bottom: none;
                }
                
                &:hover {
                  background: #f8f9fa;
                  color: #3498db;
                }
                
                &.disabled {
                  color: #999;
                  cursor: not-allowed;
                  
                  &:hover {
                    background: none;
                    color: #999;
                  }
                }
              }
            }
          }
          
          .navbar-actions {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .mobile-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            border-radius: 4px;
            color: #555;
            
            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
          }
          
          .mobile-nav {
            display: none;
            background: white;
            border-top: 1px solid #e0e0e0;
            
            &.open {
              display: block;
            }
            
            .mobile-nav-item {
              border-bottom: 1px solid #f0f0f0;
              
              .mobile-nav-link {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 16px;
                cursor: pointer;
                color: #555;
                font-weight: 500;
              }
              
              &:hover .mobile-nav-link {
                background: #f8f9fa;
                color: #3498db;
              }
              
              &.disabled .mobile-nav-link {
                color: #999;
                cursor: not-allowed;
              }
              
              .mobile-submenu {
                background: #f8f9fa;
                
                .mobile-submenu-item {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 12px 32px;
                  cursor: pointer;
                  color: #666;
                  border-bottom: 1px solid #e0e0e0;
                  
                  &:hover {
                    background: #e8e8e8;
                    color: #3498db;
                  }
                  
                  &.disabled {
                    color: #999;
                    cursor: not-allowed;
                  }
                }
              }
            }
          }
        }
        
        &.material {
          background: #3f51b5;
          color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          
          .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
          }
          
          .navbar-brand .brand-title {
            color: white;
            font-size: 20px;
            font-weight: 500;
          }
          
          .desktop-nav .nav-item .nav-link {
            color: rgba(255, 255, 255, 0.9);
            
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              color: white;
            }
          }
          
          .mobile-toggle {
            color: white;
            
            &:hover {
              background: rgba(255, 255, 255, 0.1);
            }
          }
        }
        
        .nav-icon {
          width: 16px;
          height: 16px;
          display: inline-block;
        }
        
        .dropdown-arrow {
          margin-left: 4px;
          transition: transform 0.2s ease;
        }
        
        .nav-item:hover .dropdown-arrow {
          transform: rotate(180deg);
        }
      }
      
      @media (max-width: 768px) {
        .sog-navbar {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-toggle {
            display: flex !important;
          }
        }
      }
    `,
  ],
})
export class SognatoreNavbar {
  @Input() variant: 'basic' | 'material' = 'basic';
  @Input() title: string = '';
  @Input() items: NavItem[] = [];
  @Input() fixed: boolean = false;
  @Input() hasBrandSlot: boolean = false;
  
  @Output() itemClick = new EventEmitter<NavItem>();
  @Output() brandClick = new EventEmitter<void>();
  
  isMobileMenuOpen = false;
  expandedMobileItem: NavItem | null = null;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.expandedMobileItem = null;
  }

  onBrandClick() {
    this.brandClick.emit();
  }

  onItemClick(item: NavItem, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    
    if (item.disabled) return;
    
    if (item.action) {
      item.action();
    }
    
    this.itemClick.emit(item);
    this.isMobileMenuOpen = false;
    this.expandedMobileItem = null;
  }

  onMobileItemClick(item: NavItem) {
    if (item.disabled) return;
    
    if (item.children?.length) {
      this.expandedMobileItem = this.expandedMobileItem === item ? null : item;
    } else {
      this.onItemClick(item);
    }
  }
}