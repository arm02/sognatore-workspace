import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../../shared/components/code-example.component';
import { SognatoreChip } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-chip-demo',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent, SognatoreChip],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Chip Component</h1>
        <p class="page-description">
          Compact chip component for tags, filters, and selections with support for icons, avatars, and removal actions.
        </p>
      </header>

      <section class="section">
        <h2>Basic Usage</h2>
        <p>Simple chips for displaying tags and categories.</p>
        
        <app-code-example
          [code]="basicUsageCode"
          [htmlCode]="basicUsageHtml">
          <div class="demo-container">
            <div class="chip-demo">
              <sog-chip label="JavaScript" variant="basic"></sog-chip>
              <sog-chip label="TypeScript" variant="basic"></sog-chip>
              <sog-chip label="Angular" variant="basic"></sog-chip>
              <sog-chip label="React" variant="basic"></sog-chip>
              <sog-chip label="Vue.js" variant="basic"></sog-chip>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Variants</h2>
        <p>Different chip styles and colors.</p>
        
        <app-code-example
          [code]="variantsCode"
          [htmlCode]="variantsHtml">
          <div class="demo-container">
            <div class="variant-demo">
              <div class="variant-group">
                <h4>Basic Style</h4>
                <div class="chip-demo">
                  <sog-chip label="Primary" variant="basic" color="primary"></sog-chip>
                  <sog-chip label="Secondary" variant="basic" color="secondary"></sog-chip>
                  <sog-chip label="Success" variant="basic" color="success"></sog-chip>
                  <sog-chip label="Warning" variant="basic" color="warning"></sog-chip>
                  <sog-chip label="Danger" variant="basic" color="danger"></sog-chip>
                </div>
              </div>
              
              <div class="variant-group">
                <h4>Material Style</h4>
                <div class="chip-demo">
                  <sog-chip label="Primary" variant="material" color="primary"></sog-chip>
                  <sog-chip label="Secondary" variant="material" color="secondary"></sog-chip>
                  <sog-chip label="Success" variant="material" color="success"></sog-chip>
                  <sog-chip label="Warning" variant="material" color="warning"></sog-chip>
                  <sog-chip label="Danger" variant="material" color="danger"></sog-chip>
                </div>
              </div>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Sizes</h2>
        <p>Chips in different sizes for various use cases.</p>
        
        <app-code-example
          [code]="sizesCode"
          [htmlCode]="sizesHtml">
          <div class="demo-container">
            <div class="chip-demo">
              <sog-chip label="Extra Small" variant="basic" color="primary" size="xs"></sog-chip>
              <sog-chip label="Small" variant="basic" color="primary" size="sm"></sog-chip>
              <sog-chip label="Medium" variant="basic" color="primary" size="md"></sog-chip>
              <sog-chip label="Large" variant="basic" color="primary" size="lg"></sog-chip>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>With Icons</h2>
        <p>Chips with leading icons for better visual communication.</p>
        
        <app-code-example
          [code]="iconsCode"
          [htmlCode]="iconsHtml">
          <div class="demo-container">
            <div class="chip-demo">
              <sog-chip label="Home" variant="basic" color="primary" leadingIcon="🏠"></sog-chip>
              <sog-chip label="Verified" variant="basic" color="success" leadingIcon="✓"></sog-chip>
              <sog-chip label="Warning" variant="basic" color="warning" leadingIcon="⚠️"></sog-chip>
              <sog-chip label="Info" variant="basic" color="info" leadingIcon="ℹ️"></sog-chip>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Removable Chips</h2>
        <p>Chips with remove buttons for dynamic tag management.</p>
        
        <app-code-example
          [code]="removableCode"
          [htmlCode]="removableHtml">
          <div class="demo-container">
            <div class="chip-demo">
              <sog-chip 
                *ngFor="let tag of tags; let i = index"
                [label]="tag"
                variant="basic" 
                color="primary" 
                [removable]="true"
                (chipRemove)="removeTag(i)">
              </sog-chip>
              <button class="add-tag-btn" (click)="addTag()">+ Add Tag</button>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Avatar Chips</h2>
        <p>Chips with avatar images for user representation.</p>
        
        <app-code-example
          [code]="avatarCode"
          [htmlCode]="avatarHtml">
          <div class="demo-container">
            <div class="chip-demo">
              <span class="sog-chip sog-chip--avatar">
                <span class="chip-avatar">👤</span>
                John Doe
              </span>
              <span class="sog-chip sog-chip--avatar">
                <span class="chip-avatar">👩</span>
                Sarah Smith
              </span>
              <span class="sog-chip sog-chip--avatar">
                <span class="chip-avatar">👨</span>
                Mike Johnson
              </span>
              <span class="sog-chip sog-chip--avatar sog-chip--outlined">
                <span class="chip-avatar">👩‍💼</span>
                Alice Brown
                <button class="chip-remove">×</button>
              </span>
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Clickable Chips</h2>
        <p>Interactive chips that respond to click events.</p>
        
        <app-code-example
          [code]="clickableCode"
          [htmlCode]="clickableHtml">
          <div class="demo-container">
            <div class="chip-demo">
              <sog-chip 
                label="Frontend"
                [clickable]="true"
                [selected]="selectedChips.includes('frontend')"
                (chipClick)="toggleChip('frontend')">
              </sog-chip>
              <sog-chip 
                label="Backend"
                [clickable]="true"
                [selected]="selectedChips.includes('backend')"
                (chipClick)="toggleChip('backend')">
              </sog-chip>
              <sog-chip 
                label="Full Stack"
                [clickable]="true"
                [selected]="selectedChips.includes('fullstack')"
                (chipClick)="toggleChip('fullstack')">
              </sog-chip>
              <sog-chip 
                label="Mobile"
                [clickable]="true"
                [selected]="selectedChips.includes('mobile')"
                (chipClick)="toggleChip('mobile')">
              </sog-chip>
            </div>
            <div class="selected-info" *ngIf="selectedChips.length > 0">
              Selected: {{selectedChips.join(', ')}}
            </div>
          </div>
        </app-code-example>
      </section>

      <section class="section">
        <h2>Filter Chips</h2>
        <p>Chips used for filtering and categorization.</p>
        
        <app-code-example
          [code]="filterCode"
          [htmlCode]="filterHtml">
          <div class="demo-container">
            <div class="filter-demo">
              <div class="filter-section">
                <h4>Categories</h4>
                <div class="chip-demo">
                  <sog-chip 
                    label="All"
                    variant="outlined"
                    [clickable]="true"
                    [selected]="activeFilters.category === 'all'"
                    (chipClick)="setFilter('category', 'all')">
                  </sog-chip>
                  <sog-chip 
                    label="Design"
                    variant="outlined"
                    [clickable]="true"
                    [selected]="activeFilters.category === 'design'"
                    (chipClick)="setFilter('category', 'design')">
                  </sog-chip>
                  <sog-chip 
                    label="Development"
                    variant="outlined"
                    [clickable]="true"
                    [selected]="activeFilters.category === 'development'"
                    (chipClick)="setFilter('category', 'development')">
                  </sog-chip>
                  <sog-chip 
                    label="Marketing"
                    variant="outlined"
                    [clickable]="true"
                    [selected]="activeFilters.category === 'marketing'"
                    (chipClick)="setFilter('category', 'marketing')">
                  </sog-chip>
                </div>
              </div>
              
              <div class="filter-section">
                <h4>Priority</h4>
                <div class="chip-demo">
                  <sog-chip 
                    label="Low"
                    variant="outlined"
                    color="success"
                    [clickable]="true"
                    [selected]="activeFilters.priority === 'low'"
                    (chipClick)="setFilter('priority', 'low')">
                  </sog-chip>
                  <sog-chip 
                    label="Medium"
                    variant="outlined"
                    color="warning"
                    [clickable]="true"
                    [selected]="activeFilters.priority === 'medium'"
                    (chipClick)="setFilter('priority', 'medium')">
                  </sog-chip>
                  <sog-chip 
                    label="High"
                    variant="outlined"
                    color="danger"
                    [clickable]="true"
                    [selected]="activeFilters.priority === 'high'"
                    (chipClick)="setFilter('priority', 'high')">
                  </sog-chip>
                </div>
              </div>
            </div>
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
                <td>.sog-chip</td>
                <td>Base chip component</td>
              </tr>
              <tr>
                <td>.sog-chip--primary</td>
                <td>Primary color variant</td>
              </tr>
              <tr>
                <td>.sog-chip--secondary</td>
                <td>Secondary color variant</td>
              </tr>
              <tr>
                <td>.sog-chip--success</td>
                <td>Success color variant</td>
              </tr>
              <tr>
                <td>.sog-chip--warning</td>
                <td>Warning color variant</td>
              </tr>
              <tr>
                <td>.sog-chip--danger</td>
                <td>Danger color variant</td>
              </tr>
              <tr>
                <td>.sog-chip--outlined</td>
                <td>Outlined style variant</td>
              </tr>
              <tr>
                <td>.sog-chip--sm</td>
                <td>Small size variant</td>
              </tr>
              <tr>
                <td>.sog-chip--md</td>
                <td>Medium size variant (default)</td>
              </tr>
              <tr>
                <td>.sog-chip--lg</td>
                <td>Large size variant</td>
              </tr>
              <tr>
                <td>.sog-chip--clickable</td>
                <td>Interactive clickable state</td>
              </tr>
              <tr>
                <td>.sog-chip--selected</td>
                <td>Selected state for clickable chips</td>
              </tr>
              <tr>
                <td>.sog-chip--avatar</td>
                <td>Avatar chip with leading image</td>
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

    .chip-demo {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
    }


    .add-tag-btn {
      padding: 0.5rem 1rem;
      background: white;
      border: 2px dashed var(--gray-300);
      border-radius: 16px;
      color: var(--gray-600);
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    }

    .add-tag-btn:hover {
      border-color: var(--primary-400);
      color: var(--primary-600);
    }

    .selected-info {
      margin-top: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      font-size: 0.875rem;
      color: var(--gray-600);
    }

    .variant-demo {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .variant-group h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 1rem;
    }

    .filter-demo {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
    }

    .filter-section {
      margin-bottom: 2rem;
    }

    .filter-section:last-child {
      margin-bottom: 0;
    }

    .filter-section h4 {
      font-size: 1rem;
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

      .variant-demo {
        gap: 1.5rem;
      }

      .filter-demo {
        padding: 1rem;
      }
    }
  `]
})
export class ChipDemoComponent {
  tags = ['React', 'Angular', 'Vue.js', 'TypeScript'];
  selectedChips: string[] = [];
  activeFilters = {
    category: 'all',
    priority: ''
  };

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  addTag() {
    const newTags = ['Node.js', 'Python', 'Java', 'Go', 'Rust'];
    const availableTags = newTags.filter(tag => !this.tags.includes(tag));
    if (availableTags.length > 0) {
      this.tags.push(availableTags[0]);
    }
  }

  toggleChip(chip: string) {
    const index = this.selectedChips.indexOf(chip);
    if (index > -1) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(chip);
    }
  }

  setFilter(type: 'category' | 'priority', value: string) {
    if (this.activeFilters[type] === value) {
      this.activeFilters[type] = '';
    } else {
      this.activeFilters[type] = value;
    }
  }

  basicUsageCode = `import { Component } from '@angular/core';
import { SogChipComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SogChipComponent],
  template: \`
    <sog-chip>JavaScript</sog-chip>
    <sog-chip>TypeScript</sog-chip>
    <sog-chip>Angular</sog-chip>
    <sog-chip>React</sog-chip>
    <sog-chip>Vue.js</sog-chip>
  \`
})
export class ExampleComponent {}`;

  basicUsageHtml = `<sog-chip>JavaScript</sog-chip>
<sog-chip>TypeScript</sog-chip>
<sog-chip>Angular</sog-chip>
<sog-chip>React</sog-chip>
<sog-chip>Vue.js</sog-chip>`;

  variantsCode = `<!-- Filled variants -->
<sog-chip variant="primary">Primary</sog-chip>
<sog-chip variant="secondary">Secondary</sog-chip>
<sog-chip variant="success">Success</sog-chip>
<sog-chip variant="warning">Warning</sog-chip>
<sog-chip variant="danger">Danger</sog-chip>

<!-- Outlined variants -->
<sog-chip variant="primary" outlined>Primary</sog-chip>
<sog-chip variant="secondary" outlined>Secondary</sog-chip>
<sog-chip variant="success" outlined>Success</sog-chip>
<sog-chip variant="warning" outlined>Warning</sog-chip>
<sog-chip variant="danger" outlined>Danger</sog-chip>`;

  variantsHtml = `<!-- Filled variants -->
<sog-chip variant="primary">Primary</sog-chip>
<sog-chip variant="secondary">Secondary</sog-chip>
<sog-chip variant="success">Success</sog-chip>
<sog-chip variant="warning">Warning</sog-chip>
<sog-chip variant="danger">Danger</sog-chip>

<!-- Outlined variants -->
<sog-chip variant="primary" outlined>Primary</sog-chip>
<sog-chip variant="secondary" outlined>Secondary</sog-chip>
<sog-chip variant="success" outlined>Success</sog-chip>
<sog-chip variant="warning" outlined>Warning</sog-chip>
<sog-chip variant="danger" outlined>Danger</sog-chip>`;

  sizesCode = `<sog-chip variant="primary" size="sm">Small</sog-chip>
<sog-chip variant="primary" size="md">Medium</sog-chip>
<sog-chip variant="primary" size="lg">Large</sog-chip>`;

  sizesHtml = `<sog-chip variant="primary" size="sm">Small</sog-chip>
<sog-chip variant="primary" size="md">Medium</sog-chip>
<sog-chip variant="primary" size="lg">Large</sog-chip>`;

  iconsCode = `<sog-chip variant="primary">
  <sog-icon name="home" size="sm"></sog-icon>
  Home
</sog-chip>

<sog-chip variant="success">
  <sog-icon name="check" size="sm"></sog-icon>
  Verified
</sog-chip>

<sog-chip variant="warning">
  <sog-icon name="warning" size="sm"></sog-icon>
  Warning
</sog-chip>

<sog-chip variant="info">
  <sog-icon name="info" size="sm"></sog-icon>
  Info
</sog-chip>`;

  iconsHtml = `<sog-chip variant="primary">
  🏠 Home
</sog-chip>

<sog-chip variant="success">
  ✓ Verified
</sog-chip>

<sog-chip variant="warning">
  ⚠️ Warning
</sog-chip>

<sog-chip variant="info">
  ℹ️ Info
</sog-chip>`;

  removableCode = `<sog-chip 
  variant="primary" 
  *ngFor="let tag of tags; let i = index"
  [removable]="true"
  (remove)="removeTag(i)">
  {{tag}}
</sog-chip>`;

  removableHtml = `<sog-chip 
  variant="primary" 
  *ngFor="let tag of tags; let i = index"
  removable
  (remove)="removeTag(i)">
  {{tag}}
</sog-chip>`;

  avatarCode = `<sog-chip avatar>
  <img src="avatar1.jpg" alt="John Doe" class="chip-avatar">
  John Doe
</sog-chip>

<sog-chip avatar>
  <img src="avatar2.jpg" alt="Sarah Smith" class="chip-avatar">
  Sarah Smith
</sog-chip>

<sog-chip avatar outlined removable>
  <img src="avatar3.jpg" alt="Alice Brown" class="chip-avatar">
  Alice Brown
</sog-chip>`;

  avatarHtml = `<sog-chip avatar>
  <img src="avatar1.jpg" alt="John Doe" class="chip-avatar">
  John Doe
</sog-chip>

<sog-chip avatar>
  <img src="avatar2.jpg" alt="Sarah Smith" class="chip-avatar">
  Sarah Smith
</sog-chip>

<sog-chip avatar outlined removable>
  <img src="avatar3.jpg" alt="Alice Brown" class="chip-avatar">
  Alice Brown
</sog-chip>`;

  clickableCode = `<sog-chip 
  clickable
  [selected]="selectedChips.includes('frontend')"
  (click)="toggleChip('frontend')">
  Frontend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('backend')"
  (click)="toggleChip('backend')">
  Backend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('fullstack')"
  (click)="toggleChip('fullstack')">
  Full Stack
</sog-chip>`;

  clickableHtml = `<sog-chip 
  clickable
  [selected]="selectedChips.includes('frontend')"
  (click)="toggleChip('frontend')">
  Frontend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('backend')"
  (click)="toggleChip('backend')">
  Backend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('fullstack')"
  (click)="toggleChip('fullstack')">
  Full Stack
</sog-chip>`;

  filterCode = `<!-- Category filters -->
<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'all'"
  (click)="setFilter('category', 'all')">
  All
</sog-chip>

<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'design'"
  (click)="setFilter('category', 'design')">
  Design
</sog-chip>

<!-- Priority filters -->
<sog-chip 
  variant="success" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'low'"
  (click)="setFilter('priority', 'low')">
  Low
</sog-chip>

<sog-chip 
  variant="warning" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'medium'"
  (click)="setFilter('priority', 'medium')">
  Medium
</sog-chip>`;

  filterHtml = `<!-- Category filters -->
<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'all'"
  (click)="setFilter('category', 'all')">
  All
</sog-chip>

<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'design'"
  (click)="setFilter('category', 'design')">
  Design
</sog-chip>

<!-- Priority filters -->
<sog-chip 
  variant="success" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'low'"
  (click)="setFilter('priority', 'low')">
  Low
</sog-chip>

<sog-chip 
  variant="warning" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'medium'"
  (click)="setFilter('priority', 'medium')">
  Medium
</sog-chip>`;
}