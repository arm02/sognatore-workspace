import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, forwardRef, HostListener, ContentChildren, ViewContainerRef, ViewChild, Inject, inject, EnvironmentInjector, ApplicationRef, Injector, createComponent, Injectable } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i1$1 from '@angular/platform-browser';

class SognatoreButton {
    constructor() {
        this.variant = 'primary';
        this.size = 'medium';
        this.type = 'button';
        this.disabled = false;
        this.loading = false;
        this.loadingText = 'Loading...';
        this.fullWidth = false;
        this.click = new EventEmitter();
    }
    onClick(event) {
        if (!this.disabled && !this.loading) {
            this.click.emit(event);
        }
    }
    getButtonClasses() {
        const safeVariant = typeof this.variant === 'string' ? this.variant : 'primary';
        const safeSize = typeof this.size === 'string' ? this.size : 'medium';
        const classes = [safeVariant, safeSize];
        if (this.fullWidth) {
            classes.push('full-width');
        }
        if (this.loading) {
            classes.push('loading');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreButton, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreButton, isStandalone: true, selector: "sog-button", inputs: { variant: "variant", size: "size", type: "type", disabled: "disabled", loading: "loading", loadingText: "loadingText", fullWidth: "fullWidth" }, outputs: { click: "click" }, ngImport: i0, template: `
    <button 
      class="sog-button" 
      [ngClass]="getButtonClasses()"
      [disabled]="disabled || loading"
      [type]="type"
      (click)="onClick($event)">
      <span *ngIf="loading" class="loading-spinner"></span>
      <ng-content *ngIf="!loading"></ng-content>
      <span *ngIf="loading">{{ loadingText }}</span>
    </button>
  `, isInline: true, styles: [".sog-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.75rem 1.5rem;font-size:1rem;font-weight:500;border-radius:6px;border:1px solid transparent;cursor:pointer;transition:all .2s ease;text-decoration:none;font-family:inherit;line-height:1.5}.sog-button:focus{outline:none;box-shadow:0 0 0 3px #3498db1a}.sog-button:disabled{opacity:.6;cursor:not-allowed}.sog-button.primary{background-color:#3498db;color:#fff}.sog-button.primary:hover:not(:disabled){background-color:#2980b9}.sog-button.secondary{background-color:#6b7280;color:#fff}.sog-button.secondary:hover:not(:disabled){background-color:#4b5563}.sog-button.success{background-color:#10b981;color:#fff}.sog-button.success:hover:not(:disabled){background-color:#059669}.sog-button.danger{background-color:#ef4444;color:#fff}.sog-button.danger:hover:not(:disabled){background-color:#dc2626}.sog-button.warning{background-color:#f59e0b;color:#fff}.sog-button.warning:hover:not(:disabled){background-color:#d97706}.sog-button.outline{background-color:transparent;color:#3498db;border-color:#3498db}.sog-button.outline:hover:not(:disabled){background-color:#eff6ff}.sog-button.ghost{background-color:transparent;color:#374151}.sog-button.ghost:hover:not(:disabled){background-color:#f3f4f6}.sog-button.link{background-color:transparent;color:#3498db;padding:0;border:none;text-decoration:underline}.sog-button.link:hover:not(:disabled){color:#2980b9}.sog-button.small{padding:.5rem 1rem;font-size:.875rem}.sog-button.large{padding:1rem 2rem;font-size:1.125rem}.sog-button.full-width{width:100%}.sog-button.loading{cursor:wait}.loading-spinner{width:1rem;height:1rem;border:2px solid transparent;border-top:2px solid currentColor;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreButton, decorators: [{
            type: Component,
            args: [{ selector: 'sog-button', standalone: true, imports: [CommonModule], template: `
    <button 
      class="sog-button" 
      [ngClass]="getButtonClasses()"
      [disabled]="disabled || loading"
      [type]="type"
      (click)="onClick($event)">
      <span *ngIf="loading" class="loading-spinner"></span>
      <ng-content *ngIf="!loading"></ng-content>
      <span *ngIf="loading">{{ loadingText }}</span>
    </button>
  `, styles: [".sog-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.75rem 1.5rem;font-size:1rem;font-weight:500;border-radius:6px;border:1px solid transparent;cursor:pointer;transition:all .2s ease;text-decoration:none;font-family:inherit;line-height:1.5}.sog-button:focus{outline:none;box-shadow:0 0 0 3px #3498db1a}.sog-button:disabled{opacity:.6;cursor:not-allowed}.sog-button.primary{background-color:#3498db;color:#fff}.sog-button.primary:hover:not(:disabled){background-color:#2980b9}.sog-button.secondary{background-color:#6b7280;color:#fff}.sog-button.secondary:hover:not(:disabled){background-color:#4b5563}.sog-button.success{background-color:#10b981;color:#fff}.sog-button.success:hover:not(:disabled){background-color:#059669}.sog-button.danger{background-color:#ef4444;color:#fff}.sog-button.danger:hover:not(:disabled){background-color:#dc2626}.sog-button.warning{background-color:#f59e0b;color:#fff}.sog-button.warning:hover:not(:disabled){background-color:#d97706}.sog-button.outline{background-color:transparent;color:#3498db;border-color:#3498db}.sog-button.outline:hover:not(:disabled){background-color:#eff6ff}.sog-button.ghost{background-color:transparent;color:#374151}.sog-button.ghost:hover:not(:disabled){background-color:#f3f4f6}.sog-button.link{background-color:transparent;color:#3498db;padding:0;border:none;text-decoration:underline}.sog-button.link:hover:not(:disabled){color:#2980b9}.sog-button.small{padding:.5rem 1rem;font-size:.875rem}.sog-button.large{padding:1rem 2rem;font-size:1.125rem}.sog-button.full-width{width:100%}.sog-button.loading{cursor:wait}.loading-spinner{width:1rem;height:1rem;border:2px solid transparent;border-top:2px solid currentColor;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingText: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], click: [{
                type: Output
            }] } });

class SognatoreInput {
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

class SognatoreDatepicker {
    constructor() {
        this.class = 'basic';
        this.placeholder = '';
        this.disabled = false;
        this.min = '';
        this.max = '';
        this.value = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    handleInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(target.value);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreDatepicker, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreDatepicker, isStandalone: true, selector: "sog-datepicker", inputs: { class: "class", placeholder: "placeholder", disabled: "disabled", min: "min", max: "max" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreDatepicker),
                multi: true,
            },
        ], ngImport: i0, template: `
    <div class="sog-datepicker" [ngClass]="class">
      <input
        type="date"
        [value]="value"
        [min]="min"
        [max]="max"
        [disabled]="disabled"
        [placeholder]="placeholder"
        class="datepicker-input"
        (input)="handleInput($event)"
        (blur)="onTouched()"
      />
      <div class="datepicker-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  `, isInline: true, styles: [".sog-datepicker{position:relative;display:inline-block;width:100%}.sog-datepicker.basic .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:10px;color:#333}.sog-datepicker.basic .datepicker-input:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-datepicker.basic .datepicker-input:disabled{background:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.basic .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}.sog-datepicker.outlined .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:4px;color:#333;transition:border-color .3s ease}.sog-datepicker.outlined .datepicker-input:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-datepicker.outlined .datepicker-input:disabled{background:#f5f5f5;border-color:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.outlined .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreDatepicker, decorators: [{
            type: Component,
            args: [{ selector: 'sog-datepicker', standalone: true, imports: [CommonModule], template: `
    <div class="sog-datepicker" [ngClass]="class">
      <input
        type="date"
        [value]="value"
        [min]="min"
        [max]="max"
        [disabled]="disabled"
        [placeholder]="placeholder"
        class="datepicker-input"
        (input)="handleInput($event)"
        (blur)="onTouched()"
      />
      <div class="datepicker-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreDatepicker),
                            multi: true,
                        },
                    ], styles: [".sog-datepicker{position:relative;display:inline-block;width:100%}.sog-datepicker.basic .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:10px;color:#333}.sog-datepicker.basic .datepicker-input:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-datepicker.basic .datepicker-input:disabled{background:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.basic .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}.sog-datepicker.outlined .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:4px;color:#333;transition:border-color .3s ease}.sog-datepicker.outlined .datepicker-input:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-datepicker.outlined .datepicker-input:disabled{background:#f5f5f5;border-color:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.outlined .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }] } });

class SognatoreSelect {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.class = 'basic';
        this.placeholder = 'Select an option';
        this.disabled = false;
        this.options = [];
        this.selectionChange = new EventEmitter();
        this.value = null;
        this.isOpen = false;
        this.selectedOption = null;
        this.highlightedOption = null;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    onDocumentClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }
    toggle() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
            if (this.isOpen && this.selectedOption) {
                this.highlightedOption = this.selectedOption;
            }
        }
    }
    selectOption(option) {
        if (!option.disabled) {
            this.value = option.value;
            this.selectedOption = option;
            this.isOpen = false;
            this.onChange(option.value);
            this.selectionChange.emit(option);
        }
    }
    onKeyDown(event) {
        if (this.disabled)
            return;
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (!this.isOpen) {
                    this.isOpen = true;
                    this.highlightedOption = this.selectedOption;
                }
                else if (this.highlightedOption) {
                    this.selectOption(this.highlightedOption);
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.isOpen = true;
                    this.highlightedOption = this.selectedOption || this.options[0];
                }
                else {
                    this.highlightNext();
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (this.isOpen) {
                    this.highlightPrevious();
                }
                break;
            case 'Escape':
                this.isOpen = false;
                break;
        }
    }
    highlightNext() {
        const currentIndex = this.options.indexOf(this.highlightedOption);
        const nextIndex = (currentIndex + 1) % this.options.length;
        this.highlightedOption = this.options[nextIndex];
    }
    highlightPrevious() {
        const currentIndex = this.options.indexOf(this.highlightedOption);
        const prevIndex = currentIndex <= 0 ? this.options.length - 1 : currentIndex - 1;
        this.highlightedOption = this.options[prevIndex];
    }
    trackByValue(index, option) {
        return option.value;
    }
    writeValue(value) {
        this.value = value;
        this.selectedOption = this.options.find(option => option.value === value) || null;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreSelect, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreSelect, isStandalone: true, selector: "sog-select", inputs: { class: "class", placeholder: "placeholder", disabled: "disabled", options: "options" }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreSelect),
                multi: true,
            },
        ], ngImport: i0, template: `
    <div class="sog-select" [ngClass]="[class, { 'disabled': disabled, 'open': isOpen }]">
      <div 
        class="select-trigger" 
        (click)="toggle()"
        [attr.tabindex]="disabled ? -1 : 0"
        (keydown)="onKeyDown($event)"
      >
        <span class="select-value">
          {{ selectedOption?.label || placeholder }}
        </span>
        <div class="select-arrow" [ngClass]="{ 'open': isOpen }">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div class="select-dropdown" *ngIf="isOpen">
        <div 
          class="select-option" 
          *ngFor="let option of options; trackBy: trackByValue"
          [ngClass]="{ 
            'selected': option.value === value, 
            'disabled': option.disabled,
            'highlighted': option === highlightedOption
          }"
          (click)="selectOption(option)"
          (mouseenter)="highlightedOption = option"
        >
          {{ option.label }}
        </div>
        <div class="select-option disabled" *ngIf="options.length === 0">
          No options available
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-select{position:relative;display:inline-block;width:100%}.sog-select.basic .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:10px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background-color .3s ease}.sog-select.basic .select-trigger:hover:not(.disabled){background:#e8e8e8}.sog-select.basic .select-trigger:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-select.basic .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border-radius:10px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.outlined .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:4px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:border-color .3s ease}.sog-select.outlined .select-trigger:hover:not(.disabled){border-color:#bbb}.sog-select.outlined .select-trigger:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-select.outlined .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.disabled .select-trigger{background:#e0e0e0!important;color:#999;cursor:not-allowed;border-color:#e0e0e0!important}.sog-select .select-value{flex:1;color:inherit}.sog-select .select-arrow{transition:transform .3s ease;color:#666}.sog-select .select-arrow.open{transform:rotate(180deg)}.sog-select .select-option{padding:12px 15px;cursor:pointer;transition:background-color .2s ease;font-size:14px}.sog-select .select-option:hover:not(.disabled){background:#f5f5f5}.sog-select .select-option.selected{background:#3498db;color:#fff}.sog-select .select-option.highlighted{background:#e3f2fd}.sog-select .select-option.disabled{color:#999;cursor:not-allowed}.sog-select .select-option:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.sog-select .select-option:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreSelect, decorators: [{
            type: Component,
            args: [{ selector: 'sog-select', standalone: true, imports: [CommonModule], template: `
    <div class="sog-select" [ngClass]="[class, { 'disabled': disabled, 'open': isOpen }]">
      <div 
        class="select-trigger" 
        (click)="toggle()"
        [attr.tabindex]="disabled ? -1 : 0"
        (keydown)="onKeyDown($event)"
      >
        <span class="select-value">
          {{ selectedOption?.label || placeholder }}
        </span>
        <div class="select-arrow" [ngClass]="{ 'open': isOpen }">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div class="select-dropdown" *ngIf="isOpen">
        <div 
          class="select-option" 
          *ngFor="let option of options; trackBy: trackByValue"
          [ngClass]="{ 
            'selected': option.value === value, 
            'disabled': option.disabled,
            'highlighted': option === highlightedOption
          }"
          (click)="selectOption(option)"
          (mouseenter)="highlightedOption = option"
        >
          {{ option.label }}
        </div>
        <div class="select-option disabled" *ngIf="options.length === 0">
          No options available
        </div>
      </div>
    </div>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreSelect),
                            multi: true,
                        },
                    ], styles: [".sog-select{position:relative;display:inline-block;width:100%}.sog-select.basic .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:10px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background-color .3s ease}.sog-select.basic .select-trigger:hover:not(.disabled){background:#e8e8e8}.sog-select.basic .select-trigger:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-select.basic .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border-radius:10px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.outlined .select-trigger{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px;box-sizing:border-box;font-size:14px;border-radius:4px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:border-color .3s ease}.sog-select.outlined .select-trigger:hover:not(.disabled){border-color:#bbb}.sog-select.outlined .select-trigger:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-select.outlined .select-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #00000026;z-index:1000;margin-top:4px;max-height:200px;overflow-y:auto}.sog-select.disabled .select-trigger{background:#e0e0e0!important;color:#999;cursor:not-allowed;border-color:#e0e0e0!important}.sog-select .select-value{flex:1;color:inherit}.sog-select .select-arrow{transition:transform .3s ease;color:#666}.sog-select .select-arrow.open{transform:rotate(180deg)}.sog-select .select-option{padding:12px 15px;cursor:pointer;transition:background-color .2s ease;font-size:14px}.sog-select .select-option:hover:not(.disabled){background:#f5f5f5}.sog-select .select-option.selected{background:#3498db;color:#fff}.sog-select .select-option.highlighted{background:#e3f2fd}.sog-select .select-option.disabled{color:#999;cursor:not-allowed}.sog-select .select-option:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.sog-select .select-option:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { class: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class SognatoreCheckbox {
    constructor() {
        this.class = 'basic';
        this.label = '';
        this.disabled = false;
        this.indeterminate = false;
        this.checked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    handleChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    }
    writeValue(value) {
        this.checked = value || false;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCheckbox, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreCheckbox, isStandalone: true, selector: "sog-checkbox", inputs: { class: "class", label: "label", disabled: "disabled", indeterminate: "indeterminate" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreCheckbox),
                multi: true,
            },
        ], ngImport: i0, template: `
    <label class="sog-checkbox" [ngClass]="[class, { 'disabled': disabled, 'checked': checked }]">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="checkbox-input"
      />
      <div class="checkbox-box">
        <svg 
          class="checkbox-icon" 
          [ngClass]="{ 'visible': checked || indeterminate }"
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            *ngIf="!indeterminate"
            d="M2 6L5 9L10 3" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
          <path 
            *ngIf="indeterminate"
            d="M3 6H9" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round"
          />
        </svg>
      </div>
      <span class="checkbox-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, isInline: true, styles: [".sog-checkbox{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-checkbox.basic .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.basic .checkbox-box{width:18px;height:18px;border:2px solid #ddd;border-radius:3px;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px}.sog-checkbox.basic .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(.5);transition:all .2s ease}.sog-checkbox.basic .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.basic .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-checkbox.basic:hover:not(.disabled) .checkbox-box{border-color:#3498db}.sog-checkbox.basic.checked .checkbox-box{background:#3498db;border-color:#3498db}.sog-checkbox.basic.disabled{cursor:not-allowed}.sog-checkbox.basic.disabled .checkbox-box{background:#f5f5f5;border-color:#e0e0e0}.sog-checkbox.basic.disabled .checkbox-label{color:#999}.sog-checkbox.basic.disabled.checked .checkbox-box{background:#e0e0e0;border-color:#e0e0e0}.sog-checkbox.basic.disabled.checked .checkbox-box .checkbox-icon{color:#999}.sog-checkbox.material .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.material .checkbox-box{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:2px;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px}.sog-checkbox.material .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-checkbox.material .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.material .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-checkbox.material:hover:not(.disabled) .checkbox-box{border-color:#3f51b5}.sog-checkbox.material.checked .checkbox-box{background:#3f51b5;border-color:#3f51b5}.sog-checkbox.material.disabled{cursor:not-allowed}.sog-checkbox.material.disabled .checkbox-box{border-color:#00000042}.sog-checkbox.material.disabled .checkbox-label{color:#00000061}.sog-checkbox.material.disabled.checked .checkbox-box{background:#00000042;border-color:#00000042}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCheckbox, decorators: [{
            type: Component,
            args: [{ selector: 'sog-checkbox', standalone: true, imports: [CommonModule], template: `
    <label class="sog-checkbox" [ngClass]="[class, { 'disabled': disabled, 'checked': checked }]">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="checkbox-input"
      />
      <div class="checkbox-box">
        <svg 
          class="checkbox-icon" 
          [ngClass]="{ 'visible': checked || indeterminate }"
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            *ngIf="!indeterminate"
            d="M2 6L5 9L10 3" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
          <path 
            *ngIf="indeterminate"
            d="M3 6H9" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round"
          />
        </svg>
      </div>
      <span class="checkbox-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreCheckbox),
                            multi: true,
                        },
                    ], styles: [".sog-checkbox{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-checkbox.basic .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.basic .checkbox-box{width:18px;height:18px;border:2px solid #ddd;border-radius:3px;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px}.sog-checkbox.basic .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(.5);transition:all .2s ease}.sog-checkbox.basic .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.basic .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-checkbox.basic:hover:not(.disabled) .checkbox-box{border-color:#3498db}.sog-checkbox.basic.checked .checkbox-box{background:#3498db;border-color:#3498db}.sog-checkbox.basic.disabled{cursor:not-allowed}.sog-checkbox.basic.disabled .checkbox-box{background:#f5f5f5;border-color:#e0e0e0}.sog-checkbox.basic.disabled .checkbox-label{color:#999}.sog-checkbox.basic.disabled.checked .checkbox-box{background:#e0e0e0;border-color:#e0e0e0}.sog-checkbox.basic.disabled.checked .checkbox-box .checkbox-icon{color:#999}.sog-checkbox.material .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.material .checkbox-box{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:2px;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px}.sog-checkbox.material .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-checkbox.material .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.material .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-checkbox.material:hover:not(.disabled) .checkbox-box{border-color:#3f51b5}.sog-checkbox.material.checked .checkbox-box{background:#3f51b5;border-color:#3f51b5}.sog-checkbox.material.disabled{cursor:not-allowed}.sog-checkbox.material.disabled .checkbox-box{border-color:#00000042}.sog-checkbox.material.disabled .checkbox-label{color:#00000061}.sog-checkbox.material.disabled.checked .checkbox-box{background:#00000042;border-color:#00000042}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }] } });

class SognatoreRadio {
    constructor() {
        this.class = 'basic';
        this.label = '';
        this.value = '';
        this.name = '';
        this.disabled = false;
        this.selectedValue = null;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    get isChecked() {
        return this.selectedValue === this.value;
    }
    handleChange(event) {
        const target = event.target;
        if (target.checked) {
            this.selectedValue = this.value;
            this.onChange(this.value);
        }
    }
    writeValue(value) {
        this.selectedValue = value;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreRadio, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreRadio, isStandalone: true, selector: "sog-radio", inputs: { class: "class", label: "label", value: "value", name: "name", disabled: "disabled" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreRadio),
                multi: true,
            },
        ], ngImport: i0, template: `
    <label class="sog-radio" [ngClass]="[class, { 'disabled': disabled, 'checked': isChecked }]">
      <input
        type="radio"
        [name]="name"
        [value]="value"
        [checked]="isChecked"
        [disabled]="disabled"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="radio-input"
      />
      <div class="radio-circle">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, isInline: true, styles: [".sog-radio{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-radio.basic .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.basic .radio-circle{width:18px;height:18px;border:2px solid #ddd;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px;position:relative}.sog-radio.basic .radio-circle .radio-dot{width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:all .2s ease}.sog-radio.basic .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-radio.basic:hover:not(.disabled) .radio-circle{border-color:#3498db}.sog-radio.basic.checked .radio-circle{border-color:#3498db;background:#3498db}.sog-radio.basic.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.basic.disabled{cursor:not-allowed}.sog-radio.basic.disabled .radio-circle{background:#f5f5f5;border-color:#e0e0e0}.sog-radio.basic.disabled .radio-label{color:#999}.sog-radio.basic.disabled.checked .radio-circle{background:#e0e0e0;border-color:#e0e0e0}.sog-radio.basic.disabled.checked .radio-circle .radio-dot{background:#999}.sog-radio.material .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.material .radio-circle{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:50%;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px;position:relative}.sog-radio.material .radio-circle .radio-dot{width:10px;height:10px;border-radius:50%;background:#3f51b5;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-radio.material .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-radio.material:hover:not(.disabled) .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.material.disabled{cursor:not-allowed}.sog-radio.material.disabled .radio-circle{border-color:#00000042}.sog-radio.material.disabled .radio-label{color:#00000061}.sog-radio.material.disabled.checked .radio-circle .radio-dot{background:#00000042}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreRadio, decorators: [{
            type: Component,
            args: [{ selector: 'sog-radio', standalone: true, imports: [CommonModule], template: `
    <label class="sog-radio" [ngClass]="[class, { 'disabled': disabled, 'checked': isChecked }]">
      <input
        type="radio"
        [name]="name"
        [value]="value"
        [checked]="isChecked"
        [disabled]="disabled"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="radio-input"
      />
      <div class="radio-circle">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreRadio),
                            multi: true,
                        },
                    ], styles: [".sog-radio{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-radio.basic .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.basic .radio-circle{width:18px;height:18px;border:2px solid #ddd;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px;position:relative}.sog-radio.basic .radio-circle .radio-dot{width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:all .2s ease}.sog-radio.basic .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-radio.basic:hover:not(.disabled) .radio-circle{border-color:#3498db}.sog-radio.basic.checked .radio-circle{border-color:#3498db;background:#3498db}.sog-radio.basic.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.basic.disabled{cursor:not-allowed}.sog-radio.basic.disabled .radio-circle{background:#f5f5f5;border-color:#e0e0e0}.sog-radio.basic.disabled .radio-label{color:#999}.sog-radio.basic.disabled.checked .radio-circle{background:#e0e0e0;border-color:#e0e0e0}.sog-radio.basic.disabled.checked .radio-circle .radio-dot{background:#999}.sog-radio.material .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.material .radio-circle{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:50%;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px;position:relative}.sog-radio.material .radio-circle .radio-dot{width:10px;height:10px;border-radius:50%;background:#3f51b5;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-radio.material .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-radio.material:hover:not(.disabled) .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.material.disabled{cursor:not-allowed}.sog-radio.material.disabled .radio-circle{border-color:#00000042}.sog-radio.material.disabled .radio-label{color:#00000061}.sog-radio.material.disabled.checked .radio-circle .radio-dot{background:#00000042}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class SognatoreCard {
    constructor() {
        this.variant = 'outlined';
        this.elevation = 'elevation-1';
        this.hasHeader = false;
        this.hasFooter = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCard, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreCard, isStandalone: true, selector: "sog-card", inputs: { variant: "variant", elevation: "elevation", hasHeader: "hasHeader", hasFooter: "hasFooter" }, ngImport: i0, template: `
    <div class="sog-card" [ngClass]="[variant, elevation]">
      <div class="card-header" *ngIf="hasHeader">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `, isInline: true, styles: [".sog-card{background:#fff;border-radius:8px;overflow:hidden;transition:box-shadow .3s ease}.sog-card.outlined{border:1px solid #e0e0e0}.sog-card.elevated{border:none}.sog-card.elevation-1{box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.sog-card.elevation-2{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card.elevation-3{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card.elevation-4{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card.elevation-5{box-shadow:0 19px 38px #0000004d,0 15px 12px #00000038}.sog-card:hover.elevation-1{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card:hover.elevation-2{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card:hover.elevation-3{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card .card-header{padding:16px 16px 0;border-bottom:1px solid #f0f0f0;margin-bottom:16px}.sog-card .card-header:empty{display:none}.sog-card .card-content{padding:16px}.sog-card .card-footer{padding:16px;border-top:1px solid #f0f0f0;margin-top:16px}.sog-card .card-footer:empty{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCard, decorators: [{
            type: Component,
            args: [{ selector: 'sog-card', standalone: true, imports: [CommonModule], template: `
    <div class="sog-card" [ngClass]="[variant, elevation]">
      <div class="card-header" *ngIf="hasHeader">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `, styles: [".sog-card{background:#fff;border-radius:8px;overflow:hidden;transition:box-shadow .3s ease}.sog-card.outlined{border:1px solid #e0e0e0}.sog-card.elevated{border:none}.sog-card.elevation-1{box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.sog-card.elevation-2{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card.elevation-3{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card.elevation-4{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card.elevation-5{box-shadow:0 19px 38px #0000004d,0 15px 12px #00000038}.sog-card:hover.elevation-1{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card:hover.elevation-2{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card:hover.elevation-3{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card .card-header{padding:16px 16px 0;border-bottom:1px solid #f0f0f0;margin-bottom:16px}.sog-card .card-header:empty{display:none}.sog-card .card-content{padding:16px}.sog-card .card-footer{padding:16px;border-top:1px solid #f0f0f0;margin-top:16px}.sog-card .card-footer:empty{display:none}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], elevation: [{
                type: Input
            }], hasHeader: [{
                type: Input
            }], hasFooter: [{
                type: Input
            }] } });

class SognatoreModal {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isOpen = false;
        this.title = '';
        this.size = 'medium';
        this.fullscreen = false;
        this.hasHeader = false;
        this.hasFooter = false;
        this.showCloseButton = true;
        this.closeOnOverlayClick = true;
        this.closeOnEscape = true;
        this.class = 'basic';
        this.closeModal = new EventEmitter();
        this.openModal = new EventEmitter();
    }
    onEscapeKey(event) {
        if (this.isOpen && this.closeOnEscape) {
            this.close();
        }
    }
    onOverlayClick(event) {
        if (this.closeOnOverlayClick) {
            this.close();
        }
    }
    open() {
        this.isOpen = true;
        this.openModal.emit();
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.isOpen = false;
        this.closeModal.emit();
        document.body.style.overflow = '';
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    getOverlayClasses() {
        // Ensure class is always a string
        if (typeof this.class === 'string') {
            return this.class;
        }
        else if (typeof this.class === 'object' && this.class !== null) {
            console.warn('Modal class input received object instead of string:', this.class, 'using default');
            return 'basic';
        }
        console.warn('Modal class input is undefined/null, using default');
        return 'basic';
    }
    getContainerClasses() {
        const safeSize = typeof this.size === 'string' ? this.size : 'medium';
        if (typeof this.size !== 'string') {
            console.warn('Modal size input received non-string:', typeof this.size, this.size, 'using default');
        }
        const classes = [safeSize];
        if (this.fullscreen) {
            classes.push('fullscreen');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreModal, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreModal, isStandalone: true, selector: "sog-modal", inputs: { isOpen: "isOpen", title: "title", size: "size", fullscreen: "fullscreen", hasHeader: "hasHeader", hasFooter: "hasFooter", showCloseButton: "showCloseButton", closeOnOverlayClick: "closeOnOverlayClick", closeOnEscape: "closeOnEscape", class: "class" }, outputs: { closeModal: "closeModal", openModal: "openModal" }, host: { listeners: { "document:keydown.escape": "onEscapeKey($event)" } }, ngImport: i0, template: `
    <div class="sog-modal-overlay" 
         *ngIf="isOpen" 
         [ngClass]="getOverlayClasses()"
         (click)="onOverlayClick($event)">
      <div class="modal-container" 
           [ngClass]="getContainerClasses()"
           (click)="$event.stopPropagation()">
        
        <div class="modal-header" *ngIf="hasHeader || title">
          <div class="header-content">
            <h3 class="modal-title" *ngIf="title">{{ title }}</h3>
            <ng-content select="[slot=header]"></ng-content>
          </div>
          <button 
            class="close-button" 
            *ngIf="showCloseButton"
            (click)="close()"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        
        <div class="modal-footer" *ngIf="hasFooter">
          <ng-content select="[slot=footer]"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px;box-sizing:border-box;animation:fadeIn .3s ease}.sog-modal-overlay.basic .modal-container{background:#fff;border-radius:8px;box-shadow:0 10px 25px #0003;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s ease}.sog-modal-overlay.basic .modal-container.small{width:300px;max-width:90vw}.sog-modal-overlay.basic .modal-container.medium{width:500px;max-width:90vw}.sog-modal-overlay.basic .modal-container.large{width:800px;max-width:90vw}.sog-modal-overlay.basic .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.basic .modal-container .modal-header{padding:20px 20px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.basic .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.basic .modal-container .modal-header .header-content .modal-title{margin:0 0 10px;font-size:18px;font-weight:600;color:#333}.sog-modal-overlay.basic .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:4px;border-radius:4px;color:#666;transition:all .2s ease;margin-left:16px}.sog-modal-overlay.basic .modal-container .modal-header .close-button:hover{background:#f0f0f0;color:#333}.sog-modal-overlay.basic .modal-container .modal-body{padding:20px;overflow-y:auto;flex:1}.sog-modal-overlay.basic .modal-container .modal-footer{padding:0 20px 20px;border-top:1px solid #f0f0f0;display:flex;justify-content:flex-end;gap:12px}.sog-modal-overlay.material .modal-container{background:#fff;border-radius:4px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s cubic-bezier(.25,.8,.25,1)}.sog-modal-overlay.material .modal-container.small{width:280px;max-width:90vw}.sog-modal-overlay.material .modal-container.medium{width:560px;max-width:90vw}.sog-modal-overlay.material .modal-container.large{width:896px;max-width:90vw}.sog-modal-overlay.material .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.material .modal-container .modal-header{padding:24px 24px 20px;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.material .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.material .modal-container .modal-header .header-content .modal-title{margin:0;font-size:20px;font-weight:500;color:#000000de;line-height:1.25}.sog-modal-overlay.material .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:8px;border-radius:50%;color:#0000008a;transition:all .2s cubic-bezier(.4,0,.2,1);margin:-8px -8px -8px 16px}.sog-modal-overlay.material .modal-container .modal-header .close-button:hover{background:#0000000a;color:#000000de}.sog-modal-overlay.material .modal-container .modal-body{padding:0 24px;overflow-y:auto;flex:1;color:#0009;line-height:1.5}.sog-modal-overlay.material .modal-container .modal-footer{padding:8px 8px 8px 24px;display:flex;justify-content:flex-end;gap:8px}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreModal, decorators: [{
            type: Component,
            args: [{ selector: 'sog-modal', standalone: true, imports: [CommonModule], template: `
    <div class="sog-modal-overlay" 
         *ngIf="isOpen" 
         [ngClass]="getOverlayClasses()"
         (click)="onOverlayClick($event)">
      <div class="modal-container" 
           [ngClass]="getContainerClasses()"
           (click)="$event.stopPropagation()">
        
        <div class="modal-header" *ngIf="hasHeader || title">
          <div class="header-content">
            <h3 class="modal-title" *ngIf="title">{{ title }}</h3>
            <ng-content select="[slot=header]"></ng-content>
          </div>
          <button 
            class="close-button" 
            *ngIf="showCloseButton"
            (click)="close()"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        
        <div class="modal-footer" *ngIf="hasFooter">
          <ng-content select="[slot=footer]"></ng-content>
        </div>
      </div>
    </div>
  `, styles: [".sog-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px;box-sizing:border-box;animation:fadeIn .3s ease}.sog-modal-overlay.basic .modal-container{background:#fff;border-radius:8px;box-shadow:0 10px 25px #0003;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s ease}.sog-modal-overlay.basic .modal-container.small{width:300px;max-width:90vw}.sog-modal-overlay.basic .modal-container.medium{width:500px;max-width:90vw}.sog-modal-overlay.basic .modal-container.large{width:800px;max-width:90vw}.sog-modal-overlay.basic .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.basic .modal-container .modal-header{padding:20px 20px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.basic .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.basic .modal-container .modal-header .header-content .modal-title{margin:0 0 10px;font-size:18px;font-weight:600;color:#333}.sog-modal-overlay.basic .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:4px;border-radius:4px;color:#666;transition:all .2s ease;margin-left:16px}.sog-modal-overlay.basic .modal-container .modal-header .close-button:hover{background:#f0f0f0;color:#333}.sog-modal-overlay.basic .modal-container .modal-body{padding:20px;overflow-y:auto;flex:1}.sog-modal-overlay.basic .modal-container .modal-footer{padding:0 20px 20px;border-top:1px solid #f0f0f0;display:flex;justify-content:flex-end;gap:12px}.sog-modal-overlay.material .modal-container{background:#fff;border-radius:4px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s cubic-bezier(.25,.8,.25,1)}.sog-modal-overlay.material .modal-container.small{width:280px;max-width:90vw}.sog-modal-overlay.material .modal-container.medium{width:560px;max-width:90vw}.sog-modal-overlay.material .modal-container.large{width:896px;max-width:90vw}.sog-modal-overlay.material .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.material .modal-container .modal-header{padding:24px 24px 20px;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.material .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.material .modal-container .modal-header .header-content .modal-title{margin:0;font-size:20px;font-weight:500;color:#000000de;line-height:1.25}.sog-modal-overlay.material .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:8px;border-radius:50%;color:#0000008a;transition:all .2s cubic-bezier(.4,0,.2,1);margin:-8px -8px -8px 16px}.sog-modal-overlay.material .modal-container .modal-header .close-button:hover{background:#0000000a;color:#000000de}.sog-modal-overlay.material .modal-container .modal-body{padding:0 24px;overflow-y:auto;flex:1;color:#0009;line-height:1.5}.sog-modal-overlay.material .modal-container .modal-footer{padding:8px 8px 8px 24px;display:flex;justify-content:flex-end;gap:8px}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { isOpen: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], hasHeader: [{
                type: Input
            }], hasFooter: [{
                type: Input
            }], showCloseButton: [{
                type: Input
            }], closeOnOverlayClick: [{
                type: Input
            }], closeOnEscape: [{
                type: Input
            }], class: [{
                type: Input
            }], closeModal: [{
                type: Output
            }], openModal: [{
                type: Output
            }], onEscapeKey: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });

class SognatoreNavbar {
    constructor() {
        this.variant = 'basic';
        this.title = '';
        this.items = [];
        this.fixed = false;
        this.hasBrandSlot = false;
        this.itemClick = new EventEmitter();
        this.brandClick = new EventEmitter();
        this.isMobileMenuOpen = false;
        this.expandedMobileItem = null;
    }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        this.expandedMobileItem = null;
    }
    onBrandClick() {
        this.brandClick.emit();
    }
    onItemClick(item, event) {
        if (event) {
            event.stopPropagation();
        }
        if (item.disabled)
            return;
        if (item.action) {
            item.action();
        }
        this.itemClick.emit(item);
        this.isMobileMenuOpen = false;
        this.expandedMobileItem = null;
    }
    onMobileItemClick(item) {
        if (item.disabled)
            return;
        if (item.children?.length) {
            this.expandedMobileItem = this.expandedMobileItem === item ? null : item;
        }
        else {
            this.onItemClick(item);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreNavbar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreNavbar, isStandalone: true, selector: "sog-navbar", inputs: { variant: "variant", title: "title", items: "items", fixed: "fixed", hasBrandSlot: "hasBrandSlot" }, outputs: { itemClick: "itemClick", brandClick: "brandClick" }, ngImport: i0, template: `
    <nav class="sog-navbar" [class]="variant" [ngClass]="{ 'fixed': fixed, 'mobile-open': isMobileMenuOpen }">
      <div class="navbar-container">
        <!-- Brand/Logo -->
        <div class="navbar-brand" (click)="onBrandClick()">
          <ng-content select="[slot=brand]"></ng-content>
          <span *ngIf="!hasBrandSlot && title" class="brand-title">{{ title }}</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-nav desktop-nav">
          <div 
            class="nav-item" 
            *ngFor="let item of items"
            [ngClass]="{ 'disabled': item.disabled, 'has-children': item.children?.length }"
            (click)="onItemClick(item)"
          >
            <span class="nav-link">
              <i *ngIf="item.icon" class="nav-icon" [innerHTML]="item.icon"></i>
              {{ item.label }}
              <svg 
                *ngIf="item.children?.length" 
                class="dropdown-arrow" 
                width="12" 
                height="12" 
                viewBox="0 0 12 12"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </span>
            
            <!-- Dropdown Menu -->
            <div class="dropdown-menu" *ngIf="item.children?.length">
              <div 
                class="dropdown-item" 
                *ngFor="let child of item.children"
                [ngClass]="{ 'disabled': child.disabled }"
                (click)="onItemClick(child, $event)"
              >
                <i *ngIf="child.icon" class="nav-icon" [innerHTML]="child.icon"></i>
                {{ child.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Actions Slot -->
        <div class="navbar-actions">
          <ng-content select="[slot=actions]"></ng-content>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="isMobileMenuOpen"
          [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              *ngIf="!isMobileMenuOpen"
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
            />
            <path 
              *ngIf="isMobileMenuOpen"
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" [ngClass]="{ 'open': isMobileMenuOpen }">
        <div 
          class="mobile-nav-item" 
          *ngFor="let item of items"
          [ngClass]="{ 'disabled': item.disabled }"
          (click)="onMobileItemClick(item)"
        >
          <span class="mobile-nav-link">
            <i *ngIf="item.icon" class="nav-icon" [innerHTML]="item.icon"></i>
            {{ item.label }}
          </span>
          
          <!-- Mobile Submenu -->
          <div class="mobile-submenu" *ngIf="item.children?.length && item === expandedMobileItem">
            <div 
              class="mobile-submenu-item" 
              *ngFor="let child of item.children"
              [ngClass]="{ 'disabled': child.disabled }"
              (click)="onItemClick(child, $event)"
            >
              <i *ngIf="child.icon" class="nav-icon" [innerHTML]="child.icon"></i>
              {{ child.label }}
            </div>
          </div>
        </div>
      </div>
    </nav>
  `, isInline: true, styles: [".sog-navbar{width:100%;z-index:1000}.sog-navbar.fixed{position:fixed;top:0;left:0}.sog-navbar.basic{background:#f8f9fa;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.basic .navbar-brand{display:flex;align-items:center;cursor:pointer}.sog-navbar.basic .navbar-brand .brand-title{font-size:20px;font-weight:600;color:#333}.sog-navbar.basic .desktop-nav{display:flex;align-items:center;gap:8px}.sog-navbar.basic .desktop-nav .nav-item{position:relative}.sog-navbar.basic .desktop-nav .nav-item .nav-link{display:flex;align-items:center;gap:8px;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:500;color:#555;transition:all .2s ease}.sog-navbar.basic .desktop-nav .nav-item .nav-link:hover{background:#3498db1a;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link:hover{background:none;color:#999}.sog-navbar.basic .desktop-nav .nav-item .dropdown-menu{position:absolute;top:100%;left:0;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 12px #0000001a;min-width:160px;opacity:0;visibility:hidden;transform:translateY(-10px);transition:all .2s ease;z-index:1001}.sog-navbar.basic .desktop-nav .nav-item:hover .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item{display:flex;align-items:center;gap:8px;padding:12px 16px;cursor:pointer;color:#555;border-bottom:1px solid #f0f0f0}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:last-child{border-bottom:none}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:hover{background:#f8f9fa;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled:hover{background:none;color:#999}.sog-navbar.basic .navbar-actions{display:flex;align-items:center;gap:8px}.sog-navbar.basic .mobile-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;border-radius:4px;color:#555}.sog-navbar.basic .mobile-toggle:hover{background:#0000001a}.sog-navbar.basic .mobile-nav{display:none;background:#fff;border-top:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav.open{display:block}.sog-navbar.basic .mobile-nav .mobile-nav-item{border-bottom:1px solid #f0f0f0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-nav-link{display:flex;align-items:center;gap:12px;padding:16px;cursor:pointer;color:#555;font-weight:500}.sog-navbar.basic .mobile-nav .mobile-nav-item:hover .mobile-nav-link{background:#f8f9fa;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item.disabled .mobile-nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu{background:#f8f9fa}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item{display:flex;align-items:center;gap:12px;padding:12px 32px;cursor:pointer;color:#666;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item:hover{background:#e8e8e8;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.material{background:#3f51b5;color:#fff;box-shadow:0 2px 4px #0000001a}.sog-navbar.material .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.material .navbar-brand .brand-title{color:#fff;font-size:20px;font-weight:500}.sog-navbar.material .desktop-nav .nav-item .nav-link{color:#ffffffe6}.sog-navbar.material .desktop-nav .nav-item .nav-link:hover{background:#ffffff1a;color:#fff}.sog-navbar.material .mobile-toggle{color:#fff}.sog-navbar.material .mobile-toggle:hover{background:#ffffff1a}.sog-navbar .nav-icon{width:16px;height:16px;display:inline-block}.sog-navbar .dropdown-arrow{margin-left:4px;transition:transform .2s ease}.sog-navbar .nav-item:hover .dropdown-arrow{transform:rotate(180deg)}@media (max-width: 768px){.sog-navbar .desktop-nav{display:none!important}.sog-navbar .mobile-toggle{display:flex!important}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreNavbar, decorators: [{
            type: Component,
            args: [{ selector: 'sog-navbar', standalone: true, imports: [CommonModule], template: `
    <nav class="sog-navbar" [class]="variant" [ngClass]="{ 'fixed': fixed, 'mobile-open': isMobileMenuOpen }">
      <div class="navbar-container">
        <!-- Brand/Logo -->
        <div class="navbar-brand" (click)="onBrandClick()">
          <ng-content select="[slot=brand]"></ng-content>
          <span *ngIf="!hasBrandSlot && title" class="brand-title">{{ title }}</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-nav desktop-nav">
          <div 
            class="nav-item" 
            *ngFor="let item of items"
            [ngClass]="{ 'disabled': item.disabled, 'has-children': item.children?.length }"
            (click)="onItemClick(item)"
          >
            <span class="nav-link">
              <i *ngIf="item.icon" class="nav-icon" [innerHTML]="item.icon"></i>
              {{ item.label }}
              <svg 
                *ngIf="item.children?.length" 
                class="dropdown-arrow" 
                width="12" 
                height="12" 
                viewBox="0 0 12 12"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </span>
            
            <!-- Dropdown Menu -->
            <div class="dropdown-menu" *ngIf="item.children?.length">
              <div 
                class="dropdown-item" 
                *ngFor="let child of item.children"
                [ngClass]="{ 'disabled': child.disabled }"
                (click)="onItemClick(child, $event)"
              >
                <i *ngIf="child.icon" class="nav-icon" [innerHTML]="child.icon"></i>
                {{ child.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Actions Slot -->
        <div class="navbar-actions">
          <ng-content select="[slot=actions]"></ng-content>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="isMobileMenuOpen"
          [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              *ngIf="!isMobileMenuOpen"
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
            />
            <path 
              *ngIf="isMobileMenuOpen"
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" [ngClass]="{ 'open': isMobileMenuOpen }">
        <div 
          class="mobile-nav-item" 
          *ngFor="let item of items"
          [ngClass]="{ 'disabled': item.disabled }"
          (click)="onMobileItemClick(item)"
        >
          <span class="mobile-nav-link">
            <i *ngIf="item.icon" class="nav-icon" [innerHTML]="item.icon"></i>
            {{ item.label }}
          </span>
          
          <!-- Mobile Submenu -->
          <div class="mobile-submenu" *ngIf="item.children?.length && item === expandedMobileItem">
            <div 
              class="mobile-submenu-item" 
              *ngFor="let child of item.children"
              [ngClass]="{ 'disabled': child.disabled }"
              (click)="onItemClick(child, $event)"
            >
              <i *ngIf="child.icon" class="nav-icon" [innerHTML]="child.icon"></i>
              {{ child.label }}
            </div>
          </div>
        </div>
      </div>
    </nav>
  `, styles: [".sog-navbar{width:100%;z-index:1000}.sog-navbar.fixed{position:fixed;top:0;left:0}.sog-navbar.basic{background:#f8f9fa;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.basic .navbar-brand{display:flex;align-items:center;cursor:pointer}.sog-navbar.basic .navbar-brand .brand-title{font-size:20px;font-weight:600;color:#333}.sog-navbar.basic .desktop-nav{display:flex;align-items:center;gap:8px}.sog-navbar.basic .desktop-nav .nav-item{position:relative}.sog-navbar.basic .desktop-nav .nav-item .nav-link{display:flex;align-items:center;gap:8px;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:500;color:#555;transition:all .2s ease}.sog-navbar.basic .desktop-nav .nav-item .nav-link:hover{background:#3498db1a;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item.disabled .nav-link:hover{background:none;color:#999}.sog-navbar.basic .desktop-nav .nav-item .dropdown-menu{position:absolute;top:100%;left:0;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 12px #0000001a;min-width:160px;opacity:0;visibility:hidden;transform:translateY(-10px);transition:all .2s ease;z-index:1001}.sog-navbar.basic .desktop-nav .nav-item:hover .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item{display:flex;align-items:center;gap:8px;padding:12px 16px;cursor:pointer;color:#555;border-bottom:1px solid #f0f0f0}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:last-child{border-bottom:none}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item:hover{background:#f8f9fa;color:#3498db}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.basic .desktop-nav .nav-item .dropdown-item.disabled:hover{background:none;color:#999}.sog-navbar.basic .navbar-actions{display:flex;align-items:center;gap:8px}.sog-navbar.basic .mobile-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;border-radius:4px;color:#555}.sog-navbar.basic .mobile-toggle:hover{background:#0000001a}.sog-navbar.basic .mobile-nav{display:none;background:#fff;border-top:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav.open{display:block}.sog-navbar.basic .mobile-nav .mobile-nav-item{border-bottom:1px solid #f0f0f0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-nav-link{display:flex;align-items:center;gap:12px;padding:16px;cursor:pointer;color:#555;font-weight:500}.sog-navbar.basic .mobile-nav .mobile-nav-item:hover .mobile-nav-link{background:#f8f9fa;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item.disabled .mobile-nav-link{color:#999;cursor:not-allowed}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu{background:#f8f9fa}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item{display:flex;align-items:center;gap:12px;padding:12px 32px;cursor:pointer;color:#666;border-bottom:1px solid #e0e0e0}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item:hover{background:#e8e8e8;color:#3498db}.sog-navbar.basic .mobile-nav .mobile-nav-item .mobile-submenu .mobile-submenu-item.disabled{color:#999;cursor:not-allowed}.sog-navbar.material{background:#3f51b5;color:#fff;box-shadow:0 2px 4px #0000001a}.sog-navbar.material .navbar-container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px}.sog-navbar.material .navbar-brand .brand-title{color:#fff;font-size:20px;font-weight:500}.sog-navbar.material .desktop-nav .nav-item .nav-link{color:#ffffffe6}.sog-navbar.material .desktop-nav .nav-item .nav-link:hover{background:#ffffff1a;color:#fff}.sog-navbar.material .mobile-toggle{color:#fff}.sog-navbar.material .mobile-toggle:hover{background:#ffffff1a}.sog-navbar .nav-icon{width:16px;height:16px;display:inline-block}.sog-navbar .dropdown-arrow{margin-left:4px;transition:transform .2s ease}.sog-navbar .nav-item:hover .dropdown-arrow{transform:rotate(180deg)}@media (max-width: 768px){.sog-navbar .desktop-nav{display:none!important}.sog-navbar .mobile-toggle{display:flex!important}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], title: [{
                type: Input
            }], items: [{
                type: Input
            }], fixed: [{
                type: Input
            }], hasBrandSlot: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], brandClick: [{
                type: Output
            }] } });

class SognatoreAccordion {
    constructor() {
        this.variant = 'basic';
        this.items = [];
        this.multiple = false;
        this.closeOthers = true;
        this.itemToggle = new EventEmitter();
        this.itemExpanded = new EventEmitter();
        this.itemCollapsed = new EventEmitter();
    }
    ngOnInit() {
        // Ensure only one item is expanded initially if multiple is false
        if (!this.multiple && this.closeOthers) {
            const expandedItems = this.items.filter(item => item.expanded);
            if (expandedItems.length > 1) {
                expandedItems.slice(1).forEach(item => item.expanded = false);
            }
        }
    }
    toggle(item, event) {
        if (event) {
            event.preventDefault();
        }
        if (item.disabled)
            return;
        const wasExpanded = item.expanded;
        // If closeOthers is true and we're expanding this item, close others
        if (!wasExpanded && this.closeOthers && !this.multiple) {
            this.items.forEach(i => {
                if (i !== item) {
                    i.expanded = false;
                }
            });
        }
        // Toggle the current item
        item.expanded = !wasExpanded;
        // Emit events
        this.itemToggle.emit({ item, expanded: item.expanded });
        if (item.expanded) {
            this.itemExpanded.emit(item);
        }
        else {
            this.itemCollapsed.emit(item);
        }
    }
    expand(itemId) {
        const item = this.items.find(i => i.id === itemId);
        if (item && !item.disabled && !item.expanded) {
            this.toggle(item);
        }
    }
    collapse(itemId) {
        const item = this.items.find(i => i.id === itemId);
        if (item && !item.disabled && item.expanded) {
            this.toggle(item);
        }
    }
    expandAll() {
        if (this.multiple) {
            this.items.forEach(item => {
                if (!item.disabled) {
                    item.expanded = true;
                }
            });
        }
    }
    collapseAll() {
        this.items.forEach(item => {
            if (!item.disabled) {
                item.expanded = false;
            }
        });
    }
    trackByFn(index, item) {
        return item.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreAccordion, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreAccordion, isStandalone: true, selector: "sog-accordion", inputs: { variant: "variant", items: "items", multiple: "multiple", closeOthers: "closeOthers" }, outputs: { itemToggle: "itemToggle", itemExpanded: "itemExpanded", itemCollapsed: "itemCollapsed" }, ngImport: i0, template: `
    <div class="sog-accordion" [ngClass]="variant">
      <div 
        class="accordion-item" 
        *ngFor="let item of items; trackBy: trackByFn"
        [ngClass]="{ 
          'expanded': item.expanded, 
          'disabled': item.disabled,
          'first': item === items[0],
          'last': item === items[items.length - 1]
        }"
      >
        <div 
          class="accordion-header" 
          (click)="toggle(item)"
          [attr.aria-expanded]="item.expanded"
          [attr.aria-controls]="'content-' + item.id"
          [attr.tabindex]="item.disabled ? -1 : 0"
          (keydown.enter)="toggle(item)"
          (keydown.space)="toggle(item, $event)"
        >
          <div class="header-content">
            <span class="accordion-title">{{ item.title }}</span>
            <ng-content [select]="'[slot=header-' + item.id + ']'"></ng-content>
          </div>
          
          <div class="accordion-icon" [ngClass]="{ 'expanded': item.expanded }">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 7.5L10 12.5L15 7.5" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div 
          class="accordion-content" 
          [attr.id]="'content-' + item.id"
          [attr.aria-labelledby]="'header-' + item.id"
          [style.height]="item.expanded ? 'auto' : '0'"
        >
          <div class="content-wrapper">
            <div *ngIf="item.content" class="default-content">{{ item.content }}</div>
            <ng-content [select]="'[slot=content-' + item.id + ']'"></ng-content>
            <ng-content [select]="'[slot=' + item.id + ']'"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-accordion{width:100%}.sog-accordion.basic .accordion-item{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:8px;overflow:hidden;transition:all .3s ease}.sog-accordion.basic .accordion-item.first{border-top-left-radius:8px;border-top-right-radius:8px}.sog-accordion.basic .accordion-item.last{border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-bottom:0}.sog-accordion.basic .accordion-item.expanded{box-shadow:0 2px 8px #0000001a}.sog-accordion.basic .accordion-item.disabled{opacity:.6;cursor:not-allowed}.sog-accordion.basic .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#f8f9fa;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.basic .accordion-item .accordion-header:hover:not(.disabled){background:#e9ecef}.sog-accordion.basic .accordion-item .accordion-header:focus{background:#e9ecef;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.basic .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.basic .accordion-item .accordion-header .header-content .accordion-title{font-weight:600;color:#333;font-size:16px}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.basic .accordion-item.expanded .accordion-header{background:#e9ecef;border-bottom:1px solid #e0e0e0}.sog-accordion.basic .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper{padding:20px}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.6}.sog-accordion.material .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.material .accordion-item:last-child{border-bottom:none}.sog-accordion.material .accordion-item.expanded{background:#f5f5f5}.sog-accordion.material .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:24px;background:transparent;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.material .accordion-item .accordion-header:hover:not(.disabled){background:#0000000a}.sog-accordion.material .accordion-item .accordion-header:focus{background:#0000000a}.sog-accordion.material .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.material .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#000000de;font-size:16px}.sog-accordion.material .accordion-item .accordion-header .accordion-icon{color:#0000008a;transition:transform .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.material .accordion-item .accordion-content{overflow:hidden;transition:height .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-content .content-wrapper{padding:0 24px 24px}.sog-accordion.material .accordion-item .accordion-content .content-wrapper .default-content{color:#0009;line-height:1.5}.sog-accordion.outlined{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.sog-accordion.outlined .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.outlined .accordion-item:last-child{border-bottom:none}.sog-accordion.outlined .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.outlined .accordion-item .accordion-header:hover:not(.disabled){background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-header:focus{background:#f8f9fa;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.outlined .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.outlined .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#333;font-size:15px}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.outlined .accordion-item.expanded .accordion-header{background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease;background:#fff}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper{padding:16px 20px}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.5}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreAccordion, decorators: [{
            type: Component,
            args: [{ selector: 'sog-accordion', standalone: true, imports: [CommonModule], template: `
    <div class="sog-accordion" [ngClass]="variant">
      <div 
        class="accordion-item" 
        *ngFor="let item of items; trackBy: trackByFn"
        [ngClass]="{ 
          'expanded': item.expanded, 
          'disabled': item.disabled,
          'first': item === items[0],
          'last': item === items[items.length - 1]
        }"
      >
        <div 
          class="accordion-header" 
          (click)="toggle(item)"
          [attr.aria-expanded]="item.expanded"
          [attr.aria-controls]="'content-' + item.id"
          [attr.tabindex]="item.disabled ? -1 : 0"
          (keydown.enter)="toggle(item)"
          (keydown.space)="toggle(item, $event)"
        >
          <div class="header-content">
            <span class="accordion-title">{{ item.title }}</span>
            <ng-content [select]="'[slot=header-' + item.id + ']'"></ng-content>
          </div>
          
          <div class="accordion-icon" [ngClass]="{ 'expanded': item.expanded }">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 7.5L10 12.5L15 7.5" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div 
          class="accordion-content" 
          [attr.id]="'content-' + item.id"
          [attr.aria-labelledby]="'header-' + item.id"
          [style.height]="item.expanded ? 'auto' : '0'"
        >
          <div class="content-wrapper">
            <div *ngIf="item.content" class="default-content">{{ item.content }}</div>
            <ng-content [select]="'[slot=content-' + item.id + ']'"></ng-content>
            <ng-content [select]="'[slot=' + item.id + ']'"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `, styles: [".sog-accordion{width:100%}.sog-accordion.basic .accordion-item{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:8px;overflow:hidden;transition:all .3s ease}.sog-accordion.basic .accordion-item.first{border-top-left-radius:8px;border-top-right-radius:8px}.sog-accordion.basic .accordion-item.last{border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-bottom:0}.sog-accordion.basic .accordion-item.expanded{box-shadow:0 2px 8px #0000001a}.sog-accordion.basic .accordion-item.disabled{opacity:.6;cursor:not-allowed}.sog-accordion.basic .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#f8f9fa;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.basic .accordion-item .accordion-header:hover:not(.disabled){background:#e9ecef}.sog-accordion.basic .accordion-item .accordion-header:focus{background:#e9ecef;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.basic .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.basic .accordion-item .accordion-header .header-content .accordion-title{font-weight:600;color:#333;font-size:16px}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.basic .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.basic .accordion-item.expanded .accordion-header{background:#e9ecef;border-bottom:1px solid #e0e0e0}.sog-accordion.basic .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper{padding:20px}.sog-accordion.basic .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.6}.sog-accordion.material .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.material .accordion-item:last-child{border-bottom:none}.sog-accordion.material .accordion-item.expanded{background:#f5f5f5}.sog-accordion.material .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:24px;background:transparent;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.material .accordion-item .accordion-header:hover:not(.disabled){background:#0000000a}.sog-accordion.material .accordion-item .accordion-header:focus{background:#0000000a}.sog-accordion.material .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.material .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#000000de;font-size:16px}.sog-accordion.material .accordion-item .accordion-header .accordion-icon{color:#0000008a;transition:transform .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.material .accordion-item .accordion-content{overflow:hidden;transition:height .2s cubic-bezier(.4,0,.2,1)}.sog-accordion.material .accordion-item .accordion-content .content-wrapper{padding:0 24px 24px}.sog-accordion.material .accordion-item .accordion-content .content-wrapper .default-content{color:#0009;line-height:1.5}.sog-accordion.outlined{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.sog-accordion.outlined .accordion-item{border:none;border-bottom:1px solid #e0e0e0;margin-bottom:0;border-radius:0}.sog-accordion.outlined .accordion-item:last-child{border-bottom:none}.sog-accordion.outlined .accordion-item .accordion-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;cursor:pointer;transition:background-color .2s ease;outline:none}.sog-accordion.outlined .accordion-item .accordion-header:hover:not(.disabled){background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-header:focus{background:#f8f9fa;box-shadow:inset 0 0 0 2px #3498db}.sog-accordion.outlined .accordion-item .accordion-header .header-content{display:flex;align-items:center;flex:1}.sog-accordion.outlined .accordion-item .accordion-header .header-content .accordion-title{font-weight:500;color:#333;font-size:15px}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon{color:#666;transition:transform .3s ease}.sog-accordion.outlined .accordion-item .accordion-header .accordion-icon.expanded{transform:rotate(180deg)}.sog-accordion.outlined .accordion-item.expanded .accordion-header{background:#f8f9fa}.sog-accordion.outlined .accordion-item .accordion-content{overflow:hidden;transition:height .3s ease;background:#fff}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper{padding:16px 20px}.sog-accordion.outlined .accordion-item .accordion-content .content-wrapper .default-content{color:#555;line-height:1.5}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], items: [{
                type: Input
            }], multiple: [{
                type: Input
            }], closeOthers: [{
                type: Input
            }], itemToggle: [{
                type: Output
            }], itemExpanded: [{
                type: Output
            }], itemCollapsed: [{
                type: Output
            }] } });

class SognatoreTab {
    constructor() {
        this.id = '';
        this.label = '';
        this.disabled = false;
        this.icon = '';
        this.closable = false;
        this.active = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTab, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreTab, isStandalone: true, selector: "sog-tab", inputs: { id: "id", label: "label", disabled: "disabled", icon: "icon", closable: "closable", active: "active" }, ngImport: i0, template: `
    <div class="tab-content" [style.display]="active ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".tab-content{padding:16px 0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTab, decorators: [{
            type: Component,
            args: [{ selector: 'sog-tab', standalone: true, imports: [CommonModule], template: `
    <div class="tab-content" [style.display]="active ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `, styles: [".tab-content{padding:16px 0}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], closable: [{
                type: Input
            }], active: [{
                type: Input
            }] } });
class SognatoreTabs {
    constructor() {
        this.variant = 'basic';
        this.position = 'top';
        this.tabs = [];
        this.activeTabId = '';
        this.scrollable = false;
        this.tabChange = new EventEmitter();
        this.tabClose = new EventEmitter();
        this.canScrollLeft = false;
        this.canScrollRight = false;
    }
    ngOnInit() {
        // Set initial active tab if not specified
        if (!this.activeTabId && this.tabs.length > 0) {
            const firstEnabledTab = this.tabs.find(tab => !tab.disabled);
            if (firstEnabledTab) {
                this.activeTabId = firstEnabledTab.id;
            }
        }
    }
    ngAfterContentInit() {
        // Handle content children tabs
        if (this.tabComponents.length > 0) {
            this.updateTabsFromContent();
            this.tabComponents.changes.subscribe(() => {
                this.updateTabsFromContent();
            });
        }
    }
    updateTabsFromContent() {
        const contentTabs = this.tabComponents.toArray();
        // Set active tab for content children
        if (!this.activeTabId && contentTabs.length > 0) {
            const firstEnabledTab = contentTabs.find(tab => !tab.disabled);
            if (firstEnabledTab) {
                this.activeTabId = firstEnabledTab.id;
            }
        }
        // Update active state
        contentTabs.forEach(tab => {
            tab.active = tab.id === this.activeTabId;
        });
    }
    selectTab(tab, event) {
        if (event) {
            event.preventDefault();
        }
        if (tab.disabled)
            return;
        this.activeTabId = tab.id;
        // Update content children if they exist
        if (this.tabComponents) {
            this.tabComponents.forEach(tabComponent => {
                tabComponent.active = tabComponent.id === this.activeTabId;
            });
        }
        this.tabChange.emit(tab.id);
    }
    closeTab(tab, event) {
        event.stopPropagation();
        if (tab.disabled)
            return;
        // If closing the active tab, select another one
        if (tab.id === this.activeTabId) {
            const currentIndex = this.tabs.findIndex(t => t.id === tab.id);
            const nextTab = this.tabs[currentIndex + 1] || this.tabs[currentIndex - 1];
            if (nextTab && !nextTab.disabled) {
                this.selectTab(nextTab);
            }
        }
        this.tabClose.emit(tab.id);
    }
    scrollLeft() {
        const container = document.querySelector('.scroll-container');
        if (container) {
            container.scrollBy({ left: -200, behavior: 'smooth' });
        }
    }
    scrollRight() {
        const container = document.querySelector('.scroll-container');
        if (container) {
            container.scrollBy({ left: 200, behavior: 'smooth' });
        }
    }
    trackByFn(index, tab) {
        return tab.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTabs, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreTabs, isStandalone: true, selector: "sog-tabs", inputs: { variant: "variant", position: "position", tabs: "tabs", activeTabId: "activeTabId", scrollable: "scrollable" }, outputs: { tabChange: "tabChange", tabClose: "tabClose" }, queries: [{ propertyName: "tabComponents", predicate: SognatoreTab }], ngImport: i0, template: `
    <div class="sog-tabs" [ngClass]="[variant, position]">
      <!-- Tab Navigation -->
      <div class="tabs-nav" [ngClass]="{ 'scrollable': scrollable }">
        <div class="scroll-container">
          <div 
            class="tab-item" 
            *ngFor="let tab of tabs; trackBy: trackByFn"
            [ngClass]="{ 
              'active': tab.id === activeTabId, 
              'disabled': tab.disabled 
            }"
            (click)="selectTab(tab)"
            [attr.tabindex]="tab.disabled ? -1 : 0"
            (keydown.enter)="selectTab(tab)"
            (keydown.space)="selectTab(tab, $event)"
          >
            <span class="tab-icon" *ngIf="tab.icon" [innerHTML]="tab.icon"></span>
            <span class="tab-label">{{ tab.label }}</span>
            <button 
              *ngIf="tab.closable" 
              class="tab-close"
              (click)="closeTab(tab, $event)"
              [attr.aria-label]="'Close ' + tab.label"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Scroll buttons for horizontal scrollable tabs -->
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button left"
          (click)="scrollLeft()"
          [disabled]="!canScrollLeft"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button right"
          (click)="scrollRight()"
          [disabled]="!canScrollRight"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <!-- Tab Content -->
      <div class="tabs-content">
        <ng-content></ng-content>
        
        <!-- Dynamic content if using tabs array -->
        <div 
          *ngFor="let tab of tabs; trackBy: trackByFn"
          class="tab-panel"
          [style.display]="tab.id === activeTabId ? 'block' : 'none'"
          [attr.id]="'panel-' + tab.id"
          [attr.aria-labelledby]="'tab-' + tab.id"
          role="tabpanel"
        >
          <ng-content [select]="'[slot=' + tab.id + ']'"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-tabs{width:100%}.sog-tabs.top .tabs-nav{border-bottom:1px solid #e0e0e0}.sog-tabs.bottom{display:flex;flex-direction:column-reverse}.sog-tabs.bottom .tabs-nav{border-top:1px solid #e0e0e0;border-bottom:none}.sog-tabs.left{display:flex}.sog-tabs.left .tabs-nav{flex-direction:column;border-right:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.left .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.left .tabs-content{flex:1;padding-left:16px}.sog-tabs.right{display:flex;flex-direction:row-reverse}.sog-tabs.right .tabs-nav{flex-direction:column;border-left:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.right .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.right .tabs-content{flex:1;padding-right:16px}.sog-tabs.basic .tabs-nav{display:flex;position:relative}.sog-tabs.basic .tabs-nav.scrollable{overflow:hidden}.sog-tabs.basic .tabs-nav.scrollable .scroll-container{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.sog-tabs.basic .tabs-nav.scrollable .scroll-container::-webkit-scrollbar{display:none}.sog-tabs.basic .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.basic .tabs-nav .tab-item{display:flex;align-items:center;padding:12px 16px;cursor:pointer;font-weight:500;color:#666;border-bottom:2px solid transparent;transition:all .2s ease;white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none}.sog-tabs.basic .tabs-nav .tab-item:hover:not(.disabled){color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item:focus{color:#3498db;box-shadow:inset 0 0 0 2px #3498db}.sog-tabs.basic .tabs-nav .tab-item.active{color:#3498db;border-bottom-color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item.disabled{color:#999;cursor:not-allowed}.sog-tabs.basic .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.basic .tabs-nav .tab-item .tab-label{margin-right:8px}.sog-tabs.basic .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:2px;border-radius:2px;color:#666;display:flex;align-items:center;justify-content:center}.sog-tabs.basic .tabs-nav .tab-item .tab-close:hover{background:#0000001a;color:#333}.sog-tabs.basic .tabs-nav .scroll-button{position:absolute;top:50%;transform:translateY(-50%);background:#fff;border:1px solid #e0e0e0;border-radius:4px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1}.sog-tabs.basic .tabs-nav .scroll-button.left{left:0}.sog-tabs.basic .tabs-nav .scroll-button.right{right:0}.sog-tabs.basic .tabs-nav .scroll-button:hover:not(:disabled){background:#f8f9fa}.sog-tabs.basic .tabs-nav .scroll-button:disabled{opacity:.5;cursor:not-allowed}.sog-tabs.basic .tabs-content{padding:16px 0}.sog-tabs.material .tabs-nav{display:flex;position:relative;background:#f5f5f5}.sog-tabs.material .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.material .tabs-nav .tab-item{display:flex;align-items:center;padding:16px 24px;cursor:pointer;font-weight:500;color:#0009;text-transform:uppercase;font-size:14px;letter-spacing:.5px;border-bottom:2px solid transparent;transition:all .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none;min-height:48px}.sog-tabs.material .tabs-nav .tab-item:hover:not(.disabled){color:#3f51b5;background:#3f51b50a}.sog-tabs.material .tabs-nav .tab-item:focus{color:#3f51b5;background:#3f51b51f}.sog-tabs.material .tabs-nav .tab-item.active{color:#3f51b5;border-bottom-color:#3f51b5}.sog-tabs.material .tabs-nav .tab-item.disabled{color:#00000042;cursor:not-allowed}.sog-tabs.material .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.material .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:4px;border-radius:50%;color:#0000008a;display:flex;align-items:center;justify-content:center;margin-left:8px}.sog-tabs.material .tabs-nav .tab-item .tab-close:hover{background:#0000000a;color:#000000de}.sog-tabs.material .tabs-content{padding:24px 0}.sog-tabs .tab-panel{outline:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreTabs, decorators: [{
            type: Component,
            args: [{ selector: 'sog-tabs', standalone: true, imports: [CommonModule], template: `
    <div class="sog-tabs" [ngClass]="[variant, position]">
      <!-- Tab Navigation -->
      <div class="tabs-nav" [ngClass]="{ 'scrollable': scrollable }">
        <div class="scroll-container">
          <div 
            class="tab-item" 
            *ngFor="let tab of tabs; trackBy: trackByFn"
            [ngClass]="{ 
              'active': tab.id === activeTabId, 
              'disabled': tab.disabled 
            }"
            (click)="selectTab(tab)"
            [attr.tabindex]="tab.disabled ? -1 : 0"
            (keydown.enter)="selectTab(tab)"
            (keydown.space)="selectTab(tab, $event)"
          >
            <span class="tab-icon" *ngIf="tab.icon" [innerHTML]="tab.icon"></span>
            <span class="tab-label">{{ tab.label }}</span>
            <button 
              *ngIf="tab.closable" 
              class="tab-close"
              (click)="closeTab(tab, $event)"
              [attr.aria-label]="'Close ' + tab.label"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Scroll buttons for horizontal scrollable tabs -->
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button left"
          (click)="scrollLeft()"
          [disabled]="!canScrollLeft"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        
        <button 
          *ngIf="scrollable && position === 'top'"
          class="scroll-button right"
          (click)="scrollRight()"
          [disabled]="!canScrollRight"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <!-- Tab Content -->
      <div class="tabs-content">
        <ng-content></ng-content>
        
        <!-- Dynamic content if using tabs array -->
        <div 
          *ngFor="let tab of tabs; trackBy: trackByFn"
          class="tab-panel"
          [style.display]="tab.id === activeTabId ? 'block' : 'none'"
          [attr.id]="'panel-' + tab.id"
          [attr.aria-labelledby]="'tab-' + tab.id"
          role="tabpanel"
        >
          <ng-content [select]="'[slot=' + tab.id + ']'"></ng-content>
        </div>
      </div>
    </div>
  `, styles: [".sog-tabs{width:100%}.sog-tabs.top .tabs-nav{border-bottom:1px solid #e0e0e0}.sog-tabs.bottom{display:flex;flex-direction:column-reverse}.sog-tabs.bottom .tabs-nav{border-top:1px solid #e0e0e0;border-bottom:none}.sog-tabs.left{display:flex}.sog-tabs.left .tabs-nav{flex-direction:column;border-right:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.left .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.left .tabs-content{flex:1;padding-left:16px}.sog-tabs.right{display:flex;flex-direction:row-reverse}.sog-tabs.right .tabs-nav{flex-direction:column;border-left:1px solid #e0e0e0;border-bottom:none;min-width:200px}.sog-tabs.right .tabs-nav .scroll-container{flex-direction:column}.sog-tabs.right .tabs-content{flex:1;padding-right:16px}.sog-tabs.basic .tabs-nav{display:flex;position:relative}.sog-tabs.basic .tabs-nav.scrollable{overflow:hidden}.sog-tabs.basic .tabs-nav.scrollable .scroll-container{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.sog-tabs.basic .tabs-nav.scrollable .scroll-container::-webkit-scrollbar{display:none}.sog-tabs.basic .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.basic .tabs-nav .tab-item{display:flex;align-items:center;padding:12px 16px;cursor:pointer;font-weight:500;color:#666;border-bottom:2px solid transparent;transition:all .2s ease;white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none}.sog-tabs.basic .tabs-nav .tab-item:hover:not(.disabled){color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item:focus{color:#3498db;box-shadow:inset 0 0 0 2px #3498db}.sog-tabs.basic .tabs-nav .tab-item.active{color:#3498db;border-bottom-color:#3498db;background:#3498db0d}.sog-tabs.basic .tabs-nav .tab-item.disabled{color:#999;cursor:not-allowed}.sog-tabs.basic .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.basic .tabs-nav .tab-item .tab-label{margin-right:8px}.sog-tabs.basic .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:2px;border-radius:2px;color:#666;display:flex;align-items:center;justify-content:center}.sog-tabs.basic .tabs-nav .tab-item .tab-close:hover{background:#0000001a;color:#333}.sog-tabs.basic .tabs-nav .scroll-button{position:absolute;top:50%;transform:translateY(-50%);background:#fff;border:1px solid #e0e0e0;border-radius:4px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1}.sog-tabs.basic .tabs-nav .scroll-button.left{left:0}.sog-tabs.basic .tabs-nav .scroll-button.right{right:0}.sog-tabs.basic .tabs-nav .scroll-button:hover:not(:disabled){background:#f8f9fa}.sog-tabs.basic .tabs-nav .scroll-button:disabled{opacity:.5;cursor:not-allowed}.sog-tabs.basic .tabs-content{padding:16px 0}.sog-tabs.material .tabs-nav{display:flex;position:relative;background:#f5f5f5}.sog-tabs.material .tabs-nav .scroll-container{display:flex;min-width:100%}.sog-tabs.material .tabs-nav .tab-item{display:flex;align-items:center;padding:16px 24px;cursor:pointer;font-weight:500;color:#0009;text-transform:uppercase;font-size:14px;letter-spacing:.5px;border-bottom:2px solid transparent;transition:all .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;-webkit-user-select:none;user-select:none;outline:none;min-height:48px}.sog-tabs.material .tabs-nav .tab-item:hover:not(.disabled){color:#3f51b5;background:#3f51b50a}.sog-tabs.material .tabs-nav .tab-item:focus{color:#3f51b5;background:#3f51b51f}.sog-tabs.material .tabs-nav .tab-item.active{color:#3f51b5;border-bottom-color:#3f51b5}.sog-tabs.material .tabs-nav .tab-item.disabled{color:#00000042;cursor:not-allowed}.sog-tabs.material .tabs-nav .tab-item .tab-icon{width:16px;height:16px;margin-right:8px;display:inline-block}.sog-tabs.material .tabs-nav .tab-item .tab-close{background:none;border:none;cursor:pointer;padding:4px;border-radius:50%;color:#0000008a;display:flex;align-items:center;justify-content:center;margin-left:8px}.sog-tabs.material .tabs-nav .tab-item .tab-close:hover{background:#0000000a;color:#000000de}.sog-tabs.material .tabs-content{padding:24px 0}.sog-tabs .tab-panel{outline:none}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], position: [{
                type: Input
            }], tabs: [{
                type: Input
            }], activeTabId: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], tabChange: [{
                type: Output
            }], tabClose: [{
                type: Output
            }], tabComponents: [{
                type: ContentChildren,
                args: [SognatoreTab]
            }] } });

class SogDialogRef {
    constructor(containerRef, id, disableClose = false) {
        this._afterClosed = new Subject();
        this._afterOpened = new Subject();
        this._beforeClosed = new Subject();
        this._closed = false;
        this.containerInstance = containerRef;
        this.id = id;
        this.disableClose = disableClose;
    }
    /**
     * Close the dialog with optional result data
     */
    close(result) {
        console.log('SogDialogRef.close() called with result:', result);
        if (this.disableClose || this._closed) {
            console.log('Dialog close prevented - disableClose:', this.disableClose, '_closed:', this._closed);
            return;
        }
        this._closed = true;
        this._beforeClosed.next(result);
        this._beforeClosed.complete();
        this.containerInstance.destroy();
        this._afterClosed.next(result);
        this._afterClosed.complete();
    }
    /**
     * Gets an observable that is notified when the dialog is closed
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * Gets an observable that is notified when the dialog is opened
     */
    afterOpened() {
        return this._afterOpened.asObservable();
    }
    /**
     * Gets an observable that is notified before the dialog is closed
     */
    beforeClosed() {
        return this._beforeClosed.asObservable();
    }
    /**
     * Updates the position of the dialog
     */
    updatePosition(position) {
        // Implementation would update the container position
        return this;
    }
    /**
     * Updates the size of the dialog
     */
    updateSize(width, height) {
        // Implementation would update the container size
        return this;
    }
    /**
     * Add a CSS class to the dialog container
     */
    addPanelClass(classes) {
        // Implementation would add classes to container
        return this;
    }
    /**
     * Remove a CSS class from the dialog container
     */
    removePanelClass(classes) {
        // Implementation would remove classes from container
        return this;
    }
    /**
     * Gets the current state of the dialog's position
     */
    getState() {
        return {
            id: this.id,
            disableClose: this.disableClose
        };
    }
    /**
     * Internal method to trigger afterOpened
     */
    _opened() {
        this._afterOpened.next();
        this._afterOpened.complete();
    }
}

class SogDialogContainer {
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
                }] }, { type: SogDialogRef, decorators: [{
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

class SogDialog {
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
const SOG_DIALOG_DATA = 'dialogData';

// Example confirmation dialog
class SogConfirmDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogConfirmDialog, deps: [{ token: SogDialogRef }, { token: SOG_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogConfirmDialog, isStandalone: true, selector: "sog-confirm-dialog", ngImport: i0, template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Confirm' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message || 'Are you sure you want to proceed?' }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          {{ data.cancelText || 'Cancel' }}
        </sog-button>
        <sog-button appearance="primary" (click)="onConfirm()">
          {{ data.confirmText || 'Confirm' }}
        </sog-button>
      </div>
    </div>
  `, isInline: true, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: SognatoreButton, selector: "sog-button", inputs: ["variant", "size", "type", "disabled", "loading", "loadingText", "fullWidth"], outputs: ["click"] }, { kind: "ngmodule", type: FormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogConfirmDialog, decorators: [{
            type: Component,
            args: [{ selector: 'sog-confirm-dialog', standalone: true, imports: [CommonModule, SognatoreButton, FormsModule], template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Confirm' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message || 'Are you sure you want to proceed?' }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          {{ data.cancelText || 'Cancel' }}
        </sog-button>
        <sog-button appearance="primary" (click)="onConfirm()">
          {{ data.confirmText || 'Confirm' }}
        </sog-button>
      </div>
    </div>
  `, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"] }]
        }], ctorParameters: () => [{ type: SogDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SOG_DIALOG_DATA]
                }] }] });
// Example alert dialog
class SogAlertDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onClose() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogAlertDialog, deps: [{ token: SogDialogRef }, { token: SOG_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogAlertDialog, isStandalone: true, selector: "sog-alert-dialog", ngImport: i0, template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Alert' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="primary" (click)="onClose()">
          {{ data.buttonText || 'OK' }}
        </sog-button>
      </div>
    </div>
  `, isInline: true, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: SognatoreButton, selector: "sog-button", inputs: ["variant", "size", "type", "disabled", "loading", "loadingText", "fullWidth"], outputs: ["click"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogAlertDialog, decorators: [{
            type: Component,
            args: [{ selector: 'sog-alert-dialog', standalone: true, imports: [CommonModule, SognatoreButton], template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Alert' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="primary" (click)="onClose()">
          {{ data.buttonText || 'OK' }}
        </sog-button>
      </div>
    </div>
  `, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end}\n"] }]
        }], ctorParameters: () => [{ type: SogDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SOG_DIALOG_DATA]
                }] }] });
// Example form dialog
class SogFormDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formData = {};
        // Initialize form data
        this.data.fields.forEach((field) => {
            this.formData[field.name] = '';
        });
    }
    onSubmit() {
        this.dialogRef.close(this.formData);
    }
    onCancel() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogFormDialog, deps: [{ token: SogDialogRef }, { token: SOG_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogFormDialog, isStandalone: true, selector: "sog-form-dialog", ngImport: i0, template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Form' }}</h2>
      </div>

      <div class="dialog-body">
        <form (ngSubmit)="onSubmit()">
          <div class="form-field" *ngFor="let field of data.fields">
            <label>{{ field.label }}</label>
            <input
              [type]="field.type || 'text'"
              [(ngModel)]="formData[field.name]"
              [name]="field.name"
              [placeholder]="field.placeholder"
              [required]="field.required || false"
            />
          </div>
        </form>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          Cancel
        </sog-button>
        <sog-button appearance="primary" (click)="onSubmit()">
          Submit
        </sog-button>
      </div>
    </div>
  `, isInline: true, styles: [".dialog-content{padding:24px;min-width:400px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.form-field{margin-bottom:16px}.form-field label{display:block;margin-bottom:4px;font-weight:500;color:#000000de}.form-field input{width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:14px;box-sizing:border-box}.form-field input:focus{outline:none;border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: SognatoreButton, selector: "sog-button", inputs: ["variant", "size", "type", "disabled", "loading", "loadingText", "fullWidth"], outputs: ["click"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogFormDialog, decorators: [{
            type: Component,
            args: [{ selector: 'sog-form-dialog', standalone: true, imports: [CommonModule, SognatoreButton, FormsModule], template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Form' }}</h2>
      </div>

      <div class="dialog-body">
        <form (ngSubmit)="onSubmit()">
          <div class="form-field" *ngFor="let field of data.fields">
            <label>{{ field.label }}</label>
            <input
              [type]="field.type || 'text'"
              [(ngModel)]="formData[field.name]"
              [name]="field.name"
              [placeholder]="field.placeholder"
              [required]="field.required || false"
            />
          </div>
        </form>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          Cancel
        </sog-button>
        <sog-button appearance="primary" (click)="onSubmit()">
          Submit
        </sog-button>
      </div>
    </div>
  `, styles: [".dialog-content{padding:24px;min-width:400px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.form-field{margin-bottom:16px}.form-field label{display:block;margin-bottom:4px;font-weight:500;color:#000000de}.form-field input{width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:14px;box-sizing:border-box}.form-field input:focus{outline:none;border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"] }]
        }], ctorParameters: () => [{ type: SogDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SOG_DIALOG_DATA]
                }] }] });

// Common icon library
const ICON_LIBRARY = {
    // Navigation
    'home': `<path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'menu': `<path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'close': `<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'arrow-left': `<path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'arrow-right': `<path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'arrow-up': `<path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'arrow-down': `<path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'chevron-left': `<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'chevron-right': `<path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'chevron-up': `<path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'chevron-down': `<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    // Actions
    'search': `<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
             <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'filter': `<polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>`,
    'sort': `<path d="M3 6H21M7 12H17M11 18H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'edit': `<path d="M11 4H4C3.44772 4 3 4.44772 3 5V20C3 20.5523 3.44772 21 4 21H19C19.5523 21 20 20.5523 20 20V13" stroke="currentColor" stroke-width="2" fill="none"/>
           <path d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'delete': `<polyline points="3,6 5,6 21,6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'add': `<path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'copy': `<rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
           <path d="M5 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V5" stroke="currentColor" stroke-width="2" fill="none"/>`,
    // Status
    'check': `<polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'check-circle': `<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4906 2.02168 11.3407C2.16356 9.19077 2.99721 7.14613 4.39828 5.49707C5.79935 3.84801 7.69279 2.69227 9.79619 2.20175C11.8996 1.71123 14.1003 1.90929 16.07 2.76" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'x-circle': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
               <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    'alert-circle': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                   <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                   <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    'info': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
           <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
           <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    // UI Elements
    'heart': `<path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>`,
    'star': `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>`,
    'star-filled': `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor"/>`,
    'settings': `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
               <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2573 9.77251 19.9887C9.5799 19.7201 9.31074 19.5176 9 19.41C8.69838 19.2769 8.36381 19.2372 8.03941 19.296C7.71502 19.3548 7.41568 19.5095 7.18 19.74L7.12 19.8C6.93425 19.986 6.71368 20.1335 6.47088 20.2341C6.22808 20.3348 5.96783 20.3866 5.705 20.3866C5.44217 20.3866 5.18192 20.3348 4.93912 20.2341C4.69632 20.1335 4.47575 19.986 4.29 19.8C4.10405 19.6143 3.95653 19.3937 3.85588 19.1509C3.75523 18.9081 3.70343 18.6478 3.70343 18.385C3.70343 18.1222 3.75523 17.8619 3.85588 17.6191C3.95653 17.3763 4.10405 17.1557 4.29 16.97L4.35 16.91C4.58054 16.6743 4.73519 16.375 4.794 16.0506C4.85282 15.7262 4.81312 15.3916 4.68 15.09C4.55324 14.7942 4.34276 14.542 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742742 9.96512 4.0113 9.77251C4.27986 9.5799 4.48236 9.31074 4.59 9C4.72312 8.69838 4.76282 8.36381 4.704 8.03941C4.64519 7.71502 4.49054 7.41568 4.26 7.18L4.2 7.12C4.01405 6.93425 3.86653 6.71368 3.76588 6.47088C3.66523 6.22808 3.61343 5.96783 3.61343 5.705C3.61343 5.44217 3.66523 5.18192 3.76588 4.93912C3.86653 4.69632 4.01405 4.47575 4.2 4.29C4.38575 4.10405 4.60632 3.95653 4.84912 3.85588C5.09192 3.75523 5.35217 3.70343 5.615 3.70343C5.87783 3.70343 6.13808 3.75523 6.38088 3.85588C6.62368 3.95653 6.84425 4.10405 7.03 4.29L7.09 4.35C7.32568 4.58054 7.62502 4.73519 7.94941 4.794C8.27381 4.85282 8.60838 4.81312 8.91 4.68H9C9.29577 4.55324 9.54802 4.34276 9.73570 4.07447C9.92338 3.80618 10.0187 3.49179 10.02 3.17V3C10.02 2.46957 10.2307 1.96086 10.6058 1.58579C10.9809 1.21071 11.4896 1 12.02 1C12.5504 1 13.0591 1.21071 13.4342 1.58579C13.8093 1.96086 14.02 2.46957 14.02 3V3.09C14.0213 3.41179 14.1166 3.72618 14.3043 3.99447C14.492 4.26276 14.7442 4.47324 15.04 4.6C15.3416 4.73312 15.6762 4.77282 16.0006 4.714C16.325 4.65519 16.6243 4.50054 16.86 4.27L16.92 4.21C17.1057 4.02405 17.3263 3.87653 17.5691 3.77588C17.8119 3.67523 18.0722 3.62343 18.335 3.62343C18.5978 3.62343 18.8581 3.67523 19.1009 3.77588C19.3437 3.87653 19.5643 4.02405 19.75 4.21C19.936 4.39575 20.0835 4.61632 20.1841 4.85912C20.2848 5.10192 20.3366 5.36217 20.3366 5.625C20.3366 5.88783 20.2848 6.14808 20.1841 6.39088C20.0835 6.63368 19.936 6.85425 19.75 7.04L19.69 7.1C19.4595 7.33568 19.3048 7.63502 19.246 7.95941C19.1872 8.28381 19.2269 8.61838 19.36 8.92V9C19.4868 9.29577 19.6972 9.54802 19.9655 9.73570C20.2338 9.92338 20.5482 10.0187 20.87 10.02H21C21.5304 10.02 22.0391 10.2307 22.4142 10.6058C22.7893 10.9809 23 11.4896 23 12.02C23 12.5504 22.7893 13.0591 22.4142 13.4342C22.0391 13.8093 21.5304 14.02 21 14.02H20.91C20.5882 14.0213 20.2738 14.1166 20.0055 14.3043C19.7372 14.492 19.5268 14.7442 19.4 15.04V15Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'user': `<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
    'users': `<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    // File types
    'file': `<path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <polyline points="13,2 13,9 20,9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'download': `<path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
               <polyline points="7,10 12,15 17,10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
               <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    'upload': `<path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
             <polyline points="17,8 12,3 7,8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
             <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    // Devices
    'phone': `<path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.74 20.97 13.5649 19.9296 10.89 18C8.2151 16.0704 6.07044 13.365 4.72 10.27C3.02008 7.58756 1.99826 4.41476 2 1.16C2 0.626566 2.21071 0.117859 2.58579 -0.257107C2.96086 -0.632074 3.46957 -0.842784 4 -0.842784H6.09C6.6725 -0.843675 7.2372 -0.641964 7.6801 -0.275417C8.123 0.0911302 8.41471 0.509818 8.5 0.98L9.2 4.98C9.28973 5.46149 9.22413 5.96086 9.01429 6.40089C8.80445 6.84092 8.46238 7.19825 8.04 7.42L6.81 8.03C7.91454 10.6985 9.80146 12.5854 12.47 13.69L13.08 12.46C13.3018 12.0376 13.6591 11.6956 14.0991 11.4857C14.5391 11.2759 15.0385 11.2103 15.52 11.3L19.52 12C19.9902 12.0853 20.4089 12.377 20.7754 12.8199C21.142 13.2628 21.4436 13.8275 21.44 14.41L22 16.92Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'mail': `<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'calendar': `<rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
               <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    'clock': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};
class SognatoreIcon {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.name = '';
        this.size = 'md';
        this.color = 'current';
        this.customSize = 20;
        this.customSvg = '';
        this.viewBox = '0 0 24 24';
        this.fill = 'none';
    }
    getSize() {
        if (this.size === 'custom')
            return this.customSize;
        const sizeMap = {
            xs: 12,
            sm: 16,
            md: 20,
            lg: 24,
            xl: 32,
            xxl: 48
        };
        return sizeMap[this.size];
    }
    getIconSvg() {
        if (this.customSvg) {
            return this.customSvg;
        }
        return ICON_LIBRARY[this.name] || '';
    }
    getSafeIconSvg() {
        const svgContent = this.getIconSvg();
        return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }
    getIconClasses() {
        const safeSize = typeof this.size === 'string' ? this.size : 'md';
        const safeColor = typeof this.color === 'string' ? this.color : 'current';
        return [safeSize, safeColor];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreIcon, deps: [{ token: i1$1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreIcon, isStandalone: true, selector: "sog-icon", inputs: { name: "name", size: "size", color: "color", customSize: "customSize", customSvg: "customSvg", viewBox: "viewBox", fill: "fill" }, ngImport: i0, template: `
    <svg 
      class="sog-icon"
      [ngClass]="getIconClasses()"
      [attr.width]="getSize()"
      [attr.height]="getSize()"
      [attr.viewBox]="viewBox"
      [attr.fill]="fill"
      xmlns="http://www.w3.org/2000/svg"
      [innerHTML]="getSafeIconSvg()"
    >
    </svg>
  `, isInline: true, styles: [".sog-icon{display:inline-block;vertical-align:middle;flex-shrink:0;// Custom colors &.inherit{color:inherit}}.sog-icon.xs{width:12px;height:12px}.sog-icon.sm{width:16px;height:16px}.sog-icon.md{width:20px;height:20px}.sog-icon.lg{width:24px;height:24px}.sog-icon.xl{width:32px;height:32px}.sog-icon.xxl{width:48px;height:48px}.sog-icon.primary{color:#3498db}.sog-icon.secondary{color:#6c757d}.sog-icon.success{color:#27ae60}.sog-icon.danger{color:#e74c3c}.sog-icon.warning{color:#f39c12}.sog-icon.info{color:#17a2b8}.sog-icon.light{color:#f8f9fa}.sog-icon.dark{color:#343a40}.sog-icon.muted{color:#6c757d;opacity:.6}.sog-icon.current{color:currentColor}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreIcon, decorators: [{
            type: Component,
            args: [{ selector: 'sog-icon', standalone: true, imports: [CommonModule], template: `
    <svg 
      class="sog-icon"
      [ngClass]="getIconClasses()"
      [attr.width]="getSize()"
      [attr.height]="getSize()"
      [attr.viewBox]="viewBox"
      [attr.fill]="fill"
      xmlns="http://www.w3.org/2000/svg"
      [innerHTML]="getSafeIconSvg()"
    >
    </svg>
  `, styles: [".sog-icon{display:inline-block;vertical-align:middle;flex-shrink:0;// Custom colors &.inherit{color:inherit}}.sog-icon.xs{width:12px;height:12px}.sog-icon.sm{width:16px;height:16px}.sog-icon.md{width:20px;height:20px}.sog-icon.lg{width:24px;height:24px}.sog-icon.xl{width:32px;height:32px}.sog-icon.xxl{width:48px;height:48px}.sog-icon.primary{color:#3498db}.sog-icon.secondary{color:#6c757d}.sog-icon.success{color:#27ae60}.sog-icon.danger{color:#e74c3c}.sog-icon.warning{color:#f39c12}.sog-icon.info{color:#17a2b8}.sog-icon.light{color:#f8f9fa}.sog-icon.dark{color:#343a40}.sog-icon.muted{color:#6c757d;opacity:.6}.sog-icon.current{color:currentColor}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.DomSanitizer }], propDecorators: { name: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], customSize: [{
                type: Input
            }], customSvg: [{
                type: Input
            }], viewBox: [{
                type: Input
            }], fill: [{
                type: Input
            }] } });
// Icon service for dynamic icon registration
class SogIconService {
    static { this.customIcons = {}; }
    static registerIcon(name, svg) {
        this.customIcons[name] = svg;
        ICON_LIBRARY[name] = svg;
    }
    static registerIcons(icons) {
        Object.keys(icons).forEach(name => {
            this.registerIcon(name, icons[name]);
        });
    }
    static getIcon(name) {
        return ICON_LIBRARY[name];
    }
    static getAllIcons() {
        return Object.keys(ICON_LIBRARY);
    }
}

class SognatoreTooltip {
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

class SognatoreBadge {
    constructor() {
        this.content = '';
        this.max = 99;
        this.dot = false;
        this.hidden = false;
        this.variant = 'basic';
        this.color = 'primary';
        this.size = 'md';
        this.position = 'top-right';
        this.standalone = false;
    }
    getDisplayContent() {
        if (this.dot)
            return '';
        if (typeof this.content === 'number') {
            return this.content > this.max ? `${this.max}+` : this.content.toString();
        }
        return this.content?.toString() || '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreBadge, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreBadge, isStandalone: true, selector: "sog-badge", inputs: { content: "content", max: "max", dot: "dot", hidden: "hidden", variant: "variant", color: "color", size: "size", position: "position", standalone: "standalone" }, ngImport: i0, template: `
    <span class="badge-wrapper" [ngClass]="{ 'standalone': standalone }">
      <ng-content></ng-content>
      
      <span 
        class="sog-badge" 
        [ngClass]="[variant, color, size, position]"
        [style.display]="hidden ? 'none' : 'inline-block'"
        *ngIf="content || dot"
      >
        <span *ngIf="!dot" class="badge-content">
          {{ getDisplayContent() }}
        </span>
      </span>
    </span>
  `, isInline: true, styles: [".badge-wrapper{position:relative;display:inline-block}.badge-wrapper.standalone .sog-badge{position:static;transform:none}.sog-badge{position:absolute;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-weight:600;font-family:inherit;line-height:1;// Colors - Light background with dark text for better readability &.primary{background-color:#3498db1a;color:#2980b9}// Notification badges need solid backgrounds for visibility .badge-wrapper:has(.sog-badge.top-right),.badge-wrapper:has(.sog-badge.top-left),.badge-wrapper:has(.sog-badge.bottom-right),.badge-wrapper:has(.sog-badge.bottom-left){.sog-badge{&.primary{background-color:#3498db;color:#fff}&.danger{background-color:#ef4444;color:#fff}&.success{background-color:#10b981;color:#fff}&.warning{background-color:#f59e0b;color:#fff}}}// Positions &.top-right{top:0;right:0;transform:translate(50%,-50%)}}.sog-badge.basic{border-radius:4px;text-transform:uppercase;letter-spacing:.05em}.sog-badge.basic.xs{padding:.125rem .375rem;font-size:.625rem;font-weight:600}.sog-badge.basic.sm{padding:.125rem .5rem;font-size:.6875rem;font-weight:600}.sog-badge.basic.md{padding:.25rem .75rem;font-size:.75rem;font-weight:600}.sog-badge.basic.lg{padding:.375rem 1rem;font-size:.875rem;font-weight:600}.sog-badge.basic.dot{min-width:8px;height:8px;padding:0;border-radius:50%}.sog-badge.basic.dot.sm{width:10px;height:10px}.sog-badge.basic.dot.md{width:12px;height:12px}.sog-badge.basic.dot.lg{width:14px;height:14px}.sog-badge.material{border-radius:10px}.sog-badge.material.xs{min-width:16px;height:16px;padding:0 4px;font-size:10px}.sog-badge.material.sm{min-width:18px;height:18px;padding:0 6px;font-size:11px}.sog-badge.material.md{min-width:20px;height:20px;padding:0 8px;font-size:12px}.sog-badge.material.lg{min-width:22px;height:22px;padding:0 8px;font-size:12px}.sog-badge.material.dot{min-width:6px;height:6px;padding:0;border-radius:50%}.sog-badge.material.dot.sm{width:8px;height:8px}.sog-badge.material.dot.md{width:10px;height:10px}.sog-badge.material.dot.lg{width:12px;height:12px}.sog-badge.secondary{background-color:#f3f4f6;color:#374151}.sog-badge.success{background-color:#dcfce7;color:#166534}.sog-badge.danger{background-color:#fee2e2;color:#991b1b}.sog-badge.warning{background-color:#fef3c7;color:#92400e}.sog-badge.info{background-color:#e0f2fe;color:#0c4a6e}.sog-badge.light{background-color:#f8f9fa;color:#343a40;border:1px solid #dee2e6}.sog-badge.dark{background-color:#374151;color:#fff}.sog-badge.top-left{top:0;left:0;transform:translate(-50%,-50%)}.sog-badge.bottom-right{bottom:0;right:0;transform:translate(50%,50%)}.sog-badge.bottom-left{bottom:0;left:0;transform:translate(-50%,50%)}.sog-badge.center{top:50%;left:50%;transform:translate(-50%,-50%)}.sog-badge .badge-content{overflow:hidden;text-overflow:ellipsis;max-width:100px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreBadge, decorators: [{
            type: Component,
            args: [{ selector: 'sog-badge', standalone: true, imports: [CommonModule], template: `
    <span class="badge-wrapper" [ngClass]="{ 'standalone': standalone }">
      <ng-content></ng-content>
      
      <span 
        class="sog-badge" 
        [ngClass]="[variant, color, size, position]"
        [style.display]="hidden ? 'none' : 'inline-block'"
        *ngIf="content || dot"
      >
        <span *ngIf="!dot" class="badge-content">
          {{ getDisplayContent() }}
        </span>
      </span>
    </span>
  `, styles: [".badge-wrapper{position:relative;display:inline-block}.badge-wrapper.standalone .sog-badge{position:static;transform:none}.sog-badge{position:absolute;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-weight:600;font-family:inherit;line-height:1;// Colors - Light background with dark text for better readability &.primary{background-color:#3498db1a;color:#2980b9}// Notification badges need solid backgrounds for visibility .badge-wrapper:has(.sog-badge.top-right),.badge-wrapper:has(.sog-badge.top-left),.badge-wrapper:has(.sog-badge.bottom-right),.badge-wrapper:has(.sog-badge.bottom-left){.sog-badge{&.primary{background-color:#3498db;color:#fff}&.danger{background-color:#ef4444;color:#fff}&.success{background-color:#10b981;color:#fff}&.warning{background-color:#f59e0b;color:#fff}}}// Positions &.top-right{top:0;right:0;transform:translate(50%,-50%)}}.sog-badge.basic{border-radius:4px;text-transform:uppercase;letter-spacing:.05em}.sog-badge.basic.xs{padding:.125rem .375rem;font-size:.625rem;font-weight:600}.sog-badge.basic.sm{padding:.125rem .5rem;font-size:.6875rem;font-weight:600}.sog-badge.basic.md{padding:.25rem .75rem;font-size:.75rem;font-weight:600}.sog-badge.basic.lg{padding:.375rem 1rem;font-size:.875rem;font-weight:600}.sog-badge.basic.dot{min-width:8px;height:8px;padding:0;border-radius:50%}.sog-badge.basic.dot.sm{width:10px;height:10px}.sog-badge.basic.dot.md{width:12px;height:12px}.sog-badge.basic.dot.lg{width:14px;height:14px}.sog-badge.material{border-radius:10px}.sog-badge.material.xs{min-width:16px;height:16px;padding:0 4px;font-size:10px}.sog-badge.material.sm{min-width:18px;height:18px;padding:0 6px;font-size:11px}.sog-badge.material.md{min-width:20px;height:20px;padding:0 8px;font-size:12px}.sog-badge.material.lg{min-width:22px;height:22px;padding:0 8px;font-size:12px}.sog-badge.material.dot{min-width:6px;height:6px;padding:0;border-radius:50%}.sog-badge.material.dot.sm{width:8px;height:8px}.sog-badge.material.dot.md{width:10px;height:10px}.sog-badge.material.dot.lg{width:12px;height:12px}.sog-badge.secondary{background-color:#f3f4f6;color:#374151}.sog-badge.success{background-color:#dcfce7;color:#166534}.sog-badge.danger{background-color:#fee2e2;color:#991b1b}.sog-badge.warning{background-color:#fef3c7;color:#92400e}.sog-badge.info{background-color:#e0f2fe;color:#0c4a6e}.sog-badge.light{background-color:#f8f9fa;color:#343a40;border:1px solid #dee2e6}.sog-badge.dark{background-color:#374151;color:#fff}.sog-badge.top-left{top:0;left:0;transform:translate(-50%,-50%)}.sog-badge.bottom-right{bottom:0;right:0;transform:translate(50%,50%)}.sog-badge.bottom-left{bottom:0;left:0;transform:translate(-50%,50%)}.sog-badge.center{top:50%;left:50%;transform:translate(-50%,-50%)}.sog-badge .badge-content{overflow:hidden;text-overflow:ellipsis;max-width:100px}\n"] }]
        }], propDecorators: { content: [{
                type: Input
            }], max: [{
                type: Input
            }], dot: [{
                type: Input
            }], hidden: [{
                type: Input
            }], variant: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], position: [{
                type: Input
            }], standalone: [{
                type: Input
            }] } });

class SognatoreProgress {
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

class SognatoreChip {
    constructor() {
        this.label = '';
        this.variant = 'basic';
        this.color = 'default';
        this.size = 'md';
        this.removable = false;
        this.clickable = false;
        this.disabled = false;
        this.selected = false;
        this.leadingIcon = '';
        this.trailingIcon = '';
        this.avatar = '';
        this.chipClick = new EventEmitter();
        this.chipRemove = new EventEmitter();
    }
    onRemove(event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.chipRemove.emit();
        }
    }
    onClick() {
        if (this.clickable && !this.disabled) {
            this.chipClick.emit();
        }
    }
    getChipClasses() {
        const safeVariant = typeof this.variant === 'string' ? this.variant : 'basic';
        const safeColor = typeof this.color === 'string' ? this.color : 'default';
        const safeSize = typeof this.size === 'string' ? this.size : 'md';
        const classes = [safeVariant, safeColor, safeSize];
        if (this.clickable) {
            classes.push('clickable');
        }
        if (this.disabled) {
            classes.push('disabled');
        }
        if (this.selected) {
            classes.push('selected');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreChip, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreChip, isStandalone: true, selector: "sog-chip", inputs: { label: "label", variant: "variant", color: "color", size: "size", removable: "removable", clickable: "clickable", disabled: "disabled", selected: "selected", leadingIcon: "leadingIcon", trailingIcon: "trailingIcon", avatar: "avatar" }, outputs: { chipClick: "chipClick", chipRemove: "chipRemove" }, ngImport: i0, template: `
    <div
      class="sog-chip"
      [ngClass]="getChipClasses()"
      (click)="onClick()"
      [attr.role]="clickable ? 'button' : null"
      [attr.tabindex]="clickable && !disabled ? '0' : null"
      [attr.aria-pressed]="clickable && selected ? 'true' : null"
    >
      <!-- Leading icon or avatar -->
      <span
        *ngIf="leadingIcon"
        class="chip-icon leading"
        [innerHTML]="leadingIcon"
      ></span>
      <img *ngIf="avatar" [src]="avatar" [alt]="label" class="chip-avatar" />

      <!-- Chip content -->
      <span class="chip-label">
        {{ label }}
        <ng-content></ng-content>
      </span>

      <!-- Trailing icon or remove button -->
      <span
        *ngIf="trailingIcon && !removable"
        class="chip-icon trailing"
        [innerHTML]="trailingIcon"
      ></span>

      <button
        *ngIf="removable"
        class="chip-remove"
        (click)="onRemove($event)"
        [attr.aria-label]="'Remove ' + label"
        [disabled]="disabled"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  `, isInline: true, styles: [".sog-chip{display:inline-flex;align-items:center;font-family:inherit;font-weight:500;line-height:1;-webkit-user-select:none;user-select:none;white-space:nowrap;cursor:default;transition:all .2s ease;position:relative;// Colors &.primary{background:#3498db;color:#fff;border-color:#3498db;&:hover:not(.disabled){background:#2980b9;border-color:#2980b9}}}.sog-chip.clickable{cursor:pointer}.sog-chip.disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.sog-chip.basic{border-radius:16px;border:1px solid #e0e0e0;background:#f8f9fa}.sog-chip.basic.xs{height:20px;padding:0 8px;font-size:11px}.sog-chip.basic.xs .chip-avatar{width:16px;height:16px;margin-left:-4px;margin-right:4px}.sog-chip.basic.xs .chip-icon{width:12px;height:12px}.sog-chip.basic.xs .chip-icon.leading{margin-right:4px}.sog-chip.basic.xs .chip-icon.trailing{margin-left:4px}.sog-chip.basic.xs .chip-remove{width:16px;height:16px;margin-left:4px;margin-right:-4px}.sog-chip.basic.sm{height:24px;padding:0 10px;font-size:12px}.sog-chip.basic.sm .chip-avatar{width:20px;height:20px;margin-left:-6px;margin-right:6px}.sog-chip.basic.sm .chip-icon{width:14px;height:14px}.sog-chip.basic.sm .chip-icon.leading{margin-right:6px}.sog-chip.basic.sm .chip-icon.trailing{margin-left:6px}.sog-chip.basic.sm .chip-remove{width:18px;height:18px;margin-left:6px;margin-right:-4px}.sog-chip.basic.md{height:32px;padding:0 12px;font-size:14px}.sog-chip.basic.md .chip-avatar{width:24px;height:24px;margin-left:-6px;margin-right:8px}.sog-chip.basic.md .chip-icon{width:16px;height:16px}.sog-chip.basic.md .chip-icon.leading{margin-right:8px}.sog-chip.basic.md .chip-icon.trailing{margin-left:8px}.sog-chip.basic.md .chip-remove{width:20px;height:20px;margin-left:8px;margin-right:-4px}.sog-chip.basic.lg{height:40px;padding:0 16px;font-size:16px}.sog-chip.basic.lg .chip-avatar{width:32px;height:32px;margin-left:-8px;margin-right:8px}.sog-chip.basic.lg .chip-icon{width:18px;height:18px}.sog-chip.basic.lg .chip-icon.leading{margin-right:8px}.sog-chip.basic.lg .chip-icon.trailing{margin-left:8px}.sog-chip.basic.lg .chip-remove{width:24px;height:24px;margin-left:8px;margin-right:-6px}.sog-chip.basic:hover:not(.disabled){background:#e9ecef;border-color:#dee2e6}.sog-chip.basic.clickable:hover:not(.disabled){background:#e9ecef;transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.sog-chip.material{border-radius:16px;background:#e0e0e0;border:none}.sog-chip.material.xs{height:24px;padding:0 8px;font-size:12px}.sog-chip.material.sm{height:28px;padding:0 12px;font-size:13px}.sog-chip.material.md{height:32px;padding:0 12px;font-size:14px}.sog-chip.material.lg{height:40px;padding:0 16px;font-size:15px}.sog-chip.material:hover:not(.disabled){background:#d5d5d5}.sog-chip.material.clickable:hover:not(.disabled){background:#d5d5d5;box-shadow:0 2px 4px #0003}.sog-chip.outlined{border-radius:16px;background:transparent;border:1px solid #e0e0e0;color:#333;// Outlined color variants &.primary{border-color:#3498db;color:#3498db;&:hover:not(.disabled){background:#3498db1a}}}.sog-chip.outlined.xs{height:20px;padding:0 8px;font-size:11px}.sog-chip.outlined.sm{height:24px;padding:0 10px;font-size:12px}.sog-chip.outlined.md{height:32px;padding:0 12px;font-size:14px}.sog-chip.outlined.lg{height:40px;padding:0 16px;font-size:16px}.sog-chip.outlined:hover:not(.disabled){background:#0000000a;border-color:#ccc}.sog-chip.outlined.clickable:hover:not(.disabled){background:#0000000a;transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.sog-chip.outlined.selected{background:#3498db;border-color:#3498db;color:#fff}.sog-chip.outlined.selected:hover:not(.disabled){background:#2980b9;border-color:#2980b9}.sog-chip.outlined.primary.selected{background:#3498db;border-color:#3498db;color:#fff}.sog-chip.outlined.success.selected{background:#16a34a;border-color:#16a34a;color:#fff}.sog-chip.outlined.warning.selected{background:#f39c12;border-color:#f39c12;color:#fff}.sog-chip.outlined.danger.selected{background:#e74c3c;border-color:#e74c3c;color:#fff}.sog-chip.outlined.success{border-color:#16a34a;color:#fff}.sog-chip.outlined.success:hover:not(.disabled){background:#16a34a1a;color:#16a34a}.sog-chip.outlined.warning{border-color:#f39c12;color:#fff}.sog-chip.outlined.warning:hover:not(.disabled){background:#f39c121a;color:#f39c12}.sog-chip.outlined.danger{border-color:#e74c3c;color:#fff}.sog-chip.outlined.danger:hover:not(.disabled){background:#e74c3c1a;color:#e74c3c}.sog-chip.outlined.info{border-color:#17a2b8;color:#17a2b8}.sog-chip.outlined.info:hover:not(.disabled){background:#17a2b81a}.sog-chip.outlined.secondary{border-color:#6c757d;color:#6c757d}.sog-chip.outlined.secondary:hover:not(.disabled){background:#6c757d1a}.sog-chip.secondary{background:#6c757d;color:#fff;border-color:#6c757d}.sog-chip.secondary:hover:not(.disabled){background:#5a6268;border-color:#5a6268}.sog-chip.success{background:#16a34a;color:#fff;border-color:#16a34a}.sog-chip.success:hover:not(.disabled){background:#15803d;border-color:#15803d}.sog-chip.danger{background:#e74c3c;color:#fff;border-color:#e74c3c}.sog-chip.danger:hover:not(.disabled){background:#c0392b;border-color:#c0392b}.sog-chip.warning{background:#f39c12;color:#fff;border-color:#f39c12}.sog-chip.warning:hover:not(.disabled){background:#e67e22;border-color:#e67e22}.sog-chip.info{background:#17a2b8;color:#fff;border-color:#17a2b8}.sog-chip.info:hover:not(.disabled){background:#138496;border-color:#138496}.sog-chip .chip-avatar{border-radius:50%;object-fit:cover}.sog-chip .chip-icon{display:inline-block;flex-shrink:0;color:currentColor}.sog-chip .chip-label{overflow:hidden;text-overflow:ellipsis;max-width:200px}.sog-chip .chip-remove{background:none;border:none;cursor:pointer;padding:2px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:currentColor;opacity:.7;transition:all .2s ease;flex-shrink:0}.sog-chip .chip-remove:hover:not(:disabled){opacity:1;background:#0000001a}.sog-chip .chip-remove svg{width:70%;height:70%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreChip, decorators: [{
            type: Component,
            args: [{ selector: 'sog-chip', standalone: true, imports: [CommonModule], template: `
    <div
      class="sog-chip"
      [ngClass]="getChipClasses()"
      (click)="onClick()"
      [attr.role]="clickable ? 'button' : null"
      [attr.tabindex]="clickable && !disabled ? '0' : null"
      [attr.aria-pressed]="clickable && selected ? 'true' : null"
    >
      <!-- Leading icon or avatar -->
      <span
        *ngIf="leadingIcon"
        class="chip-icon leading"
        [innerHTML]="leadingIcon"
      ></span>
      <img *ngIf="avatar" [src]="avatar" [alt]="label" class="chip-avatar" />

      <!-- Chip content -->
      <span class="chip-label">
        {{ label }}
        <ng-content></ng-content>
      </span>

      <!-- Trailing icon or remove button -->
      <span
        *ngIf="trailingIcon && !removable"
        class="chip-icon trailing"
        [innerHTML]="trailingIcon"
      ></span>

      <button
        *ngIf="removable"
        class="chip-remove"
        (click)="onRemove($event)"
        [attr.aria-label]="'Remove ' + label"
        [disabled]="disabled"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  `, styles: [".sog-chip{display:inline-flex;align-items:center;font-family:inherit;font-weight:500;line-height:1;-webkit-user-select:none;user-select:none;white-space:nowrap;cursor:default;transition:all .2s ease;position:relative;// Colors &.primary{background:#3498db;color:#fff;border-color:#3498db;&:hover:not(.disabled){background:#2980b9;border-color:#2980b9}}}.sog-chip.clickable{cursor:pointer}.sog-chip.disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.sog-chip.basic{border-radius:16px;border:1px solid #e0e0e0;background:#f8f9fa}.sog-chip.basic.xs{height:20px;padding:0 8px;font-size:11px}.sog-chip.basic.xs .chip-avatar{width:16px;height:16px;margin-left:-4px;margin-right:4px}.sog-chip.basic.xs .chip-icon{width:12px;height:12px}.sog-chip.basic.xs .chip-icon.leading{margin-right:4px}.sog-chip.basic.xs .chip-icon.trailing{margin-left:4px}.sog-chip.basic.xs .chip-remove{width:16px;height:16px;margin-left:4px;margin-right:-4px}.sog-chip.basic.sm{height:24px;padding:0 10px;font-size:12px}.sog-chip.basic.sm .chip-avatar{width:20px;height:20px;margin-left:-6px;margin-right:6px}.sog-chip.basic.sm .chip-icon{width:14px;height:14px}.sog-chip.basic.sm .chip-icon.leading{margin-right:6px}.sog-chip.basic.sm .chip-icon.trailing{margin-left:6px}.sog-chip.basic.sm .chip-remove{width:18px;height:18px;margin-left:6px;margin-right:-4px}.sog-chip.basic.md{height:32px;padding:0 12px;font-size:14px}.sog-chip.basic.md .chip-avatar{width:24px;height:24px;margin-left:-6px;margin-right:8px}.sog-chip.basic.md .chip-icon{width:16px;height:16px}.sog-chip.basic.md .chip-icon.leading{margin-right:8px}.sog-chip.basic.md .chip-icon.trailing{margin-left:8px}.sog-chip.basic.md .chip-remove{width:20px;height:20px;margin-left:8px;margin-right:-4px}.sog-chip.basic.lg{height:40px;padding:0 16px;font-size:16px}.sog-chip.basic.lg .chip-avatar{width:32px;height:32px;margin-left:-8px;margin-right:8px}.sog-chip.basic.lg .chip-icon{width:18px;height:18px}.sog-chip.basic.lg .chip-icon.leading{margin-right:8px}.sog-chip.basic.lg .chip-icon.trailing{margin-left:8px}.sog-chip.basic.lg .chip-remove{width:24px;height:24px;margin-left:8px;margin-right:-6px}.sog-chip.basic:hover:not(.disabled){background:#e9ecef;border-color:#dee2e6}.sog-chip.basic.clickable:hover:not(.disabled){background:#e9ecef;transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.sog-chip.material{border-radius:16px;background:#e0e0e0;border:none}.sog-chip.material.xs{height:24px;padding:0 8px;font-size:12px}.sog-chip.material.sm{height:28px;padding:0 12px;font-size:13px}.sog-chip.material.md{height:32px;padding:0 12px;font-size:14px}.sog-chip.material.lg{height:40px;padding:0 16px;font-size:15px}.sog-chip.material:hover:not(.disabled){background:#d5d5d5}.sog-chip.material.clickable:hover:not(.disabled){background:#d5d5d5;box-shadow:0 2px 4px #0003}.sog-chip.outlined{border-radius:16px;background:transparent;border:1px solid #e0e0e0;color:#333;// Outlined color variants &.primary{border-color:#3498db;color:#3498db;&:hover:not(.disabled){background:#3498db1a}}}.sog-chip.outlined.xs{height:20px;padding:0 8px;font-size:11px}.sog-chip.outlined.sm{height:24px;padding:0 10px;font-size:12px}.sog-chip.outlined.md{height:32px;padding:0 12px;font-size:14px}.sog-chip.outlined.lg{height:40px;padding:0 16px;font-size:16px}.sog-chip.outlined:hover:not(.disabled){background:#0000000a;border-color:#ccc}.sog-chip.outlined.clickable:hover:not(.disabled){background:#0000000a;transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.sog-chip.outlined.selected{background:#3498db;border-color:#3498db;color:#fff}.sog-chip.outlined.selected:hover:not(.disabled){background:#2980b9;border-color:#2980b9}.sog-chip.outlined.primary.selected{background:#3498db;border-color:#3498db;color:#fff}.sog-chip.outlined.success.selected{background:#16a34a;border-color:#16a34a;color:#fff}.sog-chip.outlined.warning.selected{background:#f39c12;border-color:#f39c12;color:#fff}.sog-chip.outlined.danger.selected{background:#e74c3c;border-color:#e74c3c;color:#fff}.sog-chip.outlined.success{border-color:#16a34a;color:#fff}.sog-chip.outlined.success:hover:not(.disabled){background:#16a34a1a;color:#16a34a}.sog-chip.outlined.warning{border-color:#f39c12;color:#fff}.sog-chip.outlined.warning:hover:not(.disabled){background:#f39c121a;color:#f39c12}.sog-chip.outlined.danger{border-color:#e74c3c;color:#fff}.sog-chip.outlined.danger:hover:not(.disabled){background:#e74c3c1a;color:#e74c3c}.sog-chip.outlined.info{border-color:#17a2b8;color:#17a2b8}.sog-chip.outlined.info:hover:not(.disabled){background:#17a2b81a}.sog-chip.outlined.secondary{border-color:#6c757d;color:#6c757d}.sog-chip.outlined.secondary:hover:not(.disabled){background:#6c757d1a}.sog-chip.secondary{background:#6c757d;color:#fff;border-color:#6c757d}.sog-chip.secondary:hover:not(.disabled){background:#5a6268;border-color:#5a6268}.sog-chip.success{background:#16a34a;color:#fff;border-color:#16a34a}.sog-chip.success:hover:not(.disabled){background:#15803d;border-color:#15803d}.sog-chip.danger{background:#e74c3c;color:#fff;border-color:#e74c3c}.sog-chip.danger:hover:not(.disabled){background:#c0392b;border-color:#c0392b}.sog-chip.warning{background:#f39c12;color:#fff;border-color:#f39c12}.sog-chip.warning:hover:not(.disabled){background:#e67e22;border-color:#e67e22}.sog-chip.info{background:#17a2b8;color:#fff;border-color:#17a2b8}.sog-chip.info:hover:not(.disabled){background:#138496;border-color:#138496}.sog-chip .chip-avatar{border-radius:50%;object-fit:cover}.sog-chip .chip-icon{display:inline-block;flex-shrink:0;color:currentColor}.sog-chip .chip-label{overflow:hidden;text-overflow:ellipsis;max-width:200px}.sog-chip .chip-remove{background:none;border:none;cursor:pointer;padding:2px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:currentColor;opacity:.7;transition:all .2s ease;flex-shrink:0}.sog-chip .chip-remove:hover:not(:disabled){opacity:1;background:#0000001a}.sog-chip .chip-remove svg{width:70%;height:70%}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], variant: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], removable: [{
                type: Input
            }], clickable: [{
                type: Input
            }], disabled: [{
                type: Input
            }], selected: [{
                type: Input
            }], leadingIcon: [{
                type: Input
            }], trailingIcon: [{
                type: Input
            }], avatar: [{
                type: Input
            }], chipClick: [{
                type: Output
            }], chipRemove: [{
                type: Output
            }] } });

/*
 * Public API Surface of sognatore-ui
 */
// Form Components

/**
 * Generated bundle index. Do not edit.
 */

export { ICON_LIBRARY, SOG_DIALOG_DATA, SogAlertDialog, SogConfirmDialog, SogDialog, SogDialogContainer, SogDialogRef, SogFormDialog, SogIconService, SognatoreAccordion, SognatoreBadge, SognatoreButton, SognatoreCard, SognatoreCheckbox, SognatoreChip, SognatoreDatepicker, SognatoreIcon, SognatoreInput, SognatoreModal, SognatoreNavbar, SognatoreProgress, SognatoreRadio, SognatoreSelect, SognatoreTab, SognatoreTabs, SognatoreTooltip };
//# sourceMappingURL=sognatore-ui.mjs.map
