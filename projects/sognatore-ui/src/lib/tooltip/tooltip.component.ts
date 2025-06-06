import { Component, Input, ElementRef, HostListener, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sog-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tooltip-wrapper" #wrapper>
      <ng-content></ng-content>
      
      <div 
        class="tooltip"
        #tooltip
        [ngClass]="getTooltipClasses()"
        [style.top.px]="tooltipTop"
        [style.left.px]="tooltipLeft"
        [style.transform]="transform"
        role="tooltip"
        [attr.id]="tooltipId"
      >
        <div class="tooltip-content">
          {{ text }}
          <ng-content select="[slot=tooltip]"></ng-content>
        </div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .tooltip-wrapper {
        position: relative;
        display: inline-block;
      }
      
      .tooltip {
        position: fixed;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
        pointer-events: none;
        
        &.visible {
          opacity: 1;
          visibility: visible;
        }
        
        &.basic {
          .tooltip-content {
            background: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            line-height: 1.4;
            max-width: 300px;
            word-wrap: break-word;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          
          .tooltip-arrow {
            position: absolute;
            width: 0;
            height: 0;
            border: 6px solid transparent;
          }
          
          &.top {
            .tooltip-arrow {
              bottom: -12px;
              left: 50%;
              transform: translateX(-50%);
              border-top-color: #333;
              border-bottom: none;
            }
          }
          
          &.bottom {
            .tooltip-arrow {
              top: -12px;
              left: 50%;
              transform: translateX(-50%);
              border-bottom-color: #333;
              border-top: none;
            }
          }
          
          &.left {
            .tooltip-arrow {
              right: -12px;
              top: 50%;
              transform: translateY(-50%);
              border-left-color: #333;
              border-right: none;
            }
          }
          
          &.right {
            .tooltip-arrow {
              left: -12px;
              top: 50%;
              transform: translateY(-50%);
              border-right-color: #333;
              border-left: none;
            }
          }
        }
        
        &.material {
          .tooltip-content {
            background: #616161;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 12px;
            line-height: 1.5;
            max-width: 320px;
            word-wrap: break-word;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
            font-weight: 500;
          }
          
          .tooltip-arrow {
            position: absolute;
            width: 0;
            height: 0;
            border: 5px solid transparent;
          }
          
          &.top {
            .tooltip-arrow {
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);
              border-top-color: #616161;
              border-bottom: none;
            }
          }
          
          &.bottom {
            .tooltip-arrow {
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              border-bottom-color: #616161;
              border-top: none;
            }
          }
          
          &.left {
            .tooltip-arrow {
              right: -10px;
              top: 50%;
              transform: translateY(-50%);
              border-left-color: #616161;
              border-right: none;
            }
          }
          
          &.right {
            .tooltip-arrow {
              left: -10px;
              top: 50%;
              transform: translateY(-50%);
              border-right-color: #616161;
              border-left: none;
            }
          }
        }
        
        &.info {
          .tooltip-content {
            background: #17a2b8;
            color: white;
          }
          
          &.basic .tooltip-arrow {
            &.top { border-top-color: #17a2b8; }
            &.bottom { border-bottom-color: #17a2b8; }
            &.left { border-left-color: #17a2b8; }
            &.right { border-right-color: #17a2b8; }
          }
          
          &.material .tooltip-arrow {
            &.top { border-top-color: #17a2b8; }
            &.bottom { border-bottom-color: #17a2b8; }
            &.left { border-left-color: #17a2b8; }
            &.right { border-right-color: #17a2b8; }
          }
        }
        
        &.warning {
          .tooltip-content {
            background: #f39c12;
            color: white;
          }
          
          &.basic .tooltip-arrow {
            &.top { border-top-color: #f39c12; }
            &.bottom { border-bottom-color: #f39c12; }
            &.left { border-left-color: #f39c12; }
            &.right { border-right-color: #f39c12; }
          }
          
          &.material .tooltip-arrow {
            &.top { border-top-color: #f39c12; }
            &.bottom { border-bottom-color: #f39c12; }
            &.left { border-left-color: #f39c12; }
            &.right { border-right-color: #f39c12; }
          }
        }
        
        &.error {
          .tooltip-content {
            background: #e74c3c;
            color: white;
          }
          
          &.basic .tooltip-arrow {
            &.top { border-top-color: #e74c3c; }
            &.bottom { border-bottom-color: #e74c3c; }
            &.left { border-left-color: #e74c3c; }
            &.right { border-right-color: #e74c3c; }
          }
          
          &.material .tooltip-arrow {
            &.top { border-top-color: #e74c3c; }
            &.bottom { border-bottom-color: #e74c3c; }
            &.left { border-left-color: #e74c3c; }
            &.right { border-right-color: #e74c3c; }
          }
        }
        
        &.success {
          .tooltip-content {
            background: #27ae60;
            color: white;
          }
          
          &.basic .tooltip-arrow {
            &.top { border-top-color: #27ae60; }
            &.bottom { border-bottom-color: #27ae60; }
            &.left { border-left-color: #27ae60; }
            &.right { border-right-color: #27ae60; }
          }
          
          &.material .tooltip-arrow {
            &.top { border-top-color: #27ae60; }
            &.bottom { border-bottom-color: #27ae60; }
            &.left { border-left-color: #27ae60; }
            &.right { border-right-color: #27ae60; }
          }
        }
      }
    `,
  ],
  host: {
    '[attr.aria-describedby]': 'isVisible ? tooltipId : null'
  }
})
export class SognatoreTooltip implements OnDestroy {
  @Input() text: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() variant: 'basic' | 'material' | 'info' | 'warning' | 'error' | 'success' = 'basic';
  @Input() delay: number = 500;
  @Input() hideDelay: number = 0;
  @Input() disabled: boolean = false;
  @Input() trigger: 'hover' | 'click' | 'focus' | 'manual' = 'hover';
  
  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;
  @ViewChild('tooltip', { static: true }) tooltipElement!: ElementRef;
  
  isVisible = false;
  tooltipTop = 0;
  tooltipLeft = 0;
  transform = '';
  tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;
  
  private showTimeout?: number;
  private hideTimeout?: number;
  private isManuallyTriggered = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.trigger === 'hover' && !this.disabled) {
      this.scheduleShow();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.trigger === 'hover' && !this.disabled && !this.isManuallyTriggered) {
      this.scheduleHide();
    }
  }

  @HostListener('click')
  onClick() {
    if (this.trigger === 'click' && !this.disabled) {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  @HostListener('focus')
  onFocus() {
    if (this.trigger === 'focus' && !this.disabled) {
      this.show();
    }
  }

  @HostListener('blur')
  onBlur() {
    if (this.trigger === 'focus' && !this.disabled) {
      this.hide();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.trigger === 'click' && this.isVisible) {
      const target = event.target as Element;
      if (!this.wrapper.nativeElement.contains(target) && 
          !this.tooltipElement.nativeElement.contains(target)) {
        this.hide();
      }
    }
  }

  private scheduleShow() {
    this.clearTimeouts();
    this.showTimeout = window.setTimeout(() => {
      this.show();
    }, this.delay);
  }

  private scheduleHide() {
    this.clearTimeouts();
    if (this.hideDelay > 0) {
      this.hideTimeout = window.setTimeout(() => {
        this.hide();
      }, this.hideDelay);
    } else {
      this.hide();
    }
  }

  show() {
    if (this.disabled || this.isVisible) return;
    
    this.clearTimeouts();
    this.updatePosition();
    this.isVisible = true;
  }

  hide() {
    if (!this.isVisible) return;
    
    this.clearTimeouts();
    this.isVisible = false;
    this.isManuallyTriggered = false;
  }

  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.isManuallyTriggered = true;
      this.show();
    }
  }

  private updatePosition() {
    const wrapperRect = this.wrapper.nativeElement.getBoundingClientRect();
    
    // Make tooltip temporarily visible to get dimensions
    const tooltipEl = this.tooltipElement.nativeElement;
    const originalVisibility = tooltipEl.style.visibility;
    const originalOpacity = tooltipEl.style.opacity;
    
    tooltipEl.style.visibility = 'hidden';
    tooltipEl.style.opacity = '1';
    const tooltipRect = tooltipEl.getBoundingClientRect();
    
    tooltipEl.style.visibility = originalVisibility;
    tooltipEl.style.opacity = originalOpacity;
    
    let top = 0;
    let left = 0;
    let transform = '';
    
    switch (this.position) {
      case 'top':
        top = wrapperRect.top - tooltipRect.height - 8;
        left = wrapperRect.left + (wrapperRect.width / 2);
        transform = 'translateX(-50%)';
        break;
        
      case 'bottom':
        top = wrapperRect.bottom + 8;
        left = wrapperRect.left + (wrapperRect.width / 2);
        transform = 'translateX(-50%)';
        break;
        
      case 'left':
        top = wrapperRect.top + (wrapperRect.height / 2);
        left = wrapperRect.left - tooltipRect.width - 8;
        transform = 'translateY(-50%)';
        break;
        
      case 'right':
        top = wrapperRect.top + (wrapperRect.height / 2);
        left = wrapperRect.right + 8;
        transform = 'translateY(-50%)';
        break;
    }
    
    // Viewport boundary checks
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Horizontal boundary check
    if (left < 10) {
      left = 10;
      transform = transform.includes('translateY') ? 'translateY(-50%)' : '';
    } else if (left + tooltipRect.width > viewportWidth - 10) {
      left = viewportWidth - tooltipRect.width - 10;
      transform = transform.includes('translateY') ? 'translateY(-50%)' : '';
    }
    
    // Vertical boundary check
    if (top < 10) {
      top = 10;
      if (this.position === 'left' || this.position === 'right') {
        transform = '';
      }
    } else if (top + tooltipRect.height > viewportHeight - 10) {
      top = viewportHeight - tooltipRect.height - 10;
      if (this.position === 'left' || this.position === 'right') {
        transform = '';
      }
    }
    
    this.tooltipTop = top;
    this.tooltipLeft = left;
    this.transform = transform;
  }

  private clearTimeouts() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }
  }

  getTooltipClasses(): string[] {
    // Ensure we always return strings only for ngClass
    const safeVariant = (typeof this.variant === 'string' && this.variant) ? this.variant : 'basic';
    const safePosition = (typeof this.position === 'string' && this.position) ? this.position : 'top';
    
    const classes: string[] = [safeVariant, safePosition];
    
    if (this.isVisible) {
      classes.push('visible');
    }
    
    return classes;
  }

  ngOnDestroy() {
    this.clearTimeouts();
  }
}