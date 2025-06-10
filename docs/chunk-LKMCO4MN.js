import{a as V,c as k,d as y,e as H,f as q,g as R,h as L,j as W,k as B,q as G,r as S,s as U}from"./chunk-BFMG4YP4.js";import{a as D}from"./chunk-LGDC3C3Z.js";import{a as T}from"./chunk-EB6CYSG7.js";import{$a as _,Fa as r,Ga as I,L as w,Lb as z,Nb as N,Ob as M,Qa as g,Sa as l,V as x,Wa as t,Xa as e,Ya as s,ab as u,ib as n,jb as c,ka as C,mb as P,nb as E,ob as O,pb as F,qb as v}from"./chunk-CXY5ULLP.js";function J(a,f){if(a&1&&(t(0,"label",7),n(1),e()),a&2){let o=u();l("for",o.inputId),r(),c(o.label)}}function Y(a,f){if(a&1&&(t(0,"span",8),n(1),e()),a&2){let o=u();r(),c(o.prefixIcon)}}function K(a,f){if(a&1&&(t(0,"span",9),n(1),e()),a&2){let o=u();r(),c(o.suffixIcon)}}function Q(a,f){if(a&1&&(t(0,"span",13),n(1),e()),a&2){let o=u(2);r(),c(o.errorMessage)}}function X(a,f){if(a&1&&(t(0,"span",14),n(1),e()),a&2){let o=u(2);r(),c(o.helperText)}}function Z(a,f){if(a&1&&(t(0,"div",10),g(1,Q,2,1,"span",11)(2,X,2,1,"span",12),e()),a&2){let o=u();r(),l("ngIf",o.errorMessage&&o.state==="error"),r(),l("ngIf",o.helperText&&o.state!=="error")}}var j=(()=>{class a{constructor(){this.type="text",this.name="",this.placeholder="",this.label="",this.helperText="",this.errorMessage="",this.required=!1,this.disabled=!1,this.readonly=!1,this.size="medium",this.variant="outlined",this.state="default",this.prefixIcon="",this.suffixIcon="",this.inputId=`sog-input-${Math.random().toString(36).substr(2,9)}`,this.focus=new C,this.blur=new C,this.inputChange=new C,this.value="",this.onChange=()=>{},this.onTouched=()=>{}}handleInput(o){let d=o.target;this.value=d.value,this.onChange(d.value),this.inputChange.emit(d.value)}handleFocus(o){this.focus.emit(o)}handleBlur(o){this.onTouched(),this.blur.emit(o)}writeValue(o){this.value=o||""}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}getContainerClasses(){let o=typeof this.size=="string"?this.size:"medium",d=typeof this.variant=="string"?this.variant:"outlined",i=typeof this.state=="string"?this.state:"default";return[o,d,i]}getInputClasses(){let o=typeof this.size=="string"?this.size:"medium",d=typeof this.variant=="string"?this.variant:"outlined",i=typeof this.state=="string"?this.state:"default",m=[o,d,i];return this.prefixIcon&&m.push("has-prefix"),this.suffixIcon&&m.push("has-suffix"),m}static{this.\u0275fac=function(d){return new(d||a)}}static{this.\u0275cmp=x({type:a,selectors:[["sog-input"]],inputs:{type:"type",name:"name",placeholder:"placeholder",label:"label",helperText:"helperText",errorMessage:"errorMessage",required:"required",disabled:"disabled",readonly:"readonly",size:"size",variant:"variant",state:"state",prefixIcon:"prefixIcon",suffixIcon:"suffixIcon",inputId:"inputId"},outputs:{focus:"focus",blur:"blur",inputChange:"inputChange"},standalone:!0,features:[F([{provide:V,useExisting:w(()=>a),multi:!0}]),v],decls:7,vars:14,consts:[[1,"sog-input-container",3,"ngClass"],["class","sog-input-label",3,"for",4,"ngIf"],[1,"sog-input-wrapper"],["class","sog-input-icon prefix",4,"ngIf"],[1,"sog-input",3,"input","blur","focus","id","type","name","placeholder","required","disabled","readonly","ngClass","value"],["class","sog-input-icon suffix",4,"ngIf"],["class","sog-input-helper",4,"ngIf"],[1,"sog-input-label",3,"for"],[1,"sog-input-icon","prefix"],[1,"sog-input-icon","suffix"],[1,"sog-input-helper"],["class","error-text",4,"ngIf"],["class","helper-text",4,"ngIf"],[1,"error-text"],[1,"helper-text"]],template:function(d,i){d&1&&(t(0,"div",0),g(1,J,2,2,"label",1),t(2,"div",2),g(3,Y,2,1,"span",3),t(4,"input",4),_("input",function(p){return i.handleInput(p)})("blur",function(p){return i.handleBlur(p)})("focus",function(p){return i.handleFocus(p)}),e(),g(5,K,2,1,"span",5),e(),g(6,Z,3,2,"div",6),e()),d&2&&(l("ngClass",i.getContainerClasses()),r(),l("ngIf",i.label),r(2),l("ngIf",i.prefixIcon),r(),l("id",i.inputId)("type",i.type)("name",i.name)("placeholder",i.placeholder)("required",i.required)("disabled",i.disabled)("readonly",i.readonly)("ngClass",i.getInputClasses())("value",i.value),r(),l("ngIf",i.suffixIcon),r(),l("ngIf",i.helperText||i.errorMessage))},dependencies:[M,z,N,S],styles:[".sog-input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;width:100%}.sog-input-label[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;color:#374151;margin-bottom:.25rem}.sog-input-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.sog-input[_ngcontent-%COMP%]{width:100%;padding:.75rem 1rem;font-size:1rem;border:1px solid #d1d5db;border-radius:6px;background-color:#fff;transition:all .2s ease;font-family:inherit;line-height:1.5}.sog-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.sog-input[_ngcontent-%COMP%]:disabled{background-color:#f9fafb;color:#6b7280;cursor:not-allowed}.sog-input[_ngcontent-%COMP%]:read-only{background-color:#f9fafb}.sog-input.has-prefix[_ngcontent-%COMP%]{padding-left:2.5rem}.sog-input.has-suffix[_ngcontent-%COMP%]{padding-right:2.5rem}.sog-input.small[_ngcontent-%COMP%]{padding:.5rem .75rem;font-size:.875rem}.sog-input.small.has-prefix[_ngcontent-%COMP%]{padding-left:2rem}.sog-input.small.has-suffix[_ngcontent-%COMP%]{padding-right:2rem}.sog-input.large[_ngcontent-%COMP%]{padding:1rem 1.25rem;font-size:1.125rem}.sog-input.large.has-prefix[_ngcontent-%COMP%]{padding-left:3rem}.sog-input.large.has-suffix[_ngcontent-%COMP%]{padding-right:3rem}.sog-input.outlined[_ngcontent-%COMP%]{border:1px solid #d1d5db;background-color:#fff}.sog-input.filled[_ngcontent-%COMP%]{border:1px solid transparent;background-color:#f3f4f6}.sog-input.filled[_ngcontent-%COMP%]:focus{background-color:#fff;border-color:#3b82f6}.sog-input.underlined[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #d1d5db;border-radius:0;background-color:transparent;padding-left:0;padding-right:0}.sog-input.underlined[_ngcontent-%COMP%]:focus{border-bottom-color:#3b82f6;box-shadow:none}.sog-input.error[_ngcontent-%COMP%]{border-color:#ef4444}.sog-input.error[_ngcontent-%COMP%]:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.sog-input.success[_ngcontent-%COMP%]{border-color:#10b981}.sog-input.success[_ngcontent-%COMP%]:focus{border-color:#10b981;box-shadow:0 0 0 3px #10b9811a}.sog-input.warning[_ngcontent-%COMP%]{border-color:#f59e0b}.sog-input.warning[_ngcontent-%COMP%]:focus{border-color:#f59e0b;box-shadow:0 0 0 3px #f59e0b1a}.sog-input-icon[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);color:#6b7280;font-size:1rem;pointer-events:none}.sog-input-icon.prefix[_ngcontent-%COMP%]{left:.75rem}.sog-input-icon.suffix[_ngcontent-%COMP%]{right:.75rem}.sog-input-helper[_ngcontent-%COMP%]{font-size:.875rem;margin-top:.25rem}.error-text[_ngcontent-%COMP%]{color:#ef4444}.helper-text[_ngcontent-%COMP%]{color:#6b7280}.sog-input-container.small[_ngcontent-%COMP%]   .sog-input-icon[_ngcontent-%COMP%]{font-size:.875rem}.sog-input-container.small[_ngcontent-%COMP%]   .sog-input-icon.prefix[_ngcontent-%COMP%]{left:.5rem}.sog-input-container.small[_ngcontent-%COMP%]   .sog-input-icon.suffix[_ngcontent-%COMP%]{right:.5rem}.sog-input-container.large[_ngcontent-%COMP%]   .sog-input-icon[_ngcontent-%COMP%]{font-size:1.125rem}.sog-input-container.large[_ngcontent-%COMP%]   .sog-input-icon.prefix[_ngcontent-%COMP%]{left:1rem}.sog-input-container.large[_ngcontent-%COMP%]   .sog-input-icon.suffix[_ngcontent-%COMP%]{right:1rem}"]})}}return a})();var ue=(()=>{class a{constructor(o){this.fb=o,this.basicValue="",this.textareaValue="",this.basicUsageCode=`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SogInputComponent } from '@sognatore/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, SogInputComponent],
  template: \`
    <sog-input 
      label="Name"
      placeholder="Enter your name"
      [(ngModel)]="name">
    </sog-input>
  \`
})
export class ExampleComponent {
  name = '';
}`,this.basicUsageHtml=`<sog-input 
  label="Name"
  placeholder="Enter your name"
  [(ngModel)]="name">
</sog-input>`,this.typesCode=`<sog-input type="text" placeholder="Text input"></sog-input>
<sog-input type="email" placeholder="email@example.com"></sog-input>
<sog-input type="password" placeholder="Password"></sog-input>
<sog-input type="number" placeholder="123"></sog-input>
<sog-input type="date"></sog-input>
<sog-input type="url" placeholder="https://example.com"></sog-input>`,this.typesHtml=`<sog-input type="text" placeholder="Text input"></sog-input>
<sog-input type="email" placeholder="email@example.com"></sog-input>
<sog-input type="password" placeholder="Password"></sog-input>
<sog-input type="number" placeholder="123"></sog-input>
<sog-input type="date"></sog-input>
<sog-input type="url" placeholder="https://example.com"></sog-input>`,this.sizesCode=`<sog-input size="small" placeholder="Small input"></sog-input>
<sog-input size="medium" placeholder="Medium input"></sog-input>
<sog-input size="large" placeholder="Large input"></sog-input>`,this.sizesHtml=`<sog-input size="small" placeholder="Small input"></sog-input>
<sog-input size="medium" placeholder="Medium input"></sog-input>
<sog-input size="large" placeholder="Large input"></sog-input>`,this.statesCode=`<sog-input placeholder="Normal state"></sog-input>
<sog-input placeholder="Disabled" [disabled]="true"></sog-input>
<sog-input value="Readonly value" [readonly]="true"></sog-input>
<sog-input placeholder="Error state" [error]="true"></sog-input>
<sog-input value="Valid input" [success]="true"></sog-input>`,this.statesHtml=`<sog-input placeholder="Normal state"></sog-input>
<sog-input placeholder="Disabled" disabled></sog-input>
<sog-input value="Readonly value" readonly></sog-input>
<sog-input placeholder="Error state" error></sog-input>
<sog-input value="Valid input" success></sog-input>`,this.iconsCode=`<sog-input 
  placeholder="Search..." 
  icon="search" 
  iconPosition="left">
</sog-input>
<sog-input 
  type="password" 
  placeholder="Password" 
  icon="eye" 
  iconPosition="right">
</sog-input>`,this.iconsHtml=`<sog-input 
  placeholder="Search..." 
  icon="search" 
  iconPosition="left">
</sog-input>
<sog-input 
  type="password" 
  placeholder="Password" 
  icon="eye" 
  iconPosition="right">
</sog-input>`,this.textareaCode=`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <textarea 
      class="sog-textarea"
      rows="4"
      placeholder="Enter your description..."
      [(ngModel)]="description">
    </textarea>
  \`
})
export class ExampleComponent {
  description = '';
}`,this.textareaHtml=`<textarea 
  class="sog-textarea"
  rows="4"
  placeholder="Enter your description..."
  [(ngModel)]="description">
</textarea>`,this.formCode=`import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <sog-input 
        label="First Name"
        placeholder="John"
        formControlName="firstName"
        [error]="form.get('firstName')?.invalid && form.get('firstName')?.touched">
      </sog-input>
      
      <sog-input 
        label="Email"
        type="email"
        placeholder="john@example.com"
        formControlName="email"
        [error]="form.get('email')?.invalid && form.get('email')?.touched">
      </sog-input>
      
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
  \`
})
export class FormExampleComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}`,this.formHtml=`<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <sog-input 
    label="First Name"
    placeholder="John"
    formControlName="firstName"
    [error]="form.get('firstName')?.invalid && form.get('firstName')?.touched">
  </sog-input>
  
  <sog-input 
    label="Email"
    type="email"
    placeholder="john@example.com"
    formControlName="email"
    [error]="form.get('email')?.invalid && form.get('email')?.touched">
  </sog-input>
  
  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>`,this.demoForm=this.fb.group({firstName:["",y.required],email:["",[y.required,y.email]],message:[""]})}onSubmit(){this.demoForm.valid&&console.log("Form submitted:",this.demoForm.value)}static{this.\u0275fac=function(d){return new(d||a)(I(G))}}static{this.\u0275cmp=x({type:a,selectors:[["app-input-demo"]],standalone:!0,features:[v],decls:212,vars:24,consts:[[1,"page-container"],[1,"page-header"],[1,"page-description"],[1,"section"],[3,"code","htmlCode"],[1,"demo-container"],["label","Name","placeholder","Enter your name","helperText","This is a basic input with label and helper text",3,"ngModelChange","ngModel"],[1,"input-grid"],[1,"input-group"],[1,"input-label"],["type","text","placeholder","Text input"],["type","email","placeholder","email@example.com"],["type","password","placeholder","Password"],["type","number","placeholder","123"],["type","date"],["type","url","placeholder","https://example.com"],["size","small","placeholder","Small input"],["size","medium","placeholder","Medium input"],["size","large","placeholder","Large input"],["placeholder","Normal state"],["placeholder","Disabled",3,"disabled"],["value","Readonly value",3,"readonly"],["placeholder","Error state","state","error","errorMessage","This field is required"],["value","Valid input","state","success","helperText","Looks good!"],["placeholder","Search...","prefixIcon","\u{1F50D}"],["type","password","placeholder","Password","suffixIcon","\u{1F441}\uFE0F"],["rows","4","placeholder","Enter your description here...",1,"sog-textarea",3,"ngModelChange","ngModel"],[1,"form-example",3,"ngSubmit","formGroup"],["label","First Name *","placeholder","John","formControlName","firstName",3,"state","errorMessage"],["label","Email *","type","email","placeholder","john@example.com","formControlName","email",3,"state","errorMessage"],["rows","3","placeholder","Your message...","formControlName","message",1,"sog-textarea"],["type","submit","variant","primary",3,"disabled"],[1,"api-table"]],template:function(d,i){if(d&1&&(t(0,"div",0)(1,"header",1)(2,"h1"),n(3,"Input Component"),e(),t(4,"p",2),n(5," Flexible input component with support for various types, validation states, and accessibility features. "),e()(),t(6,"section",3)(7,"h2"),n(8,"Basic Usage"),e(),t(9,"p"),n(10,"Simple text input with label and placeholder."),e(),t(11,"app-code-example",4)(12,"div",5)(13,"sog-input",6),O("ngModelChange",function(p){return E(i.basicValue,p)||(i.basicValue=p),p}),e()()()(),t(14,"section",3)(15,"h2"),n(16,"Input Types"),e(),t(17,"p"),n(18,"Different input types for various data entry needs."),e(),t(19,"app-code-example",4)(20,"div",5)(21,"div",7)(22,"div",8)(23,"label",9),n(24,"Text"),e(),s(25,"sog-input",10),e(),t(26,"div",8)(27,"label",9),n(28,"Email"),e(),s(29,"sog-input",11),e(),t(30,"div",8)(31,"label",9),n(32,"Password"),e(),s(33,"sog-input",12),e(),t(34,"div",8)(35,"label",9),n(36,"Number"),e(),s(37,"sog-input",13),e(),t(38,"div",8)(39,"label",9),n(40,"Date"),e(),s(41,"sog-input",14),e(),t(42,"div",8)(43,"label",9),n(44,"URL"),e(),s(45,"sog-input",15),e()()()()(),t(46,"section",3)(47,"h2"),n(48,"Sizes"),e(),t(49,"p"),n(50,"Different input sizes for various use cases."),e(),t(51,"app-code-example",4)(52,"div",5)(53,"div",8)(54,"label",9),n(55,"Small"),e(),s(56,"sog-input",16),e(),t(57,"div",8)(58,"label",9),n(59,"Medium (Default)"),e(),s(60,"sog-input",17),e(),t(61,"div",8)(62,"label",9),n(63,"Large"),e(),s(64,"sog-input",18),e()()()(),t(65,"section",3)(66,"h2"),n(67,"States"),e(),t(68,"p"),n(69,"Input states including disabled, readonly, and validation states."),e(),t(70,"app-code-example",4)(71,"div",5)(72,"div",7)(73,"div",8)(74,"label",9),n(75,"Normal"),e(),s(76,"sog-input",19),e(),t(77,"div",8)(78,"label",9),n(79,"Disabled"),e(),s(80,"sog-input",20),e(),t(81,"div",8)(82,"label",9),n(83,"Readonly"),e(),s(84,"sog-input",21),e(),t(85,"div",8)(86,"label",9),n(87,"Error"),e(),s(88,"sog-input",22),e(),t(89,"div",8)(90,"label",9),n(91,"Success"),e(),s(92,"sog-input",23),e()()()()(),t(93,"section",3)(94,"h2"),n(95,"With Icons"),e(),t(96,"p"),n(97,"Inputs can include icons for better visual communication."),e(),t(98,"app-code-example",4)(99,"div",5)(100,"div",7)(101,"div",8)(102,"label",9),n(103,"Search"),e(),s(104,"sog-input",24),e(),t(105,"div",8)(106,"label",9),n(107,"Password"),e(),s(108,"sog-input",25),e()()()()(),t(109,"section",3)(110,"h2"),n(111,"Textarea"),e(),t(112,"p"),n(113,"Multi-line text input for longer content."),e(),t(114,"app-code-example",4)(115,"div",5)(116,"div",8)(117,"label",9),n(118,"Description"),e(),t(119,"textarea",26),O("ngModelChange",function(p){return E(i.textareaValue,p)||(i.textareaValue=p),p}),n(120,"              "),e()()()()(),t(121,"section",3)(122,"h2"),n(123,"Form Example"),e(),t(124,"p"),n(125,"Complete form example with validation using Angular Reactive Forms."),e(),t(126,"app-code-example",4)(127,"div",5)(128,"form",27),_("ngSubmit",function(){return i.onSubmit()}),t(129,"div",8),s(130,"sog-input",28),e(),t(131,"div",8),s(132,"sog-input",29),e(),t(133,"div",8)(134,"label",9),n(135,"Message"),e(),t(136,"textarea",30),n(137,"                "),e()(),t(138,"sog-button",31),n(139," Submit Form "),e()()()()(),t(140,"section",3)(141,"h2"),n(142,"API Reference"),e(),t(143,"div",32)(144,"h3"),n(145,"Properties"),e(),t(146,"table")(147,"thead")(148,"tr")(149,"th"),n(150,"Property"),e(),t(151,"th"),n(152,"Type"),e(),t(153,"th"),n(154,"Default"),e(),t(155,"th"),n(156,"Description"),e()()(),t(157,"tbody")(158,"tr")(159,"td"),n(160,"type"),e(),t(161,"td"),n(162,"'text' | 'email' | 'password' | 'number' | 'url' | 'date' | etc."),e(),t(163,"td"),n(164,"'text'"),e(),t(165,"td"),n(166,"HTML input type"),e()(),t(167,"tr")(168,"td"),n(169,"size"),e(),t(170,"td"),n(171,"'small' | 'medium' | 'large'"),e(),t(172,"td"),n(173,"'medium'"),e(),t(174,"td"),n(175,"Size of the input"),e()(),t(176,"tr")(177,"td"),n(178,"disabled"),e(),t(179,"td"),n(180,"boolean"),e(),t(181,"td"),n(182,"false"),e(),t(183,"td"),n(184,"Whether the input is disabled"),e()(),t(185,"tr")(186,"td"),n(187,"readonly"),e(),t(188,"td"),n(189,"boolean"),e(),t(190,"td"),n(191,"false"),e(),t(192,"td"),n(193,"Whether the input is readonly"),e()(),t(194,"tr")(195,"td"),n(196,"placeholder"),e(),t(197,"td"),n(198,"string"),e(),t(199,"td"),n(200,"-"),e(),t(201,"td"),n(202,"Placeholder text"),e()(),t(203,"tr")(204,"td"),n(205,"error"),e(),t(206,"td"),n(207,"boolean"),e(),t(208,"td"),n(209,"false"),e(),t(210,"td"),n(211,"Whether the input has an error state"),e()()()()()()()),d&2){let m,p,h,b;r(11),l("code",i.basicUsageCode)("htmlCode",i.basicUsageHtml),r(2),P("ngModel",i.basicValue),r(6),l("code",i.typesCode)("htmlCode",i.typesHtml),r(32),l("code",i.sizesCode)("htmlCode",i.sizesHtml),r(19),l("code",i.statesCode)("htmlCode",i.statesHtml),r(10),l("disabled",!0),r(4),l("readonly",!0),r(14),l("code",i.iconsCode)("htmlCode",i.iconsHtml),r(16),l("code",i.textareaCode)("htmlCode",i.textareaHtml),r(5),P("ngModel",i.textareaValue),r(7),l("code",i.formCode)("htmlCode",i.formHtml),r(2),l("formGroup",i.demoForm),r(2),l("state",(m=i.demoForm.get("firstName"))!=null&&m.invalid&&((m=i.demoForm.get("firstName"))!=null&&m.touched)?"error":"default")("errorMessage",(p=i.demoForm.get("firstName"))!=null&&p.invalid&&((p=i.demoForm.get("firstName"))!=null&&p.touched)?"First name is required":""),r(2),l("state",(h=i.demoForm.get("email"))!=null&&h.invalid&&((h=i.demoForm.get("email"))!=null&&h.touched)?"error":"default")("errorMessage",(b=i.demoForm.get("email"))!=null&&b.invalid&&((b=i.demoForm.get("email"))!=null&&b.touched)?"Please enter a valid email":""),r(6),l("disabled",i.demoForm.invalid)}},dependencies:[M,S,L,k,H,q,R,U,W,B,T,j,D],styles:[".page-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:3rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--gray-900);margin-bottom:1rem}.page-description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--gray-600);max-width:600px}.section[_ngcontent-%COMP%]{margin-bottom:3rem}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--gray-900);margin-bottom:.5rem}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);margin-bottom:1.5rem;line-height:1.6}.demo-container[_ngcontent-%COMP%]{padding:2rem;background:var(--gray-50);border-radius:8px;margin-top:1rem}.input-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.input-group[_ngcontent-%COMP%]:last-child{margin-bottom:0}.input-label[_ngcontent-%COMP%]{display:block;font-size:.875rem;font-weight:500;color:var(--gray-700);margin-bottom:.5rem}.input-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}.sog-input[_ngcontent-%COMP%], .sog-textarea[_ngcontent-%COMP%]{width:100%;padding:.75rem 1rem;font-size:1rem;border:1px solid var(--gray-300);border-radius:6px;background-color:#fff;transition:all .2s ease;font-family:inherit}.sog-input[_ngcontent-%COMP%]:focus, .sog-textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-500);box-shadow:0 0 0 3px #3b82f61a}.sog-input[_ngcontent-%COMP%]:disabled, .sog-textarea[_ngcontent-%COMP%]:disabled{background-color:var(--gray-100);color:var(--gray-500);cursor:not-allowed}.sog-input[_ngcontent-%COMP%]:read-only, .sog-textarea[_ngcontent-%COMP%]:read-only{background-color:var(--gray-50)}.sog-input--small[_ngcontent-%COMP%]{padding:.5rem .75rem;font-size:.875rem}.sog-input--large[_ngcontent-%COMP%]{padding:1rem 1.25rem;font-size:1.125rem}.sog-input--error[_ngcontent-%COMP%], .sog-textarea--error[_ngcontent-%COMP%]{border-color:#dc2626;box-shadow:0 0 0 3px #dc26261a}.sog-input--success[_ngcontent-%COMP%], .sog-textarea--success[_ngcontent-%COMP%]{border-color:#16a34a;box-shadow:0 0 0 3px #16a34a1a}.input-with-icon[_ngcontent-%COMP%]{position:relative}.input-icon[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);color:var(--gray-400);pointer-events:none}.input-icon--left[_ngcontent-%COMP%]{left:.75rem}.input-icon--right[_ngcontent-%COMP%]{right:.75rem}.sog-input--with-icon-left[_ngcontent-%COMP%]{padding-left:2.5rem}.sog-input--with-icon-right[_ngcontent-%COMP%]{padding-right:2.5rem}.input-error[_ngcontent-%COMP%]{display:block;font-size:.875rem;color:#dc2626;margin-top:.25rem}.input-success[_ngcontent-%COMP%]{display:block;font-size:.875rem;color:#16a34a;margin-top:.25rem}.sog-textarea[_ngcontent-%COMP%]{resize:vertical;min-height:80px}.form-example[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:8px;border:1px solid var(--gray-200)}.sog-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;font-size:1rem;font-weight:500;border-radius:6px;border:none;cursor:pointer;transition:all .2s ease;text-decoration:none}.sog-button[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.sog-button--primary[_ngcontent-%COMP%]{background-color:var(--primary-600);color:#fff}.sog-button--primary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--primary-700)}.api-table[_ngcontent-%COMP%]{margin-top:2rem}.api-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:var(--gray-900);margin-bottom:1rem}.api-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px #0000001a}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;text-align:left;border-bottom:1px solid var(--gray-200)}.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--gray-50);font-weight:600;color:var(--gray-900)}.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--gray-600)}.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1rem}.input-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return a})();export{ue as InputDemoComponent};
