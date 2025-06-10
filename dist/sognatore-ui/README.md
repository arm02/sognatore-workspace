# 🧩 Sognatore UI

A modern Angular component library built with standalone components, designed for productivity, consistent design, and seamless integration. Create beautiful, accessible, and performant user interfaces with ease.

`Made with ❤️ by the Sognatore team.`

---

## 🌟 Features

- **🎯 Standalone Components** - Built for Angular 17+ with modern standalone architecture
- **📱 Responsive Design** - Mobile-first approach with flexible layouts
- **🎨 Customizable Themes** - Easy theming with CSS custom properties
- **♿ Accessibility First** - WCAG 2.1 compliant with full keyboard navigation
- **🎮 Interactive Playground** - Real-time component testing and configuration
- **📚 Comprehensive Examples** - Real-world usage patterns and best practices
- **🔧 TypeScript Support** - Full type safety and IntelliSense support
- **🚀 Performance Optimized** - Tree-shakable with minimal bundle impact

---

## 📦 Installation

```bash
npm install @sognatore/ui
```

*Make sure your Angular project is using version 17 or newer.*

---

## 🚀 Quick Start

### Import Standalone Components

```typescript
import { Component } from '@angular/core';
import { 
  // Form Components
  SognatoreButton, 
  SognatoreInput, 
  
  // Layout Components
  SognatoreCard,
  SognatoreModal,
  SognatoreNavbar,
  SognatoreAccordion,
  SognatoreTabs,
  
  // UI Components
  SognatoreIcon,
  SognatoreTooltip,
  SognatoreBadge,
  SognatoreProgress,
  SognatoreChip
} from '@sognatore/ui';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    SognatoreButton, SognatoreInput, SognatoreCard, 
    SognatoreNavbar, SognatoreIcon, SognatoreBadge,
    SognatoreProgress, SognatoreTooltip
  ],
  template: `
    <!-- Navigation -->
    <sog-navbar [items]="navItems" fixed="true">
      <div slot="brand">
        <sog-icon name="home" size="lg"></sog-icon>
        My Dashboard
      </div>
      <div slot="actions">
        <sog-tooltip text="Notifications" position="bottom">
          <sog-badge [content]="5" color="danger">
            <sog-icon name="bell" size="md"></sog-icon>
          </sog-badge>
        </sog-tooltip>
      </div>
    </sog-navbar>

    <!-- Main Content -->
    <div class="dashboard-content">
      <sog-card variant="elevated">
        <div slot="header">
          <h3>Project Progress</h3>
        </div>
        
        <sog-progress 
          type="linear" 
          [value]="75" 
          color="success" 
          showLabel="true">
        </sog-progress>
        
        <div class="skills">
          <sog-chip 
            *ngFor="let skill of skills"
            [label]="skill.name" 
            color="primary" 
            [clickable]="true"
            [selected]="skill.selected"
            (chipClick)="toggleSkill(skill)">
          </sog-chip>
        </div>
        
        <div slot="footer">
          <sog-button variant="primary" (click)="updateProgress()">
            Update Progress
          </sog-button>
        </div>
      </sog-card>
    </div>
  `
})
export class DashboardComponent {
  navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'projects', label: 'Projects', icon: 'folder' }
  ];
  
  skills = [
    { name: 'Angular', selected: true },
    { name: 'TypeScript', selected: false }
  ];
  
  toggleSkill(skill: any) {
    skill.selected = !skill.selected;
  }
  
  updateProgress() {
    console.log('Updating progress...');
  }
}
```

---

## 🧱 Available Components

| Component | Selector | Description | Status |
|-----------|----------|-------------|--------|
| **Button** | `<sog-button>` | Interactive button with multiple variants and sizes | ✅ |
| **Input** | `<sog-input>` | Form input with validation, error states, prefix/suffix | ✅ |
| **Card** | `<sog-card>` | Content container with header/footer slots, elevation | ✅ |
| **Badge** | `<sog-badge>` | Notification badges with dot and content variants | ✅ |
| **Chip** | `<sog-chip>` | Interactive tags with selectable and clickable states | ✅ |
| **Progress** | `<sog-progress>` | Linear and circular progress indicators with animations | ✅ |
| **Tooltip** | `<sog-tooltip>` | Contextual help with smart positioning and rich content | ✅ |
| **Modal** | `<sog-modal>` | Dialog overlay with size variants and backdrop controls | ✅ |
| **Dialog** | `<sog-dialog>` | Simple confirmation and alert dialogs | ✅ |
| **Navbar** | `<sog-navbar>` | Responsive navigation bar with brand and actions slots | ✅ |
| **Accordion** | `<sog-accordion>` | Collapsible content panels with keyboard navigation | ✅ |
| **Tabs** | `<sog-tabs>` | Tabbed interface with dynamic content and router support | ✅ |
| **Icon** | `<sog-icon>` | SVG icon system with built-in and custom icon support | ✅ |

---

## 🎮 Interactive Playground

Explore components in real-time with our interactive playground:

```bash
ng serve
# Navigate to http://localhost:4200/components/[component]/playground
```

**Available Playgrounds:**
- `/components/tooltip/playground` - Configure tooltip behavior and appearance
- `/components/button/playground` - Test button variants and states
- `/components/input/playground` - Experiment with form inputs
- *More playgrounds coming soon!*

---

## 📚 Examples & Patterns

Learn from real-world examples:

```bash
# View comprehensive examples
http://localhost:4200/components/[component]/examples
```

**Example Categories:**
- **Form Patterns** - Validation, help text, and user guidance
- **Navigation** - Responsive menus and icon-based navigation
- **Data Display** - Tables, lists, and status indicators
- **Interactive Elements** - Buttons, actions, and user feedback
- **Layout Components** - Cards, panels, and content organization

---

## 💡 Usage Examples

### Navigation with Icons and Badges
```html
<sog-navbar [items]="navItems">
  <div slot="brand">
    <sog-icon name="home" size="lg" color="primary"></sog-icon>
    My App
  </div>
  <div slot="actions">
    <sog-badge [content]="notificationCount" color="danger">
      <sog-icon name="bell"></sog-icon>
    </sog-badge>
  </div>
</sog-navbar>
```

### Interactive Content Panels
```html
<sog-accordion [items]="accordionItems">
  <div slot="content-panel1">
    <sog-progress type="circular" [value]="85" showLabel="true"></sog-progress>
    <p>Project completion status</p>
  </div>
</sog-accordion>
```

### Form with Validation
```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <sog-input 
    formControlName="name" 
    placeholder="Full Name"
    [required]="true">
  </sog-input>
  
  <sog-input 
    formControlName="email" 
    placeholder="Email Address"
    type="email"
    [required]="true">
  </sog-input>
  
  <sog-button 
    type="submit" 
    variant="primary"
    [disabled]="userForm.invalid">
    Create Account
  </sog-button>
</form>
```

### Tabbed Interface with Rich Content
```html
<sog-tabs [tabs]="tabItems">
  <div slot="overview">
    <sog-chip label="New Feature" color="success" [clickable]="true"></sog-chip>
  </div>
  <div slot="settings">
    <sog-tooltip text="Save your preferences" position="top">
      <sog-button variant="primary">Save Settings</sog-button>
    </sog-tooltip>
  </div>
</sog-tabs>
```

---

## 🧪 Development

### Prerequisites

- Node.js 18+ 
- Angular CLI 17+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/arm02/sognatore-workspace.git
cd sognatore-workspace

# Install dependencies
npm install

# Start development server
ng serve

# Open http://localhost:4200
```

### Build Library

```bash
# Build the component library
ng build sognatore-ui

# Build documentation site
ng build sognatore-docs
```

### Testing

```bash
# Run unit tests
ng test

# Run e2e tests
ng e2e

# Check test coverage
ng test --code-coverage
```

---

## 🎨 Theming

Customize components with CSS custom properties:

```css
:root {
  /* Primary colors */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;
  
  /* Gray scale */
  --gray-50: #f9fafb;
  --gray-500: #6b7280;
  --gray-900: #111827;
  
  /* Component specific */
  --button-border-radius: 6px;
  --input-border-radius: 4px;
  --card-border-radius: 8px;
}
```

### Component Variants
- **`basic`** - Clean, minimalist design (default)
- **`outline`** - Outlined borders for buttons and inputs
- **`ghost`** - Transparent background with hover effects

### Color System
- **`primary`** - Main brand color (#3498db)
- **`secondary`** - Secondary color (#6c757d)
- **`success`** - Success state (#27ae60)
- **`danger`** - Error/danger state (#e74c3c)
- **`warning`** - Warning state (#f39c12)
- **`info`** - Information state (#17a2b8)

### Size Options
- **`small`** - Compact size for dense layouts
- **`medium`** - Default size for most use cases
- **`large`** - Prominent size for important actions

### Dark Mode Support

```css
[data-theme="dark"] {
  --gray-50: #111827;
  --gray-900: #f9fafb;
  /* Override other variables */
}
```

---

## 🔧 Form Integration

### Reactive Forms Support

```typescript
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    notifications: new FormControl(true)
  });
}
```

---

## 📱 Responsive Design

All components are mobile-first and responsive:

```html
<!-- Responsive navbar -->
<sog-navbar [items]="navItems">
  <!-- Automatically adapts to mobile screens -->
</sog-navbar>

<!-- Responsive progress -->
<sog-progress 
  type="linear" 
  [value]="progress"
  size="small"
  class="mobile-friendly">
</sog-progress>

<!-- Adaptive tooltips -->
<sog-tooltip 
  text="Adjusts position on mobile" 
  position="top"
  trigger="click">
  <sog-button>Mobile Friendly</sog-button>
</sog-tooltip>
```

---

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive components support Tab, Enter, Space, Arrow keys
- **ARIA Labels**: Proper `aria-label`, `aria-labelledby`, `aria-describedby` attributes
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Readers**: Semantic HTML and proper role attributes
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects `prefers-reduced-motion` settings

---

## 📖 Documentation

- **🏠 [Live Documentation](http://localhost:4200)** - Interactive component demos
- **🎮 [Playground](http://localhost:4200/components/tooltip/playground)** - Real-time configuration
- **💡 [Examples](http://localhost:4200/components/tooltip/examples)** - Real-world patterns
- **🚀 [Getting Started](http://localhost:4200/getting-started)** - Installation and setup guide

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Add tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting

---

## 📋 Roadmap

### Upcoming Components
- **DataTable** - Advanced data grid with sorting and filtering
- **DatePicker** - Calendar component with range selection
- **Dropdown** - Flexible dropdown menus and selects
- **Slider** - Range and value sliders
- **Toast** - Notification system
- **Pagination** - Data pagination controls

### Planned Features
- **🎨 Theme Builder** - Visual theme customization tool
- **📱 Mobile Components** - Touch-optimized components
- **🌐 i18n Support** - Internationalization and localization
- **🔧 CLI Tools** - Component generation and scaffolding

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Support

- **🐛 [Report Issues](https://github.com/arm02/sognatore-workspace/issues)** - Bug reports and feature requests
- **💬 [Discussions](https://github.com/arm02/sognatore-workspace/discussions)** - Community support and ideas
- **📧 [Contact](mailto:adrianmilano.id@gmail.com)** - Direct team contact

---

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Contributors and community members
- Design inspiration from modern UI libraries

---

**⭐ Star us on GitHub if you find Sognatore UI helpful!**

[🔗 GitHub Repository](https://github.com/arm02/sognatore-workspace)