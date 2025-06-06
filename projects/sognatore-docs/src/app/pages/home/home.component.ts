import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">18 Components</span>
            <span class="badge-dot"></span>
            <span class="badge-text">Angular 17+</span>
          </div>
          
          <h1 class="hero-title">
            Build beautiful UIs with
            <span class="gradient-text">Sognatore UI</span>
          </h1>
          
          <p class="hero-description">
            A modern Angular component library with Material Design principles. 
            18 production-ready components for building beautiful user interfaces.
          </p>
          
          <div class="hero-actions">
            <a routerLink="/getting-started" class="btn btn-primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            
            <a routerLink="/components" class="btn btn-secondary">
              View Components
            </a>
          </div>
          
          <!-- Installation Command -->
          <div class="installation-snippet">
            <div class="snippet-header">
              <span class="snippet-title">Quick Install</span>
              <button class="copy-btn" (click)="copyInstallCommand()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H5.5" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M6.5 1H9.5C10.0523 1 10.5 1.44772 10.5 2V3C10.5 3.55228 10.0523 4 9.5 4H6.5C5.94772 4 5.5 3.55228 5.5 3V2C5.5 1.44772 5.94772 1 6.5 1Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
            <code class="snippet-code">npm install {{ '@' }}sognatore/ui</code>
          </div>
        </div>
        
        <!-- Hero Visual -->
        <div class="hero-visual">
          <div class="component-preview">
            <div class="preview-card">
              <div class="card-header">
                <div class="card-title">Component Preview</div>
                <div class="card-badge">Live</div>
              </div>
              <div class="card-content">
                <div class="preview-button primary">Primary Button</div>
                <div class="preview-button secondary">Secondary</div>
                <div class="preview-input">
                  <div class="input-placeholder">Enter your email...</div>
                </div>
                <div class="preview-progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <div class="section-header">
            <h2>Why Choose Sognatore UI?</h2>
            <p>Built with modern development practices and designed for productivity</p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Built with Angular standalone components for optimal performance and tree-shaking.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Material Design</h3>
              <p>Follows Material Design principles with multiple variants and consistent theming.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Accessible</h3>
              <p>WCAG compliant with proper ARIA labels, keyboard navigation, and screen reader support.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>TypeScript</h3>
              <p>Fully typed with comprehensive interfaces and excellent IntelliSense support.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Modular</h3>
              <p>Import only what you need. Each component is independently packaged and tree-shakeable.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Production Ready</h3>
              <p>Thoroughly tested components used in production applications worldwide.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Component Categories -->
      <section class="component-categories">
        <div class="container">
          <div class="section-header">
            <h2>Component Library</h2>
            <p>18 carefully crafted components organized by category</p>
          </div>
          
          <div class="categories-grid">
            <div class="category-card">
              <div class="category-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 14H24V18H8V14ZM8 20H20V24H8V20ZM8 8H24V12H8V8Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Form Components</h3>
              <p>Input fields, buttons, selectors, and form controls</p>
              <div class="component-list">
                <span>Button</span>
                <span>Input</span>
                <span>Select</span>
                <span>Checkbox</span>
                <span>Radio</span>
                <span>Datepicker</span>
              </div>
              <a routerLink="/components/button" class="category-link">
                Explore Forms
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div class="category-card">
              <div class="category-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 6H28V10H4V6ZM4 14H28V26H4V14Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Layout Components</h3>
              <p>Structure and organize your application content</p>
              <div class="component-list">
                <span>Card</span>
                <span>Modal</span>
                <span>Navbar</span>
                <span>Tabs</span>
                <span>Accordion</span>
              </div>
              <a routerLink="/components/card" class="category-link">
                Explore Layout
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div class="category-card">
              <div class="category-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="8" r="4" fill="currentColor"/>
                  <path d="M8 20C8 16 11.58 12 16 12C20.42 12 24 16 24 20V24H8V20Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>UI Components</h3>
              <p>Icons, badges, progress indicators, and visual elements</p>
              <div class="component-list">
                <span>Icon</span>
                <span>Badge</span>
                <span>Progress</span>
                <span>Chip</span>
                <span>Tooltip</span>
              </div>
              <a routerLink="/components/icon" class="category-link">
                Explore UI
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Quick Start -->
      <section class="quick-start">
        <div class="container">
          <div class="quick-start-content">
            <div class="quick-start-text">
              <h2>Ready to get started?</h2>
              <p>Install Sognatore UI and start building beautiful interfaces in minutes.</p>
              
              <div class="quick-start-actions">
                <a routerLink="/getting-started" class="btn btn-primary">
                  View Installation Guide
                </a>
                <a routerLink="/playground" class="btn btn-secondary">
                  Try in Playground
                </a>
              </div>
            </div>
            
            <div class="quick-start-code">
              <div class="code-block">
                <div class="code-header">
                  <span class="filename">app.component.ts</span>
                </div>
                <div class="code-content">
                  <pre class="desktop-code"><code class="language-typescript">import {{ '{' }} SognatoreButton, SognatoreCard {{ '}' }} from '{{ '@' }}sognatore/ui';

{{ '@' }}Component({{ '{' }}
  imports: [SognatoreButton, SognatoreCard],
  template: \`
    &lt;sog-card variant="elevated"&gt;
      &lt;h3&gt;Welcome to Sognatore UI&lt;/h3&gt;
      &lt;p&gt;Build beautiful interfaces&lt;/p&gt;
      &lt;sog-button appearance="primary"&gt;
        Get Started
      &lt;/sog-button&gt;
    &lt;/sog-card&gt;
  \`
{{ '}' }})</code></pre>
                  <pre class="mobile-code"><code class="language-typescript">import {{ '{' }} SogButton {{ '}' }} 
from '{{ '@' }}sognatore/ui';

{{ '@' }}Component({{ '{' }}
  imports: [SogButton],
  template: \`
    &lt;sog-button&gt;
      Get Started
    &lt;/sog-button&gt;
  \`
{{ '}' }})</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  copyInstallCommand() {
    navigator.clipboard.writeText('npm install @sognatore/ui');
    // TODO: Show toast notification
    console.log('Install command copied to clipboard');
  }
}