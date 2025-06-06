import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sog-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="sog-chip"
      [ngClass]="getChipClasses()"
      (click)="onClick()"
      [attr.role]="clickable ? 'button' : null"
      [attr.tabindex]="clickable && !disabled ? '0' : null"
      [attr.aria-pressed]="clickable && selected ? 'true' : null"
    >
      <!-- Leading icon or avatar -->
      <span
        *ngIf="leadingIcon"
        class="chip-icon leading"
        [innerHTML]="leadingIcon"
      ></span>
      <img *ngIf="avatar" [src]="avatar" [alt]="label" class="chip-avatar" />

      <!-- Chip content -->
      <span class="chip-label">
        {{ label }}
        <ng-content></ng-content>
      </span>

      <!-- Trailing icon or remove button -->
      <span
        *ngIf="trailingIcon && !removable"
        class="chip-icon trailing"
        [innerHTML]="trailingIcon"
      ></span>

      <button
        *ngIf="removable"
        class="chip-remove"
        (click)="onRemove($event)"
        [attr.aria-label]="'Remove ' + label"
        [disabled]="disabled"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  `,
  styles: [
    `
      .sog-chip {
        display: inline-flex;
        align-items: center;
        font-family: inherit;
        font-weight: 500;
        line-height: 1;
        user-select: none;
        white-space: nowrap;
        cursor: default;
        transition: all 0.2s ease;
        position: relative;

        &.clickable {
          cursor: pointer;
        }

        &.disabled {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }

        &.basic {
          border-radius: 16px;
          border: 1px solid #e0e0e0;
          background: #f8f9fa;

          &.xs {
            height: 20px;
            padding: 0 8px;
            font-size: 11px;

            .chip-avatar {
              width: 16px;
              height: 16px;
              margin-left: -4px;
              margin-right: 4px;
            }

            .chip-icon {
              width: 12px;
              height: 12px;

              &.leading {
                margin-right: 4px;
              }
              &.trailing {
                margin-left: 4px;
              }
            }

            .chip-remove {
              width: 16px;
              height: 16px;
              margin-left: 4px;
              margin-right: -4px;
            }
          }

          &.sm {
            height: 24px;
            padding: 0 10px;
            font-size: 12px;

            .chip-avatar {
              width: 20px;
              height: 20px;
              margin-left: -6px;
              margin-right: 6px;
            }

            .chip-icon {
              width: 14px;
              height: 14px;

              &.leading {
                margin-right: 6px;
              }
              &.trailing {
                margin-left: 6px;
              }
            }

            .chip-remove {
              width: 18px;
              height: 18px;
              margin-left: 6px;
              margin-right: -4px;
            }
          }

          &.md {
            height: 32px;
            padding: 0 12px;
            font-size: 14px;

            .chip-avatar {
              width: 24px;
              height: 24px;
              margin-left: -6px;
              margin-right: 8px;
            }

            .chip-icon {
              width: 16px;
              height: 16px;

              &.leading {
                margin-right: 8px;
              }
              &.trailing {
                margin-left: 8px;
              }
            }

            .chip-remove {
              width: 20px;
              height: 20px;
              margin-left: 8px;
              margin-right: -4px;
            }
          }

          &.lg {
            height: 40px;
            padding: 0 16px;
            font-size: 16px;

            .chip-avatar {
              width: 32px;
              height: 32px;
              margin-left: -8px;
              margin-right: 8px;
            }

            .chip-icon {
              width: 18px;
              height: 18px;

              &.leading {
                margin-right: 8px;
              }
              &.trailing {
                margin-left: 8px;
              }
            }

            .chip-remove {
              width: 24px;
              height: 24px;
              margin-left: 8px;
              margin-right: -6px;
            }
          }

          &:hover:not(.disabled) {
            background: #e9ecef;
            border-color: #dee2e6;
          }

          &.clickable:hover:not(.disabled) {
            background: #e9ecef;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        }

        &.material {
          border-radius: 16px;
          background: #e0e0e0;
          border: none;

          &.xs {
            height: 24px;
            padding: 0 8px;
            font-size: 12px;
          }

          &.sm {
            height: 28px;
            padding: 0 12px;
            font-size: 13px;
          }

          &.md {
            height: 32px;
            padding: 0 12px;
            font-size: 14px;
          }

          &.lg {
            height: 40px;
            padding: 0 16px;
            font-size: 15px;
          }

          &:hover:not(.disabled) {
            background: #d5d5d5;
          }

          &.clickable:hover:not(.disabled) {
            background: #d5d5d5;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
        }

        &.outlined {
          border-radius: 16px;
          background: transparent;
          border: 1px solid #e0e0e0;
          color: #333;

          &.xs {
            height: 20px;
            padding: 0 8px;
            font-size: 11px;
          }

          &.sm {
            height: 24px;
            padding: 0 10px;
            font-size: 12px;
          }

          &.md {
            height: 32px;
            padding: 0 12px;
            font-size: 14px;
          }

          &.lg {
            height: 40px;
            padding: 0 16px;
            font-size: 16px;
          }

          &:hover:not(.disabled) {
            background: rgba(0, 0, 0, 0.04);
            border-color: #ccc;
          }

          &.clickable:hover:not(.disabled) {
            background: rgba(0, 0, 0, 0.04);
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          &.selected {
            background: #3498db;
            border-color: #3498db;
            color: white;

            &:hover:not(.disabled) {
              background: #2980b9;
              border-color: #2980b9;
            }
          }

          &.primary.selected {
            background: #3498db;
            border-color: #3498db;
            color: white;
          }

          &.success.selected {
            background: #16a34a;
            border-color: #16a34a;
            color: white;
          }

          &.warning.selected {
            background: #f39c12;
            border-color: #f39c12;
            color: white;
          }

          &.danger.selected {
            background: #e74c3c;
            border-color: #e74c3c;
            color: white;
          }

          // Outlined color variants
          &.primary {
            border-color: #3498db;
            color: #3498db;

            &:hover:not(.disabled) {
              background: rgba(52, 152, 219, 0.1);
            }
          }

          &.success {
            border-color: #16a34a;
            color: white;

            &:hover:not(.disabled) {
              background: rgba(22, 163, 74, 0.1);
              color: #16a34a;
            }
          }

          &.warning {
            border-color: #f39c12;
            color: white;

            &:hover:not(.disabled) {
              background: rgba(243, 156, 18, 0.1);
              color: #f39c12;
            }
          }

          &.danger {
            border-color: #e74c3c;
            color: white;

            &:hover:not(.disabled) {
              background: rgba(231, 76, 60, 0.1);
              color: #e74c3c;
            }
          }

          &.info {
            border-color: #17a2b8;
            color: #17a2b8;

            &:hover:not(.disabled) {
              background: rgba(23, 162, 184, 0.1);
            }
          }

          &.secondary {
            border-color: #6c757d;
            color: #6c757d;

            &:hover:not(.disabled) {
              background: rgba(108, 117, 125, 0.1);
            }
          }
        }

        // Colors
        &.primary {
          background: #3498db;
          color: white;
          border-color: #3498db;

          &:hover:not(.disabled) {
            background: #2980b9;
            border-color: #2980b9;
          }
        }

        &.secondary {
          background: #6c757d;
          color: white;
          border-color: #6c757d;

          &:hover:not(.disabled) {
            background: #5a6268;
            border-color: #5a6268;
          }
        }

        &.success {
          background: #16a34a;
          color: white;
          border-color: #16a34a;

          &:hover:not(.disabled) {
            background: #15803d;
            border-color: #15803d;
          }
        }

        &.danger {
          background: #e74c3c;
          color: white;
          border-color: #e74c3c;

          &:hover:not(.disabled) {
            background: #c0392b;
            border-color: #c0392b;
          }
        }

        &.warning {
          background: #f39c12;
          color: white;
          border-color: #f39c12;

          &:hover:not(.disabled) {
            background: #e67e22;
            border-color: #e67e22;
          }
        }

        &.info {
          background: #17a2b8;
          color: white;
          border-color: #17a2b8;

          &:hover:not(.disabled) {
            background: #138496;
            border-color: #138496;
          }
        }

        .chip-avatar {
          border-radius: 50%;
          object-fit: cover;
        }

        .chip-icon {
          display: inline-block;
          flex-shrink: 0;
          color: currentColor;
        }

        .chip-label {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }

        .chip-remove {
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
          opacity: 0.7;
          transition: all 0.2s ease;
          flex-shrink: 0;

          &:hover:not(:disabled) {
            opacity: 1;
            background: rgba(0, 0, 0, 0.1);
          }

          svg {
            width: 70%;
            height: 70%;
          }
        }
      }
    `,
  ],
})
export class SognatoreChip {
  @Input() label: string = '';
  @Input() variant: 'basic' | 'material' | 'outlined' = 'basic';
  @Input() color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info' = 'default';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() removable: boolean = false;
  @Input() clickable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() leadingIcon: string = '';
  @Input() trailingIcon: string = '';
  @Input() avatar: string = '';

  @Output() chipClick = new EventEmitter<void>();
  @Output() chipRemove = new EventEmitter<void>();

  onRemove(event: Event) {
    event.stopPropagation();
    if (!this.disabled) {
      this.chipRemove.emit();
    }
  }

  onClick() {
    if (this.clickable && !this.disabled) {
      this.chipClick.emit();
    }
  }

  getChipClasses(): string[] {
    const safeVariant =
      typeof this.variant === 'string' ? this.variant : 'basic';
    const safeColor = typeof this.color === 'string' ? this.color : 'default';
    const safeSize = typeof this.size === 'string' ? this.size : 'md';

    const classes: string[] = [safeVariant, safeColor, safeSize];

    if (this.clickable) {
      classes.push('clickable');
    }

    if (this.disabled) {
      classes.push('disabled');
    }

    if (this.selected) {
      classes.push('selected');
    }

    return classes;
  }
}
