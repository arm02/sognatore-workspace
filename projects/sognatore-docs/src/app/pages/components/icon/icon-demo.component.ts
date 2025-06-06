import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreIcon, ICON_LIBRARY } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-icon-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreIcon],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Icon Component</h1>
        <p class="page-description">
          Flexible icon component supporting multiple icon libraries and custom SVG icons with various sizes and styles.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple icons using the built-in icon library.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <div class="icon-grid">
              <div class="icon-item">
                <sog-icon name="home" size="lg"></sog-icon>
                <span class="icon-label">Home</span>
              </div>
              <div class="icon-item">
                <sog-icon name="user" size="lg"></sog-icon>
                <span class="icon-label">User</span>
              </div>
              <div class="icon-item">
                <sog-icon name="settings" size="lg"></sog-icon>
                <span class="icon-label">Settings</span>
              </div>
              <div class="icon-item">
                <sog-icon name="mail" size="lg"></sog-icon>
                <span class="icon-label">Mail</span>
              </div>
              <div class="icon-item">
                <sog-icon name="search" size="lg"></sog-icon>
                <span class="icon-label">Search</span>
              </div>
              <div class="icon-item">
                <sog-icon name="heart" size="lg"></sog-icon>
                <span class="icon-label">Heart</span>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Sizes</h2>
        <p>Icons available in different sizes.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="size-demo">
              <div class="size-group">
                <sog-icon name="star" size="xs"></sog-icon>
                <span class="size-label">Extra Small (12px)</span>
              </div>
              <div class="size-group">
                <sog-icon name="star" size="sm"></sog-icon>
                <span class="size-label">Small (16px)</span>
              </div>
              <div class="size-group">
                <sog-icon name="star" size="md"></sog-icon>
                <span class="size-label">Medium (20px)</span>
              </div>
              <div class="size-group">
                <sog-icon name="star" size="lg"></sog-icon>
                <span class="size-label">Large (24px)</span>
              </div>
              <div class="size-group">
                <sog-icon name="star" size="xl"></sog-icon>
                <span class="size-label">Extra Large (32px)</span>
              </div>
              <div class="size-group">
                <sog-icon name="star" size="xxl"></sog-icon>
                <span class="size-label">2X Large (48px)</span>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Colors</h2>
        <p>Icons with different color variants.</p>
        
        <app-code-example
          [code]="colorsCode"
          [htmlCode]="colorsHtml">
          <div class="demo-container">
            <div class="color-demo">
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="primary"></sog-icon>
                <span class="color-label">Primary</span>
              </div>
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="secondary"></sog-icon>
                <span class="color-label">Secondary</span>
              </div>
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="success"></sog-icon>
                <span class="color-label">Success</span>
              </div>
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="danger"></sog-icon>
                <span class="color-label">Danger</span>
              </div>
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="warning"></sog-icon>
                <span class="color-label">Warning</span>
              </div>
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="info"></sog-icon>
                <span class="color-label">Info</span>
              </div>
              <div class="color-group">
                <sog-icon name="heart" size="lg" color="muted"></sog-icon>
                <span class="color-label">Muted</span>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Navigation Icons</h2>
        <p>Common navigation and action icons.</p>
        
        <app-code-example
          [code]="navigationCode"
          [htmlCode]="navigationHtml">
          <div class="demo-container">
            <div class="icon-category">
              <h4>Navigation</h4>
              <div class="icon-grid">
                <div class="icon-item">
                  <sog-icon name="home" size="lg"></sog-icon>
                  <span class="icon-label">home</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="menu" size="lg"></sog-icon>
                  <span class="icon-label">menu</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="close" size="lg"></sog-icon>
                  <span class="icon-label">close</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="arrow-left" size="lg"></sog-icon>
                  <span class="icon-label">arrow-left</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="arrow-right" size="lg"></sog-icon>
                  <span class="icon-label">arrow-right</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="chevron-down" size="lg"></sog-icon>
                  <span class="icon-label">chevron-down</span>
                </div>
              </div>
            </div>
            
            <div class="icon-category">
              <h4>Actions</h4>
              <div class="icon-grid">
                <div class="icon-item">
                  <sog-icon name="search" size="lg"></sog-icon>
                  <span class="icon-label">search</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="edit" size="lg"></sog-icon>
                  <span class="icon-label">edit</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="delete" size="lg"></sog-icon>
                  <span class="icon-label">delete</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="add" size="lg"></sog-icon>
                  <span class="icon-label">add</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="copy" size="lg"></sog-icon>
                  <span class="icon-label">copy</span>
                </div>
                <div class="icon-item">
                  <sog-icon name="filter" size="lg"></sog-icon>
                  <span class="icon-label">filter</span>
                </div>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Status Icons</h2>
        <p>Icons for showing status and feedback.</p>
        
        <app-code-example
          [code]="statusCode"
          [htmlCode]="statusHtml">
          <div class="demo-container">
            <div class="status-demo">
              <div class="status-item">
                <sog-icon name="check-circle" size="lg" color="success"></sog-icon>
                <span class="status-label">Success</span>
              </div>
              <div class="status-item">
                <sog-icon name="x-circle" size="lg" color="danger"></sog-icon>
                <span class="status-label">Error</span>
              </div>
              <div class="status-item">
                <sog-icon name="alert-circle" size="lg" color="warning"></sog-icon>
                <span class="status-label">Warning</span>
              </div>
              <div class="status-item">
                <sog-icon name="info" size="lg" color="info"></sog-icon>
                <span class="status-label">Information</span>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Custom SVG Icons</h2>
        <p>Using custom SVG icons with the icon component.</p>
        
        <app-code-example
          [code]="customSvgCode"
          [htmlCode]="customSvgHtml">
          <div class="demo-container">
            <div class="custom-demo">
              <div class="custom-item">
                <sog-icon 
                  [customSvg]="customSvgIcon" 
                  size="lg" 
                  color="primary">
                </sog-icon>
                <span class="custom-label">Custom SVG</span>
              </div>
              
              <div class="custom-item">
                <sog-icon 
                  [customSvg]="logoSvg" 
                  size="xl" 
                  color="primary">
                </sog-icon>
                <span class="custom-label">Logo Example</span>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Available Icons</h2>
        <p>Complete list of built-in icons in the Sognatore UI library.</p>
        
        <div class="demo-container">
          <div class="available-icons">
            <div class="icon-item" *ngFor="let iconName of availableIcons">
              <sog-icon [name]="iconName" size="lg"></sog-icon>
              <span class="icon-label">{{ iconName }}</span>
            </div>
          </div>
        </div>
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
                <td>name</td>
                <td>string</td>
                <td>''</td>
                <td>Name of the icon from the built-in library</td>
              </tr>
              <tr>
                <td>size</td>
                <td>'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'custom'</td>
                <td>'md'</td>
                <td>Size of the icon</td>
              </tr>
              <tr>
                <td>color</td>
                <td>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'muted' | 'inherit' | 'current'</td>
                <td>'current'</td>
                <td>Color theme</td>
              </tr>
              <tr>
                <td>customSize</td>
                <td>number</td>
                <td>20</td>
                <td>Custom size in pixels (when size='custom')</td>
              </tr>
              <tr>
                <td>customSvg</td>
                <td>string</td>
                <td>''</td>
                <td>Custom SVG content</td>
              </tr>
              <tr>
                <td>viewBox</td>
                <td>string</td>
                <td>'0 0 24 24'</td>
                <td>SVG viewBox attribute</td>
              </tr>
              <tr>
                <td>fill</td>
                <td>string</td>
                <td>'none'</td>
                <td>SVG fill attribute</td>
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

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
      transition: all 0.2s ease;
    }

    .icon-item:hover {
      border-color: var(--primary-300);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .icon-label {
      font-size: 0.75rem;
      color: var(--gray-600);
      text-align: center;
      font-family: monospace;
    }

    .size-demo {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .size-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
    }

    .size-label {
      font-size: 0.875rem;
      color: var(--gray-600);
      font-weight: 500;
    }

    .color-demo {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
    }

    .color-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
    }

    .color-label {
      font-size: 0.75rem;
      color: var(--gray-600);
      text-align: center;
    }

    .icon-category {
      margin-bottom: 2rem;
    }

    .icon-category h4 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
    }

    .status-demo {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .status-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
    }

    .status-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--gray-700);
    }

    .custom-demo {
      display: flex;
      gap: 2rem;
      justify-content: center;
    }

    .custom-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
    }

    .custom-label {
      font-size: 0.75rem;
      color: var(--gray-600);
      text-align: center;
    }

    .available-icons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      max-height: 400px;
      overflow-y: auto;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
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
  `]
})
export class IconDemoComponent {
  availableIcons: string[] = Object.keys(ICON_LIBRARY);
  
  customSvgIcon = `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                   <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                   <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                   <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  
  logoSvg = `<path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" stroke-width="2" fill="none"/>
             <path d="M12 22V12" stroke="currentColor" stroke-width="2"/>
             <path d="M22 7L12 12L2 7" stroke="currentColor" stroke-width="2"/>`;

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreIcon } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreIcon],
  template: \`
    <sog-icon name="home" size="lg"></sog-icon>
    <sog-icon name="user" size="lg"></sog-icon>
    <sog-icon name="settings" size="lg"></sog-icon>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-icon name="home" size="lg"></sog-icon>
<sog-icon name="user" size="lg"></sog-icon>
<sog-icon name="settings" size="lg"></sog-icon>`;

  sizesCode = `<!-- Different sizes -->
<sog-icon name="star" size="xs"></sog-icon>
<sog-icon name="star" size="sm"></sog-icon>
<sog-icon name="star" size="md"></sog-icon>
<sog-icon name="star" size="lg"></sog-icon>
<sog-icon name="star" size="xl"></sog-icon>
<sog-icon name="star" size="xxl"></sog-icon>`;

  sizesHtml = `<sog-icon name="star" size="xs"></sog-icon>
<sog-icon name="star" size="sm"></sog-icon>
<sog-icon name="star" size="md"></sog-icon>
<sog-icon name="star" size="lg"></sog-icon>
<sog-icon name="star" size="xl"></sog-icon>
<sog-icon name="star" size="xxl"></sog-icon>`;

  colorsCode = `<!-- Different colors -->
<sog-icon name="heart" color="primary"></sog-icon>
<sog-icon name="heart" color="success"></sog-icon>
<sog-icon name="heart" color="danger"></sog-icon>
<sog-icon name="heart" color="warning"></sog-icon>
<sog-icon name="heart" color="info"></sog-icon>`;

  colorsHtml = `<sog-icon name="heart" color="primary"></sog-icon>
<sog-icon name="heart" color="success"></sog-icon>
<sog-icon name="heart" color="danger"></sog-icon>
<sog-icon name="heart" color="warning"></sog-icon>
<sog-icon name="heart" color="info"></sog-icon>`;

  navigationCode = `<!-- Navigation icons -->
<sog-icon name="home"></sog-icon>
<sog-icon name="menu"></sog-icon>
<sog-icon name="arrow-left"></sog-icon>
<sog-icon name="search"></sog-icon>
<sog-icon name="edit"></sog-icon>
<sog-icon name="add"></sog-icon>`;

  navigationHtml = `<sog-icon name="home"></sog-icon>
<sog-icon name="menu"></sog-icon>
<sog-icon name="arrow-left"></sog-icon>
<sog-icon name="search"></sog-icon>
<sog-icon name="edit"></sog-icon>
<sog-icon name="add"></sog-icon>`;

  statusCode = `<!-- Status icons with colors -->
<sog-icon name="check-circle" color="success"></sog-icon>
<sog-icon name="x-circle" color="danger"></sog-icon>
<sog-icon name="alert-circle" color="warning"></sog-icon>
<sog-icon name="info" color="info"></sog-icon>`;

  statusHtml = `<sog-icon name="check-circle" color="success"></sog-icon>
<sog-icon name="x-circle" color="danger"></sog-icon>
<sog-icon name="alert-circle" color="warning"></sog-icon>
<sog-icon name="info" color="info"></sog-icon>`;

  customSvgCode = `customSvg = \`<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
             <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="2"/>
             <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" stroke-width="2"/>
             <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" stroke-width="2"/>\`;

<sog-icon [customSvg]="customSvg" size="lg" color="primary"></sog-icon>`;

  customSvgHtml = `<sog-icon 
  [customSvg]="customSvg" 
  size="lg" 
  color="primary">
</sog-icon>`;
}