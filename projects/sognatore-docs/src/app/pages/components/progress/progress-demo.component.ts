import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreProgress } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-progress-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreProgress],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Progress Component</h1>
        <p class="page-description">
          Visual progress indicator component for showing completion status with various styles and configurations.
        </p>
      </header>

      <section class="section">
        <h2>Basic Linear Progress</h2>
        <p>Simple linear progress bars with different completion values.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <div class="progress-demo">
              <div class="progress-item">
                <label>25% Complete</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="25"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>50% Complete</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="50"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>75% Complete</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="75"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>100% Complete</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="100"
                  color="success">
                </sog-progress>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Labels</h2>
        <p>Progress bars that display percentage labels.</p>
        
        <app-code-example
          [code]="labelsCode"
          [htmlCode]="labelsHtml">
          <div class="demo-container">
            <div class="progress-demo">
              <div class="progress-item">
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="65"
                  color="primary"
                  [showLabel]="true">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="85"
                  color="success"
                  [showLabel]="true">
                </sog-progress>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Colors</h2>
        <p>Progress bars with different color variants.</p>
        
        <app-code-example
          [code]="colorsCode"
          [htmlCode]="colorsHtml">
          <div class="demo-container">
            <div class="progress-demo">
              <div class="progress-item">
                <label>Primary (60%)</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="60"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Success (80%)</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="80"
                  color="success">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Warning (45%)</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="45"
                  color="warning">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Danger (30%)</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="30"
                  color="danger">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Info (90%)</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="90"
                  color="info">
                </sog-progress>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Sizes</h2>
        <p>Progress bars in different sizes.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="progress-demo">
              <div class="progress-item">
                <label>Extra Small</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="70"
                  size="xs"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Small</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="70"
                  size="sm"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Medium (Default)</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="70"
                  size="md"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Large</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="70"
                  size="lg"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Extra Large</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [value]="70"
                  size="xl"
                  color="primary">
                </sog-progress>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Circular Progress</h2>
        <p>Circular progress indicators with various configurations.</p>
        
        <app-code-example
          [code]="circularCode"
          [htmlCode]="circularHtml">
          <div class="demo-container">
            <div class="circular-demo">
              <div class="circular-item">
                <sog-progress 
                  type="circular"
                  variant="basic"
                  [value]="25"
                  size="md"
                  color="primary"
                  [showLabel]="true">
                </sog-progress>
                <label>25%</label>
              </div>
              
              <div class="circular-item">
                <sog-progress 
                  type="circular"
                  variant="basic"
                  [value]="50"
                  size="lg"
                  color="success"
                  [showLabel]="true">
                </sog-progress>
                <label>50%</label>
              </div>
              
              <div class="circular-item">
                <sog-progress 
                  type="circular"
                  variant="basic"
                  [value]="75"
                  size="xl"
                  color="warning"
                  [showLabel]="true">
                </sog-progress>
                <label>75%</label>
              </div>
              
              <div class="circular-item">
                <sog-progress 
                  type="circular"
                  variant="basic"
                  [value]="100"
                  size="lg"
                  color="danger"
                  [showLabel]="true">
                </sog-progress>
                <label>100%</label>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Indeterminate Progress</h2>
        <p>Progress indicators with indeterminate/loading state.</p>
        
        <app-code-example
          [code]="indeterminateCode"
          [htmlCode]="indeterminateHtml">
          <div class="demo-container">
            <div class="progress-demo">
              <div class="progress-item">
                <label>Linear Indeterminate</label>
                <sog-progress 
                  type="linear"
                  variant="basic"
                  [indeterminate]="true"
                  color="primary">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Circular Indeterminate</label>
                <div class="circular-demo">
                  <sog-progress 
                    type="circular"
                    variant="basic"
                    [indeterminate]="true"
                    size="md"
                    color="primary">
                  </sog-progress>
                </div>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Material Design Style</h2>
        <p>Progress bars with Material Design styling.</p>
        
        <app-code-example
          [code]="materialCode"
          [htmlCode]="materialHtml">
          <div class="demo-container">
            <div class="progress-demo">
              <div class="progress-item">
                <label>Material Linear</label>
                <sog-progress 
                  type="linear"
                  variant="material"
                  [value]="65"
                  color="primary"
                  [showLabel]="true">
                </sog-progress>
              </div>
              
              <div class="progress-item">
                <label>Material Circular</label>
                <div class="circular-demo">
                  <sog-progress 
                    type="circular"
                    variant="material"
                    [value]="75"
                    size="lg"
                    color="primary"
                    [showLabel]="true">
                  </sog-progress>
                </div>
              </div>
            </div>
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
                <td>type</td>
                <td>'linear' | 'circular'</td>
                <td>'linear'</td>
                <td>Progress indicator type</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>'basic' | 'material'</td>
                <td>'basic'</td>
                <td>Visual style variant</td>
              </tr>
              <tr>
                <td>value</td>
                <td>number</td>
                <td>0</td>
                <td>Progress value (0-100)</td>
              </tr>
              <tr>
                <td>size</td>
                <td>'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td>'md'</td>
                <td>Size of the progress indicator</td>
              </tr>
              <tr>
                <td>color</td>
                <td>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</td>
                <td>'primary'</td>
                <td>Color theme</td>
              </tr>
              <tr>
                <td>indeterminate</td>
                <td>boolean</td>
                <td>false</td>
                <td>Show indeterminate/loading state</td>
              </tr>
              <tr>
                <td>showLabel</td>
                <td>boolean</td>
                <td>false</td>
                <td>Display percentage label</td>
              </tr>
              <tr>
                <td>strokeWidth</td>
                <td>number</td>
                <td>4</td>
                <td>Stroke width for circular progress</td>
              </tr>
              <tr>
                <td>circularSize</td>
                <td>number</td>
                <td>40</td>
                <td>Size override for circular progress</td>
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

    .progress-demo {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .progress-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .progress-item label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--gray-700);
    }

    .circular-demo {
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .circular-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .circular-item label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--gray-700);
      text-align: center;
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
  `]
})
export class ProgressDemoComponent {
  basicUsageCode = `import { Component } from '@angular/core';
import { SognatoreProgress } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreProgress],
  template: \`
    <sog-progress 
      type="linear"
      variant="basic"
      [value]="75"
      color="primary">
    </sog-progress>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-progress 
  type="linear"
  variant="basic"
  [value]="75"
  color="primary">
</sog-progress>`;

  labelsCode = `<sog-progress 
  type="linear"
  variant="basic"
  [value]="65"
  color="primary"
  [showLabel]="true">
</sog-progress>`;

  labelsHtml = `<sog-progress 
  type="linear"
  variant="basic"
  [value]="65"
  color="primary"
  [showLabel]="true">
</sog-progress>`;

  colorsCode = `<!-- Different color variants -->
<sog-progress [value]="60" color="primary"></sog-progress>
<sog-progress [value]="80" color="success"></sog-progress>
<sog-progress [value]="45" color="warning"></sog-progress>
<sog-progress [value]="30" color="danger"></sog-progress>
<sog-progress [value]="90" color="info"></sog-progress>`;

  colorsHtml = `<sog-progress [value]="60" color="primary"></sog-progress>
<sog-progress [value]="80" color="success"></sog-progress>
<sog-progress [value]="45" color="warning"></sog-progress>
<sog-progress [value]="30" color="danger"></sog-progress>
<sog-progress [value]="90" color="info"></sog-progress>`;

  sizesCode = `<!-- Different sizes -->
<sog-progress [value]="70" size="xs"></sog-progress>
<sog-progress [value]="70" size="sm"></sog-progress>
<sog-progress [value]="70" size="md"></sog-progress>
<sog-progress [value]="70" size="lg"></sog-progress>
<sog-progress [value]="70" size="xl"></sog-progress>`;

  sizesHtml = `<sog-progress [value]="70" size="xs"></sog-progress>
<sog-progress [value]="70" size="sm"></sog-progress>
<sog-progress [value]="70" size="md"></sog-progress>
<sog-progress [value]="70" size="lg"></sog-progress>
<sog-progress [value]="70" size="xl"></sog-progress>`;

  circularCode = `<!-- Circular progress indicators -->
<sog-progress 
  type="circular"
  [value]="75"
  size="lg"
  color="primary"
  [showLabel]="true">
</sog-progress>`;

  circularHtml = `<sog-progress 
  type="circular"
  [value]="75"
  size="lg"
  color="primary"
  [showLabel]="true">
</sog-progress>`;

  indeterminateCode = `<!-- Indeterminate progress -->
<sog-progress 
  type="linear"
  [indeterminate]="true"
  color="primary">
</sog-progress>

<sog-progress 
  type="circular"
  [indeterminate]="true"
  color="primary">
</sog-progress>`;

  indeterminateHtml = `<sog-progress 
  type="linear"
  [indeterminate]="true"
  color="primary">
</sog-progress>

<sog-progress 
  type="circular"
  [indeterminate]="true"
  color="primary">
</sog-progress>`;

  materialCode = `<!-- Material Design style -->
<sog-progress 
  type="linear"
  variant="material"
  [value]="65"
  color="primary"
  [showLabel]="true">
</sog-progress>

<sog-progress 
  type="circular"
  variant="material"
  [value]="75"
  size="lg"
  color="primary"
  [showLabel]="true">
</sog-progress>`;

  materialHtml = `<sog-progress 
  type="linear"
  variant="material"
  [value]="65"
  color="primary"
  [showLabel]="true">
</sog-progress>

<sog-progress 
  type="circular"
  variant="material"
  [value]="75"
  size="lg"
  color="primary"
  [showLabel]="true">
</sog-progress>`;
}