import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Button Component</h1>
        <p class="page-description">
          Versatile button component with multiple appearances and interactive states for all your UI needs.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>The most basic button with default styling.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-button>Default Button</sog-button>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Appearances</h2>
        <p>Different button variants for various use cases and contexts.</p>
        
        <app-code-example
          [code]="appearancesCode"
          [htmlCode]="appearancesHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary">Primary</sog-button>
              <sog-button variant="secondary">Secondary</sog-button>
              <sog-button variant="success">Success</sog-button>
              <sog-button variant="danger">Danger</sog-button>
              <sog-button variant="warning">Warning</sog-button>
            </div>
            <div class="button-group">
              <sog-button variant="outline">Outline</sog-button>
              <sog-button variant="ghost">Ghost</sog-button>
              <sog-button variant="link">Link</sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Interactive Examples</h2>
        <p>Buttons with click handlers and various states.</p>
        
        <app-code-example
          [code]="interactiveCode"
          [htmlCode]="interactiveHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" (click)="onButtonClick('Primary clicked!')">
                Click Me Primary
              </sog-button>
              <sog-button variant="secondary" (click)="onButtonClick('Secondary clicked!')">
                Click Me Secondary
              </sog-button>
              <sog-button variant="outline" (click)="onButtonClick('Outline clicked!')">
                Click Me Outline
              </sog-button>
            </div>
            <div class="demo-output" *ngIf="lastClickedMessage">
              <strong>Last Action:</strong> {{lastClickedMessage}}
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Sizes</h2>
        <p>Different button sizes for various interface needs.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" size="small">Small</sog-button>
              <sog-button variant="primary" size="medium">Medium</sog-button>
              <sog-button variant="primary" size="large">Large</sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>States</h2>
        <p>Button states including disabled and loading.</p>
        
        <app-code-example
          [code]="statesCode"
          [htmlCode]="statesHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary">Normal</sog-button>
              <sog-button variant="primary" [disabled]="true">Disabled</sog-button>
              <sog-button variant="primary" [loading]="isLoading" (click)="toggleLoading()">{{ isLoading ? 'Loading...' : 'Click to Load' }}</sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Full Width</h2>
        <p>Buttons that take the full width of their container.</p>
        
        <app-code-example
          [code]="fullWidthCode"
          [htmlCode]="fullWidthHtml">
          <div class="demo-container">
            <div style="max-width: 400px;">
              <sog-button variant="primary" [fullWidth]="true">Full Width Primary</sog-button>
              <br><br>
              <sog-button variant="outline" [fullWidth]="true">Full Width Outline</sog-button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Real-World Examples</h2>
        <p>Common button usage patterns in applications.</p>
        
        <app-code-example
          [code]="realWorldCode"
          [htmlCode]="realWorldHtml">
          <div class="demo-container">
            <div class="example-scenarios">
              <!-- Form Actions -->
              <div class="scenario">
                <h4>Form Actions</h4>
                <div class="button-group">
                  <sog-button variant="primary" (click)="simulateAction('Form saved!')">
                    Save Changes
                  </sog-button>
                  <sog-button variant="outline" (click)="simulateAction('Form cancelled')">
                    Cancel
                  </sog-button>
                </div>
              </div>

              <!-- Navigation -->
              <div class="scenario">
                <h4>Navigation</h4>
                <div class="button-group">
                  <sog-button variant="primary" (click)="simulateAction('Navigating to dashboard...')">
                    Go to Dashboard
                  </sog-button>
                  <sog-button variant="ghost" (click)="simulateAction('Going back...')">
                    Back
                  </sog-button>
                </div>
              </div>

              <!-- Actions -->
              <div class="scenario">
                <h4>Common Actions</h4>
                <div class="button-group">
                  <sog-button variant="primary" (click)="simulateAction('Item added!')">
                    Add Item
                  </sog-button>
                  <sog-button variant="secondary" (click)="simulateAction('Edit mode activated')">
                    Edit
                  </sog-button>
                  <sog-button variant="danger" (click)="simulateAction('Item deleted')">
                    Delete
                  </sog-button>
                </div>
              </div>
            </div>
            
            <div class="action-feedback" *ngIf="actionMessage">
              <div class="feedback-message">
                ✓ {{actionMessage}}
              </div>
            </div>
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
                <td>variant</td>
                <td>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline' | 'ghost' | 'link'</td>
                <td>'primary'</td>
                <td>Visual variant of the button</td>
              </tr>
              <tr>
                <td>size</td>
                <td>'small' | 'medium' | 'large'</td>
                <td>'medium'</td>
                <td>Size of the button</td>
              </tr>
              <tr>
                <td>type</td>
                <td>'button' | 'submit' | 'reset'</td>
                <td>'button'</td>
                <td>HTML button type</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the button is disabled</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the button is in loading state</td>
              </tr>
              <tr>
                <td>loadingText</td>
                <td>string</td>
                <td>'Loading...'</td>
                <td>Text to show when loading</td>
              </tr>
              <tr>
                <td>fullWidth</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the button takes full width</td>
              </tr>
            </tbody>
          </table>

          <h3>Events</h3>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>click</td>
                <td>Event</td>
                <td>Emitted when button is clicked</td>
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
      align-items: center;
      margin-block: 10px;
    }

    .demo-output,
    .action-feedback {
      margin-top: 1.5rem;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border-left: 4px solid var(--primary);
    }

    .feedback-message {
      color: var(--success);
      font-weight: 500;
    }

    .example-scenarios {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .scenario {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
    }

    .scenario h4 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
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

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .button-group {
        flex-direction: column;
        align-items: stretch;
      }

      .example-scenarios {
        gap: 1rem;
      }
    }
  `]
})
export class ButtonDemoComponent {
  lastClickedMessage = '';
  actionMessage = '';
  isLoading = false;

  onButtonClick(message: string) {
    this.lastClickedMessage = message;
  }

  simulateAction(message: string) {
    this.actionMessage = message;
    // Clear message after 3 seconds
    setTimeout(() => {
      this.actionMessage = '';
    }, 3000);
  }
  
  toggleLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <sog-button>Default Button</sog-button>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-button>Default Button</sog-button>`;

  appearancesCode = `<sog-button appearance="primary">Primary</sog-button>
<sog-button appearance="default">Default</sog-button>
<sog-button>Basic</sog-button>`;

  appearancesHtml = `<sog-button appearance="primary">Primary</sog-button>
<sog-button appearance="default">Default</sog-button>
<sog-button>Basic</sog-button>`;

  interactiveCode = `import { Component } from '@angular/core';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-interactive',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <sog-button appearance="primary" (click)="handleClick('Primary')">
      Click Me Primary
    </sog-button>
    <sog-button appearance="default" (click)="handleClick('Default')">
      Click Me Default
    </sog-button>
  \`
})
export class InteractiveComponent {
  handleClick(type: string) {
    console.log(\`\${type} button clicked!\`);
  }
}`;

  interactiveHtml = `<sog-button appearance="primary" (click)="handleClick('Primary')">
  Click Me Primary
</sog-button>
<sog-button appearance="default" (click)="handleClick('Default')">
  Click Me Default
</sog-button>`;

  realWorldCode = `<!-- Form Actions -->
<div class="form-actions">
  <sog-button appearance="primary" (click)="saveForm()">
    Save Changes
  </sog-button>
  <sog-button appearance="default" (click)="cancelForm()">
    Cancel
  </sog-button>
</div>

<!-- Navigation -->
<div class="navigation">
  <sog-button appearance="primary" (click)="goToDashboard()">
    Go to Dashboard
  </sog-button>
  <sog-button (click)="goBack()">
    Back
  </sog-button>
</div>

<!-- Common Actions -->
<div class="actions">
  <sog-button appearance="primary" (click)="addItem()">
    Add Item
  </sog-button>
  <sog-button appearance="default" (click)="editItem()">
    Edit
  </sog-button>
  <sog-button (click)="deleteItem()">
    Delete
  </sog-button>
</div>`;

  realWorldHtml = `<!-- Form Actions -->
<sog-button variant="primary" (click)="saveForm()">Save Changes</sog-button>
<sog-button variant="outline" (click)="cancelForm()">Cancel</sog-button>

<!-- Navigation -->
<sog-button variant="primary" (click)="goToDashboard()">Go to Dashboard</sog-button>
<sog-button variant="ghost" (click)="goBack()">Back</sog-button>

<!-- Actions -->
<sog-button variant="primary" (click)="addItem()">Add Item</sog-button>
<sog-button variant="secondary" (click)="editItem()">Edit</sog-button>
<sog-button variant="danger" (click)="deleteItem()">Delete</sog-button>`;

  sizesCode = `<sog-button variant="primary" size="small">Small</sog-button>
<sog-button variant="primary" size="medium">Medium</sog-button>
<sog-button variant="primary" size="large">Large</sog-button>`;

  sizesHtml = `<sog-button variant="primary" size="small">Small</sog-button>
<sog-button variant="primary" size="medium">Medium</sog-button>
<sog-button variant="primary" size="large">Large</sog-button>`;

  statesCode = `<sog-button variant="primary">Normal</sog-button>
<sog-button variant="primary" [disabled]="true">Disabled</sog-button>
<sog-button variant="primary" [loading]="isLoading" (click)="toggleLoading()">
  {{ isLoading ? 'Loading...' : 'Click to Load' }}
</sog-button>`;

  statesHtml = `<sog-button variant="primary">Normal</sog-button>
<sog-button variant="primary" disabled>Disabled</sog-button>
<sog-button variant="primary" [loading]="true">Loading</sog-button>`;

  fullWidthCode = `<sog-button variant="primary" [fullWidth]="true">Full Width Primary</sog-button>
<sog-button variant="outline" [fullWidth]="true">Full Width Outline</sog-button>`;

  fullWidthHtml = `<sog-button variant="primary" fullWidth>Full Width Primary</sog-button>
<sog-button variant="outline" fullWidth>Full Width Outline</sog-button>`;
}