import { Subject } from 'rxjs';
export class SogDialogRef {
    constructor(containerRef, id, disableClose = false) {
        this._afterClosed = new Subject();
        this._afterOpened = new Subject();
        this._beforeClosed = new Subject();
        this._closed = false;
        this.containerInstance = containerRef;
        this.id = id;
        this.disableClose = disableClose;
    }
    /**
     * Close the dialog with optional result data
     */
    close(result) {
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
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * Gets an observable that is notified when the dialog is opened
     */
    afterOpened() {
        return this._afterOpened.asObservable();
    }
    /**
     * Gets an observable that is notified before the dialog is closed
     */
    beforeClosed() {
        return this._beforeClosed.asObservable();
    }
    /**
     * Updates the position of the dialog
     */
    updatePosition(position) {
        // Implementation would update the container position
        return this;
    }
    /**
     * Updates the size of the dialog
     */
    updateSize(width, height) {
        // Implementation would update the container size
        return this;
    }
    /**
     * Add a CSS class to the dialog container
     */
    addPanelClass(classes) {
        // Implementation would add classes to container
        return this;
    }
    /**
     * Remove a CSS class from the dialog container
     */
    removePanelClass(classes) {
        // Implementation would remove classes from container
        return this;
    }
    /**
     * Gets the current state of the dialog's position
     */
    getState() {
        return {
            id: this.id,
            disableClose: this.disableClose
        };
    }
    /**
     * Internal method to trigger afterOpened
     */
    _opened() {
        this._afterOpened.next();
        this._afterOpened.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZ25hdG9yZS11aS9zcmMvbGliL2RpYWxvZy9kaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHM0MsTUFBTSxPQUFPLFlBQVk7SUFrQnZCLFlBQ0UsWUFBK0IsRUFDL0IsRUFBVSxFQUNWLFlBQVksR0FBRyxLQUFLO1FBcEJkLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQWlCLENBQUM7UUFDNUMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQWlCLENBQUM7UUFDN0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW1CdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFVO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25HLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsUUFBMkU7UUFDeEYscURBQXFEO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLEtBQWMsRUFBRSxNQUFlO1FBQ3hDLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxPQUEwQjtRQUN0QyxnREFBZ0Q7UUFDaEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxPQUEwQjtRQUN6QyxxREFBcUQ7UUFDckQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNvZ0RpYWxvZ1JlZjxUID0gYW55LCBSID0gYW55PiB7XG4gIHByaXZhdGUgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8UiB8IHVuZGVmaW5lZD4oKTtcbiAgcHJpdmF0ZSBfYWZ0ZXJPcGVuZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9iZWZvcmVDbG9zZWQgPSBuZXcgU3ViamVjdDxSIHwgdW5kZWZpbmVkPigpO1xuICBwcml2YXRlIF9jbG9zZWQgPSBmYWxzZTtcblxuICAvKiogQ29tcG9uZW50IGluc3RhbmNlIG9mIHRoZSBkaWFsb2cgY29udGVudCAqL1xuICBjb21wb25lbnRJbnN0YW5jZSE6IFQ7XG4gIFxuICAvKiogQ29tcG9uZW50IHJlZiBvZiB0aGUgZGlhbG9nIGNvbnRhaW5lciAqL1xuICBjb250YWluZXJJbnN0YW5jZSE6IENvbXBvbmVudFJlZjxhbnk+O1xuICBcbiAgLyoqIFVuaXF1ZSBJRCBvZiB0aGUgZGlhbG9nICovXG4gIGlkOiBzdHJpbmc7XG4gIFxuICAvKiogV2hldGhlciB0aGUgZGlhbG9nIGNhbiBiZSBjbG9zZWQgdmlhIGJhY2tkcm9wIGNsaWNrIG9yIGVzY2FwZSBrZXkgKi9cbiAgZGlzYWJsZUNsb3NlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPGFueT4sXG4gICAgaWQ6IHN0cmluZyxcbiAgICBkaXNhYmxlQ2xvc2UgPSBmYWxzZVxuICApIHtcbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlID0gY29udGFpbmVyUmVmO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmRpc2FibGVDbG9zZSA9IGRpc2FibGVDbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgZGlhbG9nIHdpdGggb3B0aW9uYWwgcmVzdWx0IGRhdGFcbiAgICovXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnU29nRGlhbG9nUmVmLmNsb3NlKCkgY2FsbGVkIHdpdGggcmVzdWx0OicsIHJlc3VsdCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZUNsb3NlIHx8IHRoaXMuX2Nsb3NlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0RpYWxvZyBjbG9zZSBwcmV2ZW50ZWQgLSBkaXNhYmxlQ2xvc2U6JywgdGhpcy5kaXNhYmxlQ2xvc2UsICdfY2xvc2VkOicsIHRoaXMuX2Nsb3NlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuX2JlZm9yZUNsb3NlZC5uZXh0KHJlc3VsdCk7XG4gICAgdGhpcy5fYmVmb3JlQ2xvc2VkLmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICBcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KHJlc3VsdCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2xvc2VkXG4gICAqL1xuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPFIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgZGlhbG9nIGlzIG9wZW5lZFxuICAgKi9cbiAgYWZ0ZXJPcGVuZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyT3BlbmVkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIGJlZm9yZSB0aGUgZGlhbG9nIGlzIGNsb3NlZFxuICAgKi9cbiAgYmVmb3JlQ2xvc2VkKCk6IE9ic2VydmFibGU8UiB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLl9iZWZvcmVDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRpYWxvZ1xuICAgKi9cbiAgdXBkYXRlUG9zaXRpb24ocG9zaXRpb24/OiB7IHRvcD86IHN0cmluZzsgYm90dG9tPzogc3RyaW5nOyBsZWZ0Pzogc3RyaW5nOyByaWdodD86IHN0cmluZyB9KTogdGhpcyB7XG4gICAgLy8gSW1wbGVtZW50YXRpb24gd291bGQgdXBkYXRlIHRoZSBjb250YWluZXIgcG9zaXRpb25cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIHRoZSBkaWFsb2dcbiAgICovXG4gIHVwZGF0ZVNpemUod2lkdGg/OiBzdHJpbmcsIGhlaWdodD86IHN0cmluZyk6IHRoaXMge1xuICAgIC8vIEltcGxlbWVudGF0aW9uIHdvdWxkIHVwZGF0ZSB0aGUgY29udGFpbmVyIHNpemVcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBDU1MgY2xhc3MgdG8gdGhlIGRpYWxvZyBjb250YWluZXJcbiAgICovXG4gIGFkZFBhbmVsQ2xhc3MoY2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10pOiB0aGlzIHtcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiB3b3VsZCBhZGQgY2xhc3NlcyB0byBjb250YWluZXJcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBDU1MgY2xhc3MgZnJvbSB0aGUgZGlhbG9nIGNvbnRhaW5lclxuICAgKi9cbiAgcmVtb3ZlUGFuZWxDbGFzcyhjbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHRoaXMge1xuICAgIC8vIEltcGxlbWVudGF0aW9uIHdvdWxkIHJlbW92ZSBjbGFzc2VzIGZyb20gY29udGFpbmVyXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGlhbG9nJ3MgcG9zaXRpb25cbiAgICovXG4gIGdldFN0YXRlKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmRpc2FibGVDbG9zZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgbWV0aG9kIHRvIHRyaWdnZXIgYWZ0ZXJPcGVuZWRcbiAgICovXG4gIF9vcGVuZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xuICAgIHRoaXMuX2FmdGVyT3BlbmVkLmNvbXBsZXRlKCk7XG4gIH1cbn0iXX0=