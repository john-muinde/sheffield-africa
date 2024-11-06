import{x as c,a5 as S,o as v,c as m,a2 as O,a as o,p as l,W as h,n as d,X as n,i as y,l as g,e as k,al as Y,as as P,Y as F,aq as j}from"./app-setting.fefad6ec.js";/* empty css                     */import{_ as x}from"./highlight.fd2f20f1.js";import"./_commonjsHelpers.f037b798.js";/* empty css                        */const W={class:"container"},X=o("ul",{class:"navbar-nav flex-row"},[o("li",null,[o("div",{class:"page-header"},[o("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[o("ol",{class:"breadcrumb"},[o("li",{class:"breadcrumb-item"},[o("a",{href:"javascript:;"},"Forms")]),o("li",{class:"breadcrumb-item active","aria-current":"page"},[o("span",null,"Validation")])])])])])],-1),H={class:"container"},I={class:"nav sidenav"},J={class:"sidenav-content"},K=F('<a href="#basic" class="nav-link">Basic</a><a href="#email" class="nav-link">Email</a><a href="#select" class="nav-link">Select</a><a href="#custom_styles" class="nav-link">Custom Styles</a><a href="#browser_default" class="nav-link">Browser Default</a><a href="#tooltips" class="nav-link">Tooltips</a>',6),Q=[K],R=F('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/validation" class="text-info"> https://getbootstrap.com/docs/5.0/forms/validation </a></div></div></div>',1),oo={class:"row layout-top-spacing"},so={id:"basic",class:"col-lg-12 layout-spacing"},to={class:"statbox panel box box-shadow"},io=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Basic")])])],-1),eo={class:"panel-body"},lo=["onSubmit"],ao={class:"row"},no={class:"col-md-12 form-group"},co=o("label",{for:"fullName"},"Full Name",-1),ro=o("div",{class:"valid-feedback"},"Looks good!",-1),vo=o("div",{class:"invalid-feedback"},"Please fill the name",-1),mo=o("button",{type:"submit",class:"btn mt-2 btn-primary"},"Submit form",-1),uo={class:"code-section-container show-code"},po=o("span",null,"Code",-1),_o=[po],fo={key:0,class:"code-section text-start"},bo=o("pre",null,`<!-- Basic -->
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
`,-1),ho={id:"email",class:"col-lg-12 layout-spacing"},yo={class:"statbox panel box box-shadow"},go=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Email")])])],-1),ko={class:"panel-body"},xo=["onSubmit"],Co={class:"row"},wo={class:"col-md-12 form-group"},Uo=o("label",{for:"e_mail"},"Email",-1),So=o("div",{class:"valid-feedback"},"Looks good!",-1),Po=o("div",{class:"invalid-feedback"},"Please fill the Email",-1),Lo=o("button",{class:"btn btn-primary form-group mt-2",type:"submit"},"Submit form",-1),To={class:"code-section-container show-code"},Vo=o("span",null,"Code",-1),Do=[Vo],zo={key:0,class:"code-section text-start"},Fo=o("pre",null,`<!-- Email -->
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
`,-1),qo={id:"select",class:"col-lg-12 layout-spacing"},Bo={class:"statbox panel box box-shadow"},Zo=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Select")])])],-1),Ao={class:"panel-body"},Eo=["onSubmit"],No={class:"row"},Go={class:"col-md-12"},$o={id:"select_menu",class:"form-group form-group"},Mo=o("option",{value:""},"Open this select menu",-1),Oo=o("option",{value:"1"},"One",-1),Yo=o("option",{value:"2"},"Two",-1),jo=o("option",{value:"3"},"Three",-1),Wo=[Mo,Oo,Yo,jo],Xo=o("div",{class:"valid-feedback"},"Example valid custom select feedback",-1),Ho=o("div",{class:"invalid-feedback"},"Please Select the field",-1),Io=o("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit form",-1),Jo={class:"code-section-container show-code"},Ko=o("span",null,"Code",-1),Qo=[Ko],Ro={key:0,class:"code-section text-start"},os=o("pre",null,`<!-- Select -->
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
`,-1),ss={id:"custom_styles",class:"col-lg-12 layout-spacing col-md-12"},ts={class:"statbox panel box box-shadow"},is=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Custom styles")])])],-1),es={class:"panel-body"},ls=["onSubmit"],as={class:"row"},ns={class:"col-md-4 form-group"},ds=o("label",{for:"validationCustom01"},"First name",-1),cs=o("div",{class:"valid-feedback"},"Looks good!",-1),rs=o("div",{class:"invalid-feedback"},"Please fill the first name",-1),vs={class:"col-md-4 form-group"},ms=o("label",{for:"validationCustom02"},"Last name",-1),us=o("div",{class:"valid-feedback"},"Looks good!",-1),ps=o("div",{class:"invalid-feedback"},"Please fill the last name",-1),_s={class:"col-md-4 form-group"},fs=o("label",{for:"validationCustomUsername"},"Username",-1),bs={class:"input-group"},hs=o("span",{class:"input-group-text",id:"inputGroupPrepend"},"@",-1),ys=o("div",{class:"valid-feedback"},"Looks good!",-1),gs=o("div",{class:"invalid-feedback"},"Please choose a username.",-1),ks={class:"row"},xs={class:"col-md-6 form-group"},Cs=o("label",{for:"validationCustom03"},"City",-1),ws=o("div",{class:"valid-feedback"},"Looks good!",-1),Us=o("div",{class:"invalid-feedback"},"Please provide a valid city.",-1),Ss={class:"col-md-3 form-group"},Ps=o("label",{for:"validationCustom04"},"State",-1),Ls=o("div",{class:"valid-feedback"},"Looks good!",-1),Ts=o("div",{class:"invalid-feedback"},"Please provide a valid state.",-1),Vs={class:"col-md-3 form-group"},Ds=o("label",{for:"validationCustom05"},"Zip",-1),zs=o("div",{class:"valid-feedback"},"Looks good!",-1),Fs=o("div",{class:"invalid-feedback"},"Please provide a valid zip.",-1),qs={class:"form-group form-group"},Bs={class:"form-check ps-0"},Zs={class:"custom-control custom-checkbox checkbox-success"},As=o("label",{class:"custom-control-label",for:"invalidCheck"},"Agree to terms and conditions",-1),Es=o("div",{class:"invalid-feedback"},"You must agree before submitting.",-1),Ns=o("button",{class:"btn btn-primary mt-3",type:"submit"},"Submit form",-1),Gs={class:"code-section-container show-code"},$s=o("span",null,"Code",-1),Ms=[$s],Os={key:0,class:"code-section text-start"},Ys=o("pre",null,`<!-- Custom -->
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
`,-1),js={id:"browser_default",class:"col-lg-12 layout-spacing col-md-12"},Ws={class:"statbox panel box box-shadow"},Xs=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Browser defaults")])])],-1),Hs={class:"panel-body"},Is=["onSubmit"],Js={class:"row"},Ks={class:"col-md-4 form-group"},Qs=o("label",{for:"validationDefault01"},"First name",-1),Rs={class:"col-md-4 form-group"},ot=o("label",{for:"validationDefault02"},"Last name",-1),st={class:"col-md-4 form-group"},tt=o("label",{for:"validationDefaultUsername"},"Username",-1),it={class:"input-group"},et=o("span",{class:"input-group-text",id:"inputGroupPrepend2"},"@",-1),lt={class:"row"},at={class:"col-md-6 form-group"},nt=o("label",{for:"validationDefault03"},"City",-1),dt={class:"col-md-3 form-group"},ct=o("label",{for:"validationDefault04"},"State",-1),rt={class:"col-md-3 form-group"},vt=o("label",{for:"validationDefault05"},"Zip",-1),mt={class:"form-group form-group"},ut={class:"custom-control custom-checkbox checkbox-primary"},pt=o("label",{class:"custom-control-label",for:"invalidCheck2"},"Agree to terms and conditions",-1),_t=o("div",{class:"invalid-feedback"},"Agree to terms and conditions",-1),ft=o("button",{class:"btn btn-primary mt-3",type:"submit"},"Submit form",-1),bt={class:"code-section-container show-code"},ht=o("span",null,"Code",-1),yt=[ht],gt={key:0,class:"code-section text-start"},kt=o("pre",null,`<!-- Browser defaults -->
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
`,-1),xt={id:"tooltips",class:"col-lg-12 layout-spacing col-md-12"},Ct={class:"statbox panel box box-shadow"},wt=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Tooltips")])])],-1),Ut={class:"panel-body"},St=["onSubmit"],Pt={class:"row"},Lt={class:"col-md-4 mb-5 position-relative"},Tt=o("label",{for:"validationTooltip01"},"First name",-1),Vt=o("div",{class:"valid-tooltip"},"Looks good!",-1),Dt=o("div",{class:"invalid-tooltip"},"Please fill the first name",-1),zt={class:"col-md-4 mb-5 position-relative"},Ft=o("label",{for:"validationTooltip02"},"Last name",-1),qt=o("div",{class:"valid-tooltip"},"Looks good!",-1),Bt=o("div",{class:"invalid-tooltip"},"Please fill the last name",-1),Zt={class:"col-md-4 mb-5 position-relative"},At=o("label",{for:"validationTooltipUsername"},"Username",-1),Et={class:"input-group"},Nt=o("span",{class:"input-group-text",id:"validationTooltipUsernamePrepend"},"@",-1),Gt=o("div",{class:"valid-tooltip"},"Looks good!",-1),$t=o("div",{class:"invalid-tooltip"},"Please choose a unique and valid username.",-1),Mt={class:"row"},Ot={class:"col-md-6 mb-5 position-relative"},Yt=o("label",{for:"validationTooltip03"},"City",-1),jt=o("div",{class:"valid-tooltip"},"Looks good!",-1),Wt=o("div",{class:"invalid-tooltip"},"Please provide a valid city.",-1),Xt={class:"col-md-3 mb-5 position-relative"},Ht=o("label",{for:"validationTooltip04"},"State",-1),It=o("div",{class:"valid-tooltip"},"Looks good!",-1),Jt=o("div",{class:"invalid-tooltip"},"Please provide a valid state.",-1),Kt={class:"col-md-3 mb-5 position-relative"},Qt=o("label",{for:"validationTooltip05"},"Zip",-1),Rt=o("div",{class:"valid-tooltip"},"Looks good!",-1),oi=o("div",{class:"invalid-tooltip"},"Please provide a valid zip.",-1),si={class:"form-group form-group position-relative"},ti={class:"custom-control custom-checkbox checkbox-success"},ii=o("label",{class:"custom-control-label",for:"invalidCheck3"},"Agree to terms and conditions",-1),ei=o("div",{class:"invalid-tooltip"},"Agree to terms and conditions",-1),li=o("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit form",-1),ai={class:"code-section-container show-code"},ni=o("span",null,"Code",-1),di=[ni],ci={key:0,class:"code-section text-start"},ri=o("pre",null,`<!-- tooltips -->
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
`,-1),bi={__name:"validation",setup(vi){const r=c([]),w=c({name:""}),L=c(!1),C=c({email:""}),T=c(!1),U=c({select:""}),V=c(!1),i=c({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),u=c(!1),a=c({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),q=c(!1),e=c({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),p=c(!1),f=_=>{r.value.includes(_)?r.value=r.value.filter(s=>s!=_):r.value.push(_)},D=_=>/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(_),B=()=>{L.value=!0,w.value.name&&b("Form submitted successfully.")},Z=()=>{T.value=!0,D(C.value.email)&&b("Form submitted successfully.")},A=()=>{V.value=!0,U.value.select&&b("Form submitted successfully.")},E=()=>{u.value=!0,i.value.first_name&&i.value.last_name&&i.value.username&&i.value.city&&i.value.state&&i.value.zip&&i.value.is_terms&&b("Form submitted successfully.")},N=()=>{q.value=!0,a.value.first_name&&a.value.last_name&&a.value.username&&a.value.city&&a.value.state&&a.value.zip&&a.value.is_terms&&b("Form submitted successfully.")},G=()=>{p.value=!0,e.value.first_name&&e.value.last_name&&e.value.username&&e.value.city&&e.value.state&&e.value.zip&&e.value.is_terms&&b("Form submitted successfully.")},b=(_="",s="success")=>{window.Swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:s,title:_,padding:"10px 20px"})};return(_,s)=>{const z=S("scroll-spy-active"),$=S("scroll-spy-link"),M=S("scroll-spy");return v(),m("div",W,[(v(),O(j,{to:"#breadcrumb"},[X])),o("div",H,[o("div",I,[l((v(),m("div",J,Q)),[[z],[$]])]),R,l((v(),m("div",oo,[o("div",so,[o("div",to,[io,o("div",eo,[o("form",{novalidate:"",class:"simple-example",onSubmit:h(B,["stop","prevent"])},[o("div",ao,[o("div",no,[co,l(o("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>w.value.name=t),id:"fullName",type:"text",class:d(["form-control",[L.value?w.value.name?"is-valid":"is-invalid":""]])},null,2),[[n,w.value.name]]),ro,vo])]),mo],40,lo),o("div",uo,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=t=>f("code1"))},_o),r.value.includes("code1")?(v(),m("div",fo,[y(x,null,{default:g(()=>[bo]),_:1})])):k("",!0)])])])]),o("div",ho,[o("div",yo,[go,o("div",ko,[o("form",{class:"email",novalidate:"",onSubmit:h(Z,["stop","prevent"])},[o("div",Co,[o("div",wo,[Uo,l(o("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>C.value.email=t),type:"email",class:d(["form-control",[T.value?C.value.email&&D(C.value.email)?"is-valid":"is-invalid":""]]),id:"e_mail"},null,2),[[n,C.value.email]]),So,Po])]),Lo],40,xo),o("div",To,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[3]||(s[3]=t=>f("code2"))},Do),r.value.includes("code2")?(v(),m("div",zo,[y(x,null,{default:g(()=>[Fo]),_:1})])):k("",!0)])])])]),o("div",qo,[o("div",Bo,[Zo,o("div",Ao,[o("form",{class:"select",novalidate:"",onSubmit:h(A,["stop","prevent"])},[o("div",No,[o("div",Go,[o("div",$o,[l(o("select",{"onUpdate:modelValue":s[4]||(s[4]=t=>U.value.select=t),class:d(["form-select",[V.value?U.value.select?"is-valid":"is-invalid":""]])},Wo,2),[[Y,U.value.select]]),Xo,Ho])])]),Io],40,Eo),o("div",Jo,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[5]||(s[5]=t=>f("code3"))},Qo),r.value.includes("code3")?(v(),m("div",Ro,[y(x,null,{default:g(()=>[os]),_:1})])):k("",!0)])])])]),o("div",ss,[o("div",ts,[is,o("div",es,[o("form",{class:"needs-validation",novalidate:"",onSubmit:h(E,["stop","prevent"])},[o("div",as,[o("div",ns,[ds,l(o("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=t=>i.value.first_name=t),class:d(["form-control",[u.value?i.value.first_name?"is-valid":"is-invalid":""]]),id:"validationCustom01",placeholder:"First name"},null,2),[[n,i.value.first_name]]),cs,rs]),o("div",vs,[ms,l(o("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=t=>i.value.last_name=t),class:d(["form-control",[u.value?i.value.last_name?"is-valid":"is-invalid":""]]),id:"validationCustom02",placeholder:"Last name"},null,2),[[n,i.value.last_name]]),us,ps]),o("div",_s,[fs,o("div",bs,[hs,l(o("input",{type:"text","onUpdate:modelValue":s[8]||(s[8]=t=>i.value.username=t),class:d(["form-control",[u.value?i.value.username?"is-valid":"is-invalid":""]]),id:"validationCustomUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend"},null,2),[[n,i.value.username]]),ys,gs])])]),o("div",ks,[o("div",xs,[Cs,l(o("input",{type:"text","onUpdate:modelValue":s[9]||(s[9]=t=>i.value.city=t),class:d(["form-control",[u.value?i.value.city?"is-valid":"is-invalid":""]]),id:"validationCustom03",placeholder:"City"},null,2),[[n,i.value.city]]),ws,Us]),o("div",Ss,[Ps,l(o("input",{type:"text","onUpdate:modelValue":s[10]||(s[10]=t=>i.value.state=t),class:d(["form-control",[u.value?i.value.state?"is-valid":"is-invalid":""]]),id:"validationCustom04",placeholder:"State"},null,2),[[n,i.value.state]]),Ls,Ts]),o("div",Vs,[Ds,l(o("input",{type:"text","onUpdate:modelValue":s[11]||(s[11]=t=>i.value.zip=t),class:d(["form-control",[u.value?i.value.zip?"is-valid":"is-invalid":""]]),id:"validationCustom05",placeholder:"Zip"},null,2),[[n,i.value.zip]]),zs,Fs])]),o("div",qs,[o("div",Bs,[o("div",Zs,[l(o("input",{type:"checkbox","onUpdate:modelValue":s[12]||(s[12]=t=>i.value.is_terms=t),class:d(["custom-control-input",[u.value?i.value.is_terms?"is-valid":"is-invalid":""]]),id:"invalidCheck"},null,2),[[P,i.value.is_terms]]),As,Es])])]),Ns],40,ls),o("div",Gs,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[13]||(s[13]=t=>f("code4"))},Ms),r.value.includes("code4")?(v(),m("div",Os,[y(x,null,{default:g(()=>[Ys]),_:1})])):k("",!0)])])])]),o("div",js,[o("div",Ws,[Xs,o("div",Hs,[o("form",{onSubmit:h(N,["stop","prevent"])},[o("div",Js,[o("div",Ks,[Qs,l(o("input",{type:"text","onUpdate:modelValue":s[14]||(s[14]=t=>a.value.first_name=t),class:"form-control",id:"validationDefault01",placeholder:"First name",required:""},null,512),[[n,a.value.first_name]])]),o("div",Rs,[ot,l(o("input",{type:"text","onUpdate:modelValue":s[15]||(s[15]=t=>a.value.last_name=t),class:"form-control",id:"validationDefault02",placeholder:"Last name",required:""},null,512),[[n,a.value.last_name]])]),o("div",st,[tt,o("div",it,[et,l(o("input",{type:"text","onUpdate:modelValue":s[16]||(s[16]=t=>a.value.username=t),class:"form-control",id:"validationDefaultUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend2",required:""},null,512),[[n,a.value.username]])])])]),o("div",lt,[o("div",at,[nt,l(o("input",{type:"text","onUpdate:modelValue":s[17]||(s[17]=t=>a.value.city=t),class:"form-control",id:"validationDefault03",placeholder:"City",required:""},null,512),[[n,a.value.city]])]),o("div",dt,[ct,l(o("input",{type:"text","onUpdate:modelValue":s[18]||(s[18]=t=>a.value.state=t),class:"form-control",id:"validationDefault04",placeholder:"State",required:""},null,512),[[n,a.value.state]])]),o("div",rt,[vt,l(o("input",{type:"text","onUpdate:modelValue":s[19]||(s[19]=t=>a.value.zip=t),class:"form-control",id:"validationDefault05",placeholder:"Zip",required:""},null,512),[[n,a.value.zip]])])]),o("div",mt,[o("div",ut,[l(o("input",{type:"checkbox","onUpdate:modelValue":s[20]||(s[20]=t=>a.value.is_terms=t),class:"custom-control-input",id:"invalidCheck2",required:""},null,512),[[P,a.value.is_terms]]),pt,_t])]),ft],40,Is),o("div",bt,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[21]||(s[21]=t=>f("code5"))},yt),r.value.includes("code5")?(v(),m("div",gt,[y(x,null,{default:g(()=>[kt]),_:1})])):k("",!0)])])])]),o("div",xt,[o("div",Ct,[wt,o("div",Ut,[o("form",{class:"needs-validation",novalidate:"",onSubmit:h(G,["stop","prevent"])},[o("div",Pt,[o("div",Lt,[Tt,l(o("input",{type:"text","onUpdate:modelValue":s[22]||(s[22]=t=>e.value.first_name=t),class:d(["form-control",[p.value?e.value.first_name?"is-valid":"is-invalid":""]]),id:"validationTooltip01",placeholder:"First name"},null,2),[[n,e.value.first_name]]),Vt,Dt]),o("div",zt,[Ft,l(o("input",{type:"text","onUpdate:modelValue":s[23]||(s[23]=t=>e.value.last_name=t),class:d(["form-control",[p.value?e.value.last_name?"is-valid":"is-invalid":""]]),id:"validationTooltip02",placeholder:"Last name"},null,2),[[n,e.value.last_name]]),qt,Bt]),o("div",Zt,[At,o("div",Et,[Nt,l(o("input",{type:"text","onUpdate:modelValue":s[24]||(s[24]=t=>e.value.username=t),class:d(["form-control",[p.value?e.value.username?"is-valid":"is-invalid":""]]),id:"validationTooltipUsername",placeholder:"Username","aria-describedby":"validationTooltipUsernamePrepend"},null,2),[[n,e.value.username]]),Gt,$t])])]),o("div",Mt,[o("div",Ot,[Yt,l(o("input",{type:"text","onUpdate:modelValue":s[25]||(s[25]=t=>e.value.city=t),class:d([[p.value?e.value.city?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip03",placeholder:"City"},null,2),[[n,e.value.city]]),jt,Wt]),o("div",Xt,[Ht,l(o("input",{type:"text","onUpdate:modelValue":s[26]||(s[26]=t=>e.value.state=t),class:d([[p.value?e.value.state?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip04",placeholder:"State"},null,2),[[n,e.value.state]]),It,Jt]),o("div",Kt,[Qt,l(o("input",{type:"text","onUpdate:modelValue":s[27]||(s[27]=t=>e.value.zip=t),class:d([[p.value?e.value.zip?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip05",placeholder:"Zip"},null,2),[[n,e.value.zip]]),Rt,oi])]),o("div",si,[o("div",ti,[l(o("input",{type:"checkbox","onUpdate:modelValue":s[28]||(s[28]=t=>e.value.is_terms=t),class:d(["custom-control-input",[p.value?e.value.is_terms?"is-valid":"is-invalid":""]]),id:"invalidCheck3"},null,2),[[P,e.value.is_terms]]),ii,ei])]),li],40,St),o("div",ai,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[29]||(s[29]=t=>f("code6"))},di),r.value.includes("code6")?(v(),m("div",ci,[y(x,null,{default:g(()=>[ri]),_:1})])):k("",!0)])])])])])),[[M]])])])}}};export{bi as default};
