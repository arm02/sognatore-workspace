import { EventEmitter, OnInit, AfterContentInit, QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export interface TabItem {
    id: string;
    label: string;
    disabled?: boolean;
    icon?: string;
    closable?: boolean;
}
export declare class SognatoreTab {
    id: string;
    label: string;
    disabled: boolean;
    icon: string;
    closable: boolean;
    active: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreTab, "sog-tab", never, { "id": { "alias": "id"; "required": false; }; "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare class SognatoreTabs implements OnInit, AfterContentInit {
    variant: 'basic' | 'material';
    position: 'top' | 'bottom' | 'left' | 'right';
    tabs: TabItem[];
    activeTabId: string;
    scrollable: boolean;
    tabChange: EventEmitter<string>;
    tabClose: EventEmitter<string>;
    tabComponents: QueryList<SognatoreTab>;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    private updateTabsFromContent;
    selectTab(tab: TabItem, event?: Event): void;
    closeTab(tab: TabItem, event: Event): void;
    scrollLeft(): void;
    scrollRight(): void;
    trackByFn(index: number, tab: TabItem): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SognatoreTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SognatoreTabs, "sog-tabs", never, { "variant": { "alias": "variant"; "required": false; }; "position": { "alias": "position"; "required": false; }; "tabs": { "alias": "tabs"; "required": false; }; "activeTabId": { "alias": "activeTabId"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; }, { "tabChange": "tabChange"; "tabClose": "tabClose"; }, ["tabComponents"], ["*", "*"], true, never>;
}
