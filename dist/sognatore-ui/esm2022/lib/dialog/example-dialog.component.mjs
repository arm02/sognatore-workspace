import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOG_DIALOG_DATA } from './dialog.service';
import { SognatoreButton } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./dialog-ref";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
// Example confirmation dialog
export class SogConfirmDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogConfirmDialog, deps: [{ token: i1.SogDialogRef }, { token: SOG_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogConfirmDialog, isStandalone: true, selector: "sog-confirm-dialog", ngImport: i0, template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Confirm' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message || 'Are you sure you want to proceed?' }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          {{ data.cancelText || 'Cancel' }}
        </sog-button>
        <sog-button appearance="primary" (click)="onConfirm()">
          {{ data.confirmText || 'Confirm' }}
        </sog-button>
      </div>
    </div>
  `, isInline: true, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: SognatoreButton, selector: "sog-button", inputs: ["variant", "size", "type", "disabled", "loading", "loadingText", "fullWidth"], outputs: ["click"] }, { kind: "ngmodule", type: FormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogConfirmDialog, decorators: [{
            type: Component,
            args: [{ selector: 'sog-confirm-dialog', standalone: true, imports: [CommonModule, SognatoreButton, FormsModule], template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Confirm' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message || 'Are you sure you want to proceed?' }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          {{ data.cancelText || 'Cancel' }}
        </sog-button>
        <sog-button appearance="primary" (click)="onConfirm()">
          {{ data.confirmText || 'Confirm' }}
        </sog-button>
      </div>
    </div>
  `, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"] }]
        }], ctorParameters: () => [{ type: i1.SogDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SOG_DIALOG_DATA]
                }] }] });
// Example alert dialog
export class SogAlertDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onClose() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogAlertDialog, deps: [{ token: i1.SogDialogRef }, { token: SOG_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogAlertDialog, isStandalone: true, selector: "sog-alert-dialog", ngImport: i0, template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Alert' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="primary" (click)="onClose()">
          {{ data.buttonText || 'OK' }}
        </sog-button>
      </div>
    </div>
  `, isInline: true, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: SognatoreButton, selector: "sog-button", inputs: ["variant", "size", "type", "disabled", "loading", "loadingText", "fullWidth"], outputs: ["click"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogAlertDialog, decorators: [{
            type: Component,
            args: [{ selector: 'sog-alert-dialog', standalone: true, imports: [CommonModule, SognatoreButton], template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Alert' }}</h2>
      </div>

      <div class="dialog-body">
        <p>{{ data.message }}</p>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="primary" (click)="onClose()">
          {{ data.buttonText || 'OK' }}
        </sog-button>
      </div>
    </div>
  `, styles: [".dialog-content{padding:24px;min-width:280px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.dialog-body p{margin:0;color:#0009;line-height:1.5}.dialog-actions{display:flex;justify-content:flex-end}\n"] }]
        }], ctorParameters: () => [{ type: i1.SogDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SOG_DIALOG_DATA]
                }] }] });
// Example form dialog
export class SogFormDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formData = {};
        // Initialize form data
        this.data.fields.forEach((field) => {
            this.formData[field.name] = '';
        });
    }
    onSubmit() {
        this.dialogRef.close(this.formData);
    }
    onCancel() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogFormDialog, deps: [{ token: i1.SogDialogRef }, { token: SOG_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SogFormDialog, isStandalone: true, selector: "sog-form-dialog", ngImport: i0, template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Form' }}</h2>
      </div>

      <div class="dialog-body">
        <form (ngSubmit)="onSubmit()">
          <div class="form-field" *ngFor="let field of data.fields">
            <label>{{ field.label }}</label>
            <input
              [type]="field.type || 'text'"
              [(ngModel)]="formData[field.name]"
              [name]="field.name"
              [placeholder]="field.placeholder"
              [required]="field.required || false"
            />
          </div>
        </form>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          Cancel
        </sog-button>
        <sog-button appearance="primary" (click)="onSubmit()">
          Submit
        </sog-button>
      </div>
    </div>
  `, isInline: true, styles: [".dialog-content{padding:24px;min-width:400px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.form-field{margin-bottom:16px}.form-field label{display:block;margin-bottom:4px;font-weight:500;color:#000000de}.form-field input{width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:14px;box-sizing:border-box}.form-field input:focus{outline:none;border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: SognatoreButton, selector: "sog-button", inputs: ["variant", "size", "type", "disabled", "loading", "loadingText", "fullWidth"], outputs: ["click"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SogFormDialog, decorators: [{
            type: Component,
            args: [{ selector: 'sog-form-dialog', standalone: true, imports: [CommonModule, SognatoreButton, FormsModule], template: `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>{{ data.title || 'Form' }}</h2>
      </div>

      <div class="dialog-body">
        <form (ngSubmit)="onSubmit()">
          <div class="form-field" *ngFor="let field of data.fields">
            <label>{{ field.label }}</label>
            <input
              [type]="field.type || 'text'"
              [(ngModel)]="formData[field.name]"
              [name]="field.name"
              [placeholder]="field.placeholder"
              [required]="field.required || false"
            />
          </div>
        </form>
      </div>

      <div class="dialog-actions">
        <sog-button appearance="default" (click)="onCancel()">
          Cancel
        </sog-button>
        <sog-button appearance="primary" (click)="onSubmit()">
          Submit
        </sog-button>
      </div>
    </div>
  `, styles: [".dialog-content{padding:24px;min-width:400px}.dialog-header{margin-bottom:16px}.dialog-header h2{margin:0;font-size:20px;font-weight:500;color:#000000de}.dialog-body{margin-bottom:24px}.form-field{margin-bottom:16px}.form-field label{display:block;margin-bottom:4px;font-weight:500;color:#000000de}.form-field input{width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:14px;box-sizing:border-box}.form-field input:focus{outline:none;border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.dialog-actions{display:flex;justify-content:flex-end;gap:8px}\n"] }]
        }], ctorParameters: () => [{ type: i1.SogDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SOG_DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29nbmF0b3JlLXVpL3NyYy9saWIvZGlhbG9nL2V4YW1wbGUtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTdDLDhCQUE4QjtBQTZEOUIsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNVLFNBQWtELEVBRW5ELElBS047UUFQTyxjQUFTLEdBQVQsU0FBUyxDQUF5QztRQUVuRCxTQUFJLEdBQUosSUFBSSxDQUtWO0lBQ0EsQ0FBQztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7K0dBbEJVLGdCQUFnQiw4Q0FHakIsZUFBZTttR0FIZCxnQkFBZ0IsOEVBeERqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVCxzWEFwQlMsWUFBWSwrQkFBRSxlQUFlLGtLQUFFLFdBQVc7OzRGQXlEekMsZ0JBQWdCO2tCQTVENUIsU0FBUzsrQkFDRSxvQkFBb0IsY0FDbEIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUUsWUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7OzBCQXdDRSxNQUFNOzJCQUFDLGVBQWU7O0FBa0IzQix1QkFBdUI7QUF5RHZCLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQ1UsU0FBdUMsRUFFeEMsSUFJTjtRQU5PLGNBQVMsR0FBVCxTQUFTLENBQThCO1FBRXhDLFNBQUksR0FBSixJQUFJLENBSVY7SUFDQSxDQUFDO0lBRUosT0FBTztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzsrR0FiVSxjQUFjLDhDQUdmLGVBQWU7bUdBSGQsY0FBYyw0RUFwRGY7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQsOFdBakJTLFlBQVksK0JBQUUsZUFBZTs7NEZBcUQ1QixjQUFjO2tCQXhEMUIsU0FBUzsrQkFDRSxrQkFBa0IsY0FDaEIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxZQUM5Qjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDs7MEJBdUNFLE1BQU07MkJBQUMsZUFBZTs7QUFhM0Isc0JBQXNCO0FBNEZ0QixNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUNVLFNBQTJDLEVBRTVDLElBU047UUFYTyxjQUFTLEdBQVQsU0FBUyxDQUFrQztRQUU1QyxTQUFJLEdBQUosSUFBSSxDQVNWO1FBZEgsYUFBUSxHQUEyQixFQUFFLENBQUM7UUFnQnBDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzsrR0E3QlUsYUFBYSw4Q0FLZCxlQUFlO21HQUxkLGFBQWEsMkVBdkZkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQsbW9CQS9CUyxZQUFZLDRKQUFFLGVBQWUsa0tBQUUsV0FBVzs7NEZBd0Z6QyxhQUFhO2tCQTNGekIsU0FBUzsrQkFDRSxpQkFBaUIsY0FDZixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxZQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUOzswQkE4REUsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTb2dEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHsgU09HX0RJQUxPR19EQVRBIH0gZnJvbSAnLi9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBTb2duYXRvcmVCdXR0b24gfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gRXhhbXBsZSBjb25maXJtYXRpb24gZGlhbG9nXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2ctY29uZmlybS1kaWFsb2cnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTb2duYXRvcmVCdXR0b24sIEZvcm1zTW9kdWxlIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICA8aDI+e3sgZGF0YS50aXRsZSB8fCAnQ29uZmlybScgfX08L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctYm9keVwiPlxuICAgICAgICA8cD57eyBkYXRhLm1lc3NhZ2UgfHwgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkPycgfX08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1hY3Rpb25zXCI+XG4gICAgICAgIDxzb2ctYnV0dG9uIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj5cbiAgICAgICAgICB7eyBkYXRhLmNhbmNlbFRleHQgfHwgJ0NhbmNlbCcgfX1cbiAgICAgICAgPC9zb2ctYnV0dG9uPlxuICAgICAgICA8c29nLWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPlxuICAgICAgICAgIHt7IGRhdGEuY29uZmlybVRleHQgfHwgJ0NvbmZpcm0nIH19XG4gICAgICAgIDwvc29nLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuZGlhbG9nLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgICAgfVxuXG4gICAgICAuZGlhbG9nLWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGlhbG9nLWJvZHkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRpYWxvZy1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU29nQ29uZmlybURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBTb2dEaWFsb2dSZWY8U29nQ29uZmlybURpYWxvZywgYm9vbGVhbj4sXG4gICAgQEluamVjdChTT0dfRElBTE9HX0RBVEEpXG4gICAgcHVibGljIGRhdGE6IHtcbiAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgbWVzc2FnZT86IHN0cmluZztcbiAgICAgIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICAgICAgY2FuY2VsVGV4dD86IHN0cmluZztcbiAgICB9XG4gICkge31cblxuICBvbkNvbmZpcm0oKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gIH1cbn1cblxuLy8gRXhhbXBsZSBhbGVydCBkaWFsb2dcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZy1hbGVydC1kaWFsb2cnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTb2duYXRvcmVCdXR0b25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1oZWFkZXJcIj5cbiAgICAgICAgPGgyPnt7IGRhdGEudGl0bGUgfHwgJ0FsZXJ0JyB9fTwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1ib2R5XCI+XG4gICAgICAgIDxwPnt7IGRhdGEubWVzc2FnZSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWFjdGlvbnNcIj5cbiAgICAgICAgPHNvZy1idXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiAoY2xpY2spPVwib25DbG9zZSgpXCI+XG4gICAgICAgICAge3sgZGF0YS5idXR0b25UZXh0IHx8ICdPSycgfX1cbiAgICAgICAgPC9zb2ctYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5kaWFsb2ctY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaWFsb2ctYm9keSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGlhbG9nLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvZ0FsZXJ0RGlhbG9nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IFNvZ0RpYWxvZ1JlZjxTb2dBbGVydERpYWxvZz4sXG4gICAgQEluamVjdChTT0dfRElBTE9HX0RBVEEpXG4gICAgcHVibGljIGRhdGE6IHtcbiAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgICAgYnV0dG9uVGV4dD86IHN0cmluZztcbiAgICB9XG4gICkge31cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuLy8gRXhhbXBsZSBmb3JtIGRpYWxvZ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLWZvcm0tZGlhbG9nJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU29nbmF0b3JlQnV0dG9uLCBGb3Jtc01vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICA8aDI+e3sgZGF0YS50aXRsZSB8fCAnRm9ybScgfX08L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctYm9keVwiPlxuICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGRhdGEuZmllbGRzXCI+XG4gICAgICAgICAgICA8bGFiZWw+e3sgZmllbGQubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIFt0eXBlXT1cImZpZWxkLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmb3JtRGF0YVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQucmVxdWlyZWQgfHwgZmFsc2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctYWN0aW9uc1wiPlxuICAgICAgICA8c29nLWJ1dHRvbiBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvc29nLWJ1dHRvbj5cbiAgICAgICAgPHNvZy1idXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L3NvZy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgIH1cblxuICAgICAgLmRpYWxvZy1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRpYWxvZy1ib2R5IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZmllbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGlhbG9nLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb2dGb3JtRGlhbG9nIHtcbiAgZm9ybURhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogU29nRGlhbG9nUmVmPFNvZ0Zvcm1EaWFsb2csIGFueT4sXG4gICAgQEluamVjdChTT0dfRElBTE9HX0RBVEEpXG4gICAgcHVibGljIGRhdGE6IHtcbiAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgZmllbGRzOiBBcnJheTx7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgdHlwZT86IHN0cmluZztcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICAgIH0+O1xuICAgIH1cbiAgKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBmb3JtIGRhdGFcbiAgICB0aGlzLmRhdGEuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmZvcm1EYXRhKTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==