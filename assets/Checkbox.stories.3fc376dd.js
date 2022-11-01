var U=Object.defineProperty;var i=(e,t)=>U(e,"name",{value:t,configurable:!0});import{r}from"./index.fb3ad29a.js";import{a as R,$ as B}from"./index.module.423d803b.js";import{r as z}from"./index.40134452.js";import{j as p,F as g}from"./jsx-runtime.c9d53726.js";import{I as W,r as q}from"./IconBase.esm.8a70d4c0.js";import"./iframe.11dd131f.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}i(y,"_extends$1");function F(e,t=[]){let n=[];function o(c,f){const u=r.exports.createContext(f),d=n.length;n=[...n,f];function a(l){const{scope:h,children:m,...x}=l,N=(h==null?void 0:h[e][d])||u,$=r.exports.useMemo(()=>x,Object.values(x));return r.exports.createElement(N.Provider,{value:$},m)}i(a,"Provider");function b(l,h){const m=(h==null?void 0:h[e][d])||u,x=r.exports.useContext(m);if(x)return x;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${c}\``)}return i(b,"useContext"),a.displayName=c+"Provider",[a,b]}i(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=i(()=>{const c=n.map(f=>r.exports.createContext(f));return i(function(u){const d=(u==null?void 0:u[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return s.scopeName=e,[o,K(s,...t)]}i(F,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function K(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return i(function(c){const f=o.reduce((u,{useScope:d,scopeName:a})=>{const l=d(c)[`__scope${a}`];return{...u,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(K,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}i(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function w(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}i(w,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function X({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[o,s]=Y({defaultProp:t,onChange:n}),c=e!==void 0,f=c?e:o,u=w(n),d=r.exports.useCallback(a=>{if(c){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else s(a)},[c,e,s,u]);return[f,d]}i(X,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Y({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=w(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}i(Y,"$71cd76cc60e0454e$var$useUncontrolledState");function H(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(H,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const P=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function Z(e){const[t,n]=r.exports.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let f,u;if("borderBoxSize"in c){const d=c.borderBoxSize,a=Array.isArray(d)?d[0]:d;f=a.inlineSize,u=a.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}i(Z,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function G(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}i(G,"$fe963b355347cc68$export$3e6543de14f8614f");const M=i(e=>{const{present:t,children:n}=e,o=J(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=R(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function J(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),f=e?"mounted":"unmounted",[u,d]=G(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const a=S(o.current);c.current=u==="mounted"?a:"none"},[u]),P(()=>{const a=o.current,b=s.current;if(b!==e){const h=c.current,m=S(a);e?d("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(b&&h!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),P(()=>{if(t){const a=i(l=>{const m=S(o.current).includes(l.animationName);l.target===t&&m&&z.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),b=i(l=>{l.target===t&&(c.current=S(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",b),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",b),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.exports.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}i(J,"$921a889cee6df7e8$var$usePresence");function S(e){return(e==null?void 0:e.animationName)||"none"}i(S,"$921a889cee6df7e8$var$getAnimationName");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}i(E,"_extends");const Q=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],T=Q.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...f}=o,u=c?B:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(u,E({},f,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),I="Checkbox",[V,xe]=F(I),[ee,te]=V(I),ne=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:s,defaultChecked:c,required:f,disabled:u,value:d="on",onCheckedChange:a,...b}=e,[l,h]=r.exports.useState(null),m=R(t,v=>h(v)),x=r.exports.useRef(!1),N=l?Boolean(l.closest("form")):!0,[$=!1,D]=X({prop:s,defaultProp:c,onChange:a});return r.exports.createElement(ee,{scope:n,state:$,disabled:u},r.exports.createElement(T.button,y({type:"button",role:"checkbox","aria-checked":C($)?"mixed":$,"aria-required":f,"data-state":L($),"data-disabled":u?"":void 0,disabled:u,value:d},b,{ref:m,onKeyDown:A(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:A(e.onClick,v=>{D(O=>C(O)?!0:!O),N&&(x.current=v.isPropagationStopped(),x.current||v.stopPropagation())})})),N&&r.exports.createElement(se,{control:l,bubbles:!x.current,name:o,value:d,checked:$,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),oe="CheckboxIndicator",re=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=te(oe,n);return r.exports.createElement(M,{present:o||C(c.state)||c.state===!0},r.exports.createElement(T.span,y({"data-state":L(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),se=i(e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),f=H(n),u=Z(t);return r.exports.useEffect(()=>{const d=c.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:o});d.indeterminate=C(n),l.call(d,C(n)?!1:n),d.dispatchEvent(h)}},[f,n,o]),r.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}i(C,"$e698a72e93240346$var$isIndeterminate");function L(e){return C(e)?"indeterminate":e?"checked":"unchecked"}i(L,"$e698a72e93240346$var$getState");const ce=ne,ae=re;var k=new Map;k.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ie=i(function(t,n){return q(t,n,k)},"renderPath"),j=r.exports.forwardRef(function(e,t){return p(W,{...Object.assign({ref:t},e,{renderPath:ie})})});j.displayName="Check";const ue=j;function _(e){return p(ce,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",...e,children:p(ae,{asChild:!0,children:p(ue,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}i(_,"Checkbox");try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const $e={title:"Components/Checkbox",component:_,args:{},argTypes:{}},ve={},Ce=["Default"];export{ve as Default,Ce as __namedExportsOrder,$e as default};
//# sourceMappingURL=Checkbox.stories.3fc376dd.js.map
