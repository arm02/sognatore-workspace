import { SogDialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
export declare class SogConfirmDialog {
    private dialogRef;
    data: {
        title?: string;
        message?: string;
        confirmText?: string;
        cancelText?: string;
    };
    constructor(dialogRef: SogDialogRef<SogConfirmDialog, boolean>, data: {
        title?: string;
        message?: string;
        confirmText?: string;
        cancelText?: string;
    });
    onConfirm(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SogConfirmDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SogConfirmDialog, "sog-confirm-dialog", never, {}, {}, never, never, true, never>;
}
export declare class SogAlertDialog {
    private dialogRef;
    data: {
        title?: string;
        message: string;
        buttonText?: string;
    };
    constructor(dialogRef: SogDialogRef<SogAlertDialog>, data: {
        title?: string;
        message: string;
        buttonText?: string;
    });
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SogAlertDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SogAlertDialog, "sog-alert-dialog", never, {}, {}, never, never, true, never>;
}
export declare class SogFormDialog {
    private dialogRef;
    data: {
        title?: string;
        fields: Array<{
            name: string;
            label: string;
            type?: string;
            placeholder?: string;
            required?: boolean;
        }>;
    };
    formData: {
        [key: string]: any;
    };
    constructor(dialogRef: SogDialogRef<SogFormDialog, any>, data: {
        title?: string;
        fields: Array<{
            name: string;
            label: string;
            type?: string;
            placeholder?: string;
            required?: boolean;
        }>;
    });
    onSubmit(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SogFormDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SogFormDialog, "sog-form-dialog", never, {}, {}, never, never, true, never>;
}
