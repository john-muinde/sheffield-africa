import{v as t}from"./index-f79e0146.js";/* empty css                     */import{_ as s}from"./highlight-fae26301.js";import"./use-meta-04c4be92.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const p={class:"container"},i={class:"container"},m={class:"nav sidenav"},u={class:"sidenav-content"},v={class:"row layout-top-spacing"},g={id:"popoverDefault",class:"col-xl-12 col-lg-12 layout-spacing"},y={class:"statbox panel box box-shadow"},N={class:"panel-body text-center"},V={class:"code-section-container show-code"},E={key:0,class:"code-section text-start"},f={id:"popoverDirections",class:"col-lg-12 layout-spacing"},k={class:"statbox panel box box-shadow"},x={class:"panel-body tooltip-section"},w={class:"code-section-container show-code"},D={key:0,class:"code-section text-start"},h={id:"popoverDismissible",class:"col-xl-12 col-lg-12 layout-spacing"},_={class:"statbox panel box box-shadow"},C={class:"panel-body text-center"},B={class:"code-section-container show-code"},T={key:0,class:"code-section text-start"},P={id:"popoverOptions",class:"col-lg-12 layout-spacing"},O={class:"statbox panel box box-shadow"},S={class:"panel-body align-center basic-tooltip"},A={class:"code-section-container show-code"},H={key:0,class:"code-section text-start"},I={id:"popoverColors",class:"col-lg-12 layout-spacing"},F={class:"statbox panel box box-shadow"},L={class:"panel-body align-center"},W={class:"code-section-container show-code"},$={key:0,class:"code-section text-start"},J={__name:"popovers",setup(M){const o=t.ref([]);t.onMounted(()=>{d()});const a=n=>{o.value.includes(n)?o.value=o.value.filter(e=>e!=n):o.value.push(n)},d=()=>{var n=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));n.map(function(e){return new window.bootstrap.Popover(e)})};return(n,e)=>{const c=t.resolveDirective("scroll-spy-active"),r=t.resolveDirective("scroll-spy-link"),b=t.resolveDirective("scroll-spy");return t.openBlock(),t.createElementBlock("div",p,[(t.openBlock(),t.createBlock(t.Teleport,{to:"#breadcrumb"},[e[5]||(e[5]=t.createElementVNode("ul",{class:"navbar-nav flex-row"},[t.createElementVNode("li",null,[t.createElementVNode("div",{class:"page-header"},[t.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[t.createElementVNode("ol",{class:"breadcrumb"},[t.createElementVNode("li",{class:"breadcrumb-item"},[t.createElementVNode("a",{href:"javascript:;"},"Elements")]),t.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[t.createElementVNode("span",null,"Popovers")])])])])])],-1))])),t.createElementVNode("div",i,[t.createElementVNode("div",m,[t.withDirectives((t.openBlock(),t.createElementBlock("div",u,e[6]||(e[6]=[t.createStaticVNode('<a href="#popoverDefault" class="nav-link">Default</a><a href="#popoverDirections" class="nav-link">Directions</a><a href="#popoverDismissible" class="nav-link">Dismissible</a><a href="#popoverOptions" class="nav-link">Options</a><a href="#popoverColors" class="nav-link">Colors</a>',5)]))),[[c],[r]])]),e[28]||(e[28]=t.createStaticVNode('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/popovers" class="text-info"> https://getbootstrap.com/docs/5.0/components/popovers </a></div></div></div>',1)),t.withDirectives((t.openBlock(),t.createElementBlock("div",v,[t.createElementVNode("div",g,[t.createElementVNode("div",y,[e[11]||(e[11]=t.createElementVNode("div",{class:"panel-heading"},[t.createElementVNode("div",{class:"row"},[t.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t.createElementVNode("h4",null,"Popover")])])],-1)),t.createElementVNode("div",N,[e[9]||(e[9]=t.createElementVNode("a",{href:"#",target:"_self","data-bs-toggle":"popover","data-bs-placement":"left","data-bs-content":"Tooltip using ANCHOR tag",class:"btn btn-primary mb-3 me-2"},"Link",-1)),e[10]||(e[10]=t.createElementVNode("button",{type:"button","data-bs-toggle":"popover","data-bs-content":"Tooltip using BUTTON tag",class:"btn btn-success mb-3"}," Button ",-1)),t.createElementVNode("div",V,[t.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[0]||(e[0]=l=>a("code1"))},e[7]||(e[7]=[t.createElementVNode("span",null,"Code",-1)])),o.value.includes("code1")?(t.openBlock(),t.createElementBlock("div",E,[t.createVNode(s,null,{default:t.withCtx(()=>e[8]||(e[8]=[t.createElementVNode("pre",null,`<a href="#" target="_self" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip using ANCHOR tag" class="btn btn-primary mb-3 me-2">Link</a>

<button type="button" data-bs-toggle="popover" data-bs-content="Tooltip using BUTTON tag" class="btn btn-success mb-3">Button</button>
`,-1)])),_:1})])):t.createCommentVNode("",!0)])])])]),t.createElementVNode("div",f,[t.createElementVNode("div",k,[e[15]||(e[15]=t.createElementVNode("div",{class:"panel-heading"},[t.createElementVNode("div",{class:"row"},[t.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t.createElementVNode("h4",null,"Placement")])])],-1)),t.createElementVNode("div",x,[e[14]||(e[14]=t.createStaticVNode('<div class="row"><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Tooltip on top" class="btn btn-info mb-4 ms-2"> Popover on top </button></div><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Tooltip on right" class="btn btn-danger mb-4 ms-2"> Popover on right </button></div><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Tooltip on bottom" class="btn btn-warning mb-4 ms-2"> Popover on bottom </button></div><div class="col-lg-6"><button type="button" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip on left" class="btn btn-secondary mb-4 ms-2"> Popover on left </button></div></div>',1)),t.createElementVNode("div",w,[t.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[1]||(e[1]=l=>a("code2"))},e[12]||(e[12]=[t.createElementVNode("span",null,"Code",-1)])),o.value.includes("code2")?(t.openBlock(),t.createElementBlock("div",D,[t.createVNode(s,null,{default:t.withCtx(()=>e[13]||(e[13]=[t.createElementVNode("pre",null,`<!-- TOP -->
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
`,-1)])),_:1})])):t.createCommentVNode("",!0)])])])]),t.createElementVNode("div",h,[t.createElementVNode("div",_,[e[19]||(e[19]=t.createElementVNode("div",{class:"panel-heading"},[t.createElementVNode("div",{class:"row"},[t.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t.createElementVNode("h4",null,"Dismissible popover")])])],-1)),t.createElementVNode("div",C,[e[18]||(e[18]=t.createElementVNode("button",{type:"button","data-bs-toggle":"popover","data-bs-trigger":"focus","data-bs-placement":"left","data-bs-content":"Lorem ipsum dolor sit.",class:"btn btn-dark mb-3"}," Popover on left ",-1)),t.createElementVNode("div",B,[t.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[2]||(e[2]=l=>a("code3"))},e[16]||(e[16]=[t.createElementVNode("span",null,"Code",-1)])),o.value.includes("code3")?(t.openBlock(),t.createElementBlock("div",T,[t.createVNode(s,null,{default:t.withCtx(()=>e[17]||(e[17]=[t.createElementVNode("pre",null,`<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="left" data-bs-content="Lorem ipsum dolor sit." class="btn btn-dark mb-3">
    Popover on left
</button>
`,-1)])),_:1})])):t.createCommentVNode("",!0)])])])]),t.createElementVNode("div",P,[t.createElementVNode("div",O,[e[23]||(e[23]=t.createElementVNode("div",{class:"panel-heading"},[t.createElementVNode("div",{class:"row"},[t.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t.createElementVNode("h4",null,"Options")])])],-1)),t.createElementVNode("div",S,[e[22]||(e[22]=t.createStaticVNode('<div class="row"><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="On Hover" class="btn btn-primary"> On Hover </button></div><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="On Focus" class="btn btn-secondary"> On Focus </button></div><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-delay="1000" data-bs-content="Delay 1s" class="btn btn-info"> Delay </button></div><div class="col-lg-6 mb-4"><button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-animation="false" data-bs-content="Disabled Animation" class="btn btn-dark"> Disabled Animation </button></div></div>',1)),t.createElementVNode("div",A,[t.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[3]||(e[3]=l=>a("code4"))},e[20]||(e[20]=[t.createElementVNode("span",null,"Code",-1)])),o.value.includes("code4")?(t.openBlock(),t.createElementBlock("div",H,[t.createVNode(s,null,{default:t.withCtx(()=>e[21]||(e[21]=[t.createElementVNode("pre",null,`<!-- On Hover -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="On Hover" class="btn btn-primary">On Hover</button>

<!-- On Focus -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="On Focus" class="btn btn-secondary">On Focus</button>

<!-- Delay -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-delay="1000" data-bs-content="Delay 1s" class="btn btn-info">Delay</button>

<!-- Disabled Animation -->
<button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-animation="false" data-bs-content="Disabled Animation" class="btn btn-dark">
    Disabled Animation
</button>
`,-1)])),_:1})])):t.createCommentVNode("",!0)])])])]),t.createElementVNode("div",I,[t.createElementVNode("div",F,[e[27]||(e[27]=t.createElementVNode("div",{class:"panel-heading"},[t.createElementVNode("div",{class:"row"},[t.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t.createElementVNode("h4",null,"Colors")])])],-1)),t.createElementVNode("div",L,[e[26]||(e[26]=t.createStaticVNode('<button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Primary" data-bs-content="Primary popover" data-bs-custom-class="popover-primary" class="btn btn-primary mb-2 mx-1"> Primary </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Success" data-bs-content="Success popover" data-bs-custom-class="popover-success" class="btn btn-success mb-2 mx-1"> Success </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Info" data-bs-content="Info popover" data-bs-custom-class="popover-info" class="btn btn-info mb-2 mx-1"> Info </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Danger" data-bs-content="Danger popover" data-bs-custom-class="popover-danger" class="btn btn-danger mb-2 mx-1"> Danger </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Warning" data-bs-content="Warning popover" data-bs-custom-class="popover-warning" class="btn btn-warning mb-2 mx-1"> Warning </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Secondary" data-bs-content="Secondary popover" data-bs-custom-class="popover-secondary" class="btn btn-secondary mb-2 mx-1"> Secondary </button><button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Dark" data-bs-content="Dark popover" data-bs-custom-class="popover-dark" class="btn btn-dark mb-2 mx-1"> Dark </button>',7)),t.createElementVNode("div",W,[t.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[4]||(e[4]=l=>a("code5"))},e[24]||(e[24]=[t.createElementVNode("span",null,"Code",-1)])),o.value.includes("code5")?(t.openBlock(),t.createElementBlock("div",$,[t.createVNode(s,null,{default:t.withCtx(()=>e[25]||(e[25]=[t.createElementVNode("pre",null,`<button
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
`,-1)])),_:1})])):t.createCommentVNode("",!0)])])])])])),[[b]])])])}}};export{J as default};
