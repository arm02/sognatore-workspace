import{a as g}from"./chunk-LGDC3C3Z.js";import{a as d}from"./chunk-EB6CYSG7.js";import{Fa as r,Ob as c,Sa as a,V as l,Wa as t,Xa as e,Ya as m,ib as n,qb as p}from"./chunk-CXY5ULLP.js";var x=(()=>{class i{constructor(){this.installCode="npm install @sognatore/ui",this.basicUsageCode=`import { Component } from '@angular/core';
import { SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <sog-button variant="primary">
      Click me!
    </sog-button>
  \`
})
export class ExampleComponent {}`,this.basicUsageHtml=`<sog-button variant="primary">
  Click me!
</sog-button>`,this.stylingCode=`@import '@sognatore/ui/styles/base';

:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;
  
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
}`,this.firstComponentCode=`import { Component } from '@angular/core';
import { SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SognatoreButton],
  template: \`
    <div class="welcome-container">
      <sog-button 
        variant="primary" 
        (click)="onWelcomeClick()">
        Welcome to Sognatore UI
      </sog-button>
    </div>
  \`,
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  onWelcomeClick() {
    console.log('Welcome button clicked!');
  }
}`,this.firstComponentHtml=`<div class="welcome-container">
  <sog-button 
    variant="primary" 
    (click)="onWelcomeClick()">
    Welcome to Sognatore UI
  </sog-button>
</div>`,this.firstComponentScss=`.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: var(--gray-50);
  border-radius: 8px;
}`}static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-getting-started"]],standalone:!0,features:[p],decls:58,vars:14,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","showControls","hasPreviewContent"],[3,"code","htmlCode","showControls","hasPreviewContent"],[3,"scssCode","showControls","hasPreviewContent"],[3,"code","htmlCode","scssCode","hasPreviewContent"],[1,"demo-container"],["variant","primary"],[1,"next-steps"],[1,"step-card"],["href","/components/button",1,"step-link"],["href","/design-tokens",1,"step-link"],["href","/examples",1,"step-link"]],template:function(s,o){s&1&&(t(0,"div",0)(1,"header",1)(2,"h1"),n(3,"Getting Started"),e(),t(4,"p",2),n(5," Learn how to install and use Sognatore UI components in your Angular application. "),e()(),t(6,"section",3)(7,"h2"),n(8,"Installation"),e(),t(9,"p"),n(10,"Install Sognatore UI using npm:"),e(),m(11,"app-code-example",4),e(),t(12,"section",3)(13,"h2"),n(14,"Basic Usage"),e(),t(15,"p"),n(16,"Import components into your Angular application:"),e(),m(17,"app-code-example",5),e(),t(18,"section",3)(19,"h2"),n(20,"Styling"),e(),t(21,"p"),n(22,"Add the base styles to your global styles.scss file:"),e(),m(23,"app-code-example",6),e(),t(24,"section",3)(25,"h2"),n(26,"Your First Component"),e(),t(27,"p"),n(28,"Here's a simple example using the Button component:"),e(),t(29,"app-code-example",7)(30,"div",8)(31,"sog-button",9),n(32," Welcome to Sognatore UI "),e()()()(),t(33,"section",3)(34,"h2"),n(35,"Next Steps"),e(),t(36,"div",10)(37,"div",11)(38,"h3"),n(39,"Explore Components"),e(),t(40,"p"),n(41,"Browse through our component library to see what's available."),e(),t(42,"a",12),n(43,"View Components \u2192"),e()(),t(44,"div",11)(45,"h3"),n(46,"Design Tokens"),e(),t(47,"p"),n(48,"Learn about our design system and customization options."),e(),t(49,"a",13),n(50,"Design Tokens \u2192"),e()(),t(51,"div",11)(52,"h3"),n(53,"Examples"),e(),t(54,"p"),n(55,"See real-world examples and implementation patterns."),e(),t(56,"a",14),n(57,"View Examples \u2192"),e()()()()()),s&2&&(r(11),a("code",o.installCode)("showControls",!1)("hasPreviewContent",!1),r(6),a("code",o.basicUsageCode)("htmlCode",o.basicUsageHtml)("showControls",!1)("hasPreviewContent",!1),r(6),a("scssCode",o.stylingCode)("showControls",!1)("hasPreviewContent",!1),r(6),a("code",o.firstComponentCode)("htmlCode",o.firstComponentHtml)("scssCode",o.firstComponentScss)("hasPreviewContent",!0))},dependencies:[c,d,g],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem;text-align:center}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;color:var(--primary-600);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--gray-600);max-width:600px;margin:0 auto}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:2rem;background:var(--gray-50);border-radius:8px;text-align:center;margin-top:1rem}.next-steps[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-top:2rem}.step-card[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:12px;border:1px solid var(--gray-200);transition:all .2s ease}.step-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 25px #0000001a}.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.step-link[_ngcontent-%COMP%]{color:var(--primary-600);text-decoration:none;font-weight:500;transition:color .2s ease}.step-link[_ngcontent-%COMP%]:hover{color:var(--primary-700)}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.next-steps[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return i})();export{x as GettingStartedComponent};
