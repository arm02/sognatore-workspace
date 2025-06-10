import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreRadio {
    constructor() {
        this.class = 'basic';
        this.label = '';
        this.value = '';
        this.name = '';
        this.disabled = false;
        this.selectedValue = null;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    get isChecked() {
        return this.selectedValue === this.value;
    }
    handleChange(event) {
        const target = event.target;
        if (target.checked) {
            this.selectedValue = this.value;
            this.onChange(this.value);
        }
    }
    writeValue(value) {
        this.selectedValue = value;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreRadio, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreRadio, isStandalone: true, selector: "sog-radio", inputs: { class: "class", label: "label", value: "value", name: "name", disabled: "disabled" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreRadio),
                multi: true,
            },
        ], ngImport: i0, template: `
    <label class="sog-radio" [ngClass]="[class, { 'disabled': disabled, 'checked': isChecked }]">
      <input
        type="radio"
        [name]="name"
        [value]="value"
        [checked]="isChecked"
        [disabled]="disabled"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="radio-input"
      />
      <div class="radio-circle">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, isInline: true, styles: [".sog-radio{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-radio.basic .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.basic .radio-circle{width:18px;height:18px;border:2px solid #ddd;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px;position:relative}.sog-radio.basic .radio-circle .radio-dot{width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:all .2s ease}.sog-radio.basic .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-radio.basic:hover:not(.disabled) .radio-circle{border-color:#3498db}.sog-radio.basic.checked .radio-circle{border-color:#3498db;background:#3498db}.sog-radio.basic.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.basic.disabled{cursor:not-allowed}.sog-radio.basic.disabled .radio-circle{background:#f5f5f5;border-color:#e0e0e0}.sog-radio.basic.disabled .radio-label{color:#999}.sog-radio.basic.disabled.checked .radio-circle{background:#e0e0e0;border-color:#e0e0e0}.sog-radio.basic.disabled.checked .radio-circle .radio-dot{background:#999}.sog-radio.material .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.material .radio-circle{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:50%;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px;position:relative}.sog-radio.material .radio-circle .radio-dot{width:10px;height:10px;border-radius:50%;background:#3f51b5;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-radio.material .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-radio.material:hover:not(.disabled) .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.material.disabled{cursor:not-allowed}.sog-radio.material.disabled .radio-circle{border-color:#00000042}.sog-radio.material.disabled .radio-label{color:#00000061}.sog-radio.material.disabled.checked .radio-circle .radio-dot{background:#00000042}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreRadio, decorators: [{
            type: Component,
            args: [{ selector: 'sog-radio', standalone: true, imports: [CommonModule], template: `
    <label class="sog-radio" [ngClass]="[class, { 'disabled': disabled, 'checked': isChecked }]">
      <input
        type="radio"
        [name]="name"
        [value]="value"
        [checked]="isChecked"
        [disabled]="disabled"
        (change)="handleChange($event)"
        (blur)="onTouched()"
        class="radio-input"
      />
      <div class="radio-circle">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label" *ngIf="label">{{ label }}</span>
      <ng-content></ng-content>
    </label>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreRadio),
                            multi: true,
                        },
                    ], styles: [".sog-radio{display:inline-flex;align-items:center;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.sog-radio.basic .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.basic .radio-circle{width:18px;height:18px;border:2px solid #ddd;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;transition:all .3s ease;margin-right:8px;position:relative}.sog-radio.basic .radio-circle .radio-dot{width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:all .2s ease}.sog-radio.basic .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#333;margin-left:4px}.sog-radio.basic:hover:not(.disabled) .radio-circle{border-color:#3498db}.sog-radio.basic.checked .radio-circle{border-color:#3498db;background:#3498db}.sog-radio.basic.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.basic.disabled{cursor:not-allowed}.sog-radio.basic.disabled .radio-circle{background:#f5f5f5;border-color:#e0e0e0}.sog-radio.basic.disabled .radio-label{color:#999}.sog-radio.basic.disabled.checked .radio-circle{background:#e0e0e0;border-color:#e0e0e0}.sog-radio.basic.disabled.checked .radio-circle .radio-dot{background:#999}.sog-radio.material .radio-input{position:absolute;opacity:0;width:0;height:0}.sog-radio.material .radio-circle{width:20px;height:20px;border:2px solid rgba(0,0,0,.54);border-radius:50%;background:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s cubic-bezier(.4,0,.2,1);margin-right:8px;position:relative}.sog-radio.material .radio-circle .radio-dot{width:10px;height:10px;border-radius:50%;background:#3f51b5;transform:scale(0);transition:all .15s cubic-bezier(.4,0,.2,1)}.sog-radio.material .radio-label{font-family:Roboto,sans-serif;font-size:14px;color:#000000de;margin-left:4px}.sog-radio.material:hover:not(.disabled) .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle{border-color:#3f51b5}.sog-radio.material.checked .radio-circle .radio-dot{transform:scale(1)}.sog-radio.material.disabled{cursor:not-allowed}.sog-radio.material.disabled .radio-circle{border-color:#00000042}.sog-radio.material.disabled .radio-label{color:#00000061}.sog-radio.material.disabled.checked .radio-circle .radio-dot{background:#00000042}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29nbmF0b3JlLXVpL3NyYy9saWIvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUEyTHpFLE1BQU0sT0FBTyxjQUFjO0lBekwzQjtRQTBMVyxVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFbkMsa0JBQWEsR0FBUSxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUF5QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUMsY0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQTZCbEM7SUEzQkMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFZO1FBQ3ZCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOytHQXJDVSxjQUFjO21HQUFkLGNBQWMsd0pBbEtkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzdDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkF6QlM7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVCxtMUVBbkJTLFlBQVk7OzRGQXNMWCxjQUFjO2tCQXpMMUIsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLFlBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVCxhQUNVO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBNkpRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLXJhZGlvJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIGNsYXNzPVwic29nLXJhZGlvXCIgW25nQ2xhc3NdPVwiW2NsYXNzLCB7ICdkaXNhYmxlZCc6IGRpc2FibGVkLCAnY2hlY2tlZCc6IGlzQ2hlY2tlZCB9XVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAoY2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKClcIlxuICAgICAgICBjbGFzcz1cInJhZGlvLWlucHV0XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tY2lyY2xlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1kb3RcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpby1sYWJlbFwiICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2xhYmVsPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvZ25hdG9yZVJhZGlvKSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctcmFkaW8ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBcbiAgICAgICAgJi5iYXNpYyB7XG4gICAgICAgICAgLnJhZGlvLWlucHV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnJhZGlvLWNpcmNsZSB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1kb3Qge1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkgLnJhZGlvLWNpcmNsZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYuY2hlY2tlZCAucmFkaW8tY2lyY2xlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1kb3Qge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1jaXJjbGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmNoZWNrZWQgLnJhZGlvLWNpcmNsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5yYWRpby1kb3Qge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYubWF0ZXJpYWwge1xuICAgICAgICAgIC5yYWRpby1pbnB1dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5yYWRpby1jaXJjbGUge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnJhZGlvLWRvdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIC5yYWRpby1jaXJjbGUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmNoZWNrZWQgLnJhZGlvLWNpcmNsZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1kb3Qge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1jaXJjbGUge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yYWRpby1sYWJlbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmNoZWNrZWQgLnJhZGlvLWNpcmNsZSB7XG4gICAgICAgICAgICAgIC5yYWRpby1kb3Qge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb2duYXRvcmVSYWRpbyBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIHNlbGVjdGVkVmFsdWU6IGFueSA9IG51bGw7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWUgPT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn0iXX0=