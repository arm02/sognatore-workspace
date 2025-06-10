import { Component, Input, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreTooltip {
    constructor() {
        this.text = '';
        this.position = 'top';
        this.variant = 'basic';
        this.delay = 500;
        this.hideDelay = 0;
        this.disabled = false;
        this.trigger = 'hover';
        this.isVisible = false;
        this.tooltipTop = 0;
        this.tooltipLeft = 0;
        this.transform = '';
        this.tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;
        this.isManuallyTriggered = false;
    }
    onMouseEnter() {
        if (this.trigger === 'hover' && !this.disabled) {
            this.scheduleShow();
        }
    }
    onMouseLeave() {
        if (this.trigger === 'hover' && !this.disabled && !this.isManuallyTriggered) {
            this.scheduleHide();
        }
    }
    onClick() {
        if (this.trigger === 'click' && !this.disabled) {
            if (this.isVisible) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    onFocus() {
        if (this.trigger === 'focus' && !this.disabled) {
            this.show();
        }
    }
    onBlur() {
        if (this.trigger === 'focus' && !this.disabled) {
            this.hide();
        }
    }
    onDocumentClick(event) {
        if (this.trigger === 'click' && this.isVisible) {
            const target = event.target;
            if (!this.wrapper.nativeElement.contains(target) &&
                !this.tooltipElement.nativeElement.contains(target)) {
                this.hide();
            }
        }
    }
    scheduleShow() {
        this.clearTimeouts();
        this.showTimeout = window.setTimeout(() => {
            this.show();
        }, this.delay);
    }
    scheduleHide() {
        this.clearTimeouts();
        if (this.hideDelay > 0) {
            this.hideTimeout = window.setTimeout(() => {
                this.hide();
            }, this.hideDelay);
        }
        else {
            this.hide();
        }
    }
    show() {
        if (this.disabled || this.isVisible)
            return;
        this.clearTimeouts();
        this.updatePosition();
        this.isVisible = true;
    }
    hide() {
        if (!this.isVisible)
            return;
        this.clearTimeouts();
        this.isVisible = false;
        this.isManuallyTriggered = false;
    }
    toggle() {
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.isManuallyTriggered = true;
            this.show();
        }
    }
    updatePosition() {
        const wrapperRect = this.wrapper.nativeElement.getBoundingClientRect();
        // Make tooltip temporarily visible to get dimensions
        const tooltipEl = this.tooltipElement.nativeElement;
        const originalVisibility = tooltipEl.style.visibility;
        const originalOpacity = tooltipEl.style.opacity;
        tooltipEl.style.visibility = 'hidden';
        tooltipEl.style.opacity = '1';
        const tooltipRect = tooltipEl.getBoundingClientRect();
        tooltipEl.style.visibility = originalVisibility;
        tooltipEl.style.opacity = originalOpacity;
        let top = 0;
        let left = 0;
        let transform = '';
        switch (this.position) {
            case 'top':
                top = wrapperRect.top - tooltipRect.height - 8;
                left = wrapperRect.left + (wrapperRect.width / 2);
                transform = 'translateX(-50%)';
                break;
            case 'bottom':
                top = wrapperRect.bottom + 8;
                left = wrapperRect.left + (wrapperRect.width / 2);
                transform = 'translateX(-50%)';
                break;
            case 'left':
                top = wrapperRect.top + (wrapperRect.height / 2);
                left = wrapperRect.left - tooltipRect.width - 8;
                transform = 'translateY(-50%)';
                break;
            case 'right':
                top = wrapperRect.top + (wrapperRect.height / 2);
                left = wrapperRect.right + 8;
                transform = 'translateY(-50%)';
                break;
        }
        // Viewport boundary checks
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // Horizontal boundary check
        if (left < 10) {
            left = 10;
            transform = transform.includes('translateY') ? 'translateY(-50%)' : '';
        }
        else if (left + tooltipRect.width > viewportWidth - 10) {
            left = viewportWidth - tooltipRect.width - 10;
            transform = transform.includes('translateY') ? 'translateY(-50%)' : '';
        }
        // Vertical boundary check
        if (top < 10) {
            top = 10;
            if (this.position === 'left' || this.position === 'right') {
                transform = '';
            }
        }
        else if (top + tooltipRect.height > viewportHeight - 10) {
            top = viewportHeight - tooltipRect.height - 10;
            if (this.position === 'left' || this.position === 'right') {
                transform = '';
            }
        }
        this.tooltipTop = top;
        this.tooltipLeft = left;
        this.transform = transform;
    }
    clearTimeouts() {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = undefined;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = undefined;
        }
    }
    getTooltipClasses() {
        // Ensure we always return strings only for ngClass
        const safeVariant = (typeof this.variant === 'string' && this.variant) ? this.variant : 'basic';
        const safePosition = (typeof this.position === 'string' && this.position) ? this.position : 'top';
        const classes = [safeVariant, safePosition];
        if (this.isVisible) {
            classes.push('visible');
        }
        return classes;
    }
    ngOnDestroy() {
        this.clearTimeouts();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTooltip, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreTooltip, isStandalone: true, selector: "sog-tooltip", inputs: { text: "text", position: "position", variant: "variant", delay: "delay", hideDelay: "hideDelay", disabled: "disabled", trigger: "trigger" }, host: { listeners: { "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()", "click": "onClick()", "focus": "onFocus()", "blur": "onBlur()", "document:click": "onDocumentClick($event)" }, properties: { "attr.aria-describedby": "isVisible ? tooltipId : null" } }, viewQueries: [{ propertyName: "wrapper", first: true, predicate: ["wrapper"], descendants: true, static: true }, { propertyName: "tooltipElement", first: true, predicate: ["tooltip"], descendants: true, static: true }], ngImport: i0, template: `
    <div class="tooltip-wrapper" #wrapper>
      <ng-content></ng-content>
      
      <div 
        class="tooltip"
        #tooltip
        [ngClass]="getTooltipClasses()"
        [style.top.px]="tooltipTop"
        [style.left.px]="tooltipLeft"
        [style.transform]="transform"
        role="tooltip"
        [attr.id]="tooltipId"
      >
        <div class="tooltip-content">
          {{ text }}
          <ng-content select="[slot=tooltip]"></ng-content>
        </div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  `, isInline: true, styles: [".tooltip-wrapper{position:relative;display:inline-block}.tooltip{position:fixed;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;pointer-events:none}.tooltip.visible{opacity:1;visibility:visible}.tooltip.basic .tooltip-content{background:#333;color:#fff;padding:8px 12px;border-radius:6px;font-size:14px;line-height:1.4;max-width:300px;word-wrap:break-word;box-shadow:0 2px 8px #00000026}.tooltip.basic .tooltip-arrow{position:absolute;width:0;height:0;border:6px solid transparent}.tooltip.basic.top .tooltip-arrow{bottom:-12px;left:50%;transform:translate(-50%);border-top-color:#333;border-bottom:none}.tooltip.basic.bottom .tooltip-arrow{top:-12px;left:50%;transform:translate(-50%);border-bottom-color:#333;border-top:none}.tooltip.basic.left .tooltip-arrow{right:-12px;top:50%;transform:translateY(-50%);border-left-color:#333;border-right:none}.tooltip.basic.right .tooltip-arrow{left:-12px;top:50%;transform:translateY(-50%);border-right-color:#333;border-left:none}.tooltip.material .tooltip-content{background:#616161;color:#fff;padding:8px 16px;border-radius:4px;font-size:12px;line-height:1.5;max-width:320px;word-wrap:break-word;box-shadow:0 3px 6px #0003;font-weight:500}.tooltip.material .tooltip-arrow{position:absolute;width:0;height:0;border:5px solid transparent}.tooltip.material.top .tooltip-arrow{bottom:-10px;left:50%;transform:translate(-50%);border-top-color:#616161;border-bottom:none}.tooltip.material.bottom .tooltip-arrow{top:-10px;left:50%;transform:translate(-50%);border-bottom-color:#616161;border-top:none}.tooltip.material.left .tooltip-arrow{right:-10px;top:50%;transform:translateY(-50%);border-left-color:#616161;border-right:none}.tooltip.material.right .tooltip-arrow{left:-10px;top:50%;transform:translateY(-50%);border-right-color:#616161;border-left:none}.tooltip.info .tooltip-content{background:#17a2b8;color:#fff}.tooltip.info.basic .tooltip-arrow.top{border-top-color:#17a2b8}.tooltip.info.basic .tooltip-arrow.bottom{border-bottom-color:#17a2b8}.tooltip.info.basic .tooltip-arrow.left{border-left-color:#17a2b8}.tooltip.info.basic .tooltip-arrow.right{border-right-color:#17a2b8}.tooltip.info.material .tooltip-arrow.top{border-top-color:#17a2b8}.tooltip.info.material .tooltip-arrow.bottom{border-bottom-color:#17a2b8}.tooltip.info.material .tooltip-arrow.left{border-left-color:#17a2b8}.tooltip.info.material .tooltip-arrow.right{border-right-color:#17a2b8}.tooltip.warning .tooltip-content{background:#f39c12;color:#fff}.tooltip.warning.basic .tooltip-arrow.top{border-top-color:#f39c12}.tooltip.warning.basic .tooltip-arrow.bottom{border-bottom-color:#f39c12}.tooltip.warning.basic .tooltip-arrow.left{border-left-color:#f39c12}.tooltip.warning.basic .tooltip-arrow.right{border-right-color:#f39c12}.tooltip.warning.material .tooltip-arrow.top{border-top-color:#f39c12}.tooltip.warning.material .tooltip-arrow.bottom{border-bottom-color:#f39c12}.tooltip.warning.material .tooltip-arrow.left{border-left-color:#f39c12}.tooltip.warning.material .tooltip-arrow.right{border-right-color:#f39c12}.tooltip.error .tooltip-content{background:#e74c3c;color:#fff}.tooltip.error.basic .tooltip-arrow.top{border-top-color:#e74c3c}.tooltip.error.basic .tooltip-arrow.bottom{border-bottom-color:#e74c3c}.tooltip.error.basic .tooltip-arrow.left{border-left-color:#e74c3c}.tooltip.error.basic .tooltip-arrow.right{border-right-color:#e74c3c}.tooltip.error.material .tooltip-arrow.top{border-top-color:#e74c3c}.tooltip.error.material .tooltip-arrow.bottom{border-bottom-color:#e74c3c}.tooltip.error.material .tooltip-arrow.left{border-left-color:#e74c3c}.tooltip.error.material .tooltip-arrow.right{border-right-color:#e74c3c}.tooltip.success .tooltip-content{background:#27ae60;color:#fff}.tooltip.success.basic .tooltip-arrow.top{border-top-color:#27ae60}.tooltip.success.basic .tooltip-arrow.bottom{border-bottom-color:#27ae60}.tooltip.success.basic .tooltip-arrow.left{border-left-color:#27ae60}.tooltip.success.basic .tooltip-arrow.right{border-right-color:#27ae60}.tooltip.success.material .tooltip-arrow.top{border-top-color:#27ae60}.tooltip.success.material .tooltip-arrow.bottom{border-bottom-color:#27ae60}.tooltip.success.material .tooltip-arrow.left{border-left-color:#27ae60}.tooltip.success.material .tooltip-arrow.right{border-right-color:#27ae60}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTooltip, decorators: [{
            type: Component,
            args: [{ selector: 'sog-tooltip', standalone: true, imports: [CommonModule], template: `
    <div class="tooltip-wrapper" #wrapper>
      <ng-content></ng-content>
      
      <div 
        class="tooltip"
        #tooltip
        [ngClass]="getTooltipClasses()"
        [style.top.px]="tooltipTop"
        [style.left.px]="tooltipLeft"
        [style.transform]="transform"
        role="tooltip"
        [attr.id]="tooltipId"
      >
        <div class="tooltip-content">
          {{ text }}
          <ng-content select="[slot=tooltip]"></ng-content>
        </div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  `, host: {
                        '[attr.aria-describedby]': 'isVisible ? tooltipId : null'
                    }, styles: [".tooltip-wrapper{position:relative;display:inline-block}.tooltip{position:fixed;z-index:9999;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;pointer-events:none}.tooltip.visible{opacity:1;visibility:visible}.tooltip.basic .tooltip-content{background:#333;color:#fff;padding:8px 12px;border-radius:6px;font-size:14px;line-height:1.4;max-width:300px;word-wrap:break-word;box-shadow:0 2px 8px #00000026}.tooltip.basic .tooltip-arrow{position:absolute;width:0;height:0;border:6px solid transparent}.tooltip.basic.top .tooltip-arrow{bottom:-12px;left:50%;transform:translate(-50%);border-top-color:#333;border-bottom:none}.tooltip.basic.bottom .tooltip-arrow{top:-12px;left:50%;transform:translate(-50%);border-bottom-color:#333;border-top:none}.tooltip.basic.left .tooltip-arrow{right:-12px;top:50%;transform:translateY(-50%);border-left-color:#333;border-right:none}.tooltip.basic.right .tooltip-arrow{left:-12px;top:50%;transform:translateY(-50%);border-right-color:#333;border-left:none}.tooltip.material .tooltip-content{background:#616161;color:#fff;padding:8px 16px;border-radius:4px;font-size:12px;line-height:1.5;max-width:320px;word-wrap:break-word;box-shadow:0 3px 6px #0003;font-weight:500}.tooltip.material .tooltip-arrow{position:absolute;width:0;height:0;border:5px solid transparent}.tooltip.material.top .tooltip-arrow{bottom:-10px;left:50%;transform:translate(-50%);border-top-color:#616161;border-bottom:none}.tooltip.material.bottom .tooltip-arrow{top:-10px;left:50%;transform:translate(-50%);border-bottom-color:#616161;border-top:none}.tooltip.material.left .tooltip-arrow{right:-10px;top:50%;transform:translateY(-50%);border-left-color:#616161;border-right:none}.tooltip.material.right .tooltip-arrow{left:-10px;top:50%;transform:translateY(-50%);border-right-color:#616161;border-left:none}.tooltip.info .tooltip-content{background:#17a2b8;color:#fff}.tooltip.info.basic .tooltip-arrow.top{border-top-color:#17a2b8}.tooltip.info.basic .tooltip-arrow.bottom{border-bottom-color:#17a2b8}.tooltip.info.basic .tooltip-arrow.left{border-left-color:#17a2b8}.tooltip.info.basic .tooltip-arrow.right{border-right-color:#17a2b8}.tooltip.info.material .tooltip-arrow.top{border-top-color:#17a2b8}.tooltip.info.material .tooltip-arrow.bottom{border-bottom-color:#17a2b8}.tooltip.info.material .tooltip-arrow.left{border-left-color:#17a2b8}.tooltip.info.material .tooltip-arrow.right{border-right-color:#17a2b8}.tooltip.warning .tooltip-content{background:#f39c12;color:#fff}.tooltip.warning.basic .tooltip-arrow.top{border-top-color:#f39c12}.tooltip.warning.basic .tooltip-arrow.bottom{border-bottom-color:#f39c12}.tooltip.warning.basic .tooltip-arrow.left{border-left-color:#f39c12}.tooltip.warning.basic .tooltip-arrow.right{border-right-color:#f39c12}.tooltip.warning.material .tooltip-arrow.top{border-top-color:#f39c12}.tooltip.warning.material .tooltip-arrow.bottom{border-bottom-color:#f39c12}.tooltip.warning.material .tooltip-arrow.left{border-left-color:#f39c12}.tooltip.warning.material .tooltip-arrow.right{border-right-color:#f39c12}.tooltip.error .tooltip-content{background:#e74c3c;color:#fff}.tooltip.error.basic .tooltip-arrow.top{border-top-color:#e74c3c}.tooltip.error.basic .tooltip-arrow.bottom{border-bottom-color:#e74c3c}.tooltip.error.basic .tooltip-arrow.left{border-left-color:#e74c3c}.tooltip.error.basic .tooltip-arrow.right{border-right-color:#e74c3c}.tooltip.error.material .tooltip-arrow.top{border-top-color:#e74c3c}.tooltip.error.material .tooltip-arrow.bottom{border-bottom-color:#e74c3c}.tooltip.error.material .tooltip-arrow.left{border-left-color:#e74c3c}.tooltip.error.material .tooltip-arrow.right{border-right-color:#e74c3c}.tooltip.success .tooltip-content{background:#27ae60;color:#fff}.tooltip.success.basic .tooltip-arrow.top{border-top-color:#27ae60}.tooltip.success.basic .tooltip-arrow.bottom{border-bottom-color:#27ae60}.tooltip.success.basic .tooltip-arrow.left{border-left-color:#27ae60}.tooltip.success.basic .tooltip-arrow.right{border-right-color:#27ae60}.tooltip.success.material .tooltip-arrow.top{border-top-color:#27ae60}.tooltip.success.material .tooltip-arrow.bottom{border-bottom-color:#27ae60}.tooltip.success.material .tooltip-arrow.left{border-left-color:#27ae60}.tooltip.success.material .tooltip-arrow.right{border-right-color:#27ae60}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], position: [{
                type: Input
            }], variant: [{
                type: Input
            }], delay: [{
                type: Input
            }], hideDelay: [{
                type: Input
            }], disabled: [{
                type: Input
            }], trigger: [{
                type: Input
            }], wrapper: [{
                type: ViewChild,
                args: ['wrapper', { static: true }]
            }], tooltipElement: [{
                type: ViewChild,
                args: ['tooltip', { static: true }]
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2duYXRvcmUtdWkvc3JjL2xpYi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLFlBQVksRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFxUS9DLE1BQU0sT0FBTyxnQkFBZ0I7SUFuUTdCO1FBb1FXLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdEQsWUFBTyxHQUFvRSxPQUFPLENBQUM7UUFDbkYsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUEyQyxPQUFPLENBQUM7UUFLbkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxXQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBSXpELHdCQUFtQixHQUFHLEtBQUssQ0FBQztLQXVNckM7SUFwTUMsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBR0QsWUFBWTtRQUNWLElB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Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBRWtDLE9BQU87c0JBQTlDLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDRSxjQUFjO3NCQUFyRCxTQUFTO3VCQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBYXRDLFlBQVk7c0JBRFgsWUFBWTt1QkFBQyxZQUFZO2dCQVExQixZQUFZO3NCQURYLFlBQVk7dUJBQUMsWUFBWTtnQkFRMUIsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU87Z0JBWXJCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPO2dCQVFyQixNQUFNO3NCQURMLFlBQVk7dUJBQUMsTUFBTTtnQkFRcEIsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLXRvb2x0aXAnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC13cmFwcGVyXCIgI3dyYXBwZXI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICBcbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzPVwidG9vbHRpcFwiXG4gICAgICAgICN0b29sdGlwXG4gICAgICAgIFtuZ0NsYXNzXT1cImdldFRvb2x0aXBDbGFzc2VzKClcIlxuICAgICAgICBbc3R5bGUudG9wLnB4XT1cInRvb2x0aXBUb3BcIlxuICAgICAgICBbc3R5bGUubGVmdC5weF09XCJ0b29sdGlwTGVmdFwiXG4gICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCJcbiAgICAgICAgcm9sZT1cInRvb2x0aXBcIlxuICAgICAgICBbYXR0ci5pZF09XCJ0b29sdGlwSWRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1jb250ZW50XCI+XG4gICAgICAgICAge3sgdGV4dCB9fVxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PXRvb2x0aXBdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAudG9vbHRpcC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50b29sdGlwIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCB2aXNpYmlsaXR5IDAuMnMgZWFzZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIFxuICAgICAgICAmLnZpc2libGUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5iYXNpYyB7XG4gICAgICAgICAgLnRvb2x0aXAtY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAudG9vbHRpcC1hcnJvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLnRvcCB7XG4gICAgICAgICAgICAudG9vbHRpcC1hcnJvdyB7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmJvdHRvbSB7XG4gICAgICAgICAgICAudG9vbHRpcC1hcnJvdyB7XG4gICAgICAgICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmxlZnQge1xuICAgICAgICAgICAgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgICByaWdodDogLTEycHg7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgICBsZWZ0OiAtMTJweDtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYubWF0ZXJpYWwge1xuICAgICAgICAgIC50b29sdGlwLWNvbnRlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYxNjE2MTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi50b3Age1xuICAgICAgICAgICAgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYxNjE2MTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi5ib3R0b20ge1xuICAgICAgICAgICAgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYxNjE2MTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi5sZWZ0IHtcbiAgICAgICAgICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzYxNjE2MTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLnJpZ2h0IHtcbiAgICAgICAgICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzYxNjE2MTtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmluZm8ge1xuICAgICAgICAgIC50b29sdGlwLWNvbnRlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE3YTJiODtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi5iYXNpYyAudG9vbHRpcC1hcnJvdyB7XG4gICAgICAgICAgICAmLnRvcCB7IGJvcmRlci10b3AtY29sb3I6ICMxN2EyYjg7IH1cbiAgICAgICAgICAgICYuYm90dG9tIHsgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzE3YTJiODsgfVxuICAgICAgICAgICAgJi5sZWZ0IHsgYm9yZGVyLWxlZnQtY29sb3I6ICMxN2EyYjg7IH1cbiAgICAgICAgICAgICYucmlnaHQgeyBib3JkZXItcmlnaHQtY29sb3I6ICMxN2EyYjg7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi5tYXRlcmlhbCAudG9vbHRpcC1hcnJvdyB7XG4gICAgICAgICAgICAmLnRvcCB7IGJvcmRlci10b3AtY29sb3I6ICMxN2EyYjg7IH1cbiAgICAgICAgICAgICYuYm90dG9tIHsgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzE3YTJiODsgfVxuICAgICAgICAgICAgJi5sZWZ0IHsgYm9yZGVyLWxlZnQtY29sb3I6ICMxN2EyYjg7IH1cbiAgICAgICAgICAgICYucmlnaHQgeyBib3JkZXItcmlnaHQtY29sb3I6ICMxN2EyYjg7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYud2FybmluZyB7XG4gICAgICAgICAgLnRvb2x0aXAtY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmJhc2ljIC50b29sdGlwLWFycm93IHtcbiAgICAgICAgICAgICYudG9wIHsgYm9yZGVyLXRvcC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAgICAgJi5ib3R0b20geyBib3JkZXItYm90dG9tLWNvbG9yOiAjZjM5YzEyOyB9XG4gICAgICAgICAgICAmLmxlZnQgeyBib3JkZXItbGVmdC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAgICAgJi5yaWdodCB7IGJvcmRlci1yaWdodC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLm1hdGVyaWFsIC50b29sdGlwLWFycm93IHtcbiAgICAgICAgICAgICYudG9wIHsgYm9yZGVyLXRvcC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAgICAgJi5ib3R0b20geyBib3JkZXItYm90dG9tLWNvbG9yOiAjZjM5YzEyOyB9XG4gICAgICAgICAgICAmLmxlZnQgeyBib3JkZXItbGVmdC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAgICAgJi5yaWdodCB7IGJvcmRlci1yaWdodC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5lcnJvciB7XG4gICAgICAgICAgLnRvb2x0aXAtY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmJhc2ljIC50b29sdGlwLWFycm93IHtcbiAgICAgICAgICAgICYudG9wIHsgYm9yZGVyLXRvcC1jb2xvcjogI2U3NGMzYzsgfVxuICAgICAgICAgICAgJi5ib3R0b20geyBib3JkZXItYm90dG9tLWNvbG9yOiAjZTc0YzNjOyB9XG4gICAgICAgICAgICAmLmxlZnQgeyBib3JkZXItbGVmdC1jb2xvcjogI2U3NGMzYzsgfVxuICAgICAgICAgICAgJi5yaWdodCB7IGJvcmRlci1yaWdodC1jb2xvcjogI2U3NGMzYzsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLm1hdGVyaWFsIC50b29sdGlwLWFycm93IHtcbiAgICAgICAgICAgICYudG9wIHsgYm9yZGVyLXRvcC1jb2xvcjogI2U3NGMzYzsgfVxuICAgICAgICAgICAgJi5ib3R0b20geyBib3JkZXItYm90dG9tLWNvbG9yOiAjZTc0YzNjOyB9XG4gICAgICAgICAgICAmLmxlZnQgeyBib3JkZXItbGVmdC1jb2xvcjogI2U3NGMzYzsgfVxuICAgICAgICAgICAgJi5yaWdodCB7IGJvcmRlci1yaWdodC1jb2xvcjogI2U3NGMzYzsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICAudG9vbHRpcC1jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYuYmFzaWMgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgJi50b3AgeyBib3JkZXItdG9wLWNvbG9yOiAjMjdhZTYwOyB9XG4gICAgICAgICAgICAmLmJvdHRvbSB7IGJvcmRlci1ib3R0b20tY29sb3I6ICMyN2FlNjA7IH1cbiAgICAgICAgICAgICYubGVmdCB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMjdhZTYwOyB9XG4gICAgICAgICAgICAmLnJpZ2h0IHsgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjdhZTYwOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYubWF0ZXJpYWwgLnRvb2x0aXAtYXJyb3cge1xuICAgICAgICAgICAgJi50b3AgeyBib3JkZXItdG9wLWNvbG9yOiAjMjdhZTYwOyB9XG4gICAgICAgICAgICAmLmJvdHRvbSB7IGJvcmRlci1ib3R0b20tY29sb3I6ICMyN2FlNjA7IH1cbiAgICAgICAgICAgICYubGVmdCB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMjdhZTYwOyB9XG4gICAgICAgICAgICAmLnJpZ2h0IHsgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjdhZTYwOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdpc1Zpc2libGUgPyB0b29sdGlwSWQgOiBudWxsJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFNvZ25hdG9yZVRvb2x0aXAgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdiYXNpYycgfCAnbWF0ZXJpYWwnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIGRlbGF5OiBudW1iZXIgPSA1MDA7XG4gIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHJpZ2dlcjogJ2hvdmVyJyB8ICdjbGljaycgfCAnZm9jdXMnIHwgJ21hbnVhbCcgPSAnaG92ZXInO1xuICBcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pIHdyYXBwZXIhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0b29sdGlwJywgeyBzdGF0aWM6IHRydWUgfSkgdG9vbHRpcEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBcbiAgaXNWaXNpYmxlID0gZmFsc2U7XG4gIHRvb2x0aXBUb3AgPSAwO1xuICB0b29sdGlwTGVmdCA9IDA7XG4gIHRyYW5zZm9ybSA9ICcnO1xuICB0b29sdGlwSWQgPSBgdG9vbHRpcC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gO1xuICBcbiAgcHJpdmF0ZSBzaG93VGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSBoaWRlVGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSBpc01hbnVhbGx5VHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnaG92ZXInICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlU2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc01hbnVhbGx5VHJpZ2dlcmVkKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlSGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnY2xpY2snICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2ZvY3VzJyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnZm9jdXMnICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnY2xpY2snICYmIHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgIGlmICghdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KSAmJiBcbiAgICAgICAgICAhdGhpcy50b29sdGlwRWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVNob3coKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XG4gICAgdGhpcy5zaG93VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0sIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZUhpZGUoKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XG4gICAgaWYgKHRoaXMuaGlkZURlbGF5ID4gMCkge1xuICAgICAgdGhpcy5oaWRlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9LCB0aGlzLmhpZGVEZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc1Zpc2libGUpIHJldHVybjtcbiAgICBcbiAgICB0aGlzLmNsZWFyVGltZW91dHMoKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzTWFudWFsbHlUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTWFudWFsbHlUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICBjb25zdCB3cmFwcGVyUmVjdCA9IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIC8vIE1ha2UgdG9vbHRpcCB0ZW1wb3JhcmlseSB2aXNpYmxlIHRvIGdldCBkaW1lbnNpb25zXG4gICAgY29uc3QgdG9vbHRpcEVsID0gdGhpcy50b29sdGlwRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IG9yaWdpbmFsVmlzaWJpbGl0eSA9IHRvb2x0aXBFbC5zdHlsZS52aXNpYmlsaXR5O1xuICAgIGNvbnN0IG9yaWdpbmFsT3BhY2l0eSA9IHRvb2x0aXBFbC5zdHlsZS5vcGFjaXR5O1xuICAgIFxuICAgIHRvb2x0aXBFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdG9vbHRpcEVsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgY29uc3QgdG9vbHRpcFJlY3QgPSB0b29sdGlwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgXG4gICAgdG9vbHRpcEVsLnN0eWxlLnZpc2liaWxpdHkgPSBvcmlnaW5hbFZpc2liaWxpdHk7XG4gICAgdG9vbHRpcEVsLnN0eWxlLm9wYWNpdHkgPSBvcmlnaW5hbE9wYWNpdHk7XG4gICAgXG4gICAgbGV0IHRvcCA9IDA7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0cmFuc2Zvcm0gPSAnJztcbiAgICBcbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRvcCA9IHdyYXBwZXJSZWN0LnRvcCAtIHRvb2x0aXBSZWN0LmhlaWdodCAtIDg7XG4gICAgICAgIGxlZnQgPSB3cmFwcGVyUmVjdC5sZWZ0ICsgKHdyYXBwZXJSZWN0LndpZHRoIC8gMik7XG4gICAgICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdG9wID0gd3JhcHBlclJlY3QuYm90dG9tICsgODtcbiAgICAgICAgbGVmdCA9IHdyYXBwZXJSZWN0LmxlZnQgKyAod3JhcHBlclJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknO1xuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdG9wID0gd3JhcHBlclJlY3QudG9wICsgKHdyYXBwZXJSZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBsZWZ0ID0gd3JhcHBlclJlY3QubGVmdCAtIHRvb2x0aXBSZWN0LndpZHRoIC0gODtcbiAgICAgICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTUwJSknO1xuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRvcCA9IHdyYXBwZXJSZWN0LnRvcCArICh3cmFwcGVyUmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGVmdCA9IHdyYXBwZXJSZWN0LnJpZ2h0ICsgODtcbiAgICAgICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTUwJSknO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgLy8gVmlld3BvcnQgYm91bmRhcnkgY2hlY2tzXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFxuICAgIC8vIEhvcml6b250YWwgYm91bmRhcnkgY2hlY2tcbiAgICBpZiAobGVmdCA8IDEwKSB7XG4gICAgICBsZWZ0ID0gMTA7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uaW5jbHVkZXMoJ3RyYW5zbGF0ZVknKSA/ICd0cmFuc2xhdGVZKC01MCUpJyA6ICcnO1xuICAgIH0gZWxzZSBpZiAobGVmdCArIHRvb2x0aXBSZWN0LndpZHRoID4gdmlld3BvcnRXaWR0aCAtIDEwKSB7XG4gICAgICBsZWZ0ID0gdmlld3BvcnRXaWR0aCAtIHRvb2x0aXBSZWN0LndpZHRoIC0gMTA7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uaW5jbHVkZXMoJ3RyYW5zbGF0ZVknKSA/ICd0cmFuc2xhdGVZKC01MCUpJyA6ICcnO1xuICAgIH1cbiAgICBcbiAgICAvLyBWZXJ0aWNhbCBib3VuZGFyeSBjaGVja1xuICAgIGlmICh0b3AgPCAxMCkge1xuICAgICAgdG9wID0gMTA7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgdHJhbnNmb3JtID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0b3AgKyB0b29sdGlwUmVjdC5oZWlnaHQgPiB2aWV3cG9ydEhlaWdodCAtIDEwKSB7XG4gICAgICB0b3AgPSB2aWV3cG9ydEhlaWdodCAtIHRvb2x0aXBSZWN0LmhlaWdodCAtIDEwO1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRyYW5zZm9ybSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnRvb2x0aXBUb3AgPSB0b3A7XG4gICAgdGhpcy50b29sdGlwTGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBwcml2YXRlIGNsZWFyVGltZW91dHMoKSB7XG4gICAgaWYgKHRoaXMuc2hvd1RpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob3dUaW1lb3V0KTtcbiAgICAgIHRoaXMuc2hvd1RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmhpZGVUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlVGltZW91dCk7XG4gICAgICB0aGlzLmhpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvb2x0aXBDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIHJldHVybiBzdHJpbmdzIG9ubHkgZm9yIG5nQ2xhc3NcbiAgICBjb25zdCBzYWZlVmFyaWFudCA9ICh0eXBlb2YgdGhpcy52YXJpYW50ID09PSAnc3RyaW5nJyAmJiB0aGlzLnZhcmlhbnQpID8gdGhpcy52YXJpYW50IDogJ2Jhc2ljJztcbiAgICBjb25zdCBzYWZlUG9zaXRpb24gPSAodHlwZW9mIHRoaXMucG9zaXRpb24gPT09ICdzdHJpbmcnICYmIHRoaXMucG9zaXRpb24pID8gdGhpcy5wb3NpdGlvbiA6ICd0b3AnO1xuICAgIFxuICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW3NhZmVWYXJpYW50LCBzYWZlUG9zaXRpb25dO1xuICAgIFxuICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCd2aXNpYmxlJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XG4gIH1cbn0iXX0=