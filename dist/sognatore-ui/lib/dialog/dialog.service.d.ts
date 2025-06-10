import { Type } from '@angular/core';
import { SogDialogRef } from './dialog-ref';
import { SogDialogConfig } from './dialog-config.interface';
import * as i0 from "@angular/core";
export declare class SogDialog {
    private openDialogs;
    private environmentInjector;
    private appRef;
    private recentDialogs;
    /**
     * Opens a dialog containing the given component
     */
    open<T, D = any, R = any>(component: Type<T>, config?: SogDialogConfig<D>): SogDialogRef<T, R>;
    /**
     * Closes all open dialogs
     */
    closeAll(): void;
    /**
     * Gets an array of all open dialogs
     */
    getOpenDialogs(): SogDialogRef[];
    /**
     * Finds an open dialog by ID
     */
    getDialogById(id: string): SogDialogRef | undefined;
    private createDialogContainer;
    private createDialogContent;
    private attachDialogContainer;
    private restoreFocus;
    static ɵfac: i0.ɵɵFactoryDeclaration<SogDialog, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SogDialog>;
}
export declare const SOG_DIALOG_DATA = "dialogData";
