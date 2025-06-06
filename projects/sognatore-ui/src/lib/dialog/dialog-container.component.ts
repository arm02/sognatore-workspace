import { 
  Component, 
  ComponentRef, 
  ViewChild, 
  ViewContainerRef, 
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy,
  Inject,
  Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SogDialogRef } from './dialog-ref';
import { SogDialogConfig } from './dialog-config.interface';

@Component({
  selector: 'sog-dialog-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="sog-dialog-overlay" 
      [class.has-backdrop]="config.hasBackdrop !== false"
      [ngClass]="config.backdropClass"
      (click)="onBackdropClick($event)"
    >
      <div 
        class="sog-dialog-container" 
        [ngClass]="getDialogClasses()"
        [style.width]="config.width"
        [style.height]="config.height"
        [style.min-width]="config.minWidth"
        [style.min-height]="config.minHeight"
        [style.max-width]="config.maxWidth"
        [style.max-height]="config.maxHeight"
        [style.top]="config.position?.top"
        [style.bottom]="config.position?.bottom"
        [style.left]="config.position?.left"
        [style.right]="config.position?.right"
        [attr.role]="config.role || 'dialog'"
        [attr.aria-label]="config.ariaLabel"
        [attr.aria-labelledby]="config.ariaLabelledBy"
        [attr.aria-describedby]="config.ariaDescribedBy"
        [attr.id]="config.id"
        (click)="$event.stopPropagation()"
        #dialogContainer
      >
        <ng-container #contentContainer></ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .sog-dialog-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        
        &.has-backdrop {
          background: rgba(0, 0, 0, 0.5);
        }
        
        animation: fadeIn 0.3s ease;
      }
      
      .sog-dialog-container {
        position: relative;
        background: white;
        border-radius: 8px;
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                    0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12);
        max-height: 90vh;
        overflow: auto;
        outline: none;
        animation: slideIn 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        
        &.size-small {
          width: 300px;
          max-width: 90vw;
        }
        
        &.size-medium {
          width: 500px;
          max-width: 90vw;
        }
        
        &.size-large {
          width: 800px;
          max-width: 90vw;
        }
        
        &.size-fullscreen {
          width: 100%;
          height: 100%;
          max-width: 100vw;
          max-height: 100vh;
          border-radius: 0;
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideIn {
        from { 
          opacity: 0;
          transform: scale(0.9) translateY(-10px);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
    `,
  ],
  host: {
    'tabindex': '-1'
  }
})
export class SogDialogContainer implements OnInit, OnDestroy {
  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  contentContainer!: ViewContainerRef;
  
  @ViewChild('dialogContainer', { static: true })
  dialogElement!: ElementRef<HTMLElement>;

  constructor(
    @Inject('config') public config: SogDialogConfig,
    @Inject('dialogRef') public dialogRef: SogDialogRef,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.focusDialog();
    
    // Prevent body scroll when dialog is open
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    // Restore body scroll
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (!this.config.disableClose && this.config.closeOnNavigation !== false) {
      this.dialogRef.close();
    }
  }

  onBackdropClick(event: MouseEvent) {
    console.log('Backdrop click detected', event.target, event.currentTarget);
    // Only close if the click was directly on the backdrop, not on child elements
    if (event.target === event.currentTarget && !this.config.disableClose) {
      console.log('Closing dialog via backdrop click');
      this.dialogRef.close();
    }
  }

  getDialogClasses(): string[] {
    const classes: string[] = [];
    
    if (this.config.size) {
      classes.push(`size-${this.config.size}`);
    }
    
    if (this.config.panelClass) {
      if (Array.isArray(this.config.panelClass)) {
        classes.push(...this.config.panelClass);
      } else {
        classes.push(this.config.panelClass);
      }
    }
    
    return classes;
  }

  private focusDialog() {
    if (this.config.autoFocus !== false) {
      // Focus the dialog container by default
      setTimeout(() => {
        if (this.config.autoFocus === 'first-tabbable') {
          this.focusFirstTabbableElement();
        } else if (this.config.autoFocus === 'first-heading') {
          this.focusFirstHeading();
        } else {
          this.dialogElement.nativeElement.focus();
        }
      }, 0);
    }
  }

  private focusFirstTabbableElement() {
    const tabbableElements = this.dialogElement.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (tabbableElements.length > 0) {
      (tabbableElements[0] as HTMLElement).focus();
    } else {
      this.dialogElement.nativeElement.focus();
    }
  }

  private focusFirstHeading() {
    const heading = this.dialogElement.nativeElement.querySelector('h1, h2, h3, h4, h5, h6');
    
    if (heading) {
      (heading as HTMLElement).focus();
    } else {
      this.focusFirstTabbableElement();
    }
  }
}