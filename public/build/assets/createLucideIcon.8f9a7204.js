import{c5 as i}from"./index.ea77a351.js";/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=({size:t,strokeWidth:e=2,absoluteStrokeWidth:r,color:s,iconNode:l,name:c,class:w,...n},{slots:a})=>i("svg",{...o,width:t||o.width,height:t||o.height,stroke:s||o.stroke,"stroke-width":r?Number(e)*24/Number(t):e,class:["lucide",`lucide-${d(c!=null?c:"icon")}`],...n},[...l.map(u=>i(...u)),...a.default?[a.default()]:[]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,e)=>(r,{slots:s})=>i(h,{...r,iconNode:e,name:t},s);export{k as c};
