import { 
  Injectable, 
  ComponentRef, 
  ViewContainerRef, 
  Injector, 
  createComponent,
  EnvironmentInjector,
  Type,
  inject,
  ApplicationRef
} from '@angular/core';
import { SogDialogRef } from './dialog-ref';
import { SogDialogConfig } from './dialog-config.interface';
import { SogDialogContainer } from './dialog-container.component';

@Injectable({
  providedIn: 'root'
})
export class SogDialog {
  private openDialogs = new Set<SogDialogRef>();
  private environmentInjector = inject(EnvironmentInjector);
  private appRef = inject(ApplicationRef, { optional: true });
  private recentDialogs = new Map<string, number>();

  /**
   * Opens a dialog containing the given component
   */
  open<T, D = any, R = any>(
    component: Type<T>,
    config?: SogDialogConfig<D>
  ): SogDialogRef<T, R> {
    
    // Prevent duplicate dialogs in development mode (Angular strict mode)
    const componentKey = component.name + JSON.stringify(config?.data || {});
    const now = Date.now();
    const lastOpenTime = this.recentDialogs.get(componentKey);
    
    if (lastOpenTime && (now - lastOpenTime) < 500) {
      // Return a dummy dialog ref to prevent duplicate dialogs
      return {
        componentInstance: null,
        afterClosed: () => ({ subscribe: () => {} }),
        close: () => {},
        id: 'dummy-' + now
      } as any;
    }
    
    this.recentDialogs.set(componentKey, now);
    
    const finalConfig: SogDialogConfig<D> = {
      hasBackdrop: true,
      disableClose: false,
      closeOnNavigation: true,
      autoFocus: true,
      restoreFocus: true,
      role: 'dialog',
      size: 'medium',
      ...config
    };

    // Create unique ID for dialog
    const id = finalConfig.id || `sog-dialog-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    finalConfig.id = id;

    // Create dialog container
    const containerRef = this.createDialogContainer(finalConfig);
    
    // Create dialog ref
    const dialogRef = new SogDialogRef<T, R>(containerRef, id, finalConfig.disableClose || false);
    
    // Create dialog content component
    const contentRef = this.createDialogContent<T>(component, containerRef, dialogRef, finalConfig);
    
    // Set component instance on dialog ref
    dialogRef.componentInstance = contentRef.instance;
    
    // Track open dialog
    this.openDialogs.add(dialogRef);
    
    // Handle dialog close
    dialogRef.afterClosed().subscribe(() => {
      this.openDialogs.delete(dialogRef);
      
      // Clean up recent dialogs tracking
      const componentKey = component.name + JSON.stringify(finalConfig.data || {});
      this.recentDialogs.delete(componentKey);
      
      // Restore focus to previously focused element if configured
      if (finalConfig.restoreFocus) {
        this.restoreFocus();
      }
    });
    
    // Attach to DOM
    this.attachDialogContainer(containerRef);
    
    // Trigger afterOpened
    setTimeout(() => dialogRef._opened(), 0);
    
    return dialogRef;
  }

  /**
   * Closes all open dialogs
   */
  closeAll(): void {
    this.openDialogs.forEach(dialog => dialog.close());
  }

  /**
   * Gets an array of all open dialogs
   */
  getOpenDialogs(): SogDialogRef[] {
    return Array.from(this.openDialogs);
  }

  /**
   * Finds an open dialog by ID
   */
  getDialogById(id: string): SogDialogRef | undefined {
    return Array.from(this.openDialogs).find(dialog => dialog.id === id);
  }

  private createDialogContainer(config: SogDialogConfig): ComponentRef<SogDialogContainer> {
    const injector = Injector.create({
      providers: [
        { provide: 'config', useValue: config },
        { provide: 'dialogRef', useValue: null } // Will be set after dialogRef creation
      ]
    });

    return createComponent(SogDialogContainer, {
      environmentInjector: this.environmentInjector,
      elementInjector: injector
    });
  }

  private createDialogContent<T>(
    component: Type<T>,
    containerRef: ComponentRef<SogDialogContainer>,
    dialogRef: SogDialogRef,
    config: SogDialogConfig
  ): ComponentRef<T> {
    const injector = Injector.create({
      providers: [
        { provide: SogDialogRef, useValue: dialogRef },
        { provide: 'dialogData', useValue: config.data },
        { provide: 'config', useValue: config }
      ]
    });

    // Create content using ViewContainerRef instead of hostElement
    const contentRef = containerRef.instance.contentContainer.createComponent(component, {
      environmentInjector: this.environmentInjector,
      injector: injector
    });

    // Update the dialogRef in container's injector
    (containerRef.instance as any).dialogRef = dialogRef;

    return contentRef;
  }

  private attachDialogContainer(containerRef: ComponentRef<SogDialogContainer>): void {
    // Attach to document body
    document.body.appendChild(containerRef.location.nativeElement);
    
    // Attach to Angular's change detection if app ref is available
    if (this.appRef) {
      this.appRef.attachView(containerRef.hostView);
    }
  }

  private restoreFocus(): void {
    // Simple focus restoration - in a real implementation, you'd track the previously focused element
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement.blur) {
      activeElement.blur();
    }
  }
}

// Injection token for dialog data
export const SOG_DIALOG_DATA = 'dialogData';