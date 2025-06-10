import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreCheckbox {
    constructor() {
        this.class = 'basic';
        this.label = '';
        this.disabled = false;
        this.indeterminate = false;
        this.checked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    handleChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    }
    writeValue(value) {
        this.checked = value || false;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCheckbox, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreCheckbox, isStandalone: true, selector: "sog-checkbox", inputs: { class: "class", label: "label", disabled: "disabled", indeterminate: "indeterminate" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreCheckbox),
                multi: true,
            },
        ], ngImport: i0, template: `
    <label class="sog-checkbox" [ngClass]="[class, { 'disabled': disabled, 'checked': checked }]">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="checkbox-input"
      />
      <div class="checkbox-box">
        <svg 
          class="checkbox-icon" 
          [ngClass]="{ 'visible': checked || indeterminate }"
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            *ngIf="!indeterminate"
            d="M2 6L5 9L10 3" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
          <path 
            *ngIf="indeterminate"
            d="M3 6H9" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round"
          />
        </svg>
      </div>
      <span class="checkbox-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, isInline: true, styles: [".sog-checkbox{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-checkbox.basic .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.basic .checkbox-box{width:18px;height:18px;border:2px solid #ddd;border-radius:3px;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px}.sog-checkbox.basic .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(.5);transition:all .2s ease}.sog-checkbox.basic .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.basic .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-checkbox.basic:hover:not(.disabled) .checkbox-box{border-color:#3498db}.sog-checkbox.basic.checked .checkbox-box{background:#3498db;border-color:#3498db}.sog-checkbox.basic.disabled{cursor:not-allowed}.sog-checkbox.basic.disabled .checkbox-box{background:#f5f5f5;border-color:#e0e0e0}.sog-checkbox.basic.disabled .checkbox-label{color:#999}.sog-checkbox.basic.disabled.checked .checkbox-box{background:#e0e0e0;border-color:#e0e0e0}.sog-checkbox.basic.disabled.checked .checkbox-box .checkbox-icon{color:#999}.sog-checkbox.material .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.material .checkbox-box{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:2px;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px}.sog-checkbox.material .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-checkbox.material .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.material .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-checkbox.material:hover:not(.disabled) .checkbox-box{border-color:#3f51b5}.sog-checkbox.material.checked .checkbox-box{background:#3f51b5;border-color:#3f51b5}.sog-checkbox.material.disabled{cursor:not-allowed}.sog-checkbox.material.disabled .checkbox-box{border-color:#00000042}.sog-checkbox.material.disabled .checkbox-label{color:#00000061}.sog-checkbox.material.disabled.checked .checkbox-box{background:#00000042;border-color:#00000042}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCheckbox, decorators: [{
            type: Component,
            args: [{ selector: 'sog-checkbox', standalone: true, imports: [CommonModule], template: `
    <label class="sog-checkbox" [ngClass]="[class, { 'disabled': disabled, 'checked': checked }]">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="checkbox-input"
      />
      <div class="checkbox-box">
        <svg 
          class="checkbox-icon" 
          [ngClass]="{ 'visible': checked || indeterminate }"
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            *ngIf="!indeterminate"
            d="M2 6L5 9L10 3" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
          <path 
            *ngIf="indeterminate"
            d="M3 6H9" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round"
          />
        </svg>
      </div>
      <span class="checkbox-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreCheckbox),
                            multi: true,
                        },
                    ], styles: [".sog-checkbox{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-checkbox.basic .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.basic .checkbox-box{width:18px;height:18px;border:2px solid #ddd;border-radius:3px;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px}.sog-checkbox.basic .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(.5);transition:all .2s ease}.sog-checkbox.basic .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.basic .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-checkbox.basic:hover:not(.disabled) .checkbox-box{border-color:#3498db}.sog-checkbox.basic.checked .checkbox-box{background:#3498db;border-color:#3498db}.sog-checkbox.basic.disabled{cursor:not-allowed}.sog-checkbox.basic.disabled .checkbox-box{background:#f5f5f5;border-color:#e0e0e0}.sog-checkbox.basic.disabled .checkbox-label{color:#999}.sog-checkbox.basic.disabled.checked .checkbox-box{background:#e0e0e0;border-color:#e0e0e0}.sog-checkbox.basic.disabled.checked .checkbox-box .checkbox-icon{color:#999}.sog-checkbox.material .checkbox-input{position:absolute;opacity:0;width:0;height:0}.sog-checkbox.material .checkbox-box{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:2px;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px}.sog-checkbox.material .checkbox-box .checkbox-icon{color:#fff;opacity:0;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-checkbox.material .checkbox-box .checkbox-icon.visible{opacity:1;transform:scale(1)}.sog-checkbox.material .checkbox-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-checkbox.material:hover:not(.disabled) .checkbox-box{border-color:#3f51b5}.sog-checkbox.material.checked .checkbox-box{background:#3f51b5;border-color:#3f51b5}.sog-checkbox.material.disabled{cursor:not-allowed}.sog-checkbox.material.disabled .checkbox-box{border-color:#00000042}.sog-checkbox.material.disabled .checkbox-label{color:#00000061}.sog-checkbox.material.disabled.checked .checkbox-box{background:#00000042;border-color:#00000042}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29nbmF0b3JlLXVpL3NyYy9saWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUE4TXpFLE1BQU0sT0FBTyxpQkFBaUI7SUE1TTlCO1FBNk1XLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDeEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRXhDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUE2QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDOUMsY0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQXdCbEM7SUF0QkMsWUFBWSxDQUFDLEtBQVk7UUFDdkIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTBCLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7K0dBL0JVLGlCQUFpQjttR0FBakIsaUJBQWlCLDZKQTlKakI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJBaERTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDVCxtNEVBMUNTLFlBQVk7OzRGQXlNWCxpQkFBaUI7a0JBNU03QixTQUFTOytCQUNFLGNBQWMsY0FDWixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsWUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1QsYUFDVTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBeUpRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLWNoZWNrYm94JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIGNsYXNzPVwic29nLWNoZWNrYm94XCIgW25nQ2xhc3NdPVwiW2NsYXNzLCB7ICdkaXNhYmxlZCc6IGRpc2FibGVkLCAnY2hlY2tlZCc6IGNoZWNrZWQgfV1cIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgIChjaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoKVwiXG4gICAgICAgIGNsYXNzPVwiY2hlY2tib3gtaW5wdXRcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1ib3hcIj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzcz1cImNoZWNrYm94LWljb25cIiBcbiAgICAgICAgICBbbmdDbGFzc109XCJ7ICd2aXNpYmxlJzogY2hlY2tlZCB8fCBpbmRldGVybWluYXRlIH1cIlxuICAgICAgICAgIHdpZHRoPVwiMTJcIiBcbiAgICAgICAgICBoZWlnaHQ9XCIxMlwiIFxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBcbiAgICAgICAgICBmaWxsPVwibm9uZVwiIFxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggXG4gICAgICAgICAgICAqbmdJZj1cIiFpbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgIGQ9XCJNMiA2TDUgOUwxMCAzXCIgXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIiBcbiAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBcbiAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoIFxuICAgICAgICAgICAgKm5nSWY9XCJpbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgIGQ9XCJNMyA2SDlcIiBcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIFxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiIFxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2tib3gtbGFiZWxcIiAqbmdJZj1cImxhYmVsXCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9sYWJlbD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb2duYXRvcmVDaGVja2JveCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuc29nLWNoZWNrYm94IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgXG4gICAgICAgICYuYmFzaWMge1xuICAgICAgICAgIC5jaGVja2JveC1pbnB1dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5jaGVja2JveC1ib3gge1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuY2hlY2tib3gtaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi52aXNpYmxlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkgLmNoZWNrYm94LWJveCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYuY2hlY2tlZCAuY2hlY2tib3gtYm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmNoZWNrYm94LWJveCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuY2hlY2tlZCAuY2hlY2tib3gtYm94IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmNoZWNrYm94LWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLm1hdGVyaWFsIHtcbiAgICAgICAgICAuY2hlY2tib3gtaW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuY2hlY2tib3gtYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jaGVja2JveC1pY29uIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5jaGVja2JveC1sYWJlbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIC5jaGVja2JveC1ib3gge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmNoZWNrZWQgLmNoZWNrYm94LWJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jaGVja2JveC1ib3gge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jaGVja2JveC1sYWJlbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmNoZWNrZWQgLmNoZWNrYm94LWJveCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb2duYXRvcmVDaGVja2JveCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBvbkNoYW5nZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGhhbmRsZUNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmNoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWUgfHwgZmFsc2U7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59Il19