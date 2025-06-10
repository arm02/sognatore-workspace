import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SognatoreButton {
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline' | 'ghost' | 'link';
    size: 'small' | 'medium' | 'large';
    type: 'button' | 'submit' | 'reset';
    disabled: boolean;
    loading: boolean;
    loadingText: string;
    fullWidth: boolean;
    click: EventEmitter<Event>;
    onClick(event: Event): void;
    getButtonClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreButton, "sog-button", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingText": { "alias": "loadingText"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, { "click": "click"; }, never, ["*"], true, never>;
}
