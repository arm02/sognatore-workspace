import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sog-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sog-modal-overlay" 
         *ngIf="isOpen" 
         [ngClass]="getOverlayClasses()"
         (click)="onOverlayClick($event)">
      <div class="modal-container" 
           [ngClass]="getContainerClasses()"
           (click)="$event.stopPropagation()">
        
        <div class="modal-header" *ngIf="hasHeader || title">
          <div class="header-content">
            <h3 class="modal-title" *ngIf="title">{{ title }}</h3>
            <ng-content select="[slot=header]"></ng-content>
          </div>
          <button 
            class="close-button" 
            *ngIf="showCloseButton"
            (click)="close()"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        
        <div class="modal-footer" *ngIf="hasFooter">
          <ng-content select="[slot=footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .sog-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
        box-sizing: border-box;
        animation: fadeIn 0.3s ease;
        
        &.basic {
          .modal-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            max-height: 90vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            animation: slideIn 0.3s ease;
            
            &.small { width: 300px; max-width: 90vw; }
            &.medium { width: 500px; max-width: 90vw; }
            &.large { width: 800px; max-width: 90vw; }
            &.fullscreen {
              width: 100%;
              height: 100%;
              max-width: 100vw;
              max-height: 100vh;
              border-radius: 0;
            }
            
            .modal-header {
              padding: 20px 20px 0 20px;
              border-bottom: 1px solid #f0f0f0;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              
              .header-content {
                flex: 1;
                
                .modal-title {
                  margin: 0 0 10px 0;
                  font-size: 18px;
                  font-weight: 600;
                  color: #333;
                }
              }
              
              .close-button {
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                color: #666;
                transition: all 0.2s ease;
                margin-left: 16px;
                
                &:hover {
                  background: #f0f0f0;
                  color: #333;
                }
              }
            }
            
            .modal-body {
              padding: 20px;
              overflow-y: auto;
              flex: 1;
            }
            
            .modal-footer {
              padding: 0 20px 20px 20px;
              border-top: 1px solid #f0f0f0;
              display: flex;
              justify-content: flex-end;
              gap: 12px;
            }
          }
        }
        
        &.material {
          .modal-container {
            background: white;
            border-radius: 4px;
            box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0 9px 46px 8px rgba(0, 0, 0, 0.12);
            max-height: 90vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            animation: slideIn 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            
            &.small { width: 280px; max-width: 90vw; }
            &.medium { width: 560px; max-width: 90vw; }
            &.large { width: 896px; max-width: 90vw; }
            &.fullscreen {
              width: 100%;
              height: 100%;
              max-width: 100vw;
              max-height: 100vh;
              border-radius: 0;
            }
            
            .modal-header {
              padding: 24px 24px 20px 24px;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              
              .header-content {
                flex: 1;
                
                .modal-title {
                  margin: 0;
                  font-size: 20px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 0.87);
                  line-height: 1.25;
                }
              }
              
              .close-button {
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                border-radius: 50%;
                color: rgba(0, 0, 0, 0.54);
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                margin: -8px -8px -8px 16px;
                
                &:hover {
                  background: rgba(0, 0, 0, 0.04);
                  color: rgba(0, 0, 0, 0.87);
                }
              }
            }
            
            .modal-body {
              padding: 0 24px;
              overflow-y: auto;
              flex: 1;
              color: rgba(0, 0, 0, 0.6);
              line-height: 1.5;
            }
            
            .modal-footer {
              padding: 8px 8px 8px 24px;
              display: flex;
              justify-content: flex-end;
              gap: 8px;
            }
          }
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideIn {
        from { 
          opacity: 0;
          transform: scale(0.9) translateY(-10px);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
    `,
  ],
})
export class SognatoreModal {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() fullscreen: boolean = false;
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
  @Input() showCloseButton: boolean = true;
  @Input() closeOnOverlayClick: boolean = true;
  @Input() closeOnEscape: boolean = true;
  @Input() class: string = 'basic';
  
  @Output() closeModal = new EventEmitter<void>();
  @Output() openModal = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.isOpen && this.closeOnEscape) {
      this.close();
    }
  }

  onOverlayClick(event: MouseEvent) {
    if (this.closeOnOverlayClick) {
      this.close();
    }
  }

  open() {
    this.isOpen = true;
    this.openModal.emit();
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    this.closeModal.emit();
    document.body.style.overflow = '';
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  getOverlayClasses(): string {
    // Ensure class is always a string
    if (typeof this.class === 'string') {
      return this.class;
    } else if (typeof this.class === 'object' && this.class !== null) {
      console.warn('Modal class input received object instead of string:', this.class, 'using default');
      return 'basic';
    }
    console.warn('Modal class input is undefined/null, using default');
    return 'basic';
  }

  getContainerClasses(): string[] {
    const safeSize = typeof this.size === 'string' ? this.size : 'medium';
    if (typeof this.size !== 'string') {
      console.warn('Modal size input received non-string:', typeof this.size, this.size, 'using default');
    }
    
    const classes: string[] = [safeSize];
    
    if (this.fullscreen) {
      classes.push('fullscreen');
    }
    
    return classes;
  }
}