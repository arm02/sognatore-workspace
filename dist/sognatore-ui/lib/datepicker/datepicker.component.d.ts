import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SognatoreDatepicker implements ControlValueAccessor {
    class: string;
    placeholder: string;
    disabled: boolean;
    min: string;
    max: string;
    value: string;
    onChange: (value: string) => void;
    onTouched: () => void;
    handleInput(event: Event): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreDatepicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreDatepicker, "sog-datepicker", never, { "class": { "alias": "class"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; }, {}, never, never, true, never>;
}
