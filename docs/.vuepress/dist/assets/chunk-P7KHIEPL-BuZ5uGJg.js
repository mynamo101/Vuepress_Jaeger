import{m as r,r as h,C as g,t as w}from"./mermaid.esm.min-DCrgKDgN.js";var $=r((e,t)=>{let i;return t==="sandbox"&&(i=h("#i"+e)),(t==="sandbox"?h(i.nodes()[0].contentDocument.body):h("body")).select(`[id="${e}"]`)},"getDiagramElement"),u=r((e,t,i,a)=>{e.attr("class",i);let{width:d,height:n,x:s,y:x}=c(e,t);g(e,n,d,a);let o=l(s,x,d,n,t);e.attr("viewBox",o),w.debug(`viewBox configured: ${o} with padding: ${t}`)},"setupViewPortForSVG"),c=r((e,t)=>{var a;let i=((a=e.node())==null?void 0:a.getBBox())||{width:0,height:0,x:0,y:0};return{width:i.width+t*2,height:i.height+t*2,x:i.x,y:i.y}},"calculateDimensionsWithPadding"),l=r((e,t,i,a,d)=>`${e-d} ${t-d} ${i} ${a}`,"createViewBox");export{u as $,$ as w};
