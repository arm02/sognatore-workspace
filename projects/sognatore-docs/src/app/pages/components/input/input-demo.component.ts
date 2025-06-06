import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreInput, SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CodeExampleComponent, SognatoreInput, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Input Component</h1>
        <p class="page-description">
          Flexible input component with support for various types, validation states, and accessibility features.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple text input with label and placeholder.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-input 
              label="Name"
              placeholder="Enter your name"
              helperText="This is a basic input with label and helper text"
              [(ngModel)]="basicValue">
            </sog-input>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Input Types</h2>
        <p>Different input types for various data entry needs.</p>
        
        <app-code-example
          [code]="typesCode"
          [htmlCode]="typesHtml">
          <div class="demo-container">
            <div class="input-grid">
              <div class="input-group">
                <label class="input-label">Text</label>
                <sog-input type="text" placeholder="Text input"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Email</label>
                <sog-input type="email" placeholder="email@example.com"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Password</label>
                <sog-input type="password" placeholder="Password"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Number</label>
                <sog-input type="number" placeholder="123"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Date</label>
                <sog-input type="date"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">URL</label>
                <sog-input type="url" placeholder="https://example.com"></sog-input>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Sizes</h2>
        <p>Different input sizes for various use cases.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="input-group">
              <label class="input-label">Small</label>
              <sog-input size="small" placeholder="Small input"></sog-input>
            </div>
            <div class="input-group">
              <label class="input-label">Medium (Default)</label>
              <sog-input size="medium" placeholder="Medium input"></sog-input>
            </div>
            <div class="input-group">
              <label class="input-label">Large</label>
              <sog-input size="large" placeholder="Large input"></sog-input>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>States</h2>
        <p>Input states including disabled, readonly, and validation states.</p>
        
        <app-code-example
          [code]="statesCode"
          [htmlCode]="statesHtml">
          <div class="demo-container">
            <div class="input-grid">
              <div class="input-group">
                <label class="input-label">Normal</label>
                <sog-input placeholder="Normal state"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Disabled</label>
                <sog-input placeholder="Disabled" [disabled]="true"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Readonly</label>
                <sog-input value="Readonly value" [readonly]="true"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Error</label>
                <sog-input placeholder="Error state" state="error" errorMessage="This field is required"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Success</label>
                <sog-input value="Valid input" state="success" helperText="Looks good!"></sog-input>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Icons</h2>
        <p>Inputs can include icons for better visual communication.</p>
        
        <app-code-example
          [code]="iconsCode"
          [htmlCode]="iconsHtml">
          <div class="demo-container">
            <div class="input-grid">
              <div class="input-group">
                <label class="input-label">Search</label>
                <sog-input placeholder="Search..." prefixIcon="🔍"></sog-input>
              </div>
              <div class="input-group">
                <label class="input-label">Password</label>
                <sog-input type="password" placeholder="Password" suffixIcon="👁️"></sog-input>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Textarea</h2>
        <p>Multi-line text input for longer content.</p>
        
        <app-code-example
          [code]="textareaCode"
          [htmlCode]="textareaHtml">
          <div class="demo-container">
            <div class="input-group">
              <label class="input-label">Description</label>
              <textarea 
                class="sog-textarea" 
                rows="4" 
                placeholder="Enter your description here..."
                [(ngModel)]="textareaValue">
              </textarea>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Form Example</h2>
        <p>Complete form example with validation using Angular Reactive Forms.</p>
        
        <app-code-example
          [code]="formCode"
          [htmlCode]="formHtml">
          <div class="demo-container">
            <form [formGroup]="demoForm" (ngSubmit)="onSubmit()" class="form-example">
              <div class="input-group">
                <sog-input 
                  label="First Name *"
                  placeholder="John"
                  formControlName="firstName"
                  [state]="demoForm.get('firstName')?.invalid && demoForm.get('firstName')?.touched ? 'error' : 'default'"
                  [errorMessage]="demoForm.get('firstName')?.invalid && demoForm.get('firstName')?.touched ? 'First name is required' : ''">
                </sog-input>
              </div>

              <div class="input-group">
                <sog-input 
                  label="Email *"
                  type="email"
                  placeholder="john@example.com"
                  formControlName="email"
                  [state]="demoForm.get('email')?.invalid && demoForm.get('email')?.touched ? 'error' : 'default'"
                  [errorMessage]="demoForm.get('email')?.invalid && demoForm.get('email')?.touched ? 'Please enter a valid email' : ''">
                </sog-input>
              </div>

              <div class="input-group">
                <label class="input-label">Message</label>
                <textarea 
                  class="sog-textarea" 
                  rows="3" 
                  placeholder="Your message..."
                  formControlName="message">
                </textarea>
              </div>

              <sog-button 
                type="submit" 
                variant="primary"
                [disabled]="demoForm.invalid">
                Submit Form
              </sog-button>
            </form>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>API Reference</h2>
        <div class="api-table">
          <h3>Properties</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td>'text' | 'email' | 'password' | 'number' | 'url' | 'date' | etc.</td>
                <td>'text'</td>
                <td>HTML input type</td>
              </tr>
              <tr>
                <td>size</td>
                <td>'small' | 'medium' | 'large'</td>
                <td>'medium'</td>
                <td>Size of the input</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the input is disabled</td>
              </tr>
              <tr>
                <td>readonly</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the input is readonly</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>-</td>
                <td>Placeholder text</td>
              </tr>
              <tr>
                <td>error</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the input has an error state</td>
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

    .input-group {
      margin-bottom: 1.5rem;
    }

    .input-group:last-child {
      margin-bottom: 0;
    }

    .input-label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--gray-700);
      margin-bottom: 0.5rem;
    }

    .input-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .sog-input,
    .sog-textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      background-color: white;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .sog-input:focus,
    .sog-textarea:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .sog-input:disabled,
    .sog-textarea:disabled {
      background-color: var(--gray-100);
      color: var(--gray-500);
      cursor: not-allowed;
    }

    .sog-input:read-only,
    .sog-textarea:read-only {
      background-color: var(--gray-50);
    }

    .sog-input--small {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }

    .sog-input--large {
      padding: 1rem 1.25rem;
      font-size: 1.125rem;
    }

    .sog-input--error,
    .sog-textarea--error {
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }

    .sog-input--success,
    .sog-textarea--success {
      border-color: #16a34a;
      box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
    }

    .input-with-icon {
      position: relative;
    }

    .input-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--gray-400);
      pointer-events: none;
    }

    .input-icon--left {
      left: 0.75rem;
    }

    .input-icon--right {
      right: 0.75rem;
    }

    .sog-input--with-icon-left {
      padding-left: 2.5rem;
    }

    .sog-input--with-icon-right {
      padding-right: 2.5rem;
    }

    .input-error {
      display: block;
      font-size: 0.875rem;
      color: #dc2626;
      margin-top: 0.25rem;
    }

    .input-success {
      display: block;
      font-size: 0.875rem;
      color: #16a34a;
      margin-top: 0.25rem;
    }

    .sog-textarea {
      resize: vertical;
      min-height: 80px;
    }

    .form-example {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
    }

    .sog-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .sog-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .sog-button--primary {
      background-color: var(--primary-600);
      color: white;
    }

    .sog-button--primary:hover:not(:disabled) {
      background-color: var(--primary-700);
    }

    .api-table {
      margin-top: 2rem;
    }

    .api-table h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
    }

    .api-table table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .input-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class InputDemoComponent {
  basicValue = '';
  textareaValue = '';
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.demoForm.valid) {
      console.log('Form submitted:', this.demoForm.value);
    }
  }

  basicUsageCode = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SogInputComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, SogInputComponent],
  template: \`
    <sog-input 
      label="Name"
      placeholder="Enter your name"
      [(ngModel)]="name">
    </sog-input>
  \`
})
export class ExampleComponent {
  name = '';
}`;

  basicUsageHtml = `<sog-input 
  label="Name"
  placeholder="Enter your name"
  [(ngModel)]="name">
</sog-input>`;

  typesCode = `<sog-input type="text" placeholder="Text input"></sog-input>
<sog-input type="email" placeholder="email@example.com"></sog-input>
<sog-input type="password" placeholder="Password"></sog-input>
<sog-input type="number" placeholder="123"></sog-input>
<sog-input type="date"></sog-input>
<sog-input type="url" placeholder="https://example.com"></sog-input>`;

  typesHtml = `<sog-input type="text" placeholder="Text input"></sog-input>
<sog-input type="email" placeholder="email@example.com"></sog-input>
<sog-input type="password" placeholder="Password"></sog-input>
<sog-input type="number" placeholder="123"></sog-input>
<sog-input type="date"></sog-input>
<sog-input type="url" placeholder="https://example.com"></sog-input>`;

  sizesCode = `<sog-input size="small" placeholder="Small input"></sog-input>
<sog-input size="medium" placeholder="Medium input"></sog-input>
<sog-input size="large" placeholder="Large input"></sog-input>`;

  sizesHtml = `<sog-input size="small" placeholder="Small input"></sog-input>
<sog-input size="medium" placeholder="Medium input"></sog-input>
<sog-input size="large" placeholder="Large input"></sog-input>`;

  statesCode = `<sog-input placeholder="Normal state"></sog-input>
<sog-input placeholder="Disabled" [disabled]="true"></sog-input>
<sog-input value="Readonly value" [readonly]="true"></sog-input>
<sog-input placeholder="Error state" [error]="true"></sog-input>
<sog-input value="Valid input" [success]="true"></sog-input>`;

  statesHtml = `<sog-input placeholder="Normal state"></sog-input>
<sog-input placeholder="Disabled" disabled></sog-input>
<sog-input value="Readonly value" readonly></sog-input>
<sog-input placeholder="Error state" error></sog-input>
<sog-input value="Valid input" success></sog-input>`;

  iconsCode = `<sog-input 
  placeholder="Search..." 
  icon="search" 
  iconPosition="left">
</sog-input>
<sog-input 
  type="password" 
  placeholder="Password" 
  icon="eye" 
  iconPosition="right">
</sog-input>`;

  iconsHtml = `<sog-input 
  placeholder="Search..." 
  icon="search" 
  iconPosition="left">
</sog-input>
<sog-input 
  type="password" 
  placeholder="Password" 
  icon="eye" 
  iconPosition="right">
</sog-input>`;

  textareaCode = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <textarea 
      class="sog-textarea"
      rows="4"
      placeholder="Enter your description..."
      [(ngModel)]="description">
    </textarea>
  \`
})
export class ExampleComponent {
  description = '';
}`;

  textareaHtml = `<textarea 
  class="sog-textarea"
  rows="4"
  placeholder="Enter your description..."
  [(ngModel)]="description">
</textarea>`;

  formCode = `import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <sog-input 
        label="First Name"
        placeholder="John"
        formControlName="firstName"
        [error]="form.get('firstName')?.invalid && form.get('firstName')?.touched">
      </sog-input>
      
      <sog-input 
        label="Email"
        type="email"
        placeholder="john@example.com"
        formControlName="email"
        [error]="form.get('email')?.invalid && form.get('email')?.touched">
      </sog-input>
      
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
  \`
})
export class FormExampleComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}`;

  formHtml = `<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <sog-input 
    label="First Name"
    placeholder="John"
    formControlName="firstName"
    [error]="form.get('firstName')?.invalid && form.get('firstName')?.touched">
  </sog-input>
  
  <sog-input 
    label="Email"
    type="email"
    placeholder="john@example.com"
    formControlName="email"
    [error]="form.get('email')?.invalid && form.get('email')?.touched">
  </sog-input>
  
  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>`;
}