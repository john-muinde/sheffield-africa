/* empty css                     */import{_}from"./highlight.fd2f20f1.js";import{x as y,y as k,a5 as u,o as a,c,a2 as w,a as e,p as v,i as f,l as h,e as g,Y as m,aq as x}from"./app-setting.fefad6ec.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const L={class:"container"},j=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Elements")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"Tree View")])])])])])],-1),E={class:"container"},S={class:"nav sidenav"},C={class:"sidenav-content"},A=e("a",{href:"#treeviewAnimated",class:"nav-link"},"Animated",-1),B=e("a",{href:"#treeviewBasic",class:"nav-link"},"Basic",-1),N=[A,B],P={class:"row layout-top-spacing"},q={id:"treeviewAnimated",class:"col-lg-12 layout-spacing"},T={class:"statbox panel box box-shadow"},V=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Animated")])])],-1),M={class:"panel-body"},$=m('<ul class="file-tree"><li class="file-tree-folder"> CSS <ul><li>style.css</li></ul></li><li class="file-tree-folder open"> Images <ul class="d-block"><li>profile.jpeg</li><li>background.png</li><li>gallery.jpg</li></ul></li><li class="file-tree-folder"> HTML <ul><li class="file-tree-folder"> PAGES <ul><li>file name</li><li>file name</li><li>file name</li></ul></li><li>file name</li><li>file name</li></ul></li><li>index.html</li><li>components.html</li></ul>',1),D={class:"code-section-container show-code"},G=e("span",null,"Code",-1),H=[G],I={key:0,class:"code-section text-start"},J=e("pre",null,`<ul class="file-tree">
    <li class="file-tree-folder">
        CSS
        <ul>
            <li>style.css</li>
        </ul>
    </li>
    <li class="file-tree-folder open">
        Images
        <ul class="d-block">
            <li>profile.jpeg</li>
            <li>background.png</li>
            <li>gallery.jpg</li>
        </ul>
    </li>
    <li class="file-tree-folder">
        HTML
        <ul>
            <li class="file-tree-folder">
                PAGES
                <ul>
                    <li>file name</li>
                    <li>file name</li>
                    <li>file name</li>
                </ul>
            </li>
            <li>file name</li>
            <li>file name</li>
        </ul>
    </li>
    <li>index.html</li>
    <li>components.html</li>
</ul>

Javascript
=========
var folder = document.querySelectorAll('.file-tree li.file-tree-folder');
var file = document.querySelectorAll('.file-tree li');
var j; var k;

for (j = 0; j < folder.length; j++) {
    folder[j].addEventListener("click", function (a) {
        if (this.children && this.children.length) {
            this.children[0].parentNode.classList.toggle('open');
            this.children[0].classList.toggle('d-block');
        }
        a.stopPropagation();
    });
}
for (k = 0; k < file.length; k++) {
    file[k].addEventListener("click", function (b) {
        b.stopPropagation();
    });
}

`,-1),U={id:"treeviewBasic",class:"col-lg-12 layout-spacing"},Y={class:"statbox panel box box-shadow"},z=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Basic")])])],-1),F={class:"panel-body"},K=m('<ul id="myUL"><li><span class="caret">Parent Node</span><ul class="nested active"><li><span class="caret caret-down">img</span><ul class="nested"></ul></li><li><span class="caret caret-down">css</span><ul class="nested"><li>style.css</li></ul></li><li><span class="caret caret-down">js</span><ul class="nested"><li>script.js</li></ul></li><li><span>index.html</span></li></ul></li></ul>',1),O={class:"code-section-container show-code"},Q=e("span",null,"Code",-1),R=[Q],W={key:0,class:"code-section text-start"},X=e("pre",null,`<ul id="myUL">
    <li>
        <span class="caret">Parent Node</span>
        <ul class="nested active">
            <li>
                <span class="caret caret-down">img</span>
                <ul class="nested"></ul>
            </li>
            <li>
                <span class="caret caret-down">css</span>
                <ul class="nested">
                    <li>style.css</li>
                </ul>
            </li>
            <li>
                <span class="caret caret-down">js</span>
                <ul class="nested">
                    <li>script.js</li>
                </ul>
            </li>
            <li>
                <span>index.html</span>
            </li>
        </ul>
    </li>
</ul>

Javascript
=========
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

`,-1),te={__name:"treeview",setup(Z){const n=y([]);k(()=>{b()});const p=s=>{n.value.includes(s)?n.value=n.value.filter(l=>l!=s):n.value.push(s)},b=()=>{var s=document.getElementsByClassName("caret"),l;for(l=0;l<s.length;l++)s[l].addEventListener("click",function(){this.parentElement.querySelector(".nested").classList.toggle("active"),this.classList.toggle("caret-down")});var o=document.querySelectorAll(".file-tree li.file-tree-folder"),r=document.querySelectorAll(".file-tree li"),i,t;for(i=0;i<o.length;i++)o[i].addEventListener("click",function(d){this.children&&this.children.length&&(this.children[0].parentNode.classList.toggle("open"),this.children[0].classList.toggle("d-block")),d.stopPropagation()});for(t=0;t<r.length;t++)r[t].addEventListener("click",function(d){d.stopPropagation()})};return(s,l)=>{const o=u("scroll-spy-active"),r=u("scroll-spy-link"),i=u("scroll-spy");return a(),c("div",L,[(a(),w(x,{to:"#breadcrumb"},[j])),e("div",E,[e("div",S,[v((a(),c("div",C,N)),[[o],[r]])]),v((a(),c("div",P,[e("div",q,[e("div",T,[V,e("div",M,[$,e("div",D,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[0]||(l[0]=t=>p("code1"))},H),n.value.includes("code1")?(a(),c("div",I,[f(_,null,{default:h(()=>[J]),_:1})])):g("",!0)])])])]),e("div",U,[e("div",Y,[z,e("div",F,[K,e("div",O,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[1]||(l[1]=t=>p("code2"))},R),n.value.includes("code2")?(a(),c("div",W,[f(_,null,{default:h(()=>[X]),_:1})])):g("",!0)])])])])])),[[i]])])])}}};export{te as default};
