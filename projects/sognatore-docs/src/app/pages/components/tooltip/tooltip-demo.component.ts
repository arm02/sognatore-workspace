import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreTooltip, SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-tooltip-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeExampleComponent, SognatoreTooltip, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Tooltip Component</h1>
        <p class="page-description">
          Contextual tooltip component for providing additional information on hover or focus with customizable positioning.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple tooltips that appear on hover.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <div class="tooltip-demo">
              <sog-tooltip text="This is a helpful tooltip" variant="basic">
                <sog-button variant="outline">Hover me</sog-button>
              </sog-tooltip>
              
              <sog-tooltip text="Additional context information" variant="basic">
                <span class="demo-text">Hover for info</span>
              </sog-tooltip>
              
              <sog-tooltip text="Click for more details" variant="info">
                <sog-button variant="outline" class="demo-icon">ℹ️</sog-button>
              </sog-tooltip>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Positioning</h2>
        <p>Tooltips can be positioned in different directions relative to the trigger element.</p>
        
        <app-code-example
          [code]="positioningCode"
          [htmlCode]="positioningHtml">
          <div class="demo-container">
            <div class="positioning-demo">
              <div class="position-grid">
                <sog-tooltip text="Tooltip on top" position="top" variant="basic">
                  <sog-button variant="outline">Top</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Tooltip on right" position="right" variant="basic">
                  <sog-button variant="outline">Right</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Tooltip on bottom" position="bottom" variant="basic">
                  <sog-button variant="outline">Bottom</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Tooltip on left" position="left" variant="basic">
                  <sog-button variant="outline">Left</sog-button>
                </sog-tooltip>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Variants</h2>
        <p>Different tooltip styles for various use cases.</p>
        
        <app-code-example
          [code]="variantsCode"
          [htmlCode]="variantsHtml">
          <div class="demo-container">
            <div class="variants-demo">
              <div class="variant-grid">
                <sog-tooltip text="Default tooltip style" variant="basic">
                  <sog-button variant="outline">Default</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Material design tooltip" variant="material">
                  <sog-button variant="primary">Material</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Success message" variant="success">
                  <sog-button variant="success">Success</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Warning notice" variant="warning">
                  <sog-button variant="warning">Warning</sog-button>
                </sog-tooltip>
                
                <sog-tooltip text="Error alert" variant="error">
                  <sog-button variant="danger">Error</sog-button>
                </sog-tooltip>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Rich Content</h2>
        <p>Tooltips can contain rich content including HTML elements.</p>
        
        <app-code-example
          [code]="richContentCode"
          [htmlCode]="richContentHtml">
          <div class="demo-container">
            <div class="rich-content-demo">
              <sog-tooltip variant="material">
                <sog-button variant="outline">User Profile</sog-button>
                <div slot="tooltip">
                  <div class="tooltip-header">
                    <strong>👤 John Doe</strong>
                  </div>
                  <div class="tooltip-body">
                    <p>Senior Developer</p>
                    <small>Last seen: 2 hours ago</small>
                  </div>
                </div>
              </sog-tooltip>
              
              <sog-tooltip variant="info">
                <sog-button variant="primary">Product Info</sog-button>
                <div slot="tooltip">
                  <div class="tooltip-header">
                    <strong>📱 Premium Plan</strong>
                  </div>
                  <div class="tooltip-body">
                    <ul>
                      <li>Unlimited projects</li>
                      <li>Priority support</li>
                      <li>Advanced analytics</li>
                    </ul>
                    <div class="tooltip-price">$29/month</div>
                  </div>
                </div>
              </sog-tooltip>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Click to Show</h2>
        <p>Tooltips that appear on click instead of hover for mobile-friendly interactions.</p>
        
        <app-code-example
          [code]="clickCode"
          [htmlCode]="clickHtml">
          <div class="demo-container">
            <div class="click-demo">
              <sog-tooltip 
                text="This tooltip appears on click. Click outside to close." 
                trigger="click" 
                variant="basic">
                <sog-button variant="outline">Click for help</sog-button>
              </sog-tooltip>
              
              <sog-tooltip trigger="click" variant="basic">
                <sog-button variant="primary">Click for options</sog-button>
                <div slot="tooltip" class="tooltip-actions">
                  <sog-button variant="ghost" size="small">✏️ Edit</sog-button>
                  <sog-button variant="ghost" size="small">📋 Copy</sog-button>
                  <sog-button variant="ghost" size="small">🗑️ Delete</sog-button>
                </div>
              </sog-tooltip>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Interactive Playground</h2>
        <p>Experiment with different tooltip configurations in real-time.</p>
        
        <app-code-example
          [code]="playgroundCode"
          [htmlCode]="playgroundHtml">
          <div class="demo-container">
            <div class="playground-container">
              <div class="playground-controls">
                <div class="control-group">
                  <label>Text:</label>
                  <input type="text" [(ngModel)]="playgroundConfig.text" class="control-input">
                </div>
                
                <div class="control-group">
                  <label>Position:</label>
                  <select [(ngModel)]="playgroundConfig.position" class="control-select">
                    <option value="top">Top</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                  </select>
                </div>
                
                <div class="control-group">
                  <label>Variant:</label>
                  <select [(ngModel)]="playgroundConfig.variant" class="control-select">
                    <option value="basic">Basic</option>
                    <option value="material">Material</option>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                    <option value="success">Success</option>
                  </select>
                </div>
                
                <div class="control-group">
                  <label>Trigger:</label>
                  <select [(ngModel)]="playgroundConfig.trigger" class="control-select">
                    <option value="hover">Hover</option>
                    <option value="click">Click</option>
                    <option value="focus">Focus</option>
                  </select>
                </div>
                
                <div class="control-group">
                  <label>Delay (ms):</label>
                  <input type="number" [(ngModel)]="playgroundConfig.delay" class="control-input" min="0" max="2000" step="100">
                </div>
                
                <div class="control-group">
                  <label>
                    <input type="checkbox" [(ngModel)]="playgroundConfig.disabled">
                    Disabled
                  </label>
                </div>
              </div>
              
              <div class="playground-preview">
                <h4>Preview</h4>
                <div class="preview-area">
                  <sog-tooltip 
                    [text]="playgroundConfig.text"
                    [position]="playgroundConfig.position"
                    [variant]="playgroundConfig.variant"
                    [trigger]="playgroundConfig.trigger"
                    [delay]="playgroundConfig.delay"
                    [disabled]="playgroundConfig.disabled">
                    <sog-button variant="primary">{{playgroundConfig.trigger === 'hover' ? 'Hover me' : playgroundConfig.trigger === 'click' ? 'Click me' : 'Focus me'}}</sog-button>
                  </sog-tooltip>
                </div>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Real-World Examples</h2>
        <p>Common tooltip use cases and implementation patterns.</p>
        
        <div class="examples-grid">
          <div class="example-card">
            <h3>Form Field Help</h3>
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
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Navigation Tooltips</h3>
            <app-code-example
              [code]="navTooltipCode"
              [htmlCode]="navTooltipHtml">
              <div class="demo-container demo-small">
                <div class="nav-example">
                  <nav class="nav-bar">
                    <sog-tooltip text="Dashboard" position="bottom" variant="basic">
                      <button class="nav-icon">🏠</button>
                    </sog-tooltip>
                    <sog-tooltip text="Analytics" position="bottom" variant="basic">
                      <button class="nav-icon">📊</button>
                    </sog-tooltip>
                    <sog-tooltip text="Settings" position="bottom" variant="basic">
                      <button class="nav-icon">⚙️</button>
                    </sog-tooltip>
                    <sog-tooltip text="User Profile" position="bottom" variant="basic">
                      <button class="nav-icon">👤</button>
                    </sog-tooltip>
                  </nav>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Status Indicators</h3>
            <app-code-example
              [code]="statusTooltipCode"
              [htmlCode]="statusTooltipHtml">
              <div class="demo-container demo-small">
                <div class="status-example">
                  <div class="status-list">
                    <div class="status-item">
                      <span>Server Status</span>
                      <sog-tooltip text="All systems operational - Last checked: 2 minutes ago" variant="success" position="left">
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
                  </div>
                </div>
              </div>
            </app-code-example>
          </div>

          <div class="example-card">
            <h3>Data Tables</h3>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </app-code-example>
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
                <td>position</td>
                <td>'top' | 'right' | 'bottom' | 'left'</td>
                <td>'top'</td>
                <td>Position of tooltip relative to trigger</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>'basic' | 'material' | 'info' | 'warning' | 'error' | 'success'</td>
                <td>'basic'</td>
                <td>Visual style variant</td>
              </tr>
              <tr>
                <td>text</td>
                <td>string</td>
                <td>''</td>
                <td>Tooltip text content</td>
              </tr>
              <tr>
                <td>trigger</td>
                <td>'hover' | 'click' | 'focus'</td>
                <td>'hover'</td>
                <td>Event that triggers tooltip</td>
              </tr>
              <tr>
                <td>delay</td>
                <td>number</td>
                <td>0</td>
                <td>Delay in milliseconds before showing</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether tooltip is disabled</td>
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
      padding: 3rem 2rem;
      background: var(--gray-50);
      border-radius: 8px;
      margin-top: 1rem;
      min-height: 200px;
    }

    .tooltip-demo {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }


    .demo-text {
      color: var(--primary-600);
      cursor: pointer;
      text-decoration: underline;
      font-weight: 500;
    }

    .demo-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 1rem;
    }

    .positioning-demo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .position-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      padding: 2rem;
    }

    .variants-demo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .variant-grid {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }


    .rich-content-demo {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .tooltip-header {
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .tooltip-body p {
      margin: 0.25rem 0;
      font-size: 0.875rem;
    }

    .tooltip-body small {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.75rem;
    }

    .tooltip-body ul {
      margin: 0.5rem 0;
      padding-left: 1rem;
      font-size: 0.875rem;
    }

    .tooltip-body li {
      margin-bottom: 0.25rem;
    }

    .tooltip-price {
      margin-top: 0.5rem;
      font-weight: 600;
      color: #4ade80;
    }

    .click-demo {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .tooltip-actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
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

    /* Playground Styles */
    .playground-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    .playground-controls {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
    }

    .control-group {
      margin-bottom: 1rem;
    }

    .control-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--gray-700);
    }

    .control-input,
    .control-select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--gray-300);
      border-radius: 4px;
      font-size: 0.875rem;
    }

    .control-input:focus,
    .control-select:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .playground-preview {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
      text-align: center;
    }

    .playground-preview h4 {
      margin-bottom: 1rem;
      color: var(--gray-900);
    }

    .preview-area {
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gray-50);
      border-radius: 6px;
      padding: 2rem;
    }

    /* Examples Styles */
    .examples-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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

    .demo-small {
      padding: 1.5rem;
      min-height: auto;
    }

    /* Form Example Styles */
    .form-example {
      max-width: 300px;
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

    /* Navigation Example Styles */
    .nav-example {
      display: flex;
      justify-content: center;
    }

    .nav-bar {
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
      max-width: 300px;
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

    .status-online {
      background: #16a34a;
    }

    .status-warning {
      background: #f59e0b;
    }

    .status-error {
      background: #dc2626;
    }

    /* Table Example Styles */
    .table-example {
      max-width: 500px;
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
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .demo-container {
        padding: 2rem 1rem;
      }

      .tooltip-demo,
      .variants-demo,
      .rich-content-demo,
      .click-demo {
        gap: 1rem;
      }

      .position-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .playground-container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .examples-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .sog-tooltip {
        max-width: 200px;
      }
    }
  `]
})
export class TooltipDemoComponent {

  playgroundConfig = {
    text: 'This is a sample tooltip',
    position: 'top' as 'top' | 'right' | 'bottom' | 'left',
    variant: 'basic' as 'basic' | 'material' | 'info' | 'warning' | 'error' | 'success',
    trigger: 'hover' as 'hover' | 'click' | 'focus',
    delay: 500,
    disabled: false
  };

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <sog-tooltip text="This is a helpful tooltip" variant="basic">
      <sog-button variant="outline">Hover me</sog-button>
    </sog-tooltip>
    
    <sog-tooltip text="Additional context information" variant="basic">
      <span>Hover for info</span>
    </sog-tooltip>
    
    <sog-tooltip text="Click for more details" variant="info">
      <sog-button variant="outline">ℹ️</sog-button>
    </sog-tooltip>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-tooltip text="This is a helpful tooltip" variant="basic">
  <sog-button variant="outline">Hover me</sog-button>
</sog-tooltip>

<sog-tooltip text="Additional context information" variant="basic">
  <span>Hover for info</span>
</sog-tooltip>

<sog-tooltip text="Click for more details" variant="info">
  <sog-button variant="outline">ℹ️</sog-button>
</sog-tooltip>`;

  positioningCode = `import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <div class="position-grid">
      <sog-tooltip text="Tooltip on top" position="top" variant="basic">
        <sog-button variant="outline">Top</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Tooltip on right" position="right" variant="basic">
        <sog-button variant="outline">Right</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Tooltip on bottom" position="bottom" variant="basic">
        <sog-button variant="outline">Bottom</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Tooltip on left" position="left" variant="basic">
        <sog-button variant="outline">Left</sog-button>
      </sog-tooltip>
    </div>
  \`,
  styles: [\`
    .position-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      padding: 2rem;
    }
  \`]
})
export class ExampleComponent {}`;

  positioningHtml = `<sog-tooltip text="Tooltip on top" position="top" variant="basic">
  <sog-button variant="outline">Top</sog-button>
</sog-tooltip>

<sog-tooltip text="Tooltip on right" position="right" variant="basic">
  <sog-button variant="outline">Right</sog-button>
</sog-tooltip>

<sog-tooltip text="Tooltip on bottom" position="bottom" variant="basic">
  <sog-button variant="outline">Bottom</sog-button>
</sog-tooltip>

<sog-tooltip text="Tooltip on left" position="left" variant="basic">
  <sog-button variant="outline">Left</sog-button>
</sog-tooltip>`;

  variantsCode = `import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <div class="variant-grid">
      <sog-tooltip text="Default tooltip style" variant="basic">
        <sog-button variant="outline">Default</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Material design tooltip" variant="material">
        <sog-button variant="primary">Material</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Success message" variant="success">
        <sog-button variant="success">Success</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Warning notice" variant="warning">
        <sog-button variant="warning">Warning</sog-button>
      </sog-tooltip>

      <sog-tooltip text="Error alert" variant="error">
        <sog-button variant="danger">Error</sog-button>
      </sog-tooltip>
    </div>
  \`,
  styles: [\`
    .variant-grid {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  \`]
})
export class ExampleComponent {}`;

  variantsHtml = `<sog-tooltip text="Default tooltip style" variant="basic">
  <sog-button variant="outline">Default</sog-button>
</sog-tooltip>

<sog-tooltip text="Material design tooltip" variant="material">
  <sog-button variant="primary">Material</sog-button>
</sog-tooltip>

<sog-tooltip text="Success message" variant="success">
  <sog-button variant="success">Success</sog-button>
</sog-tooltip>

<sog-tooltip text="Warning notice" variant="warning">
  <sog-button variant="warning">Warning</sog-button>
</sog-tooltip>

<sog-tooltip text="Error alert" variant="error">
  <sog-button variant="danger">Error</sog-button>
</sog-tooltip>`;

  richContentCode = `import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <sog-tooltip variant="material">
      <sog-button variant="outline">User Profile</sog-button>
      <div slot="tooltip">
        <div class="tooltip-header">
          <strong>👤 {{userInfo.name}}</strong>
        </div>
        <div class="tooltip-body">
          <p>{{userInfo.role}}</p>
          <small>Last seen: {{userInfo.lastSeen}}</small>
        </div>
      </div>
    </sog-tooltip>

    <sog-tooltip variant="info">
      <sog-button variant="primary">Product Info</sog-button>
      <div slot="tooltip">
        <div class="tooltip-header">
          <strong>📱 {{product.name}}</strong>
        </div>
        <div class="tooltip-body">
          <ul>
            <li *ngFor="let feature of product.features">{{feature}}</li>
          </ul>
          <div class="tooltip-price">{{product.price}}</div>
        </div>
      </div>
    </sog-tooltip>
  \`,
  styles: [\`
    .tooltip-header {
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .tooltip-body p { margin: 0.25rem 0; font-size: 0.875rem; }
    .tooltip-body small { color: rgba(255, 255, 255, 0.8); font-size: 0.75rem; }
    .tooltip-body ul { margin: 0.5rem 0; padding-left: 1rem; font-size: 0.875rem; }
    .tooltip-price { margin-top: 0.5rem; font-weight: 600; color: #4ade80; }
  \`]
})
export class ExampleComponent {
  userInfo = {
    name: 'John Doe',
    role: 'Senior Developer', 
    lastSeen: '2 hours ago'
  };
  
  product = {
    name: 'Premium Plan',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics'],
    price: '$29/month'
  };
}`;

  richContentHtml = `<sog-tooltip variant="material">
  <sog-button variant="outline">User Profile</sog-button>
  <div slot="tooltip">
    <div class="tooltip-header">
      <strong>👤 John Doe</strong>
    </div>
    <div class="tooltip-body">
      <p>Senior Developer</p>
      <small>Last seen: 2 hours ago</small>
    </div>
  </div>
</sog-tooltip>

<sog-tooltip variant="info">
  <sog-button variant="primary">Product Info</sog-button>
  <div slot="tooltip">
    <div class="tooltip-header">
      <strong>📱 Premium Plan</strong>
    </div>
    <div class="tooltip-body">
      <ul>
        <li>Unlimited projects</li>
        <li>Priority support</li>
        <li>Advanced analytics</li>
      </ul>
      <div class="tooltip-price">$29/month</div>
    </div>
  </div>
</sog-tooltip>`;

  clickCode = `import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <sog-tooltip 
      text="This tooltip appears on click. Click outside to close." 
      trigger="click" 
      variant="basic">
      <sog-button variant="outline">Click for help</sog-button>
    </sog-tooltip>

    <sog-tooltip trigger="click" variant="basic">
      <sog-button variant="primary">Click for options</sog-button>
      <div slot="tooltip" class="tooltip-actions">
        <sog-button variant="ghost" size="small" (click)="onEdit()">✏️ Edit</sog-button>
        <sog-button variant="ghost" size="small" (click)="onCopy()">📋 Copy</sog-button>
        <sog-button variant="ghost" size="small" (click)="onDelete()">🗑️ Delete</sog-button>
      </div>
    </sog-tooltip>
  \`,
  styles: [\`
    .tooltip-actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  \`]
})
export class ExampleComponent {
  onEdit() {
    console.log('Edit action triggered');
    // Add your edit logic here
  }
  
  onCopy() {
    console.log('Copy action triggered');
    // Add your copy logic here
  }
  
  onDelete() {
    console.log('Delete action triggered');
    // Add your delete logic here
  }
}`;

  clickHtml = `<sog-tooltip 
  text="This tooltip appears on click. Click outside to close." 
  trigger="click" 
  variant="basic">
  <sog-button variant="outline">Click for help</sog-button>
</sog-tooltip>

<sog-tooltip trigger="click" variant="basic">
  <sog-button variant="primary">Click for options</sog-button>
  <div slot="tooltip" class="tooltip-actions">
    <sog-button variant="ghost" size="small">✏️ Edit</sog-button>
    <sog-button variant="ghost" size="small">📋 Copy</sog-button>
    <sog-button variant="ghost" size="small">🗑️ Delete</sog-button>
  </div>
</sog-tooltip>`;

  // Playground Code Examples
  playgroundCode = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [FormsModule, SognatoreTooltip, SognatoreButton],
  template: \`
    <div class="playground-container">
      <div class="playground-controls">
        <div class="control-group">
          <label>Text:</label>
          <input type="text" [(ngModel)]="config.text" class="control-input">
        </div>
        
        <div class="control-group">
          <label>Position:</label>
          <select [(ngModel)]="config.position" class="control-select">
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Variant:</label>
          <select [(ngModel)]="config.variant" class="control-select">
            <option value="basic">Basic</option>
            <option value="material">Material</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Trigger:</label>
          <select [(ngModel)]="config.trigger" class="control-select">
            <option value="hover">Hover</option>
            <option value="click">Click</option>
            <option value="focus">Focus</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Delay (ms):</label>
          <input type="number" [(ngModel)]="config.delay" class="control-input" min="0" max="2000" step="100">
        </div>
        
        <div class="control-group">
          <label>
            <input type="checkbox" [(ngModel)]="config.disabled">
            Disabled
          </label>
        </div>
      </div>
      
      <div class="playground-preview">
        <h4>Preview</h4>
        <div class="preview-area">
          <sog-tooltip 
            [text]="config.text"
            [position]="config.position"
            [variant]="config.variant"
            [trigger]="config.trigger"
            [delay]="config.delay"
            [disabled]="config.disabled">
            <sog-button variant="primary">{{buttonText}}</sog-button>
          </sog-tooltip>
        </div>
      </div>
    </div>
  \`
})
export class PlaygroundComponent {
  config = {
    text: 'This is a sample tooltip',
    position: 'top' as 'top' | 'right' | 'bottom' | 'left',
    variant: 'basic' as 'basic' | 'material' | 'info' | 'warning' | 'error' | 'success',
    trigger: 'hover' as 'hover' | 'click' | 'focus',
    delay: 500,
    disabled: false
  };

  get buttonText() {
    return this.config.trigger === 'hover' ? 'Hover me' : 
           this.config.trigger === 'click' ? 'Click me' : 'Focus me';
  }
}`;

  playgroundHtml = `<!-- Interactive controls automatically update the tooltip -->
<div class="playground-container">
  <div class="playground-controls">
    <!-- Control inputs here -->
  </div>
  <div class="playground-preview">
    <sog-tooltip 
      [text]="config.text"
      [position]="config.position"
      [variant]="config.variant"
      [trigger]="config.trigger"
      [delay]="config.delay"
      [disabled]="config.disabled">
      <sog-button variant="primary">{{buttonText}}</sog-button>
    </sog-tooltip>
  </div>
</div>`;

  // Form Help Example
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
  \`,
  styles: [\`
    .form-field { margin-bottom: 1rem; }
    .input-with-help { display: flex; align-items: center; gap: 0.5rem; }
    .input-with-help input { flex: 1; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; }
    .help-icon { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #9ca3af; 
                 background: #f3f4f6; color: #6b7280; font-size: 0.75rem; font-weight: bold; 
                 cursor: pointer; display: flex; align-items: center; justify-content: center; }
    .help-icon:hover { background: #dbeafe; border-color: #60a5fa; color: #2563eb; }
  \`]
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

  // Navigation Tooltip Example
  navTooltipCode = `import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-nav-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <nav class="nav-bar">
      <sog-tooltip text="Dashboard" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('dashboard')">🏠</button>
      </sog-tooltip>
      <sog-tooltip text="Analytics" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('analytics')">📊</button>
      </sog-tooltip>
      <sog-tooltip text="Settings" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('settings')">⚙️</button>
      </sog-tooltip>
      <sog-tooltip text="User Profile" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('profile')">👤</button>
      </sog-tooltip>
    </nav>
  \`,
  styles: [\`
    .nav-bar { display: flex; gap: 0.5rem; background: #374151; padding: 0.75rem; border-radius: 8px; }
    .nav-icon { width: 40px; height: 40px; border: none; background: transparent; color: white; 
                font-size: 1.125rem; border-radius: 4px; cursor: pointer; display: flex; 
                align-items: center; justify-content: center; transition: background-color 0.2s ease; }
    .nav-icon:hover { background: rgba(255, 255, 255, 0.1); }
  \`]
})
export class NavTooltipsComponent {
  navigate(route: string) {
    console.log('Navigating to:', route);
  }
}`;

  navTooltipHtml = `<nav class="nav-bar">
  <sog-tooltip text="Dashboard" position="bottom" variant="basic">
    <button class="nav-icon">🏠</button>
  </sog-tooltip>
  <sog-tooltip text="Analytics" position="bottom" variant="basic">
    <button class="nav-icon">📊</button>
  </sog-tooltip>
  <sog-tooltip text="Settings" position="bottom" variant="basic">
    <button class="nav-icon">⚙️</button>
  </sog-tooltip>
  <sog-tooltip text="User Profile" position="bottom" variant="basic">
    <button class="nav-icon">👤</button>
  </sog-tooltip>
</nav>`;

  // Status Tooltip Example
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
  \`,
  styles: [\`
    .status-list { background: white; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; }
    .status-item { display: flex; justify-content: space-between; align-items: center; 
                   padding: 0.75rem 1rem; border-bottom: 1px solid #f3f4f6; }
    .status-item:last-child { border-bottom: none; }
    .status-indicator { width: 12px; height: 12px; border-radius: 50%; cursor: pointer; }
    .status-online { background: #16a34a; }
    .status-warning { background: #f59e0b; }
    .status-error { background: #dc2626; }
  \`]
})
export class StatusTooltipsComponent {
  systemStatus = [
    { name: 'Server Status', status: 'online', variant: 'success' as const, 
      description: 'All systems operational - Last checked: 2 minutes ago' },
    { name: 'Database', status: 'warning', variant: 'warning' as const, 
      description: 'High CPU usage detected - Performance may be affected' },
    { name: 'Cache Service', status: 'error', variant: 'error' as const, 
      description: 'Service unavailable - Please contact system administrator' }
  ];
}`;

  statusTooltipHtml = `<div class="status-list">
  <div class="status-item">
    <span>Server Status</span>
    <sog-tooltip text="All systems operational - Last checked: 2 minutes ago" variant="success" position="left">
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
</div>`;

  // Table Tooltip Example
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
              <button class="action-btn" (click)="editUser(user)">✏️</button>
            </sog-tooltip>
            <sog-tooltip text="View user activity" position="top" variant="basic">
              <button class="action-btn" (click)="viewUser(user)">👁️</button>
            </sog-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
  \`,
  styles: [\`
    .data-table { width: 100%; border-collapse: collapse; background: white; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; }
    .data-table th, .data-table td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #f3f4f6; }
    .data-table th { background: #f9fafb; font-weight: 600; color: #111827; position: relative; }
    .header-help { font-size: 0.75rem; margin-left: 0.25rem; cursor: pointer; color: #6b7280; }
    .user-name { color: #2563eb; cursor: pointer; text-decoration: underline; }
    .status-badge { padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.75rem; font-weight: 500; }
    .status-badge.active { background: #dcfce7; color: #16a34a; }
    .action-btn { padding: 0.25rem; border: none; background: #f3f4f6; border-radius: 4px; cursor: pointer; margin-right: 0.25rem; }
    .action-btn:hover { background: #e5e7eb; }
    .user-tooltip { text-align: left; }
    .user-tooltip p { margin: 0.25rem 0; font-size: 0.875rem; }
    .user-tooltip small { color: rgba(255, 255, 255, 0.8); font-size: 0.75rem; }
  \`]
})
export class TableTooltipsComponent {
  users = [
    { name: 'John Doe', email: 'john.doe&#64;example.com', status: 'Active', memberSince: 'Jan 2023' }
  ];

  editUser(user: any) { console.log('Edit user:', user); }
  viewUser(user: any) { console.log('View user:', user); }
}`;

  tableTooltipHtml = `<table class="data-table">
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
      </td>
    </tr>
  </tbody>
</table>`;
}