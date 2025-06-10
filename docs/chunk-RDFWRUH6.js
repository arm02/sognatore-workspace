import{a as _}from"./chunk-LGDC3C3Z.js";import{a as x}from"./chunk-EB6CYSG7.js";import{$a as r,Fa as o,Nb as f,Ob as C,Qa as c,Sa as a,V as p,Wa as n,Xa as t,Ya as b,ab as u,ib as e,jb as h,kb as g,qb as v}from"./chunk-CXY5ULLP.js";function E(l,S){if(l&1&&(n(0,"div",33)(1,"strong"),e(2,"Last Action:"),t(),e(3),t()),l&2){let s=u();o(3),g(" ",s.lastClickedMessage," ")}}function k(l,S){if(l&1&&(n(0,"div",34)(1,"div",35),e(2),t()()),l&2){let s=u();o(2),g(" \u2713 ",s.actionMessage," ")}}var B=(()=>{class l{constructor(){this.lastClickedMessage="",this.actionMessage="",this.isLoading=!1,this.basicUsageCode=`import { Component } from '@angular/core';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <sog-button>Default Button</sog-button>
  \`
})
export class ExampleComponent {}`,this.basicUsageHtml="<sog-button>Default Button</sog-button>",this.appearancesCode=`<sog-button appearance="primary">Primary</sog-button>
<sog-button appearance="default">Default</sog-button>
<sog-button>Basic</sog-button>`,this.appearancesHtml=`<sog-button appearance="primary">Primary</sog-button>
<sog-button appearance="default">Default</sog-button>
<sog-button>Basic</sog-button>`,this.interactiveCode=`import { Component } from '@angular/core';
import { SognatoreButton } from '../../../../../../sognatore-ui/src/public-api';

@Component({
  selector: 'app-interactive',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <sog-button appearance="primary" (click)="handleClick('Primary')">
      Click Me Primary
    </sog-button>
    <sog-button appearance="default" (click)="handleClick('Default')">
      Click Me Default
    </sog-button>
  \`
})
export class InteractiveComponent {
  handleClick(type: string) {
    console.log(\`\${type} button clicked!\`);
  }
}`,this.interactiveHtml=`<sog-button appearance="primary" (click)="handleClick('Primary')">
  Click Me Primary
</sog-button>
<sog-button appearance="default" (click)="handleClick('Default')">
  Click Me Default
</sog-button>`,this.realWorldCode=`<!-- Form Actions -->
<div class="form-actions">
  <sog-button appearance="primary" (click)="saveForm()">
    Save Changes
  </sog-button>
  <sog-button appearance="default" (click)="cancelForm()">
    Cancel
  </sog-button>
</div>

<!-- Navigation -->
<div class="navigation">
  <sog-button appearance="primary" (click)="goToDashboard()">
    Go to Dashboard
  </sog-button>
  <sog-button (click)="goBack()">
    Back
  </sog-button>
</div>

<!-- Common Actions -->
<div class="actions">
  <sog-button appearance="primary" (click)="addItem()">
    Add Item
  </sog-button>
  <sog-button appearance="default" (click)="editItem()">
    Edit
  </sog-button>
  <sog-button (click)="deleteItem()">
    Delete
  </sog-button>
</div>`,this.realWorldHtml=`<!-- Form Actions -->
<sog-button variant="primary" (click)="saveForm()">Save Changes</sog-button>
<sog-button variant="outline" (click)="cancelForm()">Cancel</sog-button>

<!-- Navigation -->
<sog-button variant="primary" (click)="goToDashboard()">Go to Dashboard</sog-button>
<sog-button variant="ghost" (click)="goBack()">Back</sog-button>

<!-- Actions -->
<sog-button variant="primary" (click)="addItem()">Add Item</sog-button>
<sog-button variant="secondary" (click)="editItem()">Edit</sog-button>
<sog-button variant="danger" (click)="deleteItem()">Delete</sog-button>`,this.sizesCode=`<sog-button variant="primary" size="small">Small</sog-button>
<sog-button variant="primary" size="medium">Medium</sog-button>
<sog-button variant="primary" size="large">Large</sog-button>`,this.sizesHtml=`<sog-button variant="primary" size="small">Small</sog-button>
<sog-button variant="primary" size="medium">Medium</sog-button>
<sog-button variant="primary" size="large">Large</sog-button>`,this.statesCode=`<sog-button variant="primary">Normal</sog-button>
<sog-button variant="primary" [disabled]="true">Disabled</sog-button>
<sog-button variant="primary" [loading]="isLoading" (click)="toggleLoading()">
  {{ isLoading ? 'Loading...' : 'Click to Load' }}
</sog-button>`,this.statesHtml=`<sog-button variant="primary">Normal</sog-button>
<sog-button variant="primary" disabled>Disabled</sog-button>
<sog-button variant="primary" [loading]="true">Loading</sog-button>`,this.fullWidthCode=`<sog-button variant="primary" [fullWidth]="true">Full Width Primary</sog-button>
<sog-button variant="outline" [fullWidth]="true">Full Width Outline</sog-button>`,this.fullWidthHtml=`<sog-button variant="primary" fullWidth>Full Width Primary</sog-button>
<sog-button variant="outline" fullWidth>Full Width Outline</sog-button>`}onButtonClick(s){this.lastClickedMessage=s}simulateAction(s){this.actionMessage=s,setTimeout(()=>{this.actionMessage=""},3e3)}toggleLoading(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},2e3)}static{this.\u0275fac=function(d){return new(d||l)}}static{this.\u0275cmp=p({type:l,selectors:[["app-button-demo"]],standalone:!0,features:[v],decls:232,vars:21,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","htmlCode"],[1,"demo-container"],[1,"button-group"],["variant","primary"],["variant","secondary"],["variant","success"],["variant","danger"],["variant","warning"],["variant","outline"],["variant","ghost"],["variant","link"],["variant","primary",3,"click"],["variant","secondary",3,"click"],["variant","outline",3,"click"],["class","demo-output",4,"ngIf"],["variant","primary","size","small"],["variant","primary","size","medium"],["variant","primary","size","large"],["variant","primary",3,"disabled"],["variant","primary",3,"click","loading"],[2,"max-width","400px"],["variant","primary",3,"fullWidth"],["variant","outline",3,"fullWidth"],[1,"example-scenarios"],[1,"scenario"],["variant","ghost",3,"click"],["variant","danger",3,"click"],["class","action-feedback",4,"ngIf"],[1,"api-table"],[1,"demo-output"],[1,"action-feedback"],[1,"feedback-message"]],template:function(d,i){d&1&&(n(0,"div",0)(1,"header",1)(2,"h1"),e(3,"Button Component"),t(),n(4,"p",2),e(5," Versatile button component with multiple appearances and interactive states for all your UI needs. "),t()(),n(6,"section",3)(7,"h2"),e(8,"Basic Usage"),t(),n(9,"p"),e(10,"The most basic button with default styling."),t(),n(11,"app-code-example",4)(12,"div",5)(13,"sog-button"),e(14,"Default Button"),t()()()(),n(15,"section",3)(16,"h2"),e(17,"Appearances"),t(),n(18,"p"),e(19,"Different button variants for various use cases and contexts."),t(),n(20,"app-code-example",4)(21,"div",5)(22,"div",6)(23,"sog-button",7),e(24,"Primary"),t(),n(25,"sog-button",8),e(26,"Secondary"),t(),n(27,"sog-button",9),e(28,"Success"),t(),n(29,"sog-button",10),e(30,"Danger"),t(),n(31,"sog-button",11),e(32,"Warning"),t()(),n(33,"div",6)(34,"sog-button",12),e(35,"Outline"),t(),n(36,"sog-button",13),e(37,"Ghost"),t(),n(38,"sog-button",14),e(39,"Link"),t()()()()(),n(40,"section",3)(41,"h2"),e(42,"Interactive Examples"),t(),n(43,"p"),e(44,"Buttons with click handlers and various states."),t(),n(45,"app-code-example",4)(46,"div",5)(47,"div",6)(48,"sog-button",15),r("click",function(){return i.onButtonClick("Primary clicked!")}),e(49," Click Me Primary "),t(),n(50,"sog-button",16),r("click",function(){return i.onButtonClick("Secondary clicked!")}),e(51," Click Me Secondary "),t(),n(52,"sog-button",17),r("click",function(){return i.onButtonClick("Outline clicked!")}),e(53," Click Me Outline "),t()(),c(54,E,4,1,"div",18),t()()(),n(55,"section",3)(56,"h2"),e(57,"Sizes"),t(),n(58,"p"),e(59,"Different button sizes for various interface needs."),t(),n(60,"app-code-example",4)(61,"div",5)(62,"div",6)(63,"sog-button",19),e(64,"Small"),t(),n(65,"sog-button",20),e(66,"Medium"),t(),n(67,"sog-button",21),e(68,"Large"),t()()()()(),n(69,"section",3)(70,"h2"),e(71,"States"),t(),n(72,"p"),e(73,"Button states including disabled and loading."),t(),n(74,"app-code-example",4)(75,"div",5)(76,"div",6)(77,"sog-button",7),e(78,"Normal"),t(),n(79,"sog-button",22),e(80,"Disabled"),t(),n(81,"sog-button",23),r("click",function(){return i.toggleLoading()}),e(82),t()()()()(),n(83,"section",3)(84,"h2"),e(85,"Full Width"),t(),n(86,"p"),e(87,"Buttons that take the full width of their container."),t(),n(88,"app-code-example",4)(89,"div",5)(90,"div",24)(91,"sog-button",25),e(92,"Full Width Primary"),t(),b(93,"br")(94,"br"),n(95,"sog-button",26),e(96,"Full Width Outline"),t()()()()(),n(97,"section",3)(98,"h2"),e(99,"Real-World Examples"),t(),n(100,"p"),e(101,"Common button usage patterns in applications."),t(),n(102,"app-code-example",4)(103,"div",5)(104,"div",27)(105,"div",28)(106,"h4"),e(107,"Form Actions"),t(),n(108,"div",6)(109,"sog-button",15),r("click",function(){return i.simulateAction("Form saved!")}),e(110," Save Changes "),t(),n(111,"sog-button",17),r("click",function(){return i.simulateAction("Form cancelled")}),e(112," Cancel "),t()()(),n(113,"div",28)(114,"h4"),e(115,"Navigation"),t(),n(116,"div",6)(117,"sog-button",15),r("click",function(){return i.simulateAction("Navigating to dashboard...")}),e(118," Go to Dashboard "),t(),n(119,"sog-button",29),r("click",function(){return i.simulateAction("Going back...")}),e(120," Back "),t()()(),n(121,"div",28)(122,"h4"),e(123,"Common Actions"),t(),n(124,"div",6)(125,"sog-button",15),r("click",function(){return i.simulateAction("Item added!")}),e(126," Add Item "),t(),n(127,"sog-button",16),r("click",function(){return i.simulateAction("Edit mode activated")}),e(128," Edit "),t(),n(129,"sog-button",30),r("click",function(){return i.simulateAction("Item deleted")}),e(130," Delete "),t()()()(),c(131,k,3,1,"div",31),t()()(),n(132,"section",3)(133,"h2"),e(134,"API Reference"),t(),n(135,"div",32)(136,"h3"),e(137,"Properties"),t(),n(138,"table")(139,"thead")(140,"tr")(141,"th"),e(142,"Property"),t(),n(143,"th"),e(144,"Type"),t(),n(145,"th"),e(146,"Default"),t(),n(147,"th"),e(148,"Description"),t()()(),n(149,"tbody")(150,"tr")(151,"td"),e(152,"variant"),t(),n(153,"td"),e(154,"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline' | 'ghost' | 'link'"),t(),n(155,"td"),e(156,"'primary'"),t(),n(157,"td"),e(158,"Visual variant of the button"),t()(),n(159,"tr")(160,"td"),e(161,"size"),t(),n(162,"td"),e(163,"'small' | 'medium' | 'large'"),t(),n(164,"td"),e(165,"'medium'"),t(),n(166,"td"),e(167,"Size of the button"),t()(),n(168,"tr")(169,"td"),e(170,"type"),t(),n(171,"td"),e(172,"'button' | 'submit' | 'reset'"),t(),n(173,"td"),e(174,"'button'"),t(),n(175,"td"),e(176,"HTML button type"),t()(),n(177,"tr")(178,"td"),e(179,"disabled"),t(),n(180,"td"),e(181,"boolean"),t(),n(182,"td"),e(183,"false"),t(),n(184,"td"),e(185,"Whether the button is disabled"),t()(),n(186,"tr")(187,"td"),e(188,"loading"),t(),n(189,"td"),e(190,"boolean"),t(),n(191,"td"),e(192,"false"),t(),n(193,"td"),e(194,"Whether the button is in loading state"),t()(),n(195,"tr")(196,"td"),e(197,"loadingText"),t(),n(198,"td"),e(199,"string"),t(),n(200,"td"),e(201,"'Loading...'"),t(),n(202,"td"),e(203,"Text to show when loading"),t()(),n(204,"tr")(205,"td"),e(206,"fullWidth"),t(),n(207,"td"),e(208,"boolean"),t(),n(209,"td"),e(210,"false"),t(),n(211,"td"),e(212,"Whether the button takes full width"),t()()()(),n(213,"h3"),e(214,"Events"),t(),n(215,"table")(216,"thead")(217,"tr")(218,"th"),e(219,"Event"),t(),n(220,"th"),e(221,"Type"),t(),n(222,"th"),e(223,"Description"),t()()(),n(224,"tbody")(225,"tr")(226,"td"),e(227,"click"),t(),n(228,"td"),e(229,"Event"),t(),n(230,"td"),e(231,"Emitted when button is clicked"),t()()()()()()()),d&2&&(o(11),a("code",i.basicUsageCode)("htmlCode",i.basicUsageHtml),o(9),a("code",i.appearancesCode)("htmlCode",i.appearancesHtml),o(25),a("code",i.interactiveCode)("htmlCode",i.interactiveHtml),o(9),a("ngIf",i.lastClickedMessage),o(6),a("code",i.sizesCode)("htmlCode",i.sizesHtml),o(14),a("code",i.statesCode)("htmlCode",i.statesHtml),o(5),a("disabled",!0),o(2),a("loading",i.isLoading),o(),h(i.isLoading?"Loading...":"Click to Load"),o(6),a("code",i.fullWidthCode)("htmlCode",i.fullWidthHtml),o(3),a("fullWidth",!0),o(4),a("fullWidth",!0),o(7),a("code",i.realWorldCode)("htmlCode",i.realWorldHtml),o(29),a("ngIf",i.actionMessage))},dependencies:[C,f,x,_],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem}.button-group[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;align-items:center;margin-block:10px}.demo-output[_ngcontent-%COMP%], .action-feedback[_ngcontent-%COMP%]{margin-top:1.5rem;padding:1rem;background:#fff;border-radius:6px;border-left:4px solid var(--primary)}.feedback-message[_ngcontent-%COMP%]{color:var(--success);font-weight:500}.example-scenarios[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.scenario[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;border-radius:8px;border:1px solid var(--gray-200)}.scenario[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.api-table[_ngcontent-%COMP%]{margin-top:2rem}.api-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem;margin-top:2rem}.api-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-child{margin-top:0}.api-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px #0000001a;margin-bottom:2rem}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;text-align:left;border-bottom:1px solid var(--gray-200)}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--gray-50);font-weight:600;color:var(--gray-900)}.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--gray-600)}.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.button-group[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.example-scenarios[_ngcontent-%COMP%]{gap:1rem}}"]})}}return l})();export{B as ButtonDemoComponent};
