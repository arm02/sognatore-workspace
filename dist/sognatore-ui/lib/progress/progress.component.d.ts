import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SognatoreProgress implements OnInit, OnChanges {
    type: 'linear' | 'circular';
    variant: 'basic' | 'material';
    value: number;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    indeterminate: boolean;
    showLabel: boolean;
    labelTemplate: boolean;
    strokeWidth: number;
    circularSize: number;
    hasContent: boolean;
    currentValue: number;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateValue;
    getCircularSize(): number;
    getRadius(): number;
    getCircumference(): number;
    getStrokeDashOffset(): number;
    getProgressClasses(): string[];
    getCircleClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreProgress, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreProgress, "sog-progress", never, { "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "labelTemplate": { "alias": "labelTemplate"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; "circularSize": { "alias": "circularSize"; "required": false; }; "hasContent": { "alias": "hasContent"; "required": false; }; }, {}, never, ["[slot=label]", "*"], true, never>;
}
