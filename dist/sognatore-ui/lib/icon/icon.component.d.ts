import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare const ICON_LIBRARY: {
    [key: string]: string;
};
export declare class SognatoreIcon {
    private sanitizer;
    name: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'custom';
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'muted' | 'inherit' | 'current';
    customSize: number;
    customSvg: string;
    viewBox: string;
    fill: string;
    constructor(sanitizer: DomSanitizer);
    getSize(): number;
    getIconSvg(): string;
    getSafeIconSvg(): SafeHtml;
    getIconClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreIcon, "sog-icon", never, { "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "customSize": { "alias": "customSize"; "required": false; }; "customSvg": { "alias": "customSvg"; "required": false; }; "viewBox": { "alias": "viewBox"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class SogIconService {
    private static customIcons;
    static registerIcon(name: string, svg: string): void;
    static registerIcons(icons: {
        [key: string]: string;
    }): void;
    static getIcon(name: string): string | undefined;
    static getAllIcons(): string[];
}
