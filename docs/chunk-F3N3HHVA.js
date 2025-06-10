import{a as z}from"./chunk-EB6CYSG7.js";import{$a as p,Aa as y,Ba as S,Fa as c,Lb as D,Mb as F,Nb as x,Ob as k,Qa as m,Ra as P,Sa as a,V as b,Wa as i,Xa as e,Ya as g,_a as u,ab as d,ba as C,bb as w,ca as v,cb as E,da as O,ib as t,ka as M,kb as f,qb as _}from"./chunk-CXY5ULLP.js";var R=["*"];function A(r,h){if(r&1&&g(0,"span",6),r&2){let o=d();a("innerHTML",o.leadingIcon,y)}}function j(r,h){if(r&1&&g(0,"img",7),r&2){let o=d();a("src",o.avatar,S)("alt",o.label)}}function V(r,h){if(r&1&&g(0,"span",8),r&2){let o=d();a("innerHTML",o.trailingIcon,y)}}function L(r,h){if(r&1){let o=u();i(0,"button",9),p("click",function(n){C(o);let s=d();return v(s.onRemove(n))}),O(),i(1,"svg",10),g(2,"path",11),e()()}if(r&2){let o=d();a("disabled",o.disabled),P("aria-label","Remove "+o.label)}}var T=(()=>{class r{constructor(){this.label="",this.variant="basic",this.color="default",this.size="md",this.removable=!1,this.clickable=!1,this.disabled=!1,this.selected=!1,this.leadingIcon="",this.trailingIcon="",this.avatar="",this.chipClick=new M,this.chipRemove=new M}onRemove(o){o.stopPropagation(),this.disabled||this.chipRemove.emit()}onClick(){this.clickable&&!this.disabled&&this.chipClick.emit()}getChipClasses(){let o=typeof this.variant=="string"?this.variant:"basic",l=typeof this.color=="string"?this.color:"default",n=typeof this.size=="string"?this.size:"md",s=[o,l,n];return this.clickable&&s.push("clickable"),this.disabled&&s.push("disabled"),this.selected&&s.push("selected"),s}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=b({type:r,selectors:[["sog-chip"]],inputs:{label:"label",variant:"variant",color:"color",size:"size",removable:"removable",clickable:"clickable",disabled:"disabled",selected:"selected",leadingIcon:"leadingIcon",trailingIcon:"trailingIcon",avatar:"avatar"},outputs:{chipClick:"chipClick",chipRemove:"chipRemove"},standalone:!0,features:[_],ngContentSelectors:R,decls:8,vars:9,consts:[[1,"sog-chip",3,"click","ngClass"],["class","chip-icon leading",3,"innerHTML",4,"ngIf"],["class","chip-avatar",3,"src","alt",4,"ngIf"],[1,"chip-label"],["class","chip-icon trailing",3,"innerHTML",4,"ngIf"],["class","chip-remove",3,"disabled","click",4,"ngIf"],[1,"chip-icon","leading",3,"innerHTML"],[1,"chip-avatar",3,"src","alt"],[1,"chip-icon","trailing",3,"innerHTML"],[1,"chip-remove",3,"click","disabled"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12 4L4 12M4 4L12 12","stroke","currentColor","stroke-width","1.5","stroke-linecap","round"]],template:function(l,n){l&1&&(w(),i(0,"div",0),p("click",function(){return n.onClick()}),m(1,A,1,1,"span",1)(2,j,1,2,"img",2),i(3,"span",3),t(4),E(5),e(),m(6,V,1,1,"span",4)(7,L,3,2,"button",5),e()),l&2&&(a("ngClass",n.getChipClasses()),P("role",n.clickable?"button":null)("tabindex",n.clickable&&!n.disabled?"0":null)("aria-pressed",n.clickable&&n.selected?"true":null),c(),a("ngIf",n.leadingIcon),c(),a("ngIf",n.avatar),c(2),f(" ",n.label," "),c(2),a("ngIf",n.trailingIcon&&!n.removable),c(),a("ngIf",n.removable))},dependencies:[k,D,x],styles:[".sog-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;font-family:inherit;font-weight:500;line-height:1;-webkit-user-select:none;user-select:none;white-space:nowrap;cursor:default;transition:all .2s ease;position:relative}.sog-chip.clickable[_ngcontent-%COMP%]{cursor:pointer}.sog-chip.disabled[_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed;pointer-events:none}.sog-chip.basic[_ngcontent-%COMP%]{border-radius:16px;border:1px solid #e0e0e0;background:#f8f9fa}.sog-chip.basic.xs[_ngcontent-%COMP%]{height:20px;padding:0 8px;font-size:11px}.sog-chip.basic.xs[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:-4px;margin-right:4px}.sog-chip.basic.xs[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%]{width:12px;height:12px}.sog-chip.basic.xs[_ngcontent-%COMP%]   .chip-icon.leading[_ngcontent-%COMP%]{margin-right:4px}.sog-chip.basic.xs[_ngcontent-%COMP%]   .chip-icon.trailing[_ngcontent-%COMP%]{margin-left:4px}.sog-chip.basic.xs[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:4px;margin-right:-4px}.sog-chip.basic.sm[_ngcontent-%COMP%]{height:24px;padding:0 10px;font-size:12px}.sog-chip.basic.sm[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:-6px;margin-right:6px}.sog-chip.basic.sm[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%]{width:14px;height:14px}.sog-chip.basic.sm[_ngcontent-%COMP%]   .chip-icon.leading[_ngcontent-%COMP%]{margin-right:6px}.sog-chip.basic.sm[_ngcontent-%COMP%]   .chip-icon.trailing[_ngcontent-%COMP%]{margin-left:6px}.sog-chip.basic.sm[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]{width:18px;height:18px;margin-left:6px;margin-right:-4px}.sog-chip.basic.md[_ngcontent-%COMP%]{height:32px;padding:0 12px;font-size:14px}.sog-chip.basic.md[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%]{width:24px;height:24px;margin-left:-6px;margin-right:8px}.sog-chip.basic.md[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%]{width:16px;height:16px}.sog-chip.basic.md[_ngcontent-%COMP%]   .chip-icon.leading[_ngcontent-%COMP%]{margin-right:8px}.sog-chip.basic.md[_ngcontent-%COMP%]   .chip-icon.trailing[_ngcontent-%COMP%]{margin-left:8px}.sog-chip.basic.md[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:8px;margin-right:-4px}.sog-chip.basic.lg[_ngcontent-%COMP%]{height:40px;padding:0 16px;font-size:16px}.sog-chip.basic.lg[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%]{width:32px;height:32px;margin-left:-8px;margin-right:8px}.sog-chip.basic.lg[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%]{width:18px;height:18px}.sog-chip.basic.lg[_ngcontent-%COMP%]   .chip-icon.leading[_ngcontent-%COMP%]{margin-right:8px}.sog-chip.basic.lg[_ngcontent-%COMP%]   .chip-icon.trailing[_ngcontent-%COMP%]{margin-left:8px}.sog-chip.basic.lg[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]{width:24px;height:24px;margin-left:8px;margin-right:-6px}.sog-chip.basic[_ngcontent-%COMP%]:hover:not(.disabled){background:#e9ecef;border-color:#dee2e6}.sog-chip.basic.clickable[_ngcontent-%COMP%]:hover:not(.disabled){background:#e9ecef;transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.sog-chip.material[_ngcontent-%COMP%]{border-radius:16px;background:#e0e0e0;border:none}.sog-chip.material.xs[_ngcontent-%COMP%]{height:24px;padding:0 8px;font-size:12px}.sog-chip.material.sm[_ngcontent-%COMP%]{height:28px;padding:0 12px;font-size:13px}.sog-chip.material.md[_ngcontent-%COMP%]{height:32px;padding:0 12px;font-size:14px}.sog-chip.material.lg[_ngcontent-%COMP%]{height:40px;padding:0 16px;font-size:15px}.sog-chip.material[_ngcontent-%COMP%]:hover:not(.disabled){background:#d5d5d5}.sog-chip.material.clickable[_ngcontent-%COMP%]:hover:not(.disabled){background:#d5d5d5;box-shadow:0 2px 4px #0003}.sog-chip.outlined[_ngcontent-%COMP%]{border-radius:16px;background:transparent;border:1px solid #e0e0e0;color:#333}.sog-chip.outlined.xs[_ngcontent-%COMP%]{height:20px;padding:0 8px;font-size:11px}.sog-chip.outlined.sm[_ngcontent-%COMP%]{height:24px;padding:0 10px;font-size:12px}.sog-chip.outlined.md[_ngcontent-%COMP%]{height:32px;padding:0 12px;font-size:14px}.sog-chip.outlined.lg[_ngcontent-%COMP%]{height:40px;padding:0 16px;font-size:16px}.sog-chip.outlined[_ngcontent-%COMP%]:hover:not(.disabled){background:#0000000a;border-color:#ccc}.sog-chip.outlined.clickable[_ngcontent-%COMP%]:hover:not(.disabled){background:#0000000a;transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.sog-chip.outlined.selected[_ngcontent-%COMP%]{background:#3498db;border-color:#3498db;color:#fff}.sog-chip.outlined.selected[_ngcontent-%COMP%]:hover:not(.disabled){background:#2980b9;border-color:#2980b9}.sog-chip.outlined.primary.selected[_ngcontent-%COMP%]{background:#3498db;border-color:#3498db;color:#fff}.sog-chip.outlined.success.selected[_ngcontent-%COMP%]{background:#16a34a;border-color:#16a34a;color:#fff}.sog-chip.outlined.warning.selected[_ngcontent-%COMP%]{background:#f39c12;border-color:#f39c12;color:#fff}.sog-chip.outlined.danger.selected[_ngcontent-%COMP%]{background:#e74c3c;border-color:#e74c3c;color:#fff}.sog-chip.outlined.primary[_ngcontent-%COMP%]{border-color:#3498db;color:#3498db}.sog-chip.outlined.primary[_ngcontent-%COMP%]:hover:not(.disabled){background:#3498db1a}.sog-chip.outlined.success[_ngcontent-%COMP%]{border-color:#16a34a;color:#fff}.sog-chip.outlined.success[_ngcontent-%COMP%]:hover:not(.disabled){background:#16a34a1a;color:#16a34a}.sog-chip.outlined.warning[_ngcontent-%COMP%]{border-color:#f39c12;color:#fff}.sog-chip.outlined.warning[_ngcontent-%COMP%]:hover:not(.disabled){background:#f39c121a;color:#f39c12}.sog-chip.outlined.danger[_ngcontent-%COMP%]{border-color:#e74c3c;color:#fff}.sog-chip.outlined.danger[_ngcontent-%COMP%]:hover:not(.disabled){background:#e74c3c1a;color:#e74c3c}.sog-chip.outlined.info[_ngcontent-%COMP%]{border-color:#17a2b8;color:#17a2b8}.sog-chip.outlined.info[_ngcontent-%COMP%]:hover:not(.disabled){background:#17a2b81a}.sog-chip.outlined.secondary[_ngcontent-%COMP%]{border-color:#6c757d;color:#6c757d}.sog-chip.outlined.secondary[_ngcontent-%COMP%]:hover:not(.disabled){background:#6c757d1a}.sog-chip.primary[_ngcontent-%COMP%]{background:#3498db;color:#fff;border-color:#3498db}.sog-chip.primary[_ngcontent-%COMP%]:hover:not(.disabled){background:#2980b9;border-color:#2980b9}.sog-chip.secondary[_ngcontent-%COMP%]{background:#6c757d;color:#fff;border-color:#6c757d}.sog-chip.secondary[_ngcontent-%COMP%]:hover:not(.disabled){background:#5a6268;border-color:#5a6268}.sog-chip.success[_ngcontent-%COMP%]{background:#16a34a;color:#fff;border-color:#16a34a}.sog-chip.success[_ngcontent-%COMP%]:hover:not(.disabled){background:#15803d;border-color:#15803d}.sog-chip.danger[_ngcontent-%COMP%]{background:#e74c3c;color:#fff;border-color:#e74c3c}.sog-chip.danger[_ngcontent-%COMP%]:hover:not(.disabled){background:#c0392b;border-color:#c0392b}.sog-chip.warning[_ngcontent-%COMP%]{background:#f39c12;color:#fff;border-color:#f39c12}.sog-chip.warning[_ngcontent-%COMP%]:hover:not(.disabled){background:#e67e22;border-color:#e67e22}.sog-chip.info[_ngcontent-%COMP%]{background:#17a2b8;color:#fff;border-color:#17a2b8}.sog-chip.info[_ngcontent-%COMP%]:hover:not(.disabled){background:#138496;border-color:#138496}.sog-chip[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%]{border-radius:50%;object-fit:cover}.sog-chip[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%]{display:inline-block;flex-shrink:0;color:currentColor}.sog-chip[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;max-width:200px}.sog-chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:2px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:currentColor;opacity:.7;transition:all .2s ease;flex-shrink:0}.sog-chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]:hover:not(:disabled){opacity:1;background:#0000001a}.sog-chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:70%;height:70%}"]})}}return r})();function B(r,h){if(r&1){let o=u();i(0,"sog-chip",53),p("chipRemove",function(){let n=C(o).index,s=d();return v(s.removeTag(n))}),e()}if(r&2){let o=h.$implicit;a("label",o)("removable",!0)}}function W(r,h){if(r&1&&(i(0,"div",54),t(1),e()),r&2){let o=d();c(),f(" Selected: ",o.selectedChips.join(", ")," ")}}var X=(()=>{class r{constructor(){this.tags=["React","Angular","Vue.js","TypeScript"],this.selectedChips=[],this.activeFilters={category:"all",priority:""},this.basicUsageCode=`import { Component } from '@angular/core';
import { SogChipComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SogChipComponent],
  template: \`
    <sog-chip>JavaScript</sog-chip>
    <sog-chip>TypeScript</sog-chip>
    <sog-chip>Angular</sog-chip>
    <sog-chip>React</sog-chip>
    <sog-chip>Vue.js</sog-chip>
  \`
})
export class ExampleComponent {}`,this.basicUsageHtml=`<sog-chip>JavaScript</sog-chip>
<sog-chip>TypeScript</sog-chip>
<sog-chip>Angular</sog-chip>
<sog-chip>React</sog-chip>
<sog-chip>Vue.js</sog-chip>`,this.variantsCode=`<!-- Filled variants -->
<sog-chip variant="primary">Primary</sog-chip>
<sog-chip variant="secondary">Secondary</sog-chip>
<sog-chip variant="success">Success</sog-chip>
<sog-chip variant="warning">Warning</sog-chip>
<sog-chip variant="danger">Danger</sog-chip>

<!-- Outlined variants -->
<sog-chip variant="primary" outlined>Primary</sog-chip>
<sog-chip variant="secondary" outlined>Secondary</sog-chip>
<sog-chip variant="success" outlined>Success</sog-chip>
<sog-chip variant="warning" outlined>Warning</sog-chip>
<sog-chip variant="danger" outlined>Danger</sog-chip>`,this.variantsHtml=`<!-- Filled variants -->
<sog-chip variant="primary">Primary</sog-chip>
<sog-chip variant="secondary">Secondary</sog-chip>
<sog-chip variant="success">Success</sog-chip>
<sog-chip variant="warning">Warning</sog-chip>
<sog-chip variant="danger">Danger</sog-chip>

<!-- Outlined variants -->
<sog-chip variant="primary" outlined>Primary</sog-chip>
<sog-chip variant="secondary" outlined>Secondary</sog-chip>
<sog-chip variant="success" outlined>Success</sog-chip>
<sog-chip variant="warning" outlined>Warning</sog-chip>
<sog-chip variant="danger" outlined>Danger</sog-chip>`,this.sizesCode=`<sog-chip variant="primary" size="sm">Small</sog-chip>
<sog-chip variant="primary" size="md">Medium</sog-chip>
<sog-chip variant="primary" size="lg">Large</sog-chip>`,this.sizesHtml=`<sog-chip variant="primary" size="sm">Small</sog-chip>
<sog-chip variant="primary" size="md">Medium</sog-chip>
<sog-chip variant="primary" size="lg">Large</sog-chip>`,this.iconsCode=`<sog-chip variant="primary">
  <sog-icon name="home" size="sm"></sog-icon>
  Home
</sog-chip>

<sog-chip variant="success">
  <sog-icon name="check" size="sm"></sog-icon>
  Verified
</sog-chip>

<sog-chip variant="warning">
  <sog-icon name="warning" size="sm"></sog-icon>
  Warning
</sog-chip>

<sog-chip variant="info">
  <sog-icon name="info" size="sm"></sog-icon>
  Info
</sog-chip>`,this.iconsHtml=`<sog-chip variant="primary">
  \u{1F3E0} Home
</sog-chip>

<sog-chip variant="success">
  \u2713 Verified
</sog-chip>

<sog-chip variant="warning">
  \u26A0\uFE0F Warning
</sog-chip>

<sog-chip variant="info">
  \u2139\uFE0F Info
</sog-chip>`,this.removableCode=`<sog-chip 
  variant="primary" 
  *ngFor="let tag of tags; let i = index"
  [removable]="true"
  (remove)="removeTag(i)">
  {{tag}}
</sog-chip>`,this.removableHtml=`<sog-chip 
  variant="primary" 
  *ngFor="let tag of tags; let i = index"
  removable
  (remove)="removeTag(i)">
  {{tag}}
</sog-chip>`,this.avatarCode=`<sog-chip avatar>
  <img src="avatar1.jpg" alt="John Doe" class="chip-avatar">
  John Doe
</sog-chip>

<sog-chip avatar>
  <img src="avatar2.jpg" alt="Sarah Smith" class="chip-avatar">
  Sarah Smith
</sog-chip>

<sog-chip avatar outlined removable>
  <img src="avatar3.jpg" alt="Alice Brown" class="chip-avatar">
  Alice Brown
</sog-chip>`,this.avatarHtml=`<sog-chip avatar>
  <img src="avatar1.jpg" alt="John Doe" class="chip-avatar">
  John Doe
</sog-chip>

<sog-chip avatar>
  <img src="avatar2.jpg" alt="Sarah Smith" class="chip-avatar">
  Sarah Smith
</sog-chip>

<sog-chip avatar outlined removable>
  <img src="avatar3.jpg" alt="Alice Brown" class="chip-avatar">
  Alice Brown
</sog-chip>`,this.clickableCode=`<sog-chip 
  clickable
  [selected]="selectedChips.includes('frontend')"
  (click)="toggleChip('frontend')">
  Frontend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('backend')"
  (click)="toggleChip('backend')">
  Backend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('fullstack')"
  (click)="toggleChip('fullstack')">
  Full Stack
</sog-chip>`,this.clickableHtml=`<sog-chip 
  clickable
  [selected]="selectedChips.includes('frontend')"
  (click)="toggleChip('frontend')">
  Frontend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('backend')"
  (click)="toggleChip('backend')">
  Backend
</sog-chip>

<sog-chip 
  clickable
  [selected]="selectedChips.includes('fullstack')"
  (click)="toggleChip('fullstack')">
  Full Stack
</sog-chip>`,this.filterCode=`<!-- Category filters -->
<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'all'"
  (click)="setFilter('category', 'all')">
  All
</sog-chip>

<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'design'"
  (click)="setFilter('category', 'design')">
  Design
</sog-chip>

<!-- Priority filters -->
<sog-chip 
  variant="success" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'low'"
  (click)="setFilter('priority', 'low')">
  Low
</sog-chip>

<sog-chip 
  variant="warning" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'medium'"
  (click)="setFilter('priority', 'medium')">
  Medium
</sog-chip>`,this.filterHtml=`<!-- Category filters -->
<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'all'"
  (click)="setFilter('category', 'all')">
  All
</sog-chip>

<sog-chip 
  outlined 
  clickable
  [selected]="activeFilters.category === 'design'"
  (click)="setFilter('category', 'design')">
  Design
</sog-chip>

<!-- Priority filters -->
<sog-chip 
  variant="success" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'low'"
  (click)="setFilter('priority', 'low')">
  Low
</sog-chip>

<sog-chip 
  variant="warning" 
  outlined 
  clickable
  [selected]="activeFilters.priority === 'medium'"
  (click)="setFilter('priority', 'medium')">
  Medium
</sog-chip>`}removeTag(o){this.tags.splice(o,1)}addTag(){let l=["Node.js","Python","Java","Go","Rust"].filter(n=>!this.tags.includes(n));l.length>0&&this.tags.push(l[0])}toggleChip(o){let l=this.selectedChips.indexOf(o);l>-1?this.selectedChips.splice(l,1):this.selectedChips.push(o)}setFilter(o,l){this.activeFilters[o]===l?this.activeFilters[o]="":this.activeFilters[o]=l}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=b({type:r,selectors:[["app-chip-demo"]],standalone:!0,features:[_],decls:221,vars:40,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","htmlCode"],[1,"demo-container"],[1,"chip-demo"],["label","JavaScript","variant","basic"],["label","TypeScript","variant","basic"],["label","Angular","variant","basic"],["label","React","variant","basic"],["label","Vue.js","variant","basic"],[1,"variant-demo"],[1,"variant-group"],["label","Primary","variant","basic","color","primary"],["label","Secondary","variant","basic","color","secondary"],["label","Success","variant","basic","color","success"],["label","Warning","variant","basic","color","warning"],["label","Danger","variant","basic","color","danger"],["label","Primary","variant","material","color","primary"],["label","Secondary","variant","material","color","secondary"],["label","Success","variant","material","color","success"],["label","Warning","variant","material","color","warning"],["label","Danger","variant","material","color","danger"],["label","Extra Small","variant","basic","color","primary","size","xs"],["label","Small","variant","basic","color","primary","size","sm"],["label","Medium","variant","basic","color","primary","size","md"],["label","Large","variant","basic","color","primary","size","lg"],["label","Home","variant","basic","color","primary","leadingIcon","\u{1F3E0}"],["label","Verified","variant","basic","color","success","leadingIcon","\u2713"],["label","Warning","variant","basic","color","warning","leadingIcon","\u26A0\uFE0F"],["label","Info","variant","basic","color","info","leadingIcon","\u2139\uFE0F"],["variant","basic","color","primary",3,"label","removable","chipRemove",4,"ngFor","ngForOf"],[1,"add-tag-btn",3,"click"],[1,"sog-chip","sog-chip--avatar"],[1,"chip-avatar"],[1,"sog-chip","sog-chip--avatar","sog-chip--outlined"],[1,"chip-remove"],["label","Frontend",3,"chipClick","clickable","selected"],["label","Backend",3,"chipClick","clickable","selected"],["label","Full Stack",3,"chipClick","clickable","selected"],["label","Mobile",3,"chipClick","clickable","selected"],["class","selected-info",4,"ngIf"],[1,"filter-demo"],[1,"filter-section"],["label","All","variant","outlined",3,"chipClick","clickable","selected"],["label","Design","variant","outlined",3,"chipClick","clickable","selected"],["label","Development","variant","outlined",3,"chipClick","clickable","selected"],["label","Marketing","variant","outlined",3,"chipClick","clickable","selected"],["label","Low","variant","outlined","color","success",3,"chipClick","clickable","selected"],["label","Medium","variant","outlined","color","warning",3,"chipClick","clickable","selected"],["label","High","variant","outlined","color","danger",3,"chipClick","clickable","selected"],[1,"api-table"],["variant","basic","color","primary",3,"chipRemove","label","removable"],[1,"selected-info"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"header",1)(2,"h1"),t(3,"Chip Component"),e(),i(4,"p",2),t(5," Compact chip component for tags, filters, and selections with support for icons, avatars, and removal actions. "),e()(),i(6,"section",3)(7,"h2"),t(8,"Basic Usage"),e(),i(9,"p"),t(10,"Simple chips for displaying tags and categories."),e(),i(11,"app-code-example",4)(12,"div",5)(13,"div",6),g(14,"sog-chip",7)(15,"sog-chip",8)(16,"sog-chip",9)(17,"sog-chip",10)(18,"sog-chip",11),e()()()(),i(19,"section",3)(20,"h2"),t(21,"Variants"),e(),i(22,"p"),t(23,"Different chip styles and colors."),e(),i(24,"app-code-example",4)(25,"div",5)(26,"div",12)(27,"div",13)(28,"h4"),t(29,"Basic Style"),e(),i(30,"div",6),g(31,"sog-chip",14)(32,"sog-chip",15)(33,"sog-chip",16)(34,"sog-chip",17)(35,"sog-chip",18),e()(),i(36,"div",13)(37,"h4"),t(38,"Material Style"),e(),i(39,"div",6),g(40,"sog-chip",19)(41,"sog-chip",20)(42,"sog-chip",21)(43,"sog-chip",22)(44,"sog-chip",23),e()()()()()(),i(45,"section",3)(46,"h2"),t(47,"Sizes"),e(),i(48,"p"),t(49,"Chips in different sizes for various use cases."),e(),i(50,"app-code-example",4)(51,"div",5)(52,"div",6),g(53,"sog-chip",24)(54,"sog-chip",25)(55,"sog-chip",26)(56,"sog-chip",27),e()()()(),i(57,"section",3)(58,"h2"),t(59,"With Icons"),e(),i(60,"p"),t(61,"Chips with leading icons for better visual communication."),e(),i(62,"app-code-example",4)(63,"div",5)(64,"div",6),g(65,"sog-chip",28)(66,"sog-chip",29)(67,"sog-chip",30)(68,"sog-chip",31),e()()()(),i(69,"section",3)(70,"h2"),t(71,"Removable Chips"),e(),i(72,"p"),t(73,"Chips with remove buttons for dynamic tag management."),e(),i(74,"app-code-example",4)(75,"div",5)(76,"div",6),m(77,B,1,2,"sog-chip",32),i(78,"button",33),p("click",function(){return n.addTag()}),t(79,"+ Add Tag"),e()()()()(),i(80,"section",3)(81,"h2"),t(82,"Avatar Chips"),e(),i(83,"p"),t(84,"Chips with avatar images for user representation."),e(),i(85,"app-code-example",4)(86,"div",5)(87,"div",6)(88,"span",34)(89,"span",35),t(90,"\u{1F464}"),e(),t(91," John Doe "),e(),i(92,"span",34)(93,"span",35),t(94,"\u{1F469}"),e(),t(95," Sarah Smith "),e(),i(96,"span",34)(97,"span",35),t(98,"\u{1F468}"),e(),t(99," Mike Johnson "),e(),i(100,"span",36)(101,"span",35),t(102,"\u{1F469}\u200D\u{1F4BC}"),e(),t(103," Alice Brown "),i(104,"button",37),t(105,"\xD7"),e()()()()()(),i(106,"section",3)(107,"h2"),t(108,"Clickable Chips"),e(),i(109,"p"),t(110,"Interactive chips that respond to click events."),e(),i(111,"app-code-example",4)(112,"div",5)(113,"div",6)(114,"sog-chip",38),p("chipClick",function(){return n.toggleChip("frontend")}),e(),i(115,"sog-chip",39),p("chipClick",function(){return n.toggleChip("backend")}),e(),i(116,"sog-chip",40),p("chipClick",function(){return n.toggleChip("fullstack")}),e(),i(117,"sog-chip",41),p("chipClick",function(){return n.toggleChip("mobile")}),e()(),m(118,W,2,1,"div",42),e()()(),i(119,"section",3)(120,"h2"),t(121,"Filter Chips"),e(),i(122,"p"),t(123,"Chips used for filtering and categorization."),e(),i(124,"app-code-example",4)(125,"div",5)(126,"div",43)(127,"div",44)(128,"h4"),t(129,"Categories"),e(),i(130,"div",6)(131,"sog-chip",45),p("chipClick",function(){return n.setFilter("category","all")}),e(),i(132,"sog-chip",46),p("chipClick",function(){return n.setFilter("category","design")}),e(),i(133,"sog-chip",47),p("chipClick",function(){return n.setFilter("category","development")}),e(),i(134,"sog-chip",48),p("chipClick",function(){return n.setFilter("category","marketing")}),e()()(),i(135,"div",44)(136,"h4"),t(137,"Priority"),e(),i(138,"div",6)(139,"sog-chip",49),p("chipClick",function(){return n.setFilter("priority","low")}),e(),i(140,"sog-chip",50),p("chipClick",function(){return n.setFilter("priority","medium")}),e(),i(141,"sog-chip",51),p("chipClick",function(){return n.setFilter("priority","high")}),e()()()()()()(),i(142,"section",3)(143,"h2"),t(144,"API Reference"),e(),i(145,"div",52)(146,"h3"),t(147,"CSS Classes"),e(),i(148,"table")(149,"thead")(150,"tr")(151,"th"),t(152,"Class"),e(),i(153,"th"),t(154,"Description"),e()()(),i(155,"tbody")(156,"tr")(157,"td"),t(158,".sog-chip"),e(),i(159,"td"),t(160,"Base chip component"),e()(),i(161,"tr")(162,"td"),t(163,".sog-chip--primary"),e(),i(164,"td"),t(165,"Primary color variant"),e()(),i(166,"tr")(167,"td"),t(168,".sog-chip--secondary"),e(),i(169,"td"),t(170,"Secondary color variant"),e()(),i(171,"tr")(172,"td"),t(173,".sog-chip--success"),e(),i(174,"td"),t(175,"Success color variant"),e()(),i(176,"tr")(177,"td"),t(178,".sog-chip--warning"),e(),i(179,"td"),t(180,"Warning color variant"),e()(),i(181,"tr")(182,"td"),t(183,".sog-chip--danger"),e(),i(184,"td"),t(185,"Danger color variant"),e()(),i(186,"tr")(187,"td"),t(188,".sog-chip--outlined"),e(),i(189,"td"),t(190,"Outlined style variant"),e()(),i(191,"tr")(192,"td"),t(193,".sog-chip--sm"),e(),i(194,"td"),t(195,"Small size variant"),e()(),i(196,"tr")(197,"td"),t(198,".sog-chip--md"),e(),i(199,"td"),t(200,"Medium size variant (default)"),e()(),i(201,"tr")(202,"td"),t(203,".sog-chip--lg"),e(),i(204,"td"),t(205,"Large size variant"),e()(),i(206,"tr")(207,"td"),t(208,".sog-chip--clickable"),e(),i(209,"td"),t(210,"Interactive clickable state"),e()(),i(211,"tr")(212,"td"),t(213,".sog-chip--selected"),e(),i(214,"td"),t(215,"Selected state for clickable chips"),e()(),i(216,"tr")(217,"td"),t(218,".sog-chip--avatar"),e(),i(219,"td"),t(220,"Avatar chip with leading image"),e()()()()()()()),l&2&&(c(11),a("code",n.basicUsageCode)("htmlCode",n.basicUsageHtml),c(13),a("code",n.variantsCode)("htmlCode",n.variantsHtml),c(26),a("code",n.sizesCode)("htmlCode",n.sizesHtml),c(12),a("code",n.iconsCode)("htmlCode",n.iconsHtml),c(12),a("code",n.removableCode)("htmlCode",n.removableHtml),c(3),a("ngForOf",n.tags),c(8),a("code",n.avatarCode)("htmlCode",n.avatarHtml),c(26),a("code",n.clickableCode)("htmlCode",n.clickableHtml),c(3),a("clickable",!0)("selected",n.selectedChips.includes("frontend")),c(),a("clickable",!0)("selected",n.selectedChips.includes("backend")),c(),a("clickable",!0)("selected",n.selectedChips.includes("fullstack")),c(),a("clickable",!0)("selected",n.selectedChips.includes("mobile")),c(),a("ngIf",n.selectedChips.length>0),c(6),a("code",n.filterCode)("htmlCode",n.filterHtml),c(7),a("clickable",!0)("selected",n.activeFilters.category==="all"),c(),a("clickable",!0)("selected",n.activeFilters.category==="design"),c(),a("clickable",!0)("selected",n.activeFilters.category==="development"),c(),a("clickable",!0)("selected",n.activeFilters.category==="marketing"),c(5),a("clickable",!0)("selected",n.activeFilters.priority==="low"),c(),a("clickable",!0)("selected",n.activeFilters.priority==="medium"),c(),a("clickable",!0)("selected",n.activeFilters.priority==="high"))},dependencies:[k,F,x,z,T],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem}.chip-demo[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap;align-items:center}.add-tag-btn[_ngcontent-%COMP%]{padding:.5rem 1rem;background:#fff;border:2px dashed var(--gray-300);border-radius:16px;color:var(--gray-600);cursor:pointer;font-size:.875rem;transition:all .2s ease}.add-tag-btn[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);color:var(--primary-600)}.selected-info[_ngcontent-%COMP%]{margin-top:1rem;padding:1rem;background:#fff;border-radius:8px;font-size:.875rem;color:var(--gray-600)}.variant-demo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.variant-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.filter-demo[_ngcontent-%COMP%]{background:#fff;padding:1.5rem;border-radius:8px}.filter-section[_ngcontent-%COMP%]{margin-bottom:2rem}.filter-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.filter-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.api-table[_ngcontent-%COMP%]{margin-top:2rem}.api-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.api-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px #0000001a}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;text-align:left;border-bottom:1px solid var(--gray-200)}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--gray-50);font-weight:600;color:var(--gray-900)}.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--gray-600)}.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.variant-demo[_ngcontent-%COMP%]{gap:1.5rem}.filter-demo[_ngcontent-%COMP%]{padding:1rem}}"]})}}return r})();export{X as ChipDemoComponent};
