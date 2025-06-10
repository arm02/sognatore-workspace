import { EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export interface SelectOption {
    value: any;
    label: string;
    disabled?: boolean;
}
export declare class SognatoreSelect implements ControlValueAccessor {
    private elementRef;
    class: string;
    placeholder: string;
    disabled: boolean;
    options: SelectOption[];
    selectionChange: EventEmitter<SelectOption>;
    value: any;
    isOpen: boolean;
    selectedOption: SelectOption | null;
    highlightedOption: SelectOption | null;
    onChange: (value: any) => void;
    onTouched: () => void;
    constructor(elementRef: ElementRef);
    onDocumentClick(event: Event): void;
    toggle(): void;
    selectOption(option: SelectOption): void;
    onKeyDown(event: KeyboardEvent): void;
    private highlightNext;
    private highlightPrevious;
    trackByValue(index: number, option: SelectOption): any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreSelect, "sog-select", never, { "class": { "alias": "class"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}
