import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="code-example">
      <!-- Preview - only show if there's content -->
      <div class="example-preview" [ngClass]="{ 'dark': darkPreview }" *ngIf="hasPreviewContent">
        <div class="preview-content">
          <ng-content></ng-content>
        </div>
        
        <div class="preview-controls" *ngIf="showControls">
          <button 
            class="control-btn"
            [class.active]="!darkPreview"
            (click)="darkPreview = false"
            title="Light theme"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.071 2.929l-1.414 1.414M4.343 11.657l-1.414 1.414M13.071 13.071l-1.414-1.414M4.343 4.343L2.929 2.929" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
          <button 
            class="control-btn"
            [class.active]="darkPreview"
            (click)="darkPreview = true"
            title="Dark theme"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 9a5 5 0 11-9-5 5 5 0 005 5 5 5 0 009 5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Code Tabs -->
      <div class="code-tabs" *ngIf="code || htmlCode || scssCode">
        <div class="tab-buttons">
          <button 
            *ngIf="code"
            class="tab-btn"
            [class.active]="activeTab === 'typescript'"
            (click)="setActiveTab('typescript')"
          >
            TypeScript
          </button>
          <button 
            *ngIf="htmlCode"
            class="tab-btn"
            [class.active]="activeTab === 'html'"
            (click)="setActiveTab('html')"
          >
            Template
          </button>
          <button 
            *ngIf="scssCode"
            class="tab-btn"
            [class.active]="activeTab === 'scss'"
            (click)="setActiveTab('scss')"
          >
            Styles
          </button>
        </div>
        
        <div class="tab-content">
          <!-- TypeScript Tab -->
          <div *ngIf="activeTab === 'typescript' && code" class="code-block">
            <div class="code-header">
              <span class="language-label">TypeScript</span>
              <button class="copy-btn" (click)="copyCode(code)" title="Copy code">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H5.5" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M6.5 1H9.5C10.0523 1 10.5 1.44772 10.5 2V3C10.5 3.55228 10.0523 4 9.5 4H6.5C5.94772 4 5.5 3.55228 5.5 3V2C5.5 1.44772 5.94772 1 6.5 1Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
            <pre #codeBlock><code [innerHTML]="highlightedCode"></code></pre>
          </div>
          
          <!-- HTML Tab -->
          <div *ngIf="activeTab === 'html' && htmlCode" class="code-block">
            <div class="code-header">
              <span class="language-label">HTML</span>
              <button class="copy-btn" (click)="copyCode(htmlCode)" title="Copy code">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H5.5" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M6.5 1H9.5C10.0523 1 10.5 1.44772 10.5 2V3C10.5 3.55228 10.0523 4 9.5 4H6.5C5.94772 4 5.5 3.55228 5.5 3V2C5.5 1.44772 5.94772 1 6.5 1Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
            <pre><code [innerHTML]="highlightedHtml"></code></pre>
          </div>
          
          <!-- SCSS Tab -->
          <div *ngIf="activeTab === 'scss' && scssCode" class="code-block">
            <div class="code-header">
              <span class="language-label">SCSS</span>
              <button class="copy-btn" (click)="copyCode(scssCode)" title="Copy code">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H5.5" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M6.5 1H9.5C10.0523 1 10.5 1.44772 10.5 2V3C10.5 3.55228 10.0523 4 9.5 4H6.5C5.94772 4 5.5 3.55228 5.5 3V2C5.5 1.44772 5.94772 1 6.5 1Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
            <pre><code [innerHTML]="highlightedScss"></code></pre>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit, AfterViewInit {
  @Input() code: string = '';
  @Input() htmlCode: string = '';
  @Input() scssCode: string = '';
  @Input() showControls: boolean = true;
  @Input() title: string = '';
  @Input() hasPreviewContent: boolean = true;
  
  @ViewChild('codeBlock') codeBlock?: ElementRef;
  
  activeTab: 'typescript' | 'html' | 'scss' = 'typescript';
  darkPreview = false;
  highlightedCode = '';
  highlightedHtml = '';
  highlightedScss = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Set initial tab
    if (this.code) {
      this.activeTab = 'typescript';
    } else if (this.htmlCode) {
      this.activeTab = 'html';
    } else if (this.scssCode) {
      this.activeTab = 'scss';
    }
    
    // Initialize highlighted code immediately
    this.highlightCode();
  }

  ngAfterViewInit() {
    // Ensure change detection runs after view init
    this.cdr.detectChanges();
  }

  setActiveTab(tab: 'typescript' | 'html' | 'scss') {
    this.activeTab = tab;
    setTimeout(() => {
      this.highlightCode();
      this.cdr.detectChanges();
    }, 0);
  }

  private highlightCode() {
    // Simple syntax highlighting (you can integrate with Prism.js here)
    if (this.code) {
      this.highlightedCode = this.escapeHtml(this.code);
    }
    if (this.htmlCode) {
      this.highlightedHtml = this.escapeHtml(this.htmlCode);
    }
    if (this.scssCode) {
      this.highlightedScss = this.escapeHtml(this.scssCode);
    }
  }

  private escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      // TODO: Show toast notification
      console.log('Code copied to clipboard');
    });
  }
}