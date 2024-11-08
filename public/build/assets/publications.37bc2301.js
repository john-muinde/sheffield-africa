import{q as u,aa as g,ab as y,ai as o}from"./app-setting.176c951c.js";function L(){const p=u([]),f=u([]),h=u({name:"",parent_id:"",description:"",is_published:""}),d=g(),l=u({}),s=u(!1),r=y("$swal"),m=async(e=1,n="",a="",c="",t="",i="created_at",P="desc")=>{o.get("/api/publications?page="+e+"&search_id="+n+"&search_title="+a+"&search_parent_id="+c+"&search_global="+t+"&order_column="+i+"&order_direction="+P).then(b=>{p.value=b.data})};return{publicationList:f,publications:p,publication:h,getPublications:m,getPublicationList:async()=>{o.get("/api/publication-list").then(e=>{f.value=e.data.data})},getPublication:async e=>{o.get("/api/publications/"+e).then(n=>{h.value=n.data.data})},storePublication:async(e,n)=>{if(s.value)return;console.log(e),s.value=!0,l.value={};let a=new FormData;for(let t in e)e.hasOwnProperty(t)&&e.hasOwnProperty(t)&&a.append(t,e[t]);const c={headers:{"content-type":"multipart/form-data"}};o.post("/api/publications",a,c).then(t=>{d.push({name:"publications.create"}),e.name=null,e.content=null,e.type=null,e.is_published=null,e.main_image=null,r({icon:"success",title:"Publication saved successfully"})}).catch(t=>{var i;(i=t.response)!=null&&i.data&&(l.value=t.response.data.errors)}).finally(()=>s.value=!1)},updatePublication:async(e,n)=>{if(s.value)return;s.value=!0,l.value={};let a=new FormData;for(let t in e)e.hasOwnProperty(t)&&e.hasOwnProperty(t)&&a.append(t,e[t]);const c={headers:{"Content-Type":"multipart/form-data"}};a.append("_method","put"),console.log(a),await o.post("/api/publications/"+e.id,a,c).then(t=>{d.push({name:"publications.index"}),r({icon:"success",title:"Publication updated successfully"})}).catch(t=>{var i;(i=t.response)!=null&&i.data&&(l.value=t.response.data.errors)}).finally(()=>s.value=!1)},deletePublication:async e=>{r({title:"Are you sure?",text:"You won't be able to revert this action!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",confirmButtonColor:"#ef4444",timer:2e4,timerProgressBar:!0,reverseButtons:!0}).then(n=>{n.isConfirmed&&o.delete("/api/publications/"+e).then(a=>{m(),d.push({name:"publications.index"}),r({icon:"success",title:"Publication deleted successfully"})}).catch(a=>{r({icon:"error",title:"Something went wrong"})})})},validationErrors:l,isLoading:s}}export{L as u};
