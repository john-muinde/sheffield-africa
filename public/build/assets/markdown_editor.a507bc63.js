/* empty css                     */import{_}from"./highlight.66dc7e6e.js";import{x as c,f as w,a5 as d,o,c as i,a2 as k,a as e,p,i as n,l as m,e as b,Y as x,aq as C}from"./app-setting.366f23a7.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const B={class:"container markdown"},V=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Forms")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"Markdown Editor")])])])])])],-1),q={class:"container"},A={class:"nav sidenav"},N={class:"sidenav-content"},U=e("a",{href:"#basic",class:"nav-link"},"Basic",-1),j=e("a",{href:"#autosaving",class:"nav-link"},"Autosaving",-1),D=[U,j],E=x('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-easymde" class="text-info"> https://www.npmjs.com/package/vue-easymde </a></div></div></div>',1),M={id:"basic",class:"row layout-spacing layout-top-spacing"},Y={class:"col-lg-12"},L={class:"statbox panel box box-shadow"},T=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Basic")])])],-1),$={class:"panel-body"},I={class:"code-section-container show-code"},O=e("span",null,"Code",-1),W=[O],F={key:0,class:"code-section text-start"},G=e("pre",null,`<!-- Basic -->
<vue-easymde v-model="content1" ref="editor1" :highlight="true" :configs="{spellChecker: false}" />
`,-1),S={id:"autosaving",class:"row layout-spacing"},Z={class:"col-lg-12"},z={class:"statbox panel box box-shadow"},H=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Autosaving")])])],-1),J={class:"panel-body"},K={class:"code-section-container show-code"},P=e("span",null,"Code",-1),Q=[P],R={key:0,class:"code-section text-start"},X=e("pre",null,`<!-- Autosaving -->
<vue-easymde v-model="content2" id="editor2" :highlight="true" :configs="{spellChecker: false, autosave: {enabled: true, uniqueId: 'editor2'} }" />
`,-1),le={__name:"markdown_editor",setup(ee){const s=c([]),r=c(`# Basic Example
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
`),u=c(`
# Autosaving!

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.
`),v=l=>{s.value.includes(l)?s.value=s.value.filter(t=>t!=l):s.value.push(l)};return(l,t)=>{const h=w("vue-easymde"),g=d("scroll-spy-active"),f=d("scroll-spy-link"),y=d("scroll-spy");return o(),i("div",B,[(o(),k(C,{to:"#breadcrumb"},[V])),e("div",q,[e("div",A,[p((o(),i("div",N,D)),[[g],[f]])]),E,p((o(),i("div",null,[e("div",M,[e("div",Y,[e("div",L,[T,e("div",$,[n(h,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),ref:"editor1",highlight:!0,configs:{spellChecker:!1}},null,8,["modelValue"]),e("div",I,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=a=>v("code1"))},W),s.value.includes("code1")?(o(),i("div",F,[n(_,null,{default:m(()=>[G]),_:1})])):b("",!0)])])])])]),e("div",S,[e("div",Z,[e("div",z,[H,e("div",J,[n(h,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),id:"editor2",highlight:!0,configs:{spellChecker:!1,autosave:{enabled:!0,uniqueId:"editor2"}}},null,8,["modelValue"]),e("div",K,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[3]||(t[3]=a=>v("code2"))},Q),s.value.includes("code2")?(o(),i("div",R,[n(_,null,{default:m(()=>[X]),_:1})])):b("",!0)])])])])])])),[[y]])])])}}};export{le as default};
