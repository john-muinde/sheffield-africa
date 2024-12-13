import{v as e}from"./index-2f855d2c.js";/* empty css                     */import{_ as d}from"./highlight-e8a3ee89.js";import"./use-meta-131940dc.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const m={class:"container"},p={class:"container"},v={class:"nav sidenav"},f={class:"sidenav-content"},g={class:"row layout-top-spacing"},E={id:"treeviewAnimated",class:"col-lg-12 layout-spacing"},N={class:"statbox panel box box-shadow"},h={class:"panel-body"},V={class:"code-section-container show-code"},b={key:0,class:"code-section text-start"},k={id:"treeviewBasic",class:"col-lg-12 layout-spacing"},_={class:"statbox panel box box-shadow"},y={class:"panel-body"},w={class:"code-section-container show-code"},x={key:0,class:"code-section text-start"},q={__name:"treeview",setup(B){const n=e.ref([]);e.onMounted(()=>{u()});const r=t=>{n.value.includes(t)?n.value=n.value.filter(l=>l!=t):n.value.push(t)},u=()=>{var t=document.getElementsByClassName("caret"),l;for(l=0;l<t.length;l++)t[l].addEventListener("click",function(){this.parentElement.querySelector(".nested").classList.toggle("active"),this.classList.toggle("caret-down")});var o=document.querySelectorAll(".file-tree li.file-tree-folder"),a=document.querySelectorAll(".file-tree li"),s,i;for(s=0;s<o.length;s++)o[s].addEventListener("click",function(c){this.children&&this.children.length&&(this.children[0].parentNode.classList.toggle("open"),this.children[0].classList.toggle("d-block")),c.stopPropagation()});for(i=0;i<a.length;i++)a[i].addEventListener("click",function(c){c.stopPropagation()})};return(t,l)=>{const o=e.resolveDirective("scroll-spy-active"),a=e.resolveDirective("scroll-spy-link"),s=e.resolveDirective("scroll-spy");return e.openBlock(),e.createElementBlock("div",m,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[l[2]||(l[2]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Elements")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"Tree View")])])])])])],-1))])),e.createElementVNode("div",p,[e.createElementVNode("div",v,[e.withDirectives((e.openBlock(),e.createElementBlock("div",f,l[3]||(l[3]=[e.createElementVNode("a",{href:"#treeviewAnimated",class:"nav-link"},"Animated",-1),e.createElementVNode("a",{href:"#treeviewBasic",class:"nav-link"},"Basic",-1)]))),[[o],[a]])]),e.withDirectives((e.openBlock(),e.createElementBlock("div",g,[e.createElementVNode("div",E,[e.createElementVNode("div",N,[l[7]||(l[7]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Animated")])])],-1)),e.createElementVNode("div",h,[l[6]||(l[6]=e.createStaticVNode('<ul class="file-tree"><li class="file-tree-folder"> CSS <ul><li>style.css</li></ul></li><li class="file-tree-folder open"> Images <ul class="d-block"><li>profile.jpeg</li><li>background.png</li><li>gallery.jpg</li></ul></li><li class="file-tree-folder"> HTML <ul><li class="file-tree-folder"> PAGES <ul><li>file name</li><li>file name</li><li>file name</li></ul></li><li>file name</li><li>file name</li></ul></li><li>index.html</li><li>components.html</li></ul>',1)),e.createElementVNode("div",V,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[0]||(l[0]=i=>r("code1"))},l[4]||(l[4]=[e.createElementVNode("span",null,"Code",-1)])),n.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",b,[e.createVNode(d,null,{default:e.withCtx(()=>l[5]||(l[5]=[e.createElementVNode("pre",null,`<ul class="file-tree">
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

`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",k,[e.createElementVNode("div",_,[l[11]||(l[11]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Basic")])])],-1)),e.createElementVNode("div",y,[l[10]||(l[10]=e.createStaticVNode('<ul id="myUL"><li><span class="caret">Parent Node</span><ul class="nested active"><li><span class="caret caret-down">img</span><ul class="nested"></ul></li><li><span class="caret caret-down">css</span><ul class="nested"><li>style.css</li></ul></li><li><span class="caret caret-down">js</span><ul class="nested"><li>script.js</li></ul></li><li><span>index.html</span></li></ul></li></ul>',1)),e.createElementVNode("div",w,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[1]||(l[1]=i=>r("code2"))},l[8]||(l[8]=[e.createElementVNode("span",null,"Code",-1)])),n.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",x,[e.createVNode(d,null,{default:e.withCtx(()=>l[9]||(l[9]=[e.createElementVNode("pre",null,`<ul id="myUL">
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

`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])])),[[s]])])])}}};export{q as default};
