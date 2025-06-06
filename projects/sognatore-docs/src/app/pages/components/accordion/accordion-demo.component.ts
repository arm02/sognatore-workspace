import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreAccordion, AccordionItem } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreAccordion],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Accordion Component</h1>
        <p class="page-description">
          Collapsible accordion component for organizing content into expandable
          sections with smooth animations.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple accordion with single panel open at a time.</p>

        <app-code-example [code]="basicUsageCode" [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-accordion 
              variant="basic" 
              [items]="basicItems" 
              [multiple]="false">
            </sog-accordion>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Allow Multiple Open</h2>
        <p>Accordion that allows multiple panels to be open simultaneously.</p>

        <app-code-example [code]="multipleCode" [htmlCode]="multipleHtml">
          <div class="demo-container">
            <sog-accordion 
              variant="basic" 
              [items]="multipleItems" 
              [multiple]="true">
            </sog-accordion>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Different Styles</h2>
        <p>Various accordion styling options.</p>

        <app-code-example [code]="stylesCode" [htmlCode]="stylesHtml">
          <div class="demo-container">
            <div class="accordion-styles">
              <h4>Material Style</h4>
              <sog-accordion 
                variant="material" 
                [items]="materialItems">
              </sog-accordion>
              
              <br><br>
              
              <h4>Outlined Style</h4>
              <sog-accordion 
                variant="outlined" 
                [items]="outlinedItems">
              </sog-accordion>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Rich Content</h2>
        <p>Accordion with complex content including lists and structured data.</p>

        <app-code-example [code]="richContentCode" [htmlCode]="richContentHtml">
          <div class="demo-container">
            <sog-accordion 
              variant="basic" 
              [items]="richContentItems" 
              [multiple]="false">
            </sog-accordion>
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
                <td>'basic' | 'material' | 'outlined'</td>
                <td>'basic'</td>
                <td>Visual style variant</td>
              </tr>
              <tr>
                <td>items</td>
                <td>AccordionItem[]</td>
                <td>[]</td>
                <td>Array of accordion items</td>
              </tr>
              <tr>
                <td>multiple</td>
                <td>boolean</td>
                <td>false</td>
                <td>Allow multiple panels open</td>
              </tr>
              <tr>
                <td>closeOthers</td>
                <td>boolean</td>
                <td>true</td>
                <td>Close other panels when opening one</td>
              </tr>
            </tbody>
          </table>

          <h3>AccordionItem Interface</h3>
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
                <td>Unique identifier for the item</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>Yes</td>
                <td>Header text for the accordion item</td>
              </tr>
              <tr>
                <td>content</td>
                <td>string</td>
                <td>Yes</td>
                <td>Content to display when expanded</td>
              </tr>
              <tr>
                <td>expanded</td>
                <td>boolean</td>
                <td>No</td>
                <td>Initial expanded state</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>No</td>
                <td>Whether the item is disabled</td>
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

    .accordion-styles h4 {
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
export class AccordionDemoComponent {
  basicItems: AccordionItem[] = [
    {
      id: 'what-is',
      title: 'What is Sognatore UI?',
      content: 'Sognatore UI is a comprehensive Angular component library designed to help developers build beautiful and accessible user interfaces quickly and efficiently.',
      expanded: false
    },
    {
      id: 'install',
      title: 'How do I install it?',
      content: 'You can install Sognatore UI using npm: npm install @sognatore/ui. Then import the components you need in your Angular application.',
      expanded: false
    },
    {
      id: 'free',
      title: 'Is it free to use?',
      content: 'Yes! Sognatore UI is completely free and open-source. You can use it in both personal and commercial projects without any restrictions.',
      expanded: false
    }
  ];

  multipleItems: AccordionItem[] = [
    {
      id: 'features',
      title: '🚀 Features',
      content: '• 18+ ready-to-use components\n• Fully accessible with ARIA support\n• TypeScript support out of the box\n• Customizable design tokens',
      expanded: false
    },
    {
      id: 'performance',
      title: '⚡ Performance',
      content: 'Built with performance in mind using Angular\'s standalone components and OnPush change detection strategy for optimal bundle size and runtime performance.',
      expanded: false
    },
    {
      id: 'customization',
      title: '🎨 Customization',
      content: 'Easily customize the look and feel using CSS custom properties and design tokens. Override default styles or create your own component variants.',
      expanded: false
    }
  ];

  materialItems: AccordionItem[] = [
    {
      id: 'material-design',
      title: 'Material Design Style',
      content: 'Clean, minimalistic design following Material Design principles with elevated surfaces and subtle shadows.',
      expanded: false
    }
  ];

  outlinedItems: AccordionItem[] = [
    {
      id: 'outlined-style',
      title: 'Outlined Style',
      content: 'Bordered design with clear visual separation between accordion items using outline borders.',
      expanded: false
    }
  ];

  richContentItems: AccordionItem[] = [
    {
      id: 'mobile-dev',
      title: '📱 Mobile Development',
      content: 'We create native and cross-platform mobile applications:\n\n• iOS Apps: Native Swift applications\n• Android Apps: Kotlin and Java development\n• React Native: Cross-platform solutions\n• Flutter: Google\'s UI toolkit',
      expanded: false
    },
    {
      id: 'web-dev',
      title: '🌐 Web Development',
      content: 'Modern web applications built with cutting-edge technologies:\n\nTech Stack: Angular, React, Vue.js, TypeScript, Node.js',
      expanded: false
    }
  ];

  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreAccordion, AccordionItem } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreAccordion],
  template: \`
    <sog-accordion 
      variant="basic" 
      [items]="items" 
      [multiple]="false">
    </sog-accordion>
  \`
})
export class ExampleComponent {
  items: AccordionItem[] = [
    {
      id: 'item1',
      title: 'What is Sognatore UI?',
      content: 'A comprehensive Angular component library...',
      expanded: false
    }
  ];
}`;

  basicUsageHtml = `<sog-accordion 
  variant="basic" 
  [items]="items" 
  [multiple]="false">
</sog-accordion>`;

  multipleCode = `<sog-accordion 
  variant="basic" 
  [items]="multipleItems" 
  [multiple]="true">
</sog-accordion>`;

  multipleHtml = `<sog-accordion 
  variant="basic" 
  [items]="multipleItems" 
  [multiple]="true">
</sog-accordion>`;

  stylesCode = `<!-- Material Style -->
<sog-accordion 
  variant="material" 
  [items]="materialItems">
</sog-accordion>

<!-- Outlined Style -->
<sog-accordion 
  variant="outlined" 
  [items]="outlinedItems">
</sog-accordion>`;

  stylesHtml = `<!-- Material Style -->
<sog-accordion 
  variant="material" 
  [items]="materialItems">
</sog-accordion>

<!-- Outlined Style -->
<sog-accordion 
  variant="outlined" 
  [items]="outlinedItems">
</sog-accordion>`;

  richContentCode = `richContentItems: AccordionItem[] = [
  {
    id: 'mobile-dev',
    title: '📱 Mobile Development',
    content: 'We create native and cross-platform mobile applications...',
    expanded: false
  }
];`;

  richContentHtml = `<sog-accordion 
  variant="basic" 
  [items]="richContentItems" 
  [multiple]="false">
</sog-accordion>`;
}