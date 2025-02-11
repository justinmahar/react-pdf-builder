"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[2990],{"./src/stories/signature/Signature.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomX:()=>CustomX,FullExample:()=>FullExample,NoX:()=>NoX,WithSwatch:()=>WithSwatch,WithX:()=>WithX,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_signature_Signature__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/signature/Signature.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Paragraph.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=_ref=>{let{paragraphText,...props}=_ref;return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.KQ.registerEmojiSource({format:"png",url:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_signature_Signature__WEBPACK_IMPORTED_MODULE_1__.t,{...props,style:{marginBottom:5}}),paragraphText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_4__.f,{children:paragraphText})]})};StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Signature",component:StoryComponent,parameters:{options:{showPanel:!1}}},NoX={args:{}},WithX={args:{x:!0}},CustomX={args:{x:!0,xValue:"❌",xProps:{style:{fontSize:20}}}},WithSwatch={args:{x:!0,swatch:"primary"}},FullExample={args:{x:!0,paragraphText:"Sign here"}};NoX.parameters={...NoX.parameters,docs:{...NoX.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...NoX.parameters?.docs?.source}}},WithX.parameters={...WithX.parameters,docs:{...WithX.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true\n  }\n}",...WithX.parameters?.docs?.source}}},CustomX.parameters={...CustomX.parameters,docs:{...CustomX.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true,\n    xValue: '❌',\n    xProps: {\n      style: {\n        fontSize: 20\n      }\n    }\n  }\n}",...CustomX.parameters?.docs?.source}}},WithSwatch.parameters={...WithSwatch.parameters,docs:{...WithSwatch.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true,\n    swatch: 'primary'\n  }\n}",...WithSwatch.parameters?.docs?.source}}},FullExample.parameters={...FullExample.parameters,docs:{...FullExample.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true,\n    paragraphText: 'Sign here'\n  }\n}",...FullExample.parameters?.docs?.source}}};const __namedExportsOrder=["NoX","WithX","CustomX","WithSwatch","FullExample"]},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/signature/Signature.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Signature});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_layout_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layout/Box.tsx"),_themes_Themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Signature=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_4__.B.default.build(),style,...props}=_ref;const themeProps=theme?.signatureProps,mergedProps={...themeProps,...props},styleOverride={},xStyleOverride={};if(void 0!==mergedProps.lineSize&&(styleOverride.borderBottom=mergedProps.lineSize),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.borderColor=swatchColor,styleOverride.color=swatchColor,xStyleOverride.color=swatchColor}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_layout_Box__WEBPACK_IMPORTED_MODULE_3__.a,{direction:"x",...mergedProps,style:{alignItems:"flex-end",...themeProps?.style,...styleOverride,...style},children:[mergedProps.x&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps.xProps,style:{...mergedProps.xProps?.style,...xStyleOverride},children:mergedProps.xValue??"X"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})]})};Signature.displayName="Signature";try{Signature.displayName="Signature",Signature.__docgenInfo={description:"",displayName:"Signature",props:{lineSize:{defaultValue:null,description:"",name:"lineSize",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"boolean"}},xProps:{defaultValue:null,description:"",name:"xProps",required:!1,type:{name:"TextProps"}},xValue:{defaultValue:null,description:"",name:"xValue",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/signature/Signature.tsx#Signature"]={docgenInfo:Signature.__docgenInfo,name:"Signature",path:"src/components/signature/Signature.tsx#Signature"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const themeProps=theme?.paragraphProps,mergedProps={...themeProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...themeProps?.style,...styleOverride,...style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}}}]);