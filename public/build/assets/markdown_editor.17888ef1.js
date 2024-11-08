/* empty css                     */import{_ as m}from"./highlight.6cbe5657.js";import{q as d,f as w,a7 as r,o,c as l,P as k,a as e,ar as x,m as h,$ as C,h as n,k as b,e as g}from"./app-setting.176c951c.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const B={class:"container markdown"},V={class:"container"},q={class:"nav sidenav"},A={class:"sidenav-content"},N={id:"basic",class:"row layout-spacing layout-top-spacing"},U={class:"col-lg-12"},j={class:"statbox panel box box-shadow"},D={class:"panel-body"},E={class:"code-section-container show-code"},M={key:0,class:"code-section text-start"},$={id:"autosaving",class:"row layout-spacing"},L={class:"col-lg-12"},T={class:"statbox panel box box-shadow"},Y={class:"panel-body"},I={class:"code-section-container show-code"},O={key:0,class:"code-section text-start"},z={__name:"markdown_editor",setup(W){const s=d([]),c=d(`# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`),u=d(`
# Autosaving!

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.
`),v=i=>{s.value.includes(i)?s.value=s.value.filter(t=>t!=i):s.value.push(i)};return(i,t)=>{const p=w("vue-easymde"),f=r("scroll-spy-active"),_=r("scroll-spy-link"),y=r("scroll-spy");return o(),l("div",B,[(o(),k(x,{to:"#breadcrumb"},[t[4]||(t[4]=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Forms")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"Markdown Editor")])])])])])],-1))])),e("div",V,[e("div",q,[h((o(),l("div",A,t[5]||(t[5]=[e("a",{href:"#basic",class:"nav-link"},"Basic",-1),e("a",{href:"#autosaving",class:"nav-link"},"Autosaving",-1)]))),[[f],[_]])]),t[12]||(t[12]=C('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-easymde" class="text-info"> https://www.npmjs.com/package/vue-easymde </a></div></div></div>',1)),h((o(),l("div",null,[e("div",N,[e("div",U,[e("div",j,[t[8]||(t[8]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Basic")])])],-1)),e("div",D,[n(p,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a),ref:"editor1",highlight:!0,configs:{spellChecker:!1}},null,8,["modelValue"]),e("div",E,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=a=>v("code1"))},t[6]||(t[6]=[e("span",null,"Code",-1)])),s.value.includes("code1")?(o(),l("div",M,[n(m,null,{default:b(()=>t[7]||(t[7]=[e("pre",null,`<!-- Basic -->
<vue-easymde v-model="content1" ref="editor1" :highlight="true" :configs="{spellChecker: false}" />
`,-1)])),_:1})])):g("",!0)])])])])]),e("div",$,[e("div",L,[e("div",T,[t[11]||(t[11]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Autosaving")])])],-1)),e("div",Y,[n(p,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),id:"editor2",highlight:!0,configs:{spellChecker:!1,autosave:{enabled:!0,uniqueId:"editor2"}}},null,8,["modelValue"]),e("div",I,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[3]||(t[3]=a=>v("code2"))},t[9]||(t[9]=[e("span",null,"Code",-1)])),s.value.includes("code2")?(o(),l("div",O,[n(m,null,{default:b(()=>t[10]||(t[10]=[e("pre",null,`<!-- Autosaving -->
<vue-easymde v-model="content2" id="editor2" :highlight="true" :configs="{spellChecker: false, autosave: {enabled: true, uniqueId: 'editor2'} }" />
`,-1)])),_:1})])):g("",!0)])])])])])])),[[y]])])])}}};export{z as default};
