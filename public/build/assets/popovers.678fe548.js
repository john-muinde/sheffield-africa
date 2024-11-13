/* empty css                     */import{_ as b}from"./highlight.c1836cb6.js";import{z as x,o as k,C as u,bo as s,bp as a,bT as w,bq as t,aB as D,B as v,c2 as d,j as p,bC as r,bw as i}from"./app-setting.e7c0c170.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const _={class:"container"},h={class:"container"},T={class:"nav sidenav"},C={class:"sidenav-content"},P={class:"row layout-top-spacing"},O={id:"popoverDefault",class:"col-xl-12 col-lg-12 layout-spacing"},S={class:"statbox panel box box-shadow"},B={class:"panel-body text-center"},A={class:"code-section-container show-code"},H={key:0,class:"code-section text-start"},N={id:"popoverDirections",class:"col-lg-12 layout-spacing"},I={class:"statbox panel box box-shadow"},F={class:"panel-body tooltip-section"},L={class:"code-section-container show-code"},W={key:0,class:"code-section text-start"},$={id:"popoverDismissible",class:"col-xl-12 col-lg-12 layout-spacing"},M={class:"statbox panel box box-shadow"},V={class:"panel-body text-center"},j={class:"code-section-container show-code"},E={key:0,class:"code-section text-start"},R={id:"popoverOptions",class:"col-lg-12 layout-spacing"},q={class:"statbox panel box box-shadow"},U={class:"panel-body align-center basic-tooltip"},z={class:"code-section-container show-code"},G={key:0,class:"code-section text-start"},J={id:"popoverColors",class:"col-lg-12 layout-spacing"},K={class:"statbox panel box box-shadow"},Q={class:"panel-body align-center"},X={class:"code-section-container show-code"},Y={key:0,class:"code-section text-start"},et={__name:"popovers",setup(Z){const n=x([]);k(()=>{g()});const l=e=>{n.value.includes(e)?n.value=n.value.filter(o=>o!=e):n.value.push(e)},g=()=>{var e=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));e.map(function(o){return new window.bootstrap.Popover(o)})};return(e,o)=>{const m=u("scroll-spy-active"),y=u("scroll-spy-link"),f=u("scroll-spy");return s(),a("div",_,[(s(),w(D,{to:"#breadcrumb"},[o[5]||(o[5]=t("ul",{class:"navbar-nav flex-row"},[t("li",null,[t("div",{class:"page-header"},[t("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item"},[t("a",{href:"javascript:;"},"Elements")]),t("li",{class:"breadcrumb-item active","aria-current":"page"},[t("span",null,"Popovers")])])])])])],-1))])),t("div",h,[t("div",T,[v((s(),a("div",C,o[6]||(o[6]=[d('<a href="#popoverDefault" class="nav-link">Default</a><a href="#popoverDirections" class="nav-link">Directions</a><a href="#popoverDismissible" class="nav-link">Dismissible</a><a href="#popoverOptions" class="nav-link">Options</a><a href="#popoverColors" class="nav-link">Colors</a>',5)]))),[[m],[y]])]),o[28]||(o[28]=d('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/popovers" class="text-info"> https://getbootstrap.com/docs/5.0/components/popovers </a></div></div></div>',1)),v((s(),a("div",P,[t("div",O,[t("div",S,[o[11]||(o[11]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Popover")])])],-1)),t("div",B,[o[9]||(o[9]=t("a",{href:"#",target:"_self","data-bs-toggle":"popover","data-bs-placement":"left","data-bs-content":"Tooltip using ANCHOR tag",class:"btn btn-primary mb-3 me-2"},"Link",-1)),o[10]||(o[10]=t("button",{type:"button","data-bs-toggle":"popover","data-bs-content":"Tooltip using BUTTON tag",class:"btn btn-success mb-3"},"Button",-1)),t("div",A,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[0]||(o[0]=c=>l("code1"))},o[7]||(o[7]=[t("span",null,"Code",-1)])),n.value.includes("code1")?(s(),a("div",H,[p(b,null,{default:r(()=>o[8]||(o[8]=[t("pre",null,`<a href="#" target="_self" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip using ANCHOR tag" class="btn btn-primary mb-3 me-2">Link</a>

<button type="button" data-bs-toggle="popover" data-bs-content="Tooltip using BUTTON tag" class="btn btn-success mb-3">Button</button>
`,-1)])),_:1})])):i("",!0)])])])]),t("div",N,[t("div",I,[o[15]||(o[15]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Placement")])])],-1)),t("div",F,[o[14]||(o[14]=d('<div class="row"><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Tooltip on top" class="btn btn-info mb-4 ms-2">Popover on top</button></div><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Tooltip on right" class="btn btn-danger mb-4 ms-2">Popover on right</button></div><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Tooltip on bottom" class="btn btn-warning mb-4 ms-2">Popover on bottom</button></div><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip on left" class="btn btn-secondary mb-4 ms-2">Popover on left</button></div></div>',1)),t("div",L,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[1]||(o[1]=c=>l("code2"))},o[12]||(o[12]=[t("span",null,"Code",-1)])),n.value.includes("code2")?(s(),a("div",W,[p(b,null,{default:r(()=>o[13]||(o[13]=[t("pre",null,`<!-- TOP -->
<button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Tooltip on top" class="btn btn-info mb-4 ms-2">Popover on top</button>

<!-- RIGHT -->
<button type="button" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Tooltip on right" class="btn btn-danger mb-4 ms-2">
    Popover on right
</button>

<!-- BOTTOM -->
<button type="button" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Tooltip on bottom" class="btn btn-warning mb-4 ms-2">
    Popover on bottom
</button>

<!-- LEFT -->
<button type="button" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip on left" class="btn btn-secondary mb-4 ms-2">
    Popover on left
</button>
`,-1)])),_:1})])):i("",!0)])])])]),t("div",$,[t("div",M,[o[19]||(o[19]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Dismissible popover")])])],-1)),t("div",V,[o[18]||(o[18]=t("button",{type:"button","data-bs-toggle":"popover","data-bs-trigger":"focus","data-bs-placement":"left","data-bs-content":"Lorem ipsum dolor sit.",class:"btn btn-dark mb-3"},"Popover on left",-1)),t("div",j,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[2]||(o[2]=c=>l("code3"))},o[16]||(o[16]=[t("span",null,"Code",-1)])),n.value.includes("code3")?(s(),a("div",E,[p(b,null,{default:r(()=>o[17]||(o[17]=[t("pre",null,`<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="left" data-bs-content="Lorem ipsum dolor sit." class="btn btn-dark mb-3">
    Popover on left
</button>
`,-1)])),_:1})])):i("",!0)])])])]),t("div",R,[t("div",q,[o[23]||(o[23]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Options")])])],-1)),t("div",U,[o[22]||(o[22]=d('<div class="row"><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="On Hover" class="btn btn-primary">On Hover</button></div><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="On Focus" class="btn btn-secondary">On Focus</button></div><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-delay="1000" data-bs-content="Delay 1s" class="btn btn-info">Delay</button></div><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-animation="false" data-bs-content="Disabled Animation" class="btn btn-dark">Disabled Animation</button></div></div>',1)),t("div",z,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[3]||(o[3]=c=>l("code4"))},o[20]||(o[20]=[t("span",null,"Code",-1)])),n.value.includes("code4")?(s(),a("div",G,[p(b,null,{default:r(()=>o[21]||(o[21]=[t("pre",null,`<!-- On Hover -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="On Hover" class="btn btn-primary">On Hover</button>

<!-- On Focus -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="On Focus" class="btn btn-secondary">On Focus</button>

<!-- Delay -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-delay="1000" data-bs-content="Delay 1s" class="btn btn-info">Delay</button>

<!-- Disabled Animation -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-animation="false" data-bs-content="Disabled Animation" class="btn btn-dark">
    Disabled Animation
</button>
`,-1)])),_:1})])):i("",!0)])])])]),t("div",J,[t("div",K,[o[27]||(o[27]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Colors")])])],-1)),t("div",Q,[o[26]||(o[26]=d('<button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Primary" data-bs-content="Primary popover" data-bs-custom-class="popover-primary" class="btn btn-primary mb-2 mx-1"> Primary </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Success" data-bs-content="Success popover" data-bs-custom-class="popover-success" class="btn btn-success mb-2 mx-1"> Success </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Info" data-bs-content="Info popover" data-bs-custom-class="popover-info" class="btn btn-info mb-2 mx-1">Info</button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Danger" data-bs-content="Danger popover" data-bs-custom-class="popover-danger" class="btn btn-danger mb-2 mx-1"> Danger </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Warning" data-bs-content="Warning popover" data-bs-custom-class="popover-warning" class="btn btn-warning mb-2 mx-1"> Warning </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Secondary" data-bs-content="Secondary popover" data-bs-custom-class="popover-secondary" class="btn btn-secondary mb-2 mx-1"> Secondary </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Dark" data-bs-content="Dark popover" data-bs-custom-class="popover-dark" class="btn btn-dark mb-2 mx-1">Dark</button>',7)),t("div",X,[t("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[4]||(o[4]=c=>l("code5"))},o[24]||(o[24]=[t("span",null,"Code",-1)])),n.value.includes("code5")?(s(),a("div",Y,[p(b,null,{default:r(()=>o[25]||(o[25]=[t("pre",null,`<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Primary"
    data-bs-content="Primary popover"
    data-bs-custom-class="popover-primary"
    class="btn btn-primary mb-2 mx-1"
>
    Primary
</button>

<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Success"
    data-bs-content="Success popover"
    data-bs-custom-class="popover-success"
    class="btn btn-success mb-2 mx-1"
>
    Success
</button>
<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Info"
    data-bs-content="Info popover"
    data-bs-custom-class="popover-info"
    class="btn btn-info mb-2 mx-1"
>
    Info
</button>
<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Danger"
    data-bs-content="Danger popover"
    data-bs-custom-class="popover-danger"
    class="btn btn-danger mb-2 mx-1"
>
    Danger
</button>
<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Warning"
    data-bs-content="Warning popover"
    data-bs-custom-class="popover-warning"
    class="btn btn-warning mb-2 mx-1"
>
    Warning
</button>
<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Secondary"
    data-bs-content="Secondary popover"
    data-bs-custom-class="popover-secondary"
    class="btn btn-secondary mb-2 mx-1"
>
    Secondary
</button>
<button
    type="button"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-title="Dark"
    data-bs-content="Dark popover"
    data-bs-custom-class="popover-dark"
    class="btn btn-dark mb-2 mx-1"
>
    Dark
</button>
`,-1)])),_:1})])):i("",!0)])])])])])),[[f]])])])}}};export{et as default};
