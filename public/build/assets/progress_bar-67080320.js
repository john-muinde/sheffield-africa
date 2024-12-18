import{v as e}from"./index-37a3e797.js";/* empty css                     */import{_ as o}from"./highlight-e2e875a0.js";import"./use-meta-5612b25f.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const v={class:"container"},c={class:"container"},m={class:"nav sidenav"},g={class:"sidenav-content"},p={class:"row layout-top-spacing"},b={id:"progressBarBasic",class:"col-lg-12 layout-spacing"},u={class:"statbox panel box box-shadow"},N={class:"panel-body"},V={class:"code-section-container show-code"},E={key:0,class:"code-section text-start"},w={id:"progressBarGradient",class:"col-lg-12 layout-spacing"},y={class:"statbox panel box box-shadow"},x={class:"panel-body"},h={class:"code-section-container show-code"},k={key:0,class:"code-section text-start"},f={id:"progressBarLabeled",class:"col-lg-12 layout-spacing"},B={class:"statbox panel box box-shadow"},C={class:"panel-body"},S={class:"code-section-container show-code"},D={key:0,class:"code-section text-start"},P={id:"progressBarStacked",class:"col-lg-12 layout-spacing"},A={class:"statbox panel box box-shadow"},z={class:"panel-body"},L={class:"code-section-container show-code"},T={key:0,class:"code-section text-start"},q={__name:"progress_bar",setup($){const r=e.ref([]),s=l=>{r.value.includes(l)?r.value=r.value.filter(a=>a!=l):r.value.push(l)};return(l,a)=>{const t=e.resolveDirective("scroll-spy-active"),n=e.resolveDirective("scroll-spy-link"),d=e.resolveDirective("scroll-spy");return e.openBlock(),e.createElementBlock("div",v,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[a[4]||(a[4]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Elements")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"Progress Bar")])])])])])],-1))])),e.createElementVNode("div",c,[e.createElementVNode("div",m,[e.withDirectives((e.openBlock(),e.createElementBlock("div",g,a[5]||(a[5]=[e.createStaticVNode('<a href="#progressBarBasic" class="nav-link">Basic</a><a href="#progressBarGradient" class="nav-link">Gradient</a><a href="#progressBarStriped" class="nav-link">Striped</a><a href="#progressBarAnimated" class="nav-link">Animated</a><a href="#progressBarLabeled" class="nav-link">Labeled</a><a href="#progressBarStacked" class="nav-link">Stacked</a><a href="#progressBarSizes" class="nav-link">Sizes</a>',7)]))),[[t],[n]])]),a[43]||(a[43]=e.createStaticVNode('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/progress" class="text-info"> https://getbootstrap.com/docs/5.0/components/progress </a></div></div></div>',1)),e.withDirectives((e.openBlock(),e.createElementBlock("div",p,[e.createElementVNode("div",b,[e.createElementVNode("div",u,[a[15]||(a[15]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Basic")])])],-1)),e.createElementVNode("div",N,[a[8]||(a[8]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-primary",style:{width:"20%"}})],-1)),a[9]||(a[9]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"30",class:"progress-bar bg-info",style:{width:"30%"}})],-1)),a[10]||(a[10]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"50",class:"progress-bar bg-success",style:{width:"50%"}})],-1)),a[11]||(a[11]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"60",class:"progress-bar bg-warning",style:{width:"60%"}})],-1)),a[12]||(a[12]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"70",class:"progress-bar bg-danger",style:{width:"70%"}})],-1)),a[13]||(a[13]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",class:"progress-bar bg-secondary",style:{width:"80%"}})],-1)),a[14]||(a[14]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"90",class:"progress-bar bg-dark",style:{width:"90%"}})],-1)),e.createElementVNode("div",V,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[0]||(a[0]=i=>s("code1"))},a[6]||(a[6]=[e.createElementVNode("span",null,"Code",-1)])),r.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",E,[e.createVNode(o,null,{default:e.withCtx(()=>a[7]||(a[7]=[e.createElementVNode("pre",null,`
<!-- Primary -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-primary" style="width: 20%"></div>
</div>

<!-- Info -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-info" style="width: 30%"></div>
</div>

<!-- Success -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" class="progress-bar bg-success" style="width: 50%"></div>
</div>

<!-- Warning -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" class="progress-bar bg-warning" style="width: 60%"></div>
</div>

<!-- Danger -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70" class="progress-bar bg-danger" style="width: 70%"></div>
</div>

<!-- Secondary -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-secondary" style="width: 80%"></div>
</div>

<!-- Dark -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" class="progress-bar bg-dark" style="width: 90%"></div>
</div>

`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",w,[e.createElementVNode("div",y,[a[25]||(a[25]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Gradient")])])],-1)),e.createElementVNode("div",x,[a[18]||(a[18]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-gradient-primary",style:{width:"20%"}})],-1)),a[19]||(a[19]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"30",class:"progress-bar bg-gradient-info",style:{width:"30%"}})],-1)),a[20]||(a[20]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"50",class:"progress-bar bg-gradient-success",style:{width:"50%"}})],-1)),a[21]||(a[21]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"60",class:"progress-bar bg-gradient-warning",style:{width:"60%"}})],-1)),a[22]||(a[22]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"70",class:"progress-bar bg-gradient-danger",style:{width:"70%"}})],-1)),a[23]||(a[23]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",class:"progress-bar bg-gradient-secondary",style:{width:"80%"}})],-1)),a[24]||(a[24]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"90",class:"progress-bar bg-gradient-dark",style:{width:"90%"}})],-1)),e.createElementVNode("div",h,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[1]||(a[1]=i=>s("code2"))},a[16]||(a[16]=[e.createElementVNode("span",null,"Code",-1)])),r.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",k,[e.createVNode(o,null,{default:e.withCtx(()=>a[17]||(a[17]=[e.createElementVNode("pre",null,`<!-- Primary -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-primary" style="width: 20%"></div>
</div>

<!-- Info -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-info" style="width: 20%"></div>
</div>

<!-- Success -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-success" style="width: 20%"></div>
</div>

<!-- Warning -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-warning" style="width: 20%"></div>
</div>

<!-- Danger -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-danger" style="width: 20%"></div>
</div>

<!-- Secondary -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-secondary" style="width: 20%"></div>
</div>

<!-- Dark -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-dark" style="width: 20%"></div>
</div>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),a[40]||(a[40]=e.createElementVNode("div",{id:"progressBarStriped",class:"col-lg-12 layout-spacing"},[e.createElementVNode("div",{class:"statbox panel box box-shadow"},[e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Striped")])])]),e.createElementVNode("div",{class:"panel-body"},[e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-primary progress-bar-striped",style:{width:"20%"}})])])])],-1)),a[41]||(a[41]=e.createElementVNode("div",{id:"progressBarAnimated",class:"col-lg-12 layout-spacing"},[e.createElementVNode("div",{class:"statbox panel box box-shadow"},[e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Animated")])])]),e.createElementVNode("div",{class:"panel-body"},[e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"50",class:"progress-bar bg-primary progress-bar-striped progress-bar-animated",style:{width:"50%"}})])])])],-1)),e.createElementVNode("div",f,[e.createElementVNode("div",B,[a[30]||(a[30]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Labels")])])],-1)),e.createElementVNode("div",C,[a[28]||(a[28]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",class:"progress-bar bg-info",style:{width:"80%"}}," 80% ")],-1)),a[29]||(a[29]=e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"90",class:"progress-bar bg-danger",style:{width:"90%"}},[e.createElementVNode("div",{class:"progress-title"},[e.createElementVNode("span",null,"PHP"),e.createElementVNode("span",null,"90%")])])],-1)),e.createElementVNode("div",S,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[2]||(a[2]=i=>s("code3"))},a[26]||(a[26]=[e.createElementVNode("span",null,"Code",-1)])),r.value.includes("code3")?(e.openBlock(),e.createElementBlock("div",D,[e.createVNode(o,null,{default:e.withCtx(()=>a[27]||(a[27]=[e.createElementVNode("pre",null,`<!-- Labels -->
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-info" style="width: 80%">80%</div>
</div>
<div class="progress br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" class="progress-bar bg-danger" style="width: 90%">
        <div class="progress-title"><span>PHP</span><span>90%</span></div>
    </div>
</div>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",P,[e.createElementVNode("div",A,[a[39]||(a[39]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Stacked")])])],-1)),e.createElementVNode("div",z,[a[33]||(a[33]=e.createElementVNode("h6",null,"Basic",-1)),a[34]||(a[34]=e.createElementVNode("div",{class:"progress progress-bar-stack br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"15",class:"progress-bar bg-success",style:{width:"15%"}}),e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"30",class:"progress-bar bg-warning",style:{width:"30%"}}),e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-danger",style:{width:"20%"}})],-1)),a[35]||(a[35]=e.createElementVNode("h6",null,"Striped",-1)),a[36]||(a[36]=e.createElementVNode("div",{class:"progress progress-bar-stack br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"15",class:"progress-bar bg-primary progress-bar-striped",style:{width:"15%"}}),e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"30",class:"progress-bar bg-success progress-bar-striped",style:{width:"30%"}}),e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-info progress-bar-striped",style:{width:"20%"}})],-1)),a[37]||(a[37]=e.createElementVNode("h6",null,"Animated",-1)),a[38]||(a[38]=e.createElementVNode("div",{class:"progress progress-bar-stack br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"15",class:"progress-bar bg-info progress-bar-striped progress-bar-animated",style:{width:"15%"}}),e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"30",class:"progress-bar bg-secondary progress-bar-striped progress-bar-animated",style:{width:"30%"}}),e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-primary progress-bar-striped progress-bar-animated",style:{width:"20%"}})],-1)),e.createElementVNode("div",L,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[3]||(a[3]=i=>s("code4"))},a[31]||(a[31]=[e.createElementVNode("span",null,"Code",-1)])),r.value.includes("code4")?(e.openBlock(),e.createElementBlock("div",T,[e.createVNode(o,null,{default:e.withCtx(()=>a[32]||(a[32]=[e.createElementVNode("pre",null,`<!-- Basic -->
<div class="progress progress-bar-stack br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" class="progress-bar bg-success" style="width: 15%"></div>
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-warning" style="width: 30%"></div>
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-danger" style="width: 20%"></div>
</div>
<!-- Striped -->
<div class="progress progress-bar-stack br-30" min="0">
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" class="progress-bar bg-primary progress-bar-striped" style="width: 15%"></div>
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-success progress-bar-striped" style="width: 30%"></div>
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-info progress-bar-striped" style="width: 20%"></div>
</div>
<!-- Animated -->
<div class="progress progress-bar-stack br-30" min="0">
    <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="15"
        class="progress-bar bg-info progress-bar-striped progress-bar-animated"
        style="width: 15%"
    ></div>
    <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="30"
        class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
        style="width: 30%"
    ></div>
    <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="20"
        class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
        style="width: 20%"
    ></div>
</div>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),a[42]||(a[42]=e.createElementVNode("div",{id:"progressBarSizes",class:"col-lg-12 layout-spacing"},[e.createElementVNode("div",{class:"statbox panel box box-shadow"},[e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Progress Bars Different Sizes")])])]),e.createElementVNode("div",{class:"panel-body"},[e.createElementVNode("span",null,[e.createElementVNode("code",null,"Default Progress Bar Size")]),e.createElementVNode("div",{class:"progress br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"20",class:"progress-bar bg-primary",style:{width:"20%"}})]),e.createElementVNode("span",null,[e.createTextVNode("Class: "),e.createElementVNode("code",null,".progress-sm")]),e.createElementVNode("div",{class:"progress progress-sm br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"40",class:"progress-bar bg-success",style:{width:"40%"}})]),e.createElementVNode("span",null,[e.createTextVNode("Class: "),e.createElementVNode("code",null,".progress-md")]),e.createElementVNode("div",{class:"progress progress-md br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"60",class:"progress-bar bg-warning",style:{width:"60%"}})]),e.createElementVNode("span",null,[e.createTextVNode("Class: "),e.createElementVNode("code",null,".progress-lg")]),e.createElementVNode("div",{class:"progress progress-lg br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",class:"progress-bar bg-info",style:{width:"80%"}})]),e.createElementVNode("span",null,[e.createTextVNode("Class: "),e.createElementVNode("code",null,".progress-xl")]),e.createElementVNode("div",{class:"progress progress-xl br-30",min:"0"},[e.createElementVNode("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"90",class:"progress-bar bg-danger",style:{width:"90%"}})])])])],-1))])),[[d]])])])}}};export{q as default};
