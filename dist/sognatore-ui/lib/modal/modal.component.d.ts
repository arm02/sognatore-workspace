import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SognatoreModal {
    private elementRef;
    isOpen: boolean;
    title: string;
    size: 'small' | 'medium' | 'large';
    fullscreen: boolean;
    hasHeader: boolean;
    hasFooter: boolean;
    showCloseButton: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
    class: string;
    closeModal: EventEmitter<void>;
    openModal: EventEmitter<void>;
    constructor(elementRef: ElementRef);
    onEscapeKey(event: KeyboardEvent): void;
    onOverlayClick(event: MouseEvent): void;
    open(): void;
    close(): void;
    toggle(): void;
    getOverlayClasses(): string;
    getContainerClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreModal, "sog-modal", never, { "isOpen": { "alias": "isOpen"; "required": false; }; "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; "fullscreen": { "alias": "fullscreen"; "required": false; }; "hasHeader": { "alias": "hasHeader"; "required": false; }; "hasFooter": { "alias": "hasFooter"; "required": false; }; "showCloseButton": { "alias": "showCloseButton"; "required": false; }; "closeOnOverlayClick": { "alias": "closeOnOverlayClick"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "class": { "alias": "class"; "required": false; }; }, { "closeModal": "closeModal"; "openModal": "openModal"; }, never, ["[slot=header]", "*", "[slot=footer]"], true, never>;
}
