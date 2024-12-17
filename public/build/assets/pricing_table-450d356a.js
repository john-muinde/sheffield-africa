import{v as e}from"./index-b929d4f8.js";/* empty css                     */import{_ as r}from"./highlight-e29f0b5b.js";import"./use-meta-8d74f409.js";import"./_commonjsHelpers-23102255.js";/* empty css                        */const o={class:"layout-px-spacing"},c={class:"row"},d={class:"col-lg-12 layout-spacing layout-top-spacing"},p={class:"statbox panel box box-shadow"},m={class:"panel-body"},u={class:"container pricing-table"},g={class:"billing-cycle-radios mt-5"},v={class:"d-flex justify-content-center"},b={class:"switch s-icons s-outline s-outline-primary"},h={class:"code-section-container show-code"},y={key:0,class:"code-section text-start"},f={class:"col-lg-12 layout-spacing"},w={class:"statbox panel box box-shadow"},_={class:"panel-body"},N={class:"container pricing-table"},V={class:"code-section-container show-code"},E={key:0,class:"code-section text-start"},x={class:"col-lg-12 layout-spacing"},k={class:"statbox panel box box-shadow"},B={class:"panel-body"},j={class:"container pricing-table"},C={class:"code-section-container show-code"},S={key:0,class:"code-section text-start"},A={__name:"pricing_table",setup(F){const n=e.ref([]),s=e.ref(!1),a=i=>{n.value.includes(i)?n.value=n.value.filter(t=>t!=i):n.value.push(i)};return(i,t)=>(e.openBlock(),e.createElementBlock("div",o,[(e.openBlock(),e.createBlock(e.Teleport,{to:"#breadcrumb"},[t[4]||(t[4]=e.createElementVNode("ul",{class:"navbar-nav flex-row"},[e.createElementVNode("li",null,[e.createElementVNode("div",{class:"page-header"},[e.createElementVNode("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[e.createElementVNode("ol",{class:"breadcrumb"},[e.createElementVNode("li",{class:"breadcrumb-item"},[e.createElementVNode("a",{href:"javascript:;"},"Components")]),e.createElementVNode("li",{class:"breadcrumb-item active","aria-current":"page"},[e.createElementVNode("span",null,"Pricing Tables")])])])])])],-1))])),e.createElementVNode("div",c,[e.createElementVNode("div",d,[e.createElementVNode("div",p,[t[11]||(t[11]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Toggle")])])],-1)),e.createElementVNode("div",m,[e.createElementVNode("div",u,[e.createElementVNode("div",g,[e.createElementVNode("div",{class:e.normalizeClass(["radio billed-yearly-radio",{"billed-yearly-switch":s.value}])},[e.createElementVNode("div",v,[t[6]||(t[6]=e.createElementVNode("span",{class:"txt-monthly"},"Monthly",-1)),e.createElementVNode("label",b,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),type:"checkbox"},null,512),[[e.vModelCheckbox,s.value]]),t[5]||(t[5]=e.createElementVNode("span",{class:"slider round"},null,-1))]),t[7]||(t[7]=e.createElementVNode("span",{class:"txt-yearly"},[e.createTextVNode("Yearly "),e.createElementVNode("span",{class:"badge rounded-pill badge-success"},"20% Off")],-1))])],2)]),t[10]||(t[10]=e.createStaticVNode('<div class="pricing-plans-container mt-5 d-md-flex d-block"><div class="pricing-plan mb-5"><h3>Cloud Hosting</h3><p class="margin-top-10"> cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM. </p><div class="pricing-plan-label billed-monthly-label"><strong>$25</strong>/ monthly </div><div class="pricing-plan-label billed-yearly-label"><strong>$290</strong>/ yearly </div><div class="pricing-plan-features mb-4"><strong>Cloud Hosting Features</strong><ul><li>Single Domain</li><li>50 GB SSD</li><li>1 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20"> Buy Now </button></div><div class="pricing-plan mb-5 mt-md-0 recommended"><div class="recommended-badge"> Most Popular </div><h3>VPS Hosting</h3><p class="margin-top-10"> cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM. </p><div class="pricing-plan-label billed-monthly-label"><strong>$70</strong>/ monthly </div><div class="pricing-plan-label billed-yearly-label"><strong>$670</strong>/ yearly </div><div class="pricing-plan-features mb-4"><strong>VPS Hosting Features</strong><ul><li>5 Domains</li><li>100 GB SSD</li><li>2 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20"> Buy Now </button></div><div class="pricing-plan mb-5"><h3>Business Hosting</h3><p class="margin-top-10"> cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM. </p><div class="pricing-plan-label billed-monthly-label"><strong>$115</strong>/ monthly </div><div class="pricing-plan-label billed-yearly-label"><strong>$1100</strong>/ yearly </div><div class="pricing-plan-features mb-4"><strong>Business Hosting Features</strong><ul><li>Unlimited Domains</li><li>1 TB SSD</li><li>5 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20"> Buy Now </button></div></div>',1)),e.createElementVNode("div",h,[e.createElementVNode("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:t[1]||(t[1]=l=>a("code1"))},t[8]||(t[8]=[e.createElementVNode("span",null,"Code",-1)])),n.value.includes("code1")?(e.openBlock(),e.createElementBlock("div",y,[e.createVNode(r,null,{default:e.withCtx(()=>t[9]||(t[9]=[e.createElementVNode("pre",null,`<div class="container pricing-table">
    <!-- Billing Cycle  -->
    <div class="billing-cycle-radios mt-5">
        <div class="radio billed-yearly-radio" :class="{ 'billed-yearly-switch': chk_demo }">
            <div class="d-flex justify-content-center">
                <span class="txt-monthly">Monthly</span>
                <label class="switch s-icons s-outline s-outline-primary">
                    <input type="checkbox" v-model="chk_demo" />
                    <span class="slider round"></span>
                </label>

                <span class="txt-yearly">Yearly <span class="badge rounded-pill badge-success">20% Off</span></span>
            </div>
        </div>
    </div>

    <!-- Pricing Plans Container -->
    <div class="pricing-plans-container mt-5 d-md-flex d-block">
        <div class="pricing-plan mb-5">
            <h3>Cloud Hosting</h3>
            <p class="margin-top-10">cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p>
            <div class="pricing-plan-label billed-monthly-label"><strong>$25</strong>/ monthly</div>
            <div class="pricing-plan-label billed-yearly-label"><strong>$290</strong>/ yearly</div>
            <div class="pricing-plan-features mb-4">
                <strong>Cloud Hosting Features</strong>
                <ul>
                    <li>Single Domain</li>
                    <li>50 GB SSD</li>
                    <li>1 TB Premium Bandwidth</li>
                </ul>
            </div>
            <button type="button" class="btn btn-dark w-100 button margin-top-20">Buy Now</button>
        </div>
        <div class="pricing-plan mb-5 mt-md-0 recommended">
            <div class="recommended-badge">Most Popular</div>
            <h3>VPS Hosting</h3>
            <p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>
            <div class="pricing-plan-label billed-monthly-label"><strong>$70</strong>/ monthly</div>
            <div class="pricing-plan-label billed-yearly-label"><strong>$670</strong>/ yearly</div>
            <div class="pricing-plan-features mb-4">
                <strong>VPS Hosting Features</strong>
                <ul>
                    <li>5 Domains</li>
                    <li>100 GB SSD</li>
                    <li>2 TB Premium Bandwidth</li>
                </ul>
            </div>
            <button type="button" class="btn btn-dark w-100 button margin-top-20">Buy Now</button>
        </div>
        <div class="pricing-plan mb-5">
            <h3>Business Hosting</h3>
            <p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>
            <div class="pricing-plan-label billed-monthly-label"><strong>$115</strong>/ monthly</div>
            <div class="pricing-plan-label billed-yearly-label"><strong>$1100</strong>/ yearly</div>
            <div class="pricing-plan-features mb-4">
                <strong>Business Hosting Features</strong>
                <ul>
                    <li>Unlimited Domains</li>
                    <li>1 TB SSD</li>
                    <li>5 TB Premium Bandwidth</li>
                </ul>
            </div>
            <button type="button" class="btn btn-dark w-100 button margin-top-20">Buy Now</button>
        </div>
    </div>
</div>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])]),e.createElementVNode("div",f,[e.createElementVNode("div",w,[t[15]||(t[15]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Animated")])])],-1)),e.createElementVNode("div",_,[e.createElementVNode("div",N,[t[14]||(t[14]=e.createStaticVNode('<div id="pricingWrapper" class="row"><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$49</span><h3 class="card-title mt-3 mb-1"> Freelancer </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center"> Support forum </li><li class="list-group-item d-flex justify-content-between align-items-center"> Free hosting </li><li class="list-group-item d-flex justify-content-between align-items-center"> 2 hours of support </li><li class="list-group-item d-flex justify-content-between align-items-center"> 5GB of storage space </li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$89</span><h3 class="card-title mt-3 mb-1"> Small business </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center"> Unlimited calls </li><li class="list-group-item d-flex justify-content-between align-items-center"> Free hosting </li><li class="list-group-item d-flex justify-content-between align-items-center"> 10 hours of support </li><li class="list-group-item d-flex justify-content-between align-items-center"> 100GB of storage space </li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$129</span><h3 class="card-title mt-3 mb-1"> Larger business </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center"> Unlimited calls </li><li class="list-group-item d-flex justify-content-between align-items-center"> Free hosting </li><li class="list-group-item d-flex justify-content-between align-items-center"> Unlimited hours of support </li><li class="list-group-item d-flex justify-content-between align-items-center"> 1TB of storage space </li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div></div>',1)),e.createElementVNode("div",V,[e.createElementVNode("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:t[2]||(t[2]=l=>a("code2"))},t[12]||(t[12]=[e.createElementVNode("span",null,"Code",-1)])),n.value.includes("code2")?(e.openBlock(),e.createElementBlock("div",E,[e.createVNode(r,null,{default:e.withCtx(()=>t[13]||(t[13]=[e.createElementVNode("pre",null,`<div class="container pricing-table">
    <div id="pricingWrapper" class="row">
        <div class="col-md-6 col-lg-4">
            <div class="card stacked mt-5">
                <div class="card-header pt-0">
                    <span class="card-price">$49</span>
                    <h3 class="card-title mt-3 mb-1">Freelancer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-minimal mb-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Support forum</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Free hosting</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">2 hours of support</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">5GB of storage space</li>
                    </ul>
                    <a href="" class="btn btn-block w-100 btn-primary">Buy Now</a>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-4">
            <div class="card stacked mt-5">
                <div class="card-header pt-0">
                    <span class="card-price">$89</span>
                    <h3 class="card-title mt-3 mb-1">Small business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-minimal mb-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Unlimited calls</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Free hosting</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">10 hours of support</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">100GB of storage space</li>
                    </ul>
                    <a href="" class="btn btn-block w-100 btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card stacked mt-5">
                <div class="card-header pt-0">
                    <span class="card-price">$129</span>
                    <h3 class="card-title mt-3 mb-1">Larger business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-minimal mb-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Unlimited calls</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Free hosting</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Unlimited hours of support</li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">1TB of storage space</li>
                    </ul>
                    <a href="" class="btn btn-block w-100 btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</div>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])]),e.createElementVNode("div",x,[e.createElementVNode("div",k,[t[19]||(t[19]=e.createElementVNode("div",{class:"panel-heading"},[e.createElementVNode("div",{class:"row"},[e.createElementVNode("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[e.createElementVNode("h4",null,"Basic")])])],-1)),e.createElementVNode("div",B,[e.createElementVNode("div",j,[t[18]||(t[18]=e.createElementVNode("section",{class:"pricing-section bg-7 mt-5"},[e.createElementVNode("div",{class:"pricing pricing--norbu"},[e.createElementVNode("div",{class:"pricing__item"},[e.createElementVNode("h3",{class:"pricing__title"}," Beginner Savers "),e.createElementVNode("p",{class:"pricing__sentence"}," For people who are starting out in the water saving business "),e.createElementVNode("div",{class:"pricing__price"},[e.createElementVNode("span",{class:"pricing__currency"},"$"),e.createTextVNode("19"),e.createElementVNode("span",{class:"pricing__period"},"/ month")]),e.createElementVNode("ul",{class:"pricing__feature-list text-center"},[e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Free water saving e-book ")]),e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Free access to forums ")]),e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Beginners tips ")])]),e.createElementVNode("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"}," Buy ")]),e.createElementVNode("div",{class:"pricing__item pricing__item--featured"},[e.createElementVNode("h3",{class:"pricing__title"}," Advanced Savers "),e.createElementVNode("p",{class:"pricing__sentence"}," For experienced water savers who'd like to push their limits "),e.createElementVNode("div",{class:"pricing__price"},[e.createElementVNode("span",{class:"pricing__currency"},"$"),e.createTextVNode("29"),e.createElementVNode("span",{class:"pricing__period"},"/ month")]),e.createElementVNode("ul",{class:"pricing__feature-list text-center"},[e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Free water saving e-book ")]),e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Free access to forums ")]),e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Advanced saving tips ")])]),e.createElementVNode("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"}," Buy ")]),e.createElementVNode("div",{class:"pricing__item"},[e.createElementVNode("h3",{class:"pricing__title"}," Pro Savers "),e.createElementVNode("p",{class:"pricing__sentence"}," For all the professionals who'd like to educate others, too "),e.createElementVNode("div",{class:"pricing__price"},[e.createElementVNode("span",{class:"pricing__currency"},"$"),e.createTextVNode("79"),e.createElementVNode("span",{class:"pricing__period"},"/ month")]),e.createElementVNode("ul",{class:"pricing__feature-list text-center"},[e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Access to all books ")]),e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Unlimited board topics ")]),e.createElementVNode("li",{class:"pricing__feature"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[e.createElementVNode("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.createElementVNode("polyline",{points:"12 5 19 12 12 19"})]),e.createTextVNode(" Beginners tips ")])]),e.createElementVNode("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"}," Buy ")])])],-1)),e.createElementVNode("div",C,[e.createElementVNode("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:t[3]||(t[3]=l=>a("code3"))},t[16]||(t[16]=[e.createElementVNode("span",null,"Code",-1)])),n.value.includes("code3")?(e.openBlock(),e.createElementBlock("div",S,[e.createVNode(r,null,{default:e.withCtx(()=>t[17]||(t[17]=[e.createElementVNode("pre",null,`<div class="container pricing-table">
    <section class="pricing-section bg-7 mt-5">
        <div class="pricing pricing--norbu">
            <div class="pricing__item">
                <h3 class="pricing__title">Beginner Savers</h3>
                <p class="pricing__sentence">For people who are starting out in the water saving business</p>
                <div class="pricing__price"><span class="pricing__currency">$</span>19<span class="pricing__period">/ month</span></div>
                <ul class="pricing__feature-list text-center">
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Free water saving e-book
                    </li>
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Free access to forums
                    </li>
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Beginners tips
                    </li>
                </ul>
                <button type="button" variant="default" class="pricing__action mx-auto mb-4">Buy</button>
            </div>
            <div class="pricing__item pricing__item--featured">
                <h3 class="pricing__title">Advanced Savers</h3>
                <p class="pricing__sentence">For experienced water savers who'd like to push their limits</p>
                <div class="pricing__price"><span class="pricing__currency">$</span>29<span class="pricing__period">/ month</span></div>
                <ul class="pricing__feature-list text-center">
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Free water saving e-book
                    </li>
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Free access to forums
                    </li>
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Advanced saving tips
                    </li>
                </ul>
                <button type="button" variant="default" class="pricing__action mx-auto mb-4">Buy</button>
            </div>
            <div class="pricing__item">
                <h3 class="pricing__title">Pro Savers</h3>
                <p class="pricing__sentence">For all the professionals who'd like to educate others, too</p>
                <div class="pricing__price"><span class="pricing__currency">$</span>79<span class="pricing__period">/ month</span></div>
                <ul class="pricing__feature-list text-center">
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Access to all books
                    </li>
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Unlimited board topics
                    </li>
                    <li class="pricing__feature">
                        <svg> ... </svg>
                        Beginners tips
                    </li>
                </ul>
                <button type="button" variant="default" class="pricing__action mx-auto mb-4">Buy</button>
            </div>
        </div>
    </section>
</div>
`,-1)])),_:1})])):e.createCommentVNode("",!0)])])])])])])]))}};export{A as default};
