"use strict";(self.webpackChunkassets_app=self.webpackChunkassets_app||[]).push([[89],{1089:(b,c,n)=>{n.r(c),n.d(c,{AllSelDevicesModule:()=>C});var v=n(6814),r=n(1896),m=n(5313),u=n(3519),d=n.n(u),l=n(5879),g=n(2016),h=n(8065),p=n(4531);const S=[{path:"",component:(()=>{class t{constructor(e,o,s,i){this._stSelDeviceService=e,this._tokenDecoderValidatorService=o,this._router=s,this._actvieRoute=i,this.displayedColumns=["brand","model","site","quantity","updatedAt","edit","delete"],this.columnLabels={brand:"Brand",model:"Model",site:"Site",quantity:"Quantity",updatedAt:"Created At",edit:"Edit",delete:"Delete"},this.jwtToken=this._tokenDecoderValidatorService.isToken(),this.allSelDevFromStorage=[],this.dataSource=new m.by}ngOnInit(){this.handleRoute()}allSelectedDeviceFromSorage(){""!=this.jwtToken&&this._stSelDeviceService.getAllSelDeviceFromStorage(this.jwtToken,this.selDevice).subscribe(e=>{200===e.statusCode&&(this.allSelDevFromStorage=e.content,this.dataSource.data=this.allSelDevFromStorage)},e=>{d().fire({icon:"error",title:"Oops...",text:e.error.message})})}deleteItem(e){d().fire({title:"Are you sure?",icon:"question",showCancelButton:!0,confirmButtonColor:"#b168a7",cancelButtonColor:"#689ab1",confirmButtonText:"Delete"}).then(o=>{o.isConfirmed&&"_id"in e&&this._stSelDeviceService.deleteSelDeviceFromStorage(this.jwtToken,this.selDevice,e._id).subscribe(s=>{200===s.statusCode&&(d().fire({position:"center",icon:"success",title:s.message,showConfirmButton:!1,timer:1500}),this.allSelectedDeviceFromSorage())},s=>{d().fire({icon:"error",title:"Oops...",text:s.error.message})})})}editItem(e){"_id"in e&&this._router.navigate(["main/storage/edit-selected-devices"],{queryParams:{selDev:this.selDevice},fragment:e._id})}navigateAddNewDevice(){this._router.navigate(["main/storage/new-selected-devices"],{queryParams:{selDev:this.selDevice}})}handleRoute(){this._actvieRoute.queryParams.subscribe(e=>{const o=e.selDev;o&&(this.selDevice=o.slice(0,-1),this.allSelectedDeviceFromSorage())})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(g.n),l.Y36(h.a),l.Y36(r.F0),l.Y36(r.gz))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-all-sel-devices"]],decls:6,vars:4,consts:[[1,"all-sel-dev-from-storage"],[1,"all-sel-dev-from-storage-header"],[1,"add-new-device-btn",3,"click"],[1,"all-sel-dev-from-storage-table"],[3,"displayedColumns","columnLabels","dataSource","allEquipment","deleteItem","editItem"]],template:function(e,o){1&e&&(l.TgZ(0,"div",0)(1,"div",1)(2,"button",2),l.NdJ("click",function(){return o.navigateAddNewDevice()}),l._uU(3," Add New "),l.qZA()(),l.TgZ(4,"div",3)(5,"app-table",4),l.NdJ("deleteItem",function(i){return o.deleteItem(i)})("editItem",function(i){return o.editItem(i)}),l.qZA()()()),2&e&&(l.xp6(5),l.Q6J("displayedColumns",o.displayedColumns)("columnLabels",o.columnLabels)("dataSource",o.dataSource)("allEquipment",o.allSelDevFromStorage))},dependencies:[p.a],styles:[".all-sel-dev-from-storage[_ngcontent-%COMP%]{height:100%;width:100%}.all-sel-dev-from-storage[_ngcontent-%COMP%]   .all-sel-dev-from-storage-header[_ngcontent-%COMP%]{width:100%;height:60px;display:flex;align-items:center;background-color:var(--backGround);border-bottom:4px solid var(--gold)}.all-sel-dev-from-storage[_ngcontent-%COMP%]   .all-sel-dev-from-storage-header[_ngcontent-%COMP%]   .add-new-device-btn[_ngcontent-%COMP%]{margin-left:20px;height:35px;width:120px;border:2px solid var(--gold);border-radius:10px;font-size:12px;cursor:pointer;color:var(--white);background-color:var(--MoreDarkBlue)}.all-sel-dev-from-storage[_ngcontent-%COMP%]   .all-sel-dev-from-storage-header[_ngcontent-%COMP%]   .add-new-device-btn[_ngcontent-%COMP%]:hover{background-color:var(--darkBlue);transition:all .3s}.all-sel-dev-from-storage[_ngcontent-%COMP%]   .all-sel-dev-from-storage-header[_ngcontent-%COMP%]   .add-new-device-btn[_ngcontent-%COMP%]:disabled{background-color:var(--darkGray)}.all-sel-dev-from-storage[_ngcontent-%COMP%]   .all-sel-dev-from-storage-table[_ngcontent-%COMP%]{height:calc(100% - 60px)}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[r.Bz.forChild(S),r.Bz]}),t})();var D=n(8389);let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[v.ez,f,D.U]}),t})()}}]);