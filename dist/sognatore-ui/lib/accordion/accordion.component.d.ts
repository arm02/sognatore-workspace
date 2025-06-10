import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface AccordionItem {
    id: string;
    title: string;
    content?: string;
    disabled?: boolean;
    expanded?: boolean;
}
export declare class SognatoreAccordion implements OnInit {
    variant: 'basic' | 'material' | 'outlined';
    items: AccordionItem[];
    multiple: boolean;
    closeOthers: boolean;
    itemToggle: EventEmitter<{
        item: AccordionItem;
        expanded: boolean;
    }>;
    itemExpanded: EventEmitter<AccordionItem>;
    itemCollapsed: EventEmitter<AccordionItem>;
    ngOnInit(): void;
    toggle(item: AccordionItem, event?: Event): void;
    expand(itemId: string): void;
    collapse(itemId: string): void;
    expandAll(): void;
    collapseAll(): void;
    trackByFn(index: number, item: AccordionItem): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreAccordion, "sog-accordion", never, { "variant": { "alias": "variant"; "required": false; }; "items": { "alias": "items"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "closeOthers": { "alias": "closeOthers"; "required": false; }; }, { "itemToggle": "itemToggle"; "itemExpanded": "itemExpanded"; "itemCollapsed": "itemCollapsed"; }, never, ["*", "*", "*"], true, never>;
}
