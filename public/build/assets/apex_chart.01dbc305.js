/* empty css                     */import{_ as d}from"./highlight.6863f015.js";import{m as c}from"./vue3-apexcharts.68d24dd0.js";import{aj as z,s as p,Q as u,a5 as x,o,c as l,a0 as i,a as e,ap as N,p as J,X as S,W as h,e as a,i as b,l as v}from"./app-setting.435ce9bf.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const F={class:"container"},j={class:"container"},H={class:"nav sidenav"},K={class:"sidenav-content"},V={class:"row"},Y={id:"chartLine",class:"col-xl-12 layout-top-spacing layout-spacing"},X={class:"statbox panel box box-shadow"},I={class:"panel-body"},E={class:"code-section-container show-code"},Q={key:0,class:"code-section text-start"},q={id:"chartArea",class:"col-xl-12 layout-spacing"},Z={class:"statbox panel box box-shadow"},ee={class:"panel-body"},te={class:"code-section-container show-code"},se={key:0,class:"code-section text-start"},oe={id:"chartColumn",class:"col-xl-12 layout-spacing"},ae={class:"statbox panel box box-shadow"},ne={class:"panel-body"},le={class:"code-section-container show-code"},ie={key:0,class:"code-section text-start"},re={id:"chartColumnStacked",class:"col-xl-12 layout-spacing"},de={class:"statbox panel box box-shadow"},ce={class:"panel-body"},pe={class:"code-section-container show-code"},ue={key:0,class:"code-section text-start"},he={id:"chartBar",class:"col-xl-12 layout-spacing"},be={class:"statbox panel box box-shadow"},ve={class:"panel-body"},me={class:"code-section-container show-code"},fe={key:0,class:"code-section text-start"},xe={id:"chartMixed",class:"col-xl-12 layout-spacing"},_e={class:"statbox panel box box-shadow"},ge={class:"panel-body"},ye={class:"code-section-container show-code"},ke={key:0,class:"code-section text-start"},we={id:"chartDonut",class:"col-xl-12 layout-spacing"},Ce={class:"statbox panel box box-shadow"},Te={class:"panel-body"},Me={class:"code-section-container show-code"},Je={key:0,class:"code-section text-start"},Se={id:"chartRadial",class:"col-xl-12 layout-spacing"},Be={class:"statbox panel box box-shadow"},Ae={class:"panel-body"},De={class:"code-section-container show-code"},Oe={key:0,class:"code-section text-start"},ze={__name:"apex_chart",setup(Re){const m=z(),n=p([]),B=p([{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]),A=p([{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]),D=p([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}]),O=[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],R=p([{data:[400,430,448,470,540,580,690,1100,1200,1380]}]),L=p([{name:"Website Blog",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Social Media",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}]),G=p([44,55,41,17]),W=p([44,55,67,83]),_=u(()=>{const s=m.state.is_dark_mode;return{chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left",style:{fontWeight:"normal"}},grid:{row:{colors:[s?"#3b3f5c":"#f1f2f3","transparent"],opacity:.5},borderColor:s?"#191e3a":"#e0e6ed"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{theme:s?"dark":"light"}}}),g=u(()=>{const s=m.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},grid:{borderColor:s?"#191e3a":"#e0e6ed"},tooltip:{theme:s?"dark":"light",x:{format:"dd/MM/yy HH:mm"}}}}),y=u(()=>{const s=m.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)",style:{fontWeight:"normal"}}},grid:{borderColor:s?"#191e3a":"#e0e6ed"},fill:{opacity:1},tooltip:{theme:s?"dark":"light",y:{formatter:function(t){return"$ "+t+" thousands"}}}}}),k=u(()=>{const s=m.state.is_dark_mode;return{chart:{stacked:!0,toolbar:{show:!1}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:5}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},grid:{borderColor:s?"#191e3a":"#e0e6ed"},fill:{opacity:1},legend:{position:"right",offsetY:40},tooltip:{theme:s?"dark":"light"}}}),w=u(()=>{const s=m.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]},grid:{borderColor:s?"#191e3a":"#e0e6ed"},tooltip:{theme:s?"dark":"light"}}}),C=u(()=>{const s=m.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:[0,4]},title:{text:"Traffic Sources",align:"left",style:{fontWeight:"normal"}},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},yaxis:[{title:{text:"Website Blog"},style:{fontWeight:"normal"}},{opposite:!0,title:{text:"Social Media"}}],grid:{borderColor:s?"#191e3a":"#e0e6ed"},tooltip:{theme:s?"dark":"light"}}}),T=u(()=>{const s=m.state.is_dark_mode;return{chart:{toolbar:{show:!1}},stroke:{colors:s?"#191e3a":"transparent"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}),M=u(()=>({chart:{toolbar:{show:!1}},plotOptions:{radialBar:{dataLabels:{total:{show:!0,fontSize:"24px",fontWeight:"normal",label:"Total",formatter:function(){return 249}}}}},labels:["Apples","Oranges","Bananas","Berries"]})),r=s=>{n.value.includes(s)?n.value=n.value.filter(t=>t!=s):n.value.push(s)};return(s,t)=>{const $=x("scroll-spy-active"),P=x("scroll-spy-link"),U=x("scroll-spy");return o(),l("div",F,[(o(),i(N,{to:"#breadcrumb"},[t[8]||(t[8]=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Charts")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"Apex")])])])])])],-1))])),e("div",j,[e("div",H,[J((o(),l("div",K,t[9]||(t[9]=[S('<a href="#chartLine" class="nav-link">Line</a><a href="#chartArea" class="nav-link">Area</a><a href="#chartColumn" class="nav-link">Column</a><a href="#chartColumnStacked" class="nav-link">Column Stacked</a><a href="#chartBar" class="nav-link">Bar</a><a href="#chartMixed" class="nav-link">Mixed</a><a href="#chartDonut" class="nav-link">Donut</a><a href="#chartRadial" class="nav-link">Radial</a>',8)]))),[[$],[P]])]),t[34]||(t[34]=S('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue3-apexcharts" class="text-info"> https://www.npmjs.com/package/vue3-apexcharts </a></div></div></div>',1)),J((o(),l("div",V,[e("div",Y,[e("div",X,[t[12]||(t[12]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Apex (Simple)")])])],-1)),e("div",I,[_.value?(o(),i(h(c),{key:0,height:"350",type:"line",options:_.value,series:B.value},null,8,["options","series"])):a("",!0),e("div",E,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[0]||(t[0]=f=>r("code1"))},t[10]||(t[10]=[e("span",null,"Code",-1)])),n.value.includes("code1")?(o(),l("div",Q,[b(d,null,{default:v(()=>t[11]||(t[11]=[e("pre",null,`<!-- Simple -->
===html===
<apexchart height="350" type="line" :options="options_1" :series="series_1"></apexchart>

===code===
options_1: {
    chart: { toolbar: { show: false }, zoom: { enabled: false }, }, dataLabels: { enabled: false }, stroke: { curve: 'straight' },
    title: { text: 'Product Trends by Month', align: 'left', style: { fontWeight: 'normal' } },
    grid: { row: { colors: ['#f1f2f3', 'transparent'], opacity: 0.5 } },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
},
series_1: [{ name: 'Desktops', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",q,[e("div",Z,[t[15]||(t[15]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Area")])])],-1)),e("div",ee,[g.value?(o(),i(h(c),{key:0,height:"350",type:"area",options:g.value,series:A.value},null,8,["options","series"])):a("",!0),e("div",te,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=f=>r("code2"))},t[13]||(t[13]=[e("span",null,"Code",-1)])),n.value.includes("code2")?(o(),l("div",se,[b(d,null,{default:v(()=>t[14]||(t[14]=[e("pre",null,`<!-- Simple Area -->
===html===
<apexchart height="350" type="area" :options="options_2" :series="series_2"></apexchart>

===code===
options_2: {
    chart: { toolbar: { show: false } }, dataLabels: { enabled: false }, stroke: { curve: 'smooth' },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
    },
    tooltip: { x: { format: 'dd/MM/yy HH:mm' }, }
},
series_2: [{ name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] }, { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",oe,[e("div",ae,[t[18]||(t[18]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Column")])])],-1)),e("div",ne,[y.value?(o(),i(h(c),{key:0,height:"350",type:"bar",options:y.value,series:D.value},null,8,["options","series"])):a("",!0),e("div",le,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[2]||(t[2]=f=>r("code3"))},t[16]||(t[16]=[e("span",null,"Code",-1)])),n.value.includes("code3")?(o(),l("div",ie,[b(d,null,{default:v(()=>t[17]||(t[17]=[e("pre",null,`<!-- Simple column -->
===html===
<apexchart height="350" type="bar" :options="options_3" :series="series_3"></apexchart>

===code===
options_3: {
    chart: { toolbar: { show: false } }, dataLabels: { enabled: false }, stroke: { show: true, width: 2, colors: ['transparent'] },
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 8 }, },
    xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], },
    yaxis: { title: { text: '$ (thousands)' } },
    fill: { opacity: 1 },
    tooltip: { y: { formatter: function (val) { return "$ " + val + " thousands" } } }
},
series_3: [{ name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }, { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",re,[e("div",de,[t[21]||(t[21]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Column Stacked")])])],-1)),e("div",ce,[k.value?(o(),i(h(c),{key:0,height:"350",type:"bar",options:k.value,series:O},null,8,["options"])):a("",!0),e("div",pe,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[3]||(t[3]=f=>r("code4"))},t[19]||(t[19]=[e("span",null,"Code",-1)])),n.value.includes("code4")?(o(),l("div",ue,[b(d,null,{default:v(()=>t[20]||(t[20]=[e("pre",null,`<!-- Simple column stacked -->
===html===
<apexchart height="350" type="bar" :options="options_4" :series="series_4"></apexchart>

===code===
options_4: {
    chart: { stacked: true, toolbar: { show: false } },
    responsive: [{ breakpoint: 480, options: { legend: { position: 'bottom', offsetX: -10, offsetY: 5 } } }],
    plotOptions: { bar: { horizontal: false }, },
    xaxis: { type: 'datetime', categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'], },
    fill: { opacity: 1 },
    legend: { position: 'right', offsetY: 40 },
},
series_4: [
    { name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43] },
    { name: 'PRODUCT B', data: [13, 23, 20, 8, 13, 27] },
    { name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14] },
    { name: 'PRODUCT D', data: [21, 7, 25, 13, 22, 8] }
],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",he,[e("div",be,[t[24]||(t[24]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Bar")])])],-1)),e("div",ve,[w.value?(o(),i(h(c),{key:0,height:"350",type:"bar",options:w.value,series:R.value},null,8,["options","series"])):a("",!0),e("div",me,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[4]||(t[4]=f=>r("code5"))},t[22]||(t[22]=[e("span",null,"Code",-1)])),n.value.includes("code5")?(o(),l("div",fe,[b(d,null,{default:v(()=>t[23]||(t[23]=[e("pre",null,`<!-- Simple Bar -->
===html===
<apexchart height="350" type="bar" :options="options_5" :series="series_5"></apexchart>

===code===
options_5: {
    chart: { toolbar: { show: false } }, dataLabels: { enabled: false },
    plotOptions: { bar: { horizontal: true }, },
    xaxis: { categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'], },
},
series_5: [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",xe,[e("div",_e,[t[27]||(t[27]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Mixed")])])],-1)),e("div",ge,[C.value?(o(),i(h(c),{key:0,height:"350",type:"line",options:C.value,series:L.value},null,8,["options","series"])):a("",!0),e("div",ye,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[5]||(t[5]=f=>r("code6"))},t[25]||(t[25]=[e("span",null,"Code",-1)])),n.value.includes("code6")?(o(),l("div",ke,[b(d,null,{default:v(()=>t[26]||(t[26]=[e("pre",null,`<!-- Mixed -->
===html===
<apexchart height="350" type="line" :options="options_6" :series="series_6"></apexchart>

===code===
options_6: {
    chart: { toolbar: { show: false } }, dataLabels: { enabled: false }, stroke: { width: [0, 4] },
    title: { text: 'Traffic Sources', align: 'left', style: { fontWeight: 'normal' } },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: { type: 'datetime' },
    yaxis: [{ title: { text: 'Website Blog' } }, { opposite: true, title: { text: 'Social Media' } }]
},
series_6: [
    { name: 'Website Blog', type: 'column', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160] },
    { name: 'Social Media', type: 'line', data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16] }
],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",we,[e("div",Ce,[t[30]||(t[30]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Donut")])])],-1)),e("div",Te,[T.value?(o(),i(h(c),{key:0,height:"350",type:"donut",options:T.value,series:G.value},null,8,["options","series"])):a("",!0),e("div",Me,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[6]||(t[6]=f=>r("code7"))},t[28]||(t[28]=[e("span",null,"Code",-1)])),n.value.includes("code7")?(o(),l("div",Je,[b(d,null,{default:v(()=>t[29]||(t[29]=[e("pre",null,`<!-- Dount -->
===html===
<apexchart height="350" type="donut" :options="options_7" :series="series_7"></apexchart>

===code===
options_7: {
    chart: { toolbar: { show: false } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
},
series_7: [44, 55, 41, 17],
`,-1)])),_:1})])):a("",!0)])])])]),e("div",Se,[e("div",Be,[t[33]||(t[33]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Radial")])])],-1)),e("div",Ae,[M.value?(o(),i(h(c),{key:0,height:"350",type:"radialBar",options:M.value,series:W.value},null,8,["options","series"])):a("",!0),e("div",De,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[7]||(t[7]=f=>r("code8"))},t[31]||(t[31]=[e("span",null,"Code",-1)])),n.value.includes("code8")?(o(),l("div",Oe,[b(d,null,{default:v(()=>t[32]||(t[32]=[e("pre",null,`<!-- Radial -->
===html===
<apexchart height="350" type="radialBar" :options="options_8" :series="series_8"></apexchart>

===code===
options_8: {
    chart: { toolbar: { show: false } },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: { fontSize: '22px' },
                value: { fontSize: '16px' },
                total: { show: true, label: 'Total', formatter: function () { return 249 } }
            }
        }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
},
series_8: [44, 55, 67, 83],
`,-1)])),_:1})])):a("",!0)])])])])])),[[U]])])])}}};export{ze as default};
