/* empty css                     */import{_ as c}from"./highlight.a21e2a3d.js";import{A as d}from"./vue3-apexcharts.common.7d2421c5.js";import{an as z,x as p,Q as h,a5 as f,o,c as l,a2 as i,a as e,p as J,u as _,e as a,i as u,l as b,Y as S,at as N}from"./app-setting.08d4c509.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const F={class:"container"},Y=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Charts")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"Apex")])])])])])],-1),j={class:"container"},H={class:"nav sidenav"},K={class:"sidenav-content"},V=S('<a href="#chartLine" class="nav-link">Line</a><a href="#chartArea" class="nav-link">Area</a><a href="#chartColumn" class="nav-link">Column</a><a href="#chartColumnStacked" class="nav-link">Column Stacked</a><a href="#chartBar" class="nav-link">Bar</a><a href="#chartMixed" class="nav-link">Mixed</a><a href="#chartDonut" class="nav-link">Donut</a><a href="#chartRadial" class="nav-link">Radial</a>',8),I=[V],X=S('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue3-apexcharts" class="text-info"> https://www.npmjs.com/package/vue3-apexcharts </a></div></div></div>',1),E={class:"row"},Q={id:"chartLine",class:"col-xl-12 layout-top-spacing layout-spacing"},q={class:"statbox panel box box-shadow"},Z=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Apex (Simple)")])])],-1),ee={class:"panel-body"},te={class:"code-section-container show-code"},se=e("span",null,"Code",-1),oe=[se],ae={key:0,class:"code-section text-start"},ne=e("pre",null,`<!-- Simple -->
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
`,-1),le={id:"chartArea",class:"col-xl-12 layout-spacing"},ie={class:"statbox panel box box-shadow"},re=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Area")])])],-1),ce={class:"panel-body"},de={class:"code-section-container show-code"},pe=e("span",null,"Code",-1),he=[pe],_e={key:0,class:"code-section text-start"},ue=e("pre",null,`<!-- Simple Area -->
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
`,-1),be={id:"chartColumn",class:"col-xl-12 layout-spacing"},ve={class:"statbox panel box box-shadow"},me=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Column")])])],-1),fe={class:"panel-body"},xe={class:"code-section-container show-code"},ge=e("span",null,"Code",-1),ye=[ge],ke={key:0,class:"code-section text-start"},we=e("pre",null,`<!-- Simple column -->
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
`,-1),Ce={id:"chartColumnStacked",class:"col-xl-12 layout-spacing"},Te={class:"statbox panel box box-shadow"},Me=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Column Stacked")])])],-1),Je={class:"panel-body"},Se={class:"code-section-container show-code"},Be=e("span",null,"Code",-1),Ae=[Be],De={key:0,class:"code-section text-start"},Oe=e("pre",null,`<!-- Simple column stacked -->
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
`,-1),Re={id:"chartBar",class:"col-xl-12 layout-spacing"},Le={class:"statbox panel box box-shadow"},Ge=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Bar")])])],-1),We={class:"panel-body"},$e={class:"code-section-container show-code"},Pe=e("span",null,"Code",-1),Ue=[Pe],ze={key:0,class:"code-section text-start"},Ne=e("pre",null,`<!-- Simple Bar -->
===html===
<apexchart height="350" type="bar" :options="options_5" :series="series_5"></apexchart>

===code===
options_5: {
    chart: { toolbar: { show: false } }, dataLabels: { enabled: false },
    plotOptions: { bar: { horizontal: true }, },
    xaxis: { categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'], },
},
series_5: [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }],
`,-1),Fe={id:"chartMixed",class:"col-xl-12 layout-spacing"},Ye={class:"statbox panel box box-shadow"},je=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Mixed")])])],-1),He={class:"panel-body"},Ke={class:"code-section-container show-code"},Ve=e("span",null,"Code",-1),Ie=[Ve],Xe={key:0,class:"code-section text-start"},Ee=e("pre",null,`<!-- Mixed -->
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
`,-1),Qe={id:"chartDonut",class:"col-xl-12 layout-spacing"},qe={class:"statbox panel box box-shadow"},Ze=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Donut")])])],-1),et={class:"panel-body"},tt={class:"code-section-container show-code"},st=e("span",null,"Code",-1),ot=[st],at={key:0,class:"code-section text-start"},nt=e("pre",null,`<!-- Dount -->
===html===
<apexchart height="350" type="donut" :options="options_7" :series="series_7"></apexchart>

===code===
options_7: {
    chart: { toolbar: { show: false } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
},
series_7: [44, 55, 41, 17],
`,-1),lt={id:"chartRadial",class:"col-xl-12 layout-spacing"},it={class:"statbox panel box box-shadow"},rt=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Radial")])])],-1),ct={class:"panel-body"},dt={class:"code-section-container show-code"},pt=e("span",null,"Code",-1),ht=[pt],_t={key:0,class:"code-section text-start"},ut=e("pre",null,`<!-- Radial -->
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
`,-1),kt={__name:"apex_chart",setup(bt){const v=z(),n=p([]),B=p([{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]),A=p([{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]),D=p([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}]),O=[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],R=p([{data:[400,430,448,470,540,580,690,1100,1200,1380]}]),L=p([{name:"Website Blog",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Social Media",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}]),G=p([44,55,41,17]),W=p([44,55,67,83]),x=h(()=>{const t=v.state.is_dark_mode;return{chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left",style:{fontWeight:"normal"}},grid:{row:{colors:[t?"#3b3f5c":"#f1f2f3","transparent"],opacity:.5},borderColor:t?"#191e3a":"#e0e6ed"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{theme:t?"dark":"light"}}}),g=h(()=>{const t=v.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},grid:{borderColor:t?"#191e3a":"#e0e6ed"},tooltip:{theme:t?"dark":"light",x:{format:"dd/MM/yy HH:mm"}}}}),y=h(()=>{const t=v.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)",style:{fontWeight:"normal"}}},grid:{borderColor:t?"#191e3a":"#e0e6ed"},fill:{opacity:1},tooltip:{theme:t?"dark":"light",y:{formatter:function(s){return"$ "+s+" thousands"}}}}}),k=h(()=>{const t=v.state.is_dark_mode;return{chart:{stacked:!0,toolbar:{show:!1}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:5}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},grid:{borderColor:t?"#191e3a":"#e0e6ed"},fill:{opacity:1},legend:{position:"right",offsetY:40},tooltip:{theme:t?"dark":"light"}}}),w=h(()=>{const t=v.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]},grid:{borderColor:t?"#191e3a":"#e0e6ed"},tooltip:{theme:t?"dark":"light"}}}),C=h(()=>{const t=v.state.is_dark_mode;return{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:[0,4]},title:{text:"Traffic Sources",align:"left",style:{fontWeight:"normal"}},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},yaxis:[{title:{text:"Website Blog"},style:{fontWeight:"normal"}},{opposite:!0,title:{text:"Social Media"}}],grid:{borderColor:t?"#191e3a":"#e0e6ed"},tooltip:{theme:t?"dark":"light"}}}),T=h(()=>{const t=v.state.is_dark_mode;return{chart:{toolbar:{show:!1}},stroke:{colors:t?"#191e3a":"transparent"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}),M=h(()=>({chart:{toolbar:{show:!1}},plotOptions:{radialBar:{dataLabels:{total:{show:!0,fontSize:"24px",fontWeight:"normal",label:"Total",formatter:function(){return 249}}}}},labels:["Apples","Oranges","Bananas","Berries"]})),r=t=>{n.value.includes(t)?n.value=n.value.filter(s=>s!=t):n.value.push(t)};return(t,s)=>{const $=f("scroll-spy-active"),P=f("scroll-spy-link"),U=f("scroll-spy");return o(),l("div",F,[(o(),i(N,{to:"#breadcrumb"},[Y])),e("div",j,[e("div",H,[J((o(),l("div",K,I)),[[$],[P]])]),X,J((o(),l("div",E,[e("div",Q,[e("div",q,[Z,e("div",ee,[x.value?(o(),i(_(d),{key:0,height:"350",type:"line",options:x.value,series:B.value},null,8,["options","series"])):a("",!0),e("div",te,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[0]||(s[0]=m=>r("code1"))},oe),n.value.includes("code1")?(o(),l("div",ae,[u(c,null,{default:b(()=>[ne]),_:1})])):a("",!0)])])])]),e("div",le,[e("div",ie,[re,e("div",ce,[g.value?(o(),i(_(d),{key:0,height:"350",type:"area",options:g.value,series:A.value},null,8,["options","series"])):a("",!0),e("div",de,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=m=>r("code2"))},he),n.value.includes("code2")?(o(),l("div",_e,[u(c,null,{default:b(()=>[ue]),_:1})])):a("",!0)])])])]),e("div",be,[e("div",ve,[me,e("div",fe,[y.value?(o(),i(_(d),{key:0,height:"350",type:"bar",options:y.value,series:D.value},null,8,["options","series"])):a("",!0),e("div",xe,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[2]||(s[2]=m=>r("code3"))},ye),n.value.includes("code3")?(o(),l("div",ke,[u(c,null,{default:b(()=>[we]),_:1})])):a("",!0)])])])]),e("div",Ce,[e("div",Te,[Me,e("div",Je,[k.value?(o(),i(_(d),{key:0,height:"350",type:"bar",options:k.value,series:O},null,8,["options"])):a("",!0),e("div",Se,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[3]||(s[3]=m=>r("code4"))},Ae),n.value.includes("code4")?(o(),l("div",De,[u(c,null,{default:b(()=>[Oe]),_:1})])):a("",!0)])])])]),e("div",Re,[e("div",Le,[Ge,e("div",We,[w.value?(o(),i(_(d),{key:0,height:"350",type:"bar",options:w.value,series:R.value},null,8,["options","series"])):a("",!0),e("div",$e,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[4]||(s[4]=m=>r("code5"))},Ue),n.value.includes("code5")?(o(),l("div",ze,[u(c,null,{default:b(()=>[Ne]),_:1})])):a("",!0)])])])]),e("div",Fe,[e("div",Ye,[je,e("div",He,[C.value?(o(),i(_(d),{key:0,height:"350",type:"line",options:C.value,series:L.value},null,8,["options","series"])):a("",!0),e("div",Ke,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[5]||(s[5]=m=>r("code6"))},Ie),n.value.includes("code6")?(o(),l("div",Xe,[u(c,null,{default:b(()=>[Ee]),_:1})])):a("",!0)])])])]),e("div",Qe,[e("div",qe,[Ze,e("div",et,[T.value?(o(),i(_(d),{key:0,height:"350",type:"donut",options:T.value,series:G.value},null,8,["options","series"])):a("",!0),e("div",tt,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[6]||(s[6]=m=>r("code7"))},ot),n.value.includes("code7")?(o(),l("div",at,[u(c,null,{default:b(()=>[nt]),_:1})])):a("",!0)])])])]),e("div",lt,[e("div",it,[rt,e("div",ct,[M.value?(o(),i(_(d),{key:0,height:"350",type:"radialBar",options:M.value,series:W.value},null,8,["options","series"])):a("",!0),e("div",dt,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[7]||(s[7]=m=>r("code8"))},ht),n.value.includes("code8")?(o(),l("div",_t,[u(c,null,{default:b(()=>[ut]),_:1})])):a("",!0)])])])])])),[[U]])])])}}};export{kt as default};
