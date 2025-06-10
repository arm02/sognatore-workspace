import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SognatoreChip {
    label: string;
    variant: 'basic' | 'material' | 'outlined';
    color: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    size: 'xs' | 'sm' | 'md' | 'lg';
    removable: boolean;
    clickable: boolean;
    disabled: boolean;
    selected: boolean;
    leadingIcon: string;
    trailingIcon: string;
    avatar: string;
    chipClick: EventEmitter<void>;
    chipRemove: EventEmitter<void>;
    onRemove(event: Event): void;
    onClick(): void;
    getChipClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreChip, "sog-chip", never, { "label": { "alias": "label"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "leadingIcon": { "alias": "leadingIcon"; "required": false; }; "trailingIcon": { "alias": "trailingIcon"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; }, { "chipClick": "chipClick"; "chipRemove": "chipRemove"; }, never, ["*"], true, never>;
}
