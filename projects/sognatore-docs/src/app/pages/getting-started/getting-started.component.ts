import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../shared/components/code-example.component';
import { SognatoreButton } from '../../../../../sognatore-ui/src/lib/button/button.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Getting Started</h1>
        <p class="page-description">
          Learn how to install and use Sognatore UI components in your Angular application.
        </p>
      </header>

      <section class="section">
        <h2>Installation</h2>
        <p>Install Sognatore UI using npm:</p>
        
        <app-code-example
          [code]="installCode"
          [showControls]="false"
          [hasPreviewContent]="false">
        </app-code-example>
      </section>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Import components into your Angular application:</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml"
          [showControls]="false"
          [hasPreviewContent]="false">
        </app-code-example>
      </section>

      <section class="section">
        <h2>Styling</h2>
        <p>Add the base styles to your global styles.scss file:</p>
        
        <app-code-example
          [scssCode]="stylingCode"
          [showControls]="false"
          [hasPreviewContent]="false">
        </app-code-example>
      </section>

      <section class="section">
        <h2>Your First Component</h2>
        <p>Here's a simple example using the Button component:</p>
        
        <app-code-example
          [code]="firstComponentCode"
          [htmlCode]="firstComponentHtml"
          [scssCode]="firstComponentScss"
          [hasPreviewContent]="true">
          <div class="demo-container">
            <sog-button variant="primary">
              Welcome to Sognatore UI
            </sog-button>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Next Steps</h2>
        <div class="next-steps">
          <div class="step-card">
            <h3>Explore Components</h3>
            <p>Browse through our component library to see what's available.</p>
            <a href="/components/button" class="step-link">View Components →</a>
          </div>
          <div class="step-card">
            <h3>Design Tokens</h3>
            <p>Learn about our design system and customization options.</p>
            <a href="/design-tokens" class="step-link">Design Tokens →</a>
          </div>
          <div class="step-card">
            <h3>Examples</h3>
            <p>See real-world examples and implementation patterns.</p>
            <a href="/examples" class="step-link">View Examples →</a>
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
      text-align: center;
    }

    .page-header h1 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-600);
      margin-bottom: 1rem;
    }

    .page-description {
      font-size: 1.25rem;
      color: var(--gray-600);
      max-width: 600px;
      margin: 0 auto;
    }

    .section {
      margin-bottom: 3rem;
    }

    .section h2 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
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
      text-align: center;
      margin-top: 1rem;
    }


    .next-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .step-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid var(--gray-200);
      transition: all 0.2s ease;
    }

    .step-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .step-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 0.5rem;
    }

    .step-card p {
      margin-bottom: 1rem;
    }

    .step-link {
      color: var(--primary-600);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .step-link:hover {
      color: var(--primary-700);
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .page-header h1 {
        font-size: 2rem;
      }

      .next-steps {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class GettingStartedComponent {
  installCode = `npm install @sognatore/ui`;

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <sog-button variant="primary">
      Click me!
    </sog-button>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-button variant="primary">
  Click me!
</sog-button>`;

  stylingCode = `@import '@sognatore/ui/styles/base';

:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;
  
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
}`;

  firstComponentCode = `import { Component } from '@angular/core';
import { SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <div class="welcome-container">
      <sog-button 
        variant="primary" 
        (click)="onWelcomeClick()">
        Welcome to Sognatore UI
      </sog-button>
    </div>
  \`,
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  onWelcomeClick() {
    console.log('Welcome button clicked!');
  }
}`;

  firstComponentHtml = `<div class="welcome-container">
  <sog-button 
    variant="primary" 
    (click)="onWelcomeClick()">
    Welcome to Sognatore UI
  </sog-button>
</div>`;

  firstComponentScss = `.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: var(--gray-50);
  border-radius: 8px;
}`;
}