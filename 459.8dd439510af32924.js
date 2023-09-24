"use strict";(self.webpackChunkassets_app=self.webpackChunkassets_app||[]).push([[459],{5459:(I,m,r)=>{r.r(m),r.d(m,{UserRegistrationModule:()=>A});var u=r(6814),d=r(8525),f=r(617),i=r(6223),c=r(1896),v=r(4825),U=r(3519),g=r.n(U),t=r(5879),b=r(1954),x=r(8065),R=r(8372),p=r(9157),Z=r(3680),h=r(2032),C=r(2296);function _(n,s){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function O(n,s){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function M(n,s){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function T(n,s){1&n&&(t.TgZ(0,"mat-form-field",20)(1,"mat-label"),t._uU(2,"E-mail"),t.qZA(),t._UZ(3,"input",21),t.qZA())}function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"mat-form-field",22)(1,"mat-label"),t._uU(2,"Password"),t.qZA(),t._UZ(3,"input",23),t.TgZ(4,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.hide=!a.hide)}),t.TgZ(5,"mat-icon"),t._uU(6),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility")}}const P=[{path:"",component:(()=>{class n{constructor(e,o,a,l){this._http=e,this._tokenDecoderValidatorService=o,this._router=a,this._selectBoxHttpService=l,this.hide=!0,this.userRole="agent",this.jwtToken=this._tokenDecoderValidatorService.isToken()}ngOnInit(){this.initForm()}initForm(){this.signUp=new i.cw({fullName:new i.NI(null,[i.kI.required]),role:new i.NI(null,[i.kI.required]),site:new i.NI(null,[i.kI.required]),project:new i.NI({value:null,disabled:!0},[i.kI.required])}),this.dependerValidator("site","project"),this.getRoleAndSite()}onFormSubmit(){"VALID"==this.signUp.status&&""!=this.jwtToken&&this._http.signUp(this.jwtToken,this.signUp.value).subscribe(o=>{201==o.statusCode&&(g().fire({position:"center",icon:"success",title:"User has been added",showConfirmButton:!1,timer:1e3}),(0,v.H)(1e3).subscribe(()=>{this._router.navigate(["main/users/all-user"])}))},o=>{g().fire({icon:"error",title:"Oops...",text:o.error.message})})}dependerValidator(e,o){this.signUp.get(e)?.valueChanges.subscribe(a=>{a?this.signUp.get(o)?.enable():this.signUp.get(o)?.disable()})}getRoleAndSite(){""!=this.jwtToken&&this._selectBoxHttpService.getRoleAndSiteSelectBox(this.jwtToken).subscribe(e=>{200===e.statusCode&&(this.rolesDropDown=e.content.role,this.sitesDropDown=e.content.site)},e=>{g().fire({icon:"error",title:"Oops...",text:e.error.message})})}getProject(e){""!=this.jwtToken&&this._selectBoxHttpService.getProjectSelectBox(this.jwtToken,e).subscribe(o=>{200===o.statusCode&&(this.projectsDropDown=o.content.project)},o=>{g().fire({icon:"error",title:"Oops...",text:o.error.message})})}getUserRole(e){this.userRole=e,"agent"!==this.userRole&&(this.signUp.addControl("email",new i.NI(null,[i.kI.required,i.kI.email])),this.signUp.addControl("password",new i.NI(null,[i.kI.required])))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.b),t.Y36(x.a),t.Y36(c.F0),t.Y36(R.I))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-registration"]],decls:31,vars:7,consts:[[1,"user-registration-container"],[1,"user-registration-content"],[1,"user-registration-title"],[1,"user-registration-body"],[1,"sign-up-form",3,"formGroup","ngSubmit"],[1,"sign-up-inputs"],[1,"sign-up-fullName"],["matInput","","formControlName","fullName"],[1,"sign-up-site"],["formControlName","site",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"sign-up-project"],["formControlName","project"],[1,"sign-up-role"],["formControlName","role",3,"selectionChange"],["class","sign-up-mail",4,"ngIf"],["class","sign-up-password",4,"ngIf"],[1,"sign-up-btn"],["type","submit",3,"disabled"],[3,"value"],[1,"sign-up-mail"],["matInput","","formControlName","email"],[1,"sign-up-password"],["matInput","","formControlName","password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._uU(3,"Registration"),t.qZA(),t.TgZ(4,"div",3)(5,"form",4),t.NdJ("ngSubmit",function(){return o.onFormSubmit()}),t.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Full Name"),t.qZA(),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"mat-form-field",8)(12,"mat-label"),t._uU(13,"Site"),t.qZA(),t.TgZ(14,"mat-select",9),t.NdJ("selectionChange",function(l){return o.getProject(l.value)}),t.YNc(15,_,2,2,"mat-option",10),t.qZA()(),t.TgZ(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Project"),t.qZA(),t.TgZ(19,"mat-select",12),t.YNc(20,O,2,2,"mat-option",10),t.qZA()(),t.TgZ(21,"mat-form-field",13)(22,"mat-label"),t._uU(23,"User Role"),t.qZA(),t.TgZ(24,"mat-select",14),t.NdJ("selectionChange",function(l){return o.getUserRole(l.value)}),t.YNc(25,M,2,2,"mat-option",10),t.qZA()(),t.YNc(26,T,4,0,"mat-form-field",15),t.YNc(27,w,7,4,"mat-form-field",16),t.qZA(),t.TgZ(28,"div",17)(29,"button",18),t._uU(30,"Register"),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.signUp),t.xp6(10),t.Q6J("ngForOf",o.sitesDropDown),t.xp6(5),t.Q6J("ngForOf",o.projectsDropDown),t.xp6(5),t.Q6J("ngForOf",o.rolesDropDown),t.xp6(1),t.Q6J("ngIf","agent"!==o.userRole),t.xp6(1),t.Q6J("ngIf","agent"!==o.userRole),t.xp6(2),t.Q6J("disabled",!o.signUp.valid))},dependencies:[u.sg,u.O5,p.KE,p.hX,p.R9,d.gD,Z.ey,f.Hw,h.Nt,C.RK,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".user-registration-container[_ngcontent-%COMP%]{width:100%;height:calc(100% - 50px)}.user-registration-container[_ngcontent-%COMP%]   .user-registration-content[_ngcontent-%COMP%]{position:relative;margin:50px auto;padding:2% 5%;height:1000px;width:600px;background-color:var(--backGround);border:3px solid var(--gold);box-sizing:border-box;border-radius:10px}.user-registration-container[_ngcontent-%COMP%]   .user-registration-content[_ngcontent-%COMP%]   .user-registration-title[_ngcontent-%COMP%]{margin:0 auto;width:80%;height:20px;border-bottom:2px solid var(--darkWhite)!important;color:var(--darkWhite);font-size:20px;display:flex;justify-content:space-around}.user-registration-container[_ngcontent-%COMP%]   .sign-up-inputs[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;justify-content:space-between}.user-registration-container[_ngcontent-%COMP%]   .sign-up-inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:var(--white)}.user-registration-container[_ngcontent-%COMP%]   .sign-up-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--white)}.user-registration-container[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]{width:100%;height:50px;margin-top:30px;display:flex;justify-content:center;align-items:center}.user-registration-container[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%);height:50px;width:200px;border:none;font-weight:500;border-radius:5px;font-size:18px;cursor:pointer;color:var(--white);background-color:var(--darkBlue);border:2px solid var(--gold)}.user-registration-container[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--MoreDarkBlue);transition:all .3s}.user-registration-container[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{border:none;background-color:var(--darkGray);cursor:auto}.showmodal[_ngcontent-%COMP%]{z-index:12}"]}),n})()}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]}),n})();var N=r(3271);let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,j,d.LD,f.Ps,h.c,C.ot,i.UX,N.G]}),n})()}}]);