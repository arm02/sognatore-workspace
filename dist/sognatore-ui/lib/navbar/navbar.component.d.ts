import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface NavItem {
    label: string;
    route?: string;
    icon?: string;
    action?: () => void;
    children?: NavItem[];
    disabled?: boolean;
}
export declare class SognatoreNavbar {
    variant: 'basic' | 'material';
    title: string;
    items: NavItem[];
    fixed: boolean;
    hasBrandSlot: boolean;
    itemClick: EventEmitter<NavItem>;
    brandClick: EventEmitter<void>;
    isMobileMenuOpen: boolean;
    expandedMobileItem: NavItem | null;
    toggleMobileMenu(): void;
    onBrandClick(): void;
    onItemClick(item: NavItem, event?: Event): void;
    onMobileItemClick(item: NavItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreNavbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreNavbar, "sog-navbar", never, { "variant": { "alias": "variant"; "required": false; }; "title": { "alias": "title"; "required": false; }; "items": { "alias": "items"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; "hasBrandSlot": { "alias": "hasBrandSlot"; "required": false; }; }, { "itemClick": "itemClick"; "brandClick": "brandClick"; }, never, ["[slot=brand]", "[slot=actions]"], true, never>;
}
