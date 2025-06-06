import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreTooltip, SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-tooltip-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeExampleComponent, SognatoreTooltip, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Tooltip Playground</h1>
        <p class="page-description">
          Experiment with different tooltip configurations in real-time and see the results instantly.
        </p>
      </header>

      <section class="section">
        <h2>Interactive Playground</h2>
        <p>Use the controls below to customize tooltip behavior and appearance.</p>
        
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
                <h4>Live Preview</h4>
                <div class="preview-area">
                  <sog-tooltip 
                    [text]="playgroundConfig.text"
                    [position]="playgroundConfig.position"
                    [variant]="playgroundConfig.variant"
                    [trigger]="playgroundConfig.trigger"
                    [delay]="playgroundConfig.delay"
                    [disabled]="playgroundConfig.disabled">
                    <sog-button variant="primary">{{buttonText}}</sog-button>
                  </sog-tooltip>
                </div>
                
                <div class="config-display">
                  <h5>Current Configuration</h5>
                  <pre><code>{{configJson}}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Configuration Tips</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <h3>🎯 Position</h3>
            <p>Choose tooltip position based on available space. The component automatically adjusts when hitting viewport boundaries.</p>
          </div>
          
          <div class="tip-card">
            <h3>🎨 Variants</h3>
            <p>Use semantic variants (success, warning, error) for status indicators, and basic/material for general information.</p>
          </div>
          
          <div class="tip-card">
            <h3>⚡ Triggers</h3>
            <p>Hover for quick info, click for mobile-friendly interactions, focus for accessibility compliance.</p>
          </div>
          
          <div class="tip-card">
            <h3>⏱️ Delay</h3>
            <p>Add delay to prevent tooltips from appearing too quickly during mouse movements. 300-500ms is recommended.</p>
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

    .demo-container {
      padding: 3rem 2rem;
      background: var(--gray-50);
      border-radius: 8px;
      margin-top: 1rem;
      min-height: 200px;
    }

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
      margin-bottom: 1.5rem;
    }

    .config-display {
      text-align: left;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--gray-200);
    }

    .config-display h5 {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--gray-700);
    }

    .config-display pre {
      background: var(--gray-100);
      padding: 0.75rem;
      border-radius: 4px;
      font-size: 0.75rem;
      overflow-x: auto;
    }

    .tips-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .tip-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
    }

    .tip-card h3 {
      margin-bottom: 0.75rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--gray-900);
    }

    .tip-card p {
      color: var(--gray-600);
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .demo-container {
        padding: 2rem 1rem;
      }

      .playground-container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .tips-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class TooltipPlaygroundComponent {
  playgroundConfig = {
    text: 'This is a sample tooltip',
    position: 'top' as 'top' | 'right' | 'bottom' | 'left',
    variant: 'basic' as 'basic' | 'material' | 'info' | 'warning' | 'error' | 'success',
    trigger: 'hover' as 'hover' | 'click' | 'focus',
    delay: 500,
    disabled: false
  };

  get buttonText() {
    return this.playgroundConfig.trigger === 'hover' ? 'Hover me' : 
           this.playgroundConfig.trigger === 'click' ? 'Click me' : 'Focus me';
  }

  get configJson() {
    return JSON.stringify(this.playgroundConfig, null, 2);
  }

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
}