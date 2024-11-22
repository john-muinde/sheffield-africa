/* empty css                     */import{_ as r}from"./highlight.402e98b2.js";import"./use-meta.36c71d0a.js";import{r as h,X as v,bG as l,bH as i,bW as x,bI as t,aV as y,W as g,c4 as f,e as c,bT as u,bN as w}from"./index.3959c817.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const C={class:"container"},k={class:"container"},S={id:"navSection",class:"nav sidenav"},B={class:"sidenav-content"},A={class:"row layout-top-spacing"},T={id:"sweetalertbasic",class:"col-lg-12 col-12 layout-spacing"},_={class:"statbox panel box box-shadow"},$={class:"panel-body text-center"},I={class:"code-section-container show-code"},M={key:0,class:"code-section text-start"},L={id:"sweetalertmessage",class:"col-lg-12 col-12 layout-spacing"},Y={class:"statbox panel box box-shadow"},D={class:"panel-body text-center"},q={class:"code-section-container show-code"},W={key:0,class:"code-section text-start"},P={id:"sweetalertdynamic",class:"col-lg-12 col-12 layout-spacing"},j={class:"statbox panel box box-shadow"},H={class:"panel-body text-center"},N={class:"code-section-container show-code"},R={key:0,class:"code-section text-start"},O={id:"sweetalertatitlewithtext",class:"col-lg-12 col-12 layout-spacing"},V={class:"statbox panel box box-shadow"},G={class:"panel-body text-center"},Q={class:"code-section-container show-code"},E={key:0,class:"code-section text-start"},F={id:"sweetalertchainingmodals",class:"col-lg-12 col-12 layout-spacing"},J={class:"statbox panel box box-shadow"},U={class:"panel-body text-center"},X={class:"code-section-container show-code"},z={key:0,class:"code-section text-start"},K={id:"sweetalertanimation",class:"col-lg-12 col-12 layout-spacing"},Z={class:"statbox panel box box-shadow"},tt={class:"panel-body text-center"},et={class:"code-section-container show-code"},nt={key:0,class:"code-section text-start"},st={id:"sweetalertautoclosetimer",class:"col-lg-12 col-12 layout-spacing"},ot={class:"statbox panel box box-shadow"},lt={class:"panel-body text-center"},it={class:"code-section-container show-code"},at={key:0,class:"code-section text-start"},dt={id:"sweetalertcustomimage",class:"col-lg-12 col-12 layout-spacing"},rt={class:"statbox panel box box-shadow"},ct={class:"panel-body text-center"},ut={class:"code-section-container show-code"},wt={key:0,class:"code-section text-start"},mt={id:"sweetalertcustomhtml",class:"col-lg-12 col-12 layout-spacing"},bt={class:"statbox panel box box-shadow"},pt={class:"panel-body text-center"},vt={class:"code-section-container show-code"},gt={key:0,class:"code-section text-start"},ft={id:"sweetalertwarningmessage",class:"col-lg-12 col-12 layout-spacing"},ht={class:"statbox panel box box-shadow"},xt={class:"panel-body text-center"},yt={class:"code-section-container show-code"},Ct={key:0,class:"code-section text-start"},kt={id:"sweetalertcancel",class:"col-lg-12 col-12 layout-spacing"},St={class:"statbox panel box box-shadow"},Bt={class:"panel-body text-center"},At={class:"code-section-container show-code"},Tt={key:0,class:"code-section text-start"},_t={id:"sweetalertcustomstyle",class:"col-lg-12 col-12 layout-spacing"},$t={class:"statbox panel box box-shadow"},It={class:"panel-body text-center"},Mt={class:"code-section-container show-code"},Lt={key:0,class:"code-section text-start"},Yt={id:"sweetalertfooter",class:"col-lg-12 col-12 layout-spacing"},Dt={class:"statbox panel box box-shadow"},qt={class:"panel-body text-center"},Wt={class:"code-section-container show-code"},Pt={key:0,class:"code-section text-start"},jt={id:"sweetalertrtl",class:"col-lg-12 col-12 layout-spacing"},Ht={class:"statbox panel box box-shadow"},Nt={class:"panel-body text-center"},Rt={class:"code-section-container show-code"},Ot={key:0,class:"code-section text-start"},Vt={id:"sweetalertmixin",class:"col-lg-12 col-12 layout-spacing"},Gt={class:"statbox panel box box-shadow"},Qt={class:"panel-body text-center"},Et={class:"code-section-container show-code"},Ft={key:0,class:"code-section text-start"},ee={__name:"sweetalert",setup(Jt){const o=h([]),a=s=>{o.value.includes(s)?o.value=o.value.filter(e=>e!=s):o.value.push(s)},d=async s=>{if(s===1)new window.Swal({title:"Saved succesfully",padding:"2em"});else if(s===2)new window.Swal({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em"});else if(s===3){const e="https://api.ipify.org?format=json";new window.Swal({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:()=>fetch(e).then(m=>m.json()).then(m=>{new window.Swal({title:m.ip})}).catch(()=>{new window.Swal({type:"error",title:"Unable to get your public IP"})})})}else if(s===4)new window.Swal({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em"});else if(s===5){const e=["1","2","3"],m=window.Swal.mixin({confirmButtonText:"Next \u2192",showCancelButton:!0,progressSteps:e,input:"text",inputAttributes:{required:!0},validationMessage:"This field is required",padding:"2em"}),p=[];let b;for(b=0;b<e.length;){const n=await m.fire({title:`Question ${e[b]}`,text:b==0?"Chaining swal2 modals is easy.":"",inputValue:p[b],showCancelButton:b>0,currentProgressStep:b});if(n.value)p[b]=n.value,b++;else if(n.dismiss===new window.Swal.DismissReason.cancel)b--;else break}b===e.length&&window.Swal.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(p)+"</pre>",confirmButtonText:"Lovely!"})}else if(s===6)new window.Swal({title:"Custom animation with Animate.css",animation:!1,customClass:"animated tada",padding:"2em"});else if(s===7){let e;new window.Swal({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{window.Swal.showLoading();const m=window.Swal.getHtmlContainer().querySelector("b");e=setInterval(()=>{m.textContent=window.Swal.getTimerLeft()},100)},willClose:()=>{clearInterval(e)}}).then(m=>{m.dismiss,window.Swal.DismissReason.timer})}else if(s===8)new window.Swal({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/thumbs-up.jpg",imageWidth:224,imageHeight:200,imageAlt:"Custom image",animation:!1,padding:"2em"});else if(s===9)new window.Swal({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em"});else if(s===10)new window.Swal({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em"}).then(e=>{e.value&&new window.Swal("Deleted!","Your file has been deleted.","success")});else if(s===11){const e=window.Swal.mixin({confirmButtonClass:"btn btn-secondary",cancelButtonClass:"btn btn-dark me-3",buttonsStyling:!1});e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(m=>{m.value?e.fire("Deleted!","Your file has been deleted.","success"):m.dismiss===window.Swal.DismissReason.cancel&&e.fire("Cancelled","Your imaginary file is safe :)","error")})}else s===12?new window.Swal({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal",background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):s===13?new window.Swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>",padding:"2em"}):s===14?new window.Swal({title:"\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F",confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0644\u0627",showCancelButton:!0,showCloseButton:!0,padding:"2em",target:document.getElementById("rtl-container")}):s===15&&window.Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,padding:"2em"}).fire({icon:"success",title:"Signed in successfully",padding:"2em"})};return(s,e)=>{const m=v("scroll-spy-active"),p=v("scroll-spy-link"),b=v("scroll-spy");return l(),i("div",C,[(l(),x(y,{to:"#breadcrumb"},[e[30]||(e[30]=t("ul",{class:"navbar-nav flex-row"},[t("li",null,[t("div",{class:"page-header"},[t("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item"},[t("a",{href:"javascript:;"},"Components")]),t("li",{class:"breadcrumb-item active","aria-current":"page"},[t("span",null,"Sweet Alerts")])])])])])],-1))])),t("div",k,[t("div",S,[g((l(),i("div",B,e[31]||(e[31]=[f('<a href="#sweetalertbasic" class="nav-link">Basic</a><a href="#sweetalertmessage" class="nav-link">Message</a><a href="#sweetalertdynamic" class="nav-link">Dynamic</a><a href="#sweetalertatitlewithtext" class="nav-link">A title with text</a><a href="#sweetalertchainingmodals" class="nav-link">Chaining modals</a><a href="#sweetalertanimation" class="nav-link">Animation</a><a href="#sweetalertautoclosetimer" class="nav-link">Auto close timer</a><a href="#sweetalertcustomimage" class="nav-link">Custom image</a><a href="#sweetalertcustomhtml" class="nav-link">Custom HTML</a><a href="#sweetalertwarningmessage" class="nav-link">Warning message</a><a href="#sweetalertcancel" class="nav-link">Cancel</a><a href="#sweetalertcustomstyle" class="nav-link">Custom Style</a><a href="#sweetalertfooter" class="nav-link">Footer</a><a href="#sweetalertrtl" class="nav-link">RTL</a><a href="#sweetalertmixin" class="nav-link">Mixin</a>',15)]))),[[m],[p]])]),e[77]||(e[77]=f('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-sweetalert2" class="text-info"> https://www.npmjs.com/package/vue-sweetalert2 </a></div></div></div>',1)),g((l(),i("div",A,[t("div",T,[t("div",_,[e[34]||(e[34]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Basic message")])])],-1)),t("div",$,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[0]||(e[0]=n=>d(1))},"Basic message"),t("div",I,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[1]||(e[1]=n=>a("code1"))},e[32]||(e[32]=[t("span",null,"Code",-1)])),o.value.includes("code1")?(l(),i("div",M,[c(r,null,{default:u(()=>e[33]||(e[33]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(1)">Basic message</button>

 new window.Swal({
    title: 'Saved succesfully',
    padding: '2em'
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",L,[t("div",Y,[e[37]||(e[37]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Success message")])])],-1)),t("div",D,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[2]||(e[2]=n=>d(2))},"Success message!"),t("div",q,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[3]||(e[3]=n=>a("code2"))},e[35]||(e[35]=[t("span",null,"Code",-1)])),o.value.includes("code2")?(l(),i("div",W,[c(r,null,{default:u(()=>e[36]||(e[36]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(2)">Success message!</button>

new window.Swal({
    icon: 'success',
    title: 'Good job!',
    text: 'You clicked the!',
    padding: '2em'
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",P,[t("div",j,[e[40]||(e[40]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Dynamic queue")])])],-1)),t("div",H,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[4]||(e[4]=n=>d(3))},"Dynamic queue"),t("div",N,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[5]||(e[5]=n=>a("code3"))},e[38]||(e[38]=[t("span",null,"Code",-1)])),o.value.includes("code3")?(l(),i("div",R,[c(r,null,{default:u(()=>e[39]||(e[39]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(3)">Dynamic queue</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",O,[t("div",V,[e[43]||(e[43]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"A title with a text under")])])],-1)),t("div",G,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[6]||(e[6]=n=>d(4))},"Title & text"),t("div",Q,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[7]||(e[7]=n=>a("code4"))},e[41]||(e[41]=[t("span",null,"Code",-1)])),o.value.includes("code4")?(l(),i("div",E,[c(r,null,{default:u(()=>e[42]||(e[42]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(4)">Title & text</button>

new window.Swal({
    icon: 'question',
    title: 'The Internet?',
    text: 'That thing is still around?',
    padding: '2em'
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",F,[t("div",J,[e[46]||(e[46]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Chaining modals (queue)")])])],-1)),t("div",U,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[8]||(e[8]=n=>d(5))},"Chaining modals (queue)"),t("div",X,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[9]||(e[9]=n=>a("code5"))},e[44]||(e[44]=[t("span",null,"Code",-1)])),o.value.includes("code5")?(l(),i("div",z,[c(r,null,{default:u(()=>e[45]||(e[45]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(5)">Chaining modals (queue)</button>

const steps = ['1', '2', '3'];
const swalQueueStep =  window.Swal.mixin({
    confirmButtonText: 'Next \u2192',
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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",K,[t("div",Z,[e[49]||(e[49]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Custom animation")])])],-1)),t("div",tt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[10]||(e[10]=n=>d(6))},"Custom animation"),t("div",et,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[11]||(e[11]=n=>a("code6"))},e[47]||(e[47]=[t("span",null,"Code",-1)])),o.value.includes("code6")?(l(),i("div",nt,[c(r,null,{default:u(()=>e[48]||(e[48]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(6)">Custom animation</button>

new window.Swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada',
    padding: '2em'
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",st,[t("div",ot,[e[52]||(e[52]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Message with auto close timer")])])],-1)),t("div",lt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[12]||(e[12]=n=>d(7))},"Message timer"),t("div",it,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[13]||(e[13]=n=>a("code7"))},e[50]||(e[50]=[t("span",null,"Code",-1)])),o.value.includes("code7")?(l(),i("div",at,[c(r,null,{default:u(()=>e[51]||(e[51]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(7)">Message timer</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",dt,[t("div",rt,[e[55]||(e[55]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Message with custom image")])])],-1)),t("div",ct,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[14]||(e[14]=n=>d(8))},"Message with custom image"),t("div",ut,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[15]||(e[15]=n=>a("code8"))},e[53]||(e[53]=[t("span",null,"Code",-1)])),o.value.includes("code8")?(l(),i("div",wt,[c(r,null,{default:u(()=>e[54]||(e[54]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(8)">Message with custom image</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",mt,[t("div",bt,[e[58]||(e[58]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Custom HTML description and buttons")])])],-1)),t("div",pt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[16]||(e[16]=n=>d(9))},"Custom Description & buttons"),t("div",vt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[17]||(e[17]=n=>a("code9"))},e[56]||(e[56]=[t("span",null,"Code",-1)])),o.value.includes("code9")?(l(),i("div",gt,[c(r,null,{default:u(()=>e[57]||(e[57]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(9)">Custom Description & buttons</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",ft,[t("div",ht,[e[61]||(e[61]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,'Warning message, with "Confirm" button')])])],-1)),t("div",xt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[18]||(e[18]=n=>d(10))},"Confirm"),t("div",yt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[19]||(e[19]=n=>a("code10"))},e[59]||(e[59]=[t("span",null,"Confirm",-1)])),o.value.includes("code10")?(l(),i("div",Ct,[c(r,null,{default:u(()=>e[60]||(e[60]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(10)">Confirm</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",kt,[t("div",St,[e[64]||(e[64]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,'Execute something else for "Cancel".')])])],-1)),t("div",Bt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[20]||(e[20]=n=>d(11))},'Addition else for "Cancel".'),t("div",At,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[21]||(e[21]=n=>a("code11"))},e[62]||(e[62]=[t("span",null,"Code",-1)])),o.value.includes("code11")?(l(),i("div",Tt,[c(r,null,{default:u(()=>e[63]||(e[63]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(11)">Addition else for "Cancel".</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",_t,[t("div",$t,[e[67]||(e[67]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"A message with custom width, padding and background")])])],-1)),t("div",It,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[22]||(e[22]=n=>d(12))},"Custom Message"),t("div",Mt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[23]||(e[23]=n=>a("code12"))},e[65]||(e[65]=[t("span",null,"Code",-1)])),o.value.includes("code12")?(l(),i("div",Lt,[c(r,null,{default:u(()=>e[66]||(e[66]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(12)">Custom Message</button>

new window.Swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '7em',
    customClass: 'background-modal',
    background: '#fff url(' + '/assets/images/sweet-bg.jpg' + ') no-repeat 100% 100%'
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",Yt,[t("div",Dt,[e[70]||(e[70]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"With Footer")])])],-1)),t("div",qt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[24]||(e[24]=n=>d(13))},"With Footer"),t("div",Wt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[25]||(e[25]=n=>a("code13"))},e[68]||(e[68]=[t("span",null,"Code",-1)])),o.value.includes("code13")?(l(),i("div",Pt,[c(r,null,{default:u(()=>e[69]||(e[69]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(13)">With Footer</button>

new window.Swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>',
    padding: '2em'
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",jt,[t("div",Ht,[e[73]||(e[73]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"RTL Support")])])],-1)),t("div",Nt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[26]||(e[26]=n=>d(14))},"RTL"),t("div",Rt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[27]||(e[27]=n=>a("code14"))},e[71]||(e[71]=[t("span",null,"Code",-1)])),o.value.includes("code14")?(l(),i("div",Ot,[c(r,null,{default:u(()=>e[72]||(e[72]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(14)">RTL</button>

new window.Swal({
    title: '\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F',
    confirmButtonText: '\u0646\u0639\u0645',
    cancelButtonText: '\u0644\u0627',
    showCancelButton: true,
    showCloseButton: true,
    padding: '2em',
    target: document.getElementById('rtl-container')
});
                                        `,-1)])),_:1})])):w("",!0)])])])]),t("div",Vt,[t("div",Gt,[e[76]||(e[76]=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Mixin")])])],-1)),t("div",Qt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[28]||(e[28]=n=>d(15))},"Mixin"),t("div",Et,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[29]||(e[29]=n=>a("code15"))},e[74]||(e[74]=[t("span",null,"Code",-1)])),o.value.includes("code15")?(l(),i("div",Ft,[c(r,null,{default:u(()=>e[75]||(e[75]=[t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(15)">Mixin</button>

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
                                        `,-1)])),_:1})])):w("",!0)])])])])])),[[b]])])])}}};export{ee as default};
