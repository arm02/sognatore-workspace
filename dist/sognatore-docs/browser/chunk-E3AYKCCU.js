import{a as S}from"./chunk-LGDC3C3Z.js";import{a as _}from"./chunk-EB6CYSG7.js";import{$a as l,Fa as i,Lb as f,Nb as b,Ob as p,Qa as u,Sa as o,V as c,Wa as e,Xa as t,bb as v,cb as m,ib as n,qb as g,tb as x}from"./chunk-CXY5ULLP.js";var P=["*",[["","slot","header"]],[["","slot","footer"]]],O=["*","[slot=header]","[slot=footer]"],y=(r,h)=>[r,h];function w(r,h){r&1&&(e(0,"div",4),m(1,1),t())}function D(r,h){r&1&&(e(0,"div",5),m(1,2),t())}var M=(()=>{class r{constructor(){this.variant="outlined",this.elevation="elevation-1",this.hasHeader=!1,this.hasFooter=!1}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=c({type:r,selectors:[["sog-card"]],inputs:{variant:"variant",elevation:"elevation",hasHeader:"hasHeader",hasFooter:"hasFooter"},standalone:!0,features:[g],ngContentSelectors:O,decls:5,vars:6,consts:[[1,"sog-card",3,"ngClass"],["class","card-header",4,"ngIf"],[1,"card-content"],["class","card-footer",4,"ngIf"],[1,"card-header"],[1,"card-footer"]],template:function(d,a){d&1&&(v(P),e(0,"div",0),u(1,w,2,0,"div",1),e(2,"div",2),m(3),t(),u(4,D,2,0,"div",3),t()),d&2&&(o("ngClass",x(3,y,a.variant,a.elevation)),i(),o("ngIf",a.hasHeader),i(3),o("ngIf",a.hasFooter))},dependencies:[p,f,b],styles:[".sog-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;overflow:hidden;transition:box-shadow .3s ease}.sog-card.outlined[_ngcontent-%COMP%]{border:1px solid #e0e0e0}.sog-card.elevated[_ngcontent-%COMP%]{border:none}.sog-card.elevation-1[_ngcontent-%COMP%]{box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.sog-card.elevation-2[_ngcontent-%COMP%]{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card.elevation-3[_ngcontent-%COMP%]{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card.elevation-4[_ngcontent-%COMP%]{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card.elevation-5[_ngcontent-%COMP%]{box-shadow:0 19px 38px #0000004d,0 15px 12px #00000038}.sog-card[_ngcontent-%COMP%]:hover.elevation-1{box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}.sog-card[_ngcontent-%COMP%]:hover.elevation-2{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.sog-card[_ngcontent-%COMP%]:hover.elevation-3{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}.sog-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding:16px 16px 0;border-bottom:1px solid #f0f0f0;margin-bottom:16px}.sog-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:empty{display:none}.sog-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{padding:16px}.sog-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:16px;border-top:1px solid #f0f0f0;margin-top:16px}.sog-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]:empty{display:none}"]})}}return r})();var j=(()=>{class r{constructor(){this.basicUsageCode=`import { Component } from '@angular/core';
import { SogCardComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SogCardComponent],
  template: \`
    <sog-card>
      <sog-card-content>
        <h3>Card Title</h3>
        <p>This is a basic card with some content.</p>
      </sog-card-content>
    </sog-card>
  \`
})
export class ExampleComponent {}`,this.basicUsageHtml=`<sog-card>
  <sog-card-content>
    <h3>Card Title</h3>
    <p>This is a basic card with some content.</p>
  </sog-card-content>
</sog-card>`,this.headerCode=`<sog-card>
  <sog-card-header>
    <h3>Settings</h3>
    <span class="subtitle">Manage your preferences</span>
  </sog-card-header>
  <sog-card-content>
    <p>Configure your application settings and preferences here.</p>
  </sog-card-content>
</sog-card>`,this.headerHtml=`<sog-card>
  <sog-card-header>
    <h3>Settings</h3>
    <span class="subtitle">Manage your preferences</span>
  </sog-card-header>
  <sog-card-content>
    <p>Configure your application settings and preferences here.</p>
  </sog-card-content>
</sog-card>`,this.actionsCode=`<sog-card>
  <sog-card-content>
    <h3>Confirm Action</h3>
    <p>Are you sure you want to delete this item?</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">Cancel</sog-button>
    <sog-button variant="danger">Delete</sog-button>
  </sog-card-actions>
</sog-card>`,this.actionsHtml=`<sog-card>
  <sog-card-content>
    <h3>Confirm Action</h3>
    <p>Are you sure you want to delete this item?</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">Cancel</sog-button>
    <sog-button variant="danger">Delete</sog-button>
  </sog-card-actions>
</sog-card>`,this.imageCode=`<sog-card>
  <sog-card-image>
    <img src="app-screenshot.jpg" alt="Mobile App">
  </sog-card-image>
  <sog-card-content>
    <h3>Mobile App</h3>
    <p>Download our mobile app to access all features on the go.</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="primary">Download</sog-button>
    <sog-button variant="outline">Learn More</sog-button>
  </sog-card-actions>
</sog-card>`,this.imageHtml=`<sog-card>
  <sog-card-image>
    <img src="app-screenshot.jpg" alt="Mobile App">
  </sog-card-image>
  <sog-card-content>
    <h3>Mobile App</h3>
    <p>Download our mobile app to access all features on the go.</p>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="primary">Download</sog-button>
    <sog-button variant="outline">Learn More</sog-button>
  </sog-card-actions>
</sog-card>`,this.variantsCode=`<sog-card variant="elevated">
  <sog-card-content>
    <h4>Elevated Card</h4>
    <p>This card has an elevated shadow for emphasis.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="outlined">
  <sog-card-content>
    <h4>Outlined Card</h4>
    <p>This card has a border instead of shadow.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="flat">
  <sog-card-content>
    <h4>Flat Card</h4>
    <p>This card has no shadow or border.</p>
  </sog-card-content>
</sog-card>`,this.variantsHtml=`<sog-card variant="elevated">
  <sog-card-content>
    <h4>Elevated Card</h4>
    <p>This card has an elevated shadow for emphasis.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="outlined">
  <sog-card-content>
    <h4>Outlined Card</h4>
    <p>This card has a border instead of shadow.</p>
  </sog-card-content>
</sog-card>

<sog-card variant="flat">
  <sog-card-content>
    <h4>Flat Card</h4>
    <p>This card has no shadow or border.</p>
  </sog-card-content>
</sog-card>`,this.interactiveCode=`<sog-card 
  variant="interactive" 
  (click)="onCardClick('Feature 1')">
  <sog-card-content>
    <h4>\u{1F680} Feature 1</h4>
    <p>Click to learn more about this exciting feature.</p>
  </sog-card-content>
</sog-card>`,this.interactiveHtml=`<sog-card 
  variant="interactive" 
  (click)="onCardClick('Feature 1')">
  <sog-card-content>
    <h4>\u{1F680} Feature 1</h4>
    <p>Click to learn more about this exciting feature.</p>
  </sog-card-content>
</sog-card>`,this.complexCode=`<sog-card class="complex-card">
  <sog-card-header>
    <div class="user-info">
      <div class="avatar">\u{1F464}</div>
      <div class="user-details">
        <h4>John Doe</h4>
        <span class="user-role">Senior Developer</span>
      </div>
    </div>
    <span class="timestamp">2 hours ago</span>
  </sog-card-header>
  <sog-card-content>
    <h3>Project Update</h3>
    <p>The new feature implementation is progressing well.</p>
    <div class="tags">
      <span class="tag">Development</span>
      <span class="tag">Progress</span>
    </div>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">\u{1F44D} Like</sog-button>
    <sog-button variant="ghost">\u{1F4AC} Comment</sog-button>
    <sog-button variant="ghost">\u{1F4E4} Share</sog-button>
  </sog-card-actions>
</sog-card>`,this.complexHtml=`<sog-card class="complex-card">
  <sog-card-header>
    <div class="user-info">
      <div class="avatar">\u{1F464}</div>
      <div class="user-details">
        <h4>John Doe</h4>
        <span class="user-role">Senior Developer</span>
      </div>
    </div>
    <span class="timestamp">2 hours ago</span>
  </sog-card-header>
  <sog-card-content>
    <h3>Project Update</h3>
    <p>The new feature implementation is progressing well.</p>
    <div class="tags">
      <span class="tag">Development</span>
      <span class="tag">Progress</span>
    </div>
  </sog-card-content>
  <sog-card-actions>
    <sog-button variant="ghost">\u{1F44D} Like</sog-button>
    <sog-button variant="ghost">\u{1F4AC} Comment</sog-button>
    <sog-button variant="ghost">\u{1F4E4} Share</sog-button>
  </sog-card-actions>
</sog-card>`}onCardClick(s){console.log(`Clicked on ${s}`)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-card-demo"]],standalone:!0,features:[g],decls:212,vars:19,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","htmlCode"],[1,"demo-container"],["variant","outlined"],["variant","outlined",3,"hasHeader"],["slot","header"],[1,"subtitle"],["variant","outlined",3,"hasFooter"],["slot","footer",1,"card-actions"],["variant","secondary"],["variant","danger"],[1,"demo-image-container"],[1,"demo-image"],["variant","primary"],["variant","outline"],[1,"card-grid"],["variant","elevated","elevation","elevation-2"],["variant","outlined","elevation","elevation-1"],["variant","outlined","elevation","elevation-1",1,"interactive-card",3,"click"],["variant","outlined",1,"complex-card",3,"hasHeader","hasFooter"],["slot","header",1,"complex-header"],[1,"user-info"],[1,"avatar"],[1,"user-details"],[1,"user-role"],[1,"timestamp"],[1,"tags"],[1,"tag"],["variant","ghost"],[1,"api-table"]],template:function(d,a){d&1&&(e(0,"div",0)(1,"header",1)(2,"h1"),n(3,"Card Component"),t(),e(4,"p",2),n(5," Flexible card component for displaying content in a clean, organized manner with various layouts and styles. "),t()(),e(6,"section",3)(7,"h2"),n(8,"Basic Usage"),t(),e(9,"p"),n(10,"Simple card with basic content."),t(),e(11,"app-code-example",4)(12,"div",5)(13,"sog-card",6)(14,"h3"),n(15,"Card Title"),t(),e(16,"p"),n(17,"This is a basic card with some content. Cards are great for organizing information into digestible sections."),t()()()()(),e(18,"section",3)(19,"h2"),n(20,"Card with Header"),t(),e(21,"p"),n(22,"Card with a distinct header section."),t(),e(23,"app-code-example",4)(24,"div",5)(25,"sog-card",7)(26,"div",8)(27,"h3"),n(28,"Settings"),t(),e(29,"span",9),n(30,"Manage your preferences"),t()(),e(31,"p"),n(32,"Configure your application settings and preferences here. You can customize the interface, notifications, and more."),t()()()()(),e(33,"section",3)(34,"h2"),n(35,"Card with Actions"),t(),e(36,"p"),n(37,"Card with action buttons in the footer."),t(),e(38,"app-code-example",4)(39,"div",5)(40,"sog-card",10)(41,"h3"),n(42,"Confirm Action"),t(),e(43,"p"),n(44,"Are you sure you want to delete this item? This action cannot be undone."),t(),e(45,"div",11)(46,"sog-button",12),n(47,"Cancel"),t(),e(48,"sog-button",13),n(49,"Delete"),t()()()()()(),e(50,"section",3)(51,"h2"),n(52,"Card with Image"),t(),e(53,"p"),n(54,"Card featuring an image at the top."),t(),e(55,"app-code-example",4)(56,"div",5)(57,"sog-card",10)(58,"div",14)(59,"div",15),n(60,"\u{1F4F1}"),t()(),e(61,"h3"),n(62,"Mobile App"),t(),e(63,"p"),n(64,"Download our mobile app to access all features on the go. Available for iOS and Android devices."),t(),e(65,"div",11)(66,"sog-button",16),n(67,"Download"),t(),e(68,"sog-button",17),n(69,"Learn More"),t()()()()()(),e(70,"section",3)(71,"h2"),n(72,"Variants"),t(),e(73,"p"),n(74,"Different card variants for various use cases."),t(),e(75,"app-code-example",4)(76,"div",5)(77,"div",18)(78,"sog-card",19)(79,"h4"),n(80,"Elevated Card"),t(),e(81,"p"),n(82,"This card has an elevated shadow for emphasis."),t()(),e(83,"sog-card",6)(84,"h4"),n(85,"Outlined Card"),t(),e(86,"p"),n(87,"This card has a border instead of shadow."),t()(),e(88,"sog-card",20)(89,"h4"),n(90,"Basic Card"),t(),e(91,"p"),n(92,"This card has minimal elevation."),t()()()()()(),e(93,"section",3)(94,"h2"),n(95,"Interactive Cards"),t(),e(96,"p"),n(97,"Cards that respond to user interaction."),t(),e(98,"app-code-example",4)(99,"div",5)(100,"div",18)(101,"sog-card",21),l("click",function(){return a.onCardClick("Feature 1")}),e(102,"h4"),n(103,"\u{1F680} Feature 1"),t(),e(104,"p"),n(105,"Click to learn more about this exciting feature."),t()(),e(106,"sog-card",21),l("click",function(){return a.onCardClick("Feature 2")}),e(107,"h4"),n(108,"\u2B50 Feature 2"),t(),e(109,"p"),n(110,"Discover what makes this feature special."),t()(),e(111,"sog-card",21),l("click",function(){return a.onCardClick("Feature 3")}),e(112,"h4"),n(113,"\u{1F3AF} Feature 3"),t(),e(114,"p"),n(115,"Explore the capabilities of this feature."),t()()()()()(),e(116,"section",3)(117,"h2"),n(118,"Complex Card Layout"),t(),e(119,"p"),n(120,"A more complex card with multiple sections and elements."),t(),e(121,"app-code-example",4)(122,"div",5)(123,"sog-card",22)(124,"div",23)(125,"div",24)(126,"div",25),n(127,"\u{1F464}"),t(),e(128,"div",26)(129,"h4"),n(130,"John Doe"),t(),e(131,"span",27),n(132,"Senior Developer"),t()()(),e(133,"span",28),n(134,"2 hours ago"),t()(),e(135,"h3"),n(136,"Project Update"),t(),e(137,"p"),n(138,"The new feature implementation is progressing well. We've completed the initial development phase and are now moving into testing."),t(),e(139,"div",29)(140,"span",30),n(141,"Development"),t(),e(142,"span",30),n(143,"Progress"),t(),e(144,"span",30),n(145,"Update"),t()(),e(146,"div",11)(147,"sog-button",31),n(148,"\u{1F44D} Like"),t(),e(149,"sog-button",31),n(150,"\u{1F4AC} Comment"),t(),e(151,"sog-button",31),n(152,"\u{1F4E4} Share"),t()()()()()(),e(153,"section",3)(154,"h2"),n(155,"API Reference"),t(),e(156,"div",32)(157,"h3"),n(158,"CSS Classes"),t(),e(159,"table")(160,"thead")(161,"tr")(162,"th"),n(163,"Class"),t(),e(164,"th"),n(165,"Description"),t()()(),e(166,"tbody")(167,"tr")(168,"td"),n(169,".sog-card"),t(),e(170,"td"),n(171,"Base card component"),t()(),e(172,"tr")(173,"td"),n(174,".sog-card--elevated"),t(),e(175,"td"),n(176,"Card with elevated shadow"),t()(),e(177,"tr")(178,"td"),n(179,".sog-card--outlined"),t(),e(180,"td"),n(181,"Card with border instead of shadow"),t()(),e(182,"tr")(183,"td"),n(184,".sog-card--flat"),t(),e(185,"td"),n(186,"Card with no shadow or border"),t()(),e(187,"tr")(188,"td"),n(189,".sog-card--interactive"),t(),e(190,"td"),n(191,"Card that responds to hover and click"),t()(),e(192,"tr")(193,"td"),n(194,".sog-card__header"),t(),e(195,"td"),n(196,"Card header section"),t()(),e(197,"tr")(198,"td"),n(199,".sog-card__content"),t(),e(200,"td"),n(201,"Main card content area"),t()(),e(202,"tr")(203,"td"),n(204,".sog-card__actions"),t(),e(205,"td"),n(206,"Card action buttons area"),t()(),e(207,"tr")(208,"td"),n(209,".sog-card__image"),t(),e(210,"td"),n(211,"Card image container"),t()()()()()()()),d&2&&(i(11),o("code",a.basicUsageCode)("htmlCode",a.basicUsageHtml),i(12),o("code",a.headerCode)("htmlCode",a.headerHtml),i(2),o("hasHeader",!0),i(13),o("code",a.actionsCode)("htmlCode",a.actionsHtml),i(2),o("hasFooter",!0),i(15),o("code",a.imageCode)("htmlCode",a.imageHtml),i(2),o("hasFooter",!0),i(18),o("code",a.variantsCode)("htmlCode",a.variantsHtml),i(23),o("code",a.interactiveCode)("htmlCode",a.interactiveHtml),i(23),o("code",a.complexCode)("htmlCode",a.complexHtml),i(2),o("hasHeader",!0)("hasFooter",!0))},dependencies:[p,_,M,S],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem}.card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.demo-image-container[_ngcontent-%COMP%]{position:relative;height:200px;background:var(--gray-100);display:flex;align-items:center;justify-content:center;margin:-16px -16px 16px}.demo-image[_ngcontent-%COMP%]{font-size:4rem}.complex-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.interactive-card[_ngcontent-%COMP%]{cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.interactive-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.card-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;justify-content:flex-end}.subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:var(--gray-500)}.complex-card[_ngcontent-%COMP%]{max-width:500px}.user-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.avatar[_ngcontent-%COMP%]{width:40px;height:40px;background:var(--primary-100);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.25rem}.user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--gray-900);margin:0}.user-role[_ngcontent-%COMP%]{font-size:.875rem;color:var(--gray-500)}.timestamp[_ngcontent-%COMP%]{font-size:.875rem;color:var(--gray-400);margin-left:auto}.tags[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-top:1rem;flex-wrap:wrap}.tag[_ngcontent-%COMP%]{padding:.25rem .75rem;background:var(--primary-100);color:var(--primary-700);font-size:.75rem;border-radius:12px;font-weight:500}.api-table[_ngcontent-%COMP%]{margin-top:2rem}.api-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.api-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px #0000001a}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;text-align:left;border-bottom:1px solid var(--gray-200)}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--gray-50);font-weight:600;color:var(--gray-900)}.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--gray-600)}.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.card-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.card-actions[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}.complex-card[_ngcontent-%COMP%]{max-width:100%}.complex-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.75rem}.user-info[_ngcontent-%COMP%]{gap:.75rem}.avatar[_ngcontent-%COMP%]{width:36px;height:36px;font-size:1.1rem}.user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.9rem}.user-role[_ngcontent-%COMP%]{font-size:.8rem}.timestamp[_ngcontent-%COMP%]{font-size:.8rem;margin-left:0;align-self:flex-end}.tags[_ngcontent-%COMP%]{margin-top:.75rem}.tag[_ngcontent-%COMP%]{font-size:.7rem;padding:.2rem .6rem}}"]})}}return r})();export{j as CardDemoComponent};
