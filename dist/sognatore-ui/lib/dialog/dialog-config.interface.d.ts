export interface SogDialogConfig<T = any> {
    /** Width of the dialog */
    width?: string;
    /** Height of the dialog */
    height?: string;
    /** Min width of the dialog */
    minWidth?: string;
    /** Min height of the dialog */
    minHeight?: string;
    /** Max width of the dialog */
    maxWidth?: string;
    /** Max height of the dialog */
    maxHeight?: string;
    /** Size preset for the dialog */
    size?: 'small' | 'medium' | 'large' | 'fullscreen';
    /** Whether the dialog should be fullscreen */
    fullscreen?: boolean;
    /** Data to pass to the dialog component */
    data?: T;
    /** Whether clicking the backdrop should close the dialog */
    disableClose?: boolean;
    /** Whether the escape key should close the dialog */
    closeOnNavigation?: boolean;
    /** Custom CSS class to apply to the dialog */
    panelClass?: string | string[];
    /** Custom CSS class to apply to the backdrop */
    backdropClass?: string | string[];
    /** Position of the dialog */
    position?: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
    /** Whether the dialog has a backdrop */
    hasBackdrop?: boolean;
    /** Custom component to use as dialog container */
    containerComponent?: any;
    /** Auto focus strategy */
    autoFocus?: boolean | 'first-tabbable' | 'first-heading' | 'dialog';
    /** Whether to restore focus when dialog is closed */
    restoreFocus?: boolean;
    /** Role of the dialog */
    role?: 'dialog' | 'alertdialog';
    /** Aria label for the dialog */
    ariaLabel?: string;
    /** Aria labelledby for the dialog */
    ariaLabelledBy?: string;
    /** Aria describedby for the dialog */
    ariaDescribedBy?: string;
    /** ID of the dialog */
    id?: string;
    /** Animation duration in milliseconds */
    animationDuration?: number;
}
