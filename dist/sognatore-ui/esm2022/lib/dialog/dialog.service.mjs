import { Injectable, Injector, createComponent, EnvironmentInjector, inject, ApplicationRef } from '@angular/core';
import { SogDialogRef } from './dialog-ref';
import { SogDialogContainer } from './dialog-container.component';
import * as i0 from "@angular/core";
export class SogDialog {
    constructor() {
        this.openDialogs = new Set();
        this.environmentInjector = inject(EnvironmentInjector);
        this.appRef = inject(ApplicationRef, { optional: true });
        this.recentDialogs = new Map();
    }
    /**
     * Opens a dialog containing the given component
     */
    open(component, config) {
        // Prevent duplicate dialogs in development mode (Angular strict mode)
        const componentKey = component.name + JSON.stringify(config?.data || {});
        const now = Date.now();
        const lastOpenTime = this.recentDialogs.get(componentKey);
        if (lastOpenTime && (now - lastOpenTime) < 500) {
            // Return a dummy dialog ref to prevent duplicate dialogs
            return {
                componentInstance: null,
                afterClosed: () => ({ subscribe: () => { } }),
                close: () => { },
                id: 'dummy-' + now
            };
        }
        this.recentDialogs.set(componentKey, now);
        const finalConfig = {
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
        const dialogRef = new SogDialogRef(containerRef, id, finalConfig.disableClose || false);
        // Create dialog content component
        const contentRef = this.createDialogContent(component, containerRef, dialogRef, finalConfig);
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
    closeAll() {
        this.openDialogs.forEach(dialog => dialog.close());
    }
    /**
     * Gets an array of all open dialogs
     */
    getOpenDialogs() {
        return Array.from(this.openDialogs);
    }
    /**
     * Finds an open dialog by ID
     */
    getDialogById(id) {
        return Array.from(this.openDialogs).find(dialog => dialog.id === id);
    }
    createDialogContainer(config) {
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
    createDialogContent(component, containerRef, dialogRef, config) {
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
        containerRef.instance.dialogRef = dialogRef;
        return contentRef;
    }
    attachDialogContainer(containerRef) {
        // Attach to document body
        document.body.appendChild(containerRef.location.nativeElement);
        // Attach to Angular's change detection if app ref is available
        if (this.appRef) {
            this.appRef.attachView(containerRef.hostView);
        }
    }
    restoreFocus() {
        // Simple focus restoration - in a real implementation, you'd track the previously focused element
        const activeElement = document.activeElement;
        if (activeElement && activeElement.blur) {
            activeElement.blur();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogDialog, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogDialog, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogDialog, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
// Injection token for dialog data
export const SOG_DIALOG_DATA = 'dialogData';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2duYXRvcmUtdWkvc3JjL2xpYi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFHVixRQUFRLEVBQ1IsZUFBZSxFQUNmLG1CQUFtQixFQUVuQixNQUFNLEVBQ04sY0FBYyxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBS2xFLE1BQU0sT0FBTyxTQUFTO0lBSHRCO1FBSVUsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBZ0IsQ0FBQztRQUN0Qyx3QkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxXQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0E4Sm5EO0lBNUpDOztPQUVHO0lBQ0gsSUFBSSxDQUNGLFNBQWtCLEVBQ2xCLE1BQTJCO1FBRzNCLHNFQUFzRTtRQUN0RSxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN6RSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUQsSUFBSSxZQUFZLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7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QUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUU7WUFDbkYsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7UUFFSCwrQ0FBK0M7UUFDOUMsWUFBWSxDQUFDLFFBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVyRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8scUJBQXFCLENBQUMsWUFBOEM7UUFDMUUsMEJBQTBCO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0QsK0RBQStEO1FBQy9ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLFlBQVk7UUFDbEIsa0dBQWtHO1FBQ2xHLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUE0QixDQUFDO1FBQzVELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7K0dBaktVLFNBQVM7bUhBQVQsU0FBUyxjQUZSLE1BQU07OzRGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQXFLRCxrQ0FBa0M7QUFDbEMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBJbmplY3RhYmxlLCBcbiAgQ29tcG9uZW50UmVmLCBcbiAgVmlld0NvbnRhaW5lclJlZiwgXG4gIEluamVjdG9yLCBcbiAgY3JlYXRlQ29tcG9uZW50LFxuICBFbnZpcm9ubWVudEluamVjdG9yLFxuICBUeXBlLFxuICBpbmplY3QsXG4gIEFwcGxpY2F0aW9uUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29nRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcbmltcG9ydCB7IFNvZ0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU29nRGlhbG9nQ29udGFpbmVyIH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNvZ0RpYWxvZyB7XG4gIHByaXZhdGUgb3BlbkRpYWxvZ3MgPSBuZXcgU2V0PFNvZ0RpYWxvZ1JlZj4oKTtcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudEluamVjdG9yID0gaW5qZWN0KEVudmlyb25tZW50SW5qZWN0b3IpO1xuICBwcml2YXRlIGFwcFJlZiA9IGluamVjdChBcHBsaWNhdGlvblJlZiwgeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgcHJpdmF0ZSByZWNlbnREaWFsb2dzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuICAvKipcbiAgICogT3BlbnMgYSBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50XG4gICAqL1xuICBvcGVuPFQsIEQgPSBhbnksIFIgPSBhbnk+KFxuICAgIGNvbXBvbmVudDogVHlwZTxUPixcbiAgICBjb25maWc/OiBTb2dEaWFsb2dDb25maWc8RD5cbiAgKTogU29nRGlhbG9nUmVmPFQsIFI+IHtcbiAgICBcbiAgICAvLyBQcmV2ZW50IGR1cGxpY2F0ZSBkaWFsb2dzIGluIGRldmVsb3BtZW50IG1vZGUgKEFuZ3VsYXIgc3RyaWN0IG1vZGUpXG4gICAgY29uc3QgY29tcG9uZW50S2V5ID0gY29tcG9uZW50Lm5hbWUgKyBKU09OLnN0cmluZ2lmeShjb25maWc/LmRhdGEgfHwge30pO1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgbGFzdE9wZW5UaW1lID0gdGhpcy5yZWNlbnREaWFsb2dzLmdldChjb21wb25lbnRLZXkpO1xuICAgIFxuICAgIGlmIChsYXN0T3BlblRpbWUgJiYgKG5vdyAtIGxhc3RPcGVuVGltZSkgPCA1MDApIHtcbiAgICAgIC8vIFJldHVybiBhIGR1bW15IGRpYWxvZyByZWYgdG8gcHJldmVudCBkdXBsaWNhdGUgZGlhbG9nc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2U6IG51bGwsXG4gICAgICAgIGFmdGVyQ2xvc2VkOiAoKSA9PiAoeyBzdWJzY3JpYmU6ICgpID0+IHt9IH0pLFxuICAgICAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgICAgIGlkOiAnZHVtbXktJyArIG5vd1xuICAgICAgfSBhcyBhbnk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMucmVjZW50RGlhbG9ncy5zZXQoY29tcG9uZW50S2V5LCBub3cpO1xuICAgIFxuICAgIGNvbnN0IGZpbmFsQ29uZmlnOiBTb2dEaWFsb2dDb25maWc8RD4gPSB7XG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXG4gICAgICBjbG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICAgIHJlc3RvcmVGb2N1czogdHJ1ZSxcbiAgICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgICAuLi5jb25maWdcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIHVuaXF1ZSBJRCBmb3IgZGlhbG9nXG4gICAgY29uc3QgaWQgPSBmaW5hbENvbmZpZy5pZCB8fCBgc29nLWRpYWxvZy0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfWA7XG4gICAgZmluYWxDb25maWcuaWQgPSBpZDtcblxuICAgIC8vIENyZWF0ZSBkaWFsb2cgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdGhpcy5jcmVhdGVEaWFsb2dDb250YWluZXIoZmluYWxDb25maWcpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBkaWFsb2cgcmVmXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IFNvZ0RpYWxvZ1JlZjxULCBSPihjb250YWluZXJSZWYsIGlkLCBmaW5hbENvbmZpZy5kaXNhYmxlQ2xvc2UgfHwgZmFsc2UpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBkaWFsb2cgY29udGVudCBjb21wb25lbnRcbiAgICBjb25zdCBjb250ZW50UmVmID0gdGhpcy5jcmVhdGVEaWFsb2dDb250ZW50PFQ+KGNvbXBvbmVudCwgY29udGFpbmVyUmVmLCBkaWFsb2dSZWYsIGZpbmFsQ29uZmlnKTtcbiAgICBcbiAgICAvLyBTZXQgY29tcG9uZW50IGluc3RhbmNlIG9uIGRpYWxvZyByZWZcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UgPSBjb250ZW50UmVmLmluc3RhbmNlO1xuICAgIFxuICAgIC8vIFRyYWNrIG9wZW4gZGlhbG9nXG4gICAgdGhpcy5vcGVuRGlhbG9ncy5hZGQoZGlhbG9nUmVmKTtcbiAgICBcbiAgICAvLyBIYW5kbGUgZGlhbG9nIGNsb3NlXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub3BlbkRpYWxvZ3MuZGVsZXRlKGRpYWxvZ1JlZik7XG4gICAgICBcbiAgICAgIC8vIENsZWFuIHVwIHJlY2VudCBkaWFsb2dzIHRyYWNraW5nXG4gICAgICBjb25zdCBjb21wb25lbnRLZXkgPSBjb21wb25lbnQubmFtZSArIEpTT04uc3RyaW5naWZ5KGZpbmFsQ29uZmlnLmRhdGEgfHwge30pO1xuICAgICAgdGhpcy5yZWNlbnREaWFsb2dzLmRlbGV0ZShjb21wb25lbnRLZXkpO1xuICAgICAgXG4gICAgICAvLyBSZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IGlmIGNvbmZpZ3VyZWRcbiAgICAgIGlmIChmaW5hbENvbmZpZy5yZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvLyBBdHRhY2ggdG8gRE9NXG4gICAgdGhpcy5hdHRhY2hEaWFsb2dDb250YWluZXIoY29udGFpbmVyUmVmKTtcbiAgICBcbiAgICAvLyBUcmlnZ2VyIGFmdGVyT3BlbmVkXG4gICAgc2V0VGltZW91dCgoKSA9PiBkaWFsb2dSZWYuX29wZW5lZCgpLCAwKTtcbiAgICBcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgb3BlbiBkaWFsb2dzXG4gICAqL1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5EaWFsb2dzLmZvckVhY2goZGlhbG9nID0+IGRpYWxvZy5jbG9zZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGFycmF5IG9mIGFsbCBvcGVuIGRpYWxvZ3NcbiAgICovXG4gIGdldE9wZW5EaWFsb2dzKCk6IFNvZ0RpYWxvZ1JlZltdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm9wZW5EaWFsb2dzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbiBvcGVuIGRpYWxvZyBieSBJRFxuICAgKi9cbiAgZ2V0RGlhbG9nQnlJZChpZDogc3RyaW5nKTogU29nRGlhbG9nUmVmIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm9wZW5EaWFsb2dzKS5maW5kKGRpYWxvZyA9PiBkaWFsb2cuaWQgPT09IGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGlhbG9nQ29udGFpbmVyKGNvbmZpZzogU29nRGlhbG9nQ29uZmlnKTogQ29tcG9uZW50UmVmPFNvZ0RpYWxvZ0NvbnRhaW5lcj4ge1xuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIHsgcHJvdmlkZTogJ2RpYWxvZ1JlZicsIHVzZVZhbHVlOiBudWxsIH0gLy8gV2lsbCBiZSBzZXQgYWZ0ZXIgZGlhbG9nUmVmIGNyZWF0aW9uXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlQ29tcG9uZW50KFNvZ0RpYWxvZ0NvbnRhaW5lciwge1xuICAgICAgZW52aXJvbm1lbnRJbmplY3RvcjogdGhpcy5lbnZpcm9ubWVudEluamVjdG9yLFxuICAgICAgZWxlbWVudEluamVjdG9yOiBpbmplY3RvclxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEaWFsb2dDb250ZW50PFQ+KFxuICAgIGNvbXBvbmVudDogVHlwZTxUPixcbiAgICBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxTb2dEaWFsb2dDb250YWluZXI+LFxuICAgIGRpYWxvZ1JlZjogU29nRGlhbG9nUmVmLFxuICAgIGNvbmZpZzogU29nRGlhbG9nQ29uZmlnXG4gICk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU29nRGlhbG9nUmVmLCB1c2VWYWx1ZTogZGlhbG9nUmVmIH0sXG4gICAgICAgIHsgcHJvdmlkZTogJ2RpYWxvZ0RhdGEnLCB1c2VWYWx1ZTogY29uZmlnLmRhdGEgfSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgY29udGVudCB1c2luZyBWaWV3Q29udGFpbmVyUmVmIGluc3RlYWQgb2YgaG9zdEVsZW1lbnRcbiAgICBjb25zdCBjb250ZW50UmVmID0gY29udGFpbmVyUmVmLmluc3RhbmNlLmNvbnRlbnRDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCwge1xuICAgICAgZW52aXJvbm1lbnRJbmplY3RvcjogdGhpcy5lbnZpcm9ubWVudEluamVjdG9yLFxuICAgICAgaW5qZWN0b3I6IGluamVjdG9yXG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGRpYWxvZ1JlZiBpbiBjb250YWluZXIncyBpbmplY3RvclxuICAgIChjb250YWluZXJSZWYuaW5zdGFuY2UgYXMgYW55KS5kaWFsb2dSZWYgPSBkaWFsb2dSZWY7XG5cbiAgICByZXR1cm4gY29udGVudFJlZjtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoRGlhbG9nQ29udGFpbmVyKGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPFNvZ0RpYWxvZ0NvbnRhaW5lcj4pOiB2b2lkIHtcbiAgICAvLyBBdHRhY2ggdG8gZG9jdW1lbnQgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgIFxuICAgIC8vIEF0dGFjaCB0byBBbmd1bGFyJ3MgY2hhbmdlIGRldGVjdGlvbiBpZiBhcHAgcmVmIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0aGlzLmFwcFJlZikge1xuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb250YWluZXJSZWYuaG9zdFZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xuICAgIC8vIFNpbXBsZSBmb2N1cyByZXN0b3JhdGlvbiAtIGluIGEgcmVhbCBpbXBsZW1lbnRhdGlvbiwgeW91J2QgdHJhY2sgdGhlIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5ibHVyKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSW5qZWN0aW9uIHRva2VuIGZvciBkaWFsb2cgZGF0YVxuZXhwb3J0IGNvbnN0IFNPR19ESUFMT0dfREFUQSA9ICdkaWFsb2dEYXRhJzsiXX0=