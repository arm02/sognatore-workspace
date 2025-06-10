import * as i0 from "@angular/core";
export declare class SognatoreBadge {
    content: string | number;
    max: number;
    dot: boolean;
    hidden: boolean;
    variant: 'basic' | 'material';
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size: 'xs' | 'sm' | 'md' | 'lg';
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
    standalone: boolean;
    getDisplayContent(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreBadge, "sog-badge", never, { "content": { "alias": "content"; "required": false; }; "max": { "alias": "max"; "required": false; }; "dot": { "alias": "dot"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; "position": { "alias": "position"; "required": false; }; "standalone": { "alias": "standalone"; "required": false; }; }, {}, never, ["*"], true, never>;
}
