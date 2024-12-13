import{v as e}from"./index-861d4cc9.js";/* empty css                     */import{_ as v}from"./highlight-372f8f26.js";import"./use-meta-93c2dd86.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const _={class:"container"},N={class:"container"},V={id:"navSection",class:"nav sidenav"},k={class:"sidenav-content"},p={class:"row layout-top-spacing"},w={id:"countdownseperator",class:"col-lg-12 col-12 layout-spacing"},y={class:"statbox panel box box-shadow"},x={class:"panel-body text-center"},b={class:"container"},f={id:"cd-simple"},g={class:"countdown"},D={class:"clock-count-container"},C={class:"clock-val"},S={class:"countdown"},M={class:"clock-count-container"},B={class:"clock-val"},I={class:"countdown"},T={class:"clock-count-container"},H={class:"clock-val"},$={class:"countdown"},F={class:"clock-count-container"},Y={class:"clock-val"},j={class:"code-section-container show-code"},U={key:0,class:"code-section text-start"},q={id:"countdowncircle",class:"col-lg-12 col-12 layout-spacing"},z={class:"statbox panel box box-shadow"},A={class:"panel-body text-center"},G={class:"container"},J={id:"cd-circle"},K={class:"countdown"},L={class:"clock-count-container"},O={class:"clock-val"},P={class:"countdown"},Q={class:"clock-count-container"},R={class:"clock-val"},W={class:"countdown"},X={class:"clock-count-container"},Z={class:"clock-val"},ee={class:"countdown"},te={class:"clock-count-container"},oe={class:"clock-val"},le={class:"code-section-container show-code"},ce={key:0,class:"code-section text-start"},ue={__name:"countdown",setup(ne){const s=e.ref([]),d=e.ref(null),c=e.ref({days:null,hours:null,minutes:null,seconds:null}),i=e.ref(null),n=e.ref({days:null,hours:null,minutes:null,seconds:null});e.onMounted(()=>{u(),m()}),e.onUnmounted(()=>{clearInterval(d.value),clearInterval(i.value)});const r=l=>{s.value.includes(l)?s.value=s.value.filter(t=>t!=l):s.value.push(l)},u=()=>{let l=new Date;l.setDate(l.getDate()+3);let t=l.getTime();d.value=setInterval(()=>{let a=new Date().getTime(),o=t-a;c.value.days=Math.floor(o/(1e3*60*60*24)),c.value.hours=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),c.value.minutes=Math.floor(o%(1e3*60*60)/(1e3*60)),c.value.seconds=Math.floor(o%(1e3*60)/1e3),o<0&&clearInterval(d.value)},500)},m=()=>{let l=new Date;l.setFullYear(l.getFullYear()+1);let t=l.getTime();i.value=setInterval(()=>{let a=new Date().getTime(),o=t-a;n.value.days=Math.floor(o/(1e3*60*60*24)),n.value.hours=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),n.value.minutes=Math.floor(o%(1e3*60*60)/(1e3*60)),n.value.seconds=Math.floor(o%(1e3*60)/1e3),o<0&&clearInterval(i.value)},500)};return(l,t)=>{const a=e.resolveDirective("scroll-spy-active"),o=e.resolveDirective("scroll-spy-link"),h=e.resolveDirective("scroll-spy");return e.openBlock(),e.createElementBlock("div",_,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[t[2]||(t[2]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Components")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"Countdown")])])])])])],-1))])),e.createElementVNode("div",N,[e.createElementVNode("div",V,[e.withDirectives((e.openBlock(),e.createElementBlock("div",k,t[3]||(t[3]=[e.createElementVNode("a",{href:"#countdownseperator",class:"nav-link"},"Seperator",-1),e.createElementVNode("a",{href:"#countdowncircle",class:"nav-link"},"Circle",-1)]))),[[a],[o]])]),e.withDirectives((e.openBlock(),e.createElementBlock("div",p,[e.createElementVNode("div",w,[e.createElementVNode("div",y,[t[10]||(t[10]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Simple Countdown")])])],-1)),e.createElementVNode("div",x,[e.createElementVNode("div",b,[e.createElementVNode("div",f,[e.createElementVNode("div",g,[e.createElementVNode("div",D,[e.createElementVNode("h1",C,e.toDisplayString(c.value.days),1)]),t[4]||(t[4]=e.createElementVNode("h4",{class:"clock-text"}," Days ",-1))]),e.createElementVNode("div",S,[e.createElementVNode("div",M,[e.createElementVNode("h1",B,e.toDisplayString(c.value.hours),1)]),t[5]||(t[5]=e.createElementVNode("h4",{class:"clock-text"}," Hours ",-1))]),e.createElementVNode("div",I,[e.createElementVNode("div",T,[e.createElementVNode("h1",H,e.toDisplayString(c.value.minutes),1)]),t[6]||(t[6]=e.createElementVNode("h4",{class:"clock-text"}," Mins ",-1))]),e.createElementVNode("div",$,[e.createElementVNode("div",F,[e.createElementVNode("h1",Y,e.toDisplayString(c.value.seconds),1)]),t[7]||(t[7]=e.createElementVNode("h4",{class:"clock-text"}," Sec ",-1))])])]),e.createElementVNode("div",j,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[0]||(t[0]=E=>r("code1"))},t[8]||(t[8]=[e.createElementVNode("span",null,"Code",-1)])),s.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",U,[e.createVNode(v,null,{default:e.withCtx(()=>t[9]||(t[9]=[e.createElementVNode("div",null,[e.createElementVNode("pre",null,`<div id="cd-simple">
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo1.days }}</h1>
        </div>
        <h4 class="clock-text">Days</h4>
    </div>
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo1.hours }}</h1>
        </div>
        <h4 class="clock-text">Hours</h4>
    </div>
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo1.minutes }}</h1>
        </div>
        <h4 class="clock-text">Mins</h4>
    </div>
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo1.seconds }}</h1>
        </div>
        <h4 class="clock-text">Sec</h4>
    </div>
</div>
                                            `)],-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",q,[e.createElementVNode("div",z,[t[17]||(t[17]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Circle Countdown")])])],-1)),e.createElementVNode("div",A,[e.createElementVNode("div",G,[e.createElementVNode("div",J,[e.createElementVNode("div",K,[e.createElementVNode("div",L,[e.createElementVNode("h1",O,e.toDisplayString(n.value.days),1)]),t[11]||(t[11]=e.createElementVNode("h4",{class:"clock-text"}," Days ",-1))]),e.createElementVNode("div",P,[e.createElementVNode("div",Q,[e.createElementVNode("h1",R,e.toDisplayString(n.value.hours),1)]),t[12]||(t[12]=e.createElementVNode("h4",{class:"clock-text"}," Hours ",-1))]),e.createElementVNode("div",W,[e.createElementVNode("div",X,[e.createElementVNode("h1",Z,e.toDisplayString(n.value.minutes),1)]),t[13]||(t[13]=e.createElementVNode("h4",{class:"clock-text"}," Mins ",-1))]),e.createElementVNode("div",ee,[e.createElementVNode("div",te,[e.createElementVNode("h1",oe,e.toDisplayString(n.value.seconds),1)]),t[14]||(t[14]=e.createElementVNode("h4",{class:"clock-text"}," Sec ",-1))])])]),e.createElementVNode("div",le,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=E=>r("code2"))},t[15]||(t[15]=[e.createElementVNode("span",null,"Code",-1)])),s.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",ce,[e.createVNode(v,null,{default:e.withCtx(()=>t[16]||(t[16]=[e.createElementVNode("div",null,[e.createElementVNode("pre",null,`<div id="cd-circle">
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo2.days }}</h1>
        </div>
        <h4 class="clock-text">Days</h4>
    </div>
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo2.hours }}</h1>
        </div>
        <h4 class="clock-text">Hours</h4>
    </div>
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo2.minutes }}</h1>
        </div>
        <h4 class="clock-text">Mins</h4>
    </div>
    <div class="countdown">
        <div class="clock-count-container">
            <h1 class="clock-val">{{ demo2.seconds }}</h1>
        </div>
        <h4 class="clock-text">Sec</h4>
    </div>
</div>
                                            `)],-1)])),_:1})])):e.createCommentVNode("",!0)])])])])])),[[h]])])])}}};export{ue as default};
