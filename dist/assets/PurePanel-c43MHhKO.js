import{ag as P,ah as v,cl as C,ai as $,al as y,r as i,H as h,D as w}from"./index-QfM5dVvM.js";import{g as O,P as S,a as B,c as k}from"./placements-o8q0ggcH.js";const x=e=>e?typeof e=="function"?e():e:null,j=e=>{const{componentCls:t,popoverColor:n,titleMinWidth:o,fontWeightStrong:r,innerPadding:a,boxShadowSecondary:s,colorTextHeading:l,borderRadiusLG:c,zIndexPopup:g,titleMarginBottom:m,colorBgElevated:u,popoverBg:d,titleBorderBottom:f,innerContentPadding:b,titlePadding:p}=e;return[{[t]:Object.assign(Object.assign({},$(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:g,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":u,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:c,boxShadow:s,padding:a},[`${t}-title`]:{minWidth:o,marginBottom:m,color:l,fontWeight:r,borderBottom:f,padding:p},[`${t}-inner-content`]:{color:n,padding:b}})},O(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},E=e=>{const{componentCls:t}=e;return{[t]:S.map(n=>{const o=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}},T=e=>{const{lineWidth:t,controlHeight:n,fontHeight:o,padding:r,wireframe:a,zIndexPopupBase:s,borderRadiusLG:l,marginXS:c,lineType:g,colorSplit:m,paddingSM:u}=e,d=n-o,f=d/2,b=d/2-t,p=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},y(e)),B({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:c,titlePadding:a?`${f}px ${p}px ${b}px`:0,titleBorderBottom:a?`${t}px ${g} ${m}`:"none",innerContentPadding:a?`${u}px ${p}px`:0})},W=P("Popover",e=>{const{colorBgElevated:t,colorText:n}=e,o=v(e,{popoverBg:t,popoverColor:n});return[j(o),E(o),C(o,"zoom-big")]},T,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var N=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const z=(e,t,n)=>!t&&!n?null:i.createElement(i.Fragment,null,t&&i.createElement("div",{className:`${e}-title`},x(t)),i.createElement("div",{className:`${e}-inner-content`},x(n))),I=e=>{const{hashId:t,prefixCls:n,className:o,style:r,placement:a="top",title:s,content:l,children:c}=e;return i.createElement("div",{className:h(t,n,`${n}-pure`,`${n}-placement-${a}`,o),style:r},i.createElement("div",{className:`${n}-arrow`}),i.createElement(k,Object.assign({},e,{className:t,prefixCls:n}),c||z(n,s,l)))},_=e=>{const{prefixCls:t,className:n}=e,o=N(e,["prefixCls","className"]),{getPrefixCls:r}=i.useContext(w),a=r("popover",t),[s,l,c]=W(a);return s(i.createElement(I,Object.assign({},o,{prefixCls:a,hashId:l,className:h(n,c)})))};export{_ as P,I as R,x as g,W as u};
