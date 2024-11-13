/* empty css                     */import{_ as v}from"./highlight.2f07c3cb.js";import{z as y,o as k,C as u,bo as a,bp as o,bT as w,bq as l,aB as x,B as f,c3 as g,j as m,bC as b,bw as h}from"./app-setting.d19a6685.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const L={class:"container"},j={class:"container"},E={class:"nav sidenav"},C={class:"sidenav-content"},S={class:"row layout-top-spacing"},B={id:"treeviewAnimated",class:"col-lg-12 layout-spacing"},A={class:"statbox panel box box-shadow"},N={class:"panel-body"},P={class:"code-section-container show-code"},q={key:0,class:"code-section text-start"},T={id:"treeviewBasic",class:"col-lg-12 layout-spacing"},V={class:"statbox panel box box-shadow"},M={class:"panel-body"},$={class:"code-section-container show-code"},D={key:0,class:"code-section text-start"},F={__name:"treeview",setup(G){const n=y([]);k(()=>{_()});const p=s=>{n.value.includes(s)?n.value=n.value.filter(e=>e!=s):n.value.push(s)},_=()=>{var s=document.getElementsByClassName("caret"),e;for(e=0;e<s.length;e++)s[e].addEventListener("click",function(){this.parentElement.querySelector(".nested").classList.toggle("active"),this.classList.toggle("caret-down")});var c=document.querySelectorAll(".file-tree li.file-tree-folder"),r=document.querySelectorAll(".file-tree li"),i,t;for(i=0;i<c.length;i++)c[i].addEventListener("click",function(d){this.children&&this.children.length&&(this.children[0].parentNode.classList.toggle("open"),this.children[0].classList.toggle("d-block")),d.stopPropagation()});for(t=0;t<r.length;t++)r[t].addEventListener("click",function(d){d.stopPropagation()})};return(s,e)=>{const c=u("scroll-spy-active"),r=u("scroll-spy-link"),i=u("scroll-spy");return a(),o("div",L,[(a(),w(x,{to:"#breadcrumb"},[e[2]||(e[2]=l("ul",{class:"navbar-nav flex-row"},[l("li",null,[l("div",{class:"page-header"},[l("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[l("ol",{class:"breadcrumb"},[l("li",{class:"breadcrumb-item"},[l("a",{href:"javascript:;"},"Elements")]),l("li",{class:"breadcrumb-item active","aria-current":"page"},[l("span",null,"Tree View")])])])])])],-1))])),l("div",j,[l("div",E,[f((a(),o("div",C,e[3]||(e[3]=[l("a",{href:"#treeviewAnimated",class:"nav-link"},"Animated",-1),l("a",{href:"#treeviewBasic",class:"nav-link"},"Basic",-1)]))),[[c],[r]])]),f((a(),o("div",S,[l("div",B,[l("div",A,[e[7]||(e[7]=l("div",{class:"panel-heading"},[l("div",{class:"row"},[l("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[l("h4",null,"Animated")])])],-1)),l("div",N,[e[6]||(e[6]=g('<ul class="file-tree"><li class="file-tree-folder"> CSS <ul><li>style.css</li></ul></li><li class="file-tree-folder open"> Images <ul class="d-block"><li>profile.jpeg</li><li>background.png</li><li>gallery.jpg</li></ul></li><li class="file-tree-folder"> HTML <ul><li class="file-tree-folder"> PAGES <ul><li>file name</li><li>file name</li><li>file name</li></ul></li><li>file name</li><li>file name</li></ul></li><li>index.html</li><li>components.html</li></ul>',1)),l("div",P,[l("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[0]||(e[0]=t=>p("code1"))},e[4]||(e[4]=[l("span",null,"Code",-1)])),n.value.includes("code1")?(a(),o("div",q,[m(v,null,{default:b(()=>e[5]||(e[5]=[l("pre",null,`<ul class="file-tree">
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

`,-1)])),_:1})])):h("",!0)])])])]),l("div",T,[l("div",V,[e[11]||(e[11]=l("div",{class:"panel-heading"},[l("div",{class:"row"},[l("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[l("h4",null,"Basic")])])],-1)),l("div",M,[e[10]||(e[10]=g('<ul id="myUL"><li><span class="caret">Parent Node</span><ul class="nested active"><li><span class="caret caret-down">img</span><ul class="nested"></ul></li><li><span class="caret caret-down">css</span><ul class="nested"><li>style.css</li></ul></li><li><span class="caret caret-down">js</span><ul class="nested"><li>script.js</li></ul></li><li><span>index.html</span></li></ul></li></ul>',1)),l("div",$,[l("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:e[1]||(e[1]=t=>p("code2"))},e[8]||(e[8]=[l("span",null,"Code",-1)])),n.value.includes("code2")?(a(),o("div",D,[m(v,null,{default:b(()=>e[9]||(e[9]=[l("pre",null,`<ul id="myUL">
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

`,-1)])),_:1})])):h("",!0)])])])])])),[[i]])])])}}};export{F as default};
