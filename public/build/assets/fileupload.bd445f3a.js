/* empty css                     *//* empty css                                     */import{_ as d}from"./highlight.ed5ce43a.js";import{F as r}from"./file-upload-with-preview.esm.fbf56fa2.js";import{x as w,y,a5 as o,o as i,c as a,a2 as I,a as e,p as _,i as p,l as u,e as m,Y as n,aq as F}from"./app-setting.46400ad2.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const k={class:"container"},x=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Forms")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"File Upload")])])])])])],-1),M={class:"container"},S={class:"nav sidenav"},C={class:"sidenav-content"},U=e("a",{href:"#fuSingleFile",class:"nav-link"},"Single File",-1),E=e("a",{href:"#fuMultipleFile",class:"nav-link"},"Multiple File",-1),j=[U,E],A=n('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/file-upload-with-preview" class="text-info"> https://www.npmjs.com/package/file-upload-with-preview </a></div></div></div>',1),L={class:"row layout-top-spacing"},T={id:"fuSingleFile",class:"col-lg-12 layout-spacing"},B={class:"statbox panel box box-shadow"},D=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Single File Upload")])])],-1),N={class:"panel-body"},V=n('<div class="custom-file-container" data-upload-id="myFirstImage"><label>Upload (Single File) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label><label class="custom-file-container__custom-file"><input type="file" class="custom-file-container__custom-file__custom-file-input" accept="image/*"><input type="hidden" name="MAX_FILE_SIZE" value="10485760"><span class="custom-file-container__custom-file__custom-file-control"></span></label><div class="custom-file-container__image-preview"></div></div>',1),X={class:"code-section-container show-code"},Z=e("span",null,"Code",-1),P=[Z],W={key:0,class:"code-section text-start"},$=e("pre",null,`<!-- Single File Upload -->
==========
   HTML
==========
<div class="custom-file-container" data-upload-id="myFirstImage">
    <label>Upload (Single File) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label>
    <label class="custom-file-container__custom-file" >
        <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="image/*">
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <span class="custom-file-container__custom-file__custom-file-control"></span>
    </label>
    <div class="custom-file-container__image-preview"></div>
</div>

==========
   CODE
==========
new FileUploadWithPreview('myFirstImage', {
    images: {
        baseImage: '/assets/images/file-preview.png',
        backgroundImage:''
    },
});
`,-1),q={id:"fuMultipleFile",class:"col-lg-12 layout-spacing"},H={class:"statbox panel box box-shadow"},O=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Multiple File Upload")])])],-1),Y={class:"panel-body"},z=n('<div class="custom-file-container" data-upload-id="mySecondImage"><label>Upload (Allow Multiple) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label><label class="custom-file-container__custom-file"><input type="file" class="custom-file-container__custom-file__custom-file-input" multiple><input type="hidden" name="MAX_FILE_SIZE" value="10485760"><span class="custom-file-container__custom-file__custom-file-control"></span></label><div class="custom-file-container__image-preview"></div></div>',1),G={class:"code-section-container show-code"},J=e("span",null,"Code",-1),K=[J],Q={key:0,class:"code-section text-start"},R=e("pre",null,`<!-- Multiple File Upload -->
==========
   HTML
==========
<div class="custom-file-container" data-upload-id="mySecondImage">
    <label>Upload (Allow Multiple) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label>
    <label class="custom-file-container__custom-file" >
        <input type="file" class="custom-file-container__custom-file__custom-file-input" multiple>
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <span class="custom-file-container__custom-file__custom-file-control"></span>
    </label>
    <div class="custom-file-container__image-preview"></div>
</div>

==========
   CODE
==========
new FileUploadWithPreview('myFirstImage', {
    images: {
        baseImage: '/assets/images/file-preview.png',
        backgroundImage:''
    },
});
`,-1),ce={__name:"fileupload",setup(ee){const l=w([]);y(()=>{v(),new r("myFirstImage",{images:{baseImage:"/assets/images/file-preview.png",backgroundImage:""}}),new r("mySecondImage",{images:{baseImage:"/assets/images/file-preview.png",backgroundImage:""}})});const c=t=>{l.value.includes(t)?l.value=l.value.filter(s=>s!=t):l.value.push(t)},v=()=>{setTimeout(()=>{var t=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));t.map(s=>new window.bootstrap.Tooltip(s))})};return(t,s)=>{const f=o("scroll-spy-active"),g=o("scroll-spy-link"),h=o("scroll-spy");return i(),a("div",k,[(i(),I(F,{to:"#breadcrumb"},[x])),e("div",M,[e("div",S,[_((i(),a("div",C,j)),[[f],[g]])]),A,_((i(),a("div",L,[e("div",T,[e("div",B,[D,e("div",N,[V,e("div",X,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[0]||(s[0]=b=>c("code1"))},P),l.value.includes("code1")?(i(),a("div",W,[p(d,null,{default:u(()=>[$]),_:1})])):m("",!0)])])])]),e("div",q,[e("div",H,[O,e("div",Y,[z,e("div",G,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=b=>c("code2"))},K),l.value.includes("code2")?(i(),a("div",Q,[p(d,null,{default:u(()=>[R]),_:1})])):m("",!0)])])])])])),[[h]])])])}}};export{ce as default};
