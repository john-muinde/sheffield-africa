import{r as m,bB as t,bC as r,bS as b,bD as i,aQ as h,bG as y,Q as f,c8 as w,ab as n,bV as v,e as d,bP as p,bJ as u}from"./index-616505bb.js";/* empty css                     */import{_ as g}from"./highlight-07c3132d.js";import"./use-meta-2c1be1d3.js";import"./_commonjsHelpers-de833af9.js";/* empty css                        */const _={class:"layout-px-spacing"},x={class:"row"},k={class:"col-lg-12 layout-spacing layout-top-spacing"},B={class:"statbox panel box box-shadow"},j={class:"panel-body"},S={class:"container pricing-table"},C={class:"billing-cycle-radios mt-5"},F={class:"d-flex justify-content-center"},$={class:"switch s-icons s-outline s-outline-primary"},P={class:"code-section-container show-code"},H={key:0,class:"code-section text-start"},M={class:"col-lg-12 layout-spacing"},N={class:"statbox panel box box-shadow"},G={class:"panel-body"},T={class:"container pricing-table"},D={class:"code-section-container show-code"},A={key:0,class:"code-section text-start"},U={class:"col-lg-12 layout-spacing"},V={class:"statbox panel box box-shadow"},L={class:"panel-body"},W={class:"container pricing-table"},E={class:"code-section-container show-code"},I={key:0,class:"code-section text-start"},q={__name:"pricing_table",setup(R){const e=m([]),o=m(!1),c=l=>{e.value.includes(l)?e.value=e.value.filter(s=>s!=l):e.value.push(l)};return(l,s)=>(t(),r("div",_,[(t(),b(h,{to:"#breadcrumb"},[s[4]||(s[4]=i("ul",{class:"navbar-nav flex-row"},[i("li",null,[i("div",{class:"page-header"},[i("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[i("ol",{class:"breadcrumb"},[i("li",{class:"breadcrumb-item"},[i("a",{href:"javascript:;"},"Components")]),i("li",{class:"breadcrumb-item active","aria-current":"page"},[i("span",null,"Pricing Tables")])])])])])],-1))])),i("div",x,[i("div",k,[i("div",B,[s[11]||(s[11]=i("div",{class:"panel-heading"},[i("div",{class:"row"},[i("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[i("h4",null,"Toggle")])])],-1)),i("div",j,[i("div",S,[i("div",C,[i("div",{class:y(["radio billed-yearly-radio",{"billed-yearly-switch":o.value}])},[i("div",F,[s[6]||(s[6]=i("span",{class:"txt-monthly"},"Monthly",-1)),i("label",$,[f(i("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),type:"checkbox"},null,512),[[w,o.value]]),s[5]||(s[5]=i("span",{class:"slider round"},null,-1))]),s[7]||(s[7]=i("span",{class:"txt-yearly"},[n("Yearly "),i("span",{class:"badge rounded-pill badge-success"},"20% Off")],-1))])],2)]),s[10]||(s[10]=v('<div class="pricing-plans-container mt-5 d-md-flex d-block"><div class="pricing-plan mb-5"><h3>Cloud Hosting</h3><p class="margin-top-10"> cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM. </p><div class="pricing-plan-label billed-monthly-label"><strong>$25</strong>/ monthly </div><div class="pricing-plan-label billed-yearly-label"><strong>$290</strong>/ yearly </div><div class="pricing-plan-features mb-4"><strong>Cloud Hosting Features</strong><ul><li>Single Domain</li><li>50 GB SSD</li><li>1 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20"> Buy Now </button></div><div class="pricing-plan mb-5 mt-md-0 recommended"><div class="recommended-badge"> Most Popular </div><h3>VPS Hosting</h3><p class="margin-top-10"> cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM. </p><div class="pricing-plan-label billed-monthly-label"><strong>$70</strong>/ monthly </div><div class="pricing-plan-label billed-yearly-label"><strong>$670</strong>/ yearly </div><div class="pricing-plan-features mb-4"><strong>VPS Hosting Features</strong><ul><li>5 Domains</li><li>100 GB SSD</li><li>2 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20"> Buy Now </button></div><div class="pricing-plan mb-5"><h3>Business Hosting</h3><p class="margin-top-10"> cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM. </p><div class="pricing-plan-label billed-monthly-label"><strong>$115</strong>/ monthly </div><div class="pricing-plan-label billed-yearly-label"><strong>$1100</strong>/ yearly </div><div class="pricing-plan-features mb-4"><strong>Business Hosting Features</strong><ul><li>Unlimited Domains</li><li>1 TB SSD</li><li>5 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20"> Buy Now </button></div></div>',1)),i("div",P,[i("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:s[1]||(s[1]=a=>c("code1"))},s[8]||(s[8]=[i("span",null,"Code",-1)])),e.value.includes("code1")?(t(),r("div",H,[d(g,null,{default:p(()=>s[9]||(s[9]=[i("pre",null,`<div class="container pricing-table">
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
`,-1)])),_:1})])):u("",!0)])])])])]),i("div",M,[i("div",N,[s[15]||(s[15]=i("div",{class:"panel-heading"},[i("div",{class:"row"},[i("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[i("h4",null,"Animated")])])],-1)),i("div",G,[i("div",T,[s[14]||(s[14]=v('<div id="pricingWrapper" class="row"><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$49</span><h3 class="card-title mt-3 mb-1"> Freelancer </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center"> Support forum </li><li class="list-group-item d-flex justify-content-between align-items-center"> Free hosting </li><li class="list-group-item d-flex justify-content-between align-items-center"> 2 hours of support </li><li class="list-group-item d-flex justify-content-between align-items-center"> 5GB of storage space </li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$89</span><h3 class="card-title mt-3 mb-1"> Small business </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center"> Unlimited calls </li><li class="list-group-item d-flex justify-content-between align-items-center"> Free hosting </li><li class="list-group-item d-flex justify-content-between align-items-center"> 10 hours of support </li><li class="list-group-item d-flex justify-content-between align-items-center"> 100GB of storage space </li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$129</span><h3 class="card-title mt-3 mb-1"> Larger business </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center"> Unlimited calls </li><li class="list-group-item d-flex justify-content-between align-items-center"> Free hosting </li><li class="list-group-item d-flex justify-content-between align-items-center"> Unlimited hours of support </li><li class="list-group-item d-flex justify-content-between align-items-center"> 1TB of storage space </li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div></div>',1)),i("div",D,[i("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:s[2]||(s[2]=a=>c("code2"))},s[12]||(s[12]=[i("span",null,"Code",-1)])),e.value.includes("code2")?(t(),r("div",A,[d(g,null,{default:p(()=>s[13]||(s[13]=[i("pre",null,`<div class="container pricing-table">
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
`,-1)])),_:1})])):u("",!0)])])])])]),i("div",U,[i("div",V,[s[19]||(s[19]=i("div",{class:"panel-heading"},[i("div",{class:"row"},[i("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[i("h4",null,"Basic")])])],-1)),i("div",L,[i("div",W,[s[18]||(s[18]=i("section",{class:"pricing-section bg-7 mt-5"},[i("div",{class:"pricing pricing--norbu"},[i("div",{class:"pricing__item"},[i("h3",{class:"pricing__title"}," Beginner Savers "),i("p",{class:"pricing__sentence"}," For people who are starting out in the water saving business "),i("div",{class:"pricing__price"},[i("span",{class:"pricing__currency"},"$"),n("19"),i("span",{class:"pricing__period"},"/ month")]),i("ul",{class:"pricing__feature-list text-center"},[i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Free water saving e-book ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Free access to forums ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Beginners tips ")])]),i("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"}," Buy ")]),i("div",{class:"pricing__item pricing__item--featured"},[i("h3",{class:"pricing__title"}," Advanced Savers "),i("p",{class:"pricing__sentence"}," For experienced water savers who'd like to push their limits "),i("div",{class:"pricing__price"},[i("span",{class:"pricing__currency"},"$"),n("29"),i("span",{class:"pricing__period"},"/ month")]),i("ul",{class:"pricing__feature-list text-center"},[i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Free water saving e-book ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Free access to forums ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Advanced saving tips ")])]),i("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"}," Buy ")]),i("div",{class:"pricing__item"},[i("h3",{class:"pricing__title"}," Pro Savers "),i("p",{class:"pricing__sentence"}," For all the professionals who'd like to educate others, too "),i("div",{class:"pricing__price"},[i("span",{class:"pricing__currency"},"$"),n("79"),i("span",{class:"pricing__period"},"/ month")]),i("ul",{class:"pricing__feature-list text-center"},[i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Access to all books ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Unlimited board topics ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),n(" Beginners tips ")])]),i("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"}," Buy ")])])],-1)),i("div",E,[i("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:s[3]||(s[3]=a=>c("code3"))},s[16]||(s[16]=[i("span",null,"Code",-1)])),e.value.includes("code3")?(t(),r("div",I,[d(g,null,{default:p(()=>s[17]||(s[17]=[i("pre",null,`<div class="container pricing-table">
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
`,-1)])),_:1})])):u("",!0)])])])])])])]))}};export{q as default};
