import{v as e}from"./index-2f855d2c.js";/* empty css                     */import{_ as i}from"./highlight-e8a3ee89.js";import"./use-meta-131940dc.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const m={class:"container"},u={class:"container"},w={id:"navSection",class:"nav sidenav"},p={class:"sidenav-content"},b={class:"row layout-top-spacing"},v={id:"sweetalertbasic",class:"col-lg-12 col-12 layout-spacing"},g={class:"statbox panel box box-shadow"},N={class:"panel-body text-center"},V={class:"code-section-container show-code"},E={key:0,class:"code-section text-start"},f={id:"sweetalertmessage",class:"col-lg-12 col-12 layout-spacing"},h={class:"statbox panel box box-shadow"},x={class:"panel-body text-center"},C={class:"code-section-container show-code"},k={key:0,class:"code-section text-start"},y={id:"sweetalertdynamic",class:"col-lg-12 col-12 layout-spacing"},B={class:"statbox panel box box-shadow"},S={class:"panel-body text-center"},A={class:"code-section-container show-code"},T={key:0,class:"code-section text-start"},_={id:"sweetalertatitlewithtext",class:"col-lg-12 col-12 layout-spacing"},$={class:"statbox panel box box-shadow"},I={class:"panel-body text-center"},M={class:"code-section-container show-code"},D={key:0,class:"code-section text-start"},L={id:"sweetalertchainingmodals",class:"col-lg-12 col-12 layout-spacing"},Y={class:"statbox panel box box-shadow"},q={class:"panel-body text-center"},P={class:"code-section-container show-code"},j={key:0,class:"code-section text-start"},W={id:"sweetalertanimation",class:"col-lg-12 col-12 layout-spacing"},H={class:"statbox panel box box-shadow"},R={class:"panel-body text-center"},O={class:"code-section-container show-code"},Q={key:0,class:"code-section text-start"},F={id:"sweetalertautoclosetimer",class:"col-lg-12 col-12 layout-spacing"},G={class:"statbox panel box box-shadow"},J={class:"panel-body text-center"},U={class:"code-section-container show-code"},X={key:0,class:"code-section text-start"},z={id:"sweetalertcustomimage",class:"col-lg-12 col-12 layout-spacing"},K={class:"statbox panel box box-shadow"},Z={class:"panel-body text-center"},ee={class:"code-section-container show-code"},te={key:0,class:"code-section text-start"},ne={id:"sweetalertcustomhtml",class:"col-lg-12 col-12 layout-spacing"},oe={class:"statbox panel box box-shadow"},le={class:"panel-body text-center"},se={class:"code-section-container show-code"},ae={key:0,class:"code-section text-start"},ie={id:"sweetalertwarningmessage",class:"col-lg-12 col-12 layout-spacing"},de={class:"statbox panel box box-shadow"},ce={class:"panel-body text-center"},re={class:"code-section-container show-code"},me={key:0,class:"code-section text-start"},ue={id:"sweetalertcancel",class:"col-lg-12 col-12 layout-spacing"},we={class:"statbox panel box box-shadow"},pe={class:"panel-body text-center"},be={class:"code-section-container show-code"},ve={key:0,class:"code-section text-start"},ge={id:"sweetalertcustomstyle",class:"col-lg-12 col-12 layout-spacing"},Ne={class:"statbox panel box box-shadow"},Ve={class:"panel-body text-center"},Ee={class:"code-section-container show-code"},fe={key:0,class:"code-section text-start"},he={id:"sweetalertfooter",class:"col-lg-12 col-12 layout-spacing"},xe={class:"statbox panel box box-shadow"},Ce={class:"panel-body text-center"},ke={class:"code-section-container show-code"},ye={key:0,class:"code-section text-start"},Be={id:"sweetalertrtl",class:"col-lg-12 col-12 layout-spacing"},Se={class:"statbox panel box box-shadow"},Ae={class:"panel-body text-center"},Te={class:"code-section-container show-code"},_e={key:0,class:"code-section text-start"},$e={id:"sweetalertmixin",class:"col-lg-12 col-12 layout-spacing"},Ie={class:"statbox panel box box-shadow"},Me={class:"panel-body text-center"},De={class:"code-section-container show-code"},Le={key:0,class:"code-section text-start"},Oe={__name:"sweetalert",setup(Ye){const l=e.ref([]),s=o=>{l.value.includes(o)?l.value=l.value.filter(t=>t!=o):l.value.push(o)},a=async o=>{if(o===1)new window.Swal({title:"Saved succesfully",padding:"2em"});else if(o===2)new window.Swal({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em"});else if(o===3){const t="https://api.ipify.org?format=json";new window.Swal({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:()=>fetch(t).then(d=>d.json()).then(d=>{new window.Swal({title:d.ip})}).catch(()=>{new window.Swal({type:"error",title:"Unable to get your public IP"})})})}else if(o===4)new window.Swal({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em"});else if(o===5){const t=["1","2","3"],d=window.Swal.mixin({confirmButtonText:"Next →",showCancelButton:!0,progressSteps:t,input:"text",inputAttributes:{required:!0},validationMessage:"This field is required",padding:"2em"}),r=[];let c;for(c=0;c<t.length;){const n=await d.fire({title:`Question ${t[c]}`,text:c==0?"Chaining swal2 modals is easy.":"",inputValue:r[c],showCancelButton:c>0,currentProgressStep:c});if(n.value)r[c]=n.value,c++;else if(n.dismiss===new window.Swal.DismissReason.cancel)c--;else break}c===t.length&&window.Swal.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(r)+"</pre>",confirmButtonText:"Lovely!"})}else if(o===6)new window.Swal({title:"Custom animation with Animate.css",animation:!1,customClass:"animated tada",padding:"2em"});else if(o===7){let t;new window.Swal({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{window.Swal.showLoading();const d=window.Swal.getHtmlContainer().querySelector("b");t=setInterval(()=>{d.textContent=window.Swal.getTimerLeft()},100)},willClose:()=>{clearInterval(t)}}).then(d=>{d.dismiss,window.Swal.DismissReason.timer})}else if(o===8)new window.Swal({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/thumbs-up.jpg",imageWidth:224,imageHeight:200,imageAlt:"Custom image",animation:!1,padding:"2em"});else if(o===9)new window.Swal({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em"});else if(o===10)new window.Swal({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em"}).then(t=>{t.value&&new window.Swal("Deleted!","Your file has been deleted.","success")});else if(o===11){const t=window.Swal.mixin({confirmButtonClass:"btn btn-secondary",cancelButtonClass:"btn btn-dark me-3",buttonsStyling:!1});t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(d=>{d.value?t.fire("Deleted!","Your file has been deleted.","success"):d.dismiss===window.Swal.DismissReason.cancel&&t.fire("Cancelled","Your imaginary file is safe :)","error")})}else o===12?new window.Swal({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal",background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):o===13?new window.Swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>",padding:"2em"}):o===14?new window.Swal({title:"هل تريد الاستمرار؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,padding:"2em",target:document.getElementById("rtl-container")}):o===15&&window.Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,padding:"2em"}).fire({icon:"success",title:"Signed in successfully",padding:"2em"})};return(o,t)=>{const d=e.resolveDirective("scroll-spy-active"),r=e.resolveDirective("scroll-spy-link"),c=e.resolveDirective("scroll-spy");return e.openBlock(),e.createElementBlock("div",m,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[t[30]||(t[30]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Components")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"Sweet Alerts")])])])])])],-1))])),e.createElementVNode("div",u,[e.createElementVNode("div",w,[e.withDirectives((e.openBlock(),e.createElementBlock("div",p,t[31]||(t[31]=[e.createStaticVNode('<a href="#sweetalertbasic" class="nav-link">Basic</a><a href="#sweetalertmessage" class="nav-link">Message</a><a href="#sweetalertdynamic" class="nav-link">Dynamic</a><a href="#sweetalertatitlewithtext" class="nav-link">A title with text</a><a href="#sweetalertchainingmodals" class="nav-link">Chaining modals</a><a href="#sweetalertanimation" class="nav-link">Animation</a><a href="#sweetalertautoclosetimer" class="nav-link">Auto close timer</a><a href="#sweetalertcustomimage" class="nav-link">Custom image</a><a href="#sweetalertcustomhtml" class="nav-link">Custom HTML</a><a href="#sweetalertwarningmessage" class="nav-link">Warning message</a><a href="#sweetalertcancel" class="nav-link">Cancel</a><a href="#sweetalertcustomstyle" class="nav-link">Custom Style</a><a href="#sweetalertfooter" class="nav-link">Footer</a><a href="#sweetalertrtl" class="nav-link">RTL</a><a href="#sweetalertmixin" class="nav-link">Mixin</a>',15)]))),[[d],[r]])]),t[77]||(t[77]=e.createStaticVNode('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-sweetalert2" class="text-info"> https://www.npmjs.com/package/vue-sweetalert2 </a></div></div></div>',1)),e.withDirectives((e.openBlock(),e.createElementBlock("div",b,[e.createElementVNode("div",v,[e.createElementVNode("div",g,[t[34]||(t[34]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Basic message")])])],-1)),e.createElementVNode("div",N,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[0]||(t[0]=n=>a(1))}," Basic message "),e.createElementVNode("div",V,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=n=>s("code1"))},t[32]||(t[32]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",E,[e.createVNode(i,null,{default:e.withCtx(()=>t[33]||(t[33]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(1)">Basic message</button>

 new window.Swal({
    title: 'Saved succesfully',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",f,[e.createElementVNode("div",h,[t[37]||(t[37]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Success message")])])],-1)),e.createElementVNode("div",x,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[2]||(t[2]=n=>a(2))}," Success message! "),e.createElementVNode("div",C,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[3]||(t[3]=n=>s("code2"))},t[35]||(t[35]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",k,[e.createVNode(i,null,{default:e.withCtx(()=>t[36]||(t[36]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(2)">Success message!</button>

new window.Swal({
    icon: 'success',
    title: 'Good job!',
    text: 'You clicked the!',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",y,[e.createElementVNode("div",B,[t[40]||(t[40]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Dynamic queue")])])],-1)),e.createElementVNode("div",S,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[4]||(t[4]=n=>a(3))}," Dynamic queue "),e.createElementVNode("div",A,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[5]||(t[5]=n=>s("code3"))},t[38]||(t[38]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code3")?(e.openBlock(),e.createElementBlock("div",T,[e.createVNode(i,null,{default:e.withCtx(()=>t[39]||(t[39]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(3)">Dynamic queue</button>

const ipAPI = 'https://api.ipify.org?format=json';
new window.Swal({
    title: 'Your public IP',
    confirmButtonText: 'Show my public IP',
    text: 'Your public IP will be received ' + 'via AJAX request',
    showLoaderOnConfirm: true,
    preConfirm: () => {
        return fetch(ipAPI)
            .then(response => {
                return response.json();
            })
            .then(data => {
                new window.Swal({
                    title: data.ip
                });
            })
            .catch(() => {
                new window.Swal({
                    type: 'error',
                    title: 'Unable to get your public IP'
                });
            });
    }
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",_,[e.createElementVNode("div",$,[t[43]||(t[43]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"A title with a text under")])])],-1)),e.createElementVNode("div",I,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[6]||(t[6]=n=>a(4))}," Title & text "),e.createElementVNode("div",M,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[7]||(t[7]=n=>s("code4"))},t[41]||(t[41]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code4")?(e.openBlock(),e.createElementBlock("div",D,[e.createVNode(i,null,{default:e.withCtx(()=>t[42]||(t[42]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(4)">Title & text</button>

new window.Swal({
    icon: 'question',
    title: 'The Internet?',
    text: 'That thing is still around?',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",L,[e.createElementVNode("div",Y,[t[46]||(t[46]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Chaining modals (queue)")])])],-1)),e.createElementVNode("div",q,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[8]||(t[8]=n=>a(5))}," Chaining modals (queue) "),e.createElementVNode("div",P,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[9]||(t[9]=n=>s("code5"))},t[44]||(t[44]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code5")?(e.openBlock(),e.createElementBlock("div",j,[e.createVNode(i,null,{default:e.withCtx(()=>t[45]||(t[45]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(5)">Chaining modals (queue)</button>

const steps = ['1', '2', '3'];
const swalQueueStep =  window.Swal.mixin({
    confirmButtonText: 'Next →',
    showCancelButton: true,
    progressSteps: steps,
    input: 'text',
    inputAttributes: {
        required: true
    },
    validationMessage: 'This field is required',
    padding: '2em'
});

const values = [];
let currentStep;

for (currentStep = 0; currentStep < steps.length; ) {
    const result = await swalQueueStep.fire({
        title: \`Question \${steps[currentStep]}\`,
        text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',
        inputValue: values[currentStep],
        showCancelButton: currentStep > 0,
        currentProgressStep: currentStep
    });

    if (result.value) {
        values[currentStep] = result.value;
        currentStep++;
    } else if (result.dismiss === new window.Swal.DismissReason.cancel) {
        currentStep--;
    } else {
        break;
    }
}

if (currentStep === steps.length) {
    new window.Swal.fire({
        title: 'All done!',
        padding: '2em',
        html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
        confirmButtonText: 'Lovely!'
    });
}
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",W,[e.createElementVNode("div",H,[t[49]||(t[49]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Custom animation")])])],-1)),e.createElementVNode("div",R,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[10]||(t[10]=n=>a(6))}," Custom animation "),e.createElementVNode("div",O,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[11]||(t[11]=n=>s("code6"))},t[47]||(t[47]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code6")?(e.openBlock(),e.createElementBlock("div",Q,[e.createVNode(i,null,{default:e.withCtx(()=>t[48]||(t[48]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(6)">Custom animation</button>

new window.Swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",F,[e.createElementVNode("div",G,[t[52]||(t[52]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Message with auto close timer")])])],-1)),e.createElementVNode("div",J,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[12]||(t[12]=n=>a(7))}," Message timer "),e.createElementVNode("div",U,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[13]||(t[13]=n=>s("code7"))},t[50]||(t[50]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code7")?(e.openBlock(),e.createElementBlock("div",X,[e.createVNode(i,null,{default:e.withCtx(()=>t[51]||(t[51]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(7)">Message timer</button>

let timerInterval;

new window.Swal({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        new window.Swal.showLoading();
        const b = new window.Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
            b.textContent = new window.Swal.getTimerLeft();
        }, 100);
    },
    willClose: () => {
        clearInterval(timerInterval);
    }
}).then((result)=> {
    if (result.dismiss === new window.Swal.DismissReason.timer) {

    }
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",z,[e.createElementVNode("div",K,[t[55]||(t[55]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Message with custom image")])])],-1)),e.createElementVNode("div",Z,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[14]||(t[14]=n=>a(8))}," Message with custom image "),e.createElementVNode("div",ee,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[15]||(t[15]=n=>s("code8"))},t[53]||(t[53]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code8")?(e.openBlock(),e.createElementBlock("div",te,[e.createVNode(i,null,{default:e.withCtx(()=>t[54]||(t[54]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(8)">Message with custom image</button>

new window.Swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: '/assets/images/thumbs-up.jpg',
    imageWidth: 224,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false,
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",ne,[e.createElementVNode("div",oe,[t[58]||(t[58]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Custom HTML description and buttons")])])],-1)),e.createElementVNode("div",le,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[16]||(t[16]=n=>a(9))}," Custom Description & buttons "),e.createElementVNode("div",se,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[17]||(t[17]=n=>s("code9"))},t[56]||(t[56]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code9")?(e.openBlock(),e.createElementBlock("div",ae,[e.createVNode(i,null,{default:e.withCtx(()=>t[57]||(t[57]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(9)">Custom Description & buttons</button>

new window.Swal({
    icon: 'info',
    title: '<i>HTML</i> <u>example</u>',
    html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
    cancelButtonAriaLabel: 'Thumbs down',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",ie,[e.createElementVNode("div",de,[t[61]||(t[61]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,'Warning message, with "Confirm" button')])])],-1)),e.createElementVNode("div",ce,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[18]||(t[18]=n=>a(10))}," Confirm "),e.createElementVNode("div",re,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[19]||(t[19]=n=>s("code10"))},t[59]||(t[59]=[e.createElementVNode("span",null,"Confirm",-1)])),l.value.includes("code10")?(e.openBlock(),e.createElementBlock("div",me,[e.createVNode(i,null,{default:e.withCtx(()=>t[60]||(t[60]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(10)">Confirm</button>

new window.Swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    padding: '2em'
}).then(result => {
    if (result.value) {
        new window.Swal('Deleted!', 'Your file has been deleted.', 'success');
    }
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",ue,[e.createElementVNode("div",we,[t[64]||(t[64]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,'Execute something else for "Cancel".')])])],-1)),e.createElementVNode("div",pe,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[20]||(t[20]=n=>a(11))},' Addition else for "Cancel". '),e.createElementVNode("div",be,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[21]||(t[21]=n=>s("code11"))},t[62]||(t[62]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code11")?(e.openBlock(),e.createElementBlock("div",ve,[e.createVNode(i,null,{default:e.withCtx(()=>t[63]||(t[63]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(11)">Addition else for "Cancel".</button>

const swalWithBootstrapButtons =  window.Swal.mixin({
    confirmButtonClass: 'btn btn-secondary',
    cancelButtonClass: 'btn btn-dark me-3',
    buttonsStyling: false
});
swalWithBootstrapButtons
    .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
        padding: '2em'
    })
    .then(result => {
        if (result.value) {
            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.dismiss === new window.Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    });
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",ge,[e.createElementVNode("div",Ne,[t[67]||(t[67]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"A message with custom width, padding and background")])])],-1)),e.createElementVNode("div",Ve,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[22]||(t[22]=n=>a(12))}," Custom Message "),e.createElementVNode("div",Ee,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[23]||(t[23]=n=>s("code12"))},t[65]||(t[65]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code12")?(e.openBlock(),e.createElementBlock("div",fe,[e.createVNode(i,null,{default:e.withCtx(()=>t[66]||(t[66]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(12)">Custom Message</button>

new window.Swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '7em',
    customClass: 'background-modal',
    background: '#fff url(' + '/assets/images/sweet-bg.jpg' + ') no-repeat 100% 100%'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",he,[e.createElementVNode("div",xe,[t[70]||(t[70]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"With Footer")])])],-1)),e.createElementVNode("div",Ce,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[24]||(t[24]=n=>a(13))}," With Footer "),e.createElementVNode("div",ke,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[25]||(t[25]=n=>s("code13"))},t[68]||(t[68]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code13")?(e.openBlock(),e.createElementBlock("div",ye,[e.createVNode(i,null,{default:e.withCtx(()=>t[69]||(t[69]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(13)">With Footer</button>

new window.Swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",Be,[e.createElementVNode("div",Se,[t[73]||(t[73]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"RTL Support")])])],-1)),e.createElementVNode("div",Ae,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[26]||(t[26]=n=>a(14))}," RTL "),e.createElementVNode("div",Te,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[27]||(t[27]=n=>s("code14"))},t[71]||(t[71]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code14")?(e.openBlock(),e.createElementBlock("div",_e,[e.createVNode(i,null,{default:e.withCtx(()=>t[72]||(t[72]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(14)">RTL</button>

new window.Swal({
    title: 'هل تريد الاستمرار؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
    padding: '2em',
    target: document.getElementById('rtl-container')
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",$e,[e.createElementVNode("div",Ie,[t[76]||(t[76]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Mixin")])])],-1)),e.createElementVNode("div",Me,[e.createElementVNode("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:t[28]||(t[28]=n=>a(15))}," Mixin "),e.createElementVNode("div",De,[e.createElementVNode("button",{class:"btn btn-default toggle-code-snippet",onClick:t[29]||(t[29]=n=>s("code15"))},t[74]||(t[74]=[e.createElementVNode("span",null,"Code",-1)])),l.value.includes("code15")?(e.openBlock(),e.createElementBlock("div",Le,[e.createVNode(i,null,{default:e.withCtx(()=>t[75]||(t[75]=[e.createElementVNode("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(15)">Mixin</button>

const toast =  window.Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    padding: '2em'
});
toast.fire({
    icon: 'success',
    title: 'Signed in successfully',
    padding: '2em'
});
                                        `,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])])),[[c]])])])}}};export{Oe as default};
