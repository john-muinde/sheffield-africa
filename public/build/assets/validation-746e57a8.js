import{v as e}from"./index-0d6930bf.js";/* empty css                     */import{_ as c}from"./highlight-51ac227e.js";import"./use-meta-44934223.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const P={class:"container"},S={class:"container"},z={class:"nav sidenav"},L={class:"sidenav-content"},M={class:"row layout-top-spacing"},h={id:"basic",class:"col-lg-12 layout-spacing"},B={class:"statbox panel box box-shadow"},F={class:"panel-body"},q={class:"row"},Z={class:"col-md-12 form-group"},A={class:"code-section-container show-code"},G={key:0,class:"code-section text-start"},$={id:"email",class:"col-lg-12 layout-spacing"},O={class:"statbox panel box box-shadow"},j={class:"panel-body"},Y={class:"row"},H={class:"col-md-12 form-group"},I={class:"code-section-container show-code"},J={key:0,class:"code-section text-start"},K={id:"select",class:"col-lg-12 layout-spacing"},Q={class:"statbox panel box box-shadow"},R={class:"panel-body"},W={class:"row"},X={class:"col-md-12"},ee={id:"select_menu",class:"form-group form-group"},te={class:"code-section-container show-code"},le={key:0,class:"code-section text-start"},oe={id:"custom_styles",class:"col-lg-12 layout-spacing col-md-12"},ie={class:"statbox panel box box-shadow"},se={class:"panel-body"},ae={class:"row"},ne={class:"col-md-4 form-group"},de={class:"col-md-4 form-group"},re={class:"col-md-4 form-group"},me={class:"input-group"},ve={class:"row"},ce={class:"col-md-6 form-group"},ue={class:"col-md-3 form-group"},pe={class:"col-md-3 form-group"},fe={class:"form-group form-group"},be={class:"form-check ps-0"},Ve={class:"custom-control custom-checkbox checkbox-success"},Ne={class:"code-section-container show-code"},Ee={key:0,class:"code-section text-start"},ye={id:"browser_default",class:"col-lg-12 layout-spacing col-md-12"},ke={class:"statbox panel box box-shadow"},ge={class:"panel-body"},xe={class:"row"},we={class:"col-md-4 form-group"},Ce={class:"col-md-4 form-group"},_e={class:"col-md-4 form-group"},De={class:"input-group"},Te={class:"row"},Ue={class:"col-md-6 form-group"},Pe={class:"col-md-3 form-group"},Se={class:"col-md-3 form-group"},ze={class:"form-group form-group"},Le={class:"custom-control custom-checkbox checkbox-primary"},Me={class:"code-section-container show-code"},he={key:0,class:"code-section text-start"},Be={id:"tooltips",class:"col-lg-12 layout-spacing col-md-12"},Fe={class:"statbox panel box box-shadow"},qe={class:"panel-body"},Ze={class:"row"},Ae={class:"col-md-4 mb-5 position-relative"},Ge={class:"col-md-4 mb-5 position-relative"},$e={class:"col-md-4 mb-5 position-relative"},Oe={class:"input-group"},je={class:"row"},Ye={class:"col-md-6 mb-5 position-relative"},He={class:"col-md-3 mb-5 position-relative"},Ie={class:"col-md-3 mb-5 position-relative"},Je={class:"form-group form-group position-relative"},Ke={class:"custom-control custom-checkbox checkbox-success"},Qe={class:"code-section-container show-code"},Re={key:0,class:"code-section text-start"},st={__name:"validation",setup(We){const a=e.ref([]),p=e.ref({name:""}),b=e.ref(!1),u=e.ref({email:""}),V=e.ref(!1),f=e.ref({select:""}),N=e.ref(!1),o=e.ref({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),n=e.ref(!1),s=e.ref({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),k=e.ref(!1),i=e.ref({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),d=e.ref(!1),m=r=>{a.value.includes(r)?a.value=a.value.filter(t=>t!=r):a.value.push(r)},E=r=>/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(r),g=()=>{b.value=!0,p.value.name&&v("Form submitted successfully.")},x=()=>{V.value=!0,E(u.value.email)&&v("Form submitted successfully.")},w=()=>{N.value=!0,f.value.select&&v("Form submitted successfully.")},C=()=>{n.value=!0,o.value.first_name&&o.value.last_name&&o.value.username&&o.value.city&&o.value.state&&o.value.zip&&o.value.is_terms&&v("Form submitted successfully.")},_=()=>{k.value=!0,s.value.first_name&&s.value.last_name&&s.value.username&&s.value.city&&s.value.state&&s.value.zip&&s.value.is_terms&&v("Form submitted successfully.")},D=()=>{d.value=!0,i.value.first_name&&i.value.last_name&&i.value.username&&i.value.city&&i.value.state&&i.value.zip&&i.value.is_terms&&v("Form submitted successfully.")},v=(r="",t="success")=>{window.Swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:t,title:r,padding:"10px 20px"})};return(r,t)=>{const y=e.resolveDirective("scroll-spy-active"),T=e.resolveDirective("scroll-spy-link"),U=e.resolveDirective("scroll-spy");return e.openBlock(),e.createElementBlock("div",P,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[t[30]||(t[30]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Forms")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"Validation")])])])])])],-1))])),e.createElementVNode("div",S,[e.createElementVNode("div",z,[e.withDirectives((e.openBlock(),e.createElementBlock("div",L,t[31]||(t[31]=[e.createStaticVNode('<a href="#basic" class="nav-link">Basic</a><a href="#email" class="nav-link">Email</a><a href="#select" class="nav-link">Select</a><a href="#custom_styles" class="nav-link">Custom Styles</a><a href="#browser_default" class="nav-link">Browser Default</a><a href="#tooltips" class="nav-link">Tooltips</a>',6)]))),[[y],[T]])]),t[116]||(t[116]=e.createStaticVNode('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/validation" class="text-info"> https://getbootstrap.com/docs/5.0/forms/validation </a></div></div></div>',1)),e.withDirectives((e.openBlock(),e.createElementBlock("div",M,[e.createElementVNode("div",h,[e.createElementVNode("div",B,[t[38]||(t[38]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Basic")])])],-1)),e.createElementVNode("div",F,[e.createElementVNode("form",{novalidate:"",class:"simple-example",onSubmit:e.withModifiers(g,["stop","prevent"])},[e.createElementVNode("div",q,[e.createElementVNode("div",Z,[t[32]||(t[32]=e.createElementVNode("label",{for:"fullName"},"Full Name",-1)),e.withDirectives(e.createElementVNode("input",{id:"fullName","onUpdate:modelValue":t[0]||(t[0]=l=>p.value.name=l),type:"text",class:e.normalizeClass(["form-control",[b.value?p.value.name?"is-valid":"is-invalid":""]])},null,2),[[e.vModelText,p.value.name]]),t[33]||(t[33]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[34]||(t[34]=e.createElementVNode("div",{class:"invalid-feedback"}," Please fill the name ",-1))])]),t[35]||(t[35]=e.createElementVNode("button",{type:"submit",class:"btn mt-2 btn-primary"}," Submit form ",-1))],32),e.createElementVNode("div",A,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=l=>m("code1"))},t[36]||(t[36]=[e.createElementVNode("span",null,"Code",-1)])),a.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",G,[e.createVNode(c,null,{default:e.withCtx(()=>t[37]||(t[37]=[e.createElementVNode("pre",null,`<!-- Basic -->
<form novalidate class="simple-example" @submit.stop.prevent="submit_form1">
    <div class="row">
        <div class="col-md-12 form-group">
            <label for="fullName">Full Name</label>
            <input v-model="form1.name" id="fullName" type="text" class="form-control" :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please fill the name</div>
        </div>
    </div>
    <button type="submit" class="btn mt-2 btn-primary">Submit form</button>
</form>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",$,[e.createElementVNode("div",O,[t[45]||(t[45]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Email")])])],-1)),e.createElementVNode("div",j,[e.createElementVNode("form",{class:"email",novalidate:"",onSubmit:e.withModifiers(x,["stop","prevent"])},[e.createElementVNode("div",Y,[e.createElementVNode("div",H,[t[39]||(t[39]=e.createElementVNode("label",{for:"e_mail"},"Email",-1)),e.withDirectives(e.createElementVNode("input",{id:"e_mail","onUpdate:modelValue":t[2]||(t[2]=l=>u.value.email=l),type:"email",class:e.normalizeClass(["form-control",[V.value?u.value.email&&E(u.value.email)?"is-valid":"is-invalid":""]])},null,2),[[e.vModelText,u.value.email]]),t[40]||(t[40]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[41]||(t[41]=e.createElementVNode("div",{class:"invalid-feedback"}," Please fill the Email ",-1))])]),t[42]||(t[42]=e.createElementVNode("button",{class:"btn btn-primary form-group mt-2",type:"submit"}," Submit form ",-1))],32),e.createElementVNode("div",I,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[3]||(t[3]=l=>m("code2"))},t[43]||(t[43]=[e.createElementVNode("span",null,"Code",-1)])),a.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",J,[e.createVNode(c,null,{default:e.withCtx(()=>t[44]||(t[44]=[e.createElementVNode("pre",null,`<!-- Email -->
<form class="email" novalidate @submit.stop.prevent="submit_form2">
    <div class="row">
        <div class="col-md-12 form-group">
            <label for="e_mail">Email</label>
            <input
                v-model="form2.email"
                type="email"
                class="form-control"
                id="e_mail"
                :class="[is_submit_form2 ? (form2.email && email_validate(form2.email) ? 'is-valid' : 'is-invalid') : '']"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please fill the Email</div>
        </div>
    </div>
    <button class="btn btn-primary form-group mt-2" type="submit">Submit form</button>
</form>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",K,[e.createElementVNode("div",Q,[t[52]||(t[52]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Select")])])],-1)),e.createElementVNode("div",R,[e.createElementVNode("form",{class:"select",novalidate:"",onSubmit:e.withModifiers(w,["stop","prevent"])},[e.createElementVNode("div",W,[e.createElementVNode("div",X,[e.createElementVNode("div",ee,[e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":t[4]||(t[4]=l=>f.value.select=l),class:e.normalizeClass(["form-select",[N.value?f.value.select?"is-valid":"is-invalid":""]])},t[46]||(t[46]=[e.createElementVNode("option",{value:""}," Open this select menu ",-1),e.createElementVNode("option",{value:"1"}," One ",-1),e.createElementVNode("option",{value:"2"}," Two ",-1),e.createElementVNode("option",{value:"3"}," Three ",-1)]),2),[[e.vModelSelect,f.value.select]]),t[47]||(t[47]=e.createElementVNode("div",{class:"valid-feedback"}," Example valid custom select feedback ",-1)),t[48]||(t[48]=e.createElementVNode("div",{class:"invalid-feedback"}," Please Select the field ",-1))])])]),t[49]||(t[49]=e.createElementVNode("button",{class:"btn btn-primary mt-2",type:"submit"}," Submit form ",-1))],32),e.createElementVNode("div",te,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[5]||(t[5]=l=>m("code3"))},t[50]||(t[50]=[e.createElementVNode("span",null,"Code",-1)])),a.value.includes("code3")?(e.openBlock(),e.createElementBlock("div",le,[e.createVNode(c,null,{default:e.withCtx(()=>t[51]||(t[51]=[e.createElementVNode("pre",null,`<!-- Select -->
<form class="select" novalidate @submit.stop.prevent="submit_form3">
    <div class="row">
        <div class="col-md-12">
            <div id="select_menu" class="form-group form-group">
                <select v-model="form3.select" class="form-select" :class="[is_submit_form3 ? (form3.select ? 'is-valid' : 'is-invalid') : '']">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="valid-feedback">Example valid custom select feedback</div>
                <div class="invalid-feedback">Please Select the field</div>
            </div>
        </div>
    </div>
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
</form>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",oe,[e.createElementVNode("div",ie,[t[77]||(t[77]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Custom styles")])])],-1)),e.createElementVNode("div",se,[e.createElementVNode("form",{class:"needs-validation",novalidate:"",onSubmit:e.withModifiers(C,["stop","prevent"])},[e.createElementVNode("div",ae,[e.createElementVNode("div",ne,[t[53]||(t[53]=e.createElementVNode("label",{for:"validationCustom01"},"First name",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationCustom01","onUpdate:modelValue":t[6]||(t[6]=l=>o.value.first_name=l),type:"text",class:e.normalizeClass(["form-control",[n.value?o.value.first_name?"is-valid":"is-invalid":""]]),placeholder:"First name"},null,2),[[e.vModelText,o.value.first_name]]),t[54]||(t[54]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[55]||(t[55]=e.createElementVNode("div",{class:"invalid-feedback"}," Please fill the first name ",-1))]),e.createElementVNode("div",de,[t[56]||(t[56]=e.createElementVNode("label",{for:"validationCustom02"},"Last name",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationCustom02","onUpdate:modelValue":t[7]||(t[7]=l=>o.value.last_name=l),type:"text",class:e.normalizeClass(["form-control",[n.value?o.value.last_name?"is-valid":"is-invalid":""]]),placeholder:"Last name"},null,2),[[e.vModelText,o.value.last_name]]),t[57]||(t[57]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[58]||(t[58]=e.createElementVNode("div",{class:"invalid-feedback"}," Please fill the last name ",-1))]),e.createElementVNode("div",re,[t[62]||(t[62]=e.createElementVNode("label",{for:"validationCustomUsername"},"Username",-1)),e.createElementVNode("div",me,[t[59]||(t[59]=e.createElementVNode("span",{id:"inputGroupPrepend",class:"input-group-text"},"@",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationCustomUsername","onUpdate:modelValue":t[8]||(t[8]=l=>o.value.username=l),type:"text",class:e.normalizeClass(["form-control",[n.value?o.value.username?"is-valid":"is-invalid":""]]),placeholder:"Username","aria-describedby":"inputGroupPrepend"},null,2),[[e.vModelText,o.value.username]]),t[60]||(t[60]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[61]||(t[61]=e.createElementVNode("div",{class:"invalid-feedback"}," Please choose a username. ",-1))])])]),e.createElementVNode("div",ve,[e.createElementVNode("div",ce,[t[63]||(t[63]=e.createElementVNode("label",{for:"validationCustom03"},"City",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationCustom03","onUpdate:modelValue":t[9]||(t[9]=l=>o.value.city=l),type:"text",class:e.normalizeClass(["form-control",[n.value?o.value.city?"is-valid":"is-invalid":""]]),placeholder:"City"},null,2),[[e.vModelText,o.value.city]]),t[64]||(t[64]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[65]||(t[65]=e.createElementVNode("div",{class:"invalid-feedback"}," Please provide a valid city. ",-1))]),e.createElementVNode("div",ue,[t[66]||(t[66]=e.createElementVNode("label",{for:"validationCustom04"},"State",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationCustom04","onUpdate:modelValue":t[10]||(t[10]=l=>o.value.state=l),type:"text",class:e.normalizeClass(["form-control",[n.value?o.value.state?"is-valid":"is-invalid":""]]),placeholder:"State"},null,2),[[e.vModelText,o.value.state]]),t[67]||(t[67]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[68]||(t[68]=e.createElementVNode("div",{class:"invalid-feedback"}," Please provide a valid state. ",-1))]),e.createElementVNode("div",pe,[t[69]||(t[69]=e.createElementVNode("label",{for:"validationCustom05"},"Zip",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationCustom05","onUpdate:modelValue":t[11]||(t[11]=l=>o.value.zip=l),type:"text",class:e.normalizeClass(["form-control",[n.value?o.value.zip?"is-valid":"is-invalid":""]]),placeholder:"Zip"},null,2),[[e.vModelText,o.value.zip]]),t[70]||(t[70]=e.createElementVNode("div",{class:"valid-feedback"}," Looks good! ",-1)),t[71]||(t[71]=e.createElementVNode("div",{class:"invalid-feedback"}," Please provide a valid zip. ",-1))])]),e.createElementVNode("div",fe,[e.createElementVNode("div",be,[e.createElementVNode("div",Ve,[e.withDirectives(e.createElementVNode("input",{id:"invalidCheck","onUpdate:modelValue":t[12]||(t[12]=l=>o.value.is_terms=l),type:"checkbox",class:e.normalizeClass(["custom-control-input",[n.value?o.value.is_terms?"is-valid":"is-invalid":""]])},null,2),[[e.vModelCheckbox,o.value.is_terms]]),t[72]||(t[72]=e.createElementVNode("label",{class:"custom-control-label",for:"invalidCheck"},"Agree to terms and conditions",-1)),t[73]||(t[73]=e.createElementVNode("div",{class:"invalid-feedback"}," You must agree before submitting. ",-1))])])]),t[74]||(t[74]=e.createElementVNode("button",{class:"btn btn-primary mt-3",type:"submit"}," Submit form ",-1))],32),e.createElementVNode("div",Ne,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[13]||(t[13]=l=>m("code4"))},t[75]||(t[75]=[e.createElementVNode("span",null,"Code",-1)])),a.value.includes("code4")?(e.openBlock(),e.createElementBlock("div",Ee,[e.createVNode(c,null,{default:e.withCtx(()=>t[76]||(t[76]=[e.createElementVNode("pre",null,`<!-- Custom -->
<form class="needs-validation" novalidate @submit.stop.prevent="submit_form4">
    <div class="row">
        <div class="col-md-4 form-group">
            <label for="validationCustom01">First name</label>
            <input
                type="text"
                v-model="form4.first_name"
                class="form-control"
                :class="[is_submit_form4 ? (form4.first_name ? 'is-valid' : 'is-invalid') : '']"
                id="validationCustom01"
                placeholder="First name"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please fill the first name</div>
        </div>
        <div class="col-md-4 form-group">
            <label for="validationCustom02">Last name</label>
            <input
                type="text"
                v-model="form4.last_name"
                class="form-control"
                :class="[is_submit_form4 ? (form4.last_name ? 'is-valid' : 'is-invalid') : '']"
                id="validationCustom02"
                placeholder="Last name"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please fill the last name</div>
        </div>
        <div class="col-md-4 form-group">
            <label for="validationCustomUsername">Username</label>
            <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input
                    type="text"
                    v-model="form4.username"
                    class="form-control"
                    :class="[is_submit_form4 ? (form4.username ? 'is-valid' : 'is-invalid') : '']"
                    id="validationCustomUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 form-group">
            <label for="validationCustom03">City</label>
            <input
                type="text"
                v-model="form4.city"
                class="form-control"
                :class="[is_submit_form4 ? (form4.city ? 'is-valid' : 'is-invalid') : '']"
                id="validationCustom03"
                placeholder="City"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3 form-group">
            <label for="validationCustom04">State</label>
            <input
                type="text"
                v-model="form4.state"
                class="form-control"
                :class="[is_submit_form4 ? (form4.state ? 'is-valid' : 'is-invalid') : '']"
                id="validationCustom04"
                placeholder="State"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please provide a valid state.</div>
        </div>
        <div class="col-md-3 form-group">
            <label for="validationCustom05">Zip</label>
            <input
                type="text"
                v-model="form4.zip"
                class="form-control"
                :class="[is_submit_form4 ? (form4.zip ? 'is-valid' : 'is-invalid') : '']"
                id="validationCustom05"
                placeholder="Zip"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
    </div>
    <div class="form-group form-group">
        <div class="form-check ps-0">
            <div class="custom-control custom-checkbox checkbox-success">
                <input
                    type="checkbox"
                    v-model="form4.is_terms"
                    class="custom-control-input"
                    :class="[is_submit_form4 ? (form4.is_terms ? 'is-valid' : 'is-invalid') : '']"
                    id="invalidCheck"
                />
                <label class="custom-control-label" for="invalidCheck">Agree to terms and conditions</label>
                <div class="invalid-feedback">You must agree before submitting.</div>
            </div>
        </div>
    </div>
    <button class="btn btn-primary mt-3" type="submit">Submit form</button>
</form>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",ye,[e.createElementVNode("div",ke,[t[90]||(t[90]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Browser defaults")])])],-1)),e.createElementVNode("div",ge,[e.createElementVNode("form",{onSubmit:e.withModifiers(_,["stop","prevent"])},[e.createElementVNode("div",xe,[e.createElementVNode("div",we,[t[78]||(t[78]=e.createElementVNode("label",{for:"validationDefault01"},"First name",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationDefault01","onUpdate:modelValue":t[14]||(t[14]=l=>s.value.first_name=l),type:"text",class:"form-control",placeholder:"First name",required:""},null,512),[[e.vModelText,s.value.first_name]])]),e.createElementVNode("div",Ce,[t[79]||(t[79]=e.createElementVNode("label",{for:"validationDefault02"},"Last name",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationDefault02","onUpdate:modelValue":t[15]||(t[15]=l=>s.value.last_name=l),type:"text",class:"form-control",placeholder:"Last name",required:""},null,512),[[e.vModelText,s.value.last_name]])]),e.createElementVNode("div",_e,[t[81]||(t[81]=e.createElementVNode("label",{for:"validationDefaultUsername"},"Username",-1)),e.createElementVNode("div",De,[t[80]||(t[80]=e.createElementVNode("span",{id:"inputGroupPrepend2",class:"input-group-text"},"@",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationDefaultUsername","onUpdate:modelValue":t[16]||(t[16]=l=>s.value.username=l),type:"text",class:"form-control",placeholder:"Username","aria-describedby":"inputGroupPrepend2",required:""},null,512),[[e.vModelText,s.value.username]])])])]),e.createElementVNode("div",Te,[e.createElementVNode("div",Ue,[t[82]||(t[82]=e.createElementVNode("label",{for:"validationDefault03"},"City",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationDefault03","onUpdate:modelValue":t[17]||(t[17]=l=>s.value.city=l),type:"text",class:"form-control",placeholder:"City",required:""},null,512),[[e.vModelText,s.value.city]])]),e.createElementVNode("div",Pe,[t[83]||(t[83]=e.createElementVNode("label",{for:"validationDefault04"},"State",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationDefault04","onUpdate:modelValue":t[18]||(t[18]=l=>s.value.state=l),type:"text",class:"form-control",placeholder:"State",required:""},null,512),[[e.vModelText,s.value.state]])]),e.createElementVNode("div",Se,[t[84]||(t[84]=e.createElementVNode("label",{for:"validationDefault05"},"Zip",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationDefault05","onUpdate:modelValue":t[19]||(t[19]=l=>s.value.zip=l),type:"text",class:"form-control",placeholder:"Zip",required:""},null,512),[[e.vModelText,s.value.zip]])])]),e.createElementVNode("div",ze,[e.createElementVNode("div",Le,[e.withDirectives(e.createElementVNode("input",{id:"invalidCheck2","onUpdate:modelValue":t[20]||(t[20]=l=>s.value.is_terms=l),type:"checkbox",class:"custom-control-input",required:""},null,512),[[e.vModelCheckbox,s.value.is_terms]]),t[85]||(t[85]=e.createElementVNode("label",{class:"custom-control-label",for:"invalidCheck2"},"Agree to terms and conditions",-1)),t[86]||(t[86]=e.createElementVNode("div",{class:"invalid-feedback"}," Agree to terms and conditions ",-1))])]),t[87]||(t[87]=e.createElementVNode("button",{class:"btn btn-primary mt-3",type:"submit"}," Submit form ",-1))],32),e.createElementVNode("div",Me,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[21]||(t[21]=l=>m("code5"))},t[88]||(t[88]=[e.createElementVNode("span",null,"Code",-1)])),a.value.includes("code5")?(e.openBlock(),e.createElementBlock("div",he,[e.createVNode(c,null,{default:e.withCtx(()=>t[89]||(t[89]=[e.createElementVNode("pre",null,`<!-- Browser defaults -->
<form @submit.stop.prevent="submit_form5">
    <div class="row">
        <div class="col-md-4 form-group">
            <label for="validationDefault01">First name</label>
            <input type="text" v-model="form5.first_name" class="form-control" id="validationDefault01" placeholder="First name" required />
        </div>
        <div class="col-md-4 form-group">
            <label for="validationDefault02">Last name</label>
            <input type="text" v-model="form5.last_name" class="form-control" id="validationDefault02" placeholder="Last name" required />
        </div>
        <div class="col-md-4 form-group">
            <label for="validationDefaultUsername">Username</label>
            <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input
                    type="text"
                    v-model="form5.username"
                    class="form-control"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
                    required
                />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 form-group">
            <label for="validationDefault03">City</label>
            <input type="text" v-model="form5.city" class="form-control" id="validationDefault03" placeholder="City" required />
        </div>
        <div class="col-md-3 form-group">
            <label for="validationDefault04">State</label>
            <input type="text" v-model="form5.state" class="form-control" id="validationDefault04" placeholder="State" required />
        </div>
        <div class="col-md-3 form-group">
            <label for="validationDefault05">Zip</label>
            <input type="text" v-model="form5.zip" class="form-control" id="validationDefault05" placeholder="Zip" required />
        </div>
    </div>
    <div class="form-group form-group">
        <div class="custom-control custom-checkbox checkbox-primary">
            <input type="checkbox" v-model="form5.is_terms" class="custom-control-input" id="invalidCheck2" required />
            <label class="custom-control-label" for="invalidCheck2">Agree to terms and conditions</label>
            <div class="invalid-feedback">Agree to terms and conditions</div>
        </div>
    </div>
    <button class="btn btn-primary mt-3" type="submit">Submit form</button>
</form>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])]),e.createElementVNode("div",Be,[e.createElementVNode("div",Fe,[t[115]||(t[115]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Tooltips")])])],-1)),e.createElementVNode("div",qe,[e.createElementVNode("form",{class:"needs-validation",novalidate:"",onSubmit:e.withModifiers(D,["stop","prevent"])},[e.createElementVNode("div",Ze,[e.createElementVNode("div",Ae,[t[91]||(t[91]=e.createElementVNode("label",{for:"validationTooltip01"},"First name",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationTooltip01","onUpdate:modelValue":t[22]||(t[22]=l=>i.value.first_name=l),type:"text",class:e.normalizeClass(["form-control",[d.value?i.value.first_name?"is-valid":"is-invalid":""]]),placeholder:"First name"},null,2),[[e.vModelText,i.value.first_name]]),t[92]||(t[92]=e.createElementVNode("div",{class:"valid-tooltip"}," Looks good! ",-1)),t[93]||(t[93]=e.createElementVNode("div",{class:"invalid-tooltip"}," Please fill the first name ",-1))]),e.createElementVNode("div",Ge,[t[94]||(t[94]=e.createElementVNode("label",{for:"validationTooltip02"},"Last name",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationTooltip02","onUpdate:modelValue":t[23]||(t[23]=l=>i.value.last_name=l),type:"text",class:e.normalizeClass(["form-control",[d.value?i.value.last_name?"is-valid":"is-invalid":""]]),placeholder:"Last name"},null,2),[[e.vModelText,i.value.last_name]]),t[95]||(t[95]=e.createElementVNode("div",{class:"valid-tooltip"}," Looks good! ",-1)),t[96]||(t[96]=e.createElementVNode("div",{class:"invalid-tooltip"}," Please fill the last name ",-1))]),e.createElementVNode("div",$e,[t[100]||(t[100]=e.createElementVNode("label",{for:"validationTooltipUsername"},"Username",-1)),e.createElementVNode("div",Oe,[t[97]||(t[97]=e.createElementVNode("span",{id:"validationTooltipUsernamePrepend",class:"input-group-text"},"@",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationTooltipUsername","onUpdate:modelValue":t[24]||(t[24]=l=>i.value.username=l),type:"text",class:e.normalizeClass(["form-control",[d.value?i.value.username?"is-valid":"is-invalid":""]]),placeholder:"Username","aria-describedby":"validationTooltipUsernamePrepend"},null,2),[[e.vModelText,i.value.username]]),t[98]||(t[98]=e.createElementVNode("div",{class:"valid-tooltip"}," Looks good! ",-1)),t[99]||(t[99]=e.createElementVNode("div",{class:"invalid-tooltip"}," Please choose a unique and valid username. ",-1))])])]),e.createElementVNode("div",je,[e.createElementVNode("div",Ye,[t[101]||(t[101]=e.createElementVNode("label",{for:"validationTooltip03"},"City",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationTooltip03","onUpdate:modelValue":t[25]||(t[25]=l=>i.value.city=l),type:"text",class:e.normalizeClass([[d.value?i.value.city?"is-valid":"is-invalid":""],"form-control"]),placeholder:"City"},null,2),[[e.vModelText,i.value.city]]),t[102]||(t[102]=e.createElementVNode("div",{class:"valid-tooltip"}," Looks good! ",-1)),t[103]||(t[103]=e.createElementVNode("div",{class:"invalid-tooltip"}," Please provide a valid city. ",-1))]),e.createElementVNode("div",He,[t[104]||(t[104]=e.createElementVNode("label",{for:"validationTooltip04"},"State",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationTooltip04","onUpdate:modelValue":t[26]||(t[26]=l=>i.value.state=l),type:"text",class:e.normalizeClass([[d.value?i.value.state?"is-valid":"is-invalid":""],"form-control"]),placeholder:"State"},null,2),[[e.vModelText,i.value.state]]),t[105]||(t[105]=e.createElementVNode("div",{class:"valid-tooltip"}," Looks good! ",-1)),t[106]||(t[106]=e.createElementVNode("div",{class:"invalid-tooltip"}," Please provide a valid state. ",-1))]),e.createElementVNode("div",Ie,[t[107]||(t[107]=e.createElementVNode("label",{for:"validationTooltip05"},"Zip",-1)),e.withDirectives(e.createElementVNode("input",{id:"validationTooltip05","onUpdate:modelValue":t[27]||(t[27]=l=>i.value.zip=l),type:"text",class:e.normalizeClass([[d.value?i.value.zip?"is-valid":"is-invalid":""],"form-control"]),placeholder:"Zip"},null,2),[[e.vModelText,i.value.zip]]),t[108]||(t[108]=e.createElementVNode("div",{class:"valid-tooltip"}," Looks good! ",-1)),t[109]||(t[109]=e.createElementVNode("div",{class:"invalid-tooltip"}," Please provide a valid zip. ",-1))])]),e.createElementVNode("div",Je,[e.createElementVNode("div",Ke,[e.withDirectives(e.createElementVNode("input",{id:"invalidCheck3","onUpdate:modelValue":t[28]||(t[28]=l=>i.value.is_terms=l),type:"checkbox",class:e.normalizeClass(["custom-control-input",[d.value?i.value.is_terms?"is-valid":"is-invalid":""]])},null,2),[[e.vModelCheckbox,i.value.is_terms]]),t[110]||(t[110]=e.createElementVNode("label",{class:"custom-control-label",for:"invalidCheck3"},"Agree to terms and conditions",-1)),t[111]||(t[111]=e.createElementVNode("div",{class:"invalid-tooltip"}," Agree to terms and conditions ",-1))])]),t[112]||(t[112]=e.createElementVNode("button",{class:"btn btn-primary mt-2",type:"submit"}," Submit form ",-1))],32),e.createElementVNode("div",Qe,[e.createElementVNode("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[29]||(t[29]=l=>m("code6"))},t[113]||(t[113]=[e.createElementVNode("span",null,"Code",-1)])),a.value.includes("code6")?(e.openBlock(),e.createElementBlock("div",Re,[e.createVNode(c,null,{default:e.withCtx(()=>t[114]||(t[114]=[e.createElementVNode("pre",null,`<!-- tooltips -->
<form class="needs-validation" novalidate @submit.stop.prevent="submit_form6">
    <div class="row">
        <div class="col-md-4 mb-5 position-relative">
            <label for="validationTooltip01">First name</label>
            <input
                type="text"
                v-model="form6.first_name"
                class="form-control"
                :class="[is_submit_form6 ? (form6.first_name ? 'is-valid' : 'is-invalid') : '']"
                id="validationTooltip01"
                placeholder="First name"
            />
            <div class="valid-tooltip">Looks good!</div>
            <div class="invalid-tooltip">Please fill the first name</div>
        </div>
        <div class="col-md-4 mb-5 position-relative">
            <label for="validationTooltip02">Last name</label>
            <input
                type="text"
                v-model="form6.last_name"
                class="form-control"
                :class="[is_submit_form6 ? (form6.last_name ? 'is-valid' : 'is-invalid') : '']"
                id="validationTooltip02"
                placeholder="Last name"
            />
            <div class="valid-tooltip">Looks good!</div>
            <div class="invalid-tooltip">Please fill the last name</div>
        </div>
        <div class="col-md-4 mb-5 position-relative">
            <label for="validationTooltipUsername">Username</label>
            <div class="input-group">
                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                <input
                    type="text"
                    v-model="form6.username"
                    class="form-control"
                    :class="[is_submit_form6 ? (form6.username ? 'is-valid' : 'is-invalid') : '']"
                    id="validationTooltipUsername"
                    placeholder="Username"
                    aria-describedby="validationTooltipUsernamePrepend"
                />
                <div class="valid-tooltip">Looks good!</div>
                <div class="invalid-tooltip">Please choose a unique and valid username.</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-5 position-relative">
            <label for="validationTooltip03">City</label>
            <input
                type="text"
                v-model="form6.city"
                :class="[is_submit_form6 ? (form6.city ? 'is-valid' : 'is-invalid') : '']"
                class="form-control"
                id="validationTooltip03"
                placeholder="City"
            />
            <div class="valid-tooltip">Looks good!</div>
            <div class="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div class="col-md-3 mb-5 position-relative">
            <label for="validationTooltip04">State</label>
            <input
                type="text"
                v-model="form6.state"
                :class="[is_submit_form6 ? (form6.state ? 'is-valid' : 'is-invalid') : '']"
                class="form-control"
                id="validationTooltip04"
                placeholder="State"
            />
            <div class="valid-tooltip">Looks good!</div>
            <div class="invalid-tooltip">Please provide a valid state.</div>
        </div>
        <div class="col-md-3 mb-5 position-relative">
            <label for="validationTooltip05">Zip</label>
            <input
                type="text"
                v-model="form6.zip"
                :class="[is_submit_form6 ? (form6.zip ? 'is-valid' : 'is-invalid') : '']"
                class="form-control"
                id="validationTooltip05"
                placeholder="Zip"
            />
            <div class="valid-tooltip">Looks good!</div>
            <div class="invalid-tooltip">Please provide a valid zip.</div>
        </div>
    </div>
    <div class="form-group form-group position-relative">
        <div class="custom-control custom-checkbox checkbox-primary">
            <input
                type="checkbox"
                v-model="form6.is_terms"
                class="custom-control-input"
                id="invalidCheck3"
                :class="[is_submit_form6 ? (form6.is_terms ? 'is-valid' : 'is-invalid') : '']"
            />
            <label class="custom-control-label" for="invalidCheck3">Agree to terms and conditions</label>
            <div class="invalid-tooltip">Agree to terms and conditions</div>
        </div>
    </div>
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
</form>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])])),[[U]])])])}}};export{st as default};
