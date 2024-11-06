/* empty css                     *//* empty css                                     */import{_ as r}from"./highlight.275b4212.js";import{F as d}from"./file-upload-with-preview.esm.fbf56fa2.js";import{s as h,u as y,a5 as o,o as a,c as t,a0 as I,a as e,ap as F,p,X as n,i as u,l as m,e as v}from"./app-setting.a15bb3e9.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const k={class:"container"},x={class:"container"},M={class:"nav sidenav"},S={class:"sidenav-content"},C={class:"row layout-top-spacing"},U={id:"fuSingleFile",class:"col-lg-12 layout-spacing"},E={class:"statbox panel box box-shadow"},j={class:"panel-body"},A={class:"code-section-container show-code"},L={key:0,class:"code-section text-start"},T={id:"fuMultipleFile",class:"col-lg-12 layout-spacing"},B={class:"statbox panel box box-shadow"},D={class:"panel-body"},X={class:"code-section-container show-code"},N={key:0,class:"code-section text-start"},z={__name:"fileupload",setup(V){const i=h([]);y(()=>{_(),new d("myFirstImage",{images:{baseImage:"/assets/images/file-preview.png",backgroundImage:""}}),new d("mySecondImage",{images:{baseImage:"/assets/images/file-preview.png",backgroundImage:""}})});const c=s=>{i.value.includes(s)?i.value=i.value.filter(l=>l!=s):i.value.push(s)},_=()=>{setTimeout(()=>{var s=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));s.map(l=>new window.bootstrap.Tooltip(l))})};return(s,l)=>{const f=o("scroll-spy-active"),g=o("scroll-spy-link"),b=o("scroll-spy");return a(),t("div",k,[(a(),I(F,{to:"#breadcrumb"},[l[2]||(l[2]=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Forms")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"File Upload")])])])])])],-1))])),e("div",x,[e("div",M,[p((a(),t("div",S,l[3]||(l[3]=[e("a",{href:"#fuSingleFile",class:"nav-link"},"Single File",-1),e("a",{href:"#fuMultipleFile",class:"nav-link"},"Multiple File",-1)]))),[[f],[g]])]),l[12]||(l[12]=n('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/file-upload-with-preview" class="text-info"> https://www.npmjs.com/package/file-upload-with-preview </a></div></div></div>',1)),p((a(),t("div",C,[e("div",U,[e("div",E,[l[7]||(l[7]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Single File Upload")])])],-1)),e("div",j,[l[6]||(l[6]=n('<div class="custom-file-container" data-upload-id="myFirstImage"><label>Upload (Single File) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label><label class="custom-file-container__custom-file"><input type="file" class="custom-file-container__custom-file__custom-file-input" accept="image/*"><input type="hidden" name="MAX_FILE_SIZE" value="10485760"><span class="custom-file-container__custom-file__custom-file-control"></span></label><div class="custom-file-container__image-preview"></div></div>',1)),e("div",A,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[0]||(l[0]=w=>c("code1"))},l[4]||(l[4]=[e("span",null,"Code",-1)])),i.value.includes("code1")?(a(),t("div",L,[u(r,null,{default:m(()=>l[5]||(l[5]=[e("pre",null,`<!-- Single File Upload -->
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
`,-1)])),_:1})])):v("",!0)])])])]),e("div",T,[e("div",B,[l[11]||(l[11]=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Multiple File Upload")])])],-1)),e("div",D,[l[10]||(l[10]=n('<div class="custom-file-container" data-upload-id="mySecondImage"><label>Upload (Allow Multiple) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label><label class="custom-file-container__custom-file"><input type="file" class="custom-file-container__custom-file__custom-file-input" multiple><input type="hidden" name="MAX_FILE_SIZE" value="10485760"><span class="custom-file-container__custom-file__custom-file-control"></span></label><div class="custom-file-container__image-preview"></div></div>',1)),e("div",X,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[1]||(l[1]=w=>c("code2"))},l[8]||(l[8]=[e("span",null,"Code",-1)])),i.value.includes("code2")?(a(),t("div",N,[u(r,null,{default:m(()=>l[9]||(l[9]=[e("pre",null,`<!-- Multiple File Upload -->
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
`,-1)])),_:1})])):v("",!0)])])])])])),[[b]])])])}}};export{z as default};
