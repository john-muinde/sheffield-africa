import{z as t,o as Q,bx as W,C as M,bo as i,bp as c,bU as Z,bq as s,aB as ss,B as _,c4 as I,j as a,a2 as $,bC as v,bw as p,X as r,bv as l,c3 as y,S as ns,by as os,cr as es}from"./app-setting.c40d872f.js";/* empty css                     */import{_ as m}from"./highlight.b795a633.js";import{C as B}from"./custom-flatpickr.252f07a3.js";import"./_commonjsHelpers.f037b798.js";/* empty css                        */const ls={class:"container"},ts={class:"container"},as={class:"nav sidenav"},is={class:"sidenav-content"},ds={class:"row"},cs={class:"col-lg-12 col-12 layout-spacing"},rs={class:"statbox panel box box-shadow"},us={class:"panel-body"},vs={class:"form-group mb-0"},ps={class:"code-section-container show-code"},ms={key:0,class:"code-section text-start"},gs={class:"col-lg-12 col-12 layout-spacing"},bs={class:"statbox panel box box-shadow"},_s={class:"panel-body"},fs={class:"form-group mb-0"},xs={class:"code-section-container show-code"},ws={key:0,class:"code-section text-start"},ks={class:"col-lg-12 col-12 layout-spacing"},hs={class:"statbox panel box box-shadow"},ys={class:"panel-body"},Cs={class:"form-group mb-0"},Us={class:"code-section-container show-code"},Vs={key:0,class:"code-section text-start"},Ts={class:"col-lg-12 col-12 layout-spacing"},Fs={class:"statbox panel box box-shadow"},$s={class:"panel-body"},Bs={class:"form-group mb-0"},Ss={class:"code-section-container show-code"},Ns={key:0,class:"code-section text-start"},Ds={class:"row"},js={class:"col-lg-12 col-12 layout-spacing"},Ms={class:"statbox panel box box-shadow"},Ls={class:"panel-body"},Ps={class:"custom-progress progress-up",style:{width:"100%"}},Rs={class:"range-count"},Hs={class:"range-count-number"},Js={class:"code-section-container show-code"},Is={key:0,class:"code-section text-start"},Ys={class:"col-lg-12 col-12 layout-spacing"},As={class:"statbox panel box box-shadow"},Os={class:"panel-body"},qs={class:"custom-progress top-right progress-up",style:{width:"100%"}},zs={class:"range-count"},Es={class:"range-count-number"},Xs={class:"code-section-container show-code"},Gs={key:0,class:"code-section text-start"},Ks={class:"col-lg-12 col-12 layout-spacing"},Qs={class:"statbox panel box box-shadow"},Ws={class:"panel-body"},Zs={class:"custom-progress progress-down",style:{width:"100%"}},sn={class:"range-count"},nn={class:"range-count-number"},on={class:"code-section-container show-code"},en={key:0,class:"code-section text-start"},ln={class:"col-lg-12 col-12 layout-spacing"},tn={class:"statbox panel box box-shadow"},an={class:"panel-body"},dn={class:"custom-progress bottom-right progress-down",style:{width:"100%"}},cn={class:"range-count"},rn={class:"range-count-number"},un={class:"code-section-container show-code"},vn={key:0,class:"code-section text-start"},pn={class:"row"},mn={class:"col-lg-12 layout-spacing"},gn={class:"row"},bn={class:"col-lg-12 mb-4"},_n={class:"statbox panel box box-shadow"},fn={class:"panel-body align-center"},xn={class:"container"},wn={class:"row mt-4 mb-4"},kn={class:"col-lg-6 mb-3"},hn=["value"],yn={class:"col-lg-6"},Cn={class:"code-section-container show-code"},Un={key:0,class:"code-section text-start"},Vn={class:"col-lg-12"},Tn={class:"statbox panel box box-shadow"},Fn={class:"panel-body align-center"},$n={class:"container"},Bn={class:"row mt-4 mb-4"},Sn={class:"col-lg-6"},Nn={class:"example-val"},Dn={class:"precentage-val"},jn={class:"col-lg-6 text-end"},Mn={class:"example-val"},Ln={class:"precentage-val"},Pn={class:"code-section-container show-code"},Rn={key:0,class:"code-section text-start"},Hn={class:"col-lg-12 layout-spacing"},Jn={class:"statbox panel box box-shadow"},In={class:"panel-body align-center"},Yn={class:"container"},An={class:"row mb-4"},On={class:"col-lg-12 mb-5"},qn={class:"example-val mt-4 d-inline-block"},zn={class:"row mb-0"},En={class:"col-lg-12 mb-5"},Xn={class:"example-val mt-4 d-inline-block"},Gn={class:"row"},Kn={class:"col-lg-12"},Qn={class:"code-section-container show-code"},Wn={key:0,class:"code-section text-start"},ao={__name:"date_range_picker",setup(Zn){const d=t([]),L=t("2020-09-04"),P=t("2020-09-19 12:00"),R=t(""),H=t("13:45"),C=t(0),U=t(0),V=t(0),T=t(0),g=t(10),b=t(30),w=t(500),k=t(4e3),S=t(0),N=t(0),f=t(60),x=t(80),h=t(!1),D=t([60,80]);Q(()=>{j(g.value,b.value)});const u=e=>{d.value.includes(e)?d.value=d.value.filter(n=>n!=e):d.value.push(e)},j=(e,n)=>{g.value=parseInt(e),b.value=parseInt(n)},Y=e=>{e&&(g.value=Math.round(parseFloat(e[0])),b.value=parseFloat(e[1]))},A=e=>{e&&(w.value=e[0],k.value=e[1],S.value=parseFloat((w.value*.01).toFixed(2)),N.value=parseFloat((k.value*.01).toFixed(2)))},O=e=>{e&&(f.value=parseFloat(e[0]),E())},q=e=>{e&&(x.value=parseFloat(e[0]))},z=()=>{D.value=[Number(f.value),Number(x.value)]},E=()=>{if(h.value){let e=JSON.parse(JSON.stringify(f.value));e-=D.value[0]-D.value[1],x.value=parseFloat(e.toFixed(2))}};return(e,n)=>{const F=W("vue-nouislider"),X=M("scroll-spy-active"),G=M("scroll-spy-link"),K=M("scroll-spy");return i(),c("div",ls,[(i(),Z(ss,{to:"#breadcrumb"},[n[24]||(n[24]=s("ul",{class:"navbar-nav flex-row"},[s("li",null,[s("div",{class:"page-header"},[s("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[s("ol",{class:"breadcrumb"},[s("li",{class:"breadcrumb-item"},[s("a",{href:"javascript:;"},"Forms")]),s("li",{class:"breadcrumb-item active","aria-current":"page"},[s("span",null,"Date and Range Picker")])])])])])],-1))])),s("div",ts,[s("div",as,[_((i(),c("div",is,n[25]||(n[25]=[s("a",{href:"#date_time_picker",class:"nav-link"},"Date Time Picker",-1),s("a",{href:"#js_range_slider",class:"nav-link"},"JS Range Slider",-1),s("a",{href:"#noUi_sliders",class:"nav-link"},"noUi Sliders",-1)]))),[[X],[G]])]),n[70]||(n[70]=I('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-flatpickr-component" class="text-info"> https://www.npmjs.com/package/vue-flatpickr-component </a></div></div></div>',1)),_((i(),c("div",null,[s("div",ds,[n[41]||(n[41]=s("div",{id:"date_time_picker",class:"col-lg-12 layout-top-spacing"},[s("div",{class:"seperator-header"},[s("h4",{class:""},"Date and Time Picker")])],-1)),s("div",cs,[s("div",rs,[n[28]||(n[28]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Basic")])])],-1)),s("div",us,[s("div",vs,[a($(B),{modelValue:L.value,"onUpdate:modelValue":n[0]||(n[0]=o=>L.value=o),class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",ps,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[1]||(n[1]=o=>u("code1"))},n[26]||(n[26]=[s("span",null,"Code",-1)])),d.value.includes("code1")?(i(),c("div",ms,[a(m,null,{default:v(()=>n[27]||(n[27]=[s("pre",null,`<!-- Basic -->
<flat-pickr v-model="date1" class="form-control flatpickr active"></flat-pickr>
`,-1)])),_:1})])):p("",!0)])])])]),s("div",gs,[s("div",bs,[n[32]||(n[32]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Date Time")])])],-1)),s("div",_s,[n[31]||(n[31]=s("p",null,[r("Use "),s("code",null,"{enableTime: true, dateFormat: 'Y-m-d H:i'}"),r(" option to enable time support")],-1)),s("div",fs,[a($(B),{modelValue:P.value,"onUpdate:modelValue":n[2]||(n[2]=o=>P.value=o),config:{enableTime:!0,dateFormat:"Y-m-d H:i"},class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",xs,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[3]||(n[3]=o=>u("code2"))},n[29]||(n[29]=[s("span",null,"Code",-1)])),d.value.includes("code2")?(i(),c("div",ws,[a(m,null,{default:v(()=>n[30]||(n[30]=[s("pre",null,`<!-- Date Time -->
<flat-pickr v-model="date2" :config="{enableTime: true, dateFormat: 'Y-m-d H:i'}" class="form-control flatpickr active"></flat-pickr>
`,-1)])),_:1})])):p("",!0)])])])]),s("div",ks,[s("div",hs,[n[36]||(n[36]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Range Calendar")])])],-1)),s("div",ys,[n[35]||(n[35]=s("p",null,[r("Use "),s("code",null,"{mode: 'range'}"),r(" select the date with range.")],-1)),s("div",Cs,[a($(B),{modelValue:R.value,"onUpdate:modelValue":n[4]||(n[4]=o=>R.value=o),config:{mode:"range"},class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",Us,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[5]||(n[5]=o=>u("code3"))},n[33]||(n[33]=[s("span",null,"Code",-1)])),d.value.includes("code3")?(i(),c("div",Vs,[a(m,null,{default:v(()=>n[34]||(n[34]=[s("pre",null,`<!-- Range Calendar -->
<flat-pickr v-model="date3" :config="{mode: 'range'}" class="form-control flatpickr active"></flat-pickr>
`,-1)])),_:1})])):p("",!0)])])])]),s("div",Ts,[s("div",Fs,[n[40]||(n[40]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Preloading Time")])])],-1)),s("div",$s,[n[39]||(n[39]=s("p",null,[r("Use "),s("code",null,"{noCalendar: true, enableTime: true, dateFormat: 'H:i'}"),r(" with Date Time options to disable calendar and show time picker only.")],-1)),s("div",Bs,[a($(B),{modelValue:H.value,"onUpdate:modelValue":n[6]||(n[6]=o=>H.value=o),config:{noCalendar:!0,enableTime:!0,dateFormat:"H:i"},class:"form-control flatpickr active"},null,8,["modelValue"])]),s("div",Ss,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[7]||(n[7]=o=>u("code4"))},n[37]||(n[37]=[s("span",null,"Code",-1)])),d.value.includes("code4")?(i(),c("div",Ns,[a(m,null,{default:v(()=>n[38]||(n[38]=[s("pre",null,`<!-- Preloading Time -->
<flat-pickr v-model="date4" :config="{noCalendar: true, enableTime: true, dateFormat: 'H:i'}" class="form-control flatpickr active"></flat-pickr>
`,-1)])),_:1})])):p("",!0)])])])])]),s("div",Ds,[n[58]||(n[58]=s("div",{id:"js_range_slider",class:"col-lg-12"},[s("div",{class:"seperator-header"},[s("h4",{class:""},"Javascript Range Slider")])],-1)),s("div",js,[s("div",Ms,[n[45]||(n[45]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Top-Left")])])],-1)),s("div",Ls,[s("div",Ps,[s("div",Rs,[s("span",Hs,l(C.value),1),n[42]||(n[42]=r()),n[43]||(n[43]=s("span",{class:"range-count-unit"},"%",-1))]),_(s("input",{type:"range","onUpdate:modelValue":n[8]||(n[8]=o=>C.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,C.value]])]),s("div",Js,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[9]||(n[9]=o=>u("code5"))},n[44]||(n[44]=[s("span",null,"Code",-1)])),d.value.includes("code5")?(i(),c("div",Is,[a(m,null,{default:v(()=>[s("pre",null,`<!-- Top-Left -->
<div class="custom-progress progress-up" style="width: 100%">
    <div class="range-count">
        <span class="range-count-number">`+l(C.value)+`</span> <span class="range-count-unit">%</span>
    </div>
    <input type="range" v-model="slider1" :min="0" :max="100" class="progress-range-counter form-range" />
</div>
`,1)]),_:1})])):p("",!0)])])])]),s("div",Ys,[s("div",As,[n[49]||(n[49]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Top-Right")])])],-1)),s("div",Os,[s("div",qs,[s("div",zs,[s("span",Es,l(U.value),1),n[46]||(n[46]=r()),n[47]||(n[47]=s("span",{class:"range-count-unit"},"%",-1))]),_(s("input",{type:"range","onUpdate:modelValue":n[10]||(n[10]=o=>U.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,U.value]])]),s("div",Xs,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[11]||(n[11]=o=>u("code6"))},n[48]||(n[48]=[s("span",null,"Code",-1)])),d.value.includes("code6")?(i(),c("div",Gs,[a(m,null,{default:v(()=>[s("pre",null,`<!-- Top-Right -->
<div class="custom-progress top-right progress-up" style="width: 100%">
   <div class="range-count">
        <span class="range-count-number">`+l(U.value)+`</span> <span class="range-count-unit">%</span>
    </div>
    <input type="range" v-model="slider2" :min="0" :max="100" class="progress-range-counter form-range" />
</div>
`,1)]),_:1})])):p("",!0)])])])]),s("div",Ks,[s("div",Qs,[n[53]||(n[53]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Bottom-Left")])])],-1)),s("div",Ws,[s("div",Zs,[_(s("input",{type:"range","onUpdate:modelValue":n[12]||(n[12]=o=>V.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,V.value]]),s("div",sn,[s("span",nn,l(V.value),1),n[50]||(n[50]=r()),n[51]||(n[51]=s("span",{class:"range-count-unit"},"%",-1))])]),s("div",on,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[13]||(n[13]=o=>u("code7"))},n[52]||(n[52]=[s("span",null,"Code",-1)])),d.value.includes("code7")?(i(),c("div",en,[a(m,null,{default:v(()=>[s("pre",null,`<!-- Bottom-Left -->
<div class="custom-progress progress-down" style="width: 100%">
    <input type="range" v-model="slider3" :min="0" :max="100" class="progress-range-counter form-range" />
   <div class="range-count">
        <span class="range-count-number">`+l(V.value)+`</span> <span class="range-count-unit">%</span>
    </div>
</div>
`,1)]),_:1})])):p("",!0)])])])]),s("div",ln,[s("div",tn,[n[57]||(n[57]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",null,"Postion : Bottom-Right")])])],-1)),s("div",an,[s("div",dn,[_(s("input",{type:"range","onUpdate:modelValue":n[14]||(n[14]=o=>T.value=o),min:0,max:100,class:"progress-range-counter form-range"},null,512),[[y,T.value]]),s("div",cn,[s("span",rn,l(T.value),1),n[54]||(n[54]=r()),n[55]||(n[55]=s("span",{class:"range-count-unit"},"%",-1))])]),s("div",un,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[15]||(n[15]=o=>u("code8"))},n[56]||(n[56]=[s("span",null,"Code",-1)])),d.value.includes("code8")?(i(),c("div",vn,[a(m,null,{default:v(()=>[s("pre",null,`<!-- Bottom-Right -->
<div class="custom-progress bottom-right progress-down" style="width: 100%">
    <input type="range" v-model="slider4" :min="0" :max="100" class="progress-range-counter form-range" />
   <div class="range-count">
        <span class="range-count-number">`+l(T.value)+`</span> <span class="range-count-unit">%</span>
    </div>
</div>
`,1)]),_:1})])):p("",!0)])])])])]),n[69]||(n[69]=I('<div class="row my-4"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue3-nouislider" class="text-info"> https://www.npmjs.com/package/vue3-nouislider </a></div></div></div>',1)),s("div",pn,[n[68]||(n[68]=s("div",{id:"noUi_sliders",class:"col-lg-12"},[s("div",{class:"seperator-header"},[s("h4",{class:""},"noUI Slider")])],-1)),s("div",mn,[s("div",gn,[s("div",bn,[s("div",_n,[n[61]||(n[61]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",{class:"mb-4"},"Using HTML5 input elements")])])],-1)),s("div",fn,[s("div",xn,[a(F,{values:[g.value,b.value],config:{range:{min:-20,max:40},connect:!0,tooltips:!0},start:[g.value,b.value],"onUpdate:values":Y},null,8,["values","start"]),n[59]||(n[59]=s("br",null,null,-1)),s("div",wn,[s("div",kn,[_(s("select",{"onUpdate:modelValue":n[16]||(n[16]=o=>g.value=o),class:"form-select w-100",onChange:n[17]||(n[17]=o=>j(g.value,b.value))},[(i(),c(ns,null,os(61,(o,J)=>s("option",{key:o,value:J-20},l(J-20),9,hn)),64))],544),[[es,g.value]])]),s("div",yn,[_(s("input",{type:"number","onUpdate:modelValue":n[18]||(n[18]=o=>b.value=o),class:"form-control",min:-20,max:40,step:"1",onChange:n[19]||(n[19]=o=>j(g.value,b.value))},null,544),[[y,b.value]])])])]),s("div",Cn,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[20]||(n[20]=o=>u("code9"))},n[60]||(n[60]=[s("span",null,"Code",-1)])),d.value.includes("code9")?(i(),c("div",Un,[a(m,null,{default:v(()=>[s("pre",null,`<!-- HTML5 input elements -->
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
                <option v-for="(i, index) in 61" :key="i" :value="index - 20">`+l(e.index-20)+`</option>
            </select>
        </div>
        <div class="col-lg-6">
            <input type="number" v-model="noui_max1" class="form-control" :min="-20" :max="40" step="1" @change="noui_change1(noui_min1, noui_max1)" />
        </div>
    </div>
</div>
`,1)]),_:1})])):p("",!0)])])])]),s("div",Vn,[s("div",Tn,[n[64]||(n[64]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",{class:"mb-4"},"Non linear slider")])])],-1)),s("div",Fn,[s("div",$n,[a(F,{values:[w.value,k.value],config:{range:{min:[0],"10%":[500,500],"50%":[4e3,1e3],max:[1e4]},connect:!0,tooltips:!0,behaviour:"tap"},start:[w.value,k.value],"onUpdate:values":A},null,8,["values","start"]),n[62]||(n[62]=s("br",null,null,-1)),s("div",Bn,[s("div",Sn,[s("span",Nn,[r(l(w.value)+" ",1),s("span",Dn,l(S.value)+"%",1)])]),s("div",jn,[s("span",Mn,[r(l(k.value)+" ",1),s("span",Ln,l(N.value)+"%",1)])])])]),s("div",Pn,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[21]||(n[21]=o=>u("code10"))},n[63]||(n[63]=[s("span",null,"Code",-1)])),d.value.includes("code10")?(i(),c("div",Rn,[a(m,null,{default:v(()=>[s("pre",null,`<!-- Non linear slider -->
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
                >`+l(w.value)+' <span class="precentage-val">'+l(S.value)+`%</span></span
            >
        </div>
        <div class="col-lg-6 text-end">
            <span class="example-val"
                >`+l(k.value)+' <span class="precentage-val">'+l(N.value)+`%</span></span
            >
        </div>
    </div>
</div>
`,1)]),_:1})])):p("",!0)])])])])])]),s("div",Hn,[s("div",Jn,[n[67]||(n[67]=s("div",{class:"panel-heading"},[s("div",{class:"row"},[s("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",{class:"mb-4"},"Locking sliders together")])])],-1)),s("div",In,[s("div",Yn,[s("div",An,[s("div",On,[a(F,{values:[f.value],config:{range:{min:50,max:100},animate:!1,tooltips:!0},start:[f.value],"onUpdate:values":O},null,8,["values","start"]),s("span",qn,l(f.value),1)])]),n[65]||(n[65]=s("br",null,null,-1)),s("div",zn,[s("div",En,[a(F,{values:[x.value],config:{range:{min:50,max:100},animate:!1,tooltips:!0},start:[x.value],"onUpdate:values":q},null,8,["values","start"]),s("span",Xn,l(x.value),1)])]),s("div",Gn,[s("div",Kn,[s("button",{type:"button",class:"btn btn-primary my-4 float-end",onClick:n[22]||(n[22]=o=>{h.value=!h.value,z()})},l(h.value?"unlock":"lock"),1)])])]),s("div",Qn,[s("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:n[23]||(n[23]=o=>u("code11"))},n[66]||(n[66]=[s("span",null,"Code",-1)])),d.value.includes("code11")?(i(),c("div",Wn,[a(m,null,{default:v(()=>[s("pre",null,`<!-- Locking sliders together -->
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
            <span class="example-val mt-4 d-inline-block">`+l(f.value)+`</span>
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

            <span class="example-val mt-4 d-inline-block">`+l(x.value)+`</span>
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
                `+l(h.value?"unlock":"lock")+`
            </button>
        </div>
    </div>
</div>
`,1)]),_:1})])):p("",!0)])])])])])])),[[K]])])])}}};export{ao as default};
