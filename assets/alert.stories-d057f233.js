import{j as e}from"./jsx-runtime-9c4ae004.js";import{f as H,d as b,a as A,U as S}from"./index.esm-2a34c341.js";import"./index-1b03fe98.js";import"./defineProperty-74566bd6.js";import"./getPrototypeOf-624f05c9.js";import"./index-6fd5a17b.js";import"./iframe-83749513.js";import"../sb-preview/runtime.js";const I=`<!-- @license CC0-1.0 -->

# Logius alert component
`,s=({type:f,icon:t,heading:v,textContent:C,headingLevel:j})=>{const w=()=>t==="info"?e.jsx("rhc-icon-info",{}):t==="success"?e.jsx("rhc-icon-succes",{}):t==="warning"?e.jsx("rhc-icon-warning",{}):t==="error"?e.jsx("rhc-icon-error",{}):e.jsx(e.Fragment,{});return e.jsxs(H,{type:f,children:[t&&e.jsx(b,{slot:"icon",children:e.jsx(w,{})}),e.jsx(A,{level:j,children:v}),e.jsx(S,{children:C})]})},F={title:"Logius/Alert",id:"logius-alert",component:s,argTypes:{type:{description:"Alert type",control:{type:"select"},options:["info","error","warning","ok"],table:{category:"Property"}},icon:{description:"Alert Icon",control:{type:"select"},options:["","info","error","warning","succes"],table:{category:"Webcomponent Slot"}},heading:{description:"Alert heading - used in default webcomponent slot",type:{name:"string"},table:{category:"Demo"}},headingLevel:{description:"Alert heading level",control:{type:"select"},options:[1,2,3,4,5,6],table:{category:"Demo"}},textContent:{description:"Alert content - used in default webcomponent slot",type:{name:"string"},table:{category:"Demo"}}},args:{type:"info",icon:"info",heading:"Heading",headingLevel:3,textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"},tags:["autodocs"],parameters:{docs:{description:{component:I}}},render:s},n={args:{type:"info",icon:"info",heading:"Heading",headingLevel:3,textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}},o={args:{type:"error",icon:"error",heading:"Heading",headingLevel:3,textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}},r={args:{type:"succes",icon:"succes",heading:"Heading",headingLevel:3,textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}},i={args:{type:"warning",icon:"warning",heading:"Heading",headingLevel:3,textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}};var a,c,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: 'info',
    icon: 'info',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'error',
    icon: 'error',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var l,u,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'succes',
    icon: 'succes',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,y,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    icon: 'warning',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const O=["Informative","Negative","Positive","Warning"];export{n as Informative,o as Negative,r as Positive,i as Warning,O as __namedExportsOrder,F as default};
//# sourceMappingURL=alert.stories-d057f233.js.map