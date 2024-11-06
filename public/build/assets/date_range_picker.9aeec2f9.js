import{x as l,y as Q,f as W,a5 as P,o as i,c as d,a2 as Z,a as s,p as h,i as a,u as $,l as v,e as _,t as n,m as r,X as y,F as ss,g as es,ao as os,Y,at as ts}from"./app-setting.08d4c509.js";/* empty css                     */import{_ as p}from"./highlight.a21e2a3d.js";import{f as B}from"./custom-flatpickr.06964878.js";import"./_commonjsHelpers.f037b798.js";/* empty css                        */const ns={class:"container"},ls=s("ul",{class:"navbar-nav flex-row"},[s("li",null,[s("div",{class:"page-header"},[s("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[s("ol",{class:"breadcrumb"},[s("li",{class:"breadcrumb-item"},[s("a",{href:"javascript:;"},"Forms")]),s("li",{class:"breadcrumb-item active","aria-current":"page"},[s("span",null,"Date and Range Picker")])])])])])],-1),as={class:"container"},is={class:"nav sidenav"},cs={class:"sidenav-content"},ds=s("a",{href:"#date_time_picker",class:"nav-link"},"Date Time Picker",-1),rs=s("a",{href:"#js_range_slider",class:"nav-link"},"JS Range Slider",-1),us=s("a",{href:"#noUi_sliders",class:"nav-link"},"noUi Sliders",-1),vs=[ds,rs,us],_s=Y('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-flatpickr-component" class="text-info"> https://www.npmjs.com/package/vue-flatpickr-component </a></div></div></div>',1),ps={class:"row"},ms=s("div",{id:"date_time_picker",class:"col-lg-12 layout-top-spacing"},[s("div",{class:"seperator-header"},[s("h4",{class:""},"Date and Time Picker")])],-1),gs={class:"col-lg-12 col-12 layout-spacing"},hs={class:"statbox panel box box-shadow"},bs=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Basic")])])],-1),fs={class:"panel-body"},xs={class:"form-group mb-0"},ws={class:"code-section-container show-code"},ks=s("span",null,"Code",-1),ys=[ks],Cs={key:0,class:"code-section text-start"},Vs=s("pre",null,`<!-- Basic -->
<flat-pickr v-model="date1" class="form-control flatpickr active"></flat-pickr>
`,-1),Ts={class:"col-lg-12 col-12 layout-spacing"},Us={class:"statbox panel box box-shadow"},Fs=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Date Time")])])],-1),$s={class:"panel-body"},Bs=s("p",null,[r("Use "),s("code",null,"{enableTime: true, dateFormat: 'Y-m-d H:i'}"),r(" option to enable time support")],-1),Ns={class:"form-group mb-0"},Ss={class:"code-section-container show-code"},Ds=s("span",null,"Code",-1),Ms=[Ds],Ps={key:0,class:"code-section text-start"},js=s("pre",null,`<!-- Date Time -->
<flat-pickr v-model="date2" :config="{enableTime: true, dateFormat: 'Y-m-d H:i'}" class="form-control flatpickr active"></flat-pickr>
`,-1),Ls={class:"col-lg-12 col-12 layout-spacing"},Rs={class:"statbox panel box box-shadow"},Hs=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Range Calendar")])])],-1),Js={class:"panel-body"},Ys=s("p",null,[r("Use "),s("code",null,"{mode: 'range'}"),r(" select the date with range.")],-1),Is={class:"form-group mb-0"},As={class:"code-section-container show-code"},Os=s("span",null,"Code",-1),Es=[Os],Xs={key:0,class:"code-section text-start"},qs=s("pre",null,`<!-- Range Calendar -->
<flat-pickr v-model="date3" :config="{mode: 'range'}" class="form-control flatpickr active"></flat-pickr>
`,-1),zs={class:"col-lg-12 col-12 layout-spacing"},Gs={class:"statbox panel box box-shadow"},Ks=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Preloading Time")])])],-1),Qs={class:"panel-body"},Ws=s("p",null,[r("Use "),s("code",null,"{noCalendar: true, enableTime: true, dateFormat: 'H:i'}"),r(" with Date Time options to disable calendar and show time picker only.")],-1),Zs={class:"form-group mb-0"},se={class:"code-section-container show-code"},ee=s("span",null,"Code",-1),oe=[ee],te={key:0,class:"code-section text-start"},ne=s("pre",null,`<!-- Preloading Time -->
<flat-pickr v-model="date4" :config="{noCalendar: true, enableTime: true, dateFormat: 'H:i'}" class="form-control flatpickr active"></flat-pickr>
`,-1),le={class:"row"},ae=s("div",{id:"js_range_slider",class:"col-lg-12"},[s("div",{class:"seperator-header"},[s("h4",{class:""},"Javascript Range Slider")])],-1),ie={class:"col-lg-12 col-12 layout-spacing"},ce={class:"statbox panel box box-shadow"},de=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Top-Left")])])],-1),re={class:"panel-body"},ue={class:"custom-progress progress-up",style:{width:"100%"}},ve={class:"range-count"},_e={class:"range-count-number"},pe=s("span",{class:"range-count-unit"},"%",-1),me={class:"code-section-container show-code"},ge=s("span",null,"Code",-1),he=[ge],be={key:0,class:"code-section text-start"},fe={class:"col-lg-12 col-12 layout-spacing"},xe={class:"statbox panel box box-shadow"},we=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Top-Right")])])],-1),ke={class:"panel-body"},ye={class:"custom-progress top-right progress-up",style:{width:"100%"}},Ce={class:"range-count"},Ve={class:"range-count-number"},Te=s("span",{class:"range-count-unit"},"%",-1),Ue={class:"code-section-container show-code"},Fe=s("span",null,"Code",-1),$e=[Fe],Be={key:0,class:"code-section text-start"},Ne={class:"col-lg-12 col-12 layout-spacing"},Se={class:"statbox panel box box-shadow"},De=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Bottom-Left")])])],-1),Me={class:"panel-body"},Pe={class:"custom-progress progress-down",style:{width:"100%"}},je={class:"range-count"},Le={class:"range-count-number"},Re=s("span",{class:"range-count-unit"},"%",-1),He={class:"code-section-container show-code"},Je=s("span",null,"Code",-1),Ye=[Je],Ie={key:0,class:"code-section text-start"},Ae={class:"col-lg-12 col-12 layout-spacing"},Oe={class:"statbox panel box box-shadow"},Ee=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Bottom-Right")])])],-1),Xe={class:"panel-body"},qe={class:"custom-progress bottom-right progress-down",style:{width:"100%"}},ze={class:"range-count"},Ge={class:"range-count-number"},Ke=s("span",{class:"range-count-unit"},"%",-1),Qe={class:"code-section-container show-code"},We=s("span",null,"Code",-1),Ze=[We],so={key:0,class:"code-section text-start"},eo=Y('<div class="row my-4"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue3-nouislider" class="text-info"> https://www.npmjs.com/package/vue3-nouislider </a></div></div></div>',1),oo={class:"row"},to=s("div",{id:"noUi_sliders",class:"col-lg-12"},[s("div",{class:"seperator-header"},[s("h4",{class:""},"noUI Slider")])],-1),no={class:"col-lg-12 layout-spacing"},lo={class:"row"},ao={class:"col-lg-12 mb-4"},io={class:"statbox panel box box-shadow"},co=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",{class:"mb-4"},"Using HTML5 input elements")])])],-1),ro={class:"panel-body align-center"},uo={class:"container"},vo=s("br",null,null,-1),_o={class:"row mt-4 mb-4"},po={class:"col-lg-6 mb-3"},mo=["value"],go={class:"col-lg-6"},ho={class:"code-section-container show-code"},bo=s("span",null,"Code",-1),fo=[bo],xo={key:0,class:"code-section text-start"},wo={class:"col-lg-12"},ko={class:"statbox panel box box-shadow"},yo=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",{class:"mb-4"},"Non linear slider")])])],-1),Co={class:"panel-body align-center"},Vo={class:"container"},To=s("br",null,null,-1),Uo={class:"row mt-4 mb-4"},Fo={class:"col-lg-6"},$o={class:"example-val"},Bo={class:"precentage-val"},No={class:"col-lg-6 text-end"},So={class:"example-val"},Do={class:"precentage-val"},Mo={class:"code-section-container show-code"},Po=s("span",null,"Code",-1),jo=[Po],Lo={key:0,class:"code-section text-start"},Ro={class:"col-lg-12 layout-spacing"},Ho={class:"statbox panel box box-shadow"},Jo=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",{class:"mb-4"},"Locking sliders together")])])],-1),Yo={class:"panel-body align-center"},Io={class:"container"},Ao={class:"row mb-4"},Oo={class:"col-lg-12 mb-5"},Eo={class:"example-val mt-4 d-inline-block"},Xo=s("br",null,null,-1),qo={class:"row mb-0"},zo={class:"col-lg-12 mb-5"},Go={class:"example-val mt-4 d-inline-block"},Ko={class:"row"},Qo={class:"col-lg-12"},Wo={class:"code-section-container show-code"},Zo=s("span",null,"Code",-1),st=[Zo],et={key:0,class:"code-section text-start"},dt={__name:"date_range_picker",setup(ot){const c=l([]),j=l("2020-09-04"),L=l("2020-09-19 12:00"),R=l(""),H=l("13:45"),C=l(0),V=l(0),T=l(0),U=l(0),m=l(10),g=l(30),x=l(500),w=l(4e3),N=l(0),S=l(0),b=l(60),f=l(80),k=l(!1),D=l([60,80]);Q(()=>{M(m.value,g.value)});const u=t=>{c.value.includes(t)?c.value=c.value.filter(e=>e!=t):c.value.push(t)},M=(t,e)=>{m.value=parseInt(t),g.value=parseInt(e)},I=t=>{t&&(m.value=Math.round(parseFloat(t[0])),g.value=parseFloat(t[1]))},A=t=>{t&&(x.value=t[0],w.value=t[1],N.value=parseFloat((x.value*.01).toFixed(2)),S.value=parseFloat((w.value*.01).toFixed(2)))},O=t=>{t&&(b.value=parseFloat(t[0]),q())},E=t=>{t&&(f.value=parseFloat(t[0]))},X=()=>{D.value=[Number(b.value),Number(f.value)]},q=()=>{if(k.value){let t=JSON.parse(JSON.stringify(b.value));t-=D.value[0]-D.value[1],f.value=parseFloat(t.toFixed(2))}};return(t,e)=>{const F=W("vue-nouislider"),z=P("scroll-spy-active"),G=P("scroll-spy-link"),K=P("scroll-spy");return i(),d("div",ns,[(i(),Z(ts,{to:"#breadcrumb"},[ls])),s("div",as,[s("div",is,[h((i(),d("div",cs,vs)),[[z],[G]])]),_s,h((i(),d("div",null,[s("div",ps,[ms,s("div",gs,[s("div",hs,[bs,s("div",fs,[s("div",xs,[a($(B),{modelValue:j.value,"onUpdate:modelValue":e[0]||(e[0]=o=>j.value=o),class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",ws,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[1]||(e[1]=o=>u("code1"))},ys),c.value.includes("code1")?(i(),d("div",Cs,[a(p,null,{default:v(()=>[Vs]),_:1})])):_("",!0)])])])]),s("div",Ts,[s("div",Us,[Fs,s("div",$s,[Bs,s("div",Ns,[a($(B),{modelValue:L.value,"onUpdate:modelValue":e[2]||(e[2]=o=>L.value=o),config:{enableTime:!0,dateFormat:"Y-m-d H:i"},class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",Ss,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[3]||(e[3]=o=>u("code2"))},Ms),c.value.includes("code2")?(i(),d("div",Ps,[a(p,null,{default:v(()=>[js]),_:1})])):_("",!0)])])])]),s("div",Ls,[s("div",Rs,[Hs,s("div",Js,[Ys,s("div",Is,[a($(B),{modelValue:R.value,"onUpdate:modelValue":e[4]||(e[4]=o=>R.value=o),config:{mode:"range"},class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",As,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[5]||(e[5]=o=>u("code3"))},Es),c.value.includes("code3")?(i(),d("div",Xs,[a(p,null,{default:v(()=>[qs]),_:1})])):_("",!0)])])])]),s("div",zs,[s("div",Gs,[Ks,s("div",Qs,[Ws,s("div",Zs,[a($(B),{modelValue:H.value,"onUpdate:modelValue":e[6]||(e[6]=o=>H.value=o),config:{noCalendar:!0,enableTime:!0,dateFormat:"H:i"},class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",se,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[7]||(e[7]=o=>u("code4"))},oe),c.value.includes("code4")?(i(),d("div",te,[a(p,null,{default:v(()=>[ne]),_:1})])):_("",!0)])])])])]),s("div",le,[ae,s("div",ie,[s("div",ce,[de,s("div",re,[s("div",ue,[s("div",ve,[s("span",_e,n(C.value),1),r(),pe]),h(s("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=o=>C.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,C.value]])]),s("div",me,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[9]||(e[9]=o=>u("code5"))},he),c.value.includes("code5")?(i(),d("div",be,[a(p,null,{default:v(()=>[s("pre",null,`<!-- Top-Left -->
<div class="custom-progress progress-up" style="width: 100%">
    <div class="range-count">
        <span class="range-count-number">`+n(C.value)+`</span> <span class="range-count-unit">%</span>
    </div>
    <input type="range" v-model="slider1" :min="0" :max="100" class="progress-range-counter form-range" />
</div>
`,1)]),_:1})])):_("",!0)])])])]),s("div",fe,[s("div",xe,[we,s("div",ke,[s("div",ye,[s("div",Ce,[s("span",Ve,n(V.value),1),r(),Te]),h(s("input",{type:"range","onUpdate:modelValue":e[10]||(e[10]=o=>V.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,V.value]])]),s("div",Ue,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[11]||(e[11]=o=>u("code6"))},$e),c.value.includes("code6")?(i(),d("div",Be,[a(p,null,{default:v(()=>[s("pre",null,`<!-- Top-Right -->
<div class="custom-progress top-right progress-up" style="width: 100%">
   <div class="range-count">
        <span class="range-count-number">`+n(V.value)+`</span> <span class="range-count-unit">%</span>
    </div>
    <input type="range" v-model="slider2" :min="0" :max="100" class="progress-range-counter form-range" />
</div>
`,1)]),_:1})])):_("",!0)])])])]),s("div",Ne,[s("div",Se,[De,s("div",Me,[s("div",Pe,[h(s("input",{type:"range","onUpdate:modelValue":e[12]||(e[12]=o=>T.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,T.value]]),s("div",je,[s("span",Le,n(T.value),1),r(),Re])]),s("div",He,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[13]||(e[13]=o=>u("code7"))},Ye),c.value.includes("code7")?(i(),d("div",Ie,[a(p,null,{default:v(()=>[s("pre",null,`<!-- Bottom-Left -->
<div class="custom-progress progress-down" style="width: 100%">
    <input type="range" v-model="slider3" :min="0" :max="100" class="progress-range-counter form-range" />
   <div class="range-count">
        <span class="range-count-number">`+n(T.value)+`</span> <span class="range-count-unit">%</span>
    </div>
</div>
`,1)]),_:1})])):_("",!0)])])])]),s("div",Ae,[s("div",Oe,[Ee,s("div",Xe,[s("div",qe,[h(s("input",{type:"range","onUpdate:modelValue":e[14]||(e[14]=o=>U.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,U.value]]),s("div",ze,[s("span",Ge,n(U.value),1),r(),Ke])]),s("div",Qe,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[15]||(e[15]=o=>u("code8"))},Ze),c.value.includes("code8")?(i(),d("div",so,[a(p,null,{default:v(()=>[s("pre",null,`<!-- Bottom-Right -->
<div class="custom-progress bottom-right progress-down" style="width: 100%">
    <input type="range" v-model="slider4" :min="0" :max="100" class="progress-range-counter form-range" />
   <div class="range-count">
        <span class="range-count-number">`+n(U.value)+`</span> <span class="range-count-unit">%</span>
    </div>
</div>
`,1)]),_:1})])):_("",!0)])])])])]),eo,s("div",oo,[to,s("div",no,[s("div",lo,[s("div",ao,[s("div",io,[co,s("div",ro,[s("div",uo,[a(F,{values:[m.value,g.value],config:{range:{min:-20,max:40},connect:!0,tooltips:!0},start:[m.value,g.value],"onUpdate:values":I},null,8,["values","start"]),vo,s("div",_o,[s("div",po,[h(s("select",{"onUpdate:modelValue":e[16]||(e[16]=o=>m.value=o),class:"form-select w-100",onChange:e[17]||(e[17]=o=>M(m.value,g.value))},[(i(),d(ss,null,es(61,(o,J)=>s("option",{key:o,value:J-20},n(J-20),9,mo)),64))],544),[[os,m.value]])]),s("div",go,[h(s("input",{type:"number","onUpdate:modelValue":e[18]||(e[18]=o=>g.value=o),class:"form-control",min:-20,max:40,step:"1",onChange:e[19]||(e[19]=o=>M(m.value,g.value))},null,544),[[y,g.value]])])])]),s("div",ho,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[20]||(e[20]=o=>u("code9"))},fo),c.value.includes("code9")?(i(),d("div",xo,[a(p,null,{default:v(()=>[s("pre",null,`<!-- HTML5 input elements -->
<div class="container">
    <vue-nouislider
        :values="[noui_min1, noui_max1]"
        :config="{
            range: { min: -20, max: 40 },
            connect: true,
            tooltips: true,
        }"
        :start="[noui_min1, noui_max1]"
        @update:values="noui_update1"
    ></vue-nouislider>
    <br />
    <div class="row mt-4 mb-4">
        <div class="col-lg-6 mb-3">
            <select v-model="noui_min1" class="form-select w-100" @change="noui_change1(noui_min1, noui_max1)">
                <option v-for="(i, index) in 61" :key="i" :value="index - 20">`+n(t.index-20)+`</option>
            </select>
        </div>
        <div class="col-lg-6">
            <input type="number" v-model="noui_max1" class="form-control" :min="-20" :max="40" step="1" @change="noui_change1(noui_min1, noui_max1)" />
        </div>
    </div>
</div>
`,1)]),_:1})])):_("",!0)])])])]),s("div",wo,[s("div",ko,[yo,s("div",Co,[s("div",Vo,[a(F,{values:[x.value,w.value],config:{range:{min:[0],"10%":[500,500],"50%":[4e3,1e3],max:[1e4]},connect:!0,tooltips:!0,behaviour:"tap"},start:[x.value,w.value],"onUpdate:values":A},null,8,["values","start"]),To,s("div",Uo,[s("div",Fo,[s("span",$o,[r(n(x.value)+" ",1),s("span",Bo,n(N.value)+"%",1)])]),s("div",No,[s("span",So,[r(n(w.value)+" ",1),s("span",Do,n(S.value)+"%",1)])])])]),s("div",Mo,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[21]||(e[21]=o=>u("code10"))},jo),c.value.includes("code10")?(i(),d("div",Lo,[a(p,null,{default:v(()=>[s("pre",null,`<!-- Non linear slider -->
<div class="container">
    <vue-nouislider
        :values="[noui_min2, noui_max2]"
        :config="{
            range: { min: [0], '10%': [500, 500], '50%': [4000, 1000], max: [10000] },
            connect: true,
            tooltips: true,
            behaviour: 'tap',
        }"
        :start="[noui_min2, noui_max2]"
        @update:values="noui_update2"
    ></vue-nouislider>

    <br />
    <div class="row mt-4 mb-4">
        <div class="col-lg-6">
            <span class="example-val"
                >`+n(x.value)+' <span class="precentage-val">'+n(N.value)+`%</span></span
            >
        </div>
        <div class="col-lg-6 text-end">
            <span class="example-val"
                >`+n(w.value)+' <span class="precentage-val">'+n(S.value)+`%</span></span
            >
        </div>
    </div>
</div>
`,1)]),_:1})])):_("",!0)])])])])])]),s("div",Ro,[s("div",Ho,[Jo,s("div",Yo,[s("div",Io,[s("div",Ao,[s("div",Oo,[a(F,{values:[b.value],config:{range:{min:50,max:100},animate:!1,tooltips:!0},start:[b.value],"onUpdate:values":O},null,8,["values","start"]),s("span",Eo,n(b.value),1)])]),Xo,s("div",qo,[s("div",zo,[a(F,{values:[f.value],config:{range:{min:50,max:100},animate:!1,tooltips:!0},start:[f.value],"onUpdate:values":E},null,8,["values","start"]),s("span",Go,n(f.value),1)])]),s("div",Ko,[s("div",Qo,[s("button",{type:"button",class:"btn btn-primary my-4 float-end",onClick:e[22]||(e[22]=o=>{k.value=!k.value,X()})},n(k.value?"unlock":"lock"),1)])])]),s("div",Wo,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[23]||(e[23]=o=>u("code11"))},st),c.value.includes("code11")?(i(),d("div",et,[a(p,null,{default:v(()=>[s("pre",null,`<!-- Locking sliders together -->
<div class="container">
    <div class="row mb-4">
        <div class="col-lg-12 mb-5">
            <vue-nouislider
                :values="[noui_min3]"
                :config="{
                    range: { min: 50, max: 100 },
                    animate: false,
                    tooltips: true,
                }"
                :start="[noui_min3]"
                @update:values="noui_update3"
            ></vue-nouislider>
            <span class="example-val mt-4 d-inline-block">`+n(b.value)+`</span>
        </div>
    </div>
    <br />
    <div class="row mb-0">
        <div class="col-lg-12 mb-5">
            <vue-nouislider
                :values="[noui_min4]"
                :config="{
                    range: { min: 50, max: 100 },
                    animate: false,
                    tooltips: true,
                }"
                :start="[noui_min4]"
                @update:values="noui_update4"
            ></vue-nouislider>

            <span class="example-val mt-4 d-inline-block">`+n(f.value)+`</span>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <button
                type="button"
                class="btn btn-primary my-4 float-end"
                @click="
                    is_lock = !is_lock;
                    set_locked_values();
                "
            >
                `+n(k.value?"unlock":"lock")+`
            </button>
        </div>
    </div>
</div>
`,1)]),_:1})])):_("",!0)])])])])])])),[[K]])])])}}};export{dt as default};
