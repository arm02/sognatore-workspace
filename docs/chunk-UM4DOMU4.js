import{a as D}from"./chunk-BK2DKCDB.js";import{b as C,c as y,e as S,g as M,i as E,l as P,m as _,n as w,o as O,p as k,r as T}from"./chunk-BFMG4YP4.js";import{a as h}from"./chunk-LGDC3C3Z.js";import{a as x}from"./chunk-EB6CYSG7.js";import{Fa as a,Ob as f,Sa as r,V as u,Wa as t,Xa as e,Ya as g,ib as o,jb as v,mb as l,nb as s,ob as p,qb as b}from"./chunk-CXY5ULLP.js";var j=(()=>{class m{constructor(){this.playgroundConfig={text:"This is a sample tooltip",position:"top",variant:"basic",trigger:"hover",delay:500,disabled:!1},this.basicUsageCode=`import { Component } from '@angular/core';
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
      <sog-button variant="outline">\u2139\uFE0F</sog-button>
    </sog-tooltip>
  \`
})
export class ExampleComponent {}`,this.basicUsageHtml=`<sog-tooltip text="This is a helpful tooltip" variant="basic">
  <sog-button variant="outline">Hover me</sog-button>
</sog-tooltip>

<sog-tooltip text="Additional context information" variant="basic">
  <span>Hover for info</span>
</sog-tooltip>

<sog-tooltip text="Click for more details" variant="info">
  <sog-button variant="outline">\u2139\uFE0F</sog-button>
</sog-tooltip>`,this.positioningCode=`import { Component } from '@angular/core';
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
export class ExampleComponent {}`,this.positioningHtml=`<sog-tooltip text="Tooltip on top" position="top" variant="basic">
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
</sog-tooltip>`,this.variantsCode=`import { Component } from '@angular/core';
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
export class ExampleComponent {}`,this.variantsHtml=`<sog-tooltip text="Default tooltip style" variant="basic">
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
</sog-tooltip>`,this.richContentCode=`import { Component } from '@angular/core';
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
          <strong>\u{1F464} {{userInfo.name}}</strong>
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
          <strong>\u{1F4F1} {{product.name}}</strong>
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
}`,this.richContentHtml=`<sog-tooltip variant="material">
  <sog-button variant="outline">User Profile</sog-button>
  <div slot="tooltip">
    <div class="tooltip-header">
      <strong>\u{1F464} John Doe</strong>
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
      <strong>\u{1F4F1} Premium Plan</strong>
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
</sog-tooltip>`,this.clickCode=`import { Component } from '@angular/core';
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
        <sog-button variant="ghost" size="small" (click)="onEdit()">\u270F\uFE0F Edit</sog-button>
        <sog-button variant="ghost" size="small" (click)="onCopy()">\u{1F4CB} Copy</sog-button>
        <sog-button variant="ghost" size="small" (click)="onDelete()">\u{1F5D1}\uFE0F Delete</sog-button>
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
}`,this.clickHtml=`<sog-tooltip 
  text="This tooltip appears on click. Click outside to close." 
  trigger="click" 
  variant="basic">
  <sog-button variant="outline">Click for help</sog-button>
</sog-tooltip>

<sog-tooltip trigger="click" variant="basic">
  <sog-button variant="primary">Click for options</sog-button>
  <div slot="tooltip" class="tooltip-actions">
    <sog-button variant="ghost" size="small">\u270F\uFE0F Edit</sog-button>
    <sog-button variant="ghost" size="small">\u{1F4CB} Copy</sog-button>
    <sog-button variant="ghost" size="small">\u{1F5D1}\uFE0F Delete</sog-button>
  </div>
</sog-tooltip>`,this.playgroundCode=`import { Component } from '@angular/core';
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
}`,this.playgroundHtml=`<!-- Interactive controls automatically update the tooltip -->
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
</div>`,this.formHelpCode=`import { Component } from '@angular/core';
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
export class FormHelpComponent {}`,this.formHelpHtml=`<div class="form-field">
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
</div>`,this.navTooltipCode=`import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-nav-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <nav class="nav-bar">
      <sog-tooltip text="Dashboard" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('dashboard')">\u{1F3E0}</button>
      </sog-tooltip>
      <sog-tooltip text="Analytics" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('analytics')">\u{1F4CA}</button>
      </sog-tooltip>
      <sog-tooltip text="Settings" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('settings')">\u2699\uFE0F</button>
      </sog-tooltip>
      <sog-tooltip text="User Profile" position="bottom" variant="basic">
        <button class="nav-icon" (click)="navigate('profile')">\u{1F464}</button>
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
}`,this.navTooltipHtml=`<nav class="nav-bar">
  <sog-tooltip text="Dashboard" position="bottom" variant="basic">
    <button class="nav-icon">\u{1F3E0}</button>
  </sog-tooltip>
  <sog-tooltip text="Analytics" position="bottom" variant="basic">
    <button class="nav-icon">\u{1F4CA}</button>
  </sog-tooltip>
  <sog-tooltip text="Settings" position="bottom" variant="basic">
    <button class="nav-icon">\u2699\uFE0F</button>
  </sog-tooltip>
  <sog-tooltip text="User Profile" position="bottom" variant="basic">
    <button class="nav-icon">\u{1F464}</button>
  </sog-tooltip>
</nav>`,this.statusTooltipCode=`import { Component } from '@angular/core';
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
}`,this.statusTooltipHtml=`<div class="status-list">
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
</div>`,this.tableTooltipCode=`import { Component } from '@angular/core';
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
              <span class="header-help">\u2139\uFE0F</span>
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
                  <strong>\u{1F464} {{user.name}}</strong>
                  <p>{{user.email}}</p>
                  <small>Member since: {{user.memberSince}}</small>
                </div>
              </div>
            </sog-tooltip>
          </td>
          <td><span class="status-badge" [class]="user.status.toLowerCase()">{{user.status}}</span></td>
          <td>
            <sog-tooltip text="Edit user details" position="top" variant="basic">
              <button class="action-btn" (click)="editUser(user)">\u270F\uFE0F</button>
            </sog-tooltip>
            <sog-tooltip text="View user activity" position="top" variant="basic">
              <button class="action-btn" (click)="viewUser(user)">\u{1F441}\uFE0F</button>
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
}`,this.tableTooltipHtml=`<table class="data-table">
  <thead>
    <tr>
      <th>User</th>
      <th>
        Status
        <sog-tooltip text="User account status: Active, Inactive, or Suspended" variant="info" position="top">
          <span class="header-help">\u2139\uFE0F</span>
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
              <strong>\u{1F464} John Doe</strong>
              <p>john.doe&#64;example.com</p>
              <small>Member since: Jan 2023</small>
            </div>
          </div>
        </sog-tooltip>
      </td>
      <td><span class="status-badge active">Active</span></td>
      <td>
        <sog-tooltip text="Edit user details" position="top" variant="basic">
          <button class="action-btn">\u270F\uFE0F</button>
        </sog-tooltip>
        <sog-tooltip text="View user activity" position="top" variant="basic">
          <button class="action-btn">\u{1F441}\uFE0F</button>
        </sog-tooltip>
      </td>
    </tr>
  </tbody>
</table>`}static{this.\u0275fac=function(c){return new(c||m)}}static{this.\u0275cmp=u({type:m,selectors:[["app-tooltip-demo"]],standalone:!0,features:[b],decls:367,vars:33,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","htmlCode"],[1,"demo-container"],[1,"tooltip-demo"],["text","This is a helpful tooltip","variant","basic"],["variant","outline"],["text","Additional context information","variant","basic"],[1,"demo-text"],["text","Click for more details","variant","info"],["variant","outline",1,"demo-icon"],[1,"positioning-demo"],[1,"position-grid"],["text","Tooltip on top","position","top","variant","basic"],["text","Tooltip on right","position","right","variant","basic"],["text","Tooltip on bottom","position","bottom","variant","basic"],["text","Tooltip on left","position","left","variant","basic"],[1,"variants-demo"],[1,"variant-grid"],["text","Default tooltip style","variant","basic"],["text","Material design tooltip","variant","material"],["variant","primary"],["text","Success message","variant","success"],["variant","success"],["text","Warning notice","variant","warning"],["variant","warning"],["text","Error alert","variant","error"],["variant","danger"],[1,"rich-content-demo"],["variant","material"],["slot","tooltip"],[1,"tooltip-header"],[1,"tooltip-body"],["variant","info"],[1,"tooltip-price"],[1,"click-demo"],["text","This tooltip appears on click. Click outside to close.","trigger","click","variant","basic"],["trigger","click","variant","basic"],["slot","tooltip",1,"tooltip-actions"],["variant","ghost","size","small"],[1,"playground-container"],[1,"playground-controls"],[1,"control-group"],["type","text",1,"control-input",3,"ngModelChange","ngModel"],[1,"control-select",3,"ngModelChange","ngModel"],["value","top"],["value","right"],["value","bottom"],["value","left"],["value","basic"],["value","material"],["value","info"],["value","warning"],["value","error"],["value","success"],["value","hover"],["value","click"],["value","focus"],["type","number","min","0","max","2000","step","100",1,"control-input",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"playground-preview"],[1,"preview-area"],[3,"text","position","variant","trigger","delay","disabled"],[1,"examples-grid"],[1,"example-card"],[1,"demo-container","demo-small"],[1,"form-example"],[1,"form-field"],["for","username"],[1,"input-with-help"],["type","text","id","username","placeholder","Enter username"],["text","Username must be 3-20 characters and contain only letters, numbers, and underscores","position","right","variant","info"],[1,"help-icon"],[1,"nav-example"],[1,"nav-bar"],["text","Dashboard","position","bottom","variant","basic"],[1,"nav-icon"],["text","Analytics","position","bottom","variant","basic"],["text","Settings","position","bottom","variant","basic"],["text","User Profile","position","bottom","variant","basic"],[1,"status-example"],[1,"status-list"],[1,"status-item"],["text","All systems operational - Last checked: 2 minutes ago","variant","success","position","left"],[1,"status-indicator","status-online"],["text","High CPU usage detected - Performance may be affected","variant","warning","position","left"],[1,"status-indicator","status-warning"],["text","Service unavailable - Please contact system administrator","variant","error","position","left"],[1,"status-indicator","status-error"],[1,"table-example"],[1,"data-table"],["text","User account status: Active, Inactive, or Suspended","variant","info","position","top"],[1,"header-help"],["variant","material","position","right"],[1,"user-name"],[1,"user-tooltip"],[1,"status-badge","active"],["text","Edit user details","position","top","variant","basic"],[1,"action-btn"],["text","View user activity","position","top","variant","basic"],[1,"api-table"]],template:function(c,i){c&1&&(t(0,"div",0)(1,"header",1)(2,"h1"),o(3,"Tooltip Component"),e(),t(4,"p",2),o(5," Contextual tooltip component for providing additional information on hover or focus with customizable positioning. "),e()(),t(6,"section",3)(7,"h2"),o(8,"Basic Usage"),e(),t(9,"p"),o(10,"Simple tooltips that appear on hover."),e(),t(11,"app-code-example",4)(12,"div",5)(13,"div",6)(14,"sog-tooltip",7)(15,"sog-button",8),o(16,"Hover me"),e()(),t(17,"sog-tooltip",9)(18,"span",10),o(19,"Hover for info"),e()(),t(20,"sog-tooltip",11)(21,"sog-button",12),o(22,"\u2139\uFE0F"),e()()()()()(),t(23,"section",3)(24,"h2"),o(25,"Positioning"),e(),t(26,"p"),o(27,"Tooltips can be positioned in different directions relative to the trigger element."),e(),t(28,"app-code-example",4)(29,"div",5)(30,"div",13)(31,"div",14)(32,"sog-tooltip",15)(33,"sog-button",8),o(34,"Top"),e()(),t(35,"sog-tooltip",16)(36,"sog-button",8),o(37,"Right"),e()(),t(38,"sog-tooltip",17)(39,"sog-button",8),o(40,"Bottom"),e()(),t(41,"sog-tooltip",18)(42,"sog-button",8),o(43,"Left"),e()()()()()()(),t(44,"section",3)(45,"h2"),o(46,"Variants"),e(),t(47,"p"),o(48,"Different tooltip styles for various use cases."),e(),t(49,"app-code-example",4)(50,"div",5)(51,"div",19)(52,"div",20)(53,"sog-tooltip",21)(54,"sog-button",8),o(55,"Default"),e()(),t(56,"sog-tooltip",22)(57,"sog-button",23),o(58,"Material"),e()(),t(59,"sog-tooltip",24)(60,"sog-button",25),o(61,"Success"),e()(),t(62,"sog-tooltip",26)(63,"sog-button",27),o(64,"Warning"),e()(),t(65,"sog-tooltip",28)(66,"sog-button",29),o(67,"Error"),e()()()()()()(),t(68,"section",3)(69,"h2"),o(70,"Rich Content"),e(),t(71,"p"),o(72,"Tooltips can contain rich content including HTML elements."),e(),t(73,"app-code-example",4)(74,"div",5)(75,"div",30)(76,"sog-tooltip",31)(77,"sog-button",8),o(78,"User Profile"),e(),t(79,"div",32)(80,"div",33)(81,"strong"),o(82,"\u{1F464} John Doe"),e()(),t(83,"div",34)(84,"p"),o(85,"Senior Developer"),e(),t(86,"small"),o(87,"Last seen: 2 hours ago"),e()()()(),t(88,"sog-tooltip",35)(89,"sog-button",23),o(90,"Product Info"),e(),t(91,"div",32)(92,"div",33)(93,"strong"),o(94,"\u{1F4F1} Premium Plan"),e()(),t(95,"div",34)(96,"ul")(97,"li"),o(98,"Unlimited projects"),e(),t(99,"li"),o(100,"Priority support"),e(),t(101,"li"),o(102,"Advanced analytics"),e()(),t(103,"div",36),o(104,"$29/month"),e()()()()()()()(),t(105,"section",3)(106,"h2"),o(107,"Click to Show"),e(),t(108,"p"),o(109,"Tooltips that appear on click instead of hover for mobile-friendly interactions."),e(),t(110,"app-code-example",4)(111,"div",5)(112,"div",37)(113,"sog-tooltip",38)(114,"sog-button",8),o(115,"Click for help"),e()(),t(116,"sog-tooltip",39)(117,"sog-button",23),o(118,"Click for options"),e(),t(119,"div",40)(120,"sog-button",41),o(121,"\u270F\uFE0F Edit"),e(),t(122,"sog-button",41),o(123,"\u{1F4CB} Copy"),e(),t(124,"sog-button",41),o(125,"\u{1F5D1}\uFE0F Delete"),e()()()()()()(),t(126,"section",3)(127,"h2"),o(128,"Interactive Playground"),e(),t(129,"p"),o(130,"Experiment with different tooltip configurations in real-time."),e(),t(131,"app-code-example",4)(132,"div",5)(133,"div",42)(134,"div",43)(135,"div",44)(136,"label"),o(137,"Text:"),e(),t(138,"input",45),p("ngModelChange",function(n){return s(i.playgroundConfig.text,n)||(i.playgroundConfig.text=n),n}),e()(),t(139,"div",44)(140,"label"),o(141,"Position:"),e(),t(142,"select",46),p("ngModelChange",function(n){return s(i.playgroundConfig.position,n)||(i.playgroundConfig.position=n),n}),t(143,"option",47),o(144,"Top"),e(),t(145,"option",48),o(146,"Right"),e(),t(147,"option",49),o(148,"Bottom"),e(),t(149,"option",50),o(150,"Left"),e()()(),t(151,"div",44)(152,"label"),o(153,"Variant:"),e(),t(154,"select",46),p("ngModelChange",function(n){return s(i.playgroundConfig.variant,n)||(i.playgroundConfig.variant=n),n}),t(155,"option",51),o(156,"Basic"),e(),t(157,"option",52),o(158,"Material"),e(),t(159,"option",53),o(160,"Info"),e(),t(161,"option",54),o(162,"Warning"),e(),t(163,"option",55),o(164,"Error"),e(),t(165,"option",56),o(166,"Success"),e()()(),t(167,"div",44)(168,"label"),o(169,"Trigger:"),e(),t(170,"select",46),p("ngModelChange",function(n){return s(i.playgroundConfig.trigger,n)||(i.playgroundConfig.trigger=n),n}),t(171,"option",57),o(172,"Hover"),e(),t(173,"option",58),o(174,"Click"),e(),t(175,"option",59),o(176,"Focus"),e()()(),t(177,"div",44)(178,"label"),o(179,"Delay (ms):"),e(),t(180,"input",60),p("ngModelChange",function(n){return s(i.playgroundConfig.delay,n)||(i.playgroundConfig.delay=n),n}),e()(),t(181,"div",44)(182,"label")(183,"input",61),p("ngModelChange",function(n){return s(i.playgroundConfig.disabled,n)||(i.playgroundConfig.disabled=n),n}),e(),o(184," Disabled "),e()()(),t(185,"div",62)(186,"h4"),o(187,"Preview"),e(),t(188,"div",63)(189,"sog-tooltip",64)(190,"sog-button",23),o(191),e()()()()()()()(),t(192,"section",3)(193,"h2"),o(194,"Real-World Examples"),e(),t(195,"p"),o(196,"Common tooltip use cases and implementation patterns."),e(),t(197,"div",65)(198,"div",66)(199,"h3"),o(200,"Form Field Help"),e(),t(201,"app-code-example",4)(202,"div",67)(203,"div",68)(204,"div",69)(205,"label",70),o(206,"Username"),e(),t(207,"div",71),g(208,"input",72),t(209,"sog-tooltip",73)(210,"button",74),o(211,"?"),e()()()()()()()(),t(212,"div",66)(213,"h3"),o(214,"Navigation Tooltips"),e(),t(215,"app-code-example",4)(216,"div",67)(217,"div",75)(218,"nav",76)(219,"sog-tooltip",77)(220,"button",78),o(221,"\u{1F3E0}"),e()(),t(222,"sog-tooltip",79)(223,"button",78),o(224,"\u{1F4CA}"),e()(),t(225,"sog-tooltip",80)(226,"button",78),o(227,"\u2699\uFE0F"),e()(),t(228,"sog-tooltip",81)(229,"button",78),o(230,"\u{1F464}"),e()()()()()()(),t(231,"div",66)(232,"h3"),o(233,"Status Indicators"),e(),t(234,"app-code-example",4)(235,"div",67)(236,"div",82)(237,"div",83)(238,"div",84)(239,"span"),o(240,"Server Status"),e(),t(241,"sog-tooltip",85),g(242,"div",86),e()(),t(243,"div",84)(244,"span"),o(245,"Database"),e(),t(246,"sog-tooltip",87),g(247,"div",88),e()(),t(248,"div",84)(249,"span"),o(250,"Cache Service"),e(),t(251,"sog-tooltip",89),g(252,"div",90),e()()()()()()(),t(253,"div",66)(254,"h3"),o(255,"Data Tables"),e(),t(256,"app-code-example",4)(257,"div",67)(258,"div",91)(259,"table",92)(260,"thead")(261,"tr")(262,"th"),o(263,"User"),e(),t(264,"th"),o(265," Status "),t(266,"sog-tooltip",93)(267,"span",94),o(268,"\u2139\uFE0F"),e()()(),t(269,"th"),o(270,"Actions"),e()()(),t(271,"tbody")(272,"tr")(273,"td")(274,"sog-tooltip",95)(275,"span",96),o(276,"John Doe"),e(),t(277,"div",32)(278,"div",97)(279,"strong"),o(280,"\u{1F464} John Doe"),e(),t(281,"p"),o(282,"john.doe@example.com"),e(),t(283,"small"),o(284,"Member since: Jan 2023"),e()()()()(),t(285,"td")(286,"span",98),o(287,"Active"),e()(),t(288,"td")(289,"sog-tooltip",99)(290,"button",100),o(291,"\u270F\uFE0F"),e()(),t(292,"sog-tooltip",101)(293,"button",100),o(294,"\u{1F441}\uFE0F"),e()()()()()()()()()()()(),t(295,"section",3)(296,"h2"),o(297,"API Reference"),e(),t(298,"div",102)(299,"h3"),o(300,"Properties"),e(),t(301,"table")(302,"thead")(303,"tr")(304,"th"),o(305,"Property"),e(),t(306,"th"),o(307,"Type"),e(),t(308,"th"),o(309,"Default"),e(),t(310,"th"),o(311,"Description"),e()()(),t(312,"tbody")(313,"tr")(314,"td"),o(315,"position"),e(),t(316,"td"),o(317,"'top' | 'right' | 'bottom' | 'left'"),e(),t(318,"td"),o(319,"'top'"),e(),t(320,"td"),o(321,"Position of tooltip relative to trigger"),e()(),t(322,"tr")(323,"td"),o(324,"variant"),e(),t(325,"td"),o(326,"'basic' | 'material' | 'info' | 'warning' | 'error' | 'success'"),e(),t(327,"td"),o(328,"'basic'"),e(),t(329,"td"),o(330,"Visual style variant"),e()(),t(331,"tr")(332,"td"),o(333,"text"),e(),t(334,"td"),o(335,"string"),e(),t(336,"td"),o(337,"''"),e(),t(338,"td"),o(339,"Tooltip text content"),e()(),t(340,"tr")(341,"td"),o(342,"trigger"),e(),t(343,"td"),o(344,"'hover' | 'click' | 'focus'"),e(),t(345,"td"),o(346,"'hover'"),e(),t(347,"td"),o(348,"Event that triggers tooltip"),e()(),t(349,"tr")(350,"td"),o(351,"delay"),e(),t(352,"td"),o(353,"number"),e(),t(354,"td"),o(355,"0"),e(),t(356,"td"),o(357,"Delay in milliseconds before showing"),e()(),t(358,"tr")(359,"td"),o(360,"disabled"),e(),t(361,"td"),o(362,"boolean"),e(),t(363,"td"),o(364,"false"),e(),t(365,"td"),o(366,"Whether tooltip is disabled"),e()()()()()()()),c&2&&(a(11),r("code",i.basicUsageCode)("htmlCode",i.basicUsageHtml),a(17),r("code",i.positioningCode)("htmlCode",i.positioningHtml),a(21),r("code",i.variantsCode)("htmlCode",i.variantsHtml),a(24),r("code",i.richContentCode)("htmlCode",i.richContentHtml),a(37),r("code",i.clickCode)("htmlCode",i.clickHtml),a(21),r("code",i.playgroundCode)("htmlCode",i.playgroundHtml),a(7),l("ngModel",i.playgroundConfig.text),a(4),l("ngModel",i.playgroundConfig.position),a(12),l("ngModel",i.playgroundConfig.variant),a(16),l("ngModel",i.playgroundConfig.trigger),a(10),l("ngModel",i.playgroundConfig.delay),a(3),l("ngModel",i.playgroundConfig.disabled),a(6),r("text",i.playgroundConfig.text)("position",i.playgroundConfig.position)("variant",i.playgroundConfig.variant)("trigger",i.playgroundConfig.trigger)("delay",i.playgroundConfig.delay)("disabled",i.playgroundConfig.disabled),a(2),v(i.playgroundConfig.trigger==="hover"?"Hover me":i.playgroundConfig.trigger==="click"?"Click me":"Focus me"),a(10),r("code",i.formHelpCode)("htmlCode",i.formHelpHtml),a(14),r("code",i.navTooltipCode)("htmlCode",i.navTooltipHtml),a(19),r("code",i.statusTooltipCode)("htmlCode",i.statusTooltipHtml),a(22),r("code",i.tableTooltipCode)("htmlCode",i.tableTooltipHtml))},dependencies:[f,T,_,w,y,E,C,P,S,k,O,M,x,D,h],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:3rem 2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem;min-height:200px}.tooltip-demo[_ngcontent-%COMP%]{display:flex;gap:2rem;justify-content:center;align-items:center;flex-wrap:wrap}.demo-text[_ngcontent-%COMP%]{color:var(--primary-600);cursor:pointer;text-decoration:underline;font-weight:500}.demo-icon[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;font-size:1rem}.positioning-demo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.position-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:3rem;padding:2rem}.variants-demo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.variant-grid[_ngcontent-%COMP%]{display:flex;gap:1.5rem;flex-wrap:wrap;justify-content:center}.rich-content-demo[_ngcontent-%COMP%]{display:flex;gap:2rem;justify-content:center;align-items:center;flex-wrap:wrap}.tooltip-header[_ngcontent-%COMP%]{margin-bottom:.5rem;padding-bottom:.5rem;border-bottom:1px solid rgba(255,255,255,.2)}.tooltip-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem}.tooltip-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fffc;font-size:.75rem}.tooltip-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0;padding-left:1rem;font-size:.875rem}.tooltip-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.25rem}.tooltip-price[_ngcontent-%COMP%]{margin-top:.5rem;font-weight:600;color:#4ade80}.click-demo[_ngcontent-%COMP%]{display:flex;gap:2rem;justify-content:center;align-items:center;flex-wrap:wrap}.tooltip-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.api-table[_ngcontent-%COMP%]{margin-top:2rem}.api-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.api-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px #0000001a}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;text-align:left;border-bottom:1px solid var(--gray-200)}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--gray-50);font-weight:600;color:var(--gray-900)}.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--gray-600)}.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.playground-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start}.playground-controls[_ngcontent-%COMP%]{background:#fff;padding:1.5rem;border-radius:8px;border:1px solid var(--gray-200)}.control-group[_ngcontent-%COMP%]{margin-bottom:1rem}.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500;color:var(--gray-700)}.control-input[_ngcontent-%COMP%], .control-select[_ngcontent-%COMP%]{width:100%;padding:.5rem;border:1px solid var(--gray-300);border-radius:4px;font-size:.875rem}.control-input[_ngcontent-%COMP%]:focus, .control-select[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-500);box-shadow:0 0 0 3px #3b82f61a}.playground-preview[_ngcontent-%COMP%]{background:#fff;padding:1.5rem;border-radius:8px;border:1px solid var(--gray-200);text-align:center}.playground-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem;color:var(--gray-900)}.preview-area[_ngcontent-%COMP%]{min-height:150px;display:flex;align-items:center;justify-content:center;background:var(--gray-50);border-radius:6px;padding:2rem}.examples-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:2rem;margin-top:2rem}.example-card[_ngcontent-%COMP%]{border:1px solid var(--gray-200);border-radius:8px;overflow:hidden}.example-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{background:var(--gray-50);padding:1rem;margin:0;font-size:1.125rem;font-weight:600;color:var(--gray-900);border-bottom:1px solid var(--gray-200)}.demo-small[_ngcontent-%COMP%]{padding:1.5rem;min-height:auto}.form-example[_ngcontent-%COMP%]{max-width:300px}.form-field[_ngcontent-%COMP%]{margin-bottom:1rem}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500;color:var(--gray-700)}.input-with-help[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.input-with-help[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:.5rem;border:1px solid var(--gray-300);border-radius:4px}.help-icon[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1px solid var(--gray-400);background:var(--gray-100);color:var(--gray-600);font-size:.75rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center}.help-icon[_ngcontent-%COMP%]:hover{background:var(--primary-100);border-color:var(--primary-400);color:var(--primary-600)}.nav-example[_ngcontent-%COMP%]{display:flex;justify-content:center}.nav-bar[_ngcontent-%COMP%]{display:flex;gap:.5rem;background:var(--gray-800);padding:.75rem;border-radius:8px}.nav-icon[_ngcontent-%COMP%]{width:40px;height:40px;border:none;background:transparent;color:#fff;font-size:1.125rem;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background-color .2s ease}.nav-icon[_ngcontent-%COMP%]:hover{background:#ffffff1a}.status-example[_ngcontent-%COMP%]{max-width:300px}.status-list[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}.status-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem 1rem;border-bottom:1px solid var(--gray-100)}.status-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.status-indicator[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;cursor:pointer}.status-online[_ngcontent-%COMP%]{background:#16a34a}.status-warning[_ngcontent-%COMP%]{background:#f59e0b}.status-error[_ngcontent-%COMP%]{background:#dc2626}.table-example[_ngcontent-%COMP%]{max-width:500px}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;text-align:left;border-bottom:1px solid var(--gray-100)}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--gray-50);font-weight:600;color:var(--gray-900);position:relative}.header-help[_ngcontent-%COMP%]{font-size:.75rem;margin-left:.25rem;cursor:pointer;color:var(--gray-500)}.user-name[_ngcontent-%COMP%]{color:var(--primary-600);cursor:pointer;text-decoration:underline}.status-badge[_ngcontent-%COMP%]{padding:.25rem .5rem;border-radius:12px;font-size:.75rem;font-weight:500}.status-badge.active[_ngcontent-%COMP%]{background:#dcfce7;color:#16a34a}.action-btn[_ngcontent-%COMP%]{padding:.25rem;border:none;background:var(--gray-100);border-radius:4px;cursor:pointer;margin-right:.25rem;font-size:.875rem}.action-btn[_ngcontent-%COMP%]:hover{background:var(--gray-200)}.user-tooltip[_ngcontent-%COMP%]{text-align:left}.user-tooltip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem}.user-tooltip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fffc;font-size:.75rem}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.demo-container[_ngcontent-%COMP%]{padding:2rem 1rem}.tooltip-demo[_ngcontent-%COMP%], .variants-demo[_ngcontent-%COMP%], .rich-content-demo[_ngcontent-%COMP%], .click-demo[_ngcontent-%COMP%]{gap:1rem}.position-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem}.playground-container[_ngcontent-%COMP%], .examples-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.sog-tooltip[_ngcontent-%COMP%]{max-width:200px}}"]})}}return m})();export{j as TooltipDemoComponent};
