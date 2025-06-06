import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreNavbar, NavItem, SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-navbar-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreNavbar, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Navbar Component</h1>
        <p class="page-description">
          Responsive navigation component with support for branding, menu items, dropdowns, and mobile-friendly layouts.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple navbar with title and navigation items.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-navbar 
              variant="basic" 
              title="Sognatore"
              [items]="basicItems">
            </sog-navbar>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Custom Brand</h2>
        <p>Navbar with custom brand content using slot projection.</p>
        
        <app-code-example
          [code]="brandCode"
          [htmlCode]="brandHtml">
          <div class="demo-container">
            <sog-navbar 
              variant="basic"
              [items]="basicItems"
              [hasBrandSlot]="true">
              <div slot="brand" class="custom-brand">
                🚀 <strong>App</strong>
              </div>
            </sog-navbar>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Dropdown Items</h2>
        <p>Navbar with dropdown menu items.</p>
        
        <app-code-example
          [code]="dropdownCode"
          [htmlCode]="dropdownHtml">
          <div class="demo-container">
            <sog-navbar 
              variant="basic"
              title="Company"
              [items]="dropdownItems">
            </sog-navbar>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Actions</h2>
        <p>Navbar with action buttons using slot projection.</p>
        
        <app-code-example
          [code]="actionsCode"
          [htmlCode]="actionsHtml">
          <div class="demo-container">
            <sog-navbar 
              variant="basic"
              title="SaaS App"
              [items]="actionItems">
              <div slot="actions" class="navbar-actions">
                <button class="action-btn ghost">Login</button>
                <button class="action-btn primary">Sign Up</button>
              </div>
            </sog-navbar>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Mobile Responsive</h2>
        <p>Navbar automatically adapts to mobile screens with hamburger menu.</p>
        
        <app-code-example
          [code]="mobileCode"
          [htmlCode]="mobileHtml">
          <div class="demo-container">
            <sog-navbar 
              variant="basic"
              title="Mobile App"
              [items]="mobileItems">
            </sog-navbar>
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
                <td>'basic' | 'material'</td>
                <td>'basic'</td>
                <td>Visual style variant</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>''</td>
                <td>Brand title text</td>
              </tr>
              <tr>
                <td>items</td>
                <td>NavItem[]</td>
                <td>[]</td>
                <td>Navigation menu items</td>
              </tr>
              <tr>
                <td>fixed</td>
                <td>boolean</td>
                <td>false</td>
                <td>Fixed positioning at top</td>
              </tr>
              <tr>
                <td>hasBrandSlot</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether custom brand content is provided</td>
              </tr>
            </tbody>
          </table>

          <h3>NavItem Interface</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>Yes</td>
                <td>Display text for the item</td>
              </tr>
              <tr>
                <td>route</td>
                <td>string</td>
                <td>No</td>
                <td>Navigation route/URL</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>string</td>
                <td>No</td>
                <td>HTML string for icon</td>
              </tr>
              <tr>
                <td>action</td>
                <td>() => void</td>
                <td>No</td>
                <td>Click handler function</td>
              </tr>
              <tr>
                <td>children</td>
                <td>NavItem[]</td>
                <td>No</td>
                <td>Dropdown menu items</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>No</td>
                <td>Whether the item is disabled</td>
              </tr>
            </tbody>
          </table>

          <h3>Slots</h3>
          <table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[slot=brand]</td>
                <td>Custom brand/logo content</td>
              </tr>
              <tr>
                <td>[slot=actions]</td>
                <td>Action buttons or controls</td>
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

    .custom-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
      color: var(--gray-900);
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .action-btn {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .action-btn.ghost {
      background: transparent;
      color: var(--gray-600);
      border: 1px solid var(--gray-300);
    }

    .action-btn.ghost:hover {
      background: var(--gray-100);
      color: var(--gray-900);
    }

    .action-btn.primary {
      background: var(--primary-600);
      color: white;
    }

    .action-btn.primary:hover {
      background: var(--primary-700);
    }

    .material-action {
      color: rgba(255, 255, 255, 0.9) !important;
      background: rgba(255, 255, 255, 0.1) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
      border-radius: 20px !important;
      backdrop-filter: blur(10px);
    }

    .material-action:hover {
      background: rgba(255, 255, 255, 0.2) !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .material-action svg {
      opacity: 0.8;
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
  `]
})
export class NavbarDemoComponent {
  basicItems: NavItem[] = [
    { label: 'Home', route: '#' },
    { label: 'About', route: '#' },
    { label: 'Services', route: '#' },
    { label: 'Contact', route: '#' }
  ];

  dropdownItems: NavItem[] = [
    { label: 'Home', route: '#' },
    { 
      label: 'Products', 
      children: [
        { label: 'Web Apps', route: '#' },
        { label: 'Mobile Apps', route: '#' },
        { label: 'Desktop Apps', route: '#' }
      ]
    },
    { label: 'About', route: '#' },
    { label: 'Contact', route: '#' }
  ];

  actionItems: NavItem[] = [
    { label: 'Features', route: '#' },
    { label: 'Pricing', route: '#' },
    { label: 'Docs', route: '#' }
  ];

  materialItems: NavItem[] = [
    { label: 'Dashboard', route: '#', icon: '📊' },
    { label: 'Projects', route: '#', icon: '📁' },
    { label: 'Analytics', route: '#', icon: '📈' }
  ];

  mobileItems: NavItem[] = [
    { label: 'Home', route: '#' },
    { label: 'Products', route: '#' },
    { label: 'Services', route: '#' },
    { label: 'About', route: '#' },
    { label: 'Contact', route: '#' }
  ];

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreNavbar, NavItem } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreNavbar],
  template: \`
    <sog-navbar 
      variant="basic" 
      title="Sognatore"
      [items]="items">
    </sog-navbar>
  \`
})
export class ExampleComponent {
  items: NavItem[] = [
    { label: 'Home', route: '#' },
    { label: 'About', route: '#' },
    { label: 'Services', route: '#' },
    { label: 'Contact', route: '#' }
  ];
}`;

  basicUsageHtml = `<sog-navbar 
  variant="basic" 
  title="Sognatore"
  [items]="items">
</sog-navbar>`;

  brandCode = `<sog-navbar 
  variant="basic"
  [items]="items"
  [hasBrandSlot]="true">
  <div slot="brand" class="custom-brand">
    🚀 <strong>App</strong>
  </div>
</sog-navbar>`;

  brandHtml = `<sog-navbar 
  variant="basic"
  [items]="items"
  [hasBrandSlot]="true">
  <div slot="brand" class="custom-brand">
    🚀 <strong>App</strong>
  </div>
</sog-navbar>`;

  dropdownCode = `items: NavItem[] = [
  { label: 'Home', route: '#' },
  { 
    label: 'Products', 
    children: [
      { label: 'Web Apps', route: '#' },
      { label: 'Mobile Apps', route: '#' },
      { label: 'Desktop Apps', route: '#' }
    ]
  },
  { label: 'About', route: '#' }
];`;

  dropdownHtml = `<sog-navbar 
  variant="basic"
  title="Company"
  [items]="dropdownItems">
</sog-navbar>`;

  actionsCode = `<sog-navbar 
  variant="basic"
  title="SaaS App"
  [items]="items">
  <div slot="actions" class="navbar-actions">
    <button class="action-btn ghost">Login</button>
    <button class="action-btn primary">Sign Up</button>
  </div>
</sog-navbar>`;

  actionsHtml = `<sog-navbar 
  variant="basic"
  title="SaaS App"
  [items]="items">
  <div slot="actions" class="navbar-actions">
    <button class="action-btn ghost">Login</button>
    <button class="action-btn primary">Sign Up</button>
  </div>
</sog-navbar>`;

  materialCode = `<sog-navbar 
  variant="material"
  title="Material App"
  [items]="materialItems">
  <div slot="actions" class="navbar-actions">
    <button class="action-btn material">Settings</button>
  </div>
</sog-navbar>`;

  materialHtml = `<sog-navbar 
  variant="material"
  title="Material App"
  [items]="materialItems">
  <div slot="actions" class="navbar-actions">
    <button class="action-btn material">Settings</button>
  </div>
</sog-navbar>`;

  mobileCode = `<sog-navbar 
  variant="basic"
  title="Mobile App"
  [items]="mobileItems">
</sog-navbar>

// Automatically responsive - hamburger menu appears on mobile`;

  mobileHtml = `<sog-navbar 
  variant="basic"
  title="Mobile App"
  [items]="mobileItems">
</sog-navbar>`;
}