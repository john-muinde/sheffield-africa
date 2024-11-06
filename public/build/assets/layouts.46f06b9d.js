/* empty css                     */import{_ as c}from"./highlight.66dc7e6e.js";import{x as y,a5 as u,o as t,c as e,a2 as _,a as o,p as b,i as n,l as r,e as d,Y as i,aq as g}from"./app-setting.366f23a7.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const x={class:"container"},k=o("ul",{class:"navbar-nav flex-row"},[o("li",null,[o("div",{class:"page-header"},[o("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[o("ol",{class:"breadcrumb"},[o("li",{class:"breadcrumb-item"},[o("a",{href:"javascript:;"},"Forms")]),o("li",{class:"breadcrumb-item active","aria-current":"page"},[o("span",null,"Layouts")])])])])])],-1),w={class:"container"},C={class:"nav sidenav"},F={class:"sidenav-content"},S=i('<a href="#flStackForm" class="nav-link">Stack Forms</a><a href="#flHorizontalForm" class="nav-link">Horizontal form</a><a href="#flRegistrationForm" class="nav-link">Registration Forms</a><a href="#flLoginForm" class="nav-link">Login Form</a><a href="#flFormsGrid" class="nav-link">Forms Grid</a><a href="#flInlineForm" class="nav-link">Inline forms</a><a href="#flAutoSizing" class="nav-link">Auto-sizing</a><a href="#flActionButtons" class="nav-link">Actions Buttons</a>',8),P=[S],E=i('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/layout" class="text-info"> https://getbootstrap.com/docs/5.0/forms/layout </a></div></div></div>',1),R={class:"row"},A={id:"flStackForm",class:"col-lg-12 layout-spacing layout-top-spacing"},I={class:"statbox panel box box-shadow"},N=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Stack Forms")])])],-1),H={class:"panel-body"},z=i('<form><div class="form-group mb-3"><input type="email" class="form-control" id="sEmail" aria-describedby="emailHelp1" placeholder="Email address"><small id="emailHelp1" class="block text-muted">We&#39;ll never share your email with anyone else.</small></div><div class="form-group"><input type="password" class="form-control" id="sPassword" placeholder="Password"></div><div><div class="custom-control custom-checkbox checkbox-primary"><input type="checkbox" class="custom-control-input" id="sChkbox"><label class="custom-control-label" for="sChkbox">Subscribe to weekly newsletter</label></div></div><button type="submit" class="btn btn-primary mt-4">Submit</button></form>',1),G={class:"code-section-container show-code"},U=o("span",null,"Code",-1),B=[U],$={key:0,class:"code-section text-start"},L=o("pre",null,`<!-- Stack Forms -->
<form>
    <div class="form-group mb-3">
        <input type="email" class="form-control" id="sEmail" aria-describedby="emailHelp1" placeholder="Email address" />
        <small id="emailHelp1" class="block text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="sPassword" placeholder="Password" />
    </div>
    <div>
        <div class="custom-control custom-checkbox checkbox-primary">
            <input type="checkbox" class="custom-control-input" id="sChkbox" />
            <label class="custom-control-label" for="sChkbox">Subscribe to weekly newsletter</label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary mt-4">Submit</button>
</form>
`,-1),D={id:"flHorizontalForm",class:"col-lg-12 layout-spacing"},j={class:"statbox panel box box-shadow"},Z=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Horizontal form")])])],-1),q={class:"panel-body"},W=i('<form><div class="form-group row"><label for="hEmail" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Email</label><div class="col-xl-10 col-lg-9 col-sm-10"><input type="email" class="form-control" id="hEmail" placeholder=""></div></div><div class="form-group row"><label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Password</label><div class="col-xl-10 col-lg-9 col-sm-10"><input type="password" class="form-control" id="hPassword" placeholder=""></div></div><fieldset class="form-group"><div class="row"><label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Choose Segements</label><div class="col-xl-10 col-lg-9 col-sm-10"><div class="radio-classic radio-primary custom-control custom-radio"><input type="radio" class="custom-control-input" id="hRadio1" name="classicRadio"><label class="custom-control-label" for="hRadio1"> Segements 1 </label></div><div class="radio-classic radio-primary custom-control custom-radio"><input type="radio" class="custom-control-input" id="hRadio2" name="classicRadio"><label class="custom-control-label" for="hRadio2"> Segements 2 </label></div><div class="radio-classic radio-primary custom-control custom-radio"><input type="radio" class="custom-control-input" id="hRadio3" name="classicRadio" disabled><label class="custom-control-label" for="hRadio3"> Segements 3 ( disabled ) </label></div></div></div></fieldset><div class="form-group row"><div class="col-sm-2">Apply</div><div class="col-sm-10"><div class="custom-control custom-checkbox checkbox-primary"><input type="checkbox" class="custom-control-input" id="hChkbox"><label class="custom-control-label" for="hChkbox">Terms Conditions</label></div></div></div><div class="form-group row"><div class="col-sm-10"><button type="submit" class="btn btn-primary mt-3">Lets Go</button></div></div></form>',1),J={class:"code-section-container show-code"},M=o("span",null,"Code",-1),V=[M],T={key:0,class:"code-section text-start"},Y=o("pre",null,`<!-- Horizontal Form -->
<form>
    <div class="form-group mb-3">
        <input type="email" class="form-control" id="sEmail" aria-describedby="emailHelp1" placeholder="Email address" />
        <small id="emailHelp1" clas<form>
    <div class="form-group row">
        <label for="hEmail" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Email</label>
        <div class="col-xl-10 col-lg-9 col-sm-10">
            <input type="email" class="form-control" id="hEmail" placeholder="" />
        </div>
    </div>
    <div class="form-group row">
        <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Password</label>
        <div class="col-xl-10 col-lg-9 col-sm-10">
            <input type="password" class="form-control" id="hPassword" placeholder="" />
        </div>
    </div>
    <fieldset class="form-group">
        <div class="row">
            <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Choose Segements</label>
            <div class="col-xl-10 col-lg-9 col-sm-10">
                <div class="radio-classic radio-primary custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="hRadio1" name="classicRadio" />
                    <label class="custom-control-label" for="hRadio1"> Segements 1 </label>
                </div>
                <div class="radio-classic radio-primary custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="hRadio2" name="classicRadio" />
                    <label class="custom-control-label" for="hRadio2"> Segements 2 </label>
                </div>
                <div class="radio-classic radio-primary custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="hRadio3" name="classicRadio" disabled />
                    <label class="custom-control-label" for="hRadio3"> Segements 3 ( disabled ) </label>
                </div>
            </div>
        </div>
    </fieldset>
    <div class="form-group row">
        <div class="col-sm-2">Apply</div>
        <div class="col-sm-10">
            <div class="custom-control custom-checkbox checkbox-primary">
                <input type="checkbox" class="custom-control-input" id="hChkbox" />
                <label class="custom-control-label" for="hChkbox">Terms Conditions</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-10">
            <button type="submit" class="btn btn-primary mt-3">Lets Go</button>
        </div>
    </div>
</form>s="block text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="sPassword" placeholder="Password" />
    </div>
    <div>
        <div class="custom-control custom-checkbox checkbox-primary">
            <input type="checkbox" class="custom-control-input" id="sChkbox" />
            <label class="custom-control-label" for="sChkbox">Subscribe to weekly newsletter</label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary mt-4">Submit</button>
</form>
`,-1),K={id:"flRegistrationForm",class:"col-lg-12 layout-spacing"},O={class:"statbox panel box box-shadow"},Q=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Registration Forms")])])],-1),X={class:"panel-body"},oo=i('<form><div class="form-group"><input type="email" class="form-control" id="rEmail" placeholder="Email address *"></div><div class="form-group"><input type="password" class="form-control" id="rPassword" placeholder="Password *"></div><div class="form-group"><input type="password" class="form-control" id="rConfirmPassword" placeholder="Confirm Password *"></div><small id="emailHelp2" class="block text-muted">*Required Fields</small><div class="form-group ps-0 mt-3"><div class="custom-control custom-checkbox checkbox-primary"><input type="checkbox" class="custom-control-input" id="rChkbox"><label class="custom-control-label" for="rChkbox">Subscribe to weekly newsletter</label></div></div><button type="submit" class="btn btn-primary mt-3">Submit</button></form>',1),so={class:"code-section-container show-code"},lo=o("span",null,"Code",-1),to=[lo],eo={key:0,class:"code-section text-start"},io=o("pre",null,`<!-- Registration Form -->
<form>
    <div class="form-group">
        <input type="email" class="form-control" id="rEmail" placeholder="Email address *" />
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="rPassword" placeholder="Password *" />
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="rConfirmPassword" placeholder="Confirm Password *" />
    </div>
    <small id="emailHelp2" class="block text-muted">*Required Fields</small>
    <div class="form-group ps-0 mt-3">
        <div class="custom-control custom-checkbox checkbox-primary">
            <input type="checkbox" class="custom-control-input" id="rChkbox" />
            <label class="custom-control-label" for="rChkbox">Subscribe to weekly newsletter</label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>
`,-1),ao={id:"flLoginForm",class:"col-lg-12 layout-spacing"},co={class:"statbox panel box box-shadow"},no=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Login Form")])])],-1),ro={class:"panel-body"},mo=i('<form><div class="form-group"><input type="text" class="form-control" id="lFullName" placeholder="Full Name *"></div><div class="form-group"><input type="email" class="form-control" id="lEmail" placeholder="Email address *"></div><div class="form-group"><input type="password" class="form-control" id="lPassword" placeholder="Password *"></div><small id="emailHelp" class="d-block text-muted">*Required Fields</small><button type="submit" class="btn btn-primary mt-4">Submit</button></form>',1),po={class:"code-section-container show-code"},uo=o("span",null,"Code",-1),bo=[uo],vo={key:0,class:"code-section text-start"},fo=o("pre",null,`<!-- Login Form -->
<form>
    <div class="form-group">
        <input type="text" class="form-control" id="lFullName" placeholder="Full Name *" />
    </div>
    <div class="form-group">
        <input type="email" class="form-control" id="lEmail" placeholder="Email address *" />
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="lPassword" placeholder="Password *" />
    </div>
    <small id="emailHelp" class="d-block text-muted">*Required Fields</small>
    <button type="submit" class="btn btn-primary mt-4">Submit</button>
</form>
`,-1),ho={id:"flFormsGrid",class:"col-lg-12 layout-spacing"},yo={class:"statbox panel box box-shadow"},_o=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Forms Grid")])])],-1),go={class:"panel-body"},xo=i('<form><div class="row"><div class="form-group col-md-6"><label for="inputEmail4">Email</label><input type="email" class="form-control" id="inputEmail4" placeholder="Email"></div><div class="form-group col-md-6"><label for="inputPassword4">Password</label><input type="password" class="form-control" id="inputPassword4" placeholder="Password"></div></div><div class="form-group"><label for="inputAddress">Address</label><input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></div><div class="form-group"><label for="inputAddress2">Address 2</label><input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></div><div class="row"><div class="form-group col-md-6"><label for="inputCity">City</label><input type="text" class="form-control" id="inputCity"></div><div class="form-group col-md-4"><label for="inputState">State</label><select id="inputState" class="form-select"><option selected>Choose...</option><option>...</option></select></div><div class="form-group col-md-2"><label for="inputZip">Zip</label><input type="text" class="form-control" id="inputZip"></div></div><div class="form-group"><div class="form-check ps-0"><div class="custom-control custom-checkbox checkbox-primary"><input type="checkbox" class="custom-control-input" id="gridCheck"><label class="custom-control-label" for="gridCheck">Check me out</label></div></div></div><button type="submit" class="btn btn-primary mt-3">Sign in</button></form>',1),ko={class:"code-section-container show-code"},wo=o("span",null,"Code",-1),Co=[wo],Fo={key:0,class:"code-section text-start"},So=o("pre",null,`<!-- Forms grid -->
<form>
    <div class="row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
        </div>
    </div>
    <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>
    <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div>
    <div class="row">
        <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
        </div>
    </div>
    <div class="form-group">
        <div class="form-check ps-0">
            <div class="custom-control custom-checkbox checkbox-primary">
                <input type="checkbox" class="custom-control-input" id="gridCheck" />
                <label class="custom-control-label" for="gridCheck">Check me out</label>
            </div>
        </div>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Sign in</button>
</form>
`,-1),Po={id:"flInlineForm",class:"col-lg-12 layout-spacing"},Eo={class:"statbox panel box box-shadow"},Ro=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Inline forms")])])],-1),Ao={class:"panel-body"},Io=i('<form class="row align-items-center justify-content-center"><div class="col-12 col-sm-auto"><label class="sr-only" for="inlineFormInputName2">Name</label><input type="text" class="form-control mb-2 me-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"></div><div class="col-12 col-sm-auto"><label class="sr-only" for="inlineFormInputGroupUsername2">Username</label><div class="input-group mb-2 me-sm-2"><div class="input-group-text">@</div><input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"></div></div><div class="col-12 col-sm-auto mb-2 me-sm-2"><div class="custom-control custom-checkbox checkbox-primary"><input type="checkbox" class="custom-control-input" id="inlineFormCheck"><label class="custom-control-label" for="inlineFormCheck">Remember me</label></div></div><div class="col-12 text-center"><button type="submit" class="btn btn-primary mb-2">Submit</button></div></form>',1),No={class:"code-section-container show-code"},Ho=o("span",null,"Code",-1),zo=[Ho],Go={key:0,class:"code-section text-start"},Uo=o("pre",null,`<!-- Inline Forms -->
<form class="row align-items-center justify-content-center">
    <div class="col-12 col-sm-auto">
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <input type="text" class="form-control mb-2 me-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
    </div>
    <div class="col-12 col-sm-auto">
        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div class="input-group mb-2 me-sm-2">
            <div class="input-group-text">@</div>
            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
        </div>
    </div>
    <div class="col-12 col-sm-auto mb-2 me-sm-2">
        <div class="custom-control custom-checkbox checkbox-primary">
            <input type="checkbox" class="custom-control-input" id="inlineFormCheck" />
            <label class="custom-control-label" for="inlineFormCheck">Remember me</label>
        </div>
    </div>
    <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
</form>
`,-1),Bo={id:"flAutoSizing",class:"col-lg-12 layout-spacing"},$o={class:"statbox panel box box-shadow"},Lo=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Auto-sizing")])])],-1),Do={class:"panel-body"},jo=i('<form><div class="row align-items-center justify-content-center"><div class="col-auto"><label class="sr-only" for="inlineFormInput">Name</label><input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"></div><div class="col-auto"><label class="sr-only" for="inlineFormInputGroup">Username</label><div class="input-group mb-2"><div class="input-group-text">@</div><input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"></div></div><div class="col-auto"><div class="form-check mb-2 ps-0"><div class="custom-control custom-checkbox checkbox-primary"><input type="checkbox" class="custom-control-input" id="autoSizingCheck"><label class="custom-control-label" for="autoSizingCheck">Remember me</label></div></div></div><div class="col-auto"><button type="submit" class="btn btn-primary">Submit</button></div></div></form>',1),Zo={class:"code-section-container show-code"},qo=o("span",null,"Code",-1),Wo=[qo],Jo={key:0,class:"code-section text-start"},Mo=o("pre",null,`<!-- Auto-sizing -->
<form>
    <div class="row align-items-center justify-content-center">
        <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">Name</label>
            <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
        </div>
        <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2">
                <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
            </div>
        </div>
        <div class="col-auto">
            <div class="form-check mb-2 ps-0">
                <div class="custom-control custom-checkbox checkbox-primary">
                    <input type="checkbox" class="custom-control-input" id="autoSizingCheck" />
                    <label class="custom-control-label" for="autoSizingCheck">Remember me</label>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>
`,-1),Vo={id:"flActionButtons",class:"col-lg-12"},To={class:"statbox panel box box-shadow"},Yo=o("div",{class:"panel-heading"},[o("div",{class:"row"},[o("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",null,"Actions Buttons")])])],-1),Ko={class:"panel-body"},Oo=i('<form class="form-vertical" action="#"><div class="form-group"><label class="control-label">First Name:</label><input type="text" name="first_name" class="form-control"></div><div class="form-group"><label class="control-label">Email:</label><div class="input-group"><div class="input-group-text">@</div><input type="text" name="email" class="form-control"></div></div><div class="form-group"><label class="control-label">Website:</label><input type="text" name="website" value="https://" class="form-control"></div><div class="form-group"><label class="control-label">Password:</label><div class="input-group"><input type="password" name="pass" class="form-control"><span class="input-group-addon"><i class="icon-user"></i></span></div></div><div class="form-group"><label class="control-label">Confirm Password:</label><div class="input-group"><input type="password" name="cpass" class="form-control"><span class="input-group-addon"><i class="icon-user"></i></span></div></div><input type="submit" value="Submit" class="btn btn-primary mt-3"></form>',1),Qo={class:"code-section-container show-code"},Xo=o("span",null,"Code",-1),os=[Xo],ss={key:0,class:"code-section text-start"},ls=o("pre",null,`<!-- Actions buttons -->
<form class="form-vertical" action="#">
    <div class="form-group">
        <label class="control-label">First Name:</label>
        <input type="text" name="first_name" class="form-control" />
    </div>
    <div class="form-group">
        <label class="control-label">Email:</label>
        <div class="input-group">
            <div class="input-group-text">@</div>
            <input type="text" name="email" class="form-control" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Website:</label>
        <input type="text" name="website" value="https://" class="form-control" />
    </div>
    <div class="form-group">
        <label class="control-label">Password:</label>
        <div class="input-group">
            <input type="password" name="pass" class="form-control" />
            <span class="input-group-addon"><i class="icon-user"></i></span>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Confirm Password:</label>
        <div class="input-group">
            <input type="password" name="cpass" class="form-control" />
            <span class="input-group-addon"><i class="icon-user"></i></span>
        </div>
    </div>
    <input type="submit" value="Submit" class="btn btn-primary mt-3" />
</form>
`,-1),rs={__name:"layouts",setup(ts){const l=y([]),a=p=>{l.value.includes(p)?l.value=l.value.filter(s=>s!=p):l.value.push(p)};return(p,s)=>{const v=u("scroll-spy-active"),f=u("scroll-spy-link"),h=u("scroll-spy");return t(),e("div",x,[(t(),_(g,{to:"#breadcrumb"},[k])),o("div",w,[o("div",C,[b((t(),e("div",F,P)),[[v],[f]])]),E,b((t(),e("div",R,[o("div",A,[o("div",I,[N,o("div",H,[z,o("div",G,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[0]||(s[0]=m=>a("code1"))},B),l.value.includes("code1")?(t(),e("div",$,[n(c,null,{default:r(()=>[L]),_:1})])):d("",!0)])])])]),o("div",D,[o("div",j,[Z,o("div",q,[W,o("div",J,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=m=>a("code2"))},V),l.value.includes("code2")?(t(),e("div",T,[n(c,null,{default:r(()=>[Y]),_:1})])):d("",!0)])])])]),o("div",K,[o("div",O,[Q,o("div",X,[oo,o("div",so,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[2]||(s[2]=m=>a("code3"))},to),l.value.includes("code3")?(t(),e("div",eo,[n(c,null,{default:r(()=>[io]),_:1})])):d("",!0)])])])]),o("div",ao,[o("div",co,[no,o("div",ro,[mo,o("div",po,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[3]||(s[3]=m=>a("code4"))},bo),l.value.includes("code4")?(t(),e("div",vo,[n(c,null,{default:r(()=>[fo]),_:1})])):d("",!0)])])])]),o("div",ho,[o("div",yo,[_o,o("div",go,[xo,o("div",ko,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[4]||(s[4]=m=>a("code5"))},Co),l.value.includes("code5")?(t(),e("div",Fo,[n(c,null,{default:r(()=>[So]),_:1})])):d("",!0)])])])]),o("div",Po,[o("div",Eo,[Ro,o("div",Ao,[Io,o("div",No,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[5]||(s[5]=m=>a("code6"))},zo),l.value.includes("code6")?(t(),e("div",Go,[n(c,null,{default:r(()=>[Uo]),_:1})])):d("",!0)])])])]),o("div",Bo,[o("div",$o,[Lo,o("div",Do,[jo,o("div",Zo,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[6]||(s[6]=m=>a("code7"))},Wo),l.value.includes("code7")?(t(),e("div",Jo,[n(c,null,{default:r(()=>[Mo]),_:1})])):d("",!0)])])])]),o("div",Vo,[o("div",To,[Yo,o("div",Ko,[Oo,o("div",Qo,[o("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[7]||(s[7]=m=>a("code8"))},os),l.value.includes("code8")?(t(),e("div",ss,[n(c,null,{default:r(()=>[ls]),_:1})])):d("",!0)])])])])])),[[h]])])])}}};export{rs as default};
