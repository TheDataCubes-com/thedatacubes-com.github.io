import{_ as l}from"./Form.rFnS4mwj.js";import{r as s,c as m,b as c,u as r,o as p}from"./entry.SWCs2iiT.js";const d={class:"main consult"},y={__name:"get-consultation",setup(_){const e=s(null),a=s([{id:"name",text:"Name",inputType:"input",type:"text",required:!0},{id:"mail",text:"Email",inputType:"input",type:"email",required:!0},{id:"company",text:"Company",inputType:"input",type:"text",required:!1},{id:"message",text:"Message",inputType:"textarea",type:"text",required:!0}]),n=t=>{e.value&&clearTimeout(err.handler);var o=setTimeout(()=>e.value=null,5e3);e.value={message:t,handler:o}},i=t=>{n("some error")};return(t,o)=>{const u=l;return p(),m("div",d,[c(u,{error:r(e)&&r(e).message,fields:r(a),onSubmit:i,class:"consult__form"},null,8,["error","fields"])])}}};export{y as default};
