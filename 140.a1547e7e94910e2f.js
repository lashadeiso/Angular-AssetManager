"use strict";(self.webpackChunkassets_app=self.webpackChunkassets_app||[]).push([[140],{6140:(x,u,d)=>{d.r(u),d.d(u,{EditSelDeviceModule:()=>_});var g=d(6814),a=d(1896),f=d(4825),D=d(3519),v=d.n(D),e=d(5879),S=d(8065),M=d(2016),C=d(8372),m=d(9157),p=d(8525),b=d(3680),h=d(2032),c=d(6223);function O(i,s){if(1&i&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const T=[{path:"",component:(()=>{class i{constructor(t,n,r,l,o){this._tokenDecoderValidatorService=t,this._stSelDeviceService=n,this._actvieRoute=r,this._router=l,this._selectBoxHttpService=o,this.updatedSelectedDevice={_id:"",brand:"",model:"",site:"",quantity:0,createdAt:"",updatedAt:""},this.jwtToken=this._tokenDecoderValidatorService.isToken(),this.selectedDeviceId=this._actvieRoute.snapshot.fragment}ngOnInit(){this.handleRoute()}editSelectDevice(){""!=this.jwtToken&&this.selectedDeviceId&&this._stSelDeviceService.editSelDeviceFromStorage(this.jwtToken,this.selDevice,this.selectedDeviceId).subscribe(t=>{200===t.statusCode&&(this.updatedSelectedDevice=t.content,this.getSite())},t=>{v().fire({icon:"error",title:"Oops...",text:t.error.message})})}onFormSubmit(t){""!=this.jwtToken&&this.selectedDeviceId&&this._stSelDeviceService.updateSelDeviceFromStorage(this.jwtToken,this.selDevice,t.value,this.selectedDeviceId).subscribe(n=>{200===n.statusCode&&(v().fire({position:"center",icon:"success",title:"User has been updated",showConfirmButton:!1,timer:1500}),(0,f.H)(1500).subscribe(()=>{this._router.navigate(["main/storage/all-selected-devices"],{queryParams:{selDev:this.selDevice+"s"}})}))},n=>{v().fire({icon:"error",title:"Oops...",text:n.error.message})})}getSite(){""!=this.jwtToken&&this._selectBoxHttpService.getBrandAndSite(this.jwtToken,this.selDevice).subscribe(t=>{200===t.statusCode&&(this.sitesDropDown=t.content.site)},t=>{v().fire({icon:"error",title:"Oops...",text:t.error.message})})}handleRoute(){this._actvieRoute.queryParams.subscribe(t=>{const n=t.selDev;n&&(this.selDevice=n,this.editSelectDevice())})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(S.a),e.Y36(M.n),e.Y36(a.gz),e.Y36(a.F0),e.Y36(C.I))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-edit-sel-device"]],decls:29,vars:6,consts:[[1,"edit-selected-device-container"],[1,"edit-selected-device-header"],[1,"edit-selected-device-content"],[1,"edit-selected-device-title"],[1,"edit-selected-device-body"],[1,"edit-selected-device-form",3,"ngSubmit"],["editSelectedDeviceFromStorage","ngForm"],[1,"edit-selected-device-inputs"],[1,"edit-selected-device-brand"],["matInput","","name","brand","required","",3,"ngModel","ngModelChange"],[1,"edit-selected-device-model"],["matInput","","name","model","required","",3,"ngModel","ngModelChange"],[1,"edit-selected-device-site"],["name","site","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"edit-selected-device-quantity"],["matInput","","name","quantity","required","","type","number",3,"ngModel","ngModelChange"],[1,"edit-selected-device-btn"],["type","submit",3,"disabled"],[3,"value"]],template:function(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3),e._uU(4,"Edit Selected Device"),e.qZA(),e.TgZ(5,"div",4)(6,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(r);const o=e.MAs(7);return e.KtG(n.onFormSubmit(o))}),e.TgZ(8,"div",7)(9,"mat-form-field",8)(10,"mat-label"),e._uU(11,"Brand"),e.qZA(),e.TgZ(12,"input",9),e.NdJ("ngModelChange",function(o){return n.updatedSelectedDevice.brand=o}),e.qZA()(),e.TgZ(13,"mat-form-field",10)(14,"mat-label"),e._uU(15,"Model"),e.qZA(),e.TgZ(16,"input",11),e.NdJ("ngModelChange",function(o){return n.updatedSelectedDevice.model=o}),e.qZA()(),e.TgZ(17,"mat-form-field",12)(18,"mat-label"),e._uU(19,"Site"),e.qZA(),e.TgZ(20,"mat-select",13),e.NdJ("ngModelChange",function(o){return n.updatedSelectedDevice.site=o}),e.YNc(21,O,2,2,"mat-option",14),e.qZA()(),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"Quantity"),e.qZA(),e.TgZ(25,"input",16),e.NdJ("ngModelChange",function(o){return n.updatedSelectedDevice.quantity=o}),e.qZA()(),e.TgZ(26,"div",17)(27,"button",18),e._uU(28," Submit "),e.qZA()()()()()()()}if(2&t){const r=e.MAs(7);e.xp6(12),e.Q6J("ngModel",n.updatedSelectedDevice.brand),e.xp6(4),e.Q6J("ngModel",n.updatedSelectedDevice.model),e.xp6(4),e.Q6J("ngModel",n.updatedSelectedDevice.site),e.xp6(1),e.Q6J("ngForOf",n.sitesDropDown),e.xp6(4),e.Q6J("ngModel",n.updatedSelectedDevice.quantity),e.xp6(2),e.Q6J("disabled",!r.valid)}},dependencies:[g.sg,m.KE,m.hX,p.gD,b.ey,h.Nt,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.On,c.F],styles:[".edit-selected-device-container[_ngcontent-%COMP%]{width:100%;height:100%}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-header[_ngcontent-%COMP%]{width:100%;height:60px;display:flex;align-items:center;background-color:var(--backGround);border-bottom:4px solid var(--gold)}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-content[_ngcontent-%COMP%]{position:relative;margin:50px auto;padding:2% 5%;height:1000px;width:600px;background-color:var(--backGround);border:3px solid var(--gold);box-sizing:border-box;border-radius:10px}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-content[_ngcontent-%COMP%]   .edit-selected-device-title[_ngcontent-%COMP%]{margin:0 auto;width:80%;height:20px;border-bottom:2px solid var(--darkWhite)!important;color:var(--darkWhite);font-size:20px;display:flex;justify-content:space-around}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-inputs[_ngcontent-%COMP%]{height:150px;margin-top:50px;display:flex;flex-direction:column;justify-content:space-between}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:var(--white)}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--white)}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%);height:50px;width:200px;border:none;font-weight:500;border-radius:5px;font-size:18px;cursor:pointer;color:var(--white);background-color:var(--darkBlue);border:2px solid var(--gold)}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--MoreDarkBlue);transition:all .3s}.edit-selected-device-container[_ngcontent-%COMP%]   .edit-selected-device-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{border:none;background-color:var(--darkGray);cursor:auto}"]}),i})()}];let P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(T),a.Bz]}),i})(),_=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,P,p.LD,h.c,c.u5]}),i})()}}]);