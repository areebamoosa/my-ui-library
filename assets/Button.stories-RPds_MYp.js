import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlbdfWqS.js";import{P as e}from"./index-CAeTlQV3.js";import"./preload-helper-PPVm8Dsz.js";const o=({children:s,onClick:i,disabled:c=!1,variant:l="white",width:d="w-32",height:p="h-10"})=>{const u="px-2 py-2 rounded-md font-medium transition focus:outline-none cursor-pointer",h={white:"border border-black text-black bg-white font-light hover:bg-black hover:text-white ",black:"text-white bg-black font-light hover:bg-white hover:text-black hover:border hover:border-black",transparent:"bg-transparent border border-black font-light hover:bg-black hover:text-white "};return n.jsx(n.Fragment,{children:n.jsx("button",{className:`${u} ${h[l]} ${d} ${p}`,onClick:i,disabled:c,children:s})})};o.propTypes={children:e.node.isRequired,variant:e.oneOf(["white","black","transparent"]),onClick:e.func,disabled:e.bool,width:e.string,height:e.string};o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},variant:{defaultValue:{value:'"white"',computed:!1},description:"",type:{name:"enum",value:[{value:'"white"',computed:!1},{value:'"black"',computed:!1},{value:'"transparent"',computed:!1}]},required:!1},width:{defaultValue:{value:'"w-32"',computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:'"h-10"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}};const v={title:"UI/Button",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["white","black","transparent"]},onClick:{action:"clicked"}}},t={args:{children:"White Button",variant:"white"}},r={args:{children:"Black Button",variant:"black"}},a={args:{children:"Transparent",variant:"transparent"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "White Button",
    variant: "white"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Black Button",
    variant: "black"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Transparent",
    variant: "transparent"
  }
}`,...a.parameters?.docs?.source}}};const k=["White","Black","Transparent"];export{r as Black,a as Transparent,t as White,k as __namedExportsOrder,v as default};
