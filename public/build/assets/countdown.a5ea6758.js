/* empty css                     */import{_ as m}from"./highlight.525eee91.js";import{x as v,y as C,A as M,a5 as h,o as i,c as _,a2 as S,a as s,p,t as l,i as w,l as x,e as b,at as I}from"./app-setting.26d76640.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const T={class:"container"},B=s("ul",{class:"navbar-nav flex-row"},[s("li",null,[s("div",{class:"page-header"},[s("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[s("ol",{class:"breadcrumb"},[s("li",{class:"breadcrumb-item"},[s("a",{href:"javascript:;"},"Components")]),s("li",{class:"breadcrumb-item active","aria-current":"page"},[s("span",null,"Countdown")])])])])])],-1),H={class:"container"},N={id:"navSection",class:"nav sidenav"},V={class:"sidenav-content"},$=s("a",{href:"#countdownseperator",class:"nav-link"},"Seperator",-1),F=s("a",{href:"#countdowncircle",class:"nav-link"},"Circle",-1),Y=[$,F],j={class:"row layout-top-spacing"},A={id:"countdownseperator",class:"col-lg-12 col-12 layout-spacing"},E={class:"statbox panel box box-shadow"},U=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Simple Countdown")])])],-1),q={class:"panel-body text-center"},z={class:"container"},G={id:"cd-simple"},J={class:"countdown"},K={class:"clock-count-container"},L={class:"clock-val"},O=s("h4",{class:"clock-text"},"Days",-1),P={class:"countdown"},Q={class:"clock-count-container"},R={class:"clock-val"},W=s("h4",{class:"clock-text"},"Hours",-1),X={class:"countdown"},Z={class:"clock-count-container"},ss={class:"clock-val"},cs=s("h4",{class:"clock-text"},"Mins",-1),os={class:"countdown"},ts={class:"clock-count-container"},ns={class:"clock-val"},es=s("h4",{class:"clock-text"},"Sec",-1),ls={class:"code-section-container show-code"},as=s("span",null,"Code",-1),is=[as],ds={key:0,class:"code-section text-start"},vs=s("div",null,[s("pre",null,`<div id="cd-simple">
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
                                            `)],-1),_s={id:"countdowncircle",class:"col-lg-12 col-12 layout-spacing"},us={class:"statbox panel box box-shadow"},rs=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Circle Countdown")])])],-1),hs={class:"panel-body text-center"},ks={class:"container"},ms={id:"cd-circle"},ps={class:"countdown"},ws={class:"clock-count-container"},xs={class:"clock-val"},bs=s("h4",{class:"clock-text"},"Days",-1),ys={class:"countdown"},fs={class:"clock-count-container"},gs={class:"clock-val"},Ds=s("h4",{class:"clock-text"},"Hours",-1),Cs={class:"countdown"},Ms={class:"clock-count-container"},Ss={class:"clock-val"},Is=s("h4",{class:"clock-text"},"Mins",-1),Ts={class:"countdown"},Bs={class:"clock-count-container"},Hs={class:"clock-val"},Ns=s("h4",{class:"clock-text"},"Sec",-1),Vs={class:"code-section-container show-code"},$s=s("span",null,"Code",-1),Fs=[$s],Ys={key:0,class:"code-section text-start"},js=s("div",null,[s("pre",null,`<div id="cd-circle">
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
                                            `)],-1),Js={__name:"countdown",setup(As){const a=v([]),u=v(null),n=v({days:null,hours:null,minutes:null,seconds:null}),r=v(null),e=v({days:null,hours:null,minutes:null,seconds:null});C(()=>{y(),f()}),M(()=>{clearInterval(u.value),clearInterval(r.value)});const k=o=>{a.value.includes(o)?a.value=a.value.filter(t=>t!=o):a.value.push(o)},y=()=>{let o=new Date;o.setDate(o.getDate()+3);let t=o.getTime();u.value=setInterval(()=>{let d=new Date().getTime(),c=t-d;n.value.days=Math.floor(c/(1e3*60*60*24)),n.value.hours=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),n.value.minutes=Math.floor(c%(1e3*60*60)/(1e3*60)),n.value.seconds=Math.floor(c%(1e3*60)/1e3),c<0&&clearInterval(u.value)},500)},f=()=>{let o=new Date;o.setFullYear(o.getFullYear()+1);let t=o.getTime();r.value=setInterval(()=>{let d=new Date().getTime(),c=t-d;e.value.days=Math.floor(c/(1e3*60*60*24)),e.value.hours=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),e.value.minutes=Math.floor(c%(1e3*60*60)/(1e3*60)),e.value.seconds=Math.floor(c%(1e3*60)/1e3),c<0&&clearInterval(r.value)},500)};return(o,t)=>{const d=h("scroll-spy-active"),c=h("scroll-spy-link"),g=h("scroll-spy");return i(),_("div",T,[(i(),S(I,{to:"#breadcrumb"},[B])),s("div",H,[s("div",N,[p((i(),_("div",V,Y)),[[d],[c]])]),p((i(),_("div",j,[s("div",A,[s("div",E,[U,s("div",q,[s("div",z,[s("div",G,[s("div",J,[s("div",K,[s("h1",L,l(n.value.days),1)]),O]),s("div",P,[s("div",Q,[s("h1",R,l(n.value.hours),1)]),W]),s("div",X,[s("div",Z,[s("h1",ss,l(n.value.minutes),1)]),cs]),s("div",os,[s("div",ts,[s("h1",ns,l(n.value.seconds),1)]),es])])]),s("div",ls,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[0]||(t[0]=D=>k("code1"))},is),a.value.includes("code1")?(i(),_("div",ds,[w(m,null,{default:x(()=>[vs]),_:1})])):b("",!0)])])])]),s("div",_s,[s("div",us,[rs,s("div",hs,[s("div",ks,[s("div",ms,[s("div",ps,[s("div",ws,[s("h1",xs,l(e.value.days),1)]),bs]),s("div",ys,[s("div",fs,[s("h1",gs,l(e.value.hours),1)]),Ds]),s("div",Cs,[s("div",Ms,[s("h1",Ss,l(e.value.minutes),1)]),Is]),s("div",Ts,[s("div",Bs,[s("h1",Hs,l(e.value.seconds),1)]),Ns])])]),s("div",Vs,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=D=>k("code2"))},Fs),a.value.includes("code2")?(i(),_("div",Ys,[w(m,null,{default:x(()=>[js]),_:1})])):b("",!0)])])])])])),[[g]])])])}}};export{Js as default};
