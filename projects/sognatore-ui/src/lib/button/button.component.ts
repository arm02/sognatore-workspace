import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sog-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="sog-button" 
      [ngClass]="getButtonClasses()"
      [disabled]="disabled || loading"
      [type]="type"
      (click)="onClick($event)">
      <span *ngIf="loading" class="loading-spinner"></span>
      <ng-content *ngIf="!loading"></ng-content>
      <span *ngIf="loading">{{ loadingText }}</span>
    </button>
  `,
  styles: [
    `
      .sog-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 6px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        font-family: inherit;
        line-height: 1.5;
        
      }
      
      .sog-button:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
      }
      
      .sog-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
      /* Variants */
      .sog-button.primary {
        background-color: #3498db;
        color: white;
      }
      
      .sog-button.primary:hover:not(:disabled) {
        background-color: #2980b9;
      }
      
      .sog-button.secondary {
        background-color: #6b7280;
        color: white;
      }
      
      .sog-button.secondary:hover:not(:disabled) {
        background-color: #4b5563;
      }
      
      .sog-button.success {
        background-color: #10b981;
        color: white;
      }
      
      .sog-button.success:hover:not(:disabled) {
        background-color: #059669;
      }
      
      .sog-button.danger {
        background-color: #ef4444;
        color: white;
      }
      
      .sog-button.danger:hover:not(:disabled) {
        background-color: #dc2626;
      }
      
      .sog-button.warning {
        background-color: #f59e0b;
        color: white;
      }
      
      .sog-button.warning:hover:not(:disabled) {
        background-color: #d97706;
      }
      
      .sog-button.outline {
        background-color: transparent;
        color: #3498db;
        border-color: #3498db;
      }
      
      .sog-button.outline:hover:not(:disabled) {
        background-color: #eff6ff;
      }
      
      .sog-button.ghost {
        background-color: transparent;
        color: #374151;
      }
      
      .sog-button.ghost:hover:not(:disabled) {
        background-color: #f3f4f6;
      }
      
      .sog-button.link {
        background-color: transparent;
        color: #3498db;
        padding: 0;
        border: none;
        text-decoration: underline;
      }
      
      .sog-button.link:hover:not(:disabled) {
        color: #2980b9;
      }
      
      /* Sizes */
      .sog-button.small {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      }
      
      .sog-button.large {
        padding: 1rem 2rem;
        font-size: 1.125rem;
      }
      
      .sog-button.full-width {
        width: 100%;
      }
      
      /* Loading state */
      .sog-button.loading {
        cursor: wait;
      }
      
      .loading-spinner {
        width: 1rem;
        height: 1rem;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SognatoreButton {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline' | 'ghost' | 'link' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingText: string = 'Loading...';
  @Input() fullWidth: boolean = false;
  @Output() click = new EventEmitter<Event>();
  
  onClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.click.emit(event);
    }
  }

  getButtonClasses(): string[] {
    const safeVariant = typeof this.variant === 'string' ? this.variant : 'primary';
    const safeSize = typeof this.size === 'string' ? this.size : 'medium';
    
    const classes: string[] = [safeVariant, safeSize];
    
    if (this.fullWidth) {
      classes.push('full-width');
    }
    
    if (this.loading) {
      classes.push('loading');
    }
    
    return classes;
  }
}
