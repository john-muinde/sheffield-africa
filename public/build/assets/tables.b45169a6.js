/* empty css                     */import{_ as h}from"./highlight.82e6facf.js";import{x as g,y as S,a5 as w,o as t,c as s,a2 as N,a as e,p as y,F as u,g as _,i as p,l as v,e as b,Y as f,aq as I,t as o,n as m,d as A}from"./app-setting.27140836.js";/* empty css                        */import"./_commonjsHelpers.f037b798.js";const $={class:"container"},M=e("ul",{class:"navbar-nav flex-row"},[e("li",null,[e("div",{class:"page-header"},[e("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript:;"},"Tables")]),e("li",{class:"breadcrumb-item active","aria-current":"page"},[e("span",null,"Basic")])])])])])],-1),P={class:"container"},H={class:"nav sidenav"},L={class:"sidenav-content"},E=f('<a href="#tableSimple" class="nav-link">Simple</a><a href="#tableHover" class="nav-link">Hover</a><a href="#tableStriped" class="nav-link">Striped</a><a href="#tableLight" class="nav-link">Light</a><a href="#tableCaption" class="nav-link">Caption</a><a href="#tableProgress" class="nav-link">Progress</a><a href="#tableContextual" class="nav-link">Contextual</a><a href="#tableDropdown" class="nav-link">Dropdown</a><a href="#tableFooter" class="nav-link">Footer</a><a href="#tableCheckbox" class="nav-link">Checkbox</a>',10),T=[E],z=f('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/content/tables" class="text-info"> https://getbootstrap.com/docs/5.0/content/tables </a></div></div></div>',1),F={class:"row layout-top-spacing"},O={id:"tableSimple",class:"col-lg-12 col-12 layout-spacing"},q={class:"statbox panel box box-shadow"},R=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Simple Table")])])],-1),Y={class:"panel-body"},J={class:"table-responsive"},K={role:"table","aria-busy":"false","aria-colcount":"5",class:"table table-bordered",id:"__BVID__415"},X=e("thead",{role:"rowgroup"},[e("tr",{role:"row"},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1"},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2"},[e("div",null,"Date")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3"},[e("div",null,"Sale")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:"text-center"},[e("div",null,"status")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5","aria-label":"Action",class:"text-center"},[e("div")])])],-1),G={role:"rowgroup"},Q={"aria-colindex":"1",role:"cell"},U={"aria-colindex":"2",role:"cell"},W={"aria-colindex":"3",role:"cell"},Z={"aria-colindex":"4",role:"cell",class:"text-center"},ee=e("td",{"aria-colindex":"5",role:"cell",class:"text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2 icon"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e("line",{x1:"14",y1:"11",x2:"14",y2:"17"})])],-1),le={class:"code-section-container show-code"},oe=e("span",null,"Code",-1),te=[oe],se={key:0,class:"code-section text-start"},ae=e("div",null,[e("pre",null,`<div class="table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered" id="__BVID__415">
        <thead role="rowgroup">
            <tr role="row">
                <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="2"><div>Date</div></th>
                <th role="columnheader" scope="col" aria-colindex="3"><div>Sale</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>status</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div></div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="item in table_1" :key="item.name" role="row">
                <td aria-colindex="1" role="cell">{{ item.name }}</td>
                <td aria-colindex="2" role="cell">{{ item.date }}</td>
                <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                <td aria-colindex="4" role="cell" class="text-center">
                    <span :class="\`text-\${item.status_class}\`"> {{ item.status }} </span>
                </td>
                <td aria-colindex="5" role="cell" class="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-trash-2 icon"
                    >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),ne={id:"tableHover",class:"col-lg-12 col-12 layout-spacing"},ce={class:"statbox panel box box-shadow"},re=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Hover Table")])])],-1),ie={class:"panel-body"},de={class:"table-responsive"},he={role:"table","aria-busy":"false","aria-colcount":"5",class:"table table-hover table-bordered",id:"__BVID__415"},ue=e("thead",{role:"rowgroup"},[e("tr",{role:"row"},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1"},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2"},[e("div",null,"Date")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3"},[e("div",null,"Sale")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:"text-center"},[e("div",null,"status")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5","aria-label":"Action",class:"text-center"},[e("div")])])],-1),_e={role:"rowgroup"},pe={"aria-colindex":"1",role:"cell"},ve={"aria-colindex":"2",role:"cell"},be={"aria-colindex":"3",role:"cell"},me={"aria-colindex":"4",role:"cell",class:"text-center"},xe=e("td",{"aria-colindex":"5",role:"cell",class:"text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2 icon"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e("line",{x1:"14",y1:"11",x2:"14",y2:"17"})])],-1),ge={class:"code-section-container show-code"},we=e("span",null,"Code",-1),ye=[we],fe={key:0,class:"code-section text-start"},ke=e("div",null,[e("pre",null,`<div class="table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
        <thead role="rowgroup">
            <tr role="row">
                <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="2"><div>Date</div></th>
                <th role="columnheader" scope="col" aria-colindex="3"><div>Sale</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>status</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div></div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="item in table_1" :key="item.name" role="row">
                <td aria-colindex="1" role="cell">{{ item.name }}</td>
                <td aria-colindex="2" role="cell">{{ item.date }}</td>
                <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                <td aria-colindex="4" role="cell" class="text-center">
                    <span :class="\`text-\${item.status_class}\`"> {{ item.status }} </span>
                </td>
                <td aria-colindex="5" role="cell" class="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-trash-2 icon"
                    >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),Ce={id:"tableStriped",class:"col-lg-12 col-12 layout-spacing"},De={class:"statbox panel box box-shadow"},Be=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Striped Table")])])],-1),Ve={class:"panel-body"},je={class:"table-responsive"},Se={role:"table","aria-busy":"false","aria-colcount":"5",class:"table table-striped table-bordered",id:"__BVID__415"},Ne=e("thead",{role:"rowgroup"},[e("tr",{role:"row"},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1"},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2"},[e("div",null,"Date")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3"},[e("div",null,"Sale")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5","aria-label":"Action",class:"text-center"},[e("div",null,"action")])])],-1),Ie={role:"rowgroup"},Ae={"aria-colindex":"1",role:"cell"},$e={class:"d-flex"},Me={class:"usr-img-frame me-2 rounded-circle"},Pe=["src"],He={class:"align-self-center mb-0"},Le={"aria-colindex":"2",role:"cell"},Ee={"aria-colindex":"3",role:"cell"},Te=e("td",{"aria-colindex":"5",role:"cell",class:"text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x t-icon t-hover-icon"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})])],-1),ze={class:"code-section-container show-code"},Fe=e("span",null,"Code",-1),Oe=[Fe],qe={key:0,class:"code-section text-start"},Re=e("div",null,[e("pre",null,`<div class="table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table table-striped table-bordered" id="__BVID__415">
        <thead role="rowgroup">
            <tr role="row">
                <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="2"><div>Date</div></th>
                <th role="columnheader" scope="col" aria-colindex="3"><div>Sale</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div>action</div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="item in table_1" :key="item.name" role="row">
                <td aria-colindex="1" role="cell">
                    <div class="d-flex">
                        <div class="usr-img-frame me-2 rounded-circle">
                            <img alt="avatar" class="img-fluid rounded-circle" :src="'/assets/images/' + item.thumb" />
                        </div>
                        <p class="align-self-center mb-0">{{ item.name }}</p>
                    </div>
                </td>
                <td aria-colindex="2" role="cell">{{ item.date }}</td>
                <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                <td aria-colindex="5" role="cell" class="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x t-icon t-hover-icon"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),Ye={id:"tableLight",class:"col-lg-12 col-12 layout-spacing"},Je={class:"statbox panel box box-shadow"},Ke=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Table Light")])])],-1),Xe={class:"panel-body"},Ge={class:"table-light table-responsive"},Qe={role:"table","aria-busy":"false","aria-colcount":"5",class:"table b-table table-hover",id:"__BVID__310"},Ue=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1",class:""},[e("div",null,"#")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2",class:""},[e("div",null,"First Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3",class:""},[e("div",null,"Last Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:""},[e("div",null,"Email")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5","aria-label":"Action",class:"text-center"},[e("div")])])],-1),We={role:"row",class:""},Ze={"aria-colindex":"1",role:"cell",class:""},el={"aria-colindex":"2",role:"cell",class:""},ll={"aria-colindex":"3",role:"cell",class:""},ol={"aria-colindex":"4",role:"cell",class:""},tl=e("td",{"aria-colindex":"5",role:"cell",class:"text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x t-icon"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})])],-1),sl={class:"code-section-container show-code"},al=e("span",null,"Code",-1),nl=[al],cl={key:0,class:"code-section text-start"},rl=e("div",null,[e("pre",null,`<div class="table-light table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-hover" id="__BVID__310">
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class=""><div>#</div></th>
                <th role="columnheader" scope="col" aria-colindex="2" class=""><div>First Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Last Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Email</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div></div></th>
            </tr>
        </thead>
        <tbody v-for="(item, i) in table_1" :key="item.name" role="rowgroup">
            <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">{{ i + 1 }}</td>
                <td aria-colindex="2" role="cell" class="">{{ item["first name"] }}</td>
                <td aria-colindex="3" role="cell" class="">{{ item["last name"] }}</td>
                <td aria-colindex="4" role="cell" class="">{{ item.email }}</td>
                <td aria-colindex="5" role="cell" class="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x t-icon"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),il={id:"tableCaption",class:"col-lg-12 col-12 layout-spacing"},dl={class:"statbox panel box box-shadow"},hl=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Captions")])])],-1),ul={class:"panel-body"},_l={class:"table-responsive"},pl={role:"table","aria-busy":"false","aria-colcount":"5",class:"table b-table",id:"__BVID__319"},vl=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1",class:""},[e("div",null,"#")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2",class:""},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3",class:""},[e("div",null,"Email")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:""},[e("div",null,"Status")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5",class:""},[e("div",null,"Register")])])],-1),bl={role:"rowgroup"},ml={"aria-colindex":"1",role:"cell",class:""},xl={"aria-colindex":"2",role:"cell",class:"text-success"},gl={"aria-colindex":"3",role:"cell",class:""},wl={"aria-colindex":"4",role:"cell",class:""},yl={"aria-colindex":"5",role:"cell",class:""},fl={class:"code-section-container show-code"},kl=e("span",null,"Code",-1),Cl=[kl],Dl={key:0,class:"code-section text-start"},Bl=e("div",null,[e("pre",null,`<div class="table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table b-table" id="__BVID__319">
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class=""><div>#</div></th>
                <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Email</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Status</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" class=""><div>Register</div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="(item, i) in table_1" :key="item.name" role="row" class="">
                <td aria-colindex="1" role="cell" class="">{{ i + 1 }}</td>
                <td aria-colindex="2" role="cell" class="text-success">{{ item.name }}</td>
                <td aria-colindex="3" role="cell" class="">{{ item.email }}</td>
                <td aria-colindex="4" role="cell" class="">
                    <span
                        class="badge"
                        :class="{
                            'outline-badge-primary': item.status == 'Complete',
                            'outline-badge-secondary': item.status == 'Pending',
                            'outline-badge-info': item.status == 'In progress',
                            'outline-badge-danger': item.status == 'Canceled',
                        }"
                    >
                        {{ item.status }}
                    </span>
                </td>
                <td aria-colindex="5" role="cell" class="">{{ item.register }}</td>
            </tr>
        </tbody>
    </table>
</div>
    `)],-1),Vl={id:"tableProgress",class:"col-lg-12 col-12 layout-spacing"},jl={class:"statbox panel box box-shadow"},Sl=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Progress Table")])])],-1),Nl={class:"panel-body"},Il={class:"table-responsive"},Al={role:"table","aria-busy":"false","aria-colcount":"5",class:"table b-table table-bordered",id:"__BVID__328"},$l=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1",class:""},[e("div",null,"#")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2",class:""},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3",class:""},[e("div",null,"Progress")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:""},[e("div",null,"Sales")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5",class:"text-center"},[e("div",null,"Action")])])],-1),Ml={role:"rowgroup"},Pl={"aria-colindex":"1",role:"cell",class:""},Hl={"aria-colindex":"2",role:"cell",class:""},Ll={"aria-colindex":"3",role:"cell",class:""},El={class:"progress br-30",min:"0"},Tl={"aria-colindex":"4",role:"cell",class:""},zl=e("td",{"aria-colindex":"5",role:"cell",class:"text-center"},[e("ul",{class:"table-controls"},[e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Edit"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-edit-2"},[e("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})])])]),e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Delete"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e("line",{x1:"14",y1:"11",x2:"14",y2:"17"})])])])])],-1),Fl={class:"code-section-container show-code"},Ol=e("span",null,"Code",-1),ql=[Ol],Rl={key:0,class:"code-section text-start"},Yl=e("div",null,[e("pre",null,`<div class="table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-bordered" id="__BVID__328">
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class=""><div>#</div></th>
                <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Progress</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Sales</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" class="text-center"><div>Action</div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="(item, i) in table_1" :key="item.name" role="row" class="">
                <td aria-colindex="1" role="cell" class="">{{ i + 1 }}</td>
                <td aria-colindex="2" role="cell" class="">{{ item["first name"] + " " + item["last name"] }}</td>
                <td aria-colindex="3" role="cell" class="">
                    <div class="progress br-30" min="0">
                        <div
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="30"
                            class="progress-bar"
                            :class="\`bg-\${item.status_class}\`"
                            :style="\`width: \${item.sales}%\`"
                        ></div>
                    </div>
                </td>
                <td aria-colindex="4" role="cell" class="">
                    <p :class="i == 3 ? 'text-success' : 'text-danger'">{{ item.sales + "%" }}</p>
                </td>
                <td aria-colindex="5" role="cell" class="text-center">
                    <ul class="table-controls">
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
                                <svg> ... </svg>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                <svg> ... </svg>
                            </a>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),Jl={id:"tableContextual",class:"col-lg-12 col-12 layout-spacing"},Kl={class:"statbox panel box box-shadow"},Xl=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Contextual")])])],-1),Gl={class:"panel-body"},Ql={class:"contextual-table table-responsive"},Ul={role:"table",class:"table b-table",id:"__BVID__337"},Wl=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col",class:""},"#"),e("th",{role:"columnheader",scope:"col",class:""},"first name"),e("th",{role:"columnheader",scope:"col",class:""},"last name"),e("th",{role:"columnheader",scope:"col",class:""},"email")])],-1),Zl={role:"rowgroup"},eo={role:"cell",class:""},lo={role:"cell",class:""},oo={role:"cell",class:""},to={role:"cell",class:""},so={class:"code-section-container show-code"},ao=e("span",null,"Code",-1),no=[ao],co={key:0,class:"code-section text-start"},ro=e("div",null,[e("pre",null,`<div class="contextual-table table-responsive">
    <table role="table" class="table b-table" id="__BVID__337">
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" class="">#</th>
                <th role="columnheader" scope="col" class="">first name</th>
                <th role="columnheader" scope="col" class="">last name</th>
                <th role="columnheader" scope="col" class="">email</th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="(item, i) in table_2" :key="item.name" role="row" :class="'table-' + random_class(i)">
                <td role="cell" class="">{{ i + 1 }}</td>
                <td role="cell" class="">{{ item["first name"] }}</td>
                <td role="cell" class="">{{ item["first name"] }}</td>
                <td role="cell" class="">{{ item.email }}</td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),io={id:"tableDropdown",class:"col-lg-12 col-12 layout-spacing"},ho={class:"statbox panel box box-shadow"},uo=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Dropdown")])])],-1),_o={class:"panel-body"},po={class:"table-responsive"},vo={role:"table",class:"table b-table table-bordered",id:"__BVID__345"},bo=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col",class:""},"Name"),e("th",{role:"columnheader",scope:"col",class:""},"Date"),e("th",{role:"columnheader",scope:"col",class:""},"Sale"),e("th",{role:"columnheader",scope:"col",class:"text-center"},"Status"),e("th",{role:"columnheader",scope:"col",class:"text-center"},"Action")])],-1),mo={role:"rowgroup"},xo={role:"cell",class:""},go={role:"cell",class:""},wo={role:"cell",class:""},yo={role:"cell",class:""},fo=e("td",{role:"cell",class:"text-center"},[e("div",{class:"dropdown b-dropdown custom-dropdown btn-group",id:"__BVID__464"},[e("a",{"aria-haspopup":"true","aria-expanded":"false",href:"javascript:;",target:"_self",class:"btn dropdown-toggle btn-icon-only","data-bs-toggle":"dropdown",boundary:"body",id:"ddlcustom"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},[e("circle",{cx:"12",cy:"12",r:"1"}),e("circle",{cx:"19",cy:"12",r:"1"}),e("circle",{cx:"5",cy:"12",r:"1"})])]),e("ul",{role:"menu",tabindex:"-1",class:"dropdown-menu dropdown-menu-right","aria-labelledby":"ddlcustom",style:{}},[e("li",{role:"presentation"},[e("a",{role:"menuitem",href:"javascript:",target:"_self",class:"dropdown-item"},"Download")]),e("li",{role:"presentation"},[e("a",{role:"menuitem",href:"javascript:",target:"_self",class:"dropdown-item"},"Share")]),e("li",{role:"presentation"},[e("a",{role:"menuitem",href:"javascript:",target:"_self",class:"dropdown-item"},"Edit")]),e("li",{role:"presentation"},[e("a",{role:"menuitem",href:"javascript:",target:"_self",class:"dropdown-item"},"Delete")])])])],-1),ko={class:"code-section-container show-code"},Co=e("span",null,"Code",-1),Do=[Co],Bo={key:0,class:"code-section text-start"},Vo=e("div",null,[e("pre",null,`<div class="table-responsive">
    <table role="table" class="table b-table table-bordered" >
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" class="">Name</th>
                <th role="columnheader" scope="col" class="">Date</th>
                <th role="columnheader" scope="col" class="">Sale</th>
                <th role="columnheader" scope="col" class="text-center">Status</th>
                <th role="columnheader" scope="col" class="text-center">Action</th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="item in table_2" :key="item.name" role="row" class="">
                <td role="cell" class="">{{ item.name }}</td>
                <td role="cell" class="">{{ item.date }}</td>
                <td role="cell" class="">{{ item.sale }}</td>
                <td role="cell" class="">
                    <span class="badge" :class="\`badge-\${item.status_class}\`">{{ item.status }}</span>
                </td>
                <td role="cell" class="text-center">
                    <div class="dropdown b-dropdown custom-dropdown btn-group" id="__BVID__464">
                        <a
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="javascript:;"
                            target="_self"
                            class="btn dropdown-toggle btn-icon-only"
                            data-bs-toggle="dropdown"
                            boundary="body"
                            id="ddlcustom"
                        >
                            <svg> ... </svg>
                        </a>
                        <ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right" aria-labelledby="ddlcustom" style="">
                            <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Download</a></li>
                            <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Share</a></li>
                            <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Edit</a></li>
                            <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),jo={id:"tableFooter",class:"col-lg-12 col-12 layout-spacing"},So={class:"statbox panel box box-shadow"},No=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Table with Footer")])])],-1),Io={class:"panel-body"},Ao={class:"table-condensed table-responsive"},$o={role:"table","aria-busy":"false","aria-colcount":"4",class:"table b-table table-hover table-bordered",id:"__BVID__354"},Mo=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1",class:""},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2",class:""},[e("div",null,"Position")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3",class:""},[e("div",null,"Office")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:"text-center"},[e("div",null,"Action")])])],-1),Po={role:"rowgroup"},Ho={"aria-colindex":"1",role:"cell",class:""},Lo={"aria-colindex":"2",role:"cell",class:""},Eo={"aria-colindex":"3",role:"cell",class:""},To=e("td",{"aria-colindex":"4",role:"cell",class:"text-center"},[e("ul",{class:"table-controls"},[e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Edit"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check-circle text-primary"},[e("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e("polyline",{points:"22 4 12 14.01 9 11.01"})])])]),e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Delete"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle text-danger"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e("line",{x1:"9",y1:"9",x2:"15",y2:"15"})])])])])],-1),zo=e("tfoot",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1",class:""},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2",class:""},[e("div",null,"Position")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3",class:""},[e("div",null,"Office")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:"text-center"},[e("div",null,"Action")])])],-1),Fo={class:"code-section-container show-code"},Oo=e("span",null,"Code",-1),qo=[Oo],Ro={key:0,class:"code-section text-start"},Yo=e("div",null,[e("pre",null,`<div class="table-condensed table-responsive">
    <table role="table" aria-busy="false" aria-colcount="4" class="table b-table table-hover table-bordered" id="__BVID__354">
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class=""><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Position</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Office</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>Action</div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="item in table_1" :key="item.name" role="row" class="">
                <td aria-colindex="1" role="cell" class="">{{ item.name }}</td>
                <td aria-colindex="2" role="cell" class="">{{ item.position }}</td>
                <td aria-colindex="3" role="cell" class="">{{ item.office }}</td>
                <td aria-colindex="4" role="cell" class="text-center">
                    <ul class="table-controls">
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
                                <svg> ... </svg>line points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                <svg> ... </svg>
                            </a>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
        <tfoot role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class=""><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Position</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Office</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>Action</div></th>
            </tr>
        </tfoot>
    </table>
</div>
`)],-1),Jo={id:"tableCheckbox",class:"col-lg-12 col-12 layout-spacing"},Ko={class:"statbox panel box box-shadow"},Xo=e("div",{class:"panel-heading"},[e("div",{class:"row"},[e("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",null,"Checkboxes")])])],-1),Go={class:"panel-body"},Qo={class:"table-checkable table-highlight-head table-responsive"},Uo={role:"table","aria-busy":"false","aria-colcount":"5",class:"table b-table table-striped table-hover table-bordered",id:"__BVID__368"},Wo=e("thead",{role:"rowgroup",class:""},[e("tr",{role:"row",class:""},[e("th",{role:"columnheader",scope:"col","aria-colindex":"1",class:"text-center"},[e("div",{class:"checkbox-primary custom-control custom-checkbox"},[e("input",{variant:"primary",type:"checkbox",class:"custom-control-input",value:"true",id:"__BVID__372"}),e("label",{class:"custom-control-label",for:"__BVID__372"})])]),e("th",{role:"columnheader",scope:"col","aria-colindex":"2",class:""},[e("div",null,"Name")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"3",class:""},[e("div",null,"Date")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:""},[e("div",null,"Sale")]),e("th",{role:"columnheader",scope:"col","aria-colindex":"5",class:"text-center"},[e("div",null,"icons")])])],-1),Zo={role:"rowgroup"},et={"aria-colindex":"1",role:"cell",class:"text-center"},lt={class:"checkbox-primary custom-control custom-checkbox"},ot=["id"],tt=["for"],st={"aria-colindex":"2",role:"cell",class:""},at={"aria-colindex":"3",role:"cell",class:""},nt={"aria-colindex":"4",role:"cell",class:""},ct=e("td",{"aria-colindex":"5",role:"cell",class:"text-center"},[e("ul",{class:"table-controls"},[e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Settings"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-settings text-primary"},[e("circle",{cx:"12",cy:"12",r:"3"}),e("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})])])]),e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Edit"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-edit-2 text-success"},[e("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})])])]),e("li",null,[e("a",{href:"javascript:void(0);","data-bs-toggle":"tooltip",title:"Delete"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2 text-danger"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e("line",{x1:"14",y1:"11",x2:"14",y2:"17"})])])])])],-1),rt={class:"code-section-container show-code"},it=e("span",null,"Code",-1),dt=[it],ht={key:0,class:"code-section text-start"},ut=e("div",null,[e("pre",null,`<div class="table-checkable table-highlight-head table-responsive">
    <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-striped table-hover table-bordered" id="__BVID__368">
        <thead role="rowgroup" class="">
            <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class="text-center">
                    <div class="checkbox-primary custom-control custom-checkbox">
                        <input variant="primary" type="checkbox" class="custom-control-input" value="true" /><label
                            class="custom-control-label"
                        ></label>
                    </div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Date</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Sale</div></th>
                <th role="columnheader" scope="col" aria-colindex="5" class="text-center"><div>icons</div></th>
            </tr>
        </thead>
        <tbody role="rowgroup">
            <tr v-for="(item, i) in table_1" :key="item.name" role="row" class="">
                <td aria-colindex="1" role="cell" class="text-center">
                    <div class="checkbox-primary custom-control custom-checkbox">
                        <input variant="primary" type="checkbox" class="custom-control-input" value="true" :id="'chk' + i" /><label
                            class="custom-control-label"
                            :for="'chk' + i"
                        ></label>
                    </div>
                </td>
                <td aria-colindex="2" role="cell" class="">{{ item.name }}</td>
                <td aria-colindex="3" role="cell" class="">{{ item.date }}</td>
                <td aria-colindex="4" role="cell" class="">{{ item.sale }}</td>
                <td aria-colindex="5" role="cell" class="text-center">
                    <ul class="table-controls">
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Settings">
                                <svg> ... </svg>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
                                <svg> ... </svg>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                <svg> ... </svg>
                            </a>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`)],-1),gt={__name:"tables",setup(_t){const c=g([]),i=g([]),x=g([]);S(()=>{k(),C()});const d=n=>{c.value.includes(n)?c.value=c.value.filter(a=>a!=n):c.value.push(n)},k=()=>{setTimeout(()=>{var n=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));n.map(a=>new window.bootstrap.Tooltip(a))})},C=()=>{i.value=[{thumb:"boy.png",name:"Shaun Park","first name":"John","last name":"Doe",email:"johndoe@yahoo.com",date:"10/08/2020",sale:"320",sales:"29.56",status:"Complete",status_class:"success",register:"5 min ago",position:"Developer",office:"London"},{thumb:"girl-1.png",name:"Alma Clarke","first name":"Andy","last name":"King",email:"andyking@gmail.com",date:"11/08/2020",sale:"420",sales:"19.15",status:"Pending",status_class:"secondary",register:"10 min ago",position:"Designer",office:"New York"},{thumb:"girl-2.png",name:"Xavier","first name":"Lisa","last name":"Doe",email:"lisadoe@yahoo.com",date:"12/08/2020",sale:"130",sales:"39.00",status:"In progress",status_class:"info",register:"1 hour ago",position:"Accountant",office:"Amazon"},{thumb:"boy-2.png",name:"Vincent Carpenter","first name":"Vincent","last name":"Carpenter",email:"vinnyc@yahoo.com",date:"13/08/2020",sale:"260",sales:"88.03",status:"Canceled",status_class:"danger",register:"1 day ago",position:"Data Scientist",office:"Canada"}],x.value=[{thumb:"boy.png",name:"Amy Diaz","first name":"Amy","last name":"Diaz",email:"amydiaz@yahoo.com",date:"10/08/2020",sale:"320",sales:"29.56",status:"Complete",status_class:"success",register:"5 min ago"},{thumb:"girl-1.png",name:"Nia Hillyer","first name":"Nia","last name":"Hillyer",email:"niahill@gmail.com",date:"11/08/2020",sale:"420",sales:"19.15",status:"Pending",status_class:"secondary",register:"10 min ago"},{thumb:"girl-2.png",name:"Marry","first name":"Marry","last name":"McDonald",email:"marryMcD@yahoo.com",date:"12/08/2020",sale:"130",sales:"39.00",status:"In progress",status_class:"info",register:"1 hour ago"},{thumb:"boy-2.png",name:"Shaun Park","first name":"Shaun","last name":"Park",email:"park@yahoo.com",date:"13/08/2020",sale:"260",sales:"88.03",status:"Canceled",status_class:"danger",register:"1 day ago"}],x.value=i.value.concat(x.value)},D=n=>n==0?"default":n==1?"primary":n==2?"secondary":n==3?"success":n==4?"dark":n==5?"danger":n==6?"info":n==7?"warning":"dark";return(n,a)=>{const B=w("scroll-spy-active"),V=w("scroll-spy-link"),j=w("scroll-spy");return t(),s("div",$,[(t(),N(I,{to:"#breadcrumb"},[M])),e("div",P,[e("div",H,[y((t(),s("div",L,T)),[[B],[V]])]),z,y((t(),s("div",F,[e("div",O,[e("div",q,[R,e("div",Y,[e("div",J,[e("table",K,[X,e("tbody",G,[(t(!0),s(u,null,_(i.value,l=>(t(),s("tr",{key:l.name,role:"row"},[e("td",Q,o(l.name),1),e("td",U,o(l.date),1),e("td",W,o(l.sale),1),e("td",Z,[e("span",{class:m(`text-${l.status_class}`)},o(l.status),3)]),ee]))),128))])])]),e("div",le,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[0]||(a[0]=l=>d("code1"))},te),c.value.includes("code1")?(t(),s("div",se,[p(h,null,{default:v(()=>[ae]),_:1})])):b("",!0)])])])]),e("div",ne,[e("div",ce,[re,e("div",ie,[e("div",de,[e("table",he,[ue,e("tbody",_e,[(t(!0),s(u,null,_(i.value,l=>(t(),s("tr",{key:l.name,role:"row"},[e("td",pe,o(l.name),1),e("td",ve,o(l.date),1),e("td",be,o(l.sale),1),e("td",me,[e("span",{class:m(`text-${l.status_class}`)},o(l.status),3)]),xe]))),128))])])]),e("div",ge,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[1]||(a[1]=l=>d("code2"))},ye),c.value.includes("code2")?(t(),s("div",fe,[p(h,null,{default:v(()=>[ke]),_:1})])):b("",!0)])])])]),e("div",Ce,[e("div",De,[Be,e("div",Ve,[e("div",je,[e("table",Se,[Ne,e("tbody",Ie,[(t(!0),s(u,null,_(i.value,l=>(t(),s("tr",{key:l.name,role:"row"},[e("td",Ae,[e("div",$e,[e("div",Me,[e("img",{alt:"avatar",class:"img-fluid rounded-circle",src:"/assets/images/"+l.thumb},null,8,Pe)]),e("p",He,o(l.name),1)])]),e("td",Le,o(l.date),1),e("td",Ee,o(l.sale),1),Te]))),128))])])]),e("div",ze,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[2]||(a[2]=l=>d("code3"))},Oe),c.value.includes("code3")?(t(),s("div",qe,[p(h,null,{default:v(()=>[Re]),_:1})])):b("",!0)])])])]),e("div",Ye,[e("div",Je,[Ke,e("div",Xe,[e("div",Ge,[e("table",Qe,[Ue,(t(!0),s(u,null,_(i.value,(l,r)=>(t(),s("tbody",{key:l.name,role:"rowgroup"},[e("tr",We,[e("td",Ze,o(r+1),1),e("td",el,o(l["first name"]),1),e("td",ll,o(l["last name"]),1),e("td",ol,o(l.email),1),tl])]))),128))])]),e("div",sl,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[3]||(a[3]=l=>d("code4"))},nl),c.value.includes("code4")?(t(),s("div",cl,[p(h,null,{default:v(()=>[rl]),_:1})])):b("",!0)])])])]),e("div",il,[e("div",dl,[hl,e("div",ul,[e("div",_l,[e("table",pl,[vl,e("tbody",bl,[(t(!0),s(u,null,_(i.value,(l,r)=>(t(),s("tr",{key:l.name,role:"row",class:""},[e("td",ml,o(r+1),1),e("td",xl,o(l.name),1),e("td",gl,o(l.email),1),e("td",wl,[e("span",{class:m(["badge",{"outline-badge-primary":l.status=="Complete","outline-badge-secondary":l.status=="Pending","outline-badge-info":l.status=="In progress","outline-badge-danger":l.status=="Canceled"}])},o(l.status),3)]),e("td",yl,o(l.register),1)]))),128))])])]),e("div",fl,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[4]||(a[4]=l=>d("code5"))},Cl),c.value.includes("code5")?(t(),s("div",Dl,[p(h,null,{default:v(()=>[Bl]),_:1})])):b("",!0)])])])]),e("div",Vl,[e("div",jl,[Sl,e("div",Nl,[e("div",Il,[e("table",Al,[$l,e("tbody",Ml,[(t(!0),s(u,null,_(i.value,(l,r)=>(t(),s("tr",{key:l.name,role:"row",class:""},[e("td",Pl,o(r+1),1),e("td",Hl,o(l["first name"]+" "+l["last name"]),1),e("td",Ll,[e("div",El,[e("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"30",class:m(["progress-bar",`bg-${l.status_class}`]),style:A(`width: ${l.sales}%`)},null,6)])]),e("td",Tl,[e("p",{class:m(r==3?"text-success":"text-danger")},o(l.sales+"%"),3)]),zl]))),128))])])]),e("div",Fl,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[5]||(a[5]=l=>d("code6"))},ql),c.value.includes("code6")?(t(),s("div",Rl,[p(h,null,{default:v(()=>[Yl]),_:1})])):b("",!0)])])])]),e("div",Jl,[e("div",Kl,[Xl,e("div",Gl,[e("div",Ql,[e("table",Ul,[Wl,e("tbody",Zl,[(t(!0),s(u,null,_(x.value,(l,r)=>(t(),s("tr",{key:l.name,role:"row",class:m("table-"+D(r))},[e("td",eo,o(r+1),1),e("td",lo,o(l["first name"]),1),e("td",oo,o(l["first name"]),1),e("td",to,o(l.email),1)],2))),128))])])]),e("div",so,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[6]||(a[6]=l=>d("code7"))},no),c.value.includes("code7")?(t(),s("div",co,[p(h,null,{default:v(()=>[ro]),_:1})])):b("",!0)])])])]),e("div",io,[e("div",ho,[uo,e("div",_o,[e("div",po,[e("table",vo,[bo,e("tbody",mo,[(t(!0),s(u,null,_(x.value,l=>(t(),s("tr",{key:l.name,role:"row",class:""},[e("td",xo,o(l.name),1),e("td",go,o(l.date),1),e("td",wo,o(l.sale),1),e("td",yo,[e("span",{class:m(["badge",`badge-${l.status_class}`])},o(l.status),3)]),fo]))),128))])])]),e("div",ko,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[7]||(a[7]=l=>d("code8"))},Do),c.value.includes("code8")?(t(),s("div",Bo,[p(h,null,{default:v(()=>[Vo]),_:1})])):b("",!0)])])])]),e("div",jo,[e("div",So,[No,e("div",Io,[e("div",Ao,[e("table",$o,[Mo,e("tbody",Po,[(t(!0),s(u,null,_(i.value,l=>(t(),s("tr",{key:l.name,role:"row",class:""},[e("td",Ho,o(l.name),1),e("td",Lo,o(l.position),1),e("td",Eo,o(l.office),1),To]))),128))]),zo])]),e("div",Fo,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[8]||(a[8]=l=>d("code9"))},qo),c.value.includes("code9")?(t(),s("div",Ro,[p(h,null,{default:v(()=>[Yo]),_:1})])):b("",!0)])])])]),e("div",Jo,[e("div",Ko,[Xo,e("div",Go,[e("div",Qo,[e("table",Uo,[Wo,e("tbody",Zo,[(t(!0),s(u,null,_(i.value,(l,r)=>(t(),s("tr",{key:l.name,role:"row",class:""},[e("td",et,[e("div",lt,[e("input",{variant:"primary",type:"checkbox",class:"custom-control-input",value:"true",id:"chk"+r},null,8,ot),e("label",{class:"custom-control-label",for:"chk"+r},null,8,tt)])]),e("td",st,o(l.name),1),e("td",at,o(l.date),1),e("td",nt,o(l.sale),1),ct]))),128))])])]),e("div",rt,[e("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:a[9]||(a[9]=l=>d("code10"))},dt),c.value.includes("code10")?(t(),s("div",ht,[p(h,null,{default:v(()=>[ut]),_:1})])):b("",!0)])])])])])),[[j]])])])}}};export{gt as default};
