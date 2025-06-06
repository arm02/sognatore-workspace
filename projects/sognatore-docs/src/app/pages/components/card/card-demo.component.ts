import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreCard, SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreCard, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Card Component</h1>
        <p class="page-description">
          Flexible card component for displaying content in a clean, organized manner with various layouts and styles.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple card with basic content.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-card variant="outlined">
              <h3>Card Title</h3>
              <p>This is a basic card with some content. Cards are great for organizing information into digestible sections.</p>
            </sog-card>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Card with Header</h2>
        <p>Card with a distinct header section.</p>
        
        <app-code-example
          [code]="headerCode"
          [htmlCode]="headerHtml">
          <div class="demo-container">
            <sog-card variant="outlined" [hasHeader]="true">
              <div slot="header">
                <h3>Settings</h3>
                <span class="subtitle">Manage your preferences</span>
              </div>
              <p>Configure your application settings and preferences here. You can customize the interface, notifications, and more.</p>
            </sog-card>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Card with Actions</h2>
        <p>Card with action buttons in the footer.</p>
        
        <app-code-example
          [code]="actionsCode"
          [htmlCode]="actionsHtml">
          <div class="demo-container">
            <sog-card variant="outlined" [hasFooter]="true">
              <h3>Confirm Action</h3>
              <p>Are you sure you want to delete this item? This action cannot be undone.</p>
              <div slot="footer" class="card-actions">
                <sog-button variant="secondary">Cancel</sog-button>
                <sog-button variant="danger">Delete</sog-button>
              </div>
            </sog-card>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Card with Image</h2>
        <p>Card featuring an image at the top.</p>
        
        <app-code-example
          [code]="imageCode"
          [htmlCode]="imageHtml">
          <div class="demo-container">
            <sog-card variant="outlined" [hasFooter]="true">
              <div class="demo-image-container">
                <div class="demo-image">📱</div>
              </div>
              <h3>Mobile App</h3>
              <p>Download our mobile app to access all features on the go. Available for iOS and Android devices.</p>
              <div slot="footer" class="card-actions">
                <sog-button variant="primary">Download</sog-button>
                <sog-button variant="outline">Learn More</sog-button>
              </div>
            </sog-card>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Variants</h2>
        <p>Different card variants for various use cases.</p>
        
        <app-code-example
          [code]="variantsCode"
          [htmlCode]="variantsHtml">
          <div class="demo-container">
            <div class="card-grid">
              <sog-card variant="elevated" elevation="elevation-2">
                <h4>Elevated Card</h4>
                <p>This card has an elevated shadow for emphasis.</p>
              </sog-card>
              <sog-card variant="outlined">
                <h4>Outlined Card</h4>
                <p>This card has a border instead of shadow.</p>
              </sog-card>
              <sog-card variant="outlined" elevation="elevation-1">
                <h4>Basic Card</h4>
                <p>This card has minimal elevation.</p>
              </sog-card>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Interactive Cards</h2>
        <p>Cards that respond to user interaction.</p>
        
        <app-code-example
          [code]="interactiveCode"
          [htmlCode]="interactiveHtml">
          <div class="demo-container">
            <div class="card-grid">
              <sog-card variant="outlined" elevation="elevation-1" class="interactive-card" (click)="onCardClick('Feature 1')">
                <h4>🚀 Feature 1</h4>
                <p>Click to learn more about this exciting feature.</p>
              </sog-card>
              <sog-card variant="outlined" elevation="elevation-1" class="interactive-card" (click)="onCardClick('Feature 2')">
                <h4>⭐ Feature 2</h4>
                <p>Discover what makes this feature special.</p>
              </sog-card>
              <sog-card variant="outlined" elevation="elevation-1" class="interactive-card" (click)="onCardClick('Feature 3')">
                <h4>🎯 Feature 3</h4>
                <p>Explore the capabilities of this feature.</p>
              </sog-card>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Complex Card Layout</h2>
        <p>A more complex card with multiple sections and elements.</p>
        
        <app-code-example
          [code]="complexCode"
          [htmlCode]="complexHtml">
          <div class="demo-container">
            <sog-card variant="outlined" [hasHeader]="true" [hasFooter]="true" class="complex-card">
              <div slot="header" class="complex-header">
                <div class="user-info">
                  <div class="avatar">👤</div>
                  <div class="user-details">
                    <h4>John Doe</h4>
                    <span class="user-role">Senior Developer</span>
                  </div>
                </div>
                <span class="timestamp">2 hours ago</span>
              </div>
              <h3>Project Update</h3>
              <p>The new feature implementation is progressing well. We've completed the initial development phase and are now moving into testing.</p>
              <div class="tags">
                <span class="tag">Development</span>
                <span class="tag">Progress</span>
                <span class="tag">Update</span>
              </div>
              <div slot="footer" class="card-actions">
                <sog-button variant="ghost">👍 Like</sog-button>
                <sog-button variant="ghost">💬 Comment</sog-button>
                <sog-button variant="ghost">📤 Share</sog-button>
              </div>
            </sog-card>
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
                <td>.sog-card</td>
                <td>Base card component</td>
              </tr>
              <tr>
                <td>.sog-card--elevated</td>
                <td>Card with elevated shadow</td>
              </tr>
              <tr>
                <td>.sog-card--outlined</td>
                <td>Card with border instead of shadow</td>
              </tr>
              <tr>
                <td>.sog-card--flat</td>
                <td>Card with no shadow or border</td>
              </tr>
              <tr>
                <td>.sog-card--interactive</td>
                <td>Card that responds to hover and click</td>
              </tr>
              <tr>
                <td>.sog-card__header</td>
                <td>Card header section</td>
              </tr>
              <tr>
                <td>.sog-card__content</td>
                <td>Main card content area</td>
              </tr>
              <tr>
                <td>.sog-card__actions</td>
                <td>Card action buttons area</td>
              </tr>
              <tr>
                <td>.sog-card__image</td>
                <td>Card image container</td>
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

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }


    .demo-image-container {
      position: relative;
      height: 200px;
      background: var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -16px -16px 16px -16px;
    }

    .demo-image {
      font-size: 4rem;
    }

    .complex-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }


    .interactive-card {
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .interactive-card:hover {
      transform: translateY(-2px);
    }

    .card-actions {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    .subtitle {
      font-size: 0.875rem;
      color: var(--gray-500);
    }

    .complex-card {
      max-width: 500px;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      background: var(--primary-100);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }

    .user-details h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0;
    }

    .user-role {
      font-size: 0.875rem;
      color: var(--gray-500);
    }

    .timestamp {
      font-size: 0.875rem;
      color: var(--gray-400);
      margin-left: auto;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }

    .tag {
      padding: 0.25rem 0.75rem;
      background: var(--primary-100);
      color: var(--primary-700);
      font-size: 0.75rem;
      border-radius: 12px;
      font-weight: 500;
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

      .card-grid {
        grid-template-columns: 1fr;
      }

      .card-actions {
        flex-direction: column;
        gap: 0.5rem;
      }

      .complex-card {
        max-width: 100%;
      }

      .complex-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .user-info {
        gap: 0.75rem;
      }

      .avatar {
        width: 36px;
        height: 36px;
        font-size: 1.1rem;
      }

      .user-details h4 {
        font-size: 0.9rem;
      }

      .user-role {
        font-size: 0.8rem;
      }

      .timestamp {
        font-size: 0.8rem;
        margin-left: 0;
        align-self: flex-end;
      }

      .tags {
        margin-top: 0.75rem;
      }

      .tag {
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
      }
    }
  `]
})
export class CardDemoComponent {
  onCardClick(feature: string) {
    console.log(`Clicked on ${feature}`);
  }

  basicUsageCode = `import { Component } from '@angular/core';
import { SogCardComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SogCardComponent],
  template: \`
    <sog-card>
      <sog-card-content>
        <h3>Card Title</h3>
        <p>This is a basic card with some content.</p>
      </sog-card-content>
    </sog-card>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-card>
  <sog-card-content>
    <h3>Card Title</h3>
    <p>This is a basic card with some content.</p>
  </sog-card-content>
</sog-card>`;

  headerCode = `<sog-card>
  <sog-card-header>
    <h3>Settings</h3>
    <span class="subtitle">Manage your preferences</span>
  </sog-card-header>
  <sog-card-content>
    <p>Configure your application settings and preferences here.</p>
  </sog-card-content>
</sog-card>`;

  headerHtml = `<sog-card>
  <sog-card-header>
    <h3>Settings</h3>
    <span class="subtitle">Manage your preferences</span>
  </sog-card-header>
  <sog-card-content>
    <p>Configure your application settings and preferences here.</p>
  </sog-card-content>
</sog-card>`;

  actionsCode = `<sog-card>
  <sog-card-content>
    <h3>Confirm Action</h3>
    <p>Are you sure you want to delete this item?</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">Cancel</sog-button>
    <sog-button variant="danger">Delete</sog-button>
  </sog-card-actions>
</sog-card>`;

  actionsHtml = `<sog-card>
  <sog-card-content>
    <h3>Confirm Action</h3>
    <p>Are you sure you want to delete this item?</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">Cancel</sog-button>
    <sog-button variant="danger">Delete</sog-button>
  </sog-card-actions>
</sog-card>`;

  imageCode = `<sog-card>
  <sog-card-image>
    <img src="app-screenshot.jpg" alt="Mobile App">
  </sog-card-image>
  <sog-card-content>
    <h3>Mobile App</h3>
    <p>Download our mobile app to access all features on the go.</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="primary">Download</sog-button>
    <sog-button variant="outline">Learn More</sog-button>
  </sog-card-actions>
</sog-card>`;

  imageHtml = `<sog-card>
  <sog-card-image>
    <img src="app-screenshot.jpg" alt="Mobile App">
  </sog-card-image>
  <sog-card-content>
    <h3>Mobile App</h3>
    <p>Download our mobile app to access all features on the go.</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="primary">Download</sog-button>
    <sog-button variant="outline">Learn More</sog-button>
  </sog-card-actions>
</sog-card>`;

  variantsCode = `<sog-card variant="elevated">
  <sog-card-content>
    <h4>Elevated Card</h4>
    <p>This card has an elevated shadow for emphasis.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="outlined">
  <sog-card-content>
    <h4>Outlined Card</h4>
    <p>This card has a border instead of shadow.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="flat">
  <sog-card-content>
    <h4>Flat Card</h4>
    <p>This card has no shadow or border.</p>
  </sog-card-content>
</sog-card>`;

  variantsHtml = `<sog-card variant="elevated">
  <sog-card-content>
    <h4>Elevated Card</h4>
    <p>This card has an elevated shadow for emphasis.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="outlined">
  <sog-card-content>
    <h4>Outlined Card</h4>
    <p>This card has a border instead of shadow.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="flat">
  <sog-card-content>
    <h4>Flat Card</h4>
    <p>This card has no shadow or border.</p>
  </sog-card-content>
</sog-card>`;

  interactiveCode = `<sog-card 
  variant="interactive" 
  (click)="onCardClick('Feature 1')">
  <sog-card-content>
    <h4>🚀 Feature 1</h4>
    <p>Click to learn more about this exciting feature.</p>
  </sog-card-content>
</sog-card>`;

  interactiveHtml = `<sog-card 
  variant="interactive" 
  (click)="onCardClick('Feature 1')">
  <sog-card-content>
    <h4>🚀 Feature 1</h4>
    <p>Click to learn more about this exciting feature.</p>
  </sog-card-content>
</sog-card>`;

  complexCode = `<sog-card class="complex-card">
  <sog-card-header>
    <div class="user-info">
      <div class="avatar">👤</div>
      <div class="user-details">
        <h4>John Doe</h4>
        <span class="user-role">Senior Developer</span>
      </div>
    </div>
    <span class="timestamp">2 hours ago</span>
  </sog-card-header>
  <sog-card-content>
    <h3>Project Update</h3>
    <p>The new feature implementation is progressing well.</p>
    <div class="tags">
      <span class="tag">Development</span>
      <span class="tag">Progress</span>
    </div>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">👍 Like</sog-button>
    <sog-button variant="ghost">💬 Comment</sog-button>
    <sog-button variant="ghost">📤 Share</sog-button>
  </sog-card-actions>
</sog-card>`;

  complexHtml = `<sog-card class="complex-card">
  <sog-card-header>
    <div class="user-info">
      <div class="avatar">👤</div>
      <div class="user-details">
        <h4>John Doe</h4>
        <span class="user-role">Senior Developer</span>
      </div>
    </div>
    <span class="timestamp">2 hours ago</span>
  </sog-card-header>
  <sog-card-content>
    <h3>Project Update</h3>
    <p>The new feature implementation is progressing well.</p>
    <div class="tags">
      <span class="tag">Development</span>
      <span class="tag">Progress</span>
    </div>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">👍 Like</sog-button>
    <sog-button variant="ghost">💬 Comment</sog-button>
    <sog-button variant="ghost">📤 Share</sog-button>
  </sog-card-actions>
</sog-card>`;
}