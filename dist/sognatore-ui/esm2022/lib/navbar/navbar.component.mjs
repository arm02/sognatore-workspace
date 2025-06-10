import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreNavbar {
    constructor() {
        this.variant = 'basic';
        this.title = '';
        this.items = [];
        this.fixed = false;
        this.hasBrandSlot = false;
        this.itemClick = new EventEmitter();
        this.brandClick = new EventEmitter();
        this.isMobileMenuOpen = false;
        this.expandedMobileItem = null;
    }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        this.expandedMobileItem = null;
    }
    onBrandClick() {
        this.brandClick.emit();
    }
    onItemClick(item, event) {
        if (event) {
            event.stopPropagation();
        }
        if (item.disabled)
            return;
        if (item.action) {
            item.action();
        }
        this.itemClick.emit(item);
        this.isMobileMenuOpen = false;
        this.expandedMobileItem = null;
    }
    onMobileItemClick(item) {
        if (item.disabled)
            return;
        if (item.children?.length) {
            this.expandedMobileItem = this.expandedMobileItem === item ? null : item;
        }
        else {
            this.onItemClick(item);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreNavbar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreNavbar, isStandalone: true, selector: "sog-navbar", inputs: { variant: "variant", title: "title", items: "items", fixed: "fixed", hasBrandSlot: "hasBrandSlot" }, outputs: { itemClick: "itemClick", brandClick: "brandClick" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [".sog-navbar{width:100%;z-index:1000}.sog-navbar.fixed{position:fixed;top:0;left:0}.sog-navbar.basic{background:#f8f9fa;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.basic .navbar-brand{display:flex;align-items:center;cursor:pointer}.sog-navbar.basic .navbar-brand .brand-title{font-size:20px;font-weight:600;color:#333}.sog-navbar.basic .desktop-nav{display:flex;align-items:center;gap:8px}.sog-navbar.basic .desktop-nav .nav-item{position:relative}.sog-navbar.basic .desktop-nav .nav-item .nav-link{display:flex;align-items:center;gap:8px;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:500;color:#555;transition:all .2s ease}.sog-navbar.basic .desktop-nav .nav-item .nav-link:hover{background:#3498db1a;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link:hover{background:none;color:#999}.sog-navbar.basic .desktop-nav .nav-item .dropdown-menu{position:absolute;top:100%;left:0;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 12px #0000001a;min-width:160px;opacity:0;visibility:hidden;transform:translateY(-10px);transition:all .2s ease;z-index:1001}.sog-navbar.basic .desktop-nav .nav-item:hover .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item{display:flex;align-items:center;gap:8px;padding:12px 16px;cursor:pointer;color:#555;border-bottom:1px solid #f0f0f0}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:last-child{border-bottom:none}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:hover{background:#f8f9fa;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled:hover{background:none;color:#999}.sog-navbar.basic .navbar-actions{display:flex;align-items:center;gap:8px}.sog-navbar.basic .mobile-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;border-radius:4px;color:#555}.sog-navbar.basic .mobile-toggle:hover{background:#0000001a}.sog-navbar.basic .mobile-nav{display:none;background:#fff;border-top:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav.open{display:block}.sog-navbar.basic .mobile-nav .mobile-nav-item{border-bottom:1px solid #f0f0f0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-nav-link{display:flex;align-items:center;gap:12px;padding:16px;cursor:pointer;color:#555;font-weight:500}.sog-navbar.basic .mobile-nav .mobile-nav-item:hover .mobile-nav-link{background:#f8f9fa;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item.disabled .mobile-nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu{background:#f8f9fa}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item{display:flex;align-items:center;gap:12px;padding:12px 32px;cursor:pointer;color:#666;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item:hover{background:#e8e8e8;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.material{background:#3f51b5;color:#fff;box-shadow:0 2px 4px #0000001a}.sog-navbar.material .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.material .navbar-brand .brand-title{color:#fff;font-size:20px;font-weight:500}.sog-navbar.material .desktop-nav .nav-item .nav-link{color:#ffffffe6}.sog-navbar.material .desktop-nav .nav-item .nav-link:hover{background:#ffffff1a;color:#fff}.sog-navbar.material .mobile-toggle{color:#fff}.sog-navbar.material .mobile-toggle:hover{background:#ffffff1a}.sog-navbar .nav-icon{width:16px;height:16px;display:inline-block}.sog-navbar .dropdown-arrow{margin-left:4px;transition:transform .2s ease}.sog-navbar .nav-item:hover .dropdown-arrow{transform:rotate(180deg)}@media (max-width: 768px){.sog-navbar .desktop-nav{display:none!important}.sog-navbar .mobile-toggle{display:flex!important}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreNavbar, decorators: [{
            type: Component,
            args: [{ selector: 'sog-navbar', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [".sog-navbar{width:100%;z-index:1000}.sog-navbar.fixed{position:fixed;top:0;left:0}.sog-navbar.basic{background:#f8f9fa;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.basic .navbar-brand{display:flex;align-items:center;cursor:pointer}.sog-navbar.basic .navbar-brand .brand-title{font-size:20px;font-weight:600;color:#333}.sog-navbar.basic .desktop-nav{display:flex;align-items:center;gap:8px}.sog-navbar.basic .desktop-nav .nav-item{position:relative}.sog-navbar.basic .desktop-nav .nav-item .nav-link{display:flex;align-items:center;gap:8px;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:500;color:#555;transition:all .2s ease}.sog-navbar.basic .desktop-nav .nav-item .nav-link:hover{background:#3498db1a;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link:hover{background:none;color:#999}.sog-navbar.basic .desktop-nav .nav-item .dropdown-menu{position:absolute;top:100%;left:0;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 12px #0000001a;min-width:160px;opacity:0;visibility:hidden;transform:translateY(-10px);transition:all .2s ease;z-index:1001}.sog-navbar.basic .desktop-nav .nav-item:hover .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item{display:flex;align-items:center;gap:8px;padding:12px 16px;cursor:pointer;color:#555;border-bottom:1px solid #f0f0f0}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:last-child{border-bottom:none}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:hover{background:#f8f9fa;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled:hover{background:none;color:#999}.sog-navbar.basic .navbar-actions{display:flex;align-items:center;gap:8px}.sog-navbar.basic .mobile-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;border-radius:4px;color:#555}.sog-navbar.basic .mobile-toggle:hover{background:#0000001a}.sog-navbar.basic .mobile-nav{display:none;background:#fff;border-top:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav.open{display:block}.sog-navbar.basic .mobile-nav .mobile-nav-item{border-bottom:1px solid #f0f0f0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-nav-link{display:flex;align-items:center;gap:12px;padding:16px;cursor:pointer;color:#555;font-weight:500}.sog-navbar.basic .mobile-nav .mobile-nav-item:hover .mobile-nav-link{background:#f8f9fa;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item.disabled .mobile-nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu{background:#f8f9fa}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item{display:flex;align-items:center;gap:12px;padding:12px 32px;cursor:pointer;color:#666;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item:hover{background:#e8e8e8;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.material{background:#3f51b5;color:#fff;box-shadow:0 2px 4px #0000001a}.sog-navbar.material .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.material .navbar-brand .brand-title{color:#fff;font-size:20px;font-weight:500}.sog-navbar.material .desktop-nav .nav-item .nav-link{color:#ffffffe6}.sog-navbar.material .desktop-nav .nav-item .nav-link:hover{background:#ffffff1a;color:#fff}.sog-navbar.material .mobile-toggle{color:#fff}.sog-navbar.material .mobile-toggle:hover{background:#ffffff1a}.sog-navbar .nav-icon{width:16px;height:16px;display:inline-block}.sog-navbar .dropdown-arrow{margin-left:4px;transition:transform .2s ease}.sog-navbar .nav-item:hover .dropdown-arrow{transform:rotate(180deg)}@media (max-width: 768px){.sog-navbar .desktop-nav{display:none!important}.sog-navbar .mobile-toggle{display:flex!important}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], title: [{
                type: Input
            }], items: [{
                type: Input
            }], fixed: [{
                type: Input
            }], hasBrandSlot: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], brandClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZ25hdG9yZS11aS9zcmMvbGliL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUEyWS9DLE1BQU0sT0FBTyxlQUFlO0lBaFk1QjtRQWlZVyxZQUFPLEdBQXlCLE9BQU8sQ0FBQztRQUN4QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBYyxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU3QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVoRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsdUJBQWtCLEdBQW1CLElBQUksQ0FBQztLQW9DM0M7SUFsQ0MsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRSxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7K0dBOUNVLGVBQWU7bUdBQWYsZUFBZSxtUEE1WGhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5R1Qsd3pJQTFHUyxZQUFZOzs0RkE2WFgsZUFBZTtrQkFoWTNCLFNBQVM7K0JBQ0UsWUFBWSxjQUNWLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxZQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5R1Q7OEJBb1JRLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVJLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW0ge1xuICBsYWJlbDogc3RyaW5nO1xuICByb3V0ZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgYWN0aW9uPzogKCkgPT4gdm9pZDtcbiAgY2hpbGRyZW4/OiBOYXZJdGVtW107XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLW5hdmJhcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgY2xhc3M9XCJzb2ctbmF2YmFyXCIgW2NsYXNzXT1cInZhcmlhbnRcIiBbbmdDbGFzc109XCJ7ICdmaXhlZCc6IGZpeGVkLCAnbW9iaWxlLW9wZW4nOiBpc01vYmlsZU1lbnVPcGVuIH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29udGFpbmVyXCI+XG4gICAgICAgIDwhLS0gQnJhbmQvTG9nbyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZFwiIChjbGljayk9XCJvbkJyYW5kQ2xpY2soKVwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PWJyYW5kXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFoYXNCcmFuZFNsb3QgJiYgdGl0bGVcIiBjbGFzcz1cImJyYW5kLXRpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRGVza3RvcCBOYXZpZ2F0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLW5hdiBkZXNrdG9wLW5hdlwiPlxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCIgXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCc6IGl0ZW0uZGlzYWJsZWQsICdoYXMtY2hpbGRyZW4nOiBpdGVtLmNoaWxkcmVuPy5sZW5ndGggfVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25JdGVtQ2xpY2soaXRlbSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmljb25cIiBjbGFzcz1cIm5hdi1pY29uXCIgW2lubmVySFRNTF09XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgPHN2ZyBcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0uY2hpbGRyZW4/Lmxlbmd0aFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tYXJyb3dcIiBcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCIgXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIiBcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyIDEyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMiA0TDYgOEwxMCA0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBEcm9wZG93biBNZW51IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiAqbmdJZj1cIml0ZW0uY2hpbGRyZW4/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIFxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBpdGVtLmNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCc6IGNoaWxkLmRpc2FibGVkIH1cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljayhjaGlsZCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImNoaWxkLmljb25cIiBjbGFzcz1cIm5hdi1pY29uXCIgW2lubmVySFRNTF09XCJjaGlsZC5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIHt7IGNoaWxkLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQWN0aW9ucyBTbG90IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBNb2JpbGUgTWVudSBUb2dnbGUgLS0+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3M9XCJtb2JpbGUtdG9nZ2xlXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlTW9iaWxlTWVudSgpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImlzTW9iaWxlTWVudU9wZW5cIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaXNNb2JpbGVNZW51T3BlbiA/ICdDbG9zZSBtZW51JyA6ICdPcGVuIG1lbnUnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aCBcbiAgICAgICAgICAgICAgKm5nSWY9XCIhaXNNb2JpbGVNZW51T3BlblwiXG4gICAgICAgICAgICAgIGQ9XCJNMyAxMkgyMU0zIDZIMjFNMyAxOEgyMVwiIFxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiIFxuICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBcbiAgICAgICAgICAgICAgKm5nSWY9XCJpc01vYmlsZU1lbnVPcGVuXCJcbiAgICAgICAgICAgICAgZD1cIk0xOCA2TDYgMThNNiA2TDE4IDE4XCIgXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIFxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIgXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBNb2JpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2XCIgW25nQ2xhc3NdPVwieyAnb3Blbic6IGlzTW9iaWxlTWVudU9wZW4gfVwiPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzPVwibW9iaWxlLW5hdi1pdGVtXCIgXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2Rpc2FibGVkJzogaXRlbS5kaXNhYmxlZCB9XCJcbiAgICAgICAgICAoY2xpY2spPVwib25Nb2JpbGVJdGVtQ2xpY2soaXRlbSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2JpbGUtbmF2LWxpbmtcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJuYXYtaWNvblwiIFtpbm5lckhUTUxdPVwiaXRlbS5pY29uXCI+PC9pPlxuICAgICAgICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBcbiAgICAgICAgICA8IS0tIE1vYmlsZSBTdWJtZW51IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtc3VibWVudVwiICpuZ0lmPVwiaXRlbS5jaGlsZHJlbj8ubGVuZ3RoICYmIGl0ZW0gPT09IGV4cGFuZGVkTW9iaWxlSXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJtb2JpbGUtc3VibWVudS1pdGVtXCIgXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBpdGVtLmNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnZGlzYWJsZWQnOiBjaGlsZC5kaXNhYmxlZCB9XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKGNoaWxkLCAkZXZlbnQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgKm5nSWY9XCJjaGlsZC5pY29uXCIgY2xhc3M9XCJuYXYtaWNvblwiIFtpbm5lckhUTUxdPVwiY2hpbGQuaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAge3sgY2hpbGQubGFiZWwgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuc29nLW5hdmJhciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBcbiAgICAgICAgJi5maXhlZCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmJhc2ljIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICAgIFxuICAgICAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmJyYW5kLXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmRlc2t0b3AtbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzM0OThkYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQ5OGRiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubmF2YmFyLWFjdGlvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLm1vYmlsZS10b2dnbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLm1vYmlsZS1uYXYge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYub3BlbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubW9iaWxlLW5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubW9iaWxlLW5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICY6aG92ZXIgLm1vYmlsZS1uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0OThkYjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi5kaXNhYmxlZCAubW9iaWxlLW5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubW9iaWxlLXN1Ym1lbnUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm1vYmlsZS1zdWJtZW51LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDMycHg7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYubWF0ZXJpYWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLm5hdmJhci1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubmF2YmFyLWJyYW5kIC5icmFuZC10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuZGVza3RvcC1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5tb2JpbGUtdG9nZ2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uYXYtaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRyb3Bkb3duLWFycm93IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uYXYtaXRlbTpob3ZlciAuZHJvcGRvd24tYXJyb3cge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5zb2ctbmF2YmFyIHtcbiAgICAgICAgICAuZGVza3RvcC1uYXYge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubW9iaWxlLXRvZ2dsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU29nbmF0b3JlTmF2YmFyIHtcbiAgQElucHV0KCkgdmFyaWFudDogJ2Jhc2ljJyB8ICdtYXRlcmlhbCcgPSAnYmFzaWMnO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGl0ZW1zOiBOYXZJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGFzQnJhbmRTbG90OiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOYXZJdGVtPigpO1xuICBAT3V0cHV0KCkgYnJhbmRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgXG4gIGlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcbiAgZXhwYW5kZWRNb2JpbGVJdGVtOiBOYXZJdGVtIHwgbnVsbCA9IG51bGw7XG5cbiAgdG9nZ2xlTW9iaWxlTWVudSgpIHtcbiAgICB0aGlzLmlzTW9iaWxlTWVudU9wZW4gPSAhdGhpcy5pc01vYmlsZU1lbnVPcGVuO1xuICAgIHRoaXMuZXhwYW5kZWRNb2JpbGVJdGVtID0gbnVsbDtcbiAgfVxuXG4gIG9uQnJhbmRDbGljaygpIHtcbiAgICB0aGlzLmJyYW5kQ2xpY2suZW1pdCgpO1xuICB9XG5cbiAgb25JdGVtQ2xpY2soaXRlbTogTmF2SXRlbSwgZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm47XG4gICAgXG4gICAgaWYgKGl0ZW0uYWN0aW9uKSB7XG4gICAgICBpdGVtLmFjdGlvbigpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLml0ZW1DbGljay5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuaXNNb2JpbGVNZW51T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZXhwYW5kZWRNb2JpbGVJdGVtID0gbnVsbDtcbiAgfVxuXG4gIG9uTW9iaWxlSXRlbUNsaWNrKGl0ZW06IE5hdkl0ZW0pIHtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIFxuICAgIGlmIChpdGVtLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNb2JpbGVJdGVtID0gdGhpcy5leHBhbmRlZE1vYmlsZUl0ZW0gPT09IGl0ZW0gPyBudWxsIDogaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkl0ZW1DbGljayhpdGVtKTtcbiAgICB9XG4gIH1cbn0iXX0=