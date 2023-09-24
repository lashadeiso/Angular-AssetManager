"use strict";(self.webpackChunkassets_app=self.webpackChunkassets_app||[]).push([[296],{2296:(T,f,r)=>{r.d(f,{RK:()=>F,ot:()=>z});var b=r(2831),a=r(5879),x=r(5643),c=r(3680),_=r(6814);const h=["mat-icon-button",""],v=["*"],s={capture:!0},p=["focus","click","mouseenter","touchstart"],l="mat-button-ripple-uninitialized";let M=(()=>{class n{constructor(){this._document=(0,a.f3M)(_.K0,{optional:!0}),this._animationMode=(0,a.f3M)(a.QbO,{optional:!0}),this._globalRippleOptions=(0,a.f3M)(c.Y2,{optional:!0}),this._platform=(0,a.f3M)(b.t4),this._ngZone=(0,a.f3M)(a.R0b),this._onInteraction=t=>{if(t.target===this._document)return;const i=t.target.closest(`[${l}]`);i&&(i.removeAttribute(l),this._appendRipple(i))},this._ngZone.runOutsideAngular(()=>{for(const t of p)this._document?.addEventListener(t,this._onInteraction,s)})}ngOnDestroy(){for(const t of p)this._document?.removeEventListener(t,this._onInteraction,s)}_appendRipple(t){if(!this._document)return;const e=this._document.createElement("span");e.classList.add("mat-mdc-button-ripple");const i=new y(t,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);i.rippleConfig.centered=t.hasAttribute("mat-icon-button"),new c.IR(i,this._ngZone,e,this._platform).setupTriggerEvents(t),t.append(e)}_createMatRipple(t){if(!this._document)return;t.querySelector(".mat-mdc-button-ripple")?.remove(),t.removeAttribute(l);const e=this._document.createElement("span");e.classList.add("mat-mdc-button-ripple");const i=new c.wG(new a.SBq(e),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return i._isInitialized=!0,i.trigger=t,t.append(e),i}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class y{constructor(o,t,e){this._button=o,this._globalRippleOptions=t,this._setRippleConfig(t,e)}_setRippleConfig(o,t){this.rippleConfig=o||{},"NoopAnimations"===t&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0})}get rippleDisabled(){return this._button.hasAttribute("disabled")||!!this._globalRippleOptions?.disabled}}const w=[{selector:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{selector:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{selector:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{selector:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{selector:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{selector:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{selector:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],A=(0,c.pj)((0,c.Id)((0,c.Kr)(class{constructor(n){this._elementRef=n}})));let I=(()=>{class n extends A{get ripple(){return!this._ripple&&this._rippleLoader&&(this._ripple=this._rippleLoader._createMatRipple(this._elementRef.nativeElement)),this._ripple}set ripple(t){this._ripple=t}constructor(t,e,i,d){super(t),this._platform=e,this._ngZone=i,this._animationMode=d,this._focusMonitor=(0,a.f3M)(x.tE),this._rippleLoader=(0,a.f3M)(M),this._isFab=!1;const m=t.nativeElement.classList;for(const u of w)this._hasHostAttributes(u.selector)&&u.mdcClasses.forEach(E=>{m.add(E)})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnChanges(){this._ripple&&(this._ripple.disabled=this.disableRipple||this.disabled)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_hasHostAttributes(...t){return t.some(e=>this._elementRef.nativeElement.hasAttribute(e))}}return n.\u0275fac=function(t){a.$Z()},n.\u0275dir=a.lG2({type:n,features:[a.qOj,a.TTD]}),n})(),F=(()=>{class n extends I{get ripple(){return!this._ripple&&this._rippleLoader&&(this._ripple=this._rippleLoader._createMatRipple(this._elementRef.nativeElement),this._ripple.centered=!0),this._ripple}constructor(t,e,i,d){super(t,e,i,d)}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(a.SBq),a.Y36(b.t4),a.Y36(a.R0b),a.Y36(a.QbO,8))},n.\u0275cmp=a.Xpm({type:n,selectors:[["button","mat-icon-button",""]],hostAttrs:["mat-button-ripple-uninitialized",""],hostVars:7,hostBindings:function(t,e){2&t&&(a.uIk("disabled",e.disabled||null),a.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-unthemed",!e.color)("mat-mdc-button-base",!0))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[a.qOj],attrs:h,ngContentSelectors:v,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,e){1&t&&(a.F$t(),a._UZ(0,"span",0),a.Hsn(1),a._UZ(2,"span",1)(3,"span",2))},styles:['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{height:var(--mdc-icon-button-state-layer-size);width:var(--mdc-icon-button-state-layer-size);color:var(--mdc-icon-button-icon-color);--mdc-icon-button-state-layer-size:48px;--mdc-icon-button-icon-size:24px;--mdc-icon-button-disabled-icon-color:black;--mdc-icon-button-disabled-icon-opacity:0.38}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{opacity:var(--mdc-icon-button-disabled-icon-opacity)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{padding:12px;font-size:var(--mdc-icon-button-icon-size);border-radius:50%;flex-shrink:0;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled]{cursor:default;pointer-events:none;opacity:1}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[c.BQ,c.si,c.BQ]}),n})()}}]);