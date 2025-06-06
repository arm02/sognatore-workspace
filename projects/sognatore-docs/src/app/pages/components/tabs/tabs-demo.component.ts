import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreTabs, SognatoreTab, TabItem } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreTabs, SognatoreTab],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Tabs Component</h1>
        <p class="page-description">
          Organized tab navigation component for switching between different content panels with smooth transitions.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple tabs with content panels using TabItem array.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-tabs 
              variant="basic"
              [tabs]="basicTabs"
              [activeTabId]="selectedTabId"
              (tabChange)="onTabChange($event)">
              
              <div slot="overview" class="tab-content">
                <h3>Project Overview</h3>
                <p>This is a comprehensive overview of our project. We're building a modern web application with cutting-edge technologies and user-centered design principles.</p>
                <ul>
                  <li>Modern architecture</li>
                  <li>Responsive design</li>
                  <li>High performance</li>
                </ul>
              </div>
              
              <div slot="features" class="tab-content">
                <h3>Key Features</h3>
                <p>Our application includes a comprehensive set of features designed to meet all your needs:</p>
                <div class="feature-grid">
                  <div class="feature-item">
                    <strong>🚀 Fast Performance</strong>
                    <p>Lightning-fast load times and smooth interactions</p>
                  </div>
                  <div class="feature-item">
                    <strong>📱 Mobile-First</strong>
                    <p>Optimized for mobile devices and responsive design</p>
                  </div>
                  <div class="feature-item">
                    <strong>🔒 Secure</strong>
                    <p>Enterprise-grade security and data protection</p>
                  </div>
                </div>
              </div>
              
              <div slot="pricing" class="tab-content">
                <h3>Pricing Plans</h3>
                <p>Choose the plan that works best for you:</p>
                <div class="pricing-grid">
                  <div class="pricing-card">
                    <h4>Starter</h4>
                    <div class="price">$9/mo</div>
                    <ul>
                      <li>Up to 5 projects</li>
                      <li>Basic support</li>
                      <li>1GB storage</li>
                    </ul>
                  </div>
                  <div class="pricing-card">
                    <h4>Professional</h4>
                    <div class="price">$29/mo</div>
                    <ul>
                      <li>Unlimited projects</li>
                      <li>Priority support</li>
                      <li>10GB storage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </sog-tabs>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Icons</h2>
        <p>Tabs with icons for better visual identification.</p>
        
        <app-code-example
          [code]="iconsCode"
          [htmlCode]="iconsHtml">
          <div class="demo-container">
            <sog-tabs 
              variant="basic"
              [tabs]="iconTabs">
              
              <div slot="dashboard" class="tab-content">
                <h3>Dashboard Overview</h3>
                <p>Welcome to your dashboard! Here you can see an overview of all your important metrics and activities.</p>
                <div class="dashboard-stats">
                  <div class="stat-card">
                    <div class="stat-value">2,847</div>
                    <div class="stat-label">Total Users</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-value">$12,750</div>
                    <div class="stat-label">Revenue</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-value">98.5%</div>
                    <div class="stat-label">Uptime</div>
                  </div>
                </div>
              </div>
              
              <div slot="analytics" class="tab-content">
                <h3>Analytics</h3>
                <p>Detailed analytics and insights about your application performance.</p>
                <div class="analytics-charts">
                  <div class="chart-placeholder">📊 Page Views Chart</div>
                  <div class="chart-placeholder">📈 User Growth Chart</div>
                </div>
              </div>
              
              <div slot="settings" class="tab-content">
                <h3>Settings</h3>
                <p>Configure your application settings and preferences.</p>
                <div class="settings-form">
                  <label>Site Name: <input type="text" value="My Application"></label>
                  <label>Theme: <select><option>Light</option><option>Dark</option></select></label>
                  <label><input type="checkbox" checked> Enable notifications</label>
                </div>
              </div>
            </sog-tabs>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Material Design Style</h2>
        <p>Tabs with Material Design styling.</p>
        
        <app-code-example
          [code]="materialCode"
          [htmlCode]="materialHtml">
          <div class="demo-container">
            <sog-tabs 
              variant="material"
              [tabs]="materialTabs">
              
              <div slot="info" class="tab-content">
                <h3>Information</h3>
                <p>General information about the product and its capabilities.</p>
                <div class="info-list">
                  <div class="info-item">
                    <strong>Version:</strong> 2.1.0
                  </div>
                  <div class="info-item">
                    <strong>Last Updated:</strong> December 2024
                  </div>
                  <div class="info-item">
                    <strong>License:</strong> MIT
                  </div>
                </div>
              </div>
              
              <div slot="specs" class="tab-content">
                <h3>Specifications</h3>
                <p>Technical specifications and requirements.</p>
                <table class="specs-table">
                  <tr><td>Framework</td><td>Angular 17+</td></tr>
                  <tr><td>TypeScript</td><td>5.0+</td></tr>
                  <tr><td>Node.js</td><td>18+</td></tr>
                  <tr><td>Bundle Size</td><td>~50KB</td></tr>
                </table>
              </div>
              
              <div slot="support" class="tab-content">
                <h3>Support</h3>
                <p>Get help and support for your project.</p>
                <div class="support-links">
                  <a href="#" class="support-link">📖 Documentation</a>
                  <a href="#" class="support-link">💬 Community Forum</a>
                  <a href="#" class="support-link">🐛 Report Issues</a>
                  <a href="#" class="support-link">📧 Contact Support</a>
                </div>
              </div>
            </sog-tabs>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Closable Tabs</h2>
        <p>Tabs that can be closed by users.</p>
        
        <app-code-example
          [code]="closableCode"
          [htmlCode]="closableHtml">
          <div class="demo-container">
            <sog-tabs 
              variant="basic"
              [tabs]="closableTabs"
              (tabClose)="onTabClose($event)">
              
              <div slot="tab1" class="tab-content">
                <h3>Document 1</h3>
                <p>This is the content of the first document. You can close this tab by clicking the X button.</p>
              </div>
              
              <div slot="tab2" class="tab-content">
                <h3>Document 2</h3>
                <p>This is the content of the second document. This tab can also be closed.</p>
              </div>
              
              <div slot="tab3" class="tab-content">
                <h3>Document 3</h3>
                <p>This is the content of the third document. Try closing some tabs!</p>
              </div>
            </sog-tabs>
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
                <td>position</td>
                <td>'top' | 'bottom' | 'left' | 'right'</td>
                <td>'top'</td>
                <td>Tab navigation position</td>
              </tr>
              <tr>
                <td>tabs</td>
                <td>TabItem[]</td>
                <td>[]</td>
                <td>Array of tab items</td>
              </tr>
              <tr>
                <td>activeTabId</td>
                <td>string</td>
                <td>''</td>
                <td>ID of the currently active tab</td>
              </tr>
              <tr>
                <td>scrollable</td>
                <td>boolean</td>
                <td>false</td>
                <td>Enable horizontal scrolling for many tabs</td>
              </tr>
            </tbody>
          </table>

          <h3>TabItem Interface</h3>
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
                <td>id</td>
                <td>string</td>
                <td>Yes</td>
                <td>Unique identifier for the tab</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>Yes</td>
                <td>Display text for the tab</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>No</td>
                <td>Whether the tab is disabled</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>string</td>
                <td>No</td>
                <td>HTML string for tab icon</td>
              </tr>
              <tr>
                <td>closable</td>
                <td>boolean</td>
                <td>No</td>
                <td>Whether the tab can be closed</td>
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
                <td>tabChange</td>
                <td>string</td>
                <td>Emitted when active tab changes</td>
              </tr>
              <tr>
                <td>tabClose</td>
                <td>string</td>
                <td>Emitted when a tab is closed</td>
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

    .tab-content {
      padding: 1rem 0;
    }

    .tab-content h3 {
      margin-bottom: 1rem;
      color: var(--gray-900);
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .feature-item {
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
    }

    .feature-item strong {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--gray-900);
    }

    .feature-item p {
      margin: 0;
      font-size: 0.875rem;
      color: var(--gray-600);
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .pricing-card {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
      text-align: center;
    }

    .pricing-card h4 {
      margin-bottom: 0.5rem;
      color: var(--gray-900);
    }

    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-600);
      margin-bottom: 1rem;
    }

    .pricing-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .pricing-card li {
      padding: 0.25rem 0;
      color: var(--gray-600);
      font-size: 0.875rem;
    }

    .dashboard-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .stat-card {
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
      text-align: center;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-600);
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--gray-600);
      margin-top: 0.25rem;
    }

    .analytics-charts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }

    .chart-placeholder {
      padding: 2rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
      text-align: center;
      color: var(--gray-500);
      font-size: 1.125rem;
    }

    .settings-form {
      margin-top: 1rem;
    }

    .settings-form label {
      display: block;
      margin-bottom: 1rem;
      color: var(--gray-700);
    }

    .settings-form input,
    .settings-form select {
      margin-left: 0.5rem;
      padding: 0.5rem;
      border: 1px solid var(--gray-300);
      border-radius: 4px;
    }

    .info-list {
      margin-top: 1rem;
    }

    .info-item {
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--gray-200);
    }

    .info-item:last-child {
      border-bottom: none;
    }

    .specs-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .specs-table td {
      padding: 0.5rem;
      border-bottom: 1px solid var(--gray-200);
    }

    .specs-table td:first-child {
      font-weight: 500;
      color: var(--gray-700);
    }

    .support-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .support-link {
      display: block;
      padding: 1rem;
      background: white;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
      text-decoration: none;
      color: var(--gray-700);
      transition: all 0.2s ease;
    }

    .support-link:hover {
      background: var(--gray-50);
      border-color: var(--primary-300);
      color: var(--primary-600);
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
export class TabsDemoComponent {
  selectedTabId = 'overview';

  basicTabs: TabItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' }
  ];

  iconTabs: TabItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  materialTabs: TabItem[] = [
    { id: 'info', label: 'Information' },
    { id: 'specs', label: 'Specifications' },
    { id: 'support', label: 'Support' }
  ];

  closableTabs: TabItem[] = [
    { id: 'tab1', label: 'Document 1', closable: true },
    { id: 'tab2', label: 'Document 2', closable: true },
    { id: 'tab3', label: 'Document 3', closable: true }
  ];

  onTabChange(tabId: string) {
    this.selectedTabId = tabId;
  }

  onTabClose(tabId: string) {
    this.closableTabs = this.closableTabs.filter(tab => tab.id !== tabId);
  }

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreTabs, TabItem } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreTabs],
  template: \`
    <sog-tabs 
      variant="basic"
      [tabs]="tabs"
      [activeTabId]="activeTabId"
      (tabChange)="onTabChange($event)">
      
      <div slot="overview" class="tab-content">
        <h3>Overview Content</h3>
        <p>Content for the overview tab.</p>
      </div>
      
      <div slot="features" class="tab-content">
        <h3>Features Content</h3>
        <p>Content for the features tab.</p>
      </div>
    </sog-tabs>
  \`
})
export class ExampleComponent {
  activeTabId = 'overview';
  
  tabs: TabItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' }
  ];
  
  onTabChange(tabId: string) {
    this.activeTabId = tabId;
  }
}`;

  basicUsageHtml = `<sog-tabs 
  variant="basic"
  [tabs]="tabs"
  [activeTabId]="activeTabId"
  (tabChange)="onTabChange($event)">
  
  <div slot="overview" class="tab-content">
    <h3>Overview Content</h3>
    <p>Content for the overview tab.</p>
  </div>
  
  <div slot="features" class="tab-content">
    <h3>Features Content</h3>
    <p>Content for the features tab.</p>
  </div>
</sog-tabs>`;

  iconsCode = `tabs: TabItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];`;

  iconsHtml = `<sog-tabs 
  variant="basic"
  [tabs]="iconTabs">
  
  <div slot="dashboard" class="tab-content">
    Dashboard content...
  </div>
</sog-tabs>`;

  materialCode = `<sog-tabs 
  variant="material"
  [tabs]="materialTabs">
  
  <div slot="info" class="tab-content">
    <h3>Information</h3>
    <p>Material design styled content.</p>
  </div>
</sog-tabs>`;

  materialHtml = `<sog-tabs 
  variant="material"
  [tabs]="materialTabs">
  
  <div slot="info" class="tab-content">
    <h3>Information</h3>
    <p>Material design styled content.</p>
  </div>
</sog-tabs>`;

  closableCode = `tabs: TabItem[] = [
  { id: 'tab1', label: 'Document 1', closable: true },
  { id: 'tab2', label: 'Document 2', closable: true },
  { id: 'tab3', label: 'Document 3', closable: true }
];

onTabClose(tabId: string) {
  this.tabs = this.tabs.filter(tab => tab.id !== tabId);
}`;

  closableHtml = `<sog-tabs 
  variant="basic"
  [tabs]="closableTabs"
  (tabClose)="onTabClose($event)">
  
  <div slot="tab1" class="tab-content">
    Content that can be closed...
  </div>
</sog-tabs>`;
}