import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SogDialogRef } from './dialog-ref';
import { SOG_DIALOG_DATA } from './dialog.service';
import { SognatoreButton } from '../button/button.component';
import { FormsModule } from '@angular/forms';

// Example confirmation dialog
@Component({
  selector: 'sog-confirm-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton, FormsModule ],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Confirm' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message || 'Are you sure you want to proceed?' }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          {{ data.cancelText || 'Cancel' }}
        </sog-button>
        <sog-button appearance="primary" (click)="onConfirm()">
          {{ data.confirmText || 'Confirm' }}
        </sog-button>
      </div>
    </div>
  `,
  styles: [
    `
      .dialog-content {
        padding: 24px;
        min-width: 280px;
      }

      .dialog-header {
        margin-bottom: 16px;

        h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.87);
        }
      }

      .dialog-body {
        margin-bottom: 24px;

        p {
          margin: 0;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.5;
        }
      }

      .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
    `,
  ],
})
export class SogConfirmDialog {
  constructor(
    private dialogRef: SogDialogRef<SogConfirmDialog, boolean>,
    @Inject(SOG_DIALOG_DATA)
    public data: {
      title?: string;
      message?: string;
      confirmText?: string;
      cancelText?: string;
    }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}

// Example alert dialog
@Component({
  selector: 'sog-alert-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Alert' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="primary" (click)="onClose()">
          {{ data.buttonText || 'OK' }}
        </sog-button>
      </div>
    </div>
  `,
  styles: [
    `
      .dialog-content {
        padding: 24px;
        min-width: 280px;
      }

      .dialog-header {
        margin-bottom: 16px;

        h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.87);
        }
      }

      .dialog-body {
        margin-bottom: 24px;

        p {
          margin: 0;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.5;
        }
      }

      .dialog-actions {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
})
export class SogAlertDialog {
  constructor(
    private dialogRef: SogDialogRef<SogAlertDialog>,
    @Inject(SOG_DIALOG_DATA)
    public data: {
      title?: string;
      message: string;
      buttonText?: string;
    }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}

// Example form dialog
@Component({
  selector: 'sog-form-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton, FormsModule],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Form' }}</h2>
      </div>

      <div class="dialog-body">
        <form (ngSubmit)="onSubmit()">
          <div class="form-field" *ngFor="let field of data.fields">
            <label>{{ field.label }}</label>
            <input
              [type]="field.type || 'text'"
              [(ngModel)]="formData[field.name]"
              [name]="field.name"
              [placeholder]="field.placeholder"
              [required]="field.required || false"
            />
          </div>
        </form>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          Cancel
        </sog-button>
        <sog-button appearance="primary" (click)="onSubmit()">
          Submit
        </sog-button>
      </div>
    </div>
  `,
  styles: [
    `
      .dialog-content {
        padding: 24px;
        min-width: 400px;
      }

      .dialog-header {
        margin-bottom: 16px;

        h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.87);
        }
      }

      .dialog-body {
        margin-bottom: 24px;
      }

      .form-field {
        margin-bottom: 16px;

        label {
          display: block;
          margin-bottom: 4px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.87);
        }

        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
          }
        }
      }

      .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
    `,
  ],
})
export class SogFormDialog {
  formData: { [key: string]: any } = {};

  constructor(
    private dialogRef: SogDialogRef<SogFormDialog, any>,
    @Inject(SOG_DIALOG_DATA)
    public data: {
      title?: string;
      fields: Array<{
        name: string;
        label: string;
        type?: string;
        placeholder?: string;
        required?: boolean;
      }>;
    }
  ) {
    // Initialize form data
    this.data.fields.forEach((field) => {
      this.formData[field.name] = '';
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.formData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
