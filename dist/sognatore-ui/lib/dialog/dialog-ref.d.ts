import { Observable } from 'rxjs';
import { ComponentRef } from '@angular/core';
export declare class SogDialogRef<T = any, R = any> {
    private _afterClosed;
    private _afterOpened;
    private _beforeClosed;
    private _closed;
    /** Component instance of the dialog content */
    componentInstance: T;
    /** Component ref of the dialog container */
    containerInstance: ComponentRef<any>;
    /** Unique ID of the dialog */
    id: string;
    /** Whether the dialog can be closed via backdrop click or escape key */
    disableClose: boolean;
    constructor(containerRef: ComponentRef<any>, id: string, disableClose?: boolean);
    /**
     * Close the dialog with optional result data
     */
    close(result?: R): void;
    /**
     * Gets an observable that is notified when the dialog is closed
     */
    afterClosed(): Observable<R | undefined>;
    /**
     * Gets an observable that is notified when the dialog is opened
     */
    afterOpened(): Observable<void>;
    /**
     * Gets an observable that is notified before the dialog is closed
     */
    beforeClosed(): Observable<R | undefined>;
    /**
     * Updates the position of the dialog
     */
    updatePosition(position?: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    }): this;
    /**
     * Updates the size of the dialog
     */
    updateSize(width?: string, height?: string): this;
    /**
     * Add a CSS class to the dialog container
     */
    addPanelClass(classes: string | string[]): this;
    /**
     * Remove a CSS class from the dialog container
     */
    removePanelClass(classes: string | string[]): this;
    /**
     * Gets the current state of the dialog's position
     */
    getState(): any;
    /**
     * Internal method to trigger afterOpened
     */
    _opened(): void;
}
