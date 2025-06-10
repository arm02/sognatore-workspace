import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SognatoreRadio implements ControlValueAccessor {
    class: string;
    label: string;
    value: any;
    name: string;
    disabled: boolean;
    selectedValue: any;
    onChange: (value: any) => void;
    onTouched: () => void;
    get isChecked(): boolean;
    handleChange(event: Event): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreRadio, "sog-radio", never, { "class": { "alias": "class"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "name": { "alias": "name"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}
