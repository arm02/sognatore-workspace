import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/lib/button/button.component';
import { SogDialog } from '../../../../../../sognatore-ui/src/lib/dialog/dialog.service';
import { SogDialogRef } from '../../../../../../sognatore-ui/src/lib/dialog/dialog-ref';

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Dialog Component</h1>
        <p class="page-description">
          Modal dialog component for displaying content over the main interface with backdrop, animations, and accessibility features.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple dialog with title, content, and action buttons.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-button variant="primary" (click)="openBasicDialog()">
              Open Basic Dialog
            </sog-button>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Dialog Sizes</h2>
        <p>Dialogs in different sizes for various content types.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" (click)="openSmallDialog()">
                Small Dialog
              </sog-button>
              <sog-button variant="primary" (click)="openMediumDialog()">
                Medium Dialog
              </sog-button>
              <sog-button variant="primary" (click)="openLargeDialog()">
                Large Dialog
              </sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Alert Dialogs</h2>
        <p>Simple alert dialogs for notifications and confirmations.</p>
        
        <app-code-example
          [code]="alertCode"
          [htmlCode]="alertHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="success" (click)="openSuccessAlert()">
                Success Alert
              </sog-button>
              <sog-button variant="warning" (click)="openWarningAlert()">
                Warning Alert
              </sog-button>
              <sog-button variant="danger" (click)="openErrorAlert()">
                Error Alert
              </sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Service Usage</h2>
        <p>Using the dialog service for programmatic dialog management.</p>
        
        <app-code-example
          [code]="serviceCode"
          [htmlCode]="serviceHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" (click)="openServiceDialog()">
                Open with Service
              </sog-button>
              <sog-button variant="primary" (click)="openCustomDialog()">
                Custom Component
              </sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>API Reference</h2>
        <div class="api-table">
          <h3>Dialog Service Methods</h3>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>open()</td>
                <td>component, config</td>
                <td>Opens a dialog with the specified component</td>
              </tr>
              <tr>
                <td>alert()</td>
                <td>message, config</td>
                <td>Shows a simple alert dialog</td>
              </tr>
              <tr>
                <td>confirm()</td>
                <td>message, config</td>
                <td>Shows a confirmation dialog</td>
              </tr>
              <tr>
                <td>closeAll()</td>
                <td>-</td>
                <td>Closes all open dialogs</td>
              </tr>
            </tbody>
          </table>

          <h3>Configuration Options</h3>
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>'small' | 'medium' | 'large' | 'fullscreen'</td>
                <td>Dialog size preset</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string</td>
                <td>Custom width</td>
              </tr>
              <tr>
                <td>height</td>
                <td>string</td>
                <td>Custom height</td>
              </tr>
              <tr>
                <td>disableClose</td>
                <td>boolean</td>
                <td>Prevents closing on backdrop click</td>
              </tr>
              <tr>
                <td>data</td>
                <td>any</td>
                <td>Data to pass to dialog component</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-header {
      margin-bottom: 3rem;
    }

    .page-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 1rem;
    }

    .page-description {
      font-size: 1.125rem;
      color: var(--gray-600);
      max-width: 600px;
    }

    .section {
      margin-bottom: 3rem;
    }

    .section h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 0.5rem;
    }

    .section p {
      color: var(--gray-600);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .demo-container {
      padding: 2rem;
      background: var(--gray-50);
      border-radius: 8px;
      margin-top: 1rem;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .api-table {
      margin-top: 2rem;
    }

    .api-table h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
      margin-top: 2rem;
    }

    .api-table h3:first-child {
      margin-top: 0;
    }

    .api-table table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    .api-table th,
    .api-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--gray-200);
    }

    .api-table th {
      background-color: var(--gray-50);
      font-weight: 600;
      color: var(--gray-900);
    }

    .api-table td {
      color: var(--gray-600);
    }

    .api-table tr:last-child td {
      border-bottom: none;
    }

    .alert-content {
      text-align: center;
    }

    .alert-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: 0 auto 16px;
      font-weight: bold;
    }

    .alert-icon--success {
      background: #dcfce7;
      color: #166534;
    }

    .alert-icon--warning {
      background: #fef3c7;
      color: #92400e;
    }

    .alert-icon--error {
      background: #fee2e2;
      color: #991b1b;
    }

    .form-section {
      margin: 20px 0;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: var(--gray-700);
      margin-bottom: 4px;
    }

    .form-group input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--gray-300);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.2s ease;
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .content-sections {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin: 20px 0;
    }

    .content-section h4 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0 0 16px 0;
    }

    .feature-list {
      margin: 20px 0;
    }

    .feature-list h4 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0 0 12px 0;
    }

    .feature-list ul {
      margin: 0;
      padding-left: 20px;
    }

    .feature-list li {
      margin-bottom: 8px;
      color: var(--gray-600);
    }

    .text-center {
      text-align: center;
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .button-group {
        flex-direction: column;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DialogDemoComponent {
  constructor(private dialog: SogDialog) {}

  openBasicDialog() {
    const dialogRef = this.dialog.open(BasicDialogComponent, {
      size: 'medium',
      data: {
        title: 'Confirm Action',
        message: 'Are you sure you want to delete this item? This action cannot be undone.'
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'delete') {
        // Item deleted
      }
    });
  }

  openSmallDialog() {
    this.dialog.open(SimpleDialogComponent, {
      size: 'small',
      data: {
        title: 'Small Dialog',
        message: 'This is a small dialog perfect for simple confirmations and alerts.',
        buttonText: 'OK'
      }
    });
  }

  openMediumDialog() {
    this.dialog.open(FormDialogComponent, {
      size: 'medium',
      data: {
        title: 'Medium Dialog',
        message: 'This is a medium-sized dialog suitable for forms and detailed content.'
      }
    });
  }

  openLargeDialog() {
    this.dialog.open(LargeFormDialogComponent, {
      size: 'large',
      data: {
        title: 'Large Dialog',
        message: 'This is a large dialog for complex content, detailed forms, or rich media.'
      }
    });
  }

  openSuccessAlert() {
    this.dialog.open(AlertDialogComponent, {
      size: 'small',
      data: {
        type: 'success',
        title: 'Success!',
        message: 'Your changes have been saved successfully.',
        buttonText: 'OK'
      }
    });
  }

  openWarningAlert() {
    this.dialog.open(AlertDialogComponent, {
      size: 'small',
      data: {
        type: 'warning',
        title: 'Warning',
        message: 'This action will permanently delete all selected items. Are you sure?',
        showCancel: true
      }
    });
  }

  openErrorAlert() {
    this.dialog.open(AlertDialogComponent, {
      size: 'small',
      data: {
        type: 'error',
        title: 'Error',
        message: 'Something went wrong. Please try again later or contact support if the problem persists.',
        buttonText: 'OK'
      }
    });
  }

  openServiceDialog() {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '500px',
      data: {
        title: 'Service Dialog',
        content: 'This dialog was opened using the SogDialog service.'
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      // Dialog closed
    });
  }

  openCustomDialog() {
    this.dialog.open(CustomDialogComponent, {
      size: 'large',
      data: {
        title: 'Custom Component',
        customData: 'This is a custom dialog with advanced features.'
      }
    });
  }

  basicUsageCode = `import { Component } from '@angular/core';
import { SogDialog } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  template: \`
    <button (click)="openDialog()">Open Dialog</button>
  \`
})
export class ExampleComponent {
  constructor(private dialog: SogDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Action',
        message: 'Are you sure you want to delete this item?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Confirmed');
      }
    });
  }
}`;

  basicUsageHtml = `<button (click)="openDialog()">Open Dialog</button>`;

  sizesCode = `// Small dialog for simple alerts
this.dialog.open(AlertComponent, {
  size: 'small',
  data: { message: 'Simple message' }
});

// Medium dialog for forms
this.dialog.open(FormComponent, {
  size: 'medium',
  data: { user: userData }
});

// Large dialog for complex content
this.dialog.open(DetailComponent, {
  size: 'large',
  data: { details: detailedData }
});`;

  sizesHtml = `<sog-dialog size="small">
  <!-- Small dialog content -->
</sog-dialog>

<sog-dialog size="medium">
  <!-- Medium dialog content -->
</sog-dialog>

<sog-dialog size="large">
  <!-- Large dialog content -->
</sog-dialog>`;

  alertCode = `// Success alert
this.dialog.alert('Your changes have been saved successfully!', {
  type: 'success',
  title: 'Success!'
});

// Warning confirmation
this.dialog.confirm('This action cannot be undone. Continue?', {
  type: 'warning',
  title: 'Warning',
  confirmText: 'Continue',
  cancelText: 'Cancel'
}).subscribe(result => {
  if (result) {
    // User confirmed
  }
});

// Error alert
this.dialog.alert('Something went wrong. Please try again.', {
  type: 'error',
  title: 'Error'
});`;

  alertHtml = `<!-- Success Alert -->
<sog-dialog type="success">
  <sog-dialog-body class="text-center">
    <div class="alert-icon alert-icon--success">✓</div>
    <h3>Success!</h3>
    <p>Your changes have been saved successfully.</p>
  </sog-dialog-body>
</sog-dialog>

<!-- Warning Alert -->
<sog-dialog type="warning">
  <sog-dialog-body class="text-center">
    <div class="alert-icon alert-icon--warning">⚠️</div>
    <h3>Warning</h3>
    <p>This action will permanently delete all selected items.</p>
  </sog-dialog-body>
</sog-dialog>`;

  serviceCode = `import { Component, Inject } from '@angular/core';
import { SogDialog, SogDialogRef, SOG_DIALOG_DATA } from '@sognatore/ui';

@Component({
  template: \`
    <button (click)="openDialog()">Open Dialog</button>
  \`
})
export class ExampleComponent {
  constructor(private dialog: SogDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MyCustomComponent, {
      width: '500px',
      data: { 
        title: 'Custom Dialog',
        content: 'This is a custom dialog component'
      },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
}

@Component({
  template: \`
    <sog-dialog-header>
      <h3>{{data.title}}</h3>
    </sog-dialog-header>
    <sog-dialog-body>
      <p>{{data.content}}</p>
    </sog-dialog-body>
    <sog-dialog-footer>
      <button sog-button (click)="close()">Cancel</button>
      <button sog-button="primary" (click)="save()">Save</button>
    </sog-dialog-footer>
  \`
})
export class MyCustomComponent {
  constructor(
    private dialogRef: SogDialogRef<MyCustomComponent>,
    @Inject(SOG_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({ saved: true });
  }
}`;

  serviceHtml = `<button (click)="openDialog()">Open Dialog</button>`;
}

// Dialog Content Components
@Component({
  selector: 'basic-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>
      <div class="dialog-footer">
        <button class="dialog-btn dialog-btn--ghost" (click)="handleClose()">Cancel</button>
        <button class="dialog-btn dialog-btn--danger" (click)="handleConfirm()">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
      min-width: 400px;
    }
    .dialog-header {
      margin-bottom: 16px;
    }
    .dialog-header h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
    }
    .dialog-body {
      margin-bottom: 24px;
    }
    .dialog-body p {
      margin: 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .dialog-footer {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
    .dialog-btn {
      padding: 8px 16px;
      border: 1px solid transparent;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    .dialog-btn--ghost {
      background: transparent;
      border-color: #d1d5db;
      color: #374151;
    }
    .dialog-btn--ghost:hover {
      background: #f3f4f6;
    }
    .dialog-btn--danger {
      background: #dc2626;
      color: white;
    }
    .dialog-btn--danger:hover {
      background: #b91c1c;
    }
  `]
})
export class BasicDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<BasicDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  handleClose() {
    this.dialogRef.close('cancel');
  }

  handleConfirm() {
    this.dialogRef.close('delete');
  }

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close('delete');
  }
}

@Component({
  selector: 'simple-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>
      <div class="dialog-footer">
        <sog-button variant="primary" (click)="handleClose($event)">{{ data.buttonText || 'OK' }}</sog-button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
      min-width: 300px;
      text-align: center;
    }
    .dialog-header h3 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }
    .dialog-body p {
      margin: 0 0 24px 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .dialog-footer {
      display: flex;
      justify-content: center;
    }
  `]
})
export class SimpleDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<SimpleDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  handleClose(event: Event) {
    event.stopPropagation();
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'form-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="dialog-body">
        <p>{{ data.message }}</p>
        <div class="form-section">
          <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email">
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <sog-button variant="ghost" (click)="close()">Cancel</sog-button>
        <sog-button variant="primary" (click)="save()">Save</sog-button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
      min-width: 450px;
    }
    .dialog-header h3 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }
    .dialog-body p {
      margin: 0 0 20px 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .form-section {
      margin-bottom: 24px;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-group label {
      display: block;
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 500;
      color: #374151;
    }
    .form-group input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
    }
    .form-group input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    .dialog-footer {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
  `]
})
export class FormDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<FormDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close('saved');
  }
}

@Component({
  selector: 'large-form-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="dialog-body">
        <p>{{ data.message }}</p>
        <div class="content-sections">
          <div class="content-section">
            <h4>Personal Information</h4>
            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input type="text">
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text">
              </div>
            </div>
          </div>
          <div class="content-section">
            <h4>Contact Details</h4>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email">
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel">
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <sog-button variant="ghost" (click)="close()">Cancel</sog-button>
        <sog-button variant="primary" (click)="save()">Save Changes</sog-button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
      min-width: 600px;
    }
    .dialog-header h3 {
      margin: 0 0 16px 0;
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
    }
    .dialog-body p {
      margin: 0 0 24px 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .content-sections {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 24px;
    }
    .content-section h4 {
      margin: 0 0 16px 0;
      font-size: 16px;
      font-weight: 600;
      color: #1f2937;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-group label {
      display: block;
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 500;
      color: #374151;
    }
    .form-group input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
    }
    .form-group input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    .dialog-footer {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
  `]
})
export class LargeFormDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<LargeFormDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close('saved');
  }
}

@Component({
  selector: 'alert-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-body text-center">
        <div class="alert-icon" [ngClass]="'alert-icon--' + data.type">
          <span [innerHTML]="getIcon()"></span>
        </div>
        <h3>{{ data.title }}</h3>
        <p>{{ data.message }}</p>
      </div>
      <div class="dialog-footer">
        <sog-button *ngIf="data.showCancel" variant="ghost" (click)="close()">Cancel</sog-button>
        <sog-button [variant]="getButtonVariant()" (click)="confirm()">
          {{ data.buttonText || (data.showCancel ? 'Continue' : 'OK') }}
        </sog-button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
    }
    .dialog-body {
      margin-bottom: 24px;
    }
    .text-center {
      text-align: center;
    }
    .alert-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: 0 auto 16px;
      font-weight: bold;
    }
    .alert-icon--success {
      background: #dcfce7;
      color: #166534;
    }
    .alert-icon--warning {
      background: #fef3c7;
      color: #92400e;
    }
    .alert-icon--error {
      background: #fee2e2;
      color: #991b1b;
    }
    h3 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }
    p {
      margin: 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .dialog-footer {
      display: flex;
      gap: 12px;
      justify-content: center;
    }
  `]
})
export class AlertDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<AlertDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  getIcon() {
    switch (this.data.type) {
      case 'success':
        return '✓';
      case 'warning':
        return '⚠️';
      case 'error':
        return '✕';
      default:
        return 'ℹ️';
    }
  }

  getButtonVariant() {
    switch (this.data.type) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'danger';
      default:
        return 'primary';
    }
  }

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close('confirmed');
  }
}

@Component({
  selector: 'service-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="dialog-body">
        <p>{{ data.content }}</p>
      </div>
      <div class="dialog-footer">
        <sog-button variant="primary" (click)="close()">Close</sog-button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
      min-width: 400px;
    }
    .dialog-header h3 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }
    .dialog-body p {
      margin: 0 0 24px 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .dialog-footer {
      display: flex;
      justify-content: flex-end;
    }
  `]
})
export class ServiceDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<ServiceDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  close() {
    this.dialogRef.close('service-closed');
  }
}

@Component({
  selector: 'custom-dialog',
  standalone: true,
  imports: [CommonModule, SognatoreButton],
  template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="dialog-body">
        <p>{{ data.customData }}</p>
        <div class="feature-list">
          <h4>Advanced Features:</h4>
          <ul>
            <li>Custom component integration</li>
            <li>Dynamic data binding</li>
            <li>Advanced styling options</li>
            <li>Event handling</li>
          </ul>
        </div>
      </div>
      <div class="dialog-footer">
        <sog-button variant="ghost" (click)="close()">Cancel</sog-button>
        <sog-button variant="primary" (click)="save()">Save</sog-button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 24px;
      min-width: 500px;
    }
    .dialog-header h3 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }
    .dialog-body p {
      margin: 0 0 20px 0;
      color: #6b7280;
      line-height: 1.5;
    }
    .feature-list h4 {
      margin: 0 0 12px 0;
      font-size: 16px;
      font-weight: 600;
      color: #1f2937;
    }
    .feature-list ul {
      margin: 0 0 24px 20px;
    }
    .feature-list li {
      margin-bottom: 8px;
      color: #6b7280;
    }
    .dialog-footer {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
  `]
})
export class CustomDialogComponent {
  constructor(
    private dialogRef: SogDialogRef<CustomDialogComponent>,
    @Inject('dialogData') public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close('custom-saved');
  }
}