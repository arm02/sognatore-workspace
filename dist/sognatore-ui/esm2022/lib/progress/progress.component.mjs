import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreProgress {
    constructor() {
        this.type = 'linear';
        this.variant = 'basic';
        this.value = 0;
        this.size = 'md';
        this.color = 'primary';
        this.indeterminate = false;
        this.showLabel = false;
        this.labelTemplate = false;
        this.strokeWidth = 4;
        this.circularSize = 40;
        this.hasContent = false;
        this.currentValue = 0;
    }
    ngOnInit() {
        this.updateValue();
    }
    ngOnChanges(changes) {
        if (changes['value']) {
            this.updateValue();
        }
    }
    updateValue() {
        this.currentValue = Math.max(0, Math.min(100, this.value));
    }
    getCircularSize() {
        const sizeMap = {
            xs: 24,
            sm: 32,
            md: 40,
            lg: 56,
            xl: 72
        };
        return this.circularSize || sizeMap[this.size];
    }
    getRadius() {
        return (this.getCircularSize() - this.strokeWidth) / 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.getRadius();
    }
    getStrokeDashOffset() {
        const circumference = this.getCircumference();
        return circumference - (this.currentValue / 100) * circumference;
    }
    getProgressClasses() {
        const safeVariant = typeof this.variant === 'string' ? this.variant : 'basic';
        const safeSize = typeof this.size === 'string' ? this.size : 'md';
        const classes = [safeVariant, safeSize];
        if (this.indeterminate) {
            classes.push('indeterminate');
        }
        return classes;
    }
    getCircleClasses() {
        const safeColor = typeof this.color === 'string' ? this.color : 'primary';
        const classes = [safeColor];
        if (this.indeterminate) {
            classes.push('indeterminate');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreProgress, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreProgress, isStandalone: true, selector: "sog-progress", inputs: { type: "type", variant: "variant", value: "value", size: "size", color: "color", indeterminate: "indeterminate", showLabel: "showLabel", labelTemplate: "labelTemplate", strokeWidth: "strokeWidth", circularSize: "circularSize", hasContent: "hasContent" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="sog-progress" [ngClass]="getProgressClasses()">
      <!-- Linear Progress -->
      <div *ngIf="type === 'linear'" class="progress-linear">
        <div class="progress-track">
          <div 
            class="progress-bar" 
            [ngClass]="color"
            [style.width.%]="indeterminate ? null : currentValue"
            [style.transform]="indeterminate ? null : 'translateX(-' + (100 - currentValue) + '%)'"
          >
            <div *ngIf="indeterminate" class="progress-indeterminate"></div>
          </div>
        </div>
        
        <!-- Label -->
        <div *ngIf="showLabel" class="progress-label">
          <span *ngIf="!labelTemplate">{{ currentValue }}%</span>
          <ng-content select="[slot=label]"></ng-content>
        </div>
      </div>
      
      <!-- Circular Progress -->
      <div *ngIf="type === 'circular'" class="progress-circular">
        <svg 
          class="progress-svg" 
          [attr.width]="getCircularSize()"
          [attr.height]="getCircularSize()"
          [attr.viewBox]="'0 0 ' + getCircularSize() + ' ' + getCircularSize()"
        >
          <!-- Background circle -->
          <circle
            class="progress-circle-bg"
            [attr.cx]="getCircularSize() / 2"
            [attr.cy]="getCircularSize() / 2"
            [attr.r]="getRadius()"
            fill="none"
            [attr.stroke-width]="strokeWidth"
          />
          
          <!-- Progress circle -->
          <circle
            class="progress-circle"
            [ngClass]="color"
            [attr.cx]="getCircularSize() / 2"
            [attr.cy]="getCircularSize() / 2"
            [attr.r]="getRadius()"
            fill="none"
            [attr.stroke-width]="strokeWidth"
            [attr.stroke-dasharray]="getCircumference()"
            [attr.stroke-dashoffset]="indeterminate ? null : getStrokeDashOffset()"
            [ngClass]="getCircleClasses()"
          />
        </svg>
        
        <!-- Center content -->
        <div class="progress-center" *ngIf="showLabel || hasContent">
          <span *ngIf="showLabel && !hasContent">{{ currentValue }}%</span>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-progress{width:100%}.sog-progress.basic .progress-linear .progress-track{width:100%;background:#e0e0e0;border-radius:8px;overflow:hidden;position:relative}.sog-progress.basic .progress-linear .progress-track .progress-bar{height:100%;border-radius:8px;transition:width .3s ease;position:relative}.sog-progress.basic .progress-linear .progress-track .progress-bar.primary{background:#3498db}.sog-progress.basic .progress-linear .progress-track .progress-bar.secondary{background:#6c757d}.sog-progress.basic .progress-linear .progress-track .progress-bar.success{background:#27ae60}.sog-progress.basic .progress-linear .progress-track .progress-bar.danger{background:#e74c3c}.sog-progress.basic .progress-linear .progress-track .progress-bar.warning{background:#f39c12}.sog-progress.basic .progress-linear .progress-track .progress-bar.info{background:#17a2b8}.sog-progress.basic .progress-linear .progress-track .progress-bar .progress-indeterminate{position:absolute;top:0;left:0;bottom:0;width:100%;background:inherit;animation:indeterminate 2s linear infinite}.sog-progress.basic .progress-linear .progress-label{margin-top:8px;text-align:center;font-size:14px;color:#666}.sog-progress.basic .progress-circular{position:relative;display:inline-block}.sog-progress.basic .progress-circular .progress-svg{transform:rotate(-90deg)}.sog-progress.basic .progress-circular .progress-circle-bg{stroke:#e0e0e0}.sog-progress.basic .progress-circular .progress-circle{transition:stroke-dashoffset .3s ease}.sog-progress.basic .progress-circular .progress-circle.primary{stroke:#3498db}.sog-progress.basic .progress-circular .progress-circle.secondary{stroke:#6c757d}.sog-progress.basic .progress-circular .progress-circle.success{stroke:#27ae60}.sog-progress.basic .progress-circular .progress-circle.danger{stroke:#e74c3c}.sog-progress.basic .progress-circular .progress-circle.warning{stroke:#f39c12}.sog-progress.basic .progress-circular .progress-circle.info{stroke:#17a2b8}.sog-progress.basic .progress-circular .progress-circle.indeterminate{animation:rotate 2s linear infinite}.sog-progress.basic .progress-circular .progress-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:#666;font-weight:600;line-height:1;pointer-events:none;margin:0;padding:0}.sog-progress.basic .progress-circular .progress-center span{display:block;margin:0;padding:0;line-height:1}.sog-progress.basic.xs .progress-track{height:4px}.sog-progress.basic.xs .progress-center{font-size:8px}.sog-progress.basic.sm .progress-track{height:6px}.sog-progress.basic.sm .progress-center{font-size:10px}.sog-progress.basic.md .progress-track{height:8px}.sog-progress.basic.md .progress-center{font-size:12px}.sog-progress.basic.lg .progress-track{height:12px}.sog-progress.basic.lg .progress-center{font-size:14px}.sog-progress.basic.xl .progress-track{height:16px}.sog-progress.basic.xl .progress-center{font-size:16px}.sog-progress.material .progress-linear .progress-track{width:100%;background:#0000001a;border-radius:2px;overflow:hidden;position:relative}.sog-progress.material .progress-linear .progress-track .progress-bar{height:100%;border-radius:2px;transition:width .2s cubic-bezier(.4,0,.2,1)}.sog-progress.material .progress-linear .progress-track .progress-bar.primary{background:#3f51b5}.sog-progress.material .progress-linear .progress-track .progress-bar.secondary{background:#757575}.sog-progress.material .progress-linear .progress-track .progress-bar.success{background:#4caf50}.sog-progress.material .progress-linear .progress-track .progress-bar.danger{background:#f44336}.sog-progress.material .progress-linear .progress-track .progress-bar.warning{background:#ff9800}.sog-progress.material .progress-linear .progress-track .progress-bar.info{background:#2196f3}.sog-progress.material .progress-linear .progress-track .progress-bar .progress-indeterminate{position:absolute;top:0;left:0;bottom:0;width:100%;background:inherit;animation:indeterminate-material 2s linear infinite}.sog-progress.material .progress-linear .progress-label{margin-top:8px;text-align:right;font-size:12px;color:#0009;font-weight:500}.sog-progress.material .progress-circular{position:relative;display:inline-block}.sog-progress.material .progress-circular .progress-svg{transform:rotate(-90deg)}.sog-progress.material .progress-circular .progress-circle-bg{stroke:#0000001a}.sog-progress.material .progress-circular .progress-circle{transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1)}.sog-progress.material .progress-circular .progress-circle.primary{stroke:#3f51b5}.sog-progress.material .progress-circular .progress-circle.secondary{stroke:#757575}.sog-progress.material .progress-circular .progress-circle.success{stroke:#4caf50}.sog-progress.material .progress-circular .progress-circle.danger{stroke:#f44336}.sog-progress.material .progress-circular .progress-circle.warning{stroke:#ff9800}.sog-progress.material .progress-circular .progress-circle.info{stroke:#2196f3}.sog-progress.material .progress-circular .progress-circle.indeterminate{animation:rotate 1.4s linear infinite}.sog-progress.material .progress-circular .progress-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;color:#0009;font-weight:500;line-height:1;pointer-events:none;margin:0;padding:0}.sog-progress.material .progress-circular .progress-center span{display:block;margin:0;padding:0;line-height:1}.sog-progress.material.xs .progress-track{height:4px}.sog-progress.material.xs .progress-center{font-size:7px}.sog-progress.material.sm .progress-track{height:4px}.sog-progress.material.sm .progress-center{font-size:9px}.sog-progress.material.md .progress-track{height:4px}.sog-progress.material.md .progress-center{font-size:10px}.sog-progress.material.lg .progress-track{height:6px}.sog-progress.material.lg .progress-center{font-size:12px}.sog-progress.material.xl .progress-track{height:8px}.sog-progress.material.xl .progress-center{font-size:14px}@keyframes indeterminate{0%{transform:translate(-100%)}to{transform:translate(100%)}}@keyframes indeterminate-material{0%{transform:translate(-100%) scaleX(.5)}50%{transform:translate(0) scaleX(.8)}to{transform:translate(100%) scaleX(.5)}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreProgress, decorators: [{
            type: Component,
            args: [{ selector: 'sog-progress', standalone: true, imports: [CommonModule], template: `
    <div class="sog-progress" [ngClass]="getProgressClasses()">
      <!-- Linear Progress -->
      <div *ngIf="type === 'linear'" class="progress-linear">
        <div class="progress-track">
          <div 
            class="progress-bar" 
            [ngClass]="color"
            [style.width.%]="indeterminate ? null : currentValue"
            [style.transform]="indeterminate ? null : 'translateX(-' + (100 - currentValue) + '%)'"
          >
            <div *ngIf="indeterminate" class="progress-indeterminate"></div>
          </div>
        </div>
        
        <!-- Label -->
        <div *ngIf="showLabel" class="progress-label">
          <span *ngIf="!labelTemplate">{{ currentValue }}%</span>
          <ng-content select="[slot=label]"></ng-content>
        </div>
      </div>
      
      <!-- Circular Progress -->
      <div *ngIf="type === 'circular'" class="progress-circular">
        <svg 
          class="progress-svg" 
          [attr.width]="getCircularSize()"
          [attr.height]="getCircularSize()"
          [attr.viewBox]="'0 0 ' + getCircularSize() + ' ' + getCircularSize()"
        >
          <!-- Background circle -->
          <circle
            class="progress-circle-bg"
            [attr.cx]="getCircularSize() / 2"
            [attr.cy]="getCircularSize() / 2"
            [attr.r]="getRadius()"
            fill="none"
            [attr.stroke-width]="strokeWidth"
          />
          
          <!-- Progress circle -->
          <circle
            class="progress-circle"
            [ngClass]="color"
            [attr.cx]="getCircularSize() / 2"
            [attr.cy]="getCircularSize() / 2"
            [attr.r]="getRadius()"
            fill="none"
            [attr.stroke-width]="strokeWidth"
            [attr.stroke-dasharray]="getCircumference()"
            [attr.stroke-dashoffset]="indeterminate ? null : getStrokeDashOffset()"
            [ngClass]="getCircleClasses()"
          />
        </svg>
        
        <!-- Center content -->
        <div class="progress-center" *ngIf="showLabel || hasContent">
          <span *ngIf="showLabel && !hasContent">{{ currentValue }}%</span>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `, styles: [".sog-progress{width:100%}.sog-progress.basic .progress-linear .progress-track{width:100%;background:#e0e0e0;border-radius:8px;overflow:hidden;position:relative}.sog-progress.basic .progress-linear .progress-track .progress-bar{height:100%;border-radius:8px;transition:width .3s ease;position:relative}.sog-progress.basic .progress-linear .progress-track .progress-bar.primary{background:#3498db}.sog-progress.basic .progress-linear .progress-track .progress-bar.secondary{background:#6c757d}.sog-progress.basic .progress-linear .progress-track .progress-bar.success{background:#27ae60}.sog-progress.basic .progress-linear .progress-track .progress-bar.danger{background:#e74c3c}.sog-progress.basic .progress-linear .progress-track .progress-bar.warning{background:#f39c12}.sog-progress.basic .progress-linear .progress-track .progress-bar.info{background:#17a2b8}.sog-progress.basic .progress-linear .progress-track .progress-bar .progress-indeterminate{position:absolute;top:0;left:0;bottom:0;width:100%;background:inherit;animation:indeterminate 2s linear infinite}.sog-progress.basic .progress-linear .progress-label{margin-top:8px;text-align:center;font-size:14px;color:#666}.sog-progress.basic .progress-circular{position:relative;display:inline-block}.sog-progress.basic .progress-circular .progress-svg{transform:rotate(-90deg)}.sog-progress.basic .progress-circular .progress-circle-bg{stroke:#e0e0e0}.sog-progress.basic .progress-circular .progress-circle{transition:stroke-dashoffset .3s ease}.sog-progress.basic .progress-circular .progress-circle.primary{stroke:#3498db}.sog-progress.basic .progress-circular .progress-circle.secondary{stroke:#6c757d}.sog-progress.basic .progress-circular .progress-circle.success{stroke:#27ae60}.sog-progress.basic .progress-circular .progress-circle.danger{stroke:#e74c3c}.sog-progress.basic .progress-circular .progress-circle.warning{stroke:#f39c12}.sog-progress.basic .progress-circular .progress-circle.info{stroke:#17a2b8}.sog-progress.basic .progress-circular .progress-circle.indeterminate{animation:rotate 2s linear infinite}.sog-progress.basic .progress-circular .progress-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:#666;font-weight:600;line-height:1;pointer-events:none;margin:0;padding:0}.sog-progress.basic .progress-circular .progress-center span{display:block;margin:0;padding:0;line-height:1}.sog-progress.basic.xs .progress-track{height:4px}.sog-progress.basic.xs .progress-center{font-size:8px}.sog-progress.basic.sm .progress-track{height:6px}.sog-progress.basic.sm .progress-center{font-size:10px}.sog-progress.basic.md .progress-track{height:8px}.sog-progress.basic.md .progress-center{font-size:12px}.sog-progress.basic.lg .progress-track{height:12px}.sog-progress.basic.lg .progress-center{font-size:14px}.sog-progress.basic.xl .progress-track{height:16px}.sog-progress.basic.xl .progress-center{font-size:16px}.sog-progress.material .progress-linear .progress-track{width:100%;background:#0000001a;border-radius:2px;overflow:hidden;position:relative}.sog-progress.material .progress-linear .progress-track .progress-bar{height:100%;border-radius:2px;transition:width .2s cubic-bezier(.4,0,.2,1)}.sog-progress.material .progress-linear .progress-track .progress-bar.primary{background:#3f51b5}.sog-progress.material .progress-linear .progress-track .progress-bar.secondary{background:#757575}.sog-progress.material .progress-linear .progress-track .progress-bar.success{background:#4caf50}.sog-progress.material .progress-linear .progress-track .progress-bar.danger{background:#f44336}.sog-progress.material .progress-linear .progress-track .progress-bar.warning{background:#ff9800}.sog-progress.material .progress-linear .progress-track .progress-bar.info{background:#2196f3}.sog-progress.material .progress-linear .progress-track .progress-bar .progress-indeterminate{position:absolute;top:0;left:0;bottom:0;width:100%;background:inherit;animation:indeterminate-material 2s linear infinite}.sog-progress.material .progress-linear .progress-label{margin-top:8px;text-align:right;font-size:12px;color:#0009;font-weight:500}.sog-progress.material .progress-circular{position:relative;display:inline-block}.sog-progress.material .progress-circular .progress-svg{transform:rotate(-90deg)}.sog-progress.material .progress-circular .progress-circle-bg{stroke:#0000001a}.sog-progress.material .progress-circular .progress-circle{transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1)}.sog-progress.material .progress-circular .progress-circle.primary{stroke:#3f51b5}.sog-progress.material .progress-circular .progress-circle.secondary{stroke:#757575}.sog-progress.material .progress-circular .progress-circle.success{stroke:#4caf50}.sog-progress.material .progress-circular .progress-circle.danger{stroke:#f44336}.sog-progress.material .progress-circular .progress-circle.warning{stroke:#ff9800}.sog-progress.material .progress-circular .progress-circle.info{stroke:#2196f3}.sog-progress.material .progress-circular .progress-circle.indeterminate{animation:rotate 1.4s linear infinite}.sog-progress.material .progress-circular .progress-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;color:#0009;font-weight:500;line-height:1;pointer-events:none;margin:0;padding:0}.sog-progress.material .progress-circular .progress-center span{display:block;margin:0;padding:0;line-height:1}.sog-progress.material.xs .progress-track{height:4px}.sog-progress.material.xs .progress-center{font-size:7px}.sog-progress.material.sm .progress-track{height:4px}.sog-progress.material.sm .progress-center{font-size:9px}.sog-progress.material.md .progress-track{height:4px}.sog-progress.material.md .progress-center{font-size:10px}.sog-progress.material.lg .progress-track{height:6px}.sog-progress.material.lg .progress-center{font-size:12px}.sog-progress.material.xl .progress-track{height:8px}.sog-progress.material.xl .progress-center{font-size:14px}@keyframes indeterminate{0%{transform:translate(-100%)}to{transform:translate(100%)}}@keyframes indeterminate-material{0%{transform:translate(-100%) scaleX(.5)}50%{transform:translate(0) scaleX(.8)}to{transform:translate(100%) scaleX(.5)}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], variant: [{
                type: Input
            }], value: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], showLabel: [{
                type: Input
            }], labelTemplate: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], circularSize: [{
                type: Input
            }], hasContent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29nbmF0b3JlLXVpL3NyYy9saWIvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQXFWL0MsTUFBTSxPQUFPLGlCQUFpQjtJQW5WOUI7UUFvVlcsU0FBSSxHQUEwQixRQUFRLENBQUM7UUFDdkMsWUFBTyxHQUF5QixPQUFPLENBQUM7UUFDeEMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixTQUFJLEdBQXFDLElBQUksQ0FBQztRQUM5QyxVQUFLLEdBQXdFLFNBQVMsQ0FBQztRQUN2RixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFckMsaUJBQVksR0FBVyxDQUFDLENBQUM7S0FpRTFCO0lBL0RDLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sT0FBTyxHQUFHO1lBQ2QsRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtTQUNQLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDO0lBQ25FLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxXQUFXLEdBQUcsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlFLE1BQU0sUUFBUSxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVsRSxNQUFNLE9BQU8sR0FBYSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsTUFBTSxTQUFTLEdBQUcsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRTFFLE1BQU0sT0FBTyxHQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzsrR0E3RVUsaUJBQWlCO21HQUFqQixpQkFBaUIscVdBL1VsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4RFQsaXdNQS9EUyxZQUFZOzs0RkFnVlgsaUJBQWlCO2tCQW5WN0IsU0FBUzsrQkFDRSxjQUFjLGNBQ1osSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLFlBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOERUOzhCQWtSUSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZy1wcm9ncmVzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzb2ctcHJvZ3Jlc3NcIiBbbmdDbGFzc109XCJnZXRQcm9ncmVzc0NsYXNzZXMoKVwiPlxuICAgICAgPCEtLSBMaW5lYXIgUHJvZ3Jlc3MgLS0+XG4gICAgICA8ZGl2ICpuZ0lmPVwidHlwZSA9PT0gJ2xpbmVhcidcIiBjbGFzcz1cInByb2dyZXNzLWxpbmVhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtdHJhY2tcIj5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbG9yXCJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cImluZGV0ZXJtaW5hdGUgPyBudWxsIDogY3VycmVudFZhbHVlXCJcbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiaW5kZXRlcm1pbmF0ZSA/IG51bGwgOiAndHJhbnNsYXRlWCgtJyArICgxMDAgLSBjdXJyZW50VmFsdWUpICsgJyUpJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImluZGV0ZXJtaW5hdGVcIiBjbGFzcz1cInByb2dyZXNzLWluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8IS0tIExhYmVsIC0tPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0xhYmVsXCIgY2xhc3M9XCJwcm9ncmVzcy1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWxhYmVsVGVtcGxhdGVcIj57eyBjdXJyZW50VmFsdWUgfX0lPC9zcGFuPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PWxhYmVsXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPCEtLSBDaXJjdWxhciBQcm9ncmVzcyAtLT5cbiAgICAgIDxkaXYgKm5nSWY9XCJ0eXBlID09PSAnY2lyY3VsYXInXCIgY2xhc3M9XCJwcm9ncmVzcy1jaXJjdWxhclwiPlxuICAgICAgICA8c3ZnIFxuICAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3Mtc3ZnXCIgXG4gICAgICAgICAgW2F0dHIud2lkdGhdPVwiZ2V0Q2lyY3VsYXJTaXplKClcIlxuICAgICAgICAgIFthdHRyLmhlaWdodF09XCJnZXRDaXJjdWxhclNpemUoKVwiXG4gICAgICAgICAgW2F0dHIudmlld0JveF09XCInMCAwICcgKyBnZXRDaXJjdWxhclNpemUoKSArICcgJyArIGdldENpcmN1bGFyU2l6ZSgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDwhLS0gQmFja2dyb3VuZCBjaXJjbGUgLS0+XG4gICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzcy1jaXJjbGUtYmdcIlxuICAgICAgICAgICAgW2F0dHIuY3hdPVwiZ2V0Q2lyY3VsYXJTaXplKCkgLyAyXCJcbiAgICAgICAgICAgIFthdHRyLmN5XT1cImdldENpcmN1bGFyU2l6ZSgpIC8gMlwiXG4gICAgICAgICAgICBbYXR0ci5yXT1cImdldFJhZGl1cygpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICBcbiAgICAgICAgICA8IS0tIFByb2dyZXNzIGNpcmNsZSAtLT5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzLWNpcmNsZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb2xvclwiXG4gICAgICAgICAgICBbYXR0ci5jeF09XCJnZXRDaXJjdWxhclNpemUoKSAvIDJcIlxuICAgICAgICAgICAgW2F0dHIuY3ldPVwiZ2V0Q2lyY3VsYXJTaXplKCkgLyAyXCJcbiAgICAgICAgICAgIFthdHRyLnJdPVwiZ2V0UmFkaXVzKClcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS1kYXNoYXJyYXldPVwiZ2V0Q2lyY3VtZmVyZW5jZSgpXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS1kYXNob2Zmc2V0XT1cImluZGV0ZXJtaW5hdGUgPyBudWxsIDogZ2V0U3Ryb2tlRGFzaE9mZnNldCgpXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldENpcmNsZUNsYXNzZXMoKVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIFxuICAgICAgICA8IS0tIENlbnRlciBjb250ZW50IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtY2VudGVyXCIgKm5nSWY9XCJzaG93TGFiZWwgfHwgaGFzQ29udGVudFwiPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd0xhYmVsICYmICFoYXNDb250ZW50XCI+e3sgY3VycmVudFZhbHVlIH19JTwvc3Bhbj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctcHJvZ3Jlc3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgICYuYmFzaWMge1xuICAgICAgICAgIC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgICAgICAgLnByb2dyZXNzLXRyYWNrIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYucHJpbWFyeSB7IGJhY2tncm91bmQ6ICMzNDk4ZGI7IH1cbiAgICAgICAgICAgICAgICAmLnNlY29uZGFyeSB7IGJhY2tncm91bmQ6ICM2Yzc1N2Q7IH1cbiAgICAgICAgICAgICAgICAmLnN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiAjMjdhZTYwOyB9XG4gICAgICAgICAgICAgICAgJi5kYW5nZXIgeyBiYWNrZ3JvdW5kOiAjZTc0YzNjOyB9XG4gICAgICAgICAgICAgICAgJi53YXJuaW5nIHsgYmFja2dyb3VuZDogI2YzOWMxMjsgfVxuICAgICAgICAgICAgICAgICYuaW5mbyB7IGJhY2tncm91bmQ6ICMxN2EyYjg7IH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAucHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBpbmRldGVybWluYXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnByb2dyZXNzLWxhYmVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5wcm9ncmVzcy1jaXJjdWxhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcm9ncmVzcy1zdmcge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJvZ3Jlc3MtY2lyY2xlLWJnIHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiAjZTBlMGUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJvZ3Jlc3MtY2lyY2xlIHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi5wcmltYXJ5IHsgc3Ryb2tlOiAjMzQ5OGRiOyB9XG4gICAgICAgICAgICAgICYuc2Vjb25kYXJ5IHsgc3Ryb2tlOiAjNmM3NTdkOyB9XG4gICAgICAgICAgICAgICYuc3VjY2VzcyB7IHN0cm9rZTogIzI3YWU2MDsgfVxuICAgICAgICAgICAgICAmLmRhbmdlciB7IHN0cm9rZTogI2U3NGMzYzsgfVxuICAgICAgICAgICAgICAmLndhcm5pbmcgeyBzdHJva2U6ICNmMzljMTI7IH1cbiAgICAgICAgICAgICAgJi5pbmZvIHsgc3Ryb2tlOiAjMTdhMmI4OyB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmLmluZGV0ZXJtaW5hdGUge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJvZ3Jlc3MtY2VudGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYueHMge1xuICAgICAgICAgICAgLnByb2dyZXNzLXRyYWNrIHsgaGVpZ2h0OiA0cHg7IH1cbiAgICAgICAgICAgIC5wcm9ncmVzcy1jZW50ZXIgeyBmb250LXNpemU6IDhweDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmLnNtIHtcbiAgICAgICAgICAgIC5wcm9ncmVzcy10cmFjayB7IGhlaWdodDogNnB4OyB9XG4gICAgICAgICAgICAucHJvZ3Jlc3MtY2VudGVyIHsgZm9udC1zaXplOiAxMHB4OyB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYubWQge1xuICAgICAgICAgICAgLnByb2dyZXNzLXRyYWNrIHsgaGVpZ2h0OiA4cHg7IH1cbiAgICAgICAgICAgIC5wcm9ncmVzcy1jZW50ZXIgeyBmb250LXNpemU6IDEycHg7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJi5sZyB7XG4gICAgICAgICAgICAucHJvZ3Jlc3MtdHJhY2sgeyBoZWlnaHQ6IDEycHg7IH1cbiAgICAgICAgICAgIC5wcm9ncmVzcy1jZW50ZXIgeyBmb250LXNpemU6IDE0cHg7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJi54bCB7XG4gICAgICAgICAgICAucHJvZ3Jlc3MtdHJhY2sgeyBoZWlnaHQ6IDE2cHg7IH1cbiAgICAgICAgICAgIC5wcm9ncmVzcy1jZW50ZXIgeyBmb250LXNpemU6IDE2cHg7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYubWF0ZXJpYWwge1xuICAgICAgICAgIC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgICAgICAgLnByb2dyZXNzLXRyYWNrIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLnByaW1hcnkgeyBiYWNrZ3JvdW5kOiAjM2Y1MWI1OyB9XG4gICAgICAgICAgICAgICAgJi5zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiAjNzU3NTc1OyB9XG4gICAgICAgICAgICAgICAgJi5zdWNjZXNzIHsgYmFja2dyb3VuZDogIzRjYWY1MDsgfVxuICAgICAgICAgICAgICAgICYuZGFuZ2VyIHsgYmFja2dyb3VuZDogI2Y0NDMzNjsgfVxuICAgICAgICAgICAgICAgICYud2FybmluZyB7IGJhY2tncm91bmQ6ICNmZjk4MDA7IH1cbiAgICAgICAgICAgICAgICAmLmluZm8geyBiYWNrZ3JvdW5kOiAjMjE5NmYzOyB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzLWluZGV0ZXJtaW5hdGUge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1tYXRlcmlhbCAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcm9ncmVzcy1sYWJlbCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnByb2dyZXNzLWNpcmN1bGFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnByb2dyZXNzLXN2ZyB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcm9ncmVzcy1jaXJjbGUtYmcge1xuICAgICAgICAgICAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnByb2dyZXNzLWNpcmNsZSB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICYucHJpbWFyeSB7IHN0cm9rZTogIzNmNTFiNTsgfVxuICAgICAgICAgICAgICAmLnNlY29uZGFyeSB7IHN0cm9rZTogIzc1NzU3NTsgfVxuICAgICAgICAgICAgICAmLnN1Y2Nlc3MgeyBzdHJva2U6ICM0Y2FmNTA7IH1cbiAgICAgICAgICAgICAgJi5kYW5nZXIgeyBzdHJva2U6ICNmNDQzMzY7IH1cbiAgICAgICAgICAgICAgJi53YXJuaW5nIHsgc3Ryb2tlOiAjZmY5ODAwOyB9XG4gICAgICAgICAgICAgICYuaW5mbyB7IHN0cm9rZTogIzIxOTZmMzsgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi5pbmRldGVybWluYXRlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxLjRzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJvZ3Jlc3MtY2VudGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJi54cyB7XG4gICAgICAgICAgICAucHJvZ3Jlc3MtdHJhY2sgeyBoZWlnaHQ6IDRweDsgfVxuICAgICAgICAgICAgLnByb2dyZXNzLWNlbnRlciB7IGZvbnQtc2l6ZTogN3B4OyB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYuc20ge1xuICAgICAgICAgICAgLnByb2dyZXNzLXRyYWNrIHsgaGVpZ2h0OiA0cHg7IH1cbiAgICAgICAgICAgIC5wcm9ncmVzcy1jZW50ZXIgeyBmb250LXNpemU6IDlweDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmLm1kIHtcbiAgICAgICAgICAgIC5wcm9ncmVzcy10cmFjayB7IGhlaWdodDogNHB4OyB9XG4gICAgICAgICAgICAucHJvZ3Jlc3MtY2VudGVyIHsgZm9udC1zaXplOiAxMHB4OyB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYubGcge1xuICAgICAgICAgICAgLnByb2dyZXNzLXRyYWNrIHsgaGVpZ2h0OiA2cHg7IH1cbiAgICAgICAgICAgIC5wcm9ncmVzcy1jZW50ZXIgeyBmb250LXNpemU6IDEycHg7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJi54bCB7XG4gICAgICAgICAgICAucHJvZ3Jlc3MtdHJhY2sgeyBoZWlnaHQ6IDhweDsgfVxuICAgICAgICAgICAgLnByb2dyZXNzLWNlbnRlciB7IGZvbnQtc2l6ZTogMTRweDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQGtleWZyYW1lcyBpbmRldGVybWluYXRlLW1hdGVyaWFsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNjYWxlWCgwLjgpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSBzY2FsZVgoMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU29nbmF0b3JlUHJvZ3Jlc3MgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6ICdsaW5lYXInIHwgJ2NpcmN1bGFyJyA9ICdsaW5lYXInO1xuICBASW5wdXQoKSB2YXJpYW50OiAnYmFzaWMnIHwgJ21hdGVyaWFsJyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBzaXplOiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyA9ICdtZCc7XG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnIHwgJ2luZm8nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbFRlbXBsYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0cm9rZVdpZHRoOiBudW1iZXIgPSA0O1xuICBASW5wdXQoKSBjaXJjdWxhclNpemU6IG51bWJlciA9IDQwO1xuICBASW5wdXQoKSBoYXNDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBjdXJyZW50VmFsdWU6IG51bWJlciA9IDA7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWyd2YWx1ZSddKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdGhpcy52YWx1ZSkpO1xuICB9XG5cbiAgZ2V0Q2lyY3VsYXJTaXplKCk6IG51bWJlciB7XG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgIHhzOiAyNCxcbiAgICAgIHNtOiAzMixcbiAgICAgIG1kOiA0MCxcbiAgICAgIGxnOiA1NixcbiAgICAgIHhsOiA3MlxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuY2lyY3VsYXJTaXplIHx8IHNpemVNYXBbdGhpcy5zaXplXTtcbiAgfVxuXG4gIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5nZXRDaXJjdWxhclNpemUoKSAtIHRoaXMuc3Ryb2tlV2lkdGgpIC8gMjtcbiAgfVxuXG4gIGdldENpcmN1bWZlcmVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiB0aGlzLmdldFJhZGl1cygpO1xuICB9XG5cbiAgZ2V0U3Ryb2tlRGFzaE9mZnNldCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSB0aGlzLmdldENpcmN1bWZlcmVuY2UoKTtcbiAgICByZXR1cm4gY2lyY3VtZmVyZW5jZSAtICh0aGlzLmN1cnJlbnRWYWx1ZSAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlO1xuICB9XG5cbiAgZ2V0UHJvZ3Jlc3NDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzYWZlVmFyaWFudCA9IHR5cGVvZiB0aGlzLnZhcmlhbnQgPT09ICdzdHJpbmcnID8gdGhpcy52YXJpYW50IDogJ2Jhc2ljJztcbiAgICBjb25zdCBzYWZlU2l6ZSA9IHR5cGVvZiB0aGlzLnNpemUgPT09ICdzdHJpbmcnID8gdGhpcy5zaXplIDogJ21kJztcbiAgICBcbiAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtzYWZlVmFyaWFudCwgc2FmZVNpemVdO1xuICAgIFxuICAgIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaW5kZXRlcm1pbmF0ZScpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGdldENpcmNsZUNsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNhZmVDb2xvciA9IHR5cGVvZiB0aGlzLmNvbG9yID09PSAnc3RyaW5nJyA/IHRoaXMuY29sb3IgOiAncHJpbWFyeSc7XG4gICAgXG4gICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbc2FmZUNvbG9yXTtcbiAgICBcbiAgICBpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2luZGV0ZXJtaW5hdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn0iXX0=