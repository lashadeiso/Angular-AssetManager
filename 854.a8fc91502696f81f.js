"use strict";(self.webpackChunkassets_app=self.webpackChunkassets_app||[]).push([[854],{3987:(P,h,r)=>{r.r(h),r.d(h,{EditOwnerOfSelDevModule:()=>N});var u=r(6814),m=r(1896),b=r(4825),T=r(3519),w=r.n(T),e=r(5879),E=r(8065),x=r(8420),D=r(8372),p=r(9157),f=r(8525),C=r(3680),O=r(2032),a=r(6223);function c(o,s){if(1&o&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function _(o,s){if(1&o&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function M(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-form-field",29)(1,"mat-label"),e._uU(2,"Host Name"),e.qZA(),e.TgZ(3,"input",30),e.NdJ("ngModelChange",function(d){e.CHM(t);const l=e.oxw();return e.KtG(l.OwnerOfSelDev.hostname=d)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.OwnerOfSelDev.hostname)}}function S(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-form-field",31)(1,"mat-label"),e._uU(2,"Mac Address"),e.qZA(),e.TgZ(3,"input",32),e.NdJ("ngModelChange",function(d){e.CHM(t);const l=e.oxw();return e.KtG(l.OwnerOfSelDev.macAddress=d)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.OwnerOfSelDev.macAddress)}}function g(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-form-field",33)(1,"mat-label"),e._uU(2,"Asset Number"),e.qZA(),e.TgZ(3,"input",34),e.NdJ("ngModelChange",function(d){e.CHM(t);const l=e.oxw();return e.KtG(l.OwnerOfSelDev.assetNumber=d)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.OwnerOfSelDev.assetNumber)}}function v(o,s){if(1&o&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function Z(o,s){if(1&o&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function A(o,s){if(1&o&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const j=[{path:"",component:(()=>{class o{constructor(t,n,d,l,i){this._tokenDecoderValidatorService=t,this._actvieRoute=n,this._prSelDeviceService=d,this._selectBoxHttpService=l,this._router=i,this.OwnerOfSelDev=this.initializeOwnerOfSelDev(),this.jwtToken=this._tokenDecoderValidatorService.isToken(),this.serialNumber=this._actvieRoute.snapshot.fragment}ngOnInit(){this.handleRoute()}initializeOwnerOfSelDev(){const t={_id:"",serialNumber:"",brand:"",model:"",user:"",project:"",site:"",comment:"",author:"",createdAt:"",updatedAt:""};return"laptop"===this.selDevice||"windows-pc"===this.selDevice?t:{...t,hostname:"",macAddress:"",assetNumber:""}}editOwnerOfSelDev(){this.jwtToken&&this.serialNumber&&this._prSelDeviceService.OwnerOfSelDevice(this.jwtToken,this.selDevice,this.serialNumber).subscribe(t=>{200===t.statusCode&&(this.OwnerOfSelDev=t.content,this.getBrandAndSite())},t=>this.showError(t.error.message))}onFormSubmit(t){this.jwtToken&&this.serialNumber&&this._prSelDeviceService.UpdateOwnerOfSelDevice(this.jwtToken,this.selDevice,this.serialNumber,t.value).subscribe(n=>{200===n.statusCode&&(this.showSuccessMessage("User has been updated"),(0,b.H)(1500).subscribe(()=>{this.navigateToOwnersList()}))},n=>this.showError(n.error.message))}getBrandAndSite(){this.jwtToken&&this._selectBoxHttpService.getBrandAndSite(this.jwtToken,this.selDevice).subscribe(t=>{200===t.statusCode&&(this.brandsDropDown=t.content.brand,this.sitesDropDown=t.content.site,this.getProject(this.OwnerOfSelDev.site),this.getModelSelectBox(this.OwnerOfSelDev.brand))},t=>this.showError(t.error.message))}getProject(t){this.jwtToken&&this._selectBoxHttpService.getProjectSelectBox(this.jwtToken,t).subscribe(n=>{200===n.statusCode&&(this.projectsDropDowns=n.content.project,this.getUserSelectBox(this.OwnerOfSelDev.project))},n=>this.showError(n.error.message))}getModelSelectBox(t){this.jwtToken&&this._selectBoxHttpService.getModelSelectBox(this.jwtToken,this.selDevice,t).subscribe(n=>{200===n.statusCode&&(this.modelsDropDown=n.content.model)},n=>this.showError(n.error.message))}getUserSelectBox(t){this.jwtToken&&this._selectBoxHttpService.getUserSelectBox(this.jwtToken,this.selDevice,t).subscribe(n=>{200===n.statusCode&&(this.usersDropDowns=n.content.user)},n=>this.showError(n.error.message))}handleRoute(){this._actvieRoute.queryParams.subscribe(t=>{const n=t.selDev;n&&(this.selDevice=n,this.editOwnerOfSelDev())})}navigateToOwnersList(){this._router.navigate(["main/production/all-owners-of-sel-device"],{queryParams:{selDev:this.selDevice+"s"}})}showSuccessMessage(t){w().fire({position:"center",icon:"success",title:t,showConfirmButton:!1,timer:1500})}showError(t){w().fire({icon:"error",title:"Oops...",text:t})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(E.a),e.Y36(m.gz),e.Y36(x.t),e.Y36(D.I),e.Y36(m.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-owner-of-sel-dev"]],decls:48,vars:16,consts:[[1,"edit-owner-container"],[1,"edit-owner-header"],[1,"edit-owner-content"],[1,"edit-owner-title"],[1,"edit-owner-body"],[1,"edit-owner-form",3,"ngSubmit"],["editOwnerForm","ngForm"],[1,"edit-owner-inputs"],[1,"selected-device-serial-number"],["matInput","","name","serialNumber","required","",3,"ngModel","ngModelChange"],[1,"selected-device-brand"],["name","brand","required","",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"selected-device-model"],["name","model","required","",3,"ngModel","ngModelChange"],["class","selected-device-host-name",4,"ngIf"],["class","selected-device-mac-address",4,"ngIf"],["class","selected-device-asset-number",4,"ngIf"],[1,"owner-site"],["name","site","required","",3,"ngModel","ngModelChange","selectionChange"],[1,"owner-project"],["name","project","required","",3,"ngModel","ngModelChange","selectionChange"],[1,"edit-owner"],["name","user","required","",3,"ngModel","ngModelChange"],[1,"edit-comment"],["matInput","","name","comment",3,"ngModel","ngModelChange"],[1,"edit-owner-btn"],["type","submit",3,"disabled"],[3,"value"],[1,"selected-device-host-name"],["matInput","","name","hostname","required","",3,"ngModel","ngModelChange"],[1,"selected-device-mac-address"],["matInput","","name","macAddress","required","",3,"ngModel","ngModelChange"],[1,"selected-device-asset-number"],["matInput","","name","assetNumber","required","",3,"ngModel","ngModelChange"]],template:function(t,n){if(1&t){const d=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3),e._uU(4,"Edit"),e.qZA(),e.TgZ(5,"div",4)(6,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(d);const i=e.MAs(7);return e.KtG(n.onFormSubmit(i))}),e.TgZ(8,"div",7)(9,"mat-form-field",8)(10,"mat-label"),e._uU(11,"Serial Number"),e.qZA(),e.TgZ(12,"input",9),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.serialNumber=i}),e.qZA()(),e.TgZ(13,"mat-form-field",10)(14,"mat-label"),e._uU(15,"Brand"),e.qZA(),e.TgZ(16,"mat-select",11),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.brand=i})("selectionChange",function(i){return n.getModelSelectBox(i.value)}),e.YNc(17,c,2,2,"mat-option",12),e.qZA()(),e.TgZ(18,"mat-form-field",13)(19,"mat-label"),e._uU(20,"Model"),e.qZA(),e.TgZ(21,"mat-select",14),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.model=i}),e.YNc(22,_,2,2,"mat-option",12),e.qZA()(),e.YNc(23,M,4,1,"mat-form-field",15),e.YNc(24,S,4,1,"mat-form-field",16),e.YNc(25,g,4,1,"mat-form-field",17),e.TgZ(26,"mat-form-field",18)(27,"mat-label"),e._uU(28,"Site"),e.qZA(),e.TgZ(29,"mat-select",19),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.site=i})("selectionChange",function(i){return n.getProject(i.value)}),e.YNc(30,v,2,2,"mat-option",12),e.qZA()(),e.TgZ(31,"mat-form-field",20)(32,"mat-label"),e._uU(33,"Project"),e.qZA(),e.TgZ(34,"mat-select",21),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.project=i})("selectionChange",function(i){return n.getUserSelectBox(i.value)}),e.YNc(35,Z,2,2,"mat-option",12),e.qZA()(),e.TgZ(36,"mat-form-field",22)(37,"mat-label"),e._uU(38,"Owner"),e.qZA(),e.TgZ(39,"mat-select",23),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.user=i}),e.YNc(40,A,2,2,"mat-option",12),e.qZA()(),e.TgZ(41,"mat-form-field",24)(42,"mat-label"),e._uU(43,"Comment"),e.qZA(),e.TgZ(44,"textarea",25),e.NdJ("ngModelChange",function(i){return n.OwnerOfSelDev.comment=i}),e.qZA()(),e.TgZ(45,"div",26)(46,"button",27),e._uU(47," Submit "),e.qZA()()()()()()()}if(2&t){const d=e.MAs(7);e.xp6(12),e.Q6J("ngModel",n.OwnerOfSelDev.serialNumber),e.xp6(4),e.Q6J("ngModel",n.OwnerOfSelDev.brand),e.xp6(1),e.Q6J("ngForOf",n.brandsDropDown),e.xp6(4),e.Q6J("ngModel",n.OwnerOfSelDev.model),e.xp6(1),e.Q6J("ngForOf",n.modelsDropDown),e.xp6(1),e.Q6J("ngIf","laptop"===n.selDevice||"windows-pc"===n.selDevice),e.xp6(1),e.Q6J("ngIf","laptop"===n.selDevice||"windows-pc"===n.selDevice),e.xp6(1),e.Q6J("ngIf","laptop"===n.selDevice||"windows-pc"===n.selDevice),e.xp6(4),e.Q6J("ngModel",n.OwnerOfSelDev.site),e.xp6(1),e.Q6J("ngForOf",n.sitesDropDown),e.xp6(4),e.Q6J("ngModel",n.OwnerOfSelDev.project),e.xp6(1),e.Q6J("ngForOf",n.projectsDropDowns),e.xp6(4),e.Q6J("ngModel",n.OwnerOfSelDev.user),e.xp6(1),e.Q6J("ngForOf",n.usersDropDowns),e.xp6(4),e.Q6J("ngModel",n.OwnerOfSelDev.comment),e.xp6(2),e.Q6J("disabled",!d.valid)}},dependencies:[u.sg,u.O5,p.KE,p.hX,f.gD,C.ey,O.Nt,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F],styles:[".edit-owner-container[_ngcontent-%COMP%]{width:100%;height:100%}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-header[_ngcontent-%COMP%]{width:100%;height:60px;display:flex;align-items:center;background-color:var(--backGround);border-bottom:4px solid var(--gold)}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-header[_ngcontent-%COMP%]   .back-to-prev-page-btn[_ngcontent-%COMP%]{margin-left:20px;height:35px;width:120px;border:2px solid var(--gold);border-radius:10px;font-size:12px;cursor:pointer;color:var(--white);background-color:var(--MoreDarkBlue)}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-header[_ngcontent-%COMP%]   .back-to-prev-page-btn[_ngcontent-%COMP%]:hover{background-color:var(--darkBlue);transition:all .3s}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-header[_ngcontent-%COMP%]   .back-to-prev-page-btn[_ngcontent-%COMP%]:disabled{background-color:var(--darkGray)}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-content[_ngcontent-%COMP%]{position:relative;margin:50px auto;padding:2% 5%;height:1000px;width:600px;background-color:var(--backGround);border:3px solid var(--gold);box-sizing:border-box;border-radius:10px}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-content[_ngcontent-%COMP%]   .edit-owner-title[_ngcontent-%COMP%]{margin:0 auto;width:80%;height:20px;border-bottom:2px solid var(--darkWhite)!important;color:var(--darkWhite);font-size:20px;display:flex;justify-content:space-around}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-inputs[_ngcontent-%COMP%]{height:150px;margin-top:50px;display:flex;flex-direction:column;justify-content:space-between}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:var(--white)}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--white)}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%);height:50px;width:200px;border:none;font-weight:500;border-radius:5px;font-size:18px;cursor:pointer;color:var(--white);background-color:var(--darkBlue);border:2px solid var(--gold)}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--MoreDarkBlue);transition:all .3s}.edit-owner-container[_ngcontent-%COMP%]   .edit-owner-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{border:none;background-color:var(--darkGray);cursor:auto}"]}),o})()}];let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(j),m.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,J,f.LD,O.c,a.u5]}),o})()},9315:(P,h,r)=>{r.d(h,{D:()=>x});var u=r(5592),m=r(7453),b=r(4829),T=r(9940),w=r(8251),e=r(7400),E=r(2714);function x(...D){const p=(0,T.jO)(D),{args:f,keys:C}=(0,m.D)(D),O=new u.y(a=>{const{length:c}=f;if(!c)return void a.complete();const _=new Array(c);let M=c,S=c;for(let g=0;g<c;g++){let v=!1;(0,b.Xf)(f[g]).subscribe((0,w.x)(a,Z=>{v||(v=!0,S--),_[g]=Z},()=>M--,void 0,()=>{(!M||!v)&&(S||a.next(C?(0,E.n)(C,_):_),a.complete())}))}});return p?O.pipe((0,e.Z)(p)):O}}}]);