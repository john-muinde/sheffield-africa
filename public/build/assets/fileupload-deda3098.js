import{v as e}from"./index-0d6930bf.js";/* empty css                     *//* empty css                                     */import{_ as o}from"./highlight-51ac227e.js";import{F as s}from"./file-upload-with-preview.esm-03fb8eae.js";import"./use-meta-44934223.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const p={class:"container"},u={class:"container"},v={class:"nav sidenav"},_={class:"sidenav-content"},f={class:"row layout-top-spacing"},g={id:"fuSingleFile",class:"col-lg-12 layout-spacing"},b={class:"statbox panel box box-shadow"},w={class:"panel-body"},E={class:"code-section-container show-code"},N={key:0,class:"code-section text-start"},V={id:"fuMultipleFile",class:"col-lg-12 layout-spacing"},h={class:"statbox panel box box-shadow"},y={class:"panel-body"},k={class:"code-section-container show-code"},I={key:0,class:"code-section text-start"},D={__name:"fileupload",setup(F){const l=e.ref([]);e.onMounted(()=>{n(),new s("myFirstImage",{images:{baseImage:"/assets/images/file-preview.png",backgroundImage:""}}),new s("mySecondImage",{images:{baseImage:"/assets/images/file-preview.png",backgroundImage:""}})});const i=a=>{l.value.includes(a)?l.value=l.value.filter(t=>t!=a):l.value.push(a)},n=()=>{setTimeout(()=>{var a=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));a.map(t=>new window.bootstrap.Tooltip(t))})};return(a,t)=>{const c=e.resolveDirective("scroll-spy-active"),r=e.resolveDirective("scroll-spy-link"),d=e.resolveDirective("scroll-spy");return e.openBlock(),e.createElementBlock("div",p,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[t[2]||(t[2]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Forms")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"File Upload")])])])])])],-1))])),e.createElementVNode("div",u,[e.createElementVNode("div",v,[e.withDirectives((e.openBlock(),e.createElementBlock("div",_,t[3]||(t[3]=[e.createElementVNode("a",{href:"#fuSingleFile",class:"nav-link"},"Single File",-1),e.createElementVNode("a",{href:"#fuMultipleFile",class:"nav-link"},"Multiple File",-1)]))),[[c],[r]])]),t[12]||(t[12]=e.createStaticVNode('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/file-upload-with-preview" class="text-info"> https://www.npmjs.com/package/file-upload-with-preview </a></div></div></div>',1)),e.withDirectives((e.openBlock(),e.createElementBlock("div",f,[e.createElementVNode("div",g,[e.createElementVNode("div",b,[t[7]||(t[7]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Single File Upload")])])],-1)),e.createElementVNode("div",w,[t[6]||(t[6]=e.createStaticVNode('<div class="custom-file-container" data-upload-id="myFirstImage"><label>Upload (Single File) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label><label class="custom-file-container__custom-file"><input type="file" class="custom-file-container__custom-file__custom-file-input" accept="image/*"><input type="hidden" name="MAX_FILE_SIZE" value="10485760"><span class="custom-file-container__custom-file__custom-file-control"></span></label><div class="custom-file-container__image-preview"></div></div>',1)),e.createElementVNode("div",E,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[0]||(t[0]=m=>i("code1"))},t[4]||(t[4]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",N,[e.createVNode(o,null,{default:e.withCtx(()=>t[5]||(t[5]=[e.createElementVNode("pre",null,`<!-- Single File Upload -->
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
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",V,[e.createElementVNode("div",h,[t[11]||(t[11]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Multiple File Upload")])])],-1)),e.createElementVNode("div",y,[t[10]||(t[10]=e.createStaticVNode('<div class="custom-file-container" data-upload-id="mySecondImage"><label>Upload (Allow Multiple) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label><label class="custom-file-container__custom-file"><input type="file" class="custom-file-container__custom-file__custom-file-input" multiple><input type="hidden" name="MAX_FILE_SIZE" value="10485760"><span class="custom-file-container__custom-file__custom-file-control"></span></label><div class="custom-file-container__image-preview"></div></div>',1)),e.createElementVNode("div",k,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=m=>i("code2"))},t[8]||(t[8]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",I,[e.createVNode(o,null,{default:e.withCtx(()=>t[9]||(t[9]=[e.createElementVNode("pre",null,`<!-- Multiple File Upload -->
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
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])])),[[d]])])])}}};export{D as default};
