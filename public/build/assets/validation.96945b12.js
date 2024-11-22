import{r,X as S,bG as m,bH as u,bW as j,bI as o,aV as W,W as e,c4 as q,a4 as g,bK as d,c5 as n,e as k,bT as x,bN as _,cc as Y,ca as L}from"./index.4028b26a.js";/* empty css                     */import{_ as C}from"./highlight.8168c6ff.js";import"./use-meta.7227850d.js";import"./_commonjsHelpers.f037b798.js";/* empty css                        */const H={class:"container"},I={class:"container"},K={class:"nav sidenav"},X={class:"sidenav-content"},J={class:"row layout-top-spacing"},Q={id:"basic",class:"col-lg-12 layout-spacing"},R={class:"statbox panel box box-shadow"},h={class:"panel-body"},ll={class:"row"},ol={class:"col-md-12 form-group"},il={class:"code-section-container show-code"},sl={key:0,class:"code-section text-start"},tl={id:"email",class:"col-lg-12 layout-spacing"},el={class:"statbox panel box box-shadow"},al={class:"panel-body"},nl={class:"row"},dl={class:"col-md-12 form-group"},rl={class:"code-section-container show-code"},vl={key:0,class:"code-section text-start"},ml={id:"select",class:"col-lg-12 layout-spacing"},ul={class:"statbox panel box box-shadow"},pl={class:"panel-body"},cl={class:"row"},fl={class:"col-md-12"},bl={id:"select_menu",class:"form-group form-group"},yl={class:"code-section-container show-code"},gl={key:0,class:"code-section text-start"},kl={id:"custom_styles",class:"col-lg-12 layout-spacing col-md-12"},xl={class:"statbox panel box box-shadow"},_l={class:"panel-body"},Cl={class:"row"},wl={class:"col-md-4 form-group"},Ul={class:"col-md-4 form-group"},Pl={class:"col-md-4 form-group"},Sl={class:"input-group"},Ll={class:"row"},Tl={class:"col-md-6 form-group"},Vl={class:"col-md-3 form-group"},Dl={class:"col-md-3 form-group"},zl={class:"form-group form-group"},Fl={class:"form-check ps-0"},ql={class:"custom-control custom-checkbox checkbox-success"},Bl={class:"code-section-container show-code"},Zl={key:0,class:"code-section text-start"},Al={id:"browser_default",class:"col-lg-12 layout-spacing col-md-12"},Nl={class:"statbox panel box box-shadow"},El={class:"panel-body"},Gl={class:"row"},$l={class:"col-md-4 form-group"},Ml={class:"col-md-4 form-group"},Ol={class:"col-md-4 form-group"},jl={class:"input-group"},Wl={class:"row"},Yl={class:"col-md-6 form-group"},Hl={class:"col-md-3 form-group"},Il={class:"col-md-3 form-group"},Kl={class:"form-group form-group"},Xl={class:"custom-control custom-checkbox checkbox-primary"},Jl={class:"code-section-container show-code"},Ql={key:0,class:"code-section text-start"},Rl={id:"tooltips",class:"col-lg-12 layout-spacing col-md-12"},hl={class:"statbox panel box box-shadow"},lo={class:"panel-body"},oo={class:"row"},io={class:"col-md-4 mb-5 position-relative"},so={class:"col-md-4 mb-5 position-relative"},to={class:"col-md-4 mb-5 position-relative"},eo={class:"input-group"},ao={class:"row"},no={class:"col-md-6 mb-5 position-relative"},ro={class:"col-md-3 mb-5 position-relative"},vo={class:"col-md-3 mb-5 position-relative"},mo={class:"form-group form-group position-relative"},uo={class:"custom-control custom-checkbox checkbox-success"},po={class:"code-section-container show-code"},co={key:0,class:"code-section text-start"},Co={__name:"validation",setup(fo){const v=r([]),U=r({name:""}),T=r(!1),w=r({email:""}),V=r(!1),P=r({select:""}),D=r(!1),s=r({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),p=r(!1),a=r({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),B=r(!1),t=r({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),c=r(!1),b=f=>{v.value.includes(f)?v.value=v.value.filter(l=>l!=f):v.value.push(f)},z=f=>/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(f),Z=()=>{T.value=!0,U.value.name&&y("Form submitted successfully.")},A=()=>{V.value=!0,z(w.value.email)&&y("Form submitted successfully.")},N=()=>{D.value=!0,P.value.select&&y("Form submitted successfully.")},E=()=>{p.value=!0,s.value.first_name&&s.value.last_name&&s.value.username&&s.value.city&&s.value.state&&s.value.zip&&s.value.is_terms&&y("Form submitted successfully.")},G=()=>{B.value=!0,a.value.first_name&&a.value.last_name&&a.value.username&&a.value.city&&a.value.state&&a.value.zip&&a.value.is_terms&&y("Form submitted successfully.")},$=()=>{c.value=!0,t.value.first_name&&t.value.last_name&&t.value.username&&t.value.city&&t.value.state&&t.value.zip&&t.value.is_terms&&y("Form submitted successfully.")},y=(f="",l="success")=>{window.Swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:l,title:f,padding:"10px 20px"})};return(f,l)=>{const F=S("scroll-spy-active"),M=S("scroll-spy-link"),O=S("scroll-spy");return m(),u("div",H,[(m(),j(W,{to:"#breadcrumb"},[l[30]||(l[30]=o("ul",{class:"navbar-nav flex-row"},[o("li",null,[o("div",{class:"page-header"},[o("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[o("ol",{class:"breadcrumb"},[o("li",{class:"breadcrumb-item"},[o("a",{href:"javascript:;"},"Forms")]),o("li",{class:"breadcrumb-item active","aria-current":"page"},[o("span",null,"Validation")])])])])])],-1))])),o("div",I,[o("div",K,[e((m(),u("div",X,l[31]||(l[31]=[q('<a href="#basic" class="nav-link">Basic</a><a href="#email" class="nav-link">Email</a><a href="#select" class="nav-link">Select</a><a href="#custom_styles" class="nav-link">Custom Styles</a><a href="#browser_default" class="nav-link">Browser Default</a><a href="#tooltips" class="nav-link">Tooltips</a>',6)]))),[[F],[M]])]),l[116]||(l[116]=q('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/validation" class="text-info"> https://getbootstrap.com/docs/5.0/forms/validation </a></div></div></div>',1)),e((m(),u("div",J,[o("div",Q,[o("div",R,[l[38]||(l[38]=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Basic")])])],-1)),o("div",h,[o("form",{novalidate:"",class:"simple-example",onSubmit:g(Z,["stop","prevent"])},[o("div",ll,[o("div",ol,[l[32]||(l[32]=o("label",{for:"fullName"},"Full Name",-1)),e(o("input",{"onUpdate:modelValue":l[0]||(l[0]=i=>U.value.name=i),id:"fullName",type:"text",class:d(["form-control",[T.value?U.value.name?"is-valid":"is-invalid":""]])},null,2),[[n,U.value.name]]),l[33]||(l[33]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[34]||(l[34]=o("div",{class:"invalid-feedback"},"Please fill the name",-1))])]),l[35]||(l[35]=o("button",{type:"submit",class:"btn mt-2 btn-primary"},"Submit form",-1))],32),o("div",il,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[1]||(l[1]=i=>b("code1"))},l[36]||(l[36]=[o("span",null,"Code",-1)])),v.value.includes("code1")?(m(),u("div",sl,[k(C,null,{default:x(()=>l[37]||(l[37]=[o("pre",null,`<!-- Basic -->
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
`,-1)])),_:1})])):_("",!0)])])])]),o("div",tl,[o("div",el,[l[45]||(l[45]=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Email")])])],-1)),o("div",al,[o("form",{class:"email",novalidate:"",onSubmit:g(A,["stop","prevent"])},[o("div",nl,[o("div",dl,[l[39]||(l[39]=o("label",{for:"e_mail"},"Email",-1)),e(o("input",{"onUpdate:modelValue":l[2]||(l[2]=i=>w.value.email=i),type:"email",class:d(["form-control",[V.value?w.value.email&&z(w.value.email)?"is-valid":"is-invalid":""]]),id:"e_mail"},null,2),[[n,w.value.email]]),l[40]||(l[40]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[41]||(l[41]=o("div",{class:"invalid-feedback"},"Please fill the Email",-1))])]),l[42]||(l[42]=o("button",{class:"btn btn-primary form-group mt-2",type:"submit"},"Submit form",-1))],32),o("div",rl,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[3]||(l[3]=i=>b("code2"))},l[43]||(l[43]=[o("span",null,"Code",-1)])),v.value.includes("code2")?(m(),u("div",vl,[k(C,null,{default:x(()=>l[44]||(l[44]=[o("pre",null,`<!-- Email -->
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
`,-1)])),_:1})])):_("",!0)])])])]),o("div",ml,[o("div",ul,[l[52]||(l[52]=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Select")])])],-1)),o("div",pl,[o("form",{class:"select",novalidate:"",onSubmit:g(N,["stop","prevent"])},[o("div",cl,[o("div",fl,[o("div",bl,[e(o("select",{"onUpdate:modelValue":l[4]||(l[4]=i=>P.value.select=i),class:d(["form-select",[D.value?P.value.select?"is-valid":"is-invalid":""]])},l[46]||(l[46]=[o("option",{value:""},"Open this select menu",-1),o("option",{value:"1"},"One",-1),o("option",{value:"2"},"Two",-1),o("option",{value:"3"},"Three",-1)]),2),[[Y,P.value.select]]),l[47]||(l[47]=o("div",{class:"valid-feedback"},"Example valid custom select feedback",-1)),l[48]||(l[48]=o("div",{class:"invalid-feedback"},"Please Select the field",-1))])])]),l[49]||(l[49]=o("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit form",-1))],32),o("div",yl,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[5]||(l[5]=i=>b("code3"))},l[50]||(l[50]=[o("span",null,"Code",-1)])),v.value.includes("code3")?(m(),u("div",gl,[k(C,null,{default:x(()=>l[51]||(l[51]=[o("pre",null,`<!-- Select -->
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
`,-1)])),_:1})])):_("",!0)])])])]),o("div",kl,[o("div",xl,[l[77]||(l[77]=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Custom styles")])])],-1)),o("div",_l,[o("form",{class:"needs-validation",novalidate:"",onSubmit:g(E,["stop","prevent"])},[o("div",Cl,[o("div",wl,[l[53]||(l[53]=o("label",{for:"validationCustom01"},"First name",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=i=>s.value.first_name=i),class:d(["form-control",[p.value?s.value.first_name?"is-valid":"is-invalid":""]]),id:"validationCustom01",placeholder:"First name"},null,2),[[n,s.value.first_name]]),l[54]||(l[54]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[55]||(l[55]=o("div",{class:"invalid-feedback"},"Please fill the first name",-1))]),o("div",Ul,[l[56]||(l[56]=o("label",{for:"validationCustom02"},"Last name",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[7]||(l[7]=i=>s.value.last_name=i),class:d(["form-control",[p.value?s.value.last_name?"is-valid":"is-invalid":""]]),id:"validationCustom02",placeholder:"Last name"},null,2),[[n,s.value.last_name]]),l[57]||(l[57]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[58]||(l[58]=o("div",{class:"invalid-feedback"},"Please fill the last name",-1))]),o("div",Pl,[l[62]||(l[62]=o("label",{for:"validationCustomUsername"},"Username",-1)),o("div",Sl,[l[59]||(l[59]=o("span",{class:"input-group-text",id:"inputGroupPrepend"},"@",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[8]||(l[8]=i=>s.value.username=i),class:d(["form-control",[p.value?s.value.username?"is-valid":"is-invalid":""]]),id:"validationCustomUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend"},null,2),[[n,s.value.username]]),l[60]||(l[60]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[61]||(l[61]=o("div",{class:"invalid-feedback"},"Please choose a username.",-1))])])]),o("div",Ll,[o("div",Tl,[l[63]||(l[63]=o("label",{for:"validationCustom03"},"City",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[9]||(l[9]=i=>s.value.city=i),class:d(["form-control",[p.value?s.value.city?"is-valid":"is-invalid":""]]),id:"validationCustom03",placeholder:"City"},null,2),[[n,s.value.city]]),l[64]||(l[64]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[65]||(l[65]=o("div",{class:"invalid-feedback"},"Please provide a valid city.",-1))]),o("div",Vl,[l[66]||(l[66]=o("label",{for:"validationCustom04"},"State",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[10]||(l[10]=i=>s.value.state=i),class:d(["form-control",[p.value?s.value.state?"is-valid":"is-invalid":""]]),id:"validationCustom04",placeholder:"State"},null,2),[[n,s.value.state]]),l[67]||(l[67]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[68]||(l[68]=o("div",{class:"invalid-feedback"},"Please provide a valid state.",-1))]),o("div",Dl,[l[69]||(l[69]=o("label",{for:"validationCustom05"},"Zip",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[11]||(l[11]=i=>s.value.zip=i),class:d(["form-control",[p.value?s.value.zip?"is-valid":"is-invalid":""]]),id:"validationCustom05",placeholder:"Zip"},null,2),[[n,s.value.zip]]),l[70]||(l[70]=o("div",{class:"valid-feedback"},"Looks good!",-1)),l[71]||(l[71]=o("div",{class:"invalid-feedback"},"Please provide a valid zip.",-1))])]),o("div",zl,[o("div",Fl,[o("div",ql,[e(o("input",{type:"checkbox","onUpdate:modelValue":l[12]||(l[12]=i=>s.value.is_terms=i),class:d(["custom-control-input",[p.value?s.value.is_terms?"is-valid":"is-invalid":""]]),id:"invalidCheck"},null,2),[[L,s.value.is_terms]]),l[72]||(l[72]=o("label",{class:"custom-control-label",for:"invalidCheck"},"Agree to terms and conditions",-1)),l[73]||(l[73]=o("div",{class:"invalid-feedback"},"You must agree before submitting.",-1))])])]),l[74]||(l[74]=o("button",{class:"btn btn-primary mt-3",type:"submit"},"Submit form",-1))],32),o("div",Bl,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[13]||(l[13]=i=>b("code4"))},l[75]||(l[75]=[o("span",null,"Code",-1)])),v.value.includes("code4")?(m(),u("div",Zl,[k(C,null,{default:x(()=>l[76]||(l[76]=[o("pre",null,`<!-- Custom -->
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
`,-1)])),_:1})])):_("",!0)])])])]),o("div",Al,[o("div",Nl,[l[90]||(l[90]=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Browser defaults")])])],-1)),o("div",El,[o("form",{onSubmit:g(G,["stop","prevent"])},[o("div",Gl,[o("div",$l,[l[78]||(l[78]=o("label",{for:"validationDefault01"},"First name",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[14]||(l[14]=i=>a.value.first_name=i),class:"form-control",id:"validationDefault01",placeholder:"First name",required:""},null,512),[[n,a.value.first_name]])]),o("div",Ml,[l[79]||(l[79]=o("label",{for:"validationDefault02"},"Last name",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[15]||(l[15]=i=>a.value.last_name=i),class:"form-control",id:"validationDefault02",placeholder:"Last name",required:""},null,512),[[n,a.value.last_name]])]),o("div",Ol,[l[81]||(l[81]=o("label",{for:"validationDefaultUsername"},"Username",-1)),o("div",jl,[l[80]||(l[80]=o("span",{class:"input-group-text",id:"inputGroupPrepend2"},"@",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[16]||(l[16]=i=>a.value.username=i),class:"form-control",id:"validationDefaultUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend2",required:""},null,512),[[n,a.value.username]])])])]),o("div",Wl,[o("div",Yl,[l[82]||(l[82]=o("label",{for:"validationDefault03"},"City",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[17]||(l[17]=i=>a.value.city=i),class:"form-control",id:"validationDefault03",placeholder:"City",required:""},null,512),[[n,a.value.city]])]),o("div",Hl,[l[83]||(l[83]=o("label",{for:"validationDefault04"},"State",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[18]||(l[18]=i=>a.value.state=i),class:"form-control",id:"validationDefault04",placeholder:"State",required:""},null,512),[[n,a.value.state]])]),o("div",Il,[l[84]||(l[84]=o("label",{for:"validationDefault05"},"Zip",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[19]||(l[19]=i=>a.value.zip=i),class:"form-control",id:"validationDefault05",placeholder:"Zip",required:""},null,512),[[n,a.value.zip]])])]),o("div",Kl,[o("div",Xl,[e(o("input",{type:"checkbox","onUpdate:modelValue":l[20]||(l[20]=i=>a.value.is_terms=i),class:"custom-control-input",id:"invalidCheck2",required:""},null,512),[[L,a.value.is_terms]]),l[85]||(l[85]=o("label",{class:"custom-control-label",for:"invalidCheck2"},"Agree to terms and conditions",-1)),l[86]||(l[86]=o("div",{class:"invalid-feedback"},"Agree to terms and conditions",-1))])]),l[87]||(l[87]=o("button",{class:"btn btn-primary mt-3",type:"submit"},"Submit form",-1))],32),o("div",Jl,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[21]||(l[21]=i=>b("code5"))},l[88]||(l[88]=[o("span",null,"Code",-1)])),v.value.includes("code5")?(m(),u("div",Ql,[k(C,null,{default:x(()=>l[89]||(l[89]=[o("pre",null,`<!-- Browser defaults -->
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
`,-1)])),_:1})])):_("",!0)])])])]),o("div",Rl,[o("div",hl,[l[115]||(l[115]=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Tooltips")])])],-1)),o("div",lo,[o("form",{class:"needs-validation",novalidate:"",onSubmit:g($,["stop","prevent"])},[o("div",oo,[o("div",io,[l[91]||(l[91]=o("label",{for:"validationTooltip01"},"First name",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[22]||(l[22]=i=>t.value.first_name=i),class:d(["form-control",[c.value?t.value.first_name?"is-valid":"is-invalid":""]]),id:"validationTooltip01",placeholder:"First name"},null,2),[[n,t.value.first_name]]),l[92]||(l[92]=o("div",{class:"valid-tooltip"},"Looks good!",-1)),l[93]||(l[93]=o("div",{class:"invalid-tooltip"},"Please fill the first name",-1))]),o("div",so,[l[94]||(l[94]=o("label",{for:"validationTooltip02"},"Last name",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[23]||(l[23]=i=>t.value.last_name=i),class:d(["form-control",[c.value?t.value.last_name?"is-valid":"is-invalid":""]]),id:"validationTooltip02",placeholder:"Last name"},null,2),[[n,t.value.last_name]]),l[95]||(l[95]=o("div",{class:"valid-tooltip"},"Looks good!",-1)),l[96]||(l[96]=o("div",{class:"invalid-tooltip"},"Please fill the last name",-1))]),o("div",to,[l[100]||(l[100]=o("label",{for:"validationTooltipUsername"},"Username",-1)),o("div",eo,[l[97]||(l[97]=o("span",{class:"input-group-text",id:"validationTooltipUsernamePrepend"},"@",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[24]||(l[24]=i=>t.value.username=i),class:d(["form-control",[c.value?t.value.username?"is-valid":"is-invalid":""]]),id:"validationTooltipUsername",placeholder:"Username","aria-describedby":"validationTooltipUsernamePrepend"},null,2),[[n,t.value.username]]),l[98]||(l[98]=o("div",{class:"valid-tooltip"},"Looks good!",-1)),l[99]||(l[99]=o("div",{class:"invalid-tooltip"},"Please choose a unique and valid username.",-1))])])]),o("div",ao,[o("div",no,[l[101]||(l[101]=o("label",{for:"validationTooltip03"},"City",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[25]||(l[25]=i=>t.value.city=i),class:d([[c.value?t.value.city?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip03",placeholder:"City"},null,2),[[n,t.value.city]]),l[102]||(l[102]=o("div",{class:"valid-tooltip"},"Looks good!",-1)),l[103]||(l[103]=o("div",{class:"invalid-tooltip"},"Please provide a valid city.",-1))]),o("div",ro,[l[104]||(l[104]=o("label",{for:"validationTooltip04"},"State",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[26]||(l[26]=i=>t.value.state=i),class:d([[c.value?t.value.state?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip04",placeholder:"State"},null,2),[[n,t.value.state]]),l[105]||(l[105]=o("div",{class:"valid-tooltip"},"Looks good!",-1)),l[106]||(l[106]=o("div",{class:"invalid-tooltip"},"Please provide a valid state.",-1))]),o("div",vo,[l[107]||(l[107]=o("label",{for:"validationTooltip05"},"Zip",-1)),e(o("input",{type:"text","onUpdate:modelValue":l[27]||(l[27]=i=>t.value.zip=i),class:d([[c.value?t.value.zip?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip05",placeholder:"Zip"},null,2),[[n,t.value.zip]]),l[108]||(l[108]=o("div",{class:"valid-tooltip"},"Looks good!",-1)),l[109]||(l[109]=o("div",{class:"invalid-tooltip"},"Please provide a valid zip.",-1))])]),o("div",mo,[o("div",uo,[e(o("input",{type:"checkbox","onUpdate:modelValue":l[28]||(l[28]=i=>t.value.is_terms=i),class:d(["custom-control-input",[c.value?t.value.is_terms?"is-valid":"is-invalid":""]]),id:"invalidCheck3"},null,2),[[L,t.value.is_terms]]),l[110]||(l[110]=o("label",{class:"custom-control-label",for:"invalidCheck3"},"Agree to terms and conditions",-1)),l[111]||(l[111]=o("div",{class:"invalid-tooltip"},"Agree to terms and conditions",-1))])]),l[112]||(l[112]=o("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit form",-1))],32),o("div",po,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:l[29]||(l[29]=i=>b("code6"))},l[113]||(l[113]=[o("span",null,"Code",-1)])),v.value.includes("code6")?(m(),u("div",co,[k(C,null,{default:x(()=>l[114]||(l[114]=[o("pre",null,`<!-- tooltips -->
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
`,-1)])),_:1})])):_("",!0)])])])])])),[[O]])])])}}};export{Co as default};
