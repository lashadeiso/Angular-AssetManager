"use strict";(self.webpackChunkassets_app=self.webpackChunkassets_app||[]).push([[660],{7871:(x,h,i)=>{i.r(h),i.d(h,{NewOwnerOfSelDevModule:()=>I});var w=i(6814),f=i(1896),r=i(6223),N=i(4825),Z=i(3519),l=i.n(Z),e=i(5879),T=i(8372),D=i(8065),_=i(8420),p=i(9157),v=i(8525),C=i(3680),a=i(2032);function c(n,s){if(1&n&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function O(n,s){if(1&n&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function b(n,s){1&n&&(e.TgZ(0,"mat-form-field",26)(1,"mat-label"),e._uU(2,"Host Name"),e.qZA(),e._UZ(3,"input",27),e.qZA())}function S(n,s){1&n&&(e.TgZ(0,"mat-form-field",28)(1,"mat-label"),e._uU(2,"Mac Address"),e.qZA(),e._UZ(3,"input",29),e.qZA())}function u(n,s){1&n&&(e.TgZ(0,"mat-form-field",30)(1,"mat-label"),e._uU(2,"Asset Number"),e.qZA(),e._UZ(3,"input",31),e.qZA())}function g(n,s){if(1&n&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function M(n,s){if(1&n&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function A(n,s){if(1&n&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const P=[{path:"",component:(()=>{class n{constructor(t,o,m,d,U){this._selectBoxHttpService=t,this._tokenDecoderValidatorService=o,this._prSelDeviceService=m,this._router=d,this._actvieRoute=U,this.brandsDropDown=[],this.modelsDropDown=[],this.sitesDropDown=[],this.projectsDropDown=[],this.jwtToken=this._tokenDecoderValidatorService.isToken()}ngOnInit(){this.handleRoute()}initForm(){this.newOwnerOfSelDev=new r.cw({serialNumber:new r.NI(null,[r.kI.required]),brand:new r.NI(null,[r.kI.required]),model:new r.NI({value:null,disabled:!0},[r.kI.required]),site:new r.NI(null,[r.kI.required]),project:new r.NI({value:null,disabled:!0},[r.kI.required]),user:new r.NI({value:null,disabled:!0},[r.kI.required]),comment:new r.NI}),("laptop"===this.selDevice||"windows-pc"===this.selDevice)&&(this.newOwnerOfSelDev.addControl("hostname",new r.NI(null)),this.newOwnerOfSelDev.addControl("macAddress",new r.NI(null)),this.newOwnerOfSelDev.addControl("assetNumber",new r.NI(null))),"monitor"===this.selDevice&&this.newOwnerOfSelDev.addControl("assetNumber",new r.NI(null)),this.getBrandAndSite(),this.dependerValidator("brand","model"),this.dependerValidator("site","project"),this.dependerValidator("project","user")}onFormSubmit(){this.newOwnerOfSelDev.valid&&(console.log(this.newOwnerOfSelDev.value),""!=this.jwtToken&&this._prSelDeviceService.addNewOwnerOfSelDevice(this.jwtToken,this.selDevice,this.newOwnerOfSelDev.value).subscribe(t=>{201==t.statusCode&&(l().fire({position:"center",icon:"success",title:"User has been added",showConfirmButton:!1,timer:1e3}),(0,N.H)(1e3).subscribe(()=>{this._router.navigate(["/main/production/all-owners-of-sel-device"],{queryParams:{selDev:this.selDevice+"s"}})}))},t=>{l().fire({icon:"error",title:"Oops...",text:t.error.message})}))}dependerValidator(t,o){this.newOwnerOfSelDev.get(t)?.valueChanges.subscribe(m=>{m?this.newOwnerOfSelDev.get(o)?.enable():this.newOwnerOfSelDev.get(o)?.disable()})}getBrandAndSite(){""!=this.jwtToken&&this._selectBoxHttpService.getBrandAndSite(this.jwtToken,this.selDevice).subscribe(t=>{200===t.statusCode&&(this.brandsDropDown=t.content.brand,this.sitesDropDown=t.content.site)},t=>{l().fire({icon:"error",title:"Oops...",text:t.error.message})})}getModelSelectBox(t){""!=this.jwtToken&&this._selectBoxHttpService.getModelSelectBox(this.jwtToken,this.selDevice,t).subscribe(o=>{200===o.statusCode&&(this.modelsDropDown=o.content.model)},o=>{l().fire({icon:"error",title:"Oops...",text:o.error.message})})}getProjectSelectBox(t){""!=this.jwtToken&&this._selectBoxHttpService.getProjectSelectBox(this.jwtToken,t).subscribe(o=>{200===o.statusCode&&(this.projectsDropDown=o.content.project)},o=>{l().fire({icon:"error",title:"Oops...",text:o.error.message})})}getUserSelectBox(t){""!=this.jwtToken&&this._selectBoxHttpService.getUserSelectBox(this.jwtToken,this.selDevice,t).subscribe(o=>{200===o.statusCode&&(this.usersFullNamesDropDown=o.content.user)},o=>{l().fire({icon:"error",title:"Oops...",text:o.error.message})})}handleRoute(){this._actvieRoute.queryParams.subscribe(t=>{const o=t.selDev;o&&(this.selDevice=o,this.initForm())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.I),e.Y36(D.a),e.Y36(_.t),e.Y36(f.F0),e.Y36(f.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-owner-of-sel-dev"]],decls:46,vars:11,consts:[[1,"new-owner-of-sel-dev-container"],[1,"new-owner-of-sel-dev-content"],[1,"new-owner-of-sel-dev-title"],[1,"new-owner-of-sel-dev-body"],[1,"new-owner-of-sel-dev-form",3,"formGroup","ngSubmit"],[1,"new-owner-of-sel-dev-inputs"],[1,"sel-dev-serial-number"],["matInput","","formControlName","serialNumber"],[1,"sel-dev-brand"],["formControlName","brand",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"sel-dev-model"],["formControlName","model"],["class","sel-dev-host-name",4,"ngIf"],["class","sel-dev-mac-address",4,"ngIf"],["class","sel-dev-asset-number",4,"ngIf"],[1,"owner-site"],["formControlName","site",3,"selectionChange"],[1,"owner-project"],["formControlName","project",3,"selectionChange"],[1,"user-fullName"],["formControlName","user"],["matInput","","formControlName","comment"],[1,"owner-sign-up-btn"],["type","submit",3,"disabled"],[3,"value"],[1,"sel-dev-host-name"],["matInput","","formControlName","hostname"],[1,"sel-dev-mac-address"],["matInput","","formControlName","macAddress"],[1,"sel-dev-asset-number"],["matInput","","formControlName","assetNumber"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3)(5,"form",4),e.NdJ("ngSubmit",function(){return o.onFormSubmit()}),e.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Serial Number"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"mat-form-field",8)(12,"mat-label"),e._uU(13,"Brand"),e.qZA(),e.TgZ(14,"mat-select",9),e.NdJ("selectionChange",function(d){return o.getModelSelectBox(d.value)}),e.YNc(15,c,2,2,"mat-option",10),e.qZA()(),e.TgZ(16,"mat-form-field",11)(17,"mat-label"),e._uU(18,"Model"),e.qZA(),e.TgZ(19,"mat-select",12),e.YNc(20,O,2,2,"mat-option",10),e.qZA()(),e.YNc(21,b,4,0,"mat-form-field",13),e.YNc(22,S,4,0,"mat-form-field",14),e.YNc(23,u,4,0,"mat-form-field",15),e.TgZ(24,"mat-form-field",16)(25,"mat-label"),e._uU(26,"Site"),e.qZA(),e.TgZ(27,"mat-select",17),e.NdJ("selectionChange",function(d){return o.getProjectSelectBox(d.value)}),e.YNc(28,g,2,2,"mat-option",10),e.qZA()(),e.TgZ(29,"mat-form-field",18)(30,"mat-label"),e._uU(31,"Project"),e.qZA(),e.TgZ(32,"mat-select",19),e.NdJ("selectionChange",function(d){return o.getUserSelectBox(d.value)}),e.YNc(33,M,2,2,"mat-option",10),e.qZA()(),e.TgZ(34,"mat-form-field",20)(35,"mat-label"),e._uU(36,"User"),e.qZA(),e.TgZ(37,"mat-select",21),e.YNc(38,A,2,2,"mat-option",10),e.qZA()(),e.TgZ(39,"mat-form-field")(40,"mat-label"),e._uU(41,"Comment"),e.qZA(),e._UZ(42,"textarea",22),e.qZA()(),e.TgZ(43,"div",23)(44,"button",24),e._uU(45," Assign to "),e.qZA()()()()()()),2&t&&(e.xp6(3),e.hij("Owner of ",o.selDevice,""),e.xp6(2),e.Q6J("formGroup",o.newOwnerOfSelDev),e.xp6(10),e.Q6J("ngForOf",o.brandsDropDown),e.xp6(5),e.Q6J("ngForOf",o.modelsDropDown),e.xp6(1),e.Q6J("ngIf","headset"!==o.selDevice&&"monitor"!==o.selDevice),e.xp6(1),e.Q6J("ngIf","headset"!==o.selDevice&&"monitor"!==o.selDevice),e.xp6(1),e.Q6J("ngIf","headset"!==o.selDevice),e.xp6(5),e.Q6J("ngForOf",o.sitesDropDown),e.xp6(5),e.Q6J("ngForOf",o.projectsDropDown),e.xp6(5),e.Q6J("ngForOf",o.usersFullNamesDropDown),e.xp6(6),e.Q6J("disabled",!o.newOwnerOfSelDev.valid))},dependencies:[w.sg,w.O5,p.KE,p.hX,v.gD,C.ey,a.Nt,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".new-owner-of-sel-dev-container[_ngcontent-%COMP%]{width:100%;height:calc(100% - 50px)}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .new-owner-of-sel-dev-content[_ngcontent-%COMP%]{position:relative;margin:50px auto;padding:2% 5%;height:1000px;width:600px;background-color:var(--backGround);border:3px solid var(--gold);box-sizing:border-box;border-radius:10px}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .new-owner-of-sel-dev-content[_ngcontent-%COMP%]   .new-owner-of-sel-dev-title[_ngcontent-%COMP%]{margin:0 auto;width:80%;height:20px;border-bottom:2px solid var(--darkWhite)!important;color:var(--darkWhite);font-size:20px;display:flex;justify-content:space-around}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .new-owner-of-sel-dev-inputs[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;justify-content:space-between}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .new-owner-of-sel-dev-inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:var(--white)}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .new-owner-of-sel-dev-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--white)}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .owner-sign-up-btn[_ngcontent-%COMP%]{width:100%;height:50px;margin-top:30px;display:flex;justify-content:center;align-items:center}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .owner-sign-up-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%);height:50px;width:200px;border:none;font-weight:500;border-radius:5px;font-size:18px;cursor:pointer;color:var(--white);background-color:var(--darkBlue);border:2px solid var(--gold)}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .owner-sign-up-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--MoreDarkBlue);transition:all .3s}.new-owner-of-sel-dev-container[_ngcontent-%COMP%]   .owner-sign-up-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{border:none;background-color:var(--darkGray);cursor:auto}.showmodal[_ngcontent-%COMP%]{z-index:12}"]}),n})()}];let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(P),f.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[w.ez,j,v.LD,a.c,r.UX]}),n})()},9315:(x,h,i)=>{i.d(h,{D:()=>T});var w=i(5592),f=i(7453),r=i(4829),N=i(9940),Z=i(8251),l=i(7400),e=i(2714);function T(...D){const _=(0,N.jO)(D),{args:p,keys:v}=(0,f.D)(D),C=new w.y(a=>{const{length:c}=p;if(!c)return void a.complete();const O=new Array(c);let b=c,S=c;for(let u=0;u<c;u++){let g=!1;(0,r.Xf)(p[u]).subscribe((0,Z.x)(a,M=>{g||(g=!0,S--),O[u]=M},()=>b--,void 0,()=>{(!b||!g)&&(S||a.next(v?(0,e.n)(v,O):O),a.complete())}))}});return _?C.pipe((0,l.Z)(_)):C}}}]);