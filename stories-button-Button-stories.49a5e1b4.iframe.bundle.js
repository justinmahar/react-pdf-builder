"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[952],{"./src/stories/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Pill:()=>Pill,Regular:()=>Regular,WithHref:()=>WithHref,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/Button.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layout/Box.tsx"),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>{const theme=_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_4__.B.default.build(),elements=[...Object.keys(theme.colorScheme?.colors??{}),...Object.keys(theme.colorScheme?.theme??{}),...Object.keys(theme.colorScheme?.greyscale??{})].map((swatch=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__.$,{wrap:!1,theme,swatch,...props,children:swatch.substring(0,1).toUpperCase()+swatch.substring(1)},swatch)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{pageProps:{theme},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__.a,{direction:"x",gap:15,style:{justifyContent:"center",flexWrap:"wrap"},children:[elements,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__.$,{children:"Default"})]})})};StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Button",component:StoryComponent,parameters:{options:{showPanel:!1}}},Regular={args:{}},Pill={args:{pill:!0}},WithHref={args:{href:"https://github.com/justinmahar/react-pdf-builder"}},Custom={args:{style:{borderRadius:20,width:250,fontSize:30,borderColor:"black",borderWidth:1}}};Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Regular.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:"{\n  args: {\n    pill: true\n  }\n}",...Pill.parameters?.docs?.source}}},WithHref.parameters={...WithHref.parameters,docs:{...WithHref.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://github.com/justinmahar/react-pdf-builder'\n  }\n}",...WithHref.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:"{\n  args: {\n    style: {\n      borderRadius: 20,\n      width: 250,\n      fontSize: 30,\n      borderColor: 'black',\n      borderWidth: 1\n    }\n  }\n}",...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Regular","Pill","WithHref","Custom"]},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_4__.B.default.build(),style,...props}=_ref;const themeProps=theme?.buttonProps,mergedProps={...themeProps,...props},swatch=mergedProps.swatch??"primary",styleOverride={};swatch&&"link"!==swatch?(styleOverride.backgroundColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__.D.getSwatchColor(swatch,theme.colorScheme),styleOverride.color=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__.D.getContrastColor(swatch,theme.colorScheme)):"link"===swatch&&(styleOverride.backgroundColor="#FFFFFF00",styleOverride.color=mergedProps.linkColor??_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__.D.getSwatchColor("blue",theme.colorScheme)),mergedProps.pill&&(styleOverride.borderRadius="50%");const hasHref=void 0!==mergedProps.href,child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{textStyle:hasHref?{textDecoration:"no-underline"}:void 0,children}),buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...mergedProps,style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",...themeProps?.style,...styleOverride,...style},children:child});return hasHref?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.N_,{href:mergedProps.href,children:buttonElement}):buttonElement};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},pill:{defaultValue:null,description:"",name:"pill",required:!1,type:{name:"boolean"}},linkColor:{defaultValue:null,description:"",name:"linkColor",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="A4",scale=1,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme:_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale}),size:pageSize,...pageProps,style:{...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"A4"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);