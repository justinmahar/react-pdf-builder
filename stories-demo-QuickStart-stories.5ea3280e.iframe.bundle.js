"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[3300],{"./src/stories/demo/QuickStart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{QuickStart:()=>QuickStart_stories_QuickStart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>QuickStart_stories});var react_pdf_browser=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),ReactPDFBuilder=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/ReactPDFBuilder.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const QuickStart=()=>{const RPB=new ReactPDFBuilder.p;return(0,jsx_runtime.jsx)(react_pdf_browser.TO,{style:{height:700,width:500},children:(0,jsx_runtime.jsx)(react_pdf_browser.yo,{children:(0,jsx_runtime.jsxs)(RPB.Page,{size:"A4",children:[(0,jsx_runtime.jsx)(RPB.Heading3,{rule:!0,children:"Hello, world!"}),(0,jsx_runtime.jsx)(RPB.Paragraph,{children:"Let's get started building the PDF."}),(0,jsx_runtime.jsxs)(RPB.Box,{direction:"y",gap:15,children:[(0,jsx_runtime.jsx)(RPB.Box,{direction:"x",children:(0,jsx_runtime.jsx)(RPB.Button,{href:"#",children:"Button"})}),(0,jsx_runtime.jsxs)(RPB.Box,{direction:"x",gap:15,children:[(0,jsx_runtime.jsxs)(RPB.Card,{swatch:"gray300",style:{marginBottom:0,width:"50%"},children:[(0,jsx_runtime.jsx)(RPB.CardHeader,{children:"Example"}),(0,jsx_runtime.jsx)(RPB.CardBody,{withHeader:!0,children:"This is a card with some text inside as an example"})]}),(0,jsx_runtime.jsxs)(RPB.Table,{bordered:!0,inverseStriped:!0,swatch:"cyan",style:{borderRadius:10,width:"50%"},children:[(0,jsx_runtime.jsxs)(RPB.TableRow,{swatch:"cyan",children:[(0,jsx_runtime.jsx)(RPB.TableCell,{children:"Header 1"}),(0,jsx_runtime.jsx)(RPB.TableCell,{children:"Header 2"})]}),(0,jsx_runtime.jsxs)(RPB.TableRow,{children:[(0,jsx_runtime.jsx)(RPB.TableCell,{children:"Cell A"}),(0,jsx_runtime.jsx)(RPB.TableCell,{children:"Cell Y"})]}),(0,jsx_runtime.jsxs)(RPB.TableRow,{children:[(0,jsx_runtime.jsx)(RPB.TableCell,{children:"Cell B"}),(0,jsx_runtime.jsx)(RPB.TableCell,{children:"Cell Z"})]})]})]})]})]})})})};QuickStart.displayName="QuickStart";const QuickStart_stories={title:"Demo/Demo",component:QuickStart,parameters:{options:{showPanel:!1}}},QuickStart_stories_QuickStart={args:{}};QuickStart_stories_QuickStart.parameters={...QuickStart_stories_QuickStart.parameters,docs:{...QuickStart_stories_QuickStart.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...QuickStart_stories_QuickStart.parameters?.docs?.source}}};const __namedExportsOrder=["QuickStart"]},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading3.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Heading3});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/Themes.ts")),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading3=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const mergedProps={...theme?.headingProps,...theme?.heading3Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading3Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...mergedThemeStyles,...styleOverride,...style},children})};Heading3.displayName="Heading3";try{Heading3.displayName="Heading3",Heading3.__docgenInfo={description:"",displayName:"Heading3",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading3.tsx#Heading3"]={docgenInfo:Heading3.__docgenInfo,name:"Heading3",path:"src/components/typography/Heading3.tsx#Heading3"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const themeProps=theme?.paragraphProps,mergedProps={...themeProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...themeProps?.style,...styleOverride,...style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}}}]);