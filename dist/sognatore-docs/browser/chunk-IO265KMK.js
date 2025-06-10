import{a as u}from"./chunk-BK2DKCDB.js";import{a as g}from"./chunk-LGDC3C3Z.js";import{a as c}from"./chunk-EB6CYSG7.js";import{Fa as i,Ob as m,Sa as a,V as p,Wa as t,Xa as e,Ya as r,ib as o,qb as d}from"./chunk-CXY5ULLP.js";var C=(()=>{class s{constructor(){this.formHelpCode=`import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-form-help',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <div class="form-field">
      <label for="username">Username</label>
      <div class="input-with-help">
        <input type="text" id="username" placeholder="Enter username">
        <sog-tooltip 
          text="Username must be 3-20 characters and contain only letters, numbers, and underscores"
          position="right"
          variant="info">
          <button class="help-icon" type="button">?</button>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class FormHelpComponent {}`,this.formHelpHtml=`<div class="form-field">
  <label for="username">Username</label>
  <div class="input-with-help">
    <input type="text" id="username" placeholder="Enter username">
    <sog-tooltip 
      text="Username must be 3-20 characters and contain only letters, numbers, and underscores"
      position="right"
      variant="info">
      <button class="help-icon" type="button">?</button>
    </sog-tooltip>
  </div>
</div>`,this.navTooltipCode=`import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-nav-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <!-- Sidebar Navigation -->
    <nav class="sidebar-nav">
      <sog-tooltip text="Dashboard" position="right" variant="basic">
        <button class="nav-icon">\u{1F3E0}</button>
      </sog-tooltip>
      <sog-tooltip text="Analytics" position="right" variant="basic">
        <button class="nav-icon">\u{1F4CA}</button>
      </sog-tooltip>
      <sog-tooltip text="Settings" position="right" variant="basic">
        <button class="nav-icon">\u2699\uFE0F</button>
      </sog-tooltip>
    </nav>

    <!-- Top Navigation -->
    <nav class="top-nav">
      <sog-tooltip text="Notifications" position="bottom" variant="basic">
        <button class="nav-icon">\u{1F514}</button>
      </sog-tooltip>
      <sog-tooltip text="Messages" position="bottom" variant="basic">
        <button class="nav-icon">\u{1F4AC}</button>
      </sog-tooltip>
      <sog-tooltip text="User Profile" position="bottom" variant="basic">
        <button class="nav-icon">\u{1F464}</button>
      </sog-tooltip>
    </nav>
  \`
})
export class NavTooltipsComponent {}`,this.navTooltipHtml=`<nav class="sidebar-nav">
  <sog-tooltip text="Dashboard" position="right" variant="basic">
    <button class="nav-icon">\u{1F3E0}</button>
  </sog-tooltip>
  <sog-tooltip text="Analytics" position="right" variant="basic">
    <button class="nav-icon">\u{1F4CA}</button>
  </sog-tooltip>
</nav>`,this.statusTooltipCode=`import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-status-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <div class="status-list">
      <div class="status-item" *ngFor="let status of systemStatus">
        <span>{{status.name}}</span>
        <sog-tooltip 
          [text]="status.description" 
          [variant]="status.variant" 
          position="left">
          <div 
            class="status-indicator" 
            [class]="'status-' + status.status">
          </div>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class StatusTooltipsComponent {
  systemStatus = [
    { name: 'API Server', status: 'online', variant: 'success' as const, 
      description: 'All systems operational - Response time: 45ms' },
    { name: 'Database', status: 'warning', variant: 'warning' as const, 
      description: 'High CPU usage detected - Performance may be affected' },
    { name: 'Cache Service', status: 'error', variant: 'error' as const, 
      description: 'Service unavailable - Please contact system administrator' }
  ];
}`,this.statusTooltipHtml=`<div class="status-list">
  <div class="status-item">
    <span>Server Status</span>
    <sog-tooltip text="All systems operational" variant="success" position="left">
      <div class="status-indicator status-online"></div>
    </sog-tooltip>
  </div>
</div>`,this.tableTooltipCode=`import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-table-tooltips',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <table class="data-table">
      <thead>
        <tr>
          <th>User</th>
          <th>
            Status
            <sog-tooltip text="User account status: Active, Inactive, or Suspended" variant="info" position="top">
              <span class="header-help">\u2139\uFE0F</span>
            </sog-tooltip>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>
            <sog-tooltip variant="material" position="right">
              <span class="user-name">{{user.name}}</span>
              <div slot="tooltip">
                <div class="user-tooltip">
                  <strong>\u{1F464} {{user.name}}</strong>
                  <p>{{user.email}}</p>
                  <small>Member since: {{user.memberSince}}</small>
                </div>
              </div>
            </sog-tooltip>
          </td>
          <td><span class="status-badge" [class]="user.status.toLowerCase()">{{user.status}}</span></td>
          <td>
            <sog-tooltip text="Edit user details" position="top" variant="basic">
              <button class="action-btn">\u270F\uFE0F</button>
            </sog-tooltip>
            <sog-tooltip text="View user activity" position="top" variant="basic">
              <button class="action-btn">\u{1F441}\uFE0F</button>
            </sog-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
  \`
})
export class TableTooltipsComponent {
  users = [
    { name: 'John Doe', email: 'john.doe&#64;example.com', status: 'Active', memberSince: 'Jan 2023' },
    { name: 'Jane Smith', email: 'jane.smith&#64;example.com', status: 'Inactive', memberSince: 'Mar 2023' }
  ];
}`,this.tableTooltipHtml=`<table class="data-table">
  <thead>
    <tr>
      <th>User</th>
      <th>Status <sog-tooltip text="Account status info" variant="info"><span>\u2139\uFE0F</span></sog-tooltip></th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <sog-tooltip variant="material" position="right">
          <span class="user-name">John Doe</span>
          <div slot="tooltip">
            <strong>\u{1F464} John Doe</strong>
            <p>john.doe&#64;example.com</p>
            <small>Member since: Jan 2023</small>
          </div>
        </sog-tooltip>
      </td>
      <td><span class="status-badge active">Active</span></td>
      <td>
        <sog-tooltip text="Edit user" position="top">
          <button class="action-btn">\u270F\uFE0F</button>
        </sog-tooltip>
      </td>
    </tr>
  </tbody>
</table>`,this.buttonTooltipCode=`import { Component } from '@angular/core';
import { SognatoreTooltip, SognatoreButton } from '@sognatore/ui';

@Component({
  selector: 'app-button-tooltips',
  standalone: true,
  imports: [SognatoreTooltip, SognatoreButton],
  template: \`
    <div class="button-group">
      <h4>File Operations</h4>
      <div class="actions">
        <sog-tooltip text="Create new document" position="top" variant="basic">
          <sog-button variant="primary">\u{1F4C4} New</sog-button>
        </sog-tooltip>
        <sog-tooltip text="Open existing file" position="top" variant="basic">
          <sog-button variant="outline">\u{1F4C1} Open</sog-button>
        </sog-tooltip>
        <sog-tooltip text="Save current document" position="top" variant="success">
          <sog-button variant="success">\u{1F4BE} Save</sog-button>
        </sog-tooltip>
      </div>
    </div>

    <div class="button-group">
      <h4>Dangerous Actions</h4>
      <div class="actions">
        <sog-tooltip text="Permanently delete all selected items" position="top" variant="error" trigger="click">
          <sog-button variant="danger">\u{1F5D1}\uFE0F Delete All</sog-button>
        </sog-tooltip>
        <sog-tooltip text="Reset to factory defaults (cannot be undone)" position="top" variant="warning" trigger="click">
          <sog-button variant="warning">\u{1F504} Reset</sog-button>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class ButtonTooltipsComponent {}`,this.buttonTooltipHtml=`<div class="actions">
  <sog-tooltip text="Create new document" position="top" variant="basic">
    <sog-button variant="primary">\u{1F4C4} New</sog-button>
  </sog-tooltip>
  <sog-tooltip text="Permanently delete all items" position="top" variant="error" trigger="click">
    <sog-button variant="danger">\u{1F5D1}\uFE0F Delete All</sog-button>
  </sog-tooltip>
</div>`,this.richContentCode=`import { Component } from '@angular/core';
import { SognatoreTooltip } from '@sognatore/ui';

@Component({
  selector: 'app-rich-content',
  standalone: true,
  imports: [SognatoreTooltip],
  template: \`
    <div class="product-cards">
      <div class="product-card">
        <sog-tooltip variant="material" position="top">
          <div class="product-info">
            <h5>Pro Plan</h5>
            <span class="price">$29/mo</span>
          </div>
          <div slot="tooltip">
            <div class="tooltip-header">
              <strong>\u{1F4F1} Pro Plan Features</strong>
            </div>
            <div class="tooltip-body">
              <ul>
                <li>\u2705 Unlimited projects</li>
                <li>\u2705 Priority support</li>
                <li>\u2705 Advanced analytics</li>
                <li>\u2705 Custom domains</li>
              </ul>
              <div class="tooltip-footer">
                <small>Cancel anytime \u2022 30-day free trial</small>
              </div>
            </div>
          </div>
        </sog-tooltip>
      </div>
    </div>
  \`
})
export class RichContentComponent {}`,this.richContentHtml=`<sog-tooltip variant="material" position="top">
  <div class="product-info">
    <h5>Pro Plan</h5>
    <span class="price">$29/mo</span>
  </div>
  <div slot="tooltip">
    <div class="tooltip-header">
      <strong>\u{1F4F1} Pro Plan Features</strong>
    </div>
    <div class="tooltip-body">
      <ul>
        <li>\u2705 Unlimited projects</li>
        <li>\u2705 Priority support</li>
        <li>\u2705 Advanced analytics</li>
      </ul>
      <small>Cancel anytime \u2022 30-day free trial</small>
    </div>
  </div>
</sog-tooltip>`}static{this.\u0275fac=function(l){return new(l||s)}}static{this.\u0275cmp=p({type:s,selectors:[["app-tooltip-examples"]],standalone:!0,features:[d],decls:271,vars:12,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[1,"examples-grid"],[1,"example-card"],[1,"example-description"],[3,"code","htmlCode"],[1,"demo-container","demo-small"],[1,"form-example"],[1,"form-field"],["for","username"],[1,"input-with-help"],["type","text","id","username","placeholder","Enter username"],["text","Username must be 3-20 characters and contain only letters, numbers, and underscores","position","right","variant","info"],[1,"help-icon"],["for","password"],["type","password","id","password","placeholder","Enter password"],["text","Password must be at least 8 characters with uppercase, lowercase, number and symbol","position","right","variant","warning"],[1,"nav-examples"],[1,"nav-section"],[1,"sidebar-nav"],["text","Dashboard","position","right","variant","basic"],[1,"nav-icon"],["text","Analytics","position","right","variant","basic"],["text","Users","position","right","variant","basic"],["text","Settings","position","right","variant","basic"],[1,"top-nav"],["text","Notifications","position","bottom","variant","basic"],["text","Messages","position","bottom","variant","basic"],["text","User Profile","position","bottom","variant","basic"],[1,"status-example"],[1,"status-list"],[1,"status-item"],["text","All systems operational - Response time: 45ms","variant","success","position","left"],[1,"status-indicator","status-online"],["text","High CPU usage detected - Performance may be affected","variant","warning","position","left"],[1,"status-indicator","status-warning"],["text","Service unavailable - Please contact system administrator","variant","error","position","left"],[1,"status-indicator","status-error"],["text","Connected - 2.3TB used of 10TB available","variant","success","position","left"],[1,"table-example"],[1,"data-table"],["text","User account status: Active, Inactive, or Suspended","variant","info","position","top"],[1,"header-help"],["variant","material","position","right"],[1,"user-name"],["slot","tooltip"],[1,"user-tooltip"],[1,"status-badge","active"],["text","Edit user details","position","top","variant","basic"],[1,"action-btn"],["text","View user activity","position","top","variant","basic"],["text","Delete user account","position","top","variant","error"],[1,"action-btn","danger"],[1,"status-badge","inactive"],[1,"button-examples"],[1,"button-group"],[1,"actions"],["text","Create new document","position","top","variant","basic"],["variant","primary"],["text","Open existing file","position","top","variant","basic"],["variant","outline"],["text","Save current document","position","top","variant","success"],["variant","success"],["text","Permanently delete all selected items","position","top","variant","error","trigger","click"],["variant","danger"],["text","Reset to factory defaults (cannot be undone)","position","top","variant","warning","trigger","click"],["variant","warning"],[1,"rich-content-demo"],[1,"product-cards"],[1,"product-card"],["variant","material","position","top"],[1,"product-info"],[1,"price"],[1,"tooltip-header"],[1,"tooltip-body"],[1,"tooltip-footer"],["variant","info","position","top"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"header",1)(2,"h1"),o(3,"Tooltip Examples"),e(),t(4,"p",2),o(5," Real-world examples and implementation patterns for common tooltip use cases. "),e()(),t(6,"section",3)(7,"h2"),o(8,"Real-World Examples"),e(),t(9,"p"),o(10,"Common tooltip use cases and implementation patterns."),e(),t(11,"div",4)(12,"div",5)(13,"h3"),o(14,"Form Field Help"),e(),t(15,"p",6),o(16,"Provide contextual help for form fields without cluttering the UI."),e(),t(17,"app-code-example",7)(18,"div",8)(19,"div",9)(20,"div",10)(21,"label",11),o(22,"Username"),e(),t(23,"div",12),r(24,"input",13),t(25,"sog-tooltip",14)(26,"button",15),o(27,"?"),e()()()(),t(28,"div",10)(29,"label",16),o(30,"Password"),e(),t(31,"div",12),r(32,"input",17),t(33,"sog-tooltip",18)(34,"button",15),o(35,"?"),e()()()()()()()(),t(36,"div",5)(37,"h3"),o(38,"Navigation Tooltips"),e(),t(39,"p",6),o(40,"Icon-only navigation with descriptive tooltips for better UX."),e(),t(41,"app-code-example",7)(42,"div",8)(43,"div",19)(44,"div",20)(45,"h4"),o(46,"Sidebar Navigation"),e(),t(47,"nav",21)(48,"sog-tooltip",22)(49,"button",23),o(50,"\u{1F3E0}"),e()(),t(51,"sog-tooltip",24)(52,"button",23),o(53,"\u{1F4CA}"),e()(),t(54,"sog-tooltip",25)(55,"button",23),o(56,"\u{1F465}"),e()(),t(57,"sog-tooltip",26)(58,"button",23),o(59,"\u2699\uFE0F"),e()()()(),t(60,"div",20)(61,"h4"),o(62,"Top Navigation"),e(),t(63,"nav",27)(64,"sog-tooltip",28)(65,"button",23),o(66,"\u{1F514}"),e()(),t(67,"sog-tooltip",29)(68,"button",23),o(69,"\u{1F4AC}"),e()(),t(70,"sog-tooltip",30)(71,"button",23),o(72,"\u{1F464}"),e()()()()()()()(),t(73,"div",5)(74,"h3"),o(75,"Status Indicators"),e(),t(76,"p",6),o(77,"System status monitoring with color-coded indicators and detailed tooltips."),e(),t(78,"app-code-example",7)(79,"div",8)(80,"div",31)(81,"div",32)(82,"div",33)(83,"span"),o(84,"API Server"),e(),t(85,"sog-tooltip",34),r(86,"div",35),e()(),t(87,"div",33)(88,"span"),o(89,"Database"),e(),t(90,"sog-tooltip",36),r(91,"div",37),e()(),t(92,"div",33)(93,"span"),o(94,"Cache Service"),e(),t(95,"sog-tooltip",38),r(96,"div",39),e()(),t(97,"div",33)(98,"span"),o(99,"File Storage"),e(),t(100,"sog-tooltip",40),r(101,"div",35),e()()()()()()(),t(102,"div",5)(103,"h3"),o(104,"Data Tables"),e(),t(105,"p",6),o(106,"Enhanced table interactions with user profiles and action tooltips."),e(),t(107,"app-code-example",7)(108,"div",8)(109,"div",41)(110,"table",42)(111,"thead")(112,"tr")(113,"th"),o(114,"User"),e(),t(115,"th"),o(116," Status "),t(117,"sog-tooltip",43)(118,"span",44),o(119,"\u2139\uFE0F"),e()()(),t(120,"th"),o(121,"Actions"),e()()(),t(122,"tbody")(123,"tr")(124,"td")(125,"sog-tooltip",45)(126,"span",46),o(127,"John Doe"),e(),t(128,"div",47)(129,"div",48)(130,"strong"),o(131,"\u{1F464} John Doe"),e(),t(132,"p"),o(133,"john.doe@example.com"),e(),t(134,"small"),o(135,"Member since: Jan 2023"),e(),t(136,"small"),o(137,"Last login: 2 hours ago"),e()()()()(),t(138,"td")(139,"span",49),o(140,"Active"),e()(),t(141,"td")(142,"sog-tooltip",50)(143,"button",51),o(144,"\u270F\uFE0F"),e()(),t(145,"sog-tooltip",52)(146,"button",51),o(147,"\u{1F441}\uFE0F"),e()(),t(148,"sog-tooltip",53)(149,"button",54),o(150,"\u{1F5D1}\uFE0F"),e()()()(),t(151,"tr")(152,"td")(153,"sog-tooltip",45)(154,"span",46),o(155,"Jane Smith"),e(),t(156,"div",47)(157,"div",48)(158,"strong"),o(159,"\u{1F464} Jane Smith"),e(),t(160,"p"),o(161,"jane.smith@example.com"),e(),t(162,"small"),o(163,"Member since: Mar 2023"),e(),t(164,"small"),o(165,"Last login: 1 day ago"),e()()()()(),t(166,"td")(167,"span",55),o(168,"Inactive"),e()(),t(169,"td")(170,"sog-tooltip",50)(171,"button",51),o(172,"\u270F\uFE0F"),e()(),t(173,"sog-tooltip",52)(174,"button",51),o(175,"\u{1F441}\uFE0F"),e()(),t(176,"sog-tooltip",53)(177,"button",54),o(178,"\u{1F5D1}\uFE0F"),e()()()()()()()()()(),t(179,"div",5)(180,"h3"),o(181,"Interactive Buttons"),e(),t(182,"p",6),o(183,"Action buttons with contextual tooltips and confirmation dialogs."),e(),t(184,"app-code-example",7)(185,"div",8)(186,"div",56)(187,"div",57)(188,"h4"),o(189,"File Operations"),e(),t(190,"div",58)(191,"sog-tooltip",59)(192,"sog-button",60),o(193,"\u{1F4C4} New"),e()(),t(194,"sog-tooltip",61)(195,"sog-button",62),o(196,"\u{1F4C1} Open"),e()(),t(197,"sog-tooltip",63)(198,"sog-button",64),o(199,"\u{1F4BE} Save"),e()()()(),t(200,"div",57)(201,"h4"),o(202,"Dangerous Actions"),e(),t(203,"div",58)(204,"sog-tooltip",65)(205,"sog-button",66),o(206,"\u{1F5D1}\uFE0F Delete All"),e()(),t(207,"sog-tooltip",67)(208,"sog-button",68),o(209,"\u{1F504} Reset"),e()()()()()()()(),t(210,"div",5)(211,"h3"),o(212,"Rich Content"),e(),t(213,"p",6),o(214,"Complex tooltips with formatted content, lists, and custom styling."),e(),t(215,"app-code-example",7)(216,"div",8)(217,"div",69)(218,"div",70)(219,"div",71)(220,"sog-tooltip",72)(221,"div",73)(222,"h5"),o(223,"Pro Plan"),e(),t(224,"span",74),o(225,"$29/mo"),e()(),t(226,"div",47)(227,"div",75)(228,"strong"),o(229,"\u{1F4F1} Pro Plan Features"),e()(),t(230,"div",76)(231,"ul")(232,"li"),o(233,"\u2705 Unlimited projects"),e(),t(234,"li"),o(235,"\u2705 Priority support"),e(),t(236,"li"),o(237,"\u2705 Advanced analytics"),e(),t(238,"li"),o(239,"\u2705 Custom domains"),e(),t(240,"li"),o(241,"\u2705 API access"),e()(),t(242,"div",77)(243,"small"),o(244,"Cancel anytime \u2022 30-day free trial"),e()()()()()(),t(245,"div",71)(246,"sog-tooltip",78)(247,"div",73)(248,"h5"),o(249,"Enterprise"),e(),t(250,"span",74),o(251,"Custom"),e()(),t(252,"div",47)(253,"div",75)(254,"strong"),o(255,"\u{1F3E2} Enterprise Solution"),e()(),t(256,"div",76)(257,"p"),o(258,"Everything in Pro, plus:"),e(),t(259,"ul")(260,"li"),o(261,"\u{1F510} SSO & SAML"),e(),t(262,"li"),o(263,"\u{1F465} Team management"),e(),t(264,"li"),o(265,"\u{1F4CA} Advanced reporting"),e(),t(266,"li"),o(267,"\u{1F6E1}\uFE0F Security compliance"),e()(),t(268,"div",77)(269,"small"),o(270,"Contact sales for pricing"),e()()()()()()()()()()()()()()),l&2&&(i(17),a("code",n.formHelpCode)("htmlCode",n.formHelpHtml),i(24),a("code",n.navTooltipCode)("htmlCode",n.navTooltipHtml),i(37),a("code",n.statusTooltipCode)("htmlCode",n.statusTooltipHtml),i(29),a("code",n.tableTooltipCode)("htmlCode",n.tableTooltipHtml),i(77),a("code",n.buttonTooltipCode)("htmlCode",n.buttonTooltipHtml),i(31),a("code",n.richContentCode)("htmlCode",n.richContentHtml))},dependencies:[m,c,u,g],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.examples-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(500px,1fr));gap:2rem;margin-top:2rem}.example-card[_ngcontent-%COMP%]{border:1px solid var(--gray-200);border-radius:8px;overflow:hidden}.example-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{background:var(--gray-50);padding:1rem;margin:0;font-size:1.125rem;font-weight:600;color:var(--gray-900);border-bottom:1px solid var(--gray-200)}.example-description[_ngcontent-%COMP%]{padding:0 1rem;margin:.75rem 0;font-size:.875rem;color:var(--gray-600)}.demo-container[_ngcontent-%COMP%]{padding:3rem 2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem;min-height:200px}.demo-small[_ngcontent-%COMP%]{padding:1.5rem;min-height:auto}.form-example[_ngcontent-%COMP%]{max-width:350px;margin:0 auto}.form-field[_ngcontent-%COMP%]{margin-bottom:1rem}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500;color:var(--gray-700)}.input-with-help[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.input-with-help[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:.5rem;border:1px solid var(--gray-300);border-radius:4px}.help-icon[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1px solid var(--gray-400);background:var(--gray-100);color:var(--gray-600);font-size:.75rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center}.help-icon[_ngcontent-%COMP%]:hover{background:var(--primary-100);border-color:var(--primary-400);color:var(--primary-600)}.nav-examples[_ngcontent-%COMP%]{display:flex;gap:2rem;justify-content:center;flex-wrap:wrap}.nav-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:.75rem;font-size:.875rem;font-weight:600;color:var(--gray-700);text-align:center}.sidebar-nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;background:var(--gray-800);padding:.75rem;border-radius:8px}.top-nav[_ngcontent-%COMP%]{display:flex;gap:.5rem;background:var(--gray-800);padding:.75rem;border-radius:8px}.nav-icon[_ngcontent-%COMP%]{width:40px;height:40px;border:none;background:transparent;color:#fff;font-size:1.125rem;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background-color .2s ease}.nav-icon[_ngcontent-%COMP%]:hover{background:#ffffff1a}.status-example[_ngcontent-%COMP%]{max-width:400px;margin:0 auto}.status-list[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}.status-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem 1rem;border-bottom:1px solid var(--gray-100)}.status-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.status-indicator[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;cursor:pointer}.status-online[_ngcontent-%COMP%]{background:#16a34a}.status-warning[_ngcontent-%COMP%]{background:#f59e0b}.status-error[_ngcontent-%COMP%]{background:#dc2626}.table-example[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}.data-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--gray-200);border-radius:6px;overflow:hidden}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;text-align:left;border-bottom:1px solid var(--gray-100)}.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--gray-50);font-weight:600;color:var(--gray-900);position:relative}.header-help[_ngcontent-%COMP%]{font-size:.75rem;margin-left:.25rem;cursor:pointer;color:var(--gray-500)}.user-name[_ngcontent-%COMP%]{color:var(--primary-600);cursor:pointer;text-decoration:underline}.status-badge[_ngcontent-%COMP%]{padding:.25rem .5rem;border-radius:12px;font-size:.75rem;font-weight:500}.status-badge.active[_ngcontent-%COMP%]{background:#dcfce7;color:#16a34a}.status-badge.inactive[_ngcontent-%COMP%]{background:#fef3c7;color:#d97706}.action-btn[_ngcontent-%COMP%]{padding:.25rem;border:none;background:var(--gray-100);border-radius:4px;cursor:pointer;margin-right:.25rem;font-size:.875rem}.action-btn[_ngcontent-%COMP%]:hover{background:var(--gray-200)}.action-btn.danger[_ngcontent-%COMP%]{background:#fef2f2;color:#dc2626}.action-btn.danger[_ngcontent-%COMP%]:hover{background:#fee2e2}.user-tooltip[_ngcontent-%COMP%]{text-align:left}.user-tooltip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem}.user-tooltip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fffc;font-size:.75rem;display:block}.button-examples[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.button-group[_ngcontent-%COMP%]{margin-bottom:2rem}.button-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1rem;font-weight:600;color:var(--gray-700)}.actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.rich-content-demo[_ngcontent-%COMP%]{display:flex;justify-content:center}.product-cards[_ngcontent-%COMP%]{display:flex;gap:1rem}.product-card[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--gray-200);border-radius:8px;cursor:pointer;transition:all .2s ease}.product-card[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);box-shadow:0 4px 12px #0000001a}.product-info[_ngcontent-%COMP%]{padding:1.5rem;text-align:center}.product-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:1.125rem;font-weight:600;color:var(--gray-900)}.price[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--primary-600)}.tooltip-header[_ngcontent-%COMP%]{margin-bottom:.5rem;padding-bottom:.5rem;border-bottom:1px solid rgba(255,255,255,.2)}.tooltip-body[_ngcontent-%COMP%]{text-align:left}.tooltip-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.875rem}.tooltip-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0;padding-left:1rem;font-size:.875rem}.tooltip-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.25rem}.tooltip-footer[_ngcontent-%COMP%]{margin-top:.75rem;padding-top:.5rem;border-top:1px solid rgba(255,255,255,.2)}.tooltip-footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fffc;font-size:.75rem}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.examples-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.demo-container[_ngcontent-%COMP%]{padding:2rem 1rem}.nav-examples[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.product-cards[_ngcontent-%COMP%]{flex-direction:column}}"]})}}return s})();export{C as TooltipExamplesComponent};
