import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreBadge } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-badge-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreBadge],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Badge Component</h1>
        <p class="page-description">
          Small status and notification badge component for highlighting important information with various colors and sizes.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple badges with text content.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <div class="badge-demo">
              <sog-badge content="New" variant="basic" color="primary" [standalone]="true"></sog-badge>
              <sog-badge content="Beta" variant="basic" color="secondary" [standalone]="true"></sog-badge>
              <sog-badge content="Sale" variant="basic" color="danger" [standalone]="true"></sog-badge>
              <sog-badge content="Hot" variant="basic" color="warning" [standalone]="true"></sog-badge>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Variants</h2>
        <p>Different badge colors for various contexts.</p>
        
        <app-code-example
          [code]="variantsCode"
          [htmlCode]="variantsHtml">
          <div class="demo-container">
            <div class="badge-demo">
              <sog-badge content="Primary" color="primary" [standalone]="true"></sog-badge>
              <sog-badge content="Secondary" color="secondary" [standalone]="true"></sog-badge>
              <sog-badge content="Success" color="success" [standalone]="true"></sog-badge>
              <sog-badge content="Warning" color="warning" [standalone]="true"></sog-badge>
              <sog-badge content="Danger" color="danger" [standalone]="true"></sog-badge>
              <sog-badge content="Info" color="info" [standalone]="true"></sog-badge>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Sizes</h2>
        <p>Badges in different sizes.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="badge-demo">
              <sog-badge content="Small" color="primary" size="sm" [standalone]="true"></sog-badge>
              <sog-badge content="Medium" color="primary" size="md" [standalone]="true"></sog-badge>
              <sog-badge content="Large" color="primary" size="lg" [standalone]="true"></sog-badge>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Icons</h2>
        <p>Badges with icons for better visual communication.</p>
        
        <app-code-example
          [code]="iconsCode"
          [htmlCode]="iconsHtml">
          <div class="demo-container">
            <div class="badge-demo">
              <sog-badge content="✓ Verified" color="success" [standalone]="true"></sog-badge>
              <sog-badge content="⚠️ Warning" color="warning" [standalone]="true"></sog-badge>
              <sog-badge content="🚫 Blocked" color="danger" [standalone]="true"></sog-badge>
              <sog-badge content="ℹ️ Info" color="info" [standalone]="true"></sog-badge>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Notification Badges</h2>
        <p>Small notification badges typically used with icons or buttons.</p>
        
        <app-code-example
          [code]="notificationCode"
          [htmlCode]="notificationHtml">
          <div class="demo-container">
            <div class="notification-demo">
              <div class="notification-item">
                <sog-badge content="3" color="danger" size="sm">
                  <button class="notification-button">
                    📧 Messages
                  </button>
                </sog-badge>
              </div>
              
              <div class="notification-item">
                <sog-badge content="12" color="primary" size="sm">
                  <button class="notification-button">
                    🔔 Notifications
                  </button>
                </sog-badge>
              </div>
              
              <div class="notification-item">
                <sog-badge content="5" color="success" size="sm">
                  <button class="notification-button">
                    🛒 Cart
                  </button>
                </sog-badge>
              </div>
              
              <div class="notification-item">
                <sog-badge content="99+" color="warning" size="sm">
                  <button class="notification-button">
                    ⭐ Reviews
                  </button>
                </sog-badge>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Pill Badges</h2>
        <p>Rounded pill-style badges for a softer appearance.</p>
        
        <app-code-example
          [code]="pillCode"
          [htmlCode]="pillHtml">
          <div class="demo-container">
            <div class="badge-demo">
              <sog-badge content="Featured" color="primary" [standalone]="true" class="pill-badge"></sog-badge>
              <sog-badge content="Available" color="success" [standalone]="true" class="pill-badge"></sog-badge>
              <sog-badge content="Limited" color="warning" [standalone]="true" class="pill-badge"></sog-badge>
              <sog-badge content="Sold Out" color="danger" [standalone]="true" class="pill-badge"></sog-badge>
              <sog-badge content="Coming Soon" color="info" [standalone]="true" class="pill-badge"></sog-badge>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>In Context</h2>
        <p>Badges used within other components and layouts.</p>
        
        <app-code-example
          [code]="contextCode"
          [htmlCode]="contextHtml">
          <div class="demo-container">
            <div class="context-demo">
              <div class="product-card">
                <div class="product-header">
                  <h3>Premium Plan</h3>
                  <sog-badge content="Popular" color="success" [standalone]="true" class="pill-badge"></sog-badge>
                </div>
                <p class="product-description">
                  Everything you need to get started with advanced features.
                </p>
                <div class="product-features">
                  <sog-badge content="✓ SSL Certificate" color="info" size="sm" [standalone]="true" class="feature-badge"></sog-badge>
                  <sog-badge content="✓ 24/7 Support" color="info" size="sm" [standalone]="true" class="feature-badge"></sog-badge>
                  <sog-badge content="✓ Analytics" color="info" size="sm" [standalone]="true" class="feature-badge"></sog-badge>
                </div>
                <div class="product-footer">
                  <span class="price">$29/month</span>
                  <button class="upgrade-btn">Upgrade</button>
                </div>
              </div>
              
              <div class="user-list">
                <div class="user-item">
                  <div class="user-avatar">👤</div>
                  <div class="user-info">
                    <h4>John Doe</h4>
                    <p>Senior Developer</p>
                  </div>
                  <sog-badge content="Online" color="success" size="sm" [standalone]="true"></sog-badge>
                </div>
                <div class="user-item">
                  <div class="user-avatar">👩</div>
                  <div class="user-info">
                    <h4>Sarah Smith</h4>
                    <p>Design Lead</p>
                  </div>
                  <sog-badge content="Away" color="warning" size="sm" [standalone]="true"></sog-badge>
                </div>
                <div class="user-item">
                  <div class="user-avatar">👨</div>
                  <div class="user-info">
                    <h4>Mike Johnson</h4>
                    <p>Product Manager</p>
                  </div>
                  <sog-badge content="Offline" color="secondary" size="sm" [standalone]="true"></sog-badge>
                </div>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>API Reference</h2>
        <div class="api-table">
          <h3>CSS Classes</h3>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>.sog-badge</td>
                <td>Base badge component</td>
              </tr>
              <tr>
                <td>.sog-badge--primary</td>
                <td>Primary color variant</td>
              </tr>
              <tr>
                <td>.sog-badge--secondary</td>
                <td>Secondary color variant</td>
              </tr>
              <tr>
                <td>.sog-badge--success</td>
                <td>Success/positive state</td>
              </tr>
              <tr>
                <td>.sog-badge--warning</td>
                <td>Warning/caution state</td>
              </tr>
              <tr>
                <td>.sog-badge--danger</td>
                <td>Danger/error state</td>
              </tr>
              <tr>
                <td>.sog-badge--info</td>
                <td>Information state</td>
              </tr>
              <tr>
                <td>.sog-badge--sm</td>
                <td>Small size variant</td>
              </tr>
              <tr>
                <td>.sog-badge--md</td>
                <td>Medium size variant (default)</td>
              </tr>
              <tr>
                <td>.sog-badge--lg</td>
                <td>Large size variant</td>
              </tr>
              <tr>
                <td>.sog-badge--pill</td>
                <td>Pill-shaped rounded style</td>
              </tr>
              <tr>
                <td>.sog-badge--notification</td>
                <td>Small notification badge style</td>
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

    .badge-demo {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }


    .notification-demo {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .notification-item {
      position: relative;
    }

    .notification-button {
      position: relative;
      padding: 0.75rem 1.5rem;
      background: white;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .notification-button:hover {
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .context-demo {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 1rem;
    }

    .product-header h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0;
    }

    .product-description {
      color: var(--gray-600);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .product-features {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }

    .feature-badge {
      text-transform: none;
      letter-spacing: normal;
    }

    .pill-badge .sog-badge {
      border-radius: 9999px !important;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary-600);
    }

    .upgrade-btn {
      padding: 0.5rem 1rem;
      background: var(--primary-600);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }

    .upgrade-btn:hover {
      background: var(--primary-700);
    }

    .user-list {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .user-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--gray-200);
    }

    .user-item:last-child {
      border-bottom: none;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      background: var(--gray-100);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }

    .user-info {
      flex: 1;
    }

    .user-info h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0 0 0.25rem 0;
    }

    .user-info p {
      font-size: 0.875rem;
      color: var(--gray-500);
      margin: 0;
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

      .notification-demo {
        gap: 1rem;
        justify-content: center;
      }

      .context-demo {
        grid-template-columns: 1fr;
      }

      .product-header {
        flex-direction: column;
        align-items: start;
        gap: 0.5rem;
      }

      .product-footer {
        flex-direction: column;
        align-items: start;
        gap: 1rem;
      }
    }
  `]
})
export class BadgeDemoComponent {
  basicUsageCode = `import { Component } from '@angular/core';
import { SogBadgeComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SogBadgeComponent],
  template: \`
    <sog-badge>New</sog-badge>
    <sog-badge>Beta</sog-badge>
    <sog-badge>Sale</sog-badge>
    <sog-badge>Hot</sog-badge>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-badge>New</sog-badge>
<sog-badge>Beta</sog-badge>
<sog-badge>Sale</sog-badge>
<sog-badge>Hot</sog-badge>`;

  variantsCode = `<sog-badge variant="primary">Primary</sog-badge>
<sog-badge variant="secondary">Secondary</sog-badge>
<sog-badge variant="success">Success</sog-badge>
<sog-badge variant="warning">Warning</sog-badge>
<sog-badge variant="danger">Danger</sog-badge>
<sog-badge variant="info">Info</sog-badge>`;

  variantsHtml = `<sog-badge variant="primary">Primary</sog-badge>
<sog-badge variant="secondary">Secondary</sog-badge>
<sog-badge variant="success">Success</sog-badge>
<sog-badge variant="warning">Warning</sog-badge>
<sog-badge variant="danger">Danger</sog-badge>
<sog-badge variant="info">Info</sog-badge>`;

  sizesCode = `<sog-badge variant="primary" size="sm">Small</sog-badge>
<sog-badge variant="primary" size="md">Medium</sog-badge>
<sog-badge variant="primary" size="lg">Large</sog-badge>`;

  sizesHtml = `<sog-badge variant="primary" size="sm">Small</sog-badge>
<sog-badge variant="primary" size="md">Medium</sog-badge>
<sog-badge variant="primary" size="lg">Large</sog-badge>`;

  iconsCode = `<sog-badge variant="success">
  <sog-icon name="check" size="xs"></sog-icon>
  Verified
</sog-badge>

<sog-badge variant="warning">
  <sog-icon name="warning" size="xs"></sog-icon>
  Warning
</sog-badge>

<sog-badge variant="danger">
  <sog-icon name="block" size="xs"></sog-icon>
  Blocked
</sog-badge>

<sog-badge variant="info">
  <sog-icon name="info" size="xs"></sog-icon>
  Info
</sog-badge>`;

  iconsHtml = `<sog-badge variant="success">
  ✓ Verified
</sog-badge>

<sog-badge variant="warning">
  ⚠️ Warning
</sog-badge>

<sog-badge variant="danger">
  🚫 Blocked
</sog-badge>

<sog-badge variant="info">
  ℹ️ Info
</sog-badge>`;

  notificationCode = `<div class="notification-item">
  <button class="notification-button">
    📧 Messages
    <sog-badge variant="danger" notification>3</sog-badge>
  </button>
</div>

<div class="notification-item">
  <button class="notification-button">
    🔔 Notifications  
    <sog-badge variant="primary" notification>12</sog-badge>
  </button>
</div>

<div class="notification-item">
  <button class="notification-button">
    🛒 Cart
    <sog-badge variant="success" notification>5</sog-badge>
  </button>
</div>`;

  notificationHtml = `<div class="notification-item">
  <button class="notification-button">
    📧 Messages
    <sog-badge variant="danger" notification>3</sog-badge>
  </button>
</div>

<div class="notification-item">
  <button class="notification-button">
    🔔 Notifications  
    <sog-badge variant="primary" notification>12</sog-badge>
  </button>
</div>

<div class="notification-item">
  <button class="notification-button">
    🛒 Cart
    <sog-badge variant="success" notification>5</sog-badge>
  </button>
</div>`;

  pillCode = `<sog-badge variant="primary" pill>Featured</sog-badge>
<sog-badge variant="success" pill>Available</sog-badge>
<sog-badge variant="warning" pill>Limited</sog-badge>
<sog-badge variant="danger" pill>Sold Out</sog-badge>
<sog-badge variant="info" pill>Coming Soon</sog-badge>`;

  pillHtml = `<sog-badge variant="primary" pill>Featured</sog-badge>
<sog-badge variant="success" pill>Available</sog-badge>
<sog-badge variant="warning" pill>Limited</sog-badge>
<sog-badge variant="danger" pill>Sold Out</sog-badge>
<sog-badge variant="info" pill>Coming Soon</sog-badge>`;

  contextCode = `<div class="product-card">
  <div class="product-header">
    <h3>Premium Plan</h3>
    <sog-badge variant="success" pill>Popular</sog-badge>
  </div>
  <p class="product-description">
    Everything you need to get started with advanced features.
  </p>
  <div class="product-features">
    <sog-badge variant="info" size="sm">
      ✓ SSL Certificate
    </sog-badge>
    <sog-badge variant="info" size="sm">
      ✓ 24/7 Support
    </sog-badge>
    <sog-badge variant="info" size="sm">
      ✓ Analytics
    </sog-badge>
  </div>
</div>`;

  contextHtml = `<div class="product-card">
  <div class="product-header">
    <h3>Premium Plan</h3>
    <sog-badge variant="success" pill>Popular</sog-badge>
  </div>
  <p class="product-description">
    Everything you need to get started with advanced features.
  </p>
  <div class="product-features">
    <sog-badge variant="info" size="sm">
      ✓ SSL Certificate
    </sog-badge>
    <sog-badge variant="info" size="sm">
      ✓ 24/7 Support
    </sog-badge>
    <sog-badge variant="info" size="sm">
      ✓ Analytics
    </sog-badge>
  </div>
</div>`;
}