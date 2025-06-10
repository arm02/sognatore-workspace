import { Component, ViewChild, ViewContainerRef, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./dialog-ref";
export class SogDialogContainer {
    constructor(config, dialogRef, elementRef) {
        this.config = config;
        this.dialogRef = dialogRef;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.focusDialog();
        // Prevent body scroll when dialog is open
        document.body.style.overflow = 'hidden';
    }
    ngOnDestroy() {
        // Restore body scroll
        document.body.style.overflow = '';
    }
    onEscapeKey(event) {
        if (!this.config.disableClose && this.config.closeOnNavigation !== false) {
            this.dialogRef.close();
        }
    }
    onBackdropClick(event) {
        console.log('Backdrop click detected', event.target, event.currentTarget);
        // Only close if the click was directly on the backdrop, not on child elements
        if (event.target === event.currentTarget && !this.config.disableClose) {
            console.log('Closing dialog via backdrop click');
            this.dialogRef.close();
        }
    }
    getDialogClasses() {
        const classes = [];
        if (this.config.size) {
            classes.push(`size-${this.config.size}`);
        }
        if (this.config.panelClass) {
            if (Array.isArray(this.config.panelClass)) {
                classes.push(...this.config.panelClass);
            }
            else {
                classes.push(this.config.panelClass);
            }
        }
        return classes;
    }
    focusDialog() {
        if (this.config.autoFocus !== false) {
            // Focus the dialog container by default
            setTimeout(() => {
                if (this.config.autoFocus === 'first-tabbable') {
                    this.focusFirstTabbableElement();
                }
                else if (this.config.autoFocus === 'first-heading') {
                    this.focusFirstHeading();
                }
                else {
                    this.dialogElement.nativeElement.focus();
                }
            }, 0);
        }
    }
    focusFirstTabbableElement() {
        const tabbableElements = this.dialogElement.nativeElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (tabbableElements.length > 0) {
            tabbableElements[0].focus();
        }
        else {
            this.dialogElement.nativeElement.focus();
        }
    }
    focusFirstHeading() {
        const heading = this.dialogElement.nativeElement.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
            heading.focus();
        }
        else {
            this.focusFirstTabbableElement();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogDialogContainer, deps: [{ token: 'config' }, { token: 'dialogRef' }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogDialogContainer, isStandalone: true, selector: "sog-dialog-container", host: { attributes: { "tabindex": "-1" }, listeners: { "document:keydown.escape": "onEscapeKey($event)" } }, viewQueries: [{ propertyName: "contentContainer", first: true, predicate: ["contentContainer"], descendants: true, read: ViewContainerRef, static: true }, { propertyName: "dialogElement", first: true, predicate: ["dialogContainer"], descendants: true, static: true }], ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;display:flex;align-items:center;justify-content:center}.sog-dialog-overlay{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;animation:fadeIn .3s ease}.sog-dialog-overlay.has-backdrop{background:#00000080}.sog-dialog-container{position:relative;background:#fff;border-radius:8px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;max-height:90vh;overflow:auto;outline:none;animation:slideIn .3s cubic-bezier(.25,.8,.25,1)}.sog-dialog-container.size-small{width:300px;max-width:90vw}.sog-dialog-container.size-medium{width:500px;max-width:90vw}.sog-dialog-container.size-large{width:800px;max-width:90vw}.sog-dialog-container.size-fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogDialogContainer, decorators: [{
            type: Component,
            args: [{ selector: 'sog-dialog-container', standalone: true, imports: [CommonModule], template: `
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
  `, host: {
                        'tabindex': '-1'
                    }, styles: [":host{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;display:flex;align-items:center;justify-content:center}.sog-dialog-overlay{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;animation:fadeIn .3s ease}.sog-dialog-overlay.has-backdrop{background:#00000080}.sog-dialog-container{position:relative;background:#fff;border-radius:8px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;max-height:90vh;overflow:auto;outline:none;animation:slideIn .3s cubic-bezier(.25,.8,.25,1)}.sog-dialog-container.size-small{width:300px;max-width:90vw}.sog-dialog-container.size-medium{width:500px;max-width:90vw}.sog-dialog-container.size-large{width:800px;max-width:90vw}.sog-dialog-container.size-fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i2.SogDialogRef, decorators: [{
                    type: Inject,
                    args: ['dialogRef']
                }] }, { type: i0.ElementRef }], propDecorators: { contentContainer: [{
                type: ViewChild,
                args: ['contentContainer', { read: ViewContainerRef, static: true }]
            }], dialogElement: [{
                type: ViewChild,
                args: ['dialogContainer', { static: true }]
            }], onEscapeKey: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2duYXRvcmUtdWkvc3JjL2xpYi9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFlBQVksRUFJWixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBa0kvQyxNQUFNLE9BQU8sa0JBQWtCO0lBTzdCLFlBQzJCLE1BQXVCLEVBQ3BCLFNBQXVCLEVBQzNDLFVBQXNCO1FBRkwsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUMzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLDBDQUEwQztRQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1Qsc0JBQXNCO1FBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdELFdBQVcsQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWlCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENB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QlQsNG5DQWhDUyxZQUFZOzs0RkEySFgsa0JBQWtCO2tCQTlIOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FDcEIsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLFlBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQlQsUUF1Rks7d0JBQ0osVUFBVSxFQUFFLElBQUk7cUJBQ2pCOzswQkFVRSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsV0FBVztrRUFQckIsZ0JBQWdCO3NCQURmLFNBQVM7dUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJdkUsYUFBYTtzQkFEWixTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFzQjlDLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyx5QkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBDb21wb25lbnQsIFxuICBDb21wb25lbnRSZWYsIFxuICBWaWV3Q2hpbGQsIFxuICBWaWV3Q29udGFpbmVyUmVmLCBcbiAgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5qZWN0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTb2dEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgU29nRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZy1kaWFsb2ctY29udGFpbmVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBcbiAgICAgIGNsYXNzPVwic29nLWRpYWxvZy1vdmVybGF5XCIgXG4gICAgICBbY2xhc3MuaGFzLWJhY2tkcm9wXT1cImNvbmZpZy5oYXNCYWNrZHJvcCAhPT0gZmFsc2VcIlxuICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLmJhY2tkcm9wQ2xhc3NcIlxuICAgICAgKGNsaWNrKT1cIm9uQmFja2Ryb3BDbGljaygkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzcz1cInNvZy1kaWFsb2ctY29udGFpbmVyXCIgXG4gICAgICAgIFtuZ0NsYXNzXT1cImdldERpYWxvZ0NsYXNzZXMoKVwiXG4gICAgICAgIFtzdHlsZS53aWR0aF09XCJjb25maWcud2lkdGhcIlxuICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5oZWlnaHRcIlxuICAgICAgICBbc3R5bGUubWluLXdpZHRoXT1cImNvbmZpZy5taW5XaWR0aFwiXG4gICAgICAgIFtzdHlsZS5taW4taGVpZ2h0XT1cImNvbmZpZy5taW5IZWlnaHRcIlxuICAgICAgICBbc3R5bGUubWF4LXdpZHRoXT1cImNvbmZpZy5tYXhXaWR0aFwiXG4gICAgICAgIFtzdHlsZS5tYXgtaGVpZ2h0XT1cImNvbmZpZy5tYXhIZWlnaHRcIlxuICAgICAgICBbc3R5bGUudG9wXT1cImNvbmZpZy5wb3NpdGlvbj8udG9wXCJcbiAgICAgICAgW3N0eWxlLmJvdHRvbV09XCJjb25maWcucG9zaXRpb24/LmJvdHRvbVwiXG4gICAgICAgIFtzdHlsZS5sZWZ0XT1cImNvbmZpZy5wb3NpdGlvbj8ubGVmdFwiXG4gICAgICAgIFtzdHlsZS5yaWdodF09XCJjb25maWcucG9zaXRpb24/LnJpZ2h0XCJcbiAgICAgICAgW2F0dHIucm9sZV09XCJjb25maWcucm9sZSB8fCAnZGlhbG9nJ1wiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiY29uZmlnLmFyaWFMYWJlbFwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJjb25maWcuYXJpYUxhYmVsbGVkQnlcIlxuICAgICAgICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImNvbmZpZy5hcmlhRGVzY3JpYmVkQnlcIlxuICAgICAgICBbYXR0ci5pZF09XCJjb25maWcuaWRcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgI2RpYWxvZ0NvbnRhaW5lclxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICNjb250ZW50Q29udGFpbmVyPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWRpYWxvZy1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBcbiAgICAgICAgJi5oYXMtYmFja2Ryb3Age1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgICAgICAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAgICAgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICAgICAgICBcbiAgICAgICAgJi5zaXplLXNtYWxsIHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLnNpemUtbWVkaXVtIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLnNpemUtbGFyZ2Uge1xuICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuc2l6ZS1mdWxsc2NyZWVuIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgICAgIGZyb20geyBcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgfVxuICAgICAgICB0byB7IFxuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgaG9zdDoge1xuICAgICd0YWJpbmRleCc6ICctMSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTb2dEaWFsb2dDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBjb250ZW50Q29udGFpbmVyITogVmlld0NvbnRhaW5lclJlZjtcbiAgXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZ0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGRpYWxvZ0VsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdjb25maWcnKSBwdWJsaWMgY29uZmlnOiBTb2dEaWFsb2dDb25maWcsXG4gICAgQEluamVjdCgnZGlhbG9nUmVmJykgcHVibGljIGRpYWxvZ1JlZjogU29nRGlhbG9nUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb2N1c0RpYWxvZygpO1xuICAgIFxuICAgIC8vIFByZXZlbnQgYm9keSBzY3JvbGwgd2hlbiBkaWFsb2cgaXMgb3BlblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIFJlc3RvcmUgYm9keSBzY3JvbGxcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIG9uRXNjYXBlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlQ2xvc2UgJiYgdGhpcy5jb25maWcuY2xvc2VPbk5hdmlnYXRpb24gIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmFja2Ryb3BDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZHJvcCBjbGljayBkZXRlY3RlZCcsIGV2ZW50LnRhcmdldCwgZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgLy8gT25seSBjbG9zZSBpZiB0aGUgY2xpY2sgd2FzIGRpcmVjdGx5IG9uIHRoZSBiYWNrZHJvcCwgbm90IG9uIGNoaWxkIGVsZW1lbnRzXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCAmJiAhdGhpcy5jb25maWcuZGlzYWJsZUNsb3NlKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ2xvc2luZyBkaWFsb2cgdmlhIGJhY2tkcm9wIGNsaWNrJyk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldERpYWxvZ0NsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgXG4gICAgaWYgKHRoaXMuY29uZmlnLnNpemUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChgc2l6ZS0ke3RoaXMuY29uZmlnLnNpemV9YCk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmNvbmZpZy5wYW5lbENsYXNzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5wYW5lbENsYXNzKSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goLi4udGhpcy5jb25maWcucGFuZWxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jb25maWcucGFuZWxDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBmb2N1c0RpYWxvZygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0ZvY3VzICE9PSBmYWxzZSkge1xuICAgICAgLy8gRm9jdXMgdGhlIGRpYWxvZyBjb250YWluZXIgYnkgZGVmYXVsdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvRm9jdXMgPT09ICdmaXJzdC10YWJiYWJsZScpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzRmlyc3RUYWJiYWJsZUVsZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5hdXRvRm9jdXMgPT09ICdmaXJzdC1oZWFkaW5nJykge1xuICAgICAgICAgIHRoaXMuZm9jdXNGaXJzdEhlYWRpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvY3VzRmlyc3RUYWJiYWJsZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgdGFiYmFibGVFbGVtZW50cyA9IHRoaXMuZGlhbG9nRWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnYnV0dG9uLCBbaHJlZl0sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknXG4gICAgKTtcbiAgICBcbiAgICBpZiAodGFiYmFibGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAodGFiYmFibGVFbGVtZW50c1swXSBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvY3VzRmlyc3RIZWFkaW5nKCkge1xuICAgIGNvbnN0IGhlYWRpbmcgPSB0aGlzLmRpYWxvZ0VsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMSwgaDIsIGgzLCBoNCwgaDUsIGg2Jyk7XG4gICAgXG4gICAgaWYgKGhlYWRpbmcpIHtcbiAgICAgIChoZWFkaW5nIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzRmlyc3RUYWJiYWJsZUVsZW1lbnQoKTtcbiAgICB9XG4gIH1cbn0iXX0=