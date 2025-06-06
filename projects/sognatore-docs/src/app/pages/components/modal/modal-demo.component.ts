import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreModal } from '../../../../../../sognatore-ui/src/lib/modal/modal.component';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/lib/button/button.component';

@Component({
  selector: 'app-modal-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreModal, SognatoreButton],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Modal Component</h1>
        <p class="page-description">
          Flexible modal component with customizable sizes, variants, and content projection for overlaying content on the main interface.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple modal with basic styling and content.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <sog-button variant="primary" (click)="basicModal.open()">
              Open Basic Modal
            </sog-button>
            
            <sog-modal #basicModal
                       title="Basic Modal"
                       class="basic"
                       size="medium"
                       [showCloseButton]="true">
              <p>This is a basic modal with default styling. It demonstrates the fundamental features of the modal component including title, content area, and close functionality.</p>
              <div slot="footer">
                <sog-button variant="ghost" (click)="basicModal.close()">Cancel</sog-button>
                <sog-button variant="primary" (click)="basicModal.close()">Confirm</sog-button>
              </div>
            </sog-modal>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Modal Sizes</h2>
        <p>Modals in different sizes to accommodate various content types.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" (click)="smallModal.open()">
                Small Modal
              </sog-button>
              <sog-button variant="primary" (click)="mediumModal.open()">
                Medium Modal
              </sog-button>
              <sog-button variant="primary" (click)="largeModal.open()">
                Large Modal
              </sog-button>
              <sog-button variant="primary" (click)="fullscreenModal.open()">
                Fullscreen Modal
              </sog-button>
            </div>
            
            <!-- Small Modal -->
            <sog-modal #smallModal
                       title="Small Modal"
                       class="basic"
                       size="small"
                       [showCloseButton]="true">
              <p>This is a small modal perfect for simple messages, alerts, or confirmations.</p>
              <div slot="footer">
                <sog-button variant="primary" (click)="smallModal.close()">OK</sog-button>
              </div>
            </sog-modal>
            
            <!-- Medium Modal -->
            <sog-modal #mediumModal
                       title="Medium Modal"
                       class="basic"
                       size="medium"
                       [showCloseButton]="true">
              <p>This is a medium-sized modal suitable for forms and detailed content.</p>
              <div class="form-section">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name">
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email">
                </div>
              </div>
              <div slot="footer">
                <sog-button variant="ghost" (click)="mediumModal.close()">Cancel</sog-button>
                <sog-button variant="primary" (click)="mediumModal.close()">Save</sog-button>
              </div>
            </sog-modal>
            
            <!-- Large Modal -->
            <sog-modal #largeModal
                       title="Large Modal"
                       class="basic"
                       size="large"
                       [showCloseButton]="true">
              <p>This is a large modal for complex content, detailed forms, or rich media.</p>
              <div class="content-sections">
                <div class="content-section">
                  <h4>Personal Information</h4>
                  <div class="form-row">
                    <div class="form-group">
                      <label>First Name</label>
                      <input type="text">
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text">
                    </div>
                  </div>
                </div>
                <div class="content-section">
                  <h4>Contact Details</h4>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input type="email">
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel">
                  </div>
                </div>
              </div>
              <div slot="footer">
                <sog-button variant="ghost" (click)="largeModal.close()">Cancel</sog-button>
                <sog-button variant="primary" (click)="largeModal.close()">Save Changes</sog-button>
              </div>
            </sog-modal>
            
            <!-- Fullscreen Modal -->
            <sog-modal #fullscreenModal
                       title="Fullscreen Modal"
                       class="basic"
                       [fullscreen]="true"
                       [showCloseButton]="true">
              <div class="fullscreen-content">
                <p>This is a fullscreen modal that takes up the entire viewport. It's perfect for immersive experiences or when you need maximum space for content.</p>
                <div class="feature-grid">
                  <div class="feature-card">
                    <h4>Full Coverage</h4>
                    <p>Takes up the entire screen for maximum impact and focus.</p>
                  </div>
                  <div class="feature-card">
                    <h4>Rich Content</h4>
                    <p>Perfect for displaying detailed information, media, or complex forms.</p>
                  </div>
                  <div class="feature-card">
                    <h4>Immersive</h4>
                    <p>Provides an immersive experience by removing all distractions.</p>
                  </div>
                  <div class="feature-card">
                    <h4>Responsive</h4>
                    <p>Automatically adapts to different screen sizes and orientations.</p>
                  </div>
                </div>
              </div>
              <div slot="footer">
                <sog-button variant="ghost" (click)="fullscreenModal.close()">Close</sog-button>
                <sog-button variant="primary" (click)="fullscreenModal.close()">Done</sog-button>
              </div>
            </sog-modal>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Modal Variants</h2>
        <p>Different visual styles for various use cases.</p>
        
        <app-code-example
          [code]="variantsCode"
          [htmlCode]="variantsHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" (click)="basicVariantModal.open()">
                Basic Variant
              </sog-button>
              <sog-button variant="primary" (click)="materialModal.open()">
                Material Variant
              </sog-button>
            </div>
            
            <!-- Basic Variant Modal -->
            <sog-modal #basicVariantModal
                       title="Basic Variant"
                       class="basic"
                       size="medium"
                       [showCloseButton]="true">
              <p>This modal uses the basic variant with clean, minimal styling.</p>
              <div slot="footer">
                <sog-button variant="ghost" (click)="basicVariantModal.close()">Cancel</sog-button>
                <sog-button variant="primary" (click)="basicVariantModal.close()">OK</sog-button>
              </div>
            </sog-modal>
            
            <!-- Material Variant Modal -->
            <sog-modal #materialModal
                       title="Material Variant"
                       class="material"
                       size="medium"
                       [showCloseButton]="true">
              <p>This modal uses the Material Design variant with enhanced shadows and typography.</p>
              <div slot="footer">
                <sog-button variant="ghost" (click)="materialModal.close()">Cancel</sog-button>
                <sog-button variant="primary" (click)="materialModal.close()">OK</sog-button>
              </div>
            </sog-modal>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Modal Configuration</h2>
        <p>Various configuration options for modal behavior.</p>
        
        <app-code-example
          [code]="configCode"
          [htmlCode]="configHtml">
          <div class="demo-container">
            <div class="button-group">
              <sog-button variant="primary" (click)="noCloseModal.open()">
                No Close Button
              </sog-button>
              <sog-button variant="primary" (click)="noOverlayCloseModal.open()">
                No Overlay Close
              </sog-button>
              <sog-button variant="primary" (click)="noEscapeModal.open()">
                No Escape Key
              </sog-button>
            </div>
            
            <!-- No Close Button Modal -->
            <sog-modal #noCloseModal
                       title="No Close Button"
                       class="basic"
                       size="medium"
                       [showCloseButton]="false">
              <p>This modal doesn't have a close button in the header. Users must use the footer buttons to close it.</p>
              <div slot="footer">
                <sog-button variant="ghost" (click)="noCloseModal.close()">Cancel</sog-button>
                <sog-button variant="primary" (click)="noCloseModal.close()">Accept</sog-button>
              </div>
            </sog-modal>
            
            <!-- No Overlay Close Modal -->
            <sog-modal #noOverlayCloseModal
                       title="No Overlay Close"
                       class="basic"
                       size="medium"
                       [showCloseButton]="true"
                       [closeOnOverlayClick]="false">
              <p>This modal won't close when clicking the overlay backdrop. You must use the close button or footer actions.</p>
              <div slot="footer">
                <sog-button variant="primary" (click)="noOverlayCloseModal.close()">Close</sog-button>
              </div>
            </sog-modal>
            
            <!-- No Escape Key Modal -->
            <sog-modal #noEscapeModal
                       title="No Escape Key"
                       class="basic"
                       size="medium"
                       [showCloseButton]="true"
                       [closeOnEscape]="false">
              <p>This modal won't close when pressing the Escape key. You must use the close button or footer actions.</p>
              <div slot="footer">
                <sog-button variant="primary" (click)="noEscapeModal.close()">Close</sog-button>
              </div>
            </sog-modal>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>API Reference</h2>
        <div class="api-table">
          <h3>Modal Component Properties</h3>
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
                <td>isOpen</td>
                <td>boolean</td>
                <td>false</td>
                <td>Controls modal visibility</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>''</td>
                <td>Modal title text</td>
              </tr>
              <tr>
                <td>size</td>
                <td>'small' | 'medium' | 'large'</td>
                <td>'medium'</td>
                <td>Modal size preset</td>
              </tr>
              <tr>
                <td>fullscreen</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether modal should be fullscreen</td>
              </tr>
              <tr>
                <td>hasHeader</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether to show header section</td>
              </tr>
              <tr>
                <td>hasFooter</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether to show footer section</td>
              </tr>
              <tr>
                <td>showCloseButton</td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether to show close button in header</td>
              </tr>
              <tr>
                <td>closeOnOverlayClick</td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether clicking overlay closes modal</td>
              </tr>
              <tr>
                <td>closeOnEscape</td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether escape key closes modal</td>
              </tr>
              <tr>
                <td>class</td>
                <td>string</td>
                <td>'basic'</td>
                <td>Modal variant class</td>
              </tr>
            </tbody>
          </table>

          <h3>Modal Component Events</h3>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>closeModal</td>
                <td>Emitted when modal is closed</td>
              </tr>
              <tr>
                <td>openModal</td>
                <td>Emitted when modal is opened</td>
              </tr>
            </tbody>
          </table>

          <h3>Modal Component Methods</h3>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>open()</td>
                <td>Opens the modal</td>
              </tr>
              <tr>
                <td>close()</td>
                <td>Closes the modal</td>
              </tr>
              <tr>
                <td>toggle()</td>
                <td>Toggles modal open/close state</td>
              </tr>
            </tbody>
          </table>

          <h3>Content Projection Slots</h3>
          <table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>Main modal body content</td>
              </tr>
              <tr>
                <td>slot="header"</td>
                <td>Custom header content</td>
              </tr>
              <tr>
                <td>slot="footer"</td>
                <td>Footer action buttons</td>
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

    .button-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .form-section {
      margin: 20px 0;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: var(--gray-700);
      margin-bottom: 4px;
    }

    .form-group input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--gray-300);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.2s ease;
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .content-sections {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin: 20px 0;
    }

    .content-section h4 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0 0 16px 0;
    }

    .fullscreen-content {
      padding: 20px 0;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .feature-card {
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 1px solid var(--gray-200);
    }

    .feature-card h4 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0 0 12px 0;
    }

    .feature-card p {
      font-size: 14px;
      color: var(--gray-600);
      margin: 0;
      line-height: 1.5;
    }

    .api-table {
      margin-top: 2rem;
    }

    .api-table h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
      margin-top: 2rem;
    }

    .api-table h3:first-child {
      margin-top: 0;
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

    @media (max-width: 768px) {
      .page-container {
        padding: 1rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .feature-grid {
        grid-template-columns: 1fr;
      }

      .button-group {
        flex-direction: column;
      }
    }
  `]
})
export class ModalDemoComponent {
  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreModal, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreModal, SognatoreButton],
  template: \`
    <sog-button variant="primary" (click)="modal.open()">
      Open Modal
    </sog-button>
    
    <sog-modal #modal
               title="Basic Modal"
               class="basic"
               size="medium"
               [showCloseButton]="true">
      <p>Modal content goes here...</p>
      <div slot="footer">
        <sog-button variant="ghost" (click)="modal.close()">Cancel</sog-button>
        <sog-button variant="primary" (click)="modal.close()">Confirm</sog-button>
      </div>
    </sog-modal>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-button variant="primary" (click)="modal.open()">
  Open Modal
</sog-button>

<sog-modal #modal
           title="Basic Modal"
           class="basic"
           size="medium"
           [showCloseButton]="true">
  <p>Modal content goes here...</p>
  <div slot="footer">
    <sog-button variant="ghost" (click)="modal.close()">Cancel</sog-button>
    <sog-button variant="primary" (click)="modal.close()">Confirm</sog-button>
  </div>
</sog-modal>`;

  sizesCode = `// Small modal for simple messages
<sog-modal #smallModal size="small" title="Small Modal">
  <p>Simple message content</p>
</sog-modal>

// Medium modal for forms
<sog-modal #mediumModal size="medium" title="Medium Modal">
  <form><!-- Form content --></form>
</sog-modal>

// Large modal for complex content
<sog-modal #largeModal size="large" title="Large Modal">
  <div><!-- Complex content --></div>
</sog-modal>

// Fullscreen modal for immersive experiences
<sog-modal #fullscreenModal [fullscreen]="true" title="Fullscreen">
  <div><!-- Fullscreen content --></div>
</sog-modal>`;

  sizesHtml = `<sog-modal size="small" title="Small Modal">
  <!-- Small modal content -->
</sog-modal>

<sog-modal size="medium" title="Medium Modal">
  <!-- Medium modal content -->
</sog-modal>

<sog-modal size="large" title="Large Modal">
  <!-- Large modal content -->
</sog-modal>

<sog-modal [fullscreen]="true" title="Fullscreen Modal">
  <!-- Fullscreen modal content -->
</sog-modal>`;

  variantsCode = `// Basic variant with clean styling
<sog-modal class="basic" title="Basic Modal">
  <p>Clean, minimal styling</p>
</sog-modal>

// Material variant with enhanced shadows
<sog-modal class="material" title="Material Modal">
  <p>Material Design styling</p>
</sog-modal>`;

  variantsHtml = `<sog-modal class="basic" title="Basic Modal">
  <!-- Basic variant content -->
</sog-modal>

<sog-modal class="material" title="Material Modal">
  <!-- Material variant content -->
</sog-modal>`;

  configCode = `// Modal without close button
<sog-modal [showCloseButton]="false">
  <p>Must use footer buttons to close</p>
  <div slot="footer">
    <sog-button (click)="modal.close()">Close</sog-button>
  </div>
</sog-modal>

// Modal that doesn't close on overlay click
<sog-modal [closeOnOverlayClick]="false">
  <p>Won't close when clicking backdrop</p>
</sog-modal>

// Modal that doesn't close on escape key
<sog-modal [closeOnEscape]="false">
  <p>Won't close when pressing Escape</p>
</sog-modal>`;

  configHtml = `<sog-modal [showCloseButton]="false">
  <!-- No close button modal -->
</sog-modal>

<sog-modal [closeOnOverlayClick]="false">
  <!-- No overlay close modal -->
</sog-modal>

<sog-modal [closeOnEscape]="false">
  <!-- No escape key modal -->
</sog-modal>`;
}