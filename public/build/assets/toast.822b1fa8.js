/* empty css                     */import{_ as r}from"./highlight.fd2f20f1.js";import{x as e,y as V,a5 as A,o as n,c,a2 as H,a as t,p as L,u as a,i as b,l as u,e as v,m as l,Y as E,aq as K}from"./app-setting.fefad6ec.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const O={class:"container"},q=t("ul",{class:"navbar-nav flex-row"},[t("li",null,[t("div",{class:"page-header"},[t("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item"},[t("a",{href:"javascript:;"},"Components")]),t("li",{class:"breadcrumb-item active","aria-current":"page"},[t("span",null,"Notifications")])])])])])],-1),Y={class:"container"},F={class:"nav sidenav"},G={class:"sidenav-content"},J=E('<a href="#toastBasic" class="nav-link">Basic</a><a href="#toastTopLeft" class="nav-link">Top Left</a><a href="#toastTopCenter" class="nav-link">Top Center</a><a href="#toastTopRight" class="nav-link">Top Right</a><a href="#toastBottomLeft" class="nav-link">Bottom Left</a><a href="#toastBottomCenter" class="nav-link">Bottom Center</a><a href="#toastBottomRight" class="nav-link">Bottom Right</a><a href="#toastNoAction" class="nav-link">No Action</a><a href="#toastActionText" class="nav-link">Action Text</a><a href="#toastTextColor" class="nav-link">Text Color</a><a href="#toastClickCallback" class="nav-link">Click Callback</a><a href="#toastDuration" class="nav-link">Duration</a><a href="#toastBackgroundColor" class="nav-link">Background Color</a>',13),Q=[J],U=E('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/toasts" class="text-info"> https://getbootstrap.com/docs/5.0/components/toasts </a></div></div></div>',1),X={class:"row layout-spacing layout-top-spacing"},Z={id:"toastBasic",class:"col-lg-12 col-12 position-relative layout-spacing"},tt={class:"statbox panel box box-shadow"},st=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Basic")])])],-1),ot={class:"panel-body"},et={style:{position:"absolute",top:"0",right:"0","z-index":"9999","margin-left":"20px","margin-right":"20px"}},at=E('<div class="toast-header"><strong class="me-auto">Bootstrap</strong><small class="me-2">just now</small><a href="javascript:;" data-bs-dismiss="toast" aria-label="Close" class="close">\xD7</a></div><div class="toast-body toast-primary">Hello, world! This is a toast message.</div>',2),it=[at],nt={class:"code-section-container show-code"},lt=t("span",null,"Code",-1),ct=[lt],dt={key:0,class:"code-section text-start"},rt=t("pre",null,`<button type="button" class="btn btn-primary" @click="toastBasic.show()">Open Toast</button>

<div style="position: absolute; top: 0; right: 0; z-index: 9999; margin-left: 20px; margin-right: 20px">
    <div ref="toastBasic" class="toast toast-primary" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Bootstrap</strong>
            <small class="me-2">just now</small>
            <a href="javascript:;" data-bs-dismiss="toast" aria-label="Close" class="close">\xD7</a>
        </div>
        <div class="toast-body toast-primary">Hello, world! This is a toast message.</div>
    </div>
</div>
`,-1),bt={id:"toastTopLeft",class:"col-lg-12 col-12 layout-spacing"},ut={class:"statbox panel box box-shadow"},vt=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Top Left")])])],-1),pt={class:"panel-body text-center"},mt=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),ft=[mt],_t={class:"code-section-container show-code"},xt=t("span",null,"Code",-1),ht=[xt],yt={key:0,class:"code-section text-start"},wt=t("pre",null,`<button type="button" class="btn btn-success" @click="toastTopLeft.show()">Top Left</button>

<div ref="toastTopLeft" class="toast position-fixed top-0 start-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),kt={id:"toastTopCenter",class:"col-lg-12 col-12 layout-spacing"},gt={class:"statbox panel box box-shadow"},Ct=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Top Center")])])],-1),St={class:"panel-body text-center"},Tt=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),jt=[Tt],It={class:"code-section-container show-code"},Dt=t("span",null,"Code",-1),Bt=[Dt],zt={key:0,class:"code-section text-start"},Mt=t("pre",null,`<button type="button" class="btn btn-info" @click="toastTopCenter.show()">Top Center</button>

<div ref="toastTopCenter" class="toast position-fixed top-0 mx-auto my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),$t={id:"toastTopRight",class:"col-lg-12 col-12 layout-spacing"},At={class:"statbox panel box box-shadow"},Et=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Top Right")])])],-1),Lt={class:"panel-body text-center"},Rt=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Nt=[Rt],Pt={class:"code-section-container show-code"},Wt=t("span",null,"Code",-1),Vt=[Wt],Ht={key:0,class:"code-section text-start"},Kt=t("pre",null,`<button type="button" class="btn btn-danger" @click="toastTopRight.show()">Top Right</button>

<div ref="toastTopRight" class="toast position-fixed top-0 end-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),Ot={id:"toastBottomLeft",class:"col-lg-12 col-12 layout-spacing"},qt={class:"statbox panel box box-shadow"},Yt=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Bottom Left")])])],-1),Ft={class:"panel-body text-center"},Gt=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Jt=[Gt],Qt={class:"code-section-container show-code"},Ut=t("span",null,"Code",-1),Xt=[Ut],Zt={key:0,class:"code-section text-start"},ts=t("pre",null,`<button type="button" class="btn btn-warning" @click="toastBottomLeft.show()">Bottom Left</button>

<div ref="toastBottomLeft" class="toast position-fixed bottom-0 start-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),ss={id:"toastBottomCenter",class:"col-lg-12 col-12 layout-spacing"},os={class:"statbox panel box box-shadow"},es=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Bottom Center")])])],-1),as={class:"panel-body text-center"},is=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),ns=[is],ls={class:"code-section-container show-code"},cs=t("span",null,"Code",-1),ds=[cs],rs={key:0,class:"code-section text-start"},bs=t("pre",null,`<button type="button" class="btn btn-secondary" @click="toastBottomCenter.show()">Bottom Center</button>

<div ref="toastBottomCenter" class="toast position-fixed bottom-0 mx-auto my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),us={id:"toastBottomRight",class:"col-lg-12 col-12 layout-spacing"},vs={class:"statbox panel box box-shadow"},ps=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Bottom Right")])])],-1),ms={class:"panel-body text-center"},fs=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),_s=[fs],xs={class:"code-section-container show-code"},hs=t("span",null,"Code",-1),ys=[hs],ws={key:0,class:"code-section text-start"},ks=t("pre",null,`<button type="button" class="btn btn-dark" @click="toastBottomRight.show()">Bottom Right</button>

<div ref="toastBottomRight" class="toast position-fixed bottom-0 end-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),gs={id:"toastNoAction",class:"col-lg-12 col-12 layout-spacing"},Cs={class:"statbox panel box box-shadow"},Ss=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"No Action")])])],-1),Ts={class:"panel-body text-center"},js=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},"Example notification text.",-1),Is=[js],Ds={class:"code-section-container show-code"},Bs=t("span",null,"Code",-1),zs=[Bs],Ms={key:0,class:"code-section text-start"},$s=t("pre",null,`<button type="button" class="btn btn-warning" @click="toastNoAction.show()">No Action</button>

<div ref="toastNoAction" class="toast position-fixed bottom-0 start-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">Example notification text.</div>
</div>
`,-1),As={id:"toastActionText",class:"col-lg-12 col-12 layout-spacing"},Es={class:"statbox panel box box-shadow"},Ls=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Action Text")])])],-1),Rs={class:"panel-body text-center"},Ns=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"THANKS!")],-1),Ps=[Ns],Ws={class:"code-section-container show-code"},Vs=t("span",null,"Code",-1),Hs=[Vs],Ks={key:0,class:"code-section text-start"},Os=t("pre",null,`<button type="button" class="btn btn-primary" @click="toastActionText.show()">Action Text</button>

<div ref="toastActionText" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">THANKS!</a>
    </div>
</div>
`,-1),qs={id:"toastTextColor",class:"col-lg-12 col-12 layout-spacing"},Ys={class:"statbox panel box box-shadow"},Fs=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Text Color")])])],-1),Gs={class:"panel-body text-center"},Js=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-warning ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Qs=[Js],Us={class:"code-section-container show-code"},Xs=t("span",null,"Code",-1),Zs=[Xs],to={key:0,class:"code-section text-start"},so=t("pre",null,`<button type="button" class="btn btn-danger" @click="toastTextColor.show()">Text Color</button>

<div ref="toastTextColor" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-warning ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),oo={id:"toastClickCallback",class:"col-lg-12 col-12 layout-spacing"},eo={class:"statbox panel box box-shadow"},ao=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Click Callback")])])],-1),io={class:"panel-body text-center"},no={class:"toast-body toast-dark d-flex justify-content-between"},lo=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Thanks for clicking the Dismiss button! "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),co=[lo],ro={class:"code-section-container show-code"},bo=t("span",null,"Code",-1),uo=[bo],vo={key:0,class:"code-section text-start"},po=t("pre",null,`<button type="button" class="btn btn-info" @click="toastClickCallback.show()">Click Callback</button>

<div ref="toastClickCallback" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Custom callback when action button is clicked.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast" @click="toastClickCallback1.show()">DISMISS</a>
    </div>
</div>
<!-- callback  toast-->
<div ref="toastClickCallback1" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Thanks for clicking the Dismiss button!
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),mo={id:"toastDuration",class:"col-lg-12 col-12 layout-spacing"},fo={class:"statbox panel box box-shadow"},_o=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Duration")])])],-1),xo={class:"panel-body text-center"},ho=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Example notification text. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),yo=[ho],wo={class:"code-section-container show-code"},ko=t("span",null,"Code",-1),go=[ko],Co={key:0,class:"code-section text-start"},So=t("pre",null,`<button type="button" class="btn btn-dark" @click="toastDuration.show()">Duration</button>

<div
    ref="toastDuration"
    class="toast position-fixed bottom-0 start-0 my-2"
    style="z-index: 1080"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-bs-delay="5000"
>
    <div class="toast-body toast-dark d-flex justify-content-between">
        Example notification text.
        <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),To={id:"toastBackgroundColor",class:"col-lg-12 col-12 layout-spacing"},jo={class:"statbox panel box box-shadow"},Io=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Background Color")])])],-1),Do={class:"panel-body text-center"},Bo=t("div",{class:"toast-body toast-primary d-flex justify-content-between"},[l(" Primary "),t("a",{href:"javascript:;",class:"text-white ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),zo=[Bo],Mo=t("div",{class:"toast-body toast-info d-flex justify-content-between"},[l(" Info "),t("a",{href:"javascript:;",class:"text-white ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),$o=[Mo],Ao=t("div",{class:"toast-body toast-success d-flex justify-content-between"},[l(" Success "),t("a",{href:"javascript:;",class:"text-white ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Eo=[Ao],Lo=t("div",{class:"toast-body toast-warning d-flex justify-content-between"},[l(" Warning "),t("a",{href:"javascript:;",class:"text-white ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Ro=[Lo],No=t("div",{class:"toast-body toast-danger d-flex justify-content-between"},[l(" Danger "),t("a",{href:"javascript:;",class:"text-white ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Po=[No],Wo=t("div",{class:"toast-body toast-dark d-flex justify-content-between"},[l(" Dark "),t("a",{href:"javascript:;",class:"text-white ms-2","data-bs-dismiss":"toast"},"DISMISS")],-1),Vo=[Wo],Ho={class:"code-section-container show-code"},Ko=t("span",null,"Code",-1),Oo=[Ko],qo={key:0,class:"code-section text-start"},Yo=t("pre",null,`<!-- Primary -->
<button type="button" class="btn btn-primary mb-2 mx-1" @click="toastPrimary.show()">Primary</button>
<div ref="toastPrimary" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
    <div class="toast-body toast-primary d-flex justify-content-between">
        Primary
        <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>

<!-- Info -->
<button type="button" class="btn btn-info mb-2 mx-1" @click="toastInfo.show()">Info</button>
<div ref="toastInfo" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
    <div class="toast-body toast-info d-flex justify-content-between">
        Info
        <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>

<!-- Success -->
<button type="button" class="btn btn-success mb-2 mx-1" @click="toastSuccess.show()">Success</button>
<div ref="toastSuccess" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
    <div class="toast-body toast-success d-flex justify-content-between">
        Success
        <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>

<!-- Warning -->
<button type="button" class="btn btn-warning mb-2 mx-1" @click="toastWarning.show()">Warning</button>
<div ref="toastWarning" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
    <div class="toast-body toast-warning d-flex justify-content-between">
        Warning
        <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>

<!-- Danger -->
<button type="button" class="btn btn-danger mb-2 mx-1" @click="toastDanger.show()">Danger</button>
<div ref="toastDanger" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
    <div class="toast-body toast-danger d-flex justify-content-between">
        Danger
        <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>

<!-- Dark -->
<button type="button" class="btn btn-dark mb-2 mx-1" @click="toastDark.show()">Dark</button>
<div ref="toastDark" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
    <div class="toast-body toast-dark d-flex justify-content-between">
        Dark
        <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
    </div>
</div>
`,-1),Zo={__name:"toast",setup(Fo){const i=e([]);let p=e(null),m=e(null),f=e(null),_=e(null),x=e(null),h=e(null),y=e(null),w=e(null),k=e(null),g=e(null),C=e(null),S=e(null),T=e(null),j=e(null),I=e(null),D=e(null),B=e(null),z=e(null),M=e(null);V(()=>{R()});const d=$=>{i.value.includes($)?i.value=i.value.filter(s=>s!=$):i.value.push($)},R=()=>{p.value=new window.bootstrap.Toast(p.value),m.value=new window.bootstrap.Toast(m.value),f.value=new window.bootstrap.Toast(f.value),_.value=new window.bootstrap.Toast(_.value),x.value=new window.bootstrap.Toast(x.value),h.value=new window.bootstrap.Toast(h.value),y.value=new window.bootstrap.Toast(y.value),w.value=new window.bootstrap.Toast(w.value),k.value=new window.bootstrap.Toast(k.value),g.value=new window.bootstrap.Toast(g.value),C.value=new window.bootstrap.Toast(C.value),S.value=new window.bootstrap.Toast(S.value),T.value=new window.bootstrap.Toast(T.value),j.value=new window.bootstrap.Toast(j.value),I.value=new window.bootstrap.Toast(I.value),D.value=new window.bootstrap.Toast(D.value),B.value=new window.bootstrap.Toast(B.value),z.value=new window.bootstrap.Toast(z.value),M.value=new window.bootstrap.Toast(M.value)};return($,s)=>{const N=A("scroll-spy-active"),P=A("scroll-spy-link"),W=A("scroll-spy");return n(),c("div",O,[(n(),H(K,{to:"#breadcrumb"},[q])),t("div",Y,[t("div",F,[L((n(),c("div",G,Q)),[[N],[P]])]),U,L((n(),c("div",X,[t("div",Z,[t("div",tt,[st,t("div",ot,[t("button",{type:"button",class:"btn btn-primary",onClick:s[0]||(s[0]=o=>a(p).show())},"Open Toast"),t("div",et,[t("div",{ref_key:"toastBasic",ref:p,class:"toast toast-primary",role:"alert","aria-live":"assertive","aria-atomic":"true"},it,512)]),t("div",nt,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=o=>d("code1"))},ct),i.value.includes("code1")?(n(),c("div",dt,[b(r,null,{default:u(()=>[rt]),_:1})])):v("",!0)])])])]),t("div",bt,[t("div",ut,[vt,t("div",pt,[t("button",{type:"button",class:"btn btn-success",onClick:s[2]||(s[2]=o=>a(m).show())},"Top Left"),t("div",{ref_key:"toastTopLeft",ref:m,class:"toast position-fixed top-0 start-0 m-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},ft,512),t("div",_t,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[3]||(s[3]=o=>d("code2"))},ht),i.value.includes("code2")?(n(),c("div",yt,[b(r,null,{default:u(()=>[wt]),_:1})])):v("",!0)])])])]),t("div",kt,[t("div",gt,[Ct,t("div",St,[t("button",{type:"button",class:"btn btn-info",onClick:s[4]||(s[4]=o=>a(f).show())},"Top Center"),t("div",{ref_key:"toastTopCenter",ref:f,class:"toast position-fixed top-0 mx-auto my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},jt,512),t("div",It,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[5]||(s[5]=o=>d("code3"))},Bt),i.value.includes("code3")?(n(),c("div",zt,[b(r,null,{default:u(()=>[Mt]),_:1})])):v("",!0)])])])]),t("div",$t,[t("div",At,[Et,t("div",Lt,[t("button",{type:"button",class:"btn btn-danger",onClick:s[6]||(s[6]=o=>a(_).show())},"Top Right"),t("div",{ref_key:"toastTopRight",ref:_,class:"toast position-fixed top-0 end-0 m-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},Nt,512),t("div",Pt,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[7]||(s[7]=o=>d("code4"))},Vt),i.value.includes("code4")?(n(),c("div",Ht,[b(r,null,{default:u(()=>[Kt]),_:1})])):v("",!0)])])])]),t("div",Ot,[t("div",qt,[Yt,t("div",Ft,[t("button",{type:"button",class:"btn btn-warning",onClick:s[8]||(s[8]=o=>a(x).show())},"Bottom Left"),t("div",{ref_key:"toastBottomLeft",ref:x,class:"toast position-fixed bottom-0 start-0 m-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},Jt,512),t("div",Qt,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[9]||(s[9]=o=>d("code5"))},Xt),i.value.includes("code5")?(n(),c("div",Zt,[b(r,null,{default:u(()=>[ts]),_:1})])):v("",!0)])])])]),t("div",ss,[t("div",os,[es,t("div",as,[t("button",{type:"button",class:"btn btn-secondary",onClick:s[10]||(s[10]=o=>a(h).show())},"Bottom Center"),t("div",{ref_key:"toastBottomCenter",ref:h,class:"toast position-fixed bottom-0 mx-auto my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},ns,512),t("div",ls,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[11]||(s[11]=o=>d("code6"))},ds),i.value.includes("code6")?(n(),c("div",rs,[b(r,null,{default:u(()=>[bs]),_:1})])):v("",!0)])])])]),t("div",us,[t("div",vs,[ps,t("div",ms,[t("button",{type:"button",class:"btn btn-dark",onClick:s[12]||(s[12]=o=>a(y).show())},"Bottom Right"),t("div",{ref_key:"toastBottomRight",ref:y,class:"toast position-fixed bottom-0 end-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},_s,512),t("div",xs,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[13]||(s[13]=o=>d("code7"))},ys),i.value.includes("code7")?(n(),c("div",ws,[b(r,null,{default:u(()=>[ks]),_:1})])):v("",!0)])])])]),t("div",gs,[t("div",Cs,[Ss,t("div",Ts,[t("button",{type:"button",class:"btn btn-warning",onClick:s[14]||(s[14]=o=>a(w).show())},"No Action"),t("div",{ref_key:"toastNoAction",ref:w,class:"toast position-fixed bottom-0 start-0 m-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},Is,512),t("div",Ds,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[15]||(s[15]=o=>d("code8"))},zs),i.value.includes("code8")?(n(),c("div",Ms,[b(r,null,{default:u(()=>[$s]),_:1})])):v("",!0)])])])]),t("div",As,[t("div",Es,[Ls,t("div",Rs,[t("button",{type:"button",class:"btn btn-primary",onClick:s[16]||(s[16]=o=>a(k).show())},"Action Text"),t("div",{ref_key:"toastActionText",ref:k,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},Ps,512),t("div",Ws,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[17]||(s[17]=o=>d("code9"))},Hs),i.value.includes("code9")?(n(),c("div",Ks,[b(r,null,{default:u(()=>[Os]),_:1})])):v("",!0)])])])]),t("div",qs,[t("div",Ys,[Fs,t("div",Gs,[t("button",{type:"button",class:"btn btn-danger",onClick:s[18]||(s[18]=o=>a(g).show())},"Text Color"),t("div",{ref_key:"toastTextColor",ref:g,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},Qs,512),t("div",Us,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[19]||(s[19]=o=>d("code10"))},Zs),i.value.includes("code10")?(n(),c("div",to,[b(r,null,{default:u(()=>[so]),_:1})])):v("",!0)])])])]),t("div",oo,[t("div",eo,[ao,t("div",io,[t("button",{type:"button",class:"btn btn-info",onClick:s[20]||(s[20]=o=>a(C).show())},"Click Callback"),t("div",{ref_key:"toastClickCallback",ref:C,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",no,[l(" Custom callback when action button is clicked. "),t("a",{href:"javascript:;",class:"text-success ms-2","data-bs-dismiss":"toast",onClick:s[21]||(s[21]=o=>a(S).show())},"DISMISS")])],512),t("div",{ref_key:"toastClickCallback1",ref:S,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},co,512),t("div",ro,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[22]||(s[22]=o=>d("code11"))},uo),i.value.includes("code11")?(n(),c("div",vo,[b(r,null,{default:u(()=>[po]),_:1})])):v("",!0)])])])]),t("div",mo,[t("div",fo,[_o,t("div",xo,[t("button",{type:"button",class:"btn btn-dark",onClick:s[23]||(s[23]=o=>a(T).show())},"Duration"),t("div",{ref_key:"toastDuration",ref:T,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},yo,512),t("div",wo,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[24]||(s[24]=o=>d("code12"))},go),i.value.includes("code12")?(n(),c("div",Co,[b(r,null,{default:u(()=>[So]),_:1})])):v("",!0)])])])]),t("div",To,[t("div",jo,[Io,t("div",Do,[t("button",{type:"button",class:"btn btn-primary mb-2 mx-1",onClick:s[25]||(s[25]=o=>a(j).show())},"Primary"),t("div",{ref_key:"toastPrimary",ref:j,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},zo,512),t("button",{type:"button",class:"btn btn-info mb-2 mx-1",onClick:s[26]||(s[26]=o=>a(I).show())},"Info"),t("div",{ref_key:"toastInfo",ref:I,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},$o,512),t("button",{type:"button",class:"btn btn-success mb-2 mx-1",onClick:s[27]||(s[27]=o=>a(D).show())},"Success"),t("div",{ref_key:"toastSuccess",ref:D,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},Eo,512),t("button",{type:"button",class:"btn btn-warning mb-2 mx-1",onClick:s[28]||(s[28]=o=>a(B).show())},"Warning"),t("div",{ref_key:"toastWarning",ref:B,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},Ro,512),t("button",{type:"button",class:"btn btn-danger mb-2 mx-1",onClick:s[29]||(s[29]=o=>a(z).show())},"Danger"),t("div",{ref_key:"toastDanger",ref:z,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},Po,512),t("button",{type:"button",class:"btn btn-dark mb-2 mx-1",onClick:s[30]||(s[30]=o=>a(M).show())},"Dark"),t("div",{ref_key:"toastDark",ref:M,class:"toast position-fixed bottom-0 start-0 my-2",style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},Vo,512),t("div",Ho,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[31]||(s[31]=o=>d("code13"))},Oo),i.value.includes("code13")?(n(),c("div",qo,[b(r,null,{default:u(()=>[Yo]),_:1})])):v("",!0)])])])])])),[[W]])])])}}};export{Zo as default};
