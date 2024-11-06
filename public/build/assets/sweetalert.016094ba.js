/* empty css                     */import{_ as d}from"./highlight.ed5ce43a.js";import{x as g,a5 as p,o as l,c as i,a2 as f,a as t,p as v,i as r,l as u,e as w,Y as _,aq as x}from"./app-setting.46400ad2.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const y={class:"container"},C=t("ul",{class:"navbar-nav flex-row"},[t("li",null,[t("div",{class:"page-header"},[t("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item"},[t("a",{href:"javascript:;"},"Components")]),t("li",{class:"breadcrumb-item active","aria-current":"page"},[t("span",null,"Sweet Alerts")])])])])])],-1),k={class:"container"},S={id:"navSection",class:"nav sidenav"},B={class:"sidenav-content"},A=_('<a href="#sweetalertbasic" class="nav-link">Basic</a><a href="#sweetalertmessage" class="nav-link">Message</a><a href="#sweetalertdynamic" class="nav-link">Dynamic</a><a href="#sweetalertatitlewithtext" class="nav-link">A title with text</a><a href="#sweetalertchainingmodals" class="nav-link">Chaining modals</a><a href="#sweetalertanimation" class="nav-link">Animation</a><a href="#sweetalertautoclosetimer" class="nav-link">Auto close timer</a><a href="#sweetalertcustomimage" class="nav-link">Custom image</a><a href="#sweetalertcustomhtml" class="nav-link">Custom HTML</a><a href="#sweetalertwarningmessage" class="nav-link">Warning message</a><a href="#sweetalertcancel" class="nav-link">Cancel</a><a href="#sweetalertcustomstyle" class="nav-link">Custom Style</a><a href="#sweetalertfooter" class="nav-link">Footer</a><a href="#sweetalertrtl" class="nav-link">RTL</a><a href="#sweetalertmixin" class="nav-link">Mixin</a>',15),T=[A],$=_('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-sweetalert2" class="text-info"> https://www.npmjs.com/package/vue-sweetalert2 </a></div></div></div>',1),I={class:"row layout-top-spacing"},M={id:"sweetalertbasic",class:"col-lg-12 col-12 layout-spacing"},Y={class:"statbox panel box box-shadow"},L=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Basic message")])])],-1),D={class:"panel-body text-center"},q={class:"code-section-container show-code"},P=t("span",null,"Code",-1),j=[P],W={key:0,class:"code-section text-start"},H=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(1)">Basic message</button>

 new window.Swal({
    title: 'Saved succesfully',
    padding: '2em'
});
                                        `,-1),N={id:"sweetalertmessage",class:"col-lg-12 col-12 layout-spacing"},R={class:"statbox panel box box-shadow"},O=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Success message")])])],-1),V={class:"panel-body text-center"},Q={class:"code-section-container show-code"},E=t("span",null,"Code",-1),F=[E],G={key:0,class:"code-section text-start"},J=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(2)">Success message!</button>

new window.Swal({
    icon: 'success',
    title: 'Good job!',
    text: 'You clicked the!',
    padding: '2em'
});
                                        `,-1),U={id:"sweetalertdynamic",class:"col-lg-12 col-12 layout-spacing"},X={class:"statbox panel box box-shadow"},z=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Dynamic queue")])])],-1),K={class:"panel-body text-center"},Z={class:"code-section-container show-code"},tt=t("span",null,"Code",-1),et=[tt],nt={key:0,class:"code-section text-start"},st=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(3)">Dynamic queue</button>

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
                                        `,-1),ot={id:"sweetalertatitlewithtext",class:"col-lg-12 col-12 layout-spacing"},lt={class:"statbox panel box box-shadow"},it=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"A title with a text under")])])],-1),at={class:"panel-body text-center"},ct={class:"code-section-container show-code"},dt=t("span",null,"Code",-1),rt=[dt],ut={key:0,class:"code-section text-start"},wt=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(4)">Title & text</button>

new window.Swal({
    icon: 'question',
    title: 'The Internet?',
    text: 'That thing is still around?',
    padding: '2em'
});
                                        `,-1),mt={id:"sweetalertchainingmodals",class:"col-lg-12 col-12 layout-spacing"},ht={class:"statbox panel box box-shadow"},bt=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Chaining modals (queue)")])])],-1),pt={class:"panel-body text-center"},vt={class:"code-section-container show-code"},_t=t("span",null,"Code",-1),gt=[_t],ft={key:0,class:"code-section text-start"},xt=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(5)">Chaining modals (queue)</button>

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
                                        `,-1),yt={id:"sweetalertanimation",class:"col-lg-12 col-12 layout-spacing"},Ct={class:"statbox panel box box-shadow"},kt=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Custom animation")])])],-1),St={class:"panel-body text-center"},Bt={class:"code-section-container show-code"},At=t("span",null,"Code",-1),Tt=[At],$t={key:0,class:"code-section text-start"},It=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(6)">Custom animation</button>

new window.Swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada',
    padding: '2em'
});
                                        `,-1),Mt={id:"sweetalertautoclosetimer",class:"col-lg-12 col-12 layout-spacing"},Yt={class:"statbox panel box box-shadow"},Lt=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Message with auto close timer")])])],-1),Dt={class:"panel-body text-center"},qt={class:"code-section-container show-code"},Pt=t("span",null,"Code",-1),jt=[Pt],Wt={key:0,class:"code-section text-start"},Ht=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(7)">Message timer</button>

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
        console.log('I was closed by the timer');
    }
});
                                        `,-1),Nt={id:"sweetalertcustomimage",class:"col-lg-12 col-12 layout-spacing"},Rt={class:"statbox panel box box-shadow"},Ot=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Message with custom image")])])],-1),Vt={class:"panel-body text-center"},Qt={class:"code-section-container show-code"},Et=t("span",null,"Code",-1),Ft=[Et],Gt={key:0,class:"code-section text-start"},Jt=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(8)">Message with custom image</button>

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
                                        `,-1),Ut={id:"sweetalertcustomhtml",class:"col-lg-12 col-12 layout-spacing"},Xt={class:"statbox panel box box-shadow"},zt=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Custom HTML description and buttons")])])],-1),Kt={class:"panel-body text-center"},Zt={class:"code-section-container show-code"},te=t("span",null,"Code",-1),ee=[te],ne={key:0,class:"code-section text-start"},se=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(9)">Custom Description & buttons</button>

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
                                        `,-1),oe={id:"sweetalertwarningmessage",class:"col-lg-12 col-12 layout-spacing"},le={class:"statbox panel box box-shadow"},ie=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,'Warning message, with "Confirm" button')])])],-1),ae={class:"panel-body text-center"},ce={class:"code-section-container show-code"},de=t("span",null,"Confirm",-1),re=[de],ue={key:0,class:"code-section text-start"},we=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(10)">Confirm</button>

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
                                        `,-1),me={id:"sweetalertcancel",class:"col-lg-12 col-12 layout-spacing"},he={class:"statbox panel box box-shadow"},be=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,'Execute something else for "Cancel".')])])],-1),pe={class:"panel-body text-center"},ve={class:"code-section-container show-code"},_e=t("span",null,"Code",-1),ge=[_e],fe={key:0,class:"code-section text-start"},xe=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(11)">Addition else for "Cancel".</button>

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
                                        `,-1),ye={id:"sweetalertcustomstyle",class:"col-lg-12 col-12 layout-spacing"},Ce={class:"statbox panel box box-shadow"},ke=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"A message with custom width, padding and background")])])],-1),Se={class:"panel-body text-center"},Be={class:"code-section-container show-code"},Ae=t("span",null,"Code",-1),Te=[Ae],$e={key:0,class:"code-section text-start"},Ie=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(12)">Custom Message</button>

new window.Swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '7em',
    customClass: 'background-modal',
    background: '#fff url(' + '/assets/images/sweet-bg.jpg' + ') no-repeat 100% 100%'
});
                                        `,-1),Me={id:"sweetalertfooter",class:"col-lg-12 col-12 layout-spacing"},Ye={class:"statbox panel box box-shadow"},Le=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"With Footer")])])],-1),De={class:"panel-body text-center"},qe={class:"code-section-container show-code"},Pe=t("span",null,"Code",-1),je=[Pe],We={key:0,class:"code-section text-start"},He=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(13)">With Footer</button>

new window.Swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>',
    padding: '2em'
});
                                        `,-1),Ne={id:"sweetalertrtl",class:"col-lg-12 col-12 layout-spacing"},Re={class:"statbox panel box box-shadow"},Oe=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"RTL Support")])])],-1),Ve={class:"panel-body text-center"},Qe={class:"code-section-container show-code"},Ee=t("span",null,"Code",-1),Fe=[Ee],Ge={key:0,class:"code-section text-start"},Je=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(14)">RTL</button>

new window.Swal({
    title: '\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F',
    confirmButtonText: '\u0646\u0639\u0645',
    cancelButtonText: '\u0644\u0627',
    showCancelButton: true,
    showCloseButton: true,
    padding: '2em',
    target: document.getElementById('rtl-container')
});
                                        `,-1),Ue={id:"sweetalertmixin",class:"col-lg-12 col-12 layout-spacing"},Xe={class:"statbox panel box box-shadow"},ze=t("div",{class:"panel-heading"},[t("div",{class:"row"},[t("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[t("h4",null,"Mixin")])])],-1),Ke={class:"panel-body text-center"},Ze={class:"code-section-container show-code"},tn=t("span",null,"Code",-1),en=[tn],nn={key:0,class:"code-section text-start"},sn=t("pre",null,`<button variant="primary" class="me-2 btn" @click="showAlert(15)">Mixin</button>

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
                                        `,-1),un={__name:"sweetalert",setup(on){const o=g([]),a=s=>{o.value.includes(s)?o.value=o.value.filter(e=>e!=s):o.value.push(s)},c=async s=>{if(s===1)new window.Swal({title:"Saved succesfully",padding:"2em"});else if(s===2)new window.Swal({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em"});else if(s===3){const e="https://api.ipify.org?format=json";new window.Swal({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:()=>fetch(e).then(m=>m.json()).then(m=>{new window.Swal({title:m.ip})}).catch(()=>{new window.Swal({type:"error",title:"Unable to get your public IP"})})})}else if(s===4)new window.Swal({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em"});else if(s===5){const e=["1","2","3"],m=window.Swal.mixin({confirmButtonText:"Next \u2192",showCancelButton:!0,progressSteps:e,input:"text",inputAttributes:{required:!0},validationMessage:"This field is required",padding:"2em"}),b=[];let h;for(h=0;h<e.length;){const n=await m.fire({title:`Question ${e[h]}`,text:h==0?"Chaining swal2 modals is easy.":"",inputValue:b[h],showCancelButton:h>0,currentProgressStep:h});if(n.value)b[h]=n.value,h++;else if(n.dismiss===new window.Swal.DismissReason.cancel)h--;else break}h===e.length&&window.Swal.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(b)+"</pre>",confirmButtonText:"Lovely!"})}else if(s===6)new window.Swal({title:"Custom animation with Animate.css",animation:!1,customClass:"animated tada",padding:"2em"});else if(s===7){let e;new window.Swal({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{window.Swal.showLoading();const m=window.Swal.getHtmlContainer().querySelector("b");e=setInterval(()=>{m.textContent=window.Swal.getTimerLeft()},100)},willClose:()=>{clearInterval(e)}}).then(m=>{m.dismiss===window.Swal.DismissReason.timer&&console.log("I was closed by the timer")})}else if(s===8)new window.Swal({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/thumbs-up.jpg",imageWidth:224,imageHeight:200,imageAlt:"Custom image",animation:!1,padding:"2em"});else if(s===9)new window.Swal({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em"});else if(s===10)new window.Swal({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em"}).then(e=>{e.value&&new window.Swal("Deleted!","Your file has been deleted.","success")});else if(s===11){const e=window.Swal.mixin({confirmButtonClass:"btn btn-secondary",cancelButtonClass:"btn btn-dark me-3",buttonsStyling:!1});e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(m=>{m.value?e.fire("Deleted!","Your file has been deleted.","success"):m.dismiss===window.Swal.DismissReason.cancel&&e.fire("Cancelled","Your imaginary file is safe :)","error")})}else s===12?new window.Swal({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal",background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):s===13?new window.Swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>",padding:"2em"}):s===14?new window.Swal({title:"\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F",confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0644\u0627",showCancelButton:!0,showCloseButton:!0,padding:"2em",target:document.getElementById("rtl-container")}):s===15&&window.Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,padding:"2em"}).fire({icon:"success",title:"Signed in successfully",padding:"2em"})};return(s,e)=>{const m=p("scroll-spy-active"),b=p("scroll-spy-link"),h=p("scroll-spy");return l(),i("div",y,[(l(),f(x,{to:"#breadcrumb"},[C])),t("div",k,[t("div",S,[v((l(),i("div",B,T)),[[m],[b]])]),$,v((l(),i("div",I,[t("div",M,[t("div",Y,[L,t("div",D,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[0]||(e[0]=n=>c(1))},"Basic message"),t("div",q,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[1]||(e[1]=n=>a("code1"))},j),o.value.includes("code1")?(l(),i("div",W,[r(d,null,{default:u(()=>[H]),_:1})])):w("",!0)])])])]),t("div",N,[t("div",R,[O,t("div",V,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[2]||(e[2]=n=>c(2))},"Success message!"),t("div",Q,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[3]||(e[3]=n=>a("code2"))},F),o.value.includes("code2")?(l(),i("div",G,[r(d,null,{default:u(()=>[J]),_:1})])):w("",!0)])])])]),t("div",U,[t("div",X,[z,t("div",K,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[4]||(e[4]=n=>c(3))},"Dynamic queue"),t("div",Z,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[5]||(e[5]=n=>a("code3"))},et),o.value.includes("code3")?(l(),i("div",nt,[r(d,null,{default:u(()=>[st]),_:1})])):w("",!0)])])])]),t("div",ot,[t("div",lt,[it,t("div",at,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[6]||(e[6]=n=>c(4))},"Title & text"),t("div",ct,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[7]||(e[7]=n=>a("code4"))},rt),o.value.includes("code4")?(l(),i("div",ut,[r(d,null,{default:u(()=>[wt]),_:1})])):w("",!0)])])])]),t("div",mt,[t("div",ht,[bt,t("div",pt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[8]||(e[8]=n=>c(5))},"Chaining modals (queue)"),t("div",vt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[9]||(e[9]=n=>a("code5"))},gt),o.value.includes("code5")?(l(),i("div",ft,[r(d,null,{default:u(()=>[xt]),_:1})])):w("",!0)])])])]),t("div",yt,[t("div",Ct,[kt,t("div",St,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[10]||(e[10]=n=>c(6))},"Custom animation"),t("div",Bt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[11]||(e[11]=n=>a("code6"))},Tt),o.value.includes("code6")?(l(),i("div",$t,[r(d,null,{default:u(()=>[It]),_:1})])):w("",!0)])])])]),t("div",Mt,[t("div",Yt,[Lt,t("div",Dt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[12]||(e[12]=n=>c(7))},"Message timer"),t("div",qt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[13]||(e[13]=n=>a("code7"))},jt),o.value.includes("code7")?(l(),i("div",Wt,[r(d,null,{default:u(()=>[Ht]),_:1})])):w("",!0)])])])]),t("div",Nt,[t("div",Rt,[Ot,t("div",Vt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[14]||(e[14]=n=>c(8))},"Message with custom image"),t("div",Qt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[15]||(e[15]=n=>a("code8"))},Ft),o.value.includes("code8")?(l(),i("div",Gt,[r(d,null,{default:u(()=>[Jt]),_:1})])):w("",!0)])])])]),t("div",Ut,[t("div",Xt,[zt,t("div",Kt,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[16]||(e[16]=n=>c(9))},"Custom Description & buttons"),t("div",Zt,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[17]||(e[17]=n=>a("code9"))},ee),o.value.includes("code9")?(l(),i("div",ne,[r(d,null,{default:u(()=>[se]),_:1})])):w("",!0)])])])]),t("div",oe,[t("div",le,[ie,t("div",ae,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[18]||(e[18]=n=>c(10))},"Confirm"),t("div",ce,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[19]||(e[19]=n=>a("code10"))},re),o.value.includes("code10")?(l(),i("div",ue,[r(d,null,{default:u(()=>[we]),_:1})])):w("",!0)])])])]),t("div",me,[t("div",he,[be,t("div",pe,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[20]||(e[20]=n=>c(11))},'Addition else for "Cancel".'),t("div",ve,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[21]||(e[21]=n=>a("code11"))},ge),o.value.includes("code11")?(l(),i("div",fe,[r(d,null,{default:u(()=>[xe]),_:1})])):w("",!0)])])])]),t("div",ye,[t("div",Ce,[ke,t("div",Se,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[22]||(e[22]=n=>c(12))},"Custom Message"),t("div",Be,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[23]||(e[23]=n=>a("code12"))},Te),o.value.includes("code12")?(l(),i("div",$e,[r(d,null,{default:u(()=>[Ie]),_:1})])):w("",!0)])])])]),t("div",Me,[t("div",Ye,[Le,t("div",De,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[24]||(e[24]=n=>c(13))},"With Footer"),t("div",qe,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[25]||(e[25]=n=>a("code13"))},je),o.value.includes("code13")?(l(),i("div",We,[r(d,null,{default:u(()=>[He]),_:1})])):w("",!0)])])])]),t("div",Ne,[t("div",Re,[Oe,t("div",Ve,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[26]||(e[26]=n=>c(14))},"RTL"),t("div",Qe,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[27]||(e[27]=n=>a("code14"))},Fe),o.value.includes("code14")?(l(),i("div",Ge,[r(d,null,{default:u(()=>[Je]),_:1})])):w("",!0)])])])]),t("div",Ue,[t("div",Xe,[ze,t("div",Ke,[t("button",{type:"button",class:"btn btn-primary me-2 btn",onClick:e[28]||(e[28]=n=>c(15))},"Mixin"),t("div",Ze,[t("button",{class:"btn btn-default toggle-code-snippet",onClick:e[29]||(e[29]=n=>a("code15"))},en),o.value.includes("code15")?(l(),i("div",nn,[r(d,null,{default:u(()=>[sn]),_:1})])):w("",!0)])])])])])),[[h]])])])}}};export{un as default};
