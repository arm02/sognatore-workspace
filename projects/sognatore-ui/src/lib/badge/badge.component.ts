import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sog-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge-wrapper" [ngClass]="{ 'standalone': standalone }">
      <ng-content></ng-content>
      
      <span 
        class="sog-badge" 
        [ngClass]="[variant, color, size, position]"
        [style.display]="hidden ? 'none' : 'inline-block'"
        *ngIf="content || dot"
      >
        <span *ngIf="!dot" class="badge-content">
          {{ getDisplayContent() }}
        </span>
      </span>
    </span>
  `,
  styles: [
    `
      .badge-wrapper {
        position: relative;
        display: inline-block;
        
        &.standalone .sog-badge {
          position: static;
          transform: none;
        }
      }
      
      .sog-badge {
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        font-weight: 600;
        font-family: inherit;
        line-height: 1;
        
        &.basic {
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          
          &.xs {
            padding: 0.125rem 0.375rem;
            font-size: 0.625rem;
            font-weight: 600;
          }
          
          &.sm {
            padding: 0.125rem 0.5rem;
            font-size: 0.6875rem;
            font-weight: 600;
          }
          
          &.md {
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          &.lg {
            padding: 0.375rem 1rem;
            font-size: 0.875rem;
            font-weight: 600;
          }
          
          &.dot {
            min-width: 8px;
            height: 8px;
            padding: 0;
            border-radius: 50%;
            
            &.sm { width: 10px; height: 10px; }
            &.md { width: 12px; height: 12px; }
            &.lg { width: 14px; height: 14px; }
          }
        }
        
        &.material {
          border-radius: 10px;
          
          &.xs {
            min-width: 16px;
            height: 16px;
            padding: 0 4px;
            font-size: 10px;
          }
          
          &.sm {
            min-width: 18px;
            height: 18px;
            padding: 0 6px;
            font-size: 11px;
          }
          
          &.md {
            min-width: 20px;
            height: 20px;
            padding: 0 8px;
            font-size: 12px;
          }
          
          &.lg {
            min-width: 22px;
            height: 22px;
            padding: 0 8px;
            font-size: 12px;
          }
          
          &.dot {
            min-width: 6px;
            height: 6px;
            padding: 0;
            border-radius: 50%;
            
            &.sm { width: 8px; height: 8px; }
            &.md { width: 10px; height: 10px; }
            &.lg { width: 12px; height: 12px; }
          }
        }
        
        // Colors - Light background with dark text for better readability
        &.primary {
          background-color: rgba(52, 152, 219, 0.1);
          color: #2980b9;
        }
        
        &.secondary {
          background-color: #f3f4f6;
          color: #374151;
        }
        
        &.success {
          background-color: #dcfce7;
          color: #166534;
        }
        
        &.danger {
          background-color: #fee2e2;
          color: #991b1b;
        }
        
        &.warning {
          background-color: #fef3c7;
          color: #92400e;
        }
        
        &.info {
          background-color: #e0f2fe;
          color: #0c4a6e;
        }
        
        &.light {
          background-color: #f8f9fa;
          color: #343a40;
          border: 1px solid #dee2e6;
        }
        
        &.dark {
          background-color: #374151;
          color: white;
        }
        
        // Notification badges need solid backgrounds for visibility
        .badge-wrapper:has(.sog-badge.top-right),
        .badge-wrapper:has(.sog-badge.top-left),
        .badge-wrapper:has(.sog-badge.bottom-right),
        .badge-wrapper:has(.sog-badge.bottom-left) {
          .sog-badge {
            &.primary {
              background-color: #3498db;
              color: white;
            }
            
            &.danger {
              background-color: #ef4444;
              color: white;
            }
            
            &.success {
              background-color: #10b981;
              color: white;
            }
            
            &.warning {
              background-color: #f59e0b;
              color: white;
            }
          }
        }
        
        // Positions
        &.top-right {
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
        }
        
        &.top-left {
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
        }
        
        &.bottom-right {
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%);
        }
        
        &.bottom-left {
          bottom: 0;
          left: 0;
          transform: translate(-50%, 50%);
        }
        
        &.center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .badge-content {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100px;
        }
      }
    `,
  ],
})
export class SognatoreBadge {
  @Input() content: string | number = '';
  @Input() max: number = 99;
  @Input() dot: boolean = false;
  @Input() hidden: boolean = false;
  @Input() variant: 'basic' | 'material' = 'basic';
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center' = 'top-right';
  @Input() standalone: boolean = false;

  getDisplayContent(): string {
    if (this.dot) return '';
    
    if (typeof this.content === 'number') {
      return this.content > this.max ? `${this.max}+` : this.content.toString();
    }
    
    return this.content?.toString() || '';
  }
}