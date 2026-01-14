import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DlbdfWqS.js";import{P as n}from"./index-CAeTlQV3.js";import"./preload-helper-PPVm8Dsz.js";const t=({label:s,checked:a=!1,onChange:u,size:l="md",disabled:d=!1})=>{const[i,f]=p.useState(a),h=()=>{if(d)return;const m=!i;f(m),u&&u(m)},g=l==="sm"?"w-[32px] h-[18px]":l==="lg"?"w-[56px] h-[32px]":"w-[44px] h-[24px]",x=l==="sm"?"w-[14px] h-[14px]":l==="lg"?"w-[28px] h-[28px]":"w-[20px] h-[20px]",b=l==="sm"?"translate-x-[14px]":l==="lg"?"translate-x-[24px]":"translate-x-[18px]";return e.jsxs("div",{className:"flex items-center gap-3",children:[s&&e.jsx("span",{className:"text-gray-800 text-sm",children:s}),e.jsx("button",{type:"button",onClick:h,disabled:d,className:`
          relative rounded-full transition-colors duration-300 focus:ring-2 focus:ring-black focus:ring-offset-1
          ${g}
          ${i?"bg-black ring-2 ring-black ring-offset-1":"bg-gray-300"}
          ${d?"opacity-60 cursor-not-allowed":"cursor-pointer"}
        `,children:e.jsx("span",{className:`
            absolute top-1/2 left-[3px] transform -translate-y-1/2 bg-white rounded-full transition-all duration-300
            ${x}
            ${i?b:""}
          `})})]})};t.propTypes={label:n.string,checked:n.bool,onChange:n.func,size:n.oneOf(["sm","md","lg"]),disabled:n.bool};t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}};const j={title:"UI/Switch",component:t,tags:["autodocs"]},c=()=>{const[s,a]=p.useState(!1);return e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(t,{checked:s,onChange:a})})},r=()=>{const[s,a]=p.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(t,{label:"Small",size:"sm",checked:s,onChange:a}),e.jsx(t,{label:"Medium",size:"md",checked:s,onChange:a}),e.jsx(t,{label:"Large",size:"lg",checked:s,onChange:a})]})},o=()=>e.jsx(t,{label:"Disabled",disabled:!0,checked:!0});c.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Sizes"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [on, setOn] = useState(false);
  return <div className="flex justify-center items-center">
            <Switch checked={on} onChange={setOn} />
        </div>;
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(true);
  return <div className="flex flex-col items-center gap-4">
            <Switch label="Small" size="sm" checked={selected} onChange={setSelected} />
            <Switch label="Medium" size="md" checked={selected} onChange={setSelected} />
            <Switch label="Large" size="lg" checked={selected} onChange={setSelected} />
        </div>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'() => <Switch label="Disabled" disabled checked />',...o.parameters?.docs?.source}}};const v=["Default","Sizes","Disabled"];export{c as Default,o as Disabled,r as Sizes,v as __namedExportsOrder,j as default};
