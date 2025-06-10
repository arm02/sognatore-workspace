import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SognatoreCheckbox implements ControlValueAccessor {
    class: string;
    label: string;
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    handleChange(event: Event): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreCheckbox, "sog-checkbox", never, { "class": { "alias": "class"; "required": false; }; "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; }, {}, never, ["*"], true, never>;
}
