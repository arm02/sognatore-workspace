import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreTooltip, SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-tooltip-examples',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreTooltip, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Tooltip Examples</h1>
        <p class="page-description">
          Real-world examples and implementation patterns for common tooltip use cases.
        </p>
      </header>

      <section class="section">
        <h2>Real-World Examples</h2>
        <p>Common tooltip use cases and implementation patterns.</p>
        
        <div class="examples-grid">
          <div class="example-card">
            <h3>Form Field Help</h3>
            <p class="example-description">Provide contextual help for form fields without cluttering the UI.</p>
            <app-code-example
              [code]="formHelpCode"
              [htmlCode]="formHelpHtml">
              <div class="demo-container demo-small">
                <div class="form-example">
                  <div class="form-field">
                    <label for="username">Username</label>
                    <div class="input-with-help">
                      <input type="text" id="username" placeholder="Enter username">
                      <sog-tooltip 
                        text="Username must be 3-20 characters and contain only letters, numbers, and underscores"
                        position="right"
                        variant="info">
                        <button class="help-icon">?</button>
                      </sog-tooltip>
                    </div>
                  </div>
                  
                  <div class="form-field">
                    <label for="password">Password</label>
                    <div class="input-with-help">
                      <input type="password" id="password" placeholder="Enter password">
                      <sog-tooltip 
                        text="Password must be at least 8 characters with uppercase, lowercase, number and symbol"
                        position="right"
                        variant="warning">
                        <button class="help-icon">?</button>
                      </sog-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Navigation Tooltips</h3>
            <p class="example-description">Icon-only navigation with descriptive tooltips for better UX.</p>
            <app-code-example
              [code]="navTooltipCode"
              [htmlCode]="navTooltipHtml">
              <div class="demo-container demo-small">
                <div class="nav-examples">
                  <!-- Sidebar Navigation -->
                  <div class="nav-section">
                    <h4>Sidebar Navigation</h4>
                    <nav class="sidebar-nav">
                      <sog-tooltip text="Dashboard" position="right" variant="basic">
                        <button class="nav-icon">🏠</button>
                      </sog-tooltip>
                      <sog-tooltip text="Analytics" position="right" variant="basic">
                        <button class="nav-icon">📊</button>
                      </sog-tooltip>
                      <sog-tooltip text="Users" position="right" variant="basic">
                        <button class="nav-icon">👥</button>
                      </sog-tooltip>
                      <sog-tooltip text="Settings" position="right" variant="basic">
                        <button class="nav-icon">⚙️</button>
                      </sog-tooltip>
                    </nav>
                  </div>

                  <!-- Top Navigation -->
                  <div class="nav-section">
                    <h4>Top Navigation</h4>
                    <nav class="top-nav">
                      <sog-tooltip text="Notifications" position="bottom" variant="basic">
                        <button class="nav-icon">🔔</button>
                      </sog-tooltip>
                      <sog-tooltip text="Messages" position="bottom" variant="basic">
                        <button class="nav-icon">💬</button>
                      </sog-tooltip>
                      <sog-tooltip text="User Profile" position="bottom" variant="basic">
                        <button class="nav-icon">👤</button>
                      </sog-tooltip>
                    </nav>
                  </div>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Status Indicators</h3>
            <p class="example-description">System status monitoring with color-coded indicators and detailed tooltips.</p>
            <app-code-example
              [code]="statusTooltipCode"
              [htmlCode]="statusTooltipHtml">
              <div class="demo-container demo-small">
                <div class="status-example">
                  <div class="status-list">
                    <div class="status-item">
                      <span>API Server</span>
                      <sog-tooltip text="All systems operational - Response time: 45ms" variant="success" position="left">
                        <div class="status-indicator status-online"></div>
                      </sog-tooltip>
                    </div>
                    <div class="status-item">
                      <span>Database</span>
                      <sog-tooltip text="High CPU usage detected - Performance may be affected" variant="warning" position="left">
                        <div class="status-indicator status-warning"></div>
                      </sog-tooltip>
                    </div>
                    <div class="status-item">
                      <span>Cache Service</span>
                      <sog-tooltip text="Service unavailable - Please contact system administrator" variant="error" position="left">
                        <div class="status-indicator status-error"></div>
                      </sog-tooltip>
                    </div>
                    <div class="status-item">
                      <span>File Storage</span>
                      <sog-tooltip text="Connected - 2.3TB used of 10TB available" variant="success" position="left">
                        <div class="status-indicator status-online"></div>
                      </sog-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Data Tables</h3>
            <p class="example-description">Enhanced table interactions with user profiles and action tooltips.</p>
            <app-code-example
              [code]="tableTooltipCode"
              [htmlCode]="tableTooltipHtml">
              <div class="demo-container demo-small">
                <div class="table-example">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>
                          Status
                          <sog-tooltip text="User account status: Active, Inactive, or Suspended" variant="info" position="top">
                            <span class="header-help">ℹ️</span>
                          </sog-tooltip>
                        </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <sog-tooltip variant="material" position="right">
                            <span class="user-name">John Doe</span>
                            <div slot="tooltip">
                              <div class="user-tooltip">
                                <strong>👤 John Doe</strong>
                                <p>john.doe&#64;example.com</p>
                                <small>Member since: Jan 2023</small>
                                <small>Last login: 2 hours ago</small>
                              </div>
                            </div>
                          </sog-tooltip>
                        </td>
                        <td><span class="status-badge active">Active</span></td>
                        <td>
                          <sog-tooltip text="Edit user details" position="top" variant="basic">
                            <button class="action-btn">✏️</button>
                          </sog-tooltip>
                          <sog-tooltip text="View user activity" position="top" variant="basic">
                            <button class="action-btn">👁️</button>
                          </sog-tooltip>
                          <sog-tooltip text="Delete user account" position="top" variant="error">
                            <button class="action-btn danger">🗑️</button>
                          </sog-tooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <sog-tooltip variant="material" position="right">
                            <span class="user-name">Jane Smith</span>
                            <div slot="tooltip">
                              <div class="user-tooltip">
                                <strong>👤 Jane Smith</strong>
                                <p>jane.smith&#64;example.com</p>
                                <small>Member since: Mar 2023</small>
                                <small>Last login: 1 day ago</small>
                              </div>
                            </div>
                          </sog-tooltip>
                        </td>
                        <td><span class="status-badge inactive">Inactive</span></td>
                        <td>
                          <sog-tooltip text="Edit user details" position="top" variant="basic">
                            <button class="action-btn">✏️</button>
                          </sog-tooltip>
                          <sog-tooltip text="View user activity" position="top" variant="basic">
                            <button class="action-btn">👁️</button>
                          </sog-tooltip>
                          <sog-tooltip text="Delete user account" position="top" variant="error">
                            <button class="action-btn danger">🗑️</button>
                          </sog-tooltip>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Interactive Buttons</h3>
            <p class="example-description">Action buttons with contextual tooltips and confirmation dialogs.</p>
            <app-code-example
              [code]="buttonTooltipCode"
              [htmlCode]="buttonTooltipHtml">
              <div class="demo-container demo-small">
                <div class="button-examples">
                  <div class="button-group">
                    <h4>File Operations</h4>
                    <div class="actions">
                      <sog-tooltip text="Create new document" position="top" variant="basic">
                        <sog-button variant="primary">📄 New</sog-button>
                      </sog-tooltip>
                      <sog-tooltip text="Open existing file" position="top" variant="basic">
                        <sog-button variant="outline">📁 Open</sog-button>
                      </sog-tooltip>
                      <sog-tooltip text="Save current document" position="top" variant="success">
                        <sog-button variant="success">💾 Save</sog-button>
                      </sog-tooltip>
                    </div>
                  </div>

                  <div class="button-group">
                    <h4>Dangerous Actions</h4>
                    <div class="actions">
                      <sog-tooltip text="Permanently delete all selected items" position="top" variant="error" trigger="click">
                        <sog-button variant="danger">🗑️ Delete All</sog-button>
                      </sog-tooltip>
                      <sog-tooltip text="Reset to factory defaults (cannot be undone)" position="top" variant="warning" trigger="click">
                        <sog-button variant="warning">🔄 Reset</sog-button>
                      </sog-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Rich Content</h3>
            <p class="example-description">Complex tooltips with formatted content, lists, and custom styling.</p>
            <app-code-example
              [code]="richContentCode"
              [htmlCode]="richContentHtml">
              <div class="demo-container demo-small">
                <div class="rich-content-demo">
                  <div class="product-cards">
                    <div class="product-card">
                      <sog-tooltip variant="material" position="top">
                        <div class="product-info">
                          <h5>Pro Plan</h5>
                          <span class="price">$29/mo</span>
                        </div>
                        <div slot="tooltip">
                          <div class="tooltip-header">
                            <strong>📱 Pro Plan Features</strong>
                          </div>
                          <div class="tooltip-body">
                            <ul>
                              <li>✅ Unlimited projects</li>
                              <li>✅ Priority support</li>
                              <li>✅ Advanced analytics</li>
                              <li>✅ Custom domains</li>
                              <li>✅ API access</li>
                            </ul>
                            <div class="tooltip-footer">
                              <small>Cancel anytime • 30-day free trial</small>
                            </div>
                          </div>
                        </div>
                      </sog-tooltip>
                    </div>

                    <div class="product-card">
                      <sog-tooltip variant="info" position="top">
                        <div class="product-info">
                          <h5>Enterprise</h5>
                          <span class="price">Custom</span>
                        </div>
                        <div slot="tooltip">
                          <div class="tooltip-header">
                            <strong>🏢 Enterprise Solution</strong>
                          </div>
                          <div class="tooltip-body">
                            <p>Everything in Pro, plus:</p>
                            <ul>
                              <li>🔐 SSO & SAML</li>
                              <li>👥 Team management</li>
                              <li>📊 Advanced reporting</li>
                              <li>🛡️ Security compliance</li>
                            </ul>
                            <div class="tooltip-footer">
                              <small>Contact sales for pricing</small>
                            </div>
                          </div>
                        </div>
                      </sog-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </app-code-example>
          </div>
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

    .examples-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .example-card {
      border: 1px solid var(--gray-200);
      border-radius: 8px;
      overflow: hidden;
    }

    .example-card h3 {
      background: var(--gray-50);
      padding: 1rem;
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--gray-900);
      border-bottom: 1px solid var(--gray-200);
    }

    .example-description {
      padding: 0 1rem;
      margin: 0.75rem 0;
      font-size: 0.875rem;
      color: var(--gray-600);
    }

    .demo-container {
      padding: 3rem 2rem;
      background: var(--gray-50);
      border-radius: 8px;
      margin-top: 1rem;
      min-height: 200px;
    }

    .demo-small {
      padding: 1.5rem;
      min-height: auto;
    }

    /* Form Example Styles */
    .form-example {
      max-width: 350px;
      margin: 0 auto;
    }

    .form-field {
      margin-bottom: 1rem;
    }

    .form-field label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--gray-700);
    }

    .input-with-help {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .input-with-help input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid var(--gray-300);
      border-radius: 4px;
    }

    .help-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid var(--gray-400);
      background: var(--gray-100);
      color: var(--gray-600);
      font-size: 0.75rem;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .help-icon:hover {
      background: var(--primary-100);
      border-color: var(--primary-400);
      color: var(--primary-600);
    }

    /* Navigation Examples */
    .nav-examples {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .nav-section h4 {
      margin-bottom: 0.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--gray-700);
      text-align: center;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background: var(--gray-800);
      padding: 0.75rem;
      border-radius: 8px;
    }

    .top-nav {
      display: flex;
      gap: 0.5rem;
      background: var(--gray-800);
      padding: 0.75rem;
      border-radius: 8px;
    }

    .nav-icon {
      width: 40px;
      height: 40px;
      border: none;
      background: transparent;
      color: white;
      font-size: 1.125rem;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
    }

    .nav-icon:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Status Example Styles */
    .status-example {
      max-width: 400px;
      margin: 0 auto;
    }

    .status-list {
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 6px;
      overflow: hidden;
    }

    .status-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
    }

    .status-item:last-child {
      border-bottom: none;
    }

    .status-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;
    }

    .status-online { background: #16a34a; }
    .status-warning { background: #f59e0b; }
    .status-error { background: #dc2626; }

    /* Table Example Styles */
    .table-example {
      max-width: 600px;
      margin: 0 auto;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 6px;
      overflow: hidden;
    }

    .data-table th,
    .data-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid var(--gray-100);
    }

    .data-table th {
      background: var(--gray-50);
      font-weight: 600;
      color: var(--gray-900);
      position: relative;
    }

    .header-help {
      font-size: 0.75rem;
      margin-left: 0.25rem;
      cursor: pointer;
      color: var(--gray-500);
    }

    .user-name {
      color: var(--primary-600);
      cursor: pointer;
      text-decoration: underline;
    }

    .status-badge {
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .status-badge.active {
      background: #dcfce7;
      color: #16a34a;
    }

    .status-badge.inactive {
      background: #fef3c7;
      color: #d97706;
    }

    .action-btn {
      padding: 0.25rem;
      border: none;
      background: var(--gray-100);
      border-radius: 4px;
      cursor: pointer;
      margin-right: 0.25rem;
      font-size: 0.875rem;
    }

    .action-btn:hover {
      background: var(--gray-200);
    }

    .action-btn.danger {
      background: #fef2f2;
      color: #dc2626;
    }

    .action-btn.danger:hover {
      background: #fee2e2;
    }

    .user-tooltip {
      text-align: left;
    }

    .user-tooltip p {
      margin: 0.25rem 0;
      font-size: 0.875rem;
    }

    .user-tooltip small {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.75rem;
      display: block;
    }

    /* Button Examples */
    .button-examples {
      max-width: 500px;
      margin: 0 auto;
    }

    .button-group {
      margin-bottom: 2rem;
    }

    .button-group h4 {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-700);
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    /* Rich Content Examples */
    .rich-content-demo {
      display: flex;
      justify-content: center;
    }

    .product-cards {
      display: flex;
      gap: 1rem;
    }

    .product-card {
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .product-card:hover {
      border-color: var(--primary-400);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .product-info {
      padding: 1.5rem;
      text-align: center;
    }

    .product-info h5 {
      margin: 0 0 0.5rem 0;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--gray-900);
    }

    .price {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary-600);
    }

    .tooltip-header {
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .tooltip-body {
      text-align: left;
    }

    .tooltip-body p {
      margin: 0.25rem 0;
      font-size: 0.875rem;
    }

    .tooltip-body ul {
      margin: 0.5rem 0;
      padding-left: 1rem;
      font-size: 0.875rem;
    }

    .tooltip-body li {
      margin-bottom: 0.25rem;
    }

    .tooltip-footer {
      margin-top: 0.75rem;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .tooltip-footer small {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.75rem;
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .examples-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .demo-container {
        padding: 2rem 1rem;
      }

      .nav-examples {
        flex-direction: column;
        align-items: center;
      }

      .product-cards {
        flex-direction: column;
      }
    }
  `]
})
export class TooltipExamplesComponent {
  // Code examples for all the different use cases
  formHelpCode = `import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-form-help',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <div class="form-field">
      <label for="username">Username</label>
      <div class="input-with-help">
        <input type="text" id="username" placeholder="Enter username">
        <sog-tooltip 
          text="Username must be 3-20 characters and contain only letters, numbers, and underscores"
          position="right"
          variant="info">
          <button class="help-icon" type="button">?</button>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class FormHelpComponent {}`;

  formHelpHtml = `<div class="form-field">
  <label for="username">Username</label>
  <div class="input-with-help">
    <input type="text" id="username" placeholder="Enter username">
    <sog-tooltip 
      text="Username must be 3-20 characters and contain only letters, numbers, and underscores"
      position="right"
      variant="info">
      <button class="help-icon" type="button">?</button>
    </sog-tooltip>
  </div>
</div>`;

  navTooltipCode = `import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-nav-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <!-- Sidebar Navigation -->
    <nav class="sidebar-nav">
      <sog-tooltip text="Dashboard" position="right" variant="basic">
        <button class="nav-icon">🏠</button>
      </sog-tooltip>
      <sog-tooltip text="Analytics" position="right" variant="basic">
        <button class="nav-icon">📊</button>
      </sog-tooltip>
      <sog-tooltip text="Settings" position="right" variant="basic">
        <button class="nav-icon">⚙️</button>
      </sog-tooltip>
    </nav>

    <!-- Top Navigation -->
    <nav class="top-nav">
      <sog-tooltip text="Notifications" position="bottom" variant="basic">
        <button class="nav-icon">🔔</button>
      </sog-tooltip>
      <sog-tooltip text="Messages" position="bottom" variant="basic">
        <button class="nav-icon">💬</button>
      </sog-tooltip>
      <sog-tooltip text="User Profile" position="bottom" variant="basic">
        <button class="nav-icon">👤</button>
      </sog-tooltip>
    </nav>
  \`
})
export class NavTooltipsComponent {}`;

  navTooltipHtml = `<nav class="sidebar-nav">
  <sog-tooltip text="Dashboard" position="right" variant="basic">
    <button class="nav-icon">🏠</button>
  </sog-tooltip>
  <sog-tooltip text="Analytics" position="right" variant="basic">
    <button class="nav-icon">📊</button>
  </sog-tooltip>
</nav>`;

  statusTooltipCode = `import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-status-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <div class="status-list">
      <div class="status-item" *ngFor="let status of systemStatus">
        <span>{{status.name}}</span>
        <sog-tooltip 
          [text]="status.description" 
          [variant]="status.variant" 
          position="left">
          <div 
            class="status-indicator" 
            [class]="'status-' + status.status">
          </div>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class StatusTooltipsComponent {
  systemStatus = [
    { name: 'API Server', status: 'online', variant: 'success' as const, 
      description: 'All systems operational - Response time: 45ms' },
    { name: 'Database', status: 'warning', variant: 'warning' as const, 
      description: 'High CPU usage detected - Performance may be affected' },
    { name: 'Cache Service', status: 'error', variant: 'error' as const, 
      description: 'Service unavailable - Please contact system administrator' }
  ];
}`;

  statusTooltipHtml = `<div class="status-list">
  <div class="status-item">
    <span>Server Status</span>
    <sog-tooltip text="All systems operational" variant="success" position="left">
      <div class="status-indicator status-online"></div>
    </sog-tooltip>
  </div>
</div>`;

  tableTooltipCode = `import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-table-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <table class="data-table">
      <thead>
        <tr>
          <th>User</th>
          <th>
            Status
            <sog-tooltip text="User account status: Active, Inactive, or Suspended" variant="info" position="top">
              <span class="header-help">ℹ️</span>
            </sog-tooltip>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>
            <sog-tooltip variant="material" position="right">
              <span class="user-name">{{user.name}}</span>
              <div slot="tooltip">
                <div class="user-tooltip">
                  <strong>👤 {{user.name}}</strong>
                  <p>{{user.email}}</p>
                  <small>Member since: {{user.memberSince}}</small>
                </div>
              </div>
            </sog-tooltip>
          </td>
          <td><span class="status-badge" [class]="user.status.toLowerCase()">{{user.status}}</span></td>
          <td>
            <sog-tooltip text="Edit user details" position="top" variant="basic">
              <button class="action-btn">✏️</button>
            </sog-tooltip>
            <sog-tooltip text="View user activity" position="top" variant="basic">
              <button class="action-btn">👁️</button>
            </sog-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
  \`
})
export class TableTooltipsComponent {
  users = [
    { name: 'John Doe', email: 'john.doe&#64;example.com', status: 'Active', memberSince: 'Jan 2023' },
    { name: 'Jane Smith', email: 'jane.smith&#64;example.com', status: 'Inactive', memberSince: 'Mar 2023' }
  ];
}`;

  tableTooltipHtml = `<table class="data-table">
  <thead>
    <tr>
      <th>User</th>
      <th>Status <sog-tooltip text="Account status info" variant="info"><span>ℹ️</span></sog-tooltip></th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <sog-tooltip variant="material" position="right">
          <span class="user-name">John Doe</span>
          <div slot="tooltip">
            <strong>👤 John Doe</strong>
            <p>john.doe&#64;example.com</p>
            <small>Member since: Jan 2023</small>
          </div>
        </sog-tooltip>
      </td>
      <td><span class="status-badge active">Active</span></td>
      <td>
        <sog-tooltip text="Edit user" position="top">
          <button class="action-btn">✏️</button>
        </sog-tooltip>
      </td>
    </tr>
  </tbody>
</table>`;

  buttonTooltipCode = `import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-button-tooltips',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <div class="button-group">
      <h4>File Operations</h4>
      <div class="actions">
        <sog-tooltip text="Create new document" position="top" variant="basic">
          <sog-button variant="primary">📄 New</sog-button>
        </sog-tooltip>
        <sog-tooltip text="Open existing file" position="top" variant="basic">
          <sog-button variant="outline">📁 Open</sog-button>
        </sog-tooltip>
        <sog-tooltip text="Save current document" position="top" variant="success">
          <sog-button variant="success">💾 Save</sog-button>
        </sog-tooltip>
      </div>
    </div>

    <div class="button-group">
      <h4>Dangerous Actions</h4>
      <div class="actions">
        <sog-tooltip text="Permanently delete all selected items" position="top" variant="error" trigger="click">
          <sog-button variant="danger">🗑️ Delete All</sog-button>
        </sog-tooltip>
        <sog-tooltip text="Reset to factory defaults (cannot be undone)" position="top" variant="warning" trigger="click">
          <sog-button variant="warning">🔄 Reset</sog-button>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class ButtonTooltipsComponent {}`;

  buttonTooltipHtml = `<div class="actions">
  <sog-tooltip text="Create new document" position="top" variant="basic">
    <sog-button variant="primary">📄 New</sog-button>
  </sog-tooltip>
  <sog-tooltip text="Permanently delete all items" position="top" variant="error" trigger="click">
    <sog-button variant="danger">🗑️ Delete All</sog-button>
  </sog-tooltip>
</div>`;

  richContentCode = `import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-rich-content',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <div class="product-cards">
      <div class="product-card">
        <sog-tooltip variant="material" position="top">
          <div class="product-info">
            <h5>Pro Plan</h5>
            <span class="price">$29/mo</span>
          </div>
          <div slot="tooltip">
            <div class="tooltip-header">
              <strong>📱 Pro Plan Features</strong>
            </div>
            <div class="tooltip-body">
              <ul>
                <li>✅ Unlimited projects</li>
                <li>✅ Priority support</li>
                <li>✅ Advanced analytics</li>
                <li>✅ Custom domains</li>
              </ul>
              <div class="tooltip-footer">
                <small>Cancel anytime • 30-day free trial</small>
              </div>
            </div>
          </div>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class RichContentComponent {}`;

  richContentHtml = `<sog-tooltip variant="material" position="top">
  <div class="product-info">
    <h5>Pro Plan</h5>
    <span class="price">$29/mo</span>
  </div>
  <div slot="tooltip">
    <div class="tooltip-header">
      <strong>📱 Pro Plan Features</strong>
    </div>
    <div class="tooltip-body">
      <ul>
        <li>✅ Unlimited projects</li>
        <li>✅ Priority support</li>
        <li>✅ Advanced analytics</li>
      </ul>
      <small>Cancel anytime • 30-day free trial</small>
    </div>
  </div>
</sog-tooltip>`;
}