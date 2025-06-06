import { Observable, Subject } from 'rxjs';
import { ComponentRef } from '@angular/core';

export class SogDialogRef<T = any, R = any> {
  private _afterClosed = new Subject<R | undefined>();
  private _afterOpened = new Subject<void>();
  private _beforeClosed = new Subject<R | undefined>();
  private _closed = false;

  /** Component instance of the dialog content */
  componentInstance!: T;
  
  /** Component ref of the dialog container */
  containerInstance!: ComponentRef<any>;
  
  /** Unique ID of the dialog */
  id: string;
  
  /** Whether the dialog can be closed via backdrop click or escape key */
  disableClose: boolean;

  constructor(
    containerRef: ComponentRef<any>,
    id: string,
    disableClose = false
  ) {
    this.containerInstance = containerRef;
    this.id = id;
    this.disableClose = disableClose;
  }

  /**
   * Close the dialog with optional result data
   */
  close(result?: R): void {
    console.log('SogDialogRef.close() called with result:', result);
    if (this.disableClose || this._closed) {
      console.log('Dialog close prevented - disableClose:', this.disableClose, '_closed:', this._closed);
      return;
    }

    this._closed = true;

    this._beforeClosed.next(result);
    this._beforeClosed.complete();

    this.containerInstance.destroy();
    
    this._afterClosed.next(result);
    this._afterClosed.complete();
  }

  /**
   * Gets an observable that is notified when the dialog is closed
   */
  afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }

  /**
   * Gets an observable that is notified when the dialog is opened
   */
  afterOpened(): Observable<void> {
    return this._afterOpened.asObservable();
  }

  /**
   * Gets an observable that is notified before the dialog is closed
   */
  beforeClosed(): Observable<R | undefined> {
    return this._beforeClosed.asObservable();
  }

  /**
   * Updates the position of the dialog
   */
  updatePosition(position?: { top?: string; bottom?: string; left?: string; right?: string }): this {
    // Implementation would update the container position
    return this;
  }

  /**
   * Updates the size of the dialog
   */
  updateSize(width?: string, height?: string): this {
    // Implementation would update the container size
    return this;
  }

  /**
   * Add a CSS class to the dialog container
   */
  addPanelClass(classes: string | string[]): this {
    // Implementation would add classes to container
    return this;
  }

  /**
   * Remove a CSS class from the dialog container
   */
  removePanelClass(classes: string | string[]): this {
    // Implementation would remove classes from container
    return this;
  }

  /**
   * Gets the current state of the dialog's position
   */
  getState(): any {
    return {
      id: this.id,
      disableClose: this.disableClose
    };
  }

  /**
   * Internal method to trigger afterOpened
   */
  _opened(): void {
    this._afterOpened.next();
    this._afterOpened.complete();
  }
}