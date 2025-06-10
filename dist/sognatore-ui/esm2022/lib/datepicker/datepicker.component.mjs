import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreDatepicker {
    constructor() {
        this.class = 'basic';
        this.placeholder = '';
        this.disabled = false;
        this.min = '';
        this.max = '';
        this.value = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    handleInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(target.value);
    }
    writeValue(value) {
        this.value = value || '';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreDatepicker, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreDatepicker, isStandalone: true, selector: "sog-datepicker", inputs: { class: "class", placeholder: "placeholder", disabled: "disabled", min: "min", max: "max" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SognatoreDatepicker),
                multi: true,
            },
        ], ngImport: i0, template: `
    <div class="sog-datepicker" [ngClass]="class">
      <input
        type="date"
        [value]="value"
        [min]="min"
        [max]="max"
        [disabled]="disabled"
        [placeholder]="placeholder"
        class="datepicker-input"
        (input)="handleInput($event)"
        (blur)="onTouched()"
      />
      <div class="datepicker-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  `, isInline: true, styles: [".sog-datepicker{position:relative;display:inline-block;width:100%}.sog-datepicker.basic .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:10px;color:#333}.sog-datepicker.basic .datepicker-input:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-datepicker.basic .datepicker-input:disabled{background:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.basic .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}.sog-datepicker.outlined .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:4px;color:#333;transition:border-color .3s ease}.sog-datepicker.outlined .datepicker-input:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-datepicker.outlined .datepicker-input:disabled{background:#f5f5f5;border-color:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.outlined .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreDatepicker, decorators: [{
            type: Component,
            args: [{ selector: 'sog-datepicker', standalone: true, imports: [CommonModule], template: `
    <div class="sog-datepicker" [ngClass]="class">
      <input
        type="date"
        [value]="value"
        [min]="min"
        [max]="max"
        [disabled]="disabled"
        [placeholder]="placeholder"
        class="datepicker-input"
        (input)="handleInput($event)"
        (blur)="onTouched()"
      />
      <div class="datepicker-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SognatoreDatepicker),
                            multi: true,
                        },
                    ], styles: [".sog-datepicker{position:relative;display:inline-block;width:100%}.sog-datepicker.basic .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:10px;color:#333}.sog-datepicker.basic .datepicker-input:focus{background:#e8e8e8;box-shadow:0 0 0 2px #3498db}.sog-datepicker.basic .datepicker-input:disabled{background:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.basic .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}.sog-datepicker.outlined .datepicker-input{font-family:Roboto,sans-serif;outline:0;background:#fff;width:100%;border:1px solid #ddd;margin:0;padding:15px 45px 15px 15px;box-sizing:border-box;font-size:14px;border-radius:4px;color:#333;transition:border-color .3s ease}.sog-datepicker.outlined .datepicker-input:focus{border-color:#3498db;box-shadow:0 0 0 2px #3498db33}.sog-datepicker.outlined .datepicker-input:disabled{background:#f5f5f5;border-color:#e0e0e0;color:#999;cursor:not-allowed}.sog-datepicker.outlined .datepicker-icon{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;pointer-events:none}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2duYXRvcmUtdWkvc3JjL2xpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFxSHpFLE1BQU0sT0FBTyxtQkFBbUI7SUFuSGhDO1FBb0hXLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQTRCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM3QyxjQUFTLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBdUJsQztJQXJCQyxXQUFXLENBQUMsS0FBWTtRQUN0QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzsrR0EvQlUsbUJBQW1CO21HQUFuQixtQkFBbUIsbUtBM0ZuQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkExQlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQsc3lDQXBCUyxZQUFZOzs0RkFnSFgsbUJBQW1CO2tCQW5IL0IsU0FBUzsrQkFDRSxnQkFBZ0IsY0FDZCxJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsWUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVCxhQUNVO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDOzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFzRlEsS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLWRhdGVwaWNrZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic29nLWRhdGVwaWNrZXJcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIGNsYXNzPVwiZGF0ZXBpY2tlci1pbnB1dFwiXG4gICAgICAgIChpbnB1dCk9XCJoYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKClcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWljb25cIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy44OSAzIDMuMDEgMy45IDMuMDEgNUwzIDE5QzMgMjAuMSAzLjg5IDIxIDUgMjFIMTlDMjAuMSAyMSAyMSAyMC4xIDIxIDE5VjVDMjEgMy45IDIwLjEgMyAxOSAzWk0xOSAxOUg1VjhIMTlWMTlaTTcgMTBIMTJWMTVIN1YxMFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvZ25hdG9yZURhdGVwaWNrZXIpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnNvZy1kYXRlcGlja2VyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgJi5iYXNpYyB7XG4gICAgICAgICAgLmRhdGVwaWNrZXItaW5wdXQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDQ1cHggMTVweCAxNXB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMzQ5OGRiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5kYXRlcGlja2VyLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLm91dGxpbmVkIHtcbiAgICAgICAgICAuZGF0ZXBpY2tlci1pbnB1dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCA0NXB4IDE1cHggMTVweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5kYXRlcGlja2VyLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU29nbmF0b3JlRGF0ZXBpY2tlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbWluOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWF4OiBzdHJpbmcgPSAnJztcbiAgXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGhhbmRsZUlucHV0KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufSJdfQ==