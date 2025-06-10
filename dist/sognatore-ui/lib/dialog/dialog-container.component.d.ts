import { ViewContainerRef, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SogDialogRef } from './dialog-ref';
import { SogDialogConfig } from './dialog-config.interface';
import * as i0 from "@angular/core";
export declare class SogDialogContainer implements OnInit, OnDestroy {
    config: SogDialogConfig;
    dialogRef: SogDialogRef;
    private elementRef;
    contentContainer: ViewContainerRef;
    dialogElement: ElementRef<HTMLElement>;
    constructor(config: SogDialogConfig, dialogRef: SogDialogRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onEscapeKey(event: KeyboardEvent): void;
    onBackdropClick(event: MouseEvent): void;
    getDialogClasses(): string[];
    private focusDialog;
    private focusFirstTabbableElement;
    private focusFirstHeading;
    static ɵfac: i0.ɵɵFactoryDeclaration<SogDialogContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SogDialogContainer, "sog-dialog-container", never, {}, {}, never, never, true, never>;
}
