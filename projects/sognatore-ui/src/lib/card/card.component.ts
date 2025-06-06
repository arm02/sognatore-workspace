import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sog-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sog-card" [ngClass]="[variant, elevation]">
      <div class="card-header" *ngIf="hasHeader">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .sog-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        transition: box-shadow 0.3s ease;
        
        &.outlined {
          border: 1px solid #e0e0e0;
        }
        
        &.elevated {
          border: none;
        }
        
        &.elevation-1 {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        }
        
        &.elevation-2 {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
        
        &.elevation-3 {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
        
        &.elevation-4 {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }
        
        &.elevation-5 {
          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
        }
        
        &:hover {
          &.elevation-1 { box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }
          &.elevation-2 { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }
          &.elevation-3 { box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
        }
        
        .card-header {
          padding: 16px 16px 0 16px;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 16px;
          
          &:empty {
            display: none;
          }
        }
        
        .card-content {
          padding: 16px;
        }
        
        .card-footer {
          padding: 0 16px 16px 16px;
          border-top: 1px solid #f0f0f0;
          margin-top: 16px;
          padding-top: 16px;
          
          &:empty {
            display: none;
          }
        }
      }
    `,
  ],
})
export class SognatoreCard {
  @Input() variant: 'outlined' | 'elevated' = 'outlined';
  @Input() elevation: 'elevation-1' | 'elevation-2' | 'elevation-3' | 'elevation-4' | 'elevation-5' = 'elevation-1';
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
}