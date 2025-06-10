import{a as k}from"./chunk-BK2DKCDB.js";import{b,c as h,e as M,g as x,i as _,l as P,m as S,n as w,o as E,p as O,r as T}from"./chunk-BFMG4YP4.js";import{a as C}from"./chunk-LGDC3C3Z.js";import{a as v}from"./chunk-EB6CYSG7.js";import{Fa as r,Ob as f,Sa as c,V as u,Wa as e,Xa as t,ib as n,jb as m,mb as a,nb as l,ob as g,qb as y}from"./chunk-CXY5ULLP.js";var A=(()=>{class p{constructor(){this.playgroundConfig={text:"This is a sample tooltip",position:"top",variant:"basic",trigger:"hover",delay:500,disabled:!1},this.playgroundCode=`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [FormsModule, SognatoreTooltip, SognatoreButton],
  template: \`
    <div class="playground-container">
      <div class="playground-controls">
        <div class="control-group">
          <label>Text:</label>
          <input type="text" [(ngModel)]="config.text" class="control-input">
        </div>
        
        <div class="control-group">
          <label>Position:</label>
          <select [(ngModel)]="config.position" class="control-select">
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Variant:</label>
          <select [(ngModel)]="config.variant" class="control-select">
            <option value="basic">Basic</option>
            <option value="material">Material</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Trigger:</label>
          <select [(ngModel)]="config.trigger" class="control-select">
            <option value="hover">Hover</option>
            <option value="click">Click</option>
            <option value="focus">Focus</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Delay (ms):</label>
          <input type="number" [(ngModel)]="config.delay" class="control-input" min="0" max="2000" step="100">
        </div>
        
        <div class="control-group">
          <label>
            <input type="checkbox" [(ngModel)]="config.disabled">
            Disabled
          </label>
        </div>
      </div>
      
      <div class="playground-preview">
        <h4>Preview</h4>
        <div class="preview-area">
          <sog-tooltip 
            [text]="config.text"
            [position]="config.position"
            [variant]="config.variant"
            [trigger]="config.trigger"
            [delay]="config.delay"
            [disabled]="config.disabled">
            <sog-button variant="primary">{{buttonText}}</sog-button>
          </sog-tooltip>
        </div>
      </div>
    </div>
  \`
})
export class PlaygroundComponent {
  config = {
    text: 'This is a sample tooltip',
    position: 'top' as 'top' | 'right' | 'bottom' | 'left',
    variant: 'basic' as 'basic' | 'material' | 'info' | 'warning' | 'error' | 'success',
    trigger: 'hover' as 'hover' | 'click' | 'focus',
    delay: 500,
    disabled: false
  };

  get buttonText() {
    return this.config.trigger === 'hover' ? 'Hover me' : 
           this.config.trigger === 'click' ? 'Click me' : 'Focus me';
  }
}`,this.playgroundHtml=`<!-- Interactive controls automatically update the tooltip -->
<div class="playground-container">
  <div class="playground-controls">
    <!-- Control inputs here -->
  </div>
  <div class="playground-preview">
    <sog-tooltip 
      [text]="config.text"
      [position]="config.position"
      [variant]="config.variant"
      [trigger]="config.trigger"
      [delay]="config.delay"
      [disabled]="config.disabled">
      <sog-button variant="primary">{{buttonText}}</sog-button>
    </sog-tooltip>
  </div>
</div>`}get buttonText(){return this.playgroundConfig.trigger==="hover"?"Hover me":this.playgroundConfig.trigger==="click"?"Click me":"Focus me"}get configJson(){return JSON.stringify(this.playgroundConfig,null,2)}static{this.\u0275fac=function(s){return new(s||p)}}static{this.\u0275cmp=u({type:p,selectors:[["app-tooltip-playground"]],standalone:!0,features:[y],decls:102,vars:16,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","htmlCode"],[1,"demo-container"],[1,"playground-container"],[1,"playground-controls"],[1,"control-group"],["type","text",1,"control-input",3,"ngModelChange","ngModel"],[1,"control-select",3,"ngModelChange","ngModel"],["value","top"],["value","right"],["value","bottom"],["value","left"],["value","basic"],["value","material"],["value","info"],["value","warning"],["value","error"],["value","success"],["value","hover"],["value","click"],["value","focus"],["type","number","min","0","max","2000","step","100",1,"control-input",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"playground-preview"],[1,"preview-area"],[3,"text","position","variant","trigger","delay","disabled"],["variant","primary"],[1,"config-display"],[1,"tips-grid"],[1,"tip-card"]],template:function(s,o){s&1&&(e(0,"div",0)(1,"header",1)(2,"h1"),n(3,"Tooltip Playground"),t(),e(4,"p",2),n(5," Experiment with different tooltip configurations in real-time and see the results instantly. "),t()(),e(6,"section",3)(7,"h2"),n(8,"Interactive Playground"),t(),e(9,"p"),n(10,"Use the controls below to customize tooltip behavior and appearance."),t(),e(11,"app-code-example",4)(12,"div",5)(13,"div",6)(14,"div",7)(15,"div",8)(16,"label"),n(17,"Text:"),t(),e(18,"input",9),g("ngModelChange",function(i){return l(o.playgroundConfig.text,i)||(o.playgroundConfig.text=i),i}),t()(),e(19,"div",8)(20,"label"),n(21,"Position:"),t(),e(22,"select",10),g("ngModelChange",function(i){return l(o.playgroundConfig.position,i)||(o.playgroundConfig.position=i),i}),e(23,"option",11),n(24,"Top"),t(),e(25,"option",12),n(26,"Right"),t(),e(27,"option",13),n(28,"Bottom"),t(),e(29,"option",14),n(30,"Left"),t()()(),e(31,"div",8)(32,"label"),n(33,"Variant:"),t(),e(34,"select",10),g("ngModelChange",function(i){return l(o.playgroundConfig.variant,i)||(o.playgroundConfig.variant=i),i}),e(35,"option",15),n(36,"Basic"),t(),e(37,"option",16),n(38,"Material"),t(),e(39,"option",17),n(40,"Info"),t(),e(41,"option",18),n(42,"Warning"),t(),e(43,"option",19),n(44,"Error"),t(),e(45,"option",20),n(46,"Success"),t()()(),e(47,"div",8)(48,"label"),n(49,"Trigger:"),t(),e(50,"select",10),g("ngModelChange",function(i){return l(o.playgroundConfig.trigger,i)||(o.playgroundConfig.trigger=i),i}),e(51,"option",21),n(52,"Hover"),t(),e(53,"option",22),n(54,"Click"),t(),e(55,"option",23),n(56,"Focus"),t()()(),e(57,"div",8)(58,"label"),n(59,"Delay (ms):"),t(),e(60,"input",24),g("ngModelChange",function(i){return l(o.playgroundConfig.delay,i)||(o.playgroundConfig.delay=i),i}),t()(),e(61,"div",8)(62,"label")(63,"input",25),g("ngModelChange",function(i){return l(o.playgroundConfig.disabled,i)||(o.playgroundConfig.disabled=i),i}),t(),n(64," Disabled "),t()()(),e(65,"div",26)(66,"h4"),n(67,"Live Preview"),t(),e(68,"div",27)(69,"sog-tooltip",28)(70,"sog-button",29),n(71),t()()(),e(72,"div",30)(73,"h5"),n(74,"Current Configuration"),t(),e(75,"pre")(76,"code"),n(77),t()()()()()()()(),e(78,"section",3)(79,"h2"),n(80,"Configuration Tips"),t(),e(81,"div",31)(82,"div",32)(83,"h3"),n(84,"\u{1F3AF} Position"),t(),e(85,"p"),n(86,"Choose tooltip position based on available space. The component automatically adjusts when hitting viewport boundaries."),t()(),e(87,"div",32)(88,"h3"),n(89,"\u{1F3A8} Variants"),t(),e(90,"p"),n(91,"Use semantic variants (success, warning, error) for status indicators, and basic/material for general information."),t()(),e(92,"div",32)(93,"h3"),n(94,"\u26A1 Triggers"),t(),e(95,"p"),n(96,"Hover for quick info, click for mobile-friendly interactions, focus for accessibility compliance."),t()(),e(97,"div",32)(98,"h3"),n(99,"\u23F1\uFE0F Delay"),t(),e(100,"p"),n(101,"Add delay to prevent tooltips from appearing too quickly during mouse movements. 300-500ms is recommended."),t()()()()()),s&2&&(r(11),c("code",o.playgroundCode)("htmlCode",o.playgroundHtml),r(7),a("ngModel",o.playgroundConfig.text),r(4),a("ngModel",o.playgroundConfig.position),r(12),a("ngModel",o.playgroundConfig.variant),r(16),a("ngModel",o.playgroundConfig.trigger),r(10),a("ngModel",o.playgroundConfig.delay),r(3),a("ngModel",o.playgroundConfig.disabled),r(6),c("text",o.playgroundConfig.text)("position",o.playgroundConfig.position)("variant",o.playgroundConfig.variant)("trigger",o.playgroundConfig.trigger)("delay",o.playgroundConfig.delay)("disabled",o.playgroundConfig.disabled),r(2),m(o.buttonText),r(6),m(o.configJson))},dependencies:[f,T,S,w,h,_,b,P,M,O,E,x,v,k,C],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:3rem 2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem;min-height:200px}.playground-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start}.playground-controls[_ngcontent-%COMP%]{background:#fff;padding:1.5rem;border-radius:8px;border:1px solid var(--gray-200)}.control-group[_ngcontent-%COMP%]{margin-bottom:1rem}.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500;color:var(--gray-700)}.control-input[_ngcontent-%COMP%], .control-select[_ngcontent-%COMP%]{width:100%;padding:.5rem;border:1px solid var(--gray-300);border-radius:4px;font-size:.875rem}.control-input[_ngcontent-%COMP%]:focus, .control-select[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-500);box-shadow:0 0 0 3px #3b82f61a}.playground-preview[_ngcontent-%COMP%]{background:#fff;padding:1.5rem;border-radius:8px;border:1px solid var(--gray-200);text-align:center}.playground-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem;color:var(--gray-900)}.preview-area[_ngcontent-%COMP%]{min-height:150px;display:flex;align-items:center;justify-content:center;background:var(--gray-50);border-radius:6px;padding:2rem;margin-bottom:1.5rem}.config-display[_ngcontent-%COMP%]{text-align:left;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--gray-200)}.config-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:.875rem;font-weight:600;color:var(--gray-700)}.config-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--gray-100);padding:.75rem;border-radius:4px;font-size:.75rem;overflow-x:auto}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2rem}.tip-card[_ngcontent-%COMP%]{background:#fff;padding:1.5rem;border-radius:8px;border:1px solid var(--gray-200)}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:.75rem;font-size:1.125rem;font-weight:600;color:var(--gray-900)}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);line-height:1.5;margin:0}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.demo-container[_ngcontent-%COMP%]{padding:2rem 1rem}.playground-container[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}}"]})}}return p})();export{A as TooltipPlaygroundComponent};
