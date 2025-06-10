import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SognatoreModal {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isOpen = false;
        this.title = '';
        this.size = 'medium';
        this.fullscreen = false;
        this.hasHeader = false;
        this.hasFooter = false;
        this.showCloseButton = true;
        this.closeOnOverlayClick = true;
        this.closeOnEscape = true;
        this.class = 'basic';
        this.closeModal = new EventEmitter();
        this.openModal = new EventEmitter();
    }
    onEscapeKey(event) {
        if (this.isOpen && this.closeOnEscape) {
            this.close();
        }
    }
    onOverlayClick(event) {
        if (this.closeOnOverlayClick) {
            this.close();
        }
    }
    open() {
        this.isOpen = true;
        this.openModal.emit();
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.isOpen = false;
        this.closeModal.emit();
        document.body.style.overflow = '';
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    getOverlayClasses() {
        // Ensure class is always a string
        if (typeof this.class === 'string') {
            return this.class;
        }
        else if (typeof this.class === 'object' && this.class !== null) {
            console.warn('Modal class input received object instead of string:', this.class, 'using default');
            return 'basic';
        }
        console.warn('Modal class input is undefined/null, using default');
        return 'basic';
    }
    getContainerClasses() {
        const safeSize = typeof this.size === 'string' ? this.size : 'medium';
        if (typeof this.size !== 'string') {
            console.warn('Modal size input received non-string:', typeof this.size, this.size, 'using default');
        }
        const classes = [safeSize];
        if (this.fullscreen) {
            classes.push('fullscreen');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreModal, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SognatoreModal, isStandalone: true, selector: "sog-modal", inputs: { isOpen: "isOpen", title: "title", size: "size", fullscreen: "fullscreen", hasHeader: "hasHeader", hasFooter: "hasFooter", showCloseButton: "showCloseButton", closeOnOverlayClick: "closeOnOverlayClick", closeOnEscape: "closeOnEscape", class: "class" }, outputs: { closeModal: "closeModal", openModal: "openModal" }, host: { listeners: { "document:keydown.escape": "onEscapeKey($event)" } }, ngImport: i0, template: `
    <div class="sog-modal-overlay" 
         *ngIf="isOpen" 
         [ngClass]="getOverlayClasses()"
         (click)="onOverlayClick($event)">
      <div class="modal-container" 
           [ngClass]="getContainerClasses()"
           (click)="$event.stopPropagation()">
        
        <div class="modal-header" *ngIf="hasHeader || title">
          <div class="header-content">
            <h3 class="modal-title" *ngIf="title">{{ title }}</h3>
            <ng-content select="[slot=header]"></ng-content>
          </div>
          <button 
            class="close-button" 
            *ngIf="showCloseButton"
            (click)="close()"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        
        <div class="modal-footer" *ngIf="hasFooter">
          <ng-content select="[slot=footer]"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".sog-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px;box-sizing:border-box;animation:fadeIn .3s ease}.sog-modal-overlay.basic .modal-container{background:#fff;border-radius:8px;box-shadow:0 10px 25px #0003;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s ease}.sog-modal-overlay.basic .modal-container.small{width:300px;max-width:90vw}.sog-modal-overlay.basic .modal-container.medium{width:500px;max-width:90vw}.sog-modal-overlay.basic .modal-container.large{width:800px;max-width:90vw}.sog-modal-overlay.basic .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.basic .modal-container .modal-header{padding:20px 20px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.basic .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.basic .modal-container .modal-header .header-content .modal-title{margin:0 0 10px;font-size:18px;font-weight:600;color:#333}.sog-modal-overlay.basic .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:4px;border-radius:4px;color:#666;transition:all .2s ease;margin-left:16px}.sog-modal-overlay.basic .modal-container .modal-header .close-button:hover{background:#f0f0f0;color:#333}.sog-modal-overlay.basic .modal-container .modal-body{padding:20px;overflow-y:auto;flex:1}.sog-modal-overlay.basic .modal-container .modal-footer{padding:0 20px 20px;border-top:1px solid #f0f0f0;display:flex;justify-content:flex-end;gap:12px}.sog-modal-overlay.material .modal-container{background:#fff;border-radius:4px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s cubic-bezier(.25,.8,.25,1)}.sog-modal-overlay.material .modal-container.small{width:280px;max-width:90vw}.sog-modal-overlay.material .modal-container.medium{width:560px;max-width:90vw}.sog-modal-overlay.material .modal-container.large{width:896px;max-width:90vw}.sog-modal-overlay.material .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.material .modal-container .modal-header{padding:24px 24px 20px;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.material .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.material .modal-container .modal-header .header-content .modal-title{margin:0;font-size:20px;font-weight:500;color:#000000de;line-height:1.25}.sog-modal-overlay.material .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:8px;border-radius:50%;color:#0000008a;transition:all .2s cubic-bezier(.4,0,.2,1);margin:-8px -8px -8px 16px}.sog-modal-overlay.material .modal-container .modal-header .close-button:hover{background:#0000000a;color:#000000de}.sog-modal-overlay.material .modal-container .modal-body{padding:0 24px;overflow-y:auto;flex:1;color:#0009;line-height:1.5}.sog-modal-overlay.material .modal-container .modal-footer{padding:8px 8px 8px 24px;display:flex;justify-content:flex-end;gap:8px}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SognatoreModal, decorators: [{
            type: Component,
            args: [{ selector: 'sog-modal', standalone: true, imports: [CommonModule], template: `
    <div class="sog-modal-overlay" 
         *ngIf="isOpen" 
         [ngClass]="getOverlayClasses()"
         (click)="onOverlayClick($event)">
      <div class="modal-container" 
           [ngClass]="getContainerClasses()"
           (click)="$event.stopPropagation()">
        
        <div class="modal-header" *ngIf="hasHeader || title">
          <div class="header-content">
            <h3 class="modal-title" *ngIf="title">{{ title }}</h3>
            <ng-content select="[slot=header]"></ng-content>
          </div>
          <button 
            class="close-button" 
            *ngIf="showCloseButton"
            (click)="close()"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        
        <div class="modal-footer" *ngIf="hasFooter">
          <ng-content select="[slot=footer]"></ng-content>
        </div>
      </div>
    </div>
  `, styles: [".sog-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px;box-sizing:border-box;animation:fadeIn .3s ease}.sog-modal-overlay.basic .modal-container{background:#fff;border-radius:8px;box-shadow:0 10px 25px #0003;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s ease}.sog-modal-overlay.basic .modal-container.small{width:300px;max-width:90vw}.sog-modal-overlay.basic .modal-container.medium{width:500px;max-width:90vw}.sog-modal-overlay.basic .modal-container.large{width:800px;max-width:90vw}.sog-modal-overlay.basic .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.basic .modal-container .modal-header{padding:20px 20px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.basic .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.basic .modal-container .modal-header .header-content .modal-title{margin:0 0 10px;font-size:18px;font-weight:600;color:#333}.sog-modal-overlay.basic .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:4px;border-radius:4px;color:#666;transition:all .2s ease;margin-left:16px}.sog-modal-overlay.basic .modal-container .modal-header .close-button:hover{background:#f0f0f0;color:#333}.sog-modal-overlay.basic .modal-container .modal-body{padding:20px;overflow-y:auto;flex:1}.sog-modal-overlay.basic .modal-container .modal-footer{padding:0 20px 20px;border-top:1px solid #f0f0f0;display:flex;justify-content:flex-end;gap:12px}.sog-modal-overlay.material .modal-container{background:#fff;border-radius:4px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;animation:slideIn .3s cubic-bezier(.25,.8,.25,1)}.sog-modal-overlay.material .modal-container.small{width:280px;max-width:90vw}.sog-modal-overlay.material .modal-container.medium{width:560px;max-width:90vw}.sog-modal-overlay.material .modal-container.large{width:896px;max-width:90vw}.sog-modal-overlay.material .modal-container.fullscreen{width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}.sog-modal-overlay.material .modal-container .modal-header{padding:24px 24px 20px;display:flex;justify-content:space-between;align-items:flex-start}.sog-modal-overlay.material .modal-container .modal-header .header-content{flex:1}.sog-modal-overlay.material .modal-container .modal-header .header-content .modal-title{margin:0;font-size:20px;font-weight:500;color:#000000de;line-height:1.25}.sog-modal-overlay.material .modal-container .modal-header .close-button{background:none;border:none;cursor:pointer;padding:8px;border-radius:50%;color:#0000008a;transition:all .2s cubic-bezier(.4,0,.2,1);margin:-8px -8px -8px 16px}.sog-modal-overlay.material .modal-container .modal-header .close-button:hover{background:#0000000a;color:#000000de}.sog-modal-overlay.material .modal-container .modal-body{padding:0 24px;overflow-y:auto;flex:1;color:#0009;line-height:1.5}.sog-modal-overlay.material .modal-container .modal-footer{padding:8px 8px 8px 24px;display:flex;justify-content:flex-end;gap:8px}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { isOpen: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], hasHeader: [{
                type: Input
            }], hasFooter: [{
                type: Input
            }], showCloseButton: [{
                type: Input
            }], closeOnOverlayClick: [{
                type: Input
            }], closeOnEscape: [{
                type: Input
            }], class: [{
                type: Input
            }], closeModal: [{
                type: Output
            }], openModal: [{
                type: Output
            }], onEscapeKey: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29nbmF0b3JlLXVpL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBbU8vQyxNQUFNLE9BQU8sY0FBYztJQWV6QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBZGpDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQWlDLFFBQVEsQ0FBQztRQUM5QyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyx3QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFDcEMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUV2QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVGLENBQUM7SUFHOUMsV0FBVyxDQUFDLEtBQW9CO1FBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxjQUFjLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM3QixJQUFJ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QUFDLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29nLW1vZGFsJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNvZy1tb2RhbC1vdmVybGF5XCIgXG4gICAgICAgICAqbmdJZj1cImlzT3BlblwiIFxuICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0T3ZlcmxheUNsYXNzZXMoKVwiXG4gICAgICAgICAoY2xpY2spPVwib25PdmVybGF5Q2xpY2soJGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiIFxuICAgICAgICAgICBbbmdDbGFzc109XCJnZXRDb250YWluZXJDbGFzc2VzKClcIlxuICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgKm5nSWY9XCJoYXNIZWFkZXIgfHwgdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgXG4gICAgICAgICAgICAqbmdJZj1cInNob3dDbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNSA1TDUgMTVNNSA1TDE1IDE1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIiAqbmdJZj1cImhhc0Zvb3RlclwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5zb2ctbW9kYWwtb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmLmJhc2ljIHtcbiAgICAgICAgICAubW9kYWwtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuc21hbGwgeyB3aWR0aDogMzAwcHg7IG1heC13aWR0aDogOTB2dzsgfVxuICAgICAgICAgICAgJi5tZWRpdW0geyB3aWR0aDogNTAwcHg7IG1heC13aWR0aDogOTB2dzsgfVxuICAgICAgICAgICAgJi5sYXJnZSB7IHdpZHRoOiA4MDBweDsgbWF4LXdpZHRoOiA5MHZ3OyB9XG4gICAgICAgICAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubW9kYWwtYm9keSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5tYXRlcmlhbCB7XG4gICAgICAgICAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLnNtYWxsIHsgd2lkdGg6IDI4MHB4OyBtYXgtd2lkdGg6IDkwdnc7IH1cbiAgICAgICAgICAgICYubWVkaXVtIHsgd2lkdGg6IDU2MHB4OyBtYXgtd2lkdGg6IDkwdnc7IH1cbiAgICAgICAgICAgICYubGFyZ2UgeyB3aWR0aDogODk2cHg7IG1heC13aWR0aDogOTB2dzsgfVxuICAgICAgICAgICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDI0cHggMjBweCAyNHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAtOHB4IC04cHggLThweCAxNnB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubW9kYWwtYm9keSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDI0cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgICAgICBmcm9tIHsgXG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgdG8geyBcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvZ25hdG9yZU1vZGFsIHtcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdtZWRpdW0nO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0Nsb3NlQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xvc2VPbk92ZXJsYXlDbGljazogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNsb3NlT25Fc2NhcGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJ2Jhc2ljJztcbiAgXG4gIEBPdXRwdXQoKSBjbG9zZU1vZGFsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgb3Blbk1vZGFsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIG9uRXNjYXBlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuICYmIHRoaXMuY2xvc2VPbkVzY2FwZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3ZlcmxheUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2xvc2VPbk92ZXJsYXlDbGljaykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMub3Blbk1vZGFsLmVtaXQoKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBnZXRPdmVybGF5Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIC8vIEVuc3VyZSBjbGFzcyBpcyBhbHdheXMgYSBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHRoaXMuY2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbGFzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNsYXNzID09PSAnb2JqZWN0JyAmJiB0aGlzLmNsYXNzICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ01vZGFsIGNsYXNzIGlucHV0IHJlY2VpdmVkIG9iamVjdCBpbnN0ZWFkIG9mIHN0cmluZzonLCB0aGlzLmNsYXNzLCAndXNpbmcgZGVmYXVsdCcpO1xuICAgICAgcmV0dXJuICdiYXNpYyc7XG4gICAgfVxuICAgIGNvbnNvbGUud2FybignTW9kYWwgY2xhc3MgaW5wdXQgaXMgdW5kZWZpbmVkL251bGwsIHVzaW5nIGRlZmF1bHQnKTtcbiAgICByZXR1cm4gJ2Jhc2ljJztcbiAgfVxuXG4gIGdldENvbnRhaW5lckNsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNhZmVTaXplID0gdHlwZW9mIHRoaXMuc2l6ZSA9PT0gJ3N0cmluZycgPyB0aGlzLnNpemUgOiAnbWVkaXVtJztcbiAgICBpZiAodHlwZW9mIHRoaXMuc2l6ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUud2FybignTW9kYWwgc2l6ZSBpbnB1dCByZWNlaXZlZCBub24tc3RyaW5nOicsIHR5cGVvZiB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgJ3VzaW5nIGRlZmF1bHQnKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbc2FmZVNpemVdO1xuICAgIFxuICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnZnVsbHNjcmVlbicpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufSJdfQ==