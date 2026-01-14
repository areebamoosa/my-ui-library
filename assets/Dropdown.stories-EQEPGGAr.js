import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-DlbdfWqS.js";import{P as l}from"./index-CAeTlQV3.js";import"./preload-helper-PPVm8Dsz.js";const t=({label:d="Menu",options:n=[],align:p="left"})=>{const[c,r]=f.useState(!1),g=p==="right"?"left-0":"right-0";return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("div",{className:"relative inline-block text-left",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[e.jsx("button",{className:"px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors cursor-pointer",children:d}),c&&e.jsx("div",{className:`absolute ${g} mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10`,children:n.length>0?n.map((i,u)=>e.jsx("button",{onClick:i.onClick,className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",children:i.label},u)):e.jsx("p",{className:"px-4 py-2 text-sm text-gray-500",children:"No options"})})]})})};t.propTypes={label:l.string,options:l.arrayOf(l.shape({label:l.string,onClick:l.func})),align:l.oneOf(["left","right"])};t.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{defaultValue:{value:'"Menu"',computed:!1},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},align:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1}}};const y={title:"UI/Dropdown",component:t,tags:["autodocs"]},o=()=>e.jsx(t,{label:"Dropdown",align:"left",options:[{label:"Profile"},{label:"Settings"},{label:"Logout"}]}),a=()=>e.jsx(t,{label:"Left Aligned",align:"left",options:[{label:"Profile"},{label:"Settings"},{label:"Logout"}]}),s=()=>e.jsx(t,{label:"Right Aligned",align:"right",options:[{label:"Profile"},{label:"Settings"},{label:"Logout"}]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"LeftAligned"};s.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Dropdown label="Dropdown" align="left" options={[{
  label: "Profile"
}, {
  label: "Settings"
}, {
  label: "Logout"
}]} />`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Dropdown label="Left Aligned" align="left" options={[{
  label: "Profile"
}, {
  label: "Settings"
}, {
  label: "Logout"
}]} />`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Dropdown label="Right Aligned" align="right" options={[{
  label: "Profile"
}, {
  label: "Settings"
}, {
  label: "Logout"
}]} />`,...s.parameters?.docs?.source}}};const v=["Default","LeftAligned","RightAligned"];export{o as Default,a as LeftAligned,s as RightAligned,v as __namedExportsOrder,y as default};
