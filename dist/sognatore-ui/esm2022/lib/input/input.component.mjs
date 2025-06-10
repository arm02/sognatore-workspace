import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreInput {
    constructor() {
        this.type = 'text';
        this.name = '';
        this.placeholder = '';
        this.label = '';
        this.helperText = '';
        this.errorMessage = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.size = 'medium';
        this.variant = 'outlined';
        this.state = 'default';
        this.prefixIcon = '';
        this.suffixIcon = '';
        this.inputId = `sog-input-${Math.random().toString(36).substr(2, 9)}`;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.value = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    handleInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(target.value);
        this.inputChange.emit(target.value);
    }
    handleFocus(event) {
        this.focus.emit(event);
    }
    handleBlur(event) {
        this.onTouched();
        this.blur.emit(event);
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    getContainerClasses() {
        const safeSize = typeof this.size === 'string' ? this.size : 'medium';
        const safeVariant = typeof this.variant === 'string' ? this.variant : 'outlined';
        const safeState = typeof this.state === 'string' ? this.state : 'default';
        return [safeSize, safeVariant, safeState];
    }
    getInputClasses() {
        const safeSize = typeof this.size === 'string' ? this.size : 'medium';
        const safeVariant = typeof this.variant === 'string' ? this.variant : 'outlined';
        const safeState = typeof this.state === 'string' ? this.state : 'default';
        const classes = [safeSize, safeVariant, safeState];
        if (this.prefixIcon) {
            classes.push('has-prefix');
        }
        if (this.suffixIcon) {
            classes.push('has-suffix');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreInput, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreInput, isStandalone: true, selector: "sog-input", inputs: { type: "type", name: "name", placeholder: "placeholder", label: "label", helperText: "helperText", errorMessage: "errorMessage", required: "required", disabled: "disabled", readonly: "readonly", size: "size", variant: "variant", state: "state", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", inputId: "inputId" }, outputs: { focus: "focus", blur: "blur", inputChange: "inputChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreInput),
                multi: true,
            },
        ], ngImport: i0, template: `
    <div class="sog-input-container" [ngClass]="getContainerClasses()">
      <label *ngIf="label" class="sog-input-label" [for]="inputId">{{ label }}</label>
      <div class="sog-input-wrapper">
        <span *ngIf="prefixIcon" class="sog-input-icon prefix">{{ prefixIcon }}</span>
        <input
          [id]="inputId"
          [type]="type"
          [name]="name"
          [placeholder]="placeholder"
          [required]="required"
          [disabled]="disabled"
          [readonly]="readonly"
          class="sog-input"
          [ngClass]="getInputClasses()"
          [value]="value"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)"
          (focus)="handleFocus($event)"
        />
        <span *ngIf="suffixIcon" class="sog-input-icon suffix">{{ suffixIcon }}</span>
      </div>
      <div *ngIf="helperText || errorMessage" class="sog-input-helper">
        <span *ngIf="errorMessage && state === 'error'" class="error-text">{{ errorMessage }}</span>
        <span *ngIf="helperText && state !== 'error'" class="helper-text">{{ helperText }}</span>
      </div>
    </div>
  `, isInline: true, styles: [".sog-input-container{display:flex;flex-direction:column;gap:.5rem;width:100%}.sog-input-label{font-size:.875rem;font-weight:500;color:#374151;margin-bottom:.25rem}.sog-input-wrapper{position:relative;display:flex;align-items:center}.sog-input{width:100%;padding:.75rem 1rem;font-size:1rem;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;transition:all .2s ease;font-family:inherit;line-height:1.5}.sog-input:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.sog-input:disabled{background-color:#f9fafb;color:#6b7280;cursor:not-allowed}.sog-input:read-only{background-color:#f9fafb}.sog-input.has-prefix{padding-left:2.5rem}.sog-input.has-suffix{padding-right:2.5rem}.sog-input.small{padding:.5rem .75rem;font-size:.875rem}.sog-input.small.has-prefix{padding-left:2rem}.sog-input.small.has-suffix{padding-right:2rem}.sog-input.large{padding:1rem 1.25rem;font-size:1.125rem}.sog-input.large.has-prefix{padding-left:3rem}.sog-input.large.has-suffix{padding-right:3rem}.sog-input.outlined{border:1px solid #d1d5db;background-color:#fff}.sog-input.filled{border:1px solid transparent;background-color:#f3f4f6}.sog-input.filled:focus{background-color:#fff;border-color:#3b82f6}.sog-input.underlined{border:none;border-bottom:2px solid #d1d5db;border-radius:0;background-color:transparent;padding-left:0;padding-right:0}.sog-input.underlined:focus{border-bottom-color:#3b82f6;box-shadow:none}.sog-input.error{border-color:#ef4444}.sog-input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.sog-input.success{border-color:#10b981}.sog-input.success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.sog-input.warning{border-color:#f59e0b}.sog-input.warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.sog-input-icon{position:absolute;top:50%;transform:translateY(-50%);color:#6b7280;font-size:1rem;pointer-events:none}.sog-input-icon.prefix{left:.75rem}.sog-input-icon.suffix{right:.75rem}.sog-input-helper{font-size:.875rem;margin-top:.25rem}.error-text{color:#ef4444}.helper-text{color:#6b7280}.sog-input-container.small .sog-input-icon{font-size:.875rem}.sog-input-container.small .sog-input-icon.prefix{left:.5rem}.sog-input-container.small .sog-input-icon.suffix{right:.5rem}.sog-input-container.large .sog-input-icon{font-size:1.125rem}.sog-input-container.large .sog-input-icon.prefix{left:1rem}.sog-input-container.large .sog-input-icon.suffix{right:1rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreInput, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'sog-input', imports: [CommonModule, FormsModule], template: `
    <div class="sog-input-container" [ngClass]="getContainerClasses()">
      <label *ngIf="label" class="sog-input-label" [for]="inputId">{{ label }}</label>
      <div class="sog-input-wrapper">
        <span *ngIf="prefixIcon" class="sog-input-icon prefix">{{ prefixIcon }}</span>
        <input
          [id]="inputId"
          [type]="type"
          [name]="name"
          [placeholder]="placeholder"
          [required]="required"
          [disabled]="disabled"
          [readonly]="readonly"
          class="sog-input"
          [ngClass]="getInputClasses()"
          [value]="value"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)"
          (focus)="handleFocus($event)"
        />
        <span *ngIf="suffixIcon" class="sog-input-icon suffix">{{ suffixIcon }}</span>
      </div>
      <div *ngIf="helperText || errorMessage" class="sog-input-helper">
        <span *ngIf="errorMessage && state === 'error'" class="error-text">{{ errorMessage }}</span>
        <span *ngIf="helperText && state !== 'error'" class="helper-text">{{ helperText }}</span>
      </div>
    </div>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreInput),
                            multi: true,
                        },
                    ], styles: [".sog-input-container{display:flex;flex-direction:column;gap:.5rem;width:100%}.sog-input-label{font-size:.875rem;font-weight:500;color:#374151;margin-bottom:.25rem}.sog-input-wrapper{position:relative;display:flex;align-items:center}.sog-input{width:100%;padding:.75rem 1rem;font-size:1rem;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;transition:all .2s ease;font-family:inherit;line-height:1.5}.sog-input:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.sog-input:disabled{background-color:#f9fafb;color:#6b7280;cursor:not-allowed}.sog-input:read-only{background-color:#f9fafb}.sog-input.has-prefix{padding-left:2.5rem}.sog-input.has-suffix{padding-right:2.5rem}.sog-input.small{padding:.5rem .75rem;font-size:.875rem}.sog-input.small.has-prefix{padding-left:2rem}.sog-input.small.has-suffix{padding-right:2rem}.sog-input.large{padding:1rem 1.25rem;font-size:1.125rem}.sog-input.large.has-prefix{padding-left:3rem}.sog-input.large.has-suffix{padding-right:3rem}.sog-input.outlined{border:1px solid #d1d5db;background-color:#fff}.sog-input.filled{border:1px solid transparent;background-color:#f3f4f6}.sog-input.filled:focus{background-color:#fff;border-color:#3b82f6}.sog-input.underlined{border:none;border-bottom:2px solid #d1d5db;border-radius:0;background-color:transparent;padding-left:0;padding-right:0}.sog-input.underlined:focus{border-bottom-color:#3b82f6;box-shadow:none}.sog-input.error{border-color:#ef4444}.sog-input.error:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.sog-input.success{border-color:#10b981}.sog-input.success:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.sog-input.warning{border-color:#f59e0b}.sog-input.warning:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.sog-input-icon{position:absolute;top:50%;transform:translateY(-50%);color:#6b7280;font-size:1rem;pointer-events:none}.sog-input-icon.prefix{left:.75rem}.sog-input-icon.suffix{right:.75rem}.sog-input-helper{font-size:.875rem;margin-top:.25rem}.error-text{color:#ef4444}.helper-text{color:#6b7280}.sog-input-container.small .sog-input-icon{font-size:.875rem}.sog-input-container.small .sog-input-icon.prefix{left:.5rem}.sog-input-container.small .sog-input-icon.suffix{right:.5rem}.sog-input-container.large .sog-input-icon{font-size:1.125rem}.sog-input-container.large .sog-input-icon.prefix{left:1rem}.sog-input-container.large .sog-input-icon.suffix{right:1rem}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], state: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], inputId: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], inputChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29nbmF0b3JlLXVpL3NyYy9saWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDOzs7QUFtUHhCLE1BQU0sT0FBTyxjQUFjO0lBalAzQjtRQWtQVyxTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBaUMsUUFBUSxDQUFDO1FBQzlDLFlBQU8sR0FBeUMsVUFBVSxDQUFDO1FBQzNELFVBQUssR0FBZ0QsU0FBUyxDQUFDO1FBQy9ELGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVcsYUFBYSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUV4RSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNsQyxTQUFJ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RyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ3NvZy1pbnB1dCcsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic29nLWlucHV0LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImdldENvbnRhaW5lckNsYXNzZXMoKVwiPlxuICAgICAgPGxhYmVsICpuZ0lmPVwibGFiZWxcIiBjbGFzcz1cInNvZy1pbnB1dC1sYWJlbFwiIFtmb3JdPVwiaW5wdXRJZFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzb2ctaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInByZWZpeEljb25cIiBjbGFzcz1cInNvZy1pbnB1dC1pY29uIHByZWZpeFwiPnt7IHByZWZpeEljb24gfX08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtpZF09XCJpbnB1dElkXCJcbiAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgIGNsYXNzPVwic29nLWlucHV0XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJnZXRJbnB1dENsYXNzZXMoKVwiXG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAoaW5wdXQpPVwiaGFuZGxlSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwiaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic3VmZml4SWNvblwiIGNsYXNzPVwic29nLWlucHV0LWljb24gc3VmZml4XCI+e3sgc3VmZml4SWNvbiB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgfHwgZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJzb2ctaW5wdXQtaGVscGVyXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZXJyb3JNZXNzYWdlICYmIHN0YXRlID09PSAnZXJyb3InXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+e3sgZXJyb3JNZXNzYWdlIH19PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImhlbHBlclRleHQgJiYgc3RhdGUgIT09ICdlcnJvcidcIiBjbGFzcz1cImhlbHBlci10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvZ25hdG9yZUlucHV0KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0OmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICAgICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dDpyZWFkLW9ubHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0Lmhhcy1wcmVmaXgge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC5oYXMtc3VmZml4IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBTaXplcyAqL1xuICAgICAgLnNvZy1pbnB1dC5zbWFsbCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LnNtYWxsLmhhcy1wcmVmaXgge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQuc21hbGwuaGFzLXN1ZmZpeCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQubGFyZ2Uge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQubGFyZ2UuaGFzLXByZWZpeCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC5sYXJnZS5oYXMtc3VmZml4IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogVmFyaWFudHMgKi9cbiAgICAgIC5zb2ctaW5wdXQub3V0bGluZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC5maWxsZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC5maWxsZWQ6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LnVuZGVybGluZWQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDFkNWRiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LnVuZGVybGluZWQ6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjM2I4MmY2O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBTdGF0ZXMgKi9cbiAgICAgIC5zb2ctaW5wdXQuZXJyb3Ige1xuICAgICAgICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQuZXJyb3I6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LnN1Y2Nlc3Mge1xuICAgICAgICBib3JkZXItY29sb3I6ICMxMGI5ODE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQuc3VjY2Vzczpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzEwYjk4MTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0Lndhcm5pbmcge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmNTllMGI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQud2FybmluZzpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y1OWUwYjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC1pY29uLnByZWZpeCB7XG4gICAgICAgIGxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQtaWNvbi5zdWZmaXgge1xuICAgICAgICByaWdodDogMC43NXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC1oZWxwZXIge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuZXJyb3ItdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaGVscGVyLXRleHQge1xuICAgICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogQ29udGFpbmVyIHNpemUgdmFyaWFudHMgKi9cbiAgICAgIC5zb2ctaW5wdXQtY29udGFpbmVyLnNtYWxsIC5zb2ctaW5wdXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQtY29udGFpbmVyLnNtYWxsIC5zb2ctaW5wdXQtaWNvbi5wcmVmaXgge1xuICAgICAgICBsZWZ0OiAwLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zb2ctaW5wdXQtY29udGFpbmVyLnNtYWxsIC5zb2ctaW5wdXQtaWNvbi5zdWZmaXgge1xuICAgICAgICByaWdodDogMC41cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LWNvbnRhaW5lci5sYXJnZSAuc29nLWlucHV0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc29nLWlucHV0LWNvbnRhaW5lci5sYXJnZSAuc29nLWlucHV0LWljb24ucHJlZml4IHtcbiAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvZy1pbnB1dC1jb250YWluZXIubGFyZ2UgLnNvZy1pbnB1dC1pY29uLnN1ZmZpeCB7XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvZ25hdG9yZUlucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZScgPSAnbWVkaXVtJztcbiAgQElucHV0KCkgdmFyaWFudDogJ291dGxpbmVkJyB8ICdmaWxsZWQnIHwgJ3VuZGVybGluZWQnID0gJ291dGxpbmVkJztcbiAgQElucHV0KCkgc3RhdGU6ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnc3VjY2VzcycgfCAnd2FybmluZycgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHByZWZpeEljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzdWZmaXhJY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nID0gYHNvZy1pbnB1dC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gO1xuICBcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGhhbmRsZUlucHV0KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0YXJnZXQudmFsdWUpO1xuICB9XG4gIFxuICBoYW5kbGVGb2N1cyhldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG4gIFxuICBoYW5kbGVCbHVyKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGdldENvbnRhaW5lckNsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNhZmVTaXplID0gdHlwZW9mIHRoaXMuc2l6ZSA9PT0gJ3N0cmluZycgPyB0aGlzLnNpemUgOiAnbWVkaXVtJztcbiAgICBjb25zdCBzYWZlVmFyaWFudCA9IHR5cGVvZiB0aGlzLnZhcmlhbnQgPT09ICdzdHJpbmcnID8gdGhpcy52YXJpYW50IDogJ291dGxpbmVkJztcbiAgICBjb25zdCBzYWZlU3RhdGUgPSB0eXBlb2YgdGhpcy5zdGF0ZSA9PT0gJ3N0cmluZycgPyB0aGlzLnN0YXRlIDogJ2RlZmF1bHQnO1xuICAgIFxuICAgIHJldHVybiBbc2FmZVNpemUsIHNhZmVWYXJpYW50LCBzYWZlU3RhdGVdO1xuICB9XG5cbiAgZ2V0SW5wdXRDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzYWZlU2l6ZSA9IHR5cGVvZiB0aGlzLnNpemUgPT09ICdzdHJpbmcnID8gdGhpcy5zaXplIDogJ21lZGl1bSc7XG4gICAgY29uc3Qgc2FmZVZhcmlhbnQgPSB0eXBlb2YgdGhpcy52YXJpYW50ID09PSAnc3RyaW5nJyA/IHRoaXMudmFyaWFudCA6ICdvdXRsaW5lZCc7XG4gICAgY29uc3Qgc2FmZVN0YXRlID0gdHlwZW9mIHRoaXMuc3RhdGUgPT09ICdzdHJpbmcnID8gdGhpcy5zdGF0ZSA6ICdkZWZhdWx0JztcbiAgICBcbiAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtzYWZlU2l6ZSwgc2FmZVZhcmlhbnQsIHNhZmVTdGF0ZV07XG4gICAgXG4gICAgaWYgKHRoaXMucHJlZml4SWNvbikge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdoYXMtcHJlZml4Jyk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnN1ZmZpeEljb24pIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaGFzLXN1ZmZpeCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19