import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sog-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sog-progress" [ngClass]="getProgressClasses()">
      <!-- Linear Progress -->
      <div *ngIf="type === 'linear'" class="progress-linear">
        <div class="progress-track">
          <div 
            class="progress-bar" 
            [ngClass]="color"
            [style.width.%]="indeterminate ? null : currentValue"
            [style.transform]="indeterminate ? null : 'translateX(-' + (100 - currentValue) + '%)'"
          >
            <div *ngIf="indeterminate" class="progress-indeterminate"></div>
          </div>
        </div>
        
        <!-- Label -->
        <div *ngIf="showLabel" class="progress-label">
          <span *ngIf="!labelTemplate">{{ currentValue }}%</span>
          <ng-content select="[slot=label]"></ng-content>
        </div>
      </div>
      
      <!-- Circular Progress -->
      <div *ngIf="type === 'circular'" class="progress-circular">
        <svg 
          class="progress-svg" 
          [attr.width]="getCircularSize()"
          [attr.height]="getCircularSize()"
          [attr.viewBox]="'0 0 ' + getCircularSize() + ' ' + getCircularSize()"
        >
          <!-- Background circle -->
          <circle
            class="progress-circle-bg"
            [attr.cx]="getCircularSize() / 2"
            [attr.cy]="getCircularSize() / 2"
            [attr.r]="getRadius()"
            fill="none"
            [attr.stroke-width]="strokeWidth"
          />
          
          <!-- Progress circle -->
          <circle
            class="progress-circle"
            [ngClass]="color"
            [attr.cx]="getCircularSize() / 2"
            [attr.cy]="getCircularSize() / 2"
            [attr.r]="getRadius()"
            fill="none"
            [attr.stroke-width]="strokeWidth"
            [attr.stroke-dasharray]="getCircumference()"
            [attr.stroke-dashoffset]="indeterminate ? null : getStrokeDashOffset()"
            [ngClass]="getCircleClasses()"
          />
        </svg>
        
        <!-- Center content -->
        <div class="progress-center" *ngIf="showLabel || hasContent">
          <span *ngIf="showLabel && !hasContent">{{ currentValue }}%</span>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .sog-progress {
        width: 100%;
        
        &.basic {
          .progress-linear {
            .progress-track {
              width: 100%;
              background: #e0e0e0;
              border-radius: 8px;
              overflow: hidden;
              position: relative;
              
              .progress-bar {
                height: 100%;
                border-radius: 8px;
                transition: width 0.3s ease;
                position: relative;
                
                &.primary { background: #3498db; }
                &.secondary { background: #6c757d; }
                &.success { background: #27ae60; }
                &.danger { background: #e74c3c; }
                &.warning { background: #f39c12; }
                &.info { background: #17a2b8; }
                
                .progress-indeterminate {
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  background: inherit;
                  animation: indeterminate 2s linear infinite;
                }
              }
            }
            
            .progress-label {
              margin-top: 8px;
              text-align: center;
              font-size: 14px;
              color: #666;
            }
          }
          
          .progress-circular {
            position: relative;
            display: inline-block;
            
            .progress-svg {
              transform: rotate(-90deg);
            }
            
            .progress-circle-bg {
              stroke: #e0e0e0;
            }
            
            .progress-circle {
              transition: stroke-dashoffset 0.3s ease;
              
              &.primary { stroke: #3498db; }
              &.secondary { stroke: #6c757d; }
              &.success { stroke: #27ae60; }
              &.danger { stroke: #e74c3c; }
              &.warning { stroke: #f39c12; }
              &.info { stroke: #17a2b8; }
              
              &.indeterminate {
                animation: rotate 2s linear infinite;
              }
            }
            
            .progress-center {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              color: #666;
              font-weight: 600;
              line-height: 1;
              pointer-events: none;
              margin: 0;
              padding: 0;
              
              span {
                display: block;
                margin: 0;
                padding: 0;
                line-height: 1;
              }
            }
          }
          
          &.xs {
            .progress-track { height: 4px; }
            .progress-center { font-size: 8px; }
          }
          &.sm {
            .progress-track { height: 6px; }
            .progress-center { font-size: 10px; }
          }
          &.md {
            .progress-track { height: 8px; }
            .progress-center { font-size: 12px; }
          }
          &.lg {
            .progress-track { height: 12px; }
            .progress-center { font-size: 14px; }
          }
          &.xl {
            .progress-track { height: 16px; }
            .progress-center { font-size: 16px; }
          }
        }
        
        &.material {
          .progress-linear {
            .progress-track {
              width: 100%;
              background: rgba(0, 0, 0, 0.1);
              border-radius: 2px;
              overflow: hidden;
              position: relative;
              
              .progress-bar {
                height: 100%;
                border-radius: 2px;
                transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                
                &.primary { background: #3f51b5; }
                &.secondary { background: #757575; }
                &.success { background: #4caf50; }
                &.danger { background: #f44336; }
                &.warning { background: #ff9800; }
                &.info { background: #2196f3; }
                
                .progress-indeterminate {
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  background: inherit;
                  animation: indeterminate-material 2s linear infinite;
                }
              }
            }
            
            .progress-label {
              margin-top: 8px;
              text-align: right;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.6);
              font-weight: 500;
            }
          }
          
          .progress-circular {
            position: relative;
            display: inline-block;
            
            .progress-svg {
              transform: rotate(-90deg);
            }
            
            .progress-circle-bg {
              stroke: rgba(0, 0, 0, 0.1);
            }
            
            .progress-circle {
              transition: stroke-dashoffset 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              
              &.primary { stroke: #3f51b5; }
              &.secondary { stroke: #757575; }
              &.success { stroke: #4caf50; }
              &.danger { stroke: #f44336; }
              &.warning { stroke: #ff9800; }
              &.info { stroke: #2196f3; }
              
              &.indeterminate {
                animation: rotate 1.4s linear infinite;
              }
            }
            
            .progress-center {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              color: rgba(0, 0, 0, 0.6);
              font-weight: 500;
              line-height: 1;
              pointer-events: none;
              margin: 0;
              padding: 0;
              
              span {
                display: block;
                margin: 0;
                padding: 0;
                line-height: 1;
              }
            }
          }
          
          &.xs {
            .progress-track { height: 4px; }
            .progress-center { font-size: 7px; }
          }
          &.sm {
            .progress-track { height: 4px; }
            .progress-center { font-size: 9px; }
          }
          &.md {
            .progress-track { height: 4px; }
            .progress-center { font-size: 10px; }
          }
          &.lg {
            .progress-track { height: 6px; }
            .progress-center { font-size: 12px; }
          }
          &.xl {
            .progress-track { height: 8px; }
            .progress-center { font-size: 14px; }
          }
        }
      }
      
      @keyframes indeterminate {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      
      @keyframes indeterminate-material {
        0% {
          transform: translateX(-100%) scaleX(0.5);
        }
        50% {
          transform: translateX(0%) scaleX(0.8);
        }
        100% {
          transform: translateX(100%) scaleX(0.5);
        }
      }
      
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SognatoreProgress implements OnInit, OnChanges {
  @Input() type: 'linear' | 'circular' = 'linear';
  @Input() variant: 'basic' | 'material' = 'basic';
  @Input() value: number = 0;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Input() indeterminate: boolean = false;
  @Input() showLabel: boolean = false;
  @Input() labelTemplate: boolean = false;
  @Input() strokeWidth: number = 4;
  @Input() circularSize: number = 40;
  @Input() hasContent: boolean = false;
  
  currentValue: number = 0;

  ngOnInit() {
    this.updateValue();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.updateValue();
    }
  }

  private updateValue() {
    this.currentValue = Math.max(0, Math.min(100, this.value));
  }

  getCircularSize(): number {
    const sizeMap = {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 56,
      xl: 72
    };
    
    return this.circularSize || sizeMap[this.size];
  }

  getRadius(): number {
    return (this.getCircularSize() - this.strokeWidth) / 2;
  }

  getCircumference(): number {
    return 2 * Math.PI * this.getRadius();
  }

  getStrokeDashOffset(): number {
    const circumference = this.getCircumference();
    return circumference - (this.currentValue / 100) * circumference;
  }

  getProgressClasses(): string[] {
    const safeVariant = typeof this.variant === 'string' ? this.variant : 'basic';
    const safeSize = typeof this.size === 'string' ? this.size : 'md';
    
    const classes: string[] = [safeVariant, safeSize];
    
    if (this.indeterminate) {
      classes.push('indeterminate');
    }
    
    return classes;
  }

  getCircleClasses(): string[] {
    const safeColor = typeof this.color === 'string' ? this.color : 'primary';
    
    const classes: string[] = [safeColor];
    
    if (this.indeterminate) {
      classes.push('indeterminate');
    }
    
    return classes;
  }
}