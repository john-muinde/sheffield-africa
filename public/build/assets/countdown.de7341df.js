/* empty css                     */import{_ as m}from"./highlight.6cbe5657.js";import{q as v,s as C,x as M,a7 as _,o as i,c as u,P as S,a as s,ar as I,m as p,t as e,h as w,k as x,e as b}from"./app-setting.176c951c.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const T={class:"container"},B={class:"container"},H={id:"navSection",class:"nav sidenav"},N={class:"sidenav-content"},V={class:"row layout-top-spacing"},$={id:"countdownseperator",class:"col-lg-12 col-12 layout-spacing"},F={class:"statbox panel box box-shadow"},Y={class:"panel-body text-center"},j={class:"container"},q={id:"cd-simple"},E={class:"countdown"},P={class:"clock-count-container"},U={class:"clock-val"},z={class:"countdown"},A={class:"clock-count-container"},G={class:"clock-val"},J={class:"countdown"},K={class:"clock-count-container"},L={class:"clock-val"},O={class:"countdown"},Q={class:"clock-count-container"},R={class:"clock-val"},W={class:"code-section-container show-code"},X={key:0,class:"code-section text-start"},Z={id:"countdowncircle",class:"col-lg-12 col-12 layout-spacing"},ss={class:"statbox panel box box-shadow"},os={class:"panel-body text-center"},ts={class:"container"},cs={id:"cd-circle"},ns={class:"countdown"},ls={class:"clock-count-container"},es={class:"clock-val"},as={class:"countdown"},is={class:"clock-count-container"},ds={class:"clock-val"},vs={class:"countdown"},us={class:"clock-count-container"},rs={class:"clock-val"},hs={class:"countdown"},_s={class:"clock-count-container"},ks={class:"clock-val"},ms={class:"code-section-container show-code"},ps={key:0,class:"code-section text-start"},Ds={__name:"countdown",setup(ws){const a=v([]),r=v(null),n=v({days:null,hours:null,minutes:null,seconds:null}),h=v(null),l=v({days:null,hours:null,minutes:null,seconds:null});C(()=>{y(),f()}),M(()=>{clearInterval(r.value),clearInterval(h.value)});const k=c=>{a.value.includes(c)?a.value=a.value.filter(o=>o!=c):a.value.push(c)},y=()=>{let c=new Date;c.setDate(c.getDate()+3);let o=c.getTime();r.value=setInterval(()=>{let d=new Date().getTime(),t=o-d;n.value.days=Math.floor(t/(1e3*60*60*24)),n.value.hours=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),n.value.minutes=Math.floor(t%(1e3*60*60)/(1e3*60)),n.value.seconds=Math.floor(t%(1e3*60)/1e3),t<0&&clearInterval(r.value)},500)},f=()=>{let c=new Date;c.setFullYear(c.getFullYear()+1);let o=c.getTime();h.value=setInterval(()=>{let d=new Date().getTime(),t=o-d;l.value.days=Math.floor(t/(1e3*60*60*24)),l.value.hours=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),l.value.minutes=Math.floor(t%(1e3*60*60)/(1e3*60)),l.value.seconds=Math.floor(t%(1e3*60)/1e3),t<0&&clearInterval(h.value)},500)};return(c,o)=>{const d=_("scroll-spy-active"),t=_("scroll-spy-link"),g=_("scroll-spy");return i(),u("div",T,[(i(),S(I,{to:"#breadcrumb"},[o[2]||(o[2]=s("ul",{class:"navbar-nav flex-row"},[s("li",null,[s("div",{class:"page-header"},[s("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[s("ol",{class:"breadcrumb"},[s("li",{class:"breadcrumb-item"},[s("a",{href:"javascript:;"},"Components")]),s("li",{class:"breadcrumb-item active","aria-current":"page"},[s("span",null,"Countdown")])])])])])],-1))])),s("div",B,[s("div",H,[p((i(),u("div",N,o[3]||(o[3]=[s("a",{href:"#countdownseperator",class:"nav-link"},"Seperator",-1),s("a",{href:"#countdowncircle",class:"nav-link"},"Circle",-1)]))),[[d],[t]])]),p((i(),u("div",V,[s("div",$,[s("div",F,[o[10]||(o[10]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Simple Countdown")])])],-1)),s("div",Y,[s("div",j,[s("div",q,[s("div",E,[s("div",P,[s("h1",U,e(n.value.days),1)]),o[4]||(o[4]=s("h4",{class:"clock-text"},"Days",-1))]),s("div",z,[s("div",A,[s("h1",G,e(n.value.hours),1)]),o[5]||(o[5]=s("h4",{class:"clock-text"},"Hours",-1))]),s("div",J,[s("div",K,[s("h1",L,e(n.value.minutes),1)]),o[6]||(o[6]=s("h4",{class:"clock-text"},"Mins",-1))]),s("div",O,[s("div",Q,[s("h1",R,e(n.value.seconds),1)]),o[7]||(o[7]=s("h4",{class:"clock-text"},"Sec",-1))])])]),s("div",W,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[0]||(o[0]=D=>k("code1"))},o[8]||(o[8]=[s("span",null,"Code",-1)])),a.value.includes("code1")?(i(),u("div",X,[w(m,null,{default:x(()=>o[9]||(o[9]=[s("div",null,[s("pre",null,`<div id="cd-simple">
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
                                            `)],-1)])),_:1})])):b("",!0)])])])]),s("div",Z,[s("div",ss,[o[17]||(o[17]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Circle Countdown")])])],-1)),s("div",os,[s("div",ts,[s("div",cs,[s("div",ns,[s("div",ls,[s("h1",es,e(l.value.days),1)]),o[11]||(o[11]=s("h4",{class:"clock-text"},"Days",-1))]),s("div",as,[s("div",is,[s("h1",ds,e(l.value.hours),1)]),o[12]||(o[12]=s("h4",{class:"clock-text"},"Hours",-1))]),s("div",vs,[s("div",us,[s("h1",rs,e(l.value.minutes),1)]),o[13]||(o[13]=s("h4",{class:"clock-text"},"Mins",-1))]),s("div",hs,[s("div",_s,[s("h1",ks,e(l.value.seconds),1)]),o[14]||(o[14]=s("h4",{class:"clock-text"},"Sec",-1))])])]),s("div",ms,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:o[1]||(o[1]=D=>k("code2"))},o[15]||(o[15]=[s("span",null,"Code",-1)])),a.value.includes("code2")?(i(),u("div",ps,[w(m,null,{default:x(()=>o[16]||(o[16]=[s("div",null,[s("pre",null,`<div id="cd-circle">
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
                                            `)],-1)])),_:1})])):b("",!0)])])])])])),[[g]])])])}}};export{Ds as default};
