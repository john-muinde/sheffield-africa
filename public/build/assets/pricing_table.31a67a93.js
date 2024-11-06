import{x as m,o as t,c as o,a2 as b,a as i,n as h,p as _,av as y,i as d,l as p,e as u,m as s,Y as v,at as f}from"./app-setting.08d4c509.js";/* empty css                     */import{_ as g}from"./highlight.a21e2a3d.js";import"./_commonjsHelpers.f037b798.js";/* empty css                        */const w={class:"layout-px-spacing"},x=i("ul",{class:"navbar-nav flex-row"},[i("li",null,[i("div",{class:"page-header"},[i("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[i("ol",{class:"breadcrumb"},[i("li",{class:"breadcrumb-item"},[i("a",{href:"javascript:;"},"Components")]),i("li",{class:"breadcrumb-item active","aria-current":"page"},[i("span",null,"Pricing Tables")])])])])])],-1),k={class:"row"},B={class:"col-lg-12 layout-spacing layout-top-spacing"},j={class:"statbox panel box box-shadow"},S=i("div",{class:"panel-heading"},[i("div",{class:"row"},[i("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[i("h4",null,"Toggle")])])],-1),F={class:"panel-body"},$={class:"container pricing-table"},C={class:"billing-cycle-radios mt-5"},P={class:"d-flex justify-content-center"},H=i("span",{class:"txt-monthly"},"Monthly",-1),M={class:"switch s-icons s-outline s-outline-primary"},N=i("span",{class:"slider round"},null,-1),T=i("span",{class:"txt-yearly"},[s("Yearly "),i("span",{class:"badge rounded-pill badge-success"},"20% Off")],-1),G=v('<div class="pricing-plans-container mt-5 d-md-flex d-block"><div class="pricing-plan mb-5"><h3>Cloud Hosting</h3><p class="margin-top-10">cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p><div class="pricing-plan-label billed-monthly-label"><strong>$25</strong>/ monthly</div><div class="pricing-plan-label billed-yearly-label"><strong>$290</strong>/ yearly</div><div class="pricing-plan-features mb-4"><strong>Cloud Hosting Features</strong><ul><li>Single Domain</li><li>50 GB SSD</li><li>1 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20">Buy Now</button></div><div class="pricing-plan mb-5 mt-md-0 recommended"><div class="recommended-badge">Most Popular</div><h3>VPS Hosting</h3><p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p><div class="pricing-plan-label billed-monthly-label"><strong>$70</strong>/ monthly</div><div class="pricing-plan-label billed-yearly-label"><strong>$670</strong>/ yearly</div><div class="pricing-plan-features mb-4"><strong>VPS Hosting Features</strong><ul><li>5 Domains</li><li>100 GB SSD</li><li>2 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20">Buy Now</button></div><div class="pricing-plan mb-5"><h3>Business Hosting</h3><p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p><div class="pricing-plan-label billed-monthly-label"><strong>$115</strong>/ monthly</div><div class="pricing-plan-label billed-yearly-label"><strong>$1100</strong>/ yearly</div><div class="pricing-plan-features mb-4"><strong>Business Hosting Features</strong><ul><li>Unlimited Domains</li><li>1 TB SSD</li><li>5 TB Premium Bandwidth</li></ul></div><button type="button" class="btn btn-dark w-100 button margin-top-20">Buy Now</button></div></div>',1),A={class:"code-section-container show-code"},D=i("span",null,"Code",-1),U=[D],V={key:0,class:"code-section text-start"},L=i("pre",null,`<div class="container pricing-table">
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
`,-1),W={class:"col-lg-12 layout-spacing"},E={class:"statbox panel box box-shadow"},I=i("div",{class:"panel-heading"},[i("div",{class:"row"},[i("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[i("h4",null,"Animated")])])],-1),R={class:"panel-body"},X={class:"container pricing-table"},Y=v('<div id="pricingWrapper" class="row"><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$49</span><h3 class="card-title mt-3 mb-1">Freelancer</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center">Support forum</li><li class="list-group-item d-flex justify-content-between align-items-center">Free hosting</li><li class="list-group-item d-flex justify-content-between align-items-center">2 hours of support</li><li class="list-group-item d-flex justify-content-between align-items-center">5GB of storage space</li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$89</span><h3 class="card-title mt-3 mb-1">Small business</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center">Unlimited calls</li><li class="list-group-item d-flex justify-content-between align-items-center">Free hosting</li><li class="list-group-item d-flex justify-content-between align-items-center">10 hours of support</li><li class="list-group-item d-flex justify-content-between align-items-center">100GB of storage space</li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div><div class="col-md-6 col-lg-4"><div class="card stacked mt-5"><div class="card-header pt-0"><span class="card-price">$129</span><h3 class="card-title mt-3 mb-1">Larger business</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="card-body"><ul class="list-group list-group-minimal mb-3"><li class="list-group-item d-flex justify-content-between align-items-center">Unlimited calls</li><li class="list-group-item d-flex justify-content-between align-items-center">Free hosting</li><li class="list-group-item d-flex justify-content-between align-items-center">Unlimited hours of support</li><li class="list-group-item d-flex justify-content-between align-items-center">1TB of storage space</li></ul><a href="" class="btn btn-block w-100 btn-primary">Buy Now</a></div></div></div></div>',1),O={class:"code-section-container show-code"},z=i("span",null,"Code",-1),q=[z],J={key:0,class:"code-section text-start"},K=i("pre",null,`<div class="container pricing-table">
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
`,-1),Q={class:"col-lg-12 layout-spacing"},Z={class:"statbox panel box box-shadow"},ii=i("div",{class:"panel-heading"},[i("div",{class:"row"},[i("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[i("h4",null,"Basic")])])],-1),si={class:"panel-body"},ei={class:"container pricing-table"},ni=i("section",{class:"pricing-section bg-7 mt-5"},[i("div",{class:"pricing pricing--norbu"},[i("div",{class:"pricing__item"},[i("h3",{class:"pricing__title"},"Beginner Savers"),i("p",{class:"pricing__sentence"},"For people who are starting out in the water saving business"),i("div",{class:"pricing__price"},[i("span",{class:"pricing__currency"},"$"),s("19"),i("span",{class:"pricing__period"},"/ month")]),i("ul",{class:"pricing__feature-list text-center"},[i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Free water saving e-book ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Free access to forums ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Beginners tips ")])]),i("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"},"Buy")]),i("div",{class:"pricing__item pricing__item--featured"},[i("h3",{class:"pricing__title"},"Advanced Savers"),i("p",{class:"pricing__sentence"},"For experienced water savers who'd like to push their limits"),i("div",{class:"pricing__price"},[i("span",{class:"pricing__currency"},"$"),s("29"),i("span",{class:"pricing__period"},"/ month")]),i("ul",{class:"pricing__feature-list text-center"},[i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Free water saving e-book ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Free access to forums ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Advanced saving tips ")])]),i("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"},"Buy")]),i("div",{class:"pricing__item"},[i("h3",{class:"pricing__title"},"Pro Savers"),i("p",{class:"pricing__sentence"},"For all the professionals who'd like to educate others, too"),i("div",{class:"pricing__price"},[i("span",{class:"pricing__currency"},"$"),s("79"),i("span",{class:"pricing__period"},"/ month")]),i("ul",{class:"pricing__feature-list text-center"},[i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Access to all books ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Unlimited board topics ")]),i("li",{class:"pricing__feature"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[i("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i("polyline",{points:"12 5 19 12 12 19"})]),s(" Beginners tips ")])]),i("button",{type:"button",variant:"default",class:"pricing__action mx-auto mb-4"},"Buy")])])],-1),ti={class:"code-section-container show-code"},li=i("span",null,"Code",-1),ai=[li],oi={key:0,class:"code-section text-start"},ci=i("pre",null,`<div class="container pricing-table">
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
`,-1),vi={__name:"pricing_table",setup(ri){const n=m([]),c=m(!1),r=l=>{n.value.includes(l)?n.value=n.value.filter(e=>e!=l):n.value.push(l)};return(l,e)=>(t(),o("div",w,[(t(),b(f,{to:"#breadcrumb"},[x])),i("div",k,[i("div",B,[i("div",j,[S,i("div",F,[i("div",$,[i("div",C,[i("div",{class:h(["radio billed-yearly-radio",{"billed-yearly-switch":c.value}])},[i("div",P,[H,i("label",M,[_(i("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a)},null,512),[[y,c.value]]),N]),T])],2)]),G,i("div",A,[i("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:e[1]||(e[1]=a=>r("code1"))},U),n.value.includes("code1")?(t(),o("div",V,[d(g,null,{default:p(()=>[L]),_:1})])):u("",!0)])])])])]),i("div",W,[i("div",E,[I,i("div",R,[i("div",X,[Y,i("div",O,[i("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:e[2]||(e[2]=a=>r("code2"))},q),n.value.includes("code2")?(t(),o("div",J,[d(g,null,{default:p(()=>[K]),_:1})])):u("",!0)])])])])]),i("div",Q,[i("div",Z,[ii,i("div",si,[i("div",ei,[ni,i("div",ti,[i("button",{type:"button",variant:"default",class:"toggle-code-snippet",onClick:e[3]||(e[3]=a=>r("code3"))},ai),n.value.includes("code3")?(t(),o("div",oi,[d(g,null,{default:p(()=>[ci]),_:1})])):u("",!0)])])])])])])]))}};export{vi as default};
