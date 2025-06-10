import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreCard {
    constructor() {
        this.variant = 'outlined';
        this.elevation = 'elevation-1';
        this.hasHeader = false;
        this.hasFooter = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCard, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreCard, isStandalone: true, selector: "sog-card", inputs: { variant: "variant", elevation: "elevation", hasHeader: "hasHeader", hasFooter: "hasFooter" }, ngImport: i0, template: `
    <div class="sog-card" [ngClass]="[variant, elevation]">
      <div class="card-header" *ngIf="hasHeader">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `, isInline: true, styles: [".sog-card{background:#fff;border-radius:8px;overflow:hidden;transition:box-shadow .3s ease}.sog-card.outlined{border:1px solid #e0e0e0}.sog-card.elevated{border:none}.sog-card.elevation-1{box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.sog-card.elevation-2{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card.elevation-3{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card.elevation-4{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card.elevation-5{box-shadow:0 19px 38px #0000004d,0 15px 12px #00000038}.sog-card:hover.elevation-1{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card:hover.elevation-2{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card:hover.elevation-3{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card .card-header{padding:16px 16px 0;border-bottom:1px solid #f0f0f0;margin-bottom:16px}.sog-card .card-header:empty{display:none}.sog-card .card-content{padding:16px}.sog-card .card-footer{padding:16px;border-top:1px solid #f0f0f0;margin-top:16px}.sog-card .card-footer:empty{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreCard, decorators: [{
            type: Component,
            args: [{ selector: 'sog-card', standalone: true, imports: [CommonModule], template: `
    <div class="sog-card" [ngClass]="[variant, elevation]">
      <div class="card-header" *ngIf="hasHeader">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `, styles: [".sog-card{background:#fff;border-radius:8px;overflow:hidden;transition:box-shadow .3s ease}.sog-card.outlined{border:1px solid #e0e0e0}.sog-card.elevated{border:none}.sog-card.elevation-1{box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.sog-card.elevation-2{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card.elevation-3{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card.elevation-4{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card.elevation-5{box-shadow:0 19px 38px #0000004d,0 15px 12px #00000038}.sog-card:hover.elevation-1{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card:hover.elevation-2{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card:hover.elevation-3{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card .card-header{padding:16px 16px 0;border-bottom:1px solid #f0f0f0;margin-bottom:16px}.sog-card .card-header:empty{display:none}.sog-card .card-content{padding:16px}.sog-card .card-footer{padding:16px;border-top:1px solid #f0f0f0;margin-top:16px}.sog-card .card-footer:empty{display:none}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], elevation: [{
                type: Input
            }], hasHeader: [{
                type: Input
            }], hasFooter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2duYXRvcmUtdWkvc3JjL2xpYi9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBeUZqRCxNQUFNLE9BQU8sYUFBYTtJQXZGMUI7UUF3RlcsWUFBTyxHQUE0QixVQUFVLENBQUM7UUFDOUMsY0FBUyxHQUFrRixhQUFhLENBQUM7UUFDekcsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO0tBQ3JDOytHQUxZLGFBQWE7bUdBQWIsYUFBYSw0S0FuRmQ7Ozs7Ozs7Ozs7OztHQVlULG1vQ0FiUyxZQUFZOzs0RkFvRlgsYUFBYTtrQkF2RnpCLFNBQVM7K0JBQ0UsVUFBVSxjQUNSLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxZQUNiOzs7Ozs7Ozs7Ozs7R0FZVDs4QkF3RVEsT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLWNhcmQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic29nLWNhcmRcIiBbbmdDbGFzc109XCJbdmFyaWFudCwgZWxldmF0aW9uXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCIgKm5nSWY9XCJoYXNIZWFkZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9aGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiICpuZ0lmPVwiaGFzRm9vdGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnNvZy1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmLm91dGxpbmVkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmVsZXZhdGVkIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuZWxldmF0aW9uLTEge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5lbGV2YXRpb24tMiB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmVsZXZhdGlvbi0zIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5lbGV2YXRpb24tNCB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5lbGV2YXRpb24tNSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgJi5lbGV2YXRpb24tMSB7IGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxuICAgICAgICAgICYuZWxldmF0aW9uLTIgeyBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxuICAgICAgICAgICYuZWxldmF0aW9uLTMgeyBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpOyB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6ZW1wdHkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHggMTZweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6ZW1wdHkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb2duYXRvcmVDYXJkIHtcbiAgQElucHV0KCkgdmFyaWFudDogJ291dGxpbmVkJyB8ICdlbGV2YXRlZCcgPSAnb3V0bGluZWQnO1xuICBASW5wdXQoKSBlbGV2YXRpb246ICdlbGV2YXRpb24tMScgfCAnZWxldmF0aW9uLTInIHwgJ2VsZXZhdGlvbi0zJyB8ICdlbGV2YXRpb24tNCcgfCAnZWxldmF0aW9uLTUnID0gJ2VsZXZhdGlvbi0xJztcbiAgQElucHV0KCkgaGFzSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc0Zvb3RlcjogYm9vbGVhbiA9IGZhbHNlO1xufSJdfQ==