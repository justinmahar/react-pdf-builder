"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[1247],{"./src/stories/gradient-backdrop/GradientBackdropDecorators.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Angles1:()=>Angles1,Angles2:()=>Angles2,Angles3:()=>Angles3,Circles1:()=>Circles1,Circles2:()=>Circles2,Circles3:()=>Circles3,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/backdrops/BackdropDecorators.tsx"),_components_backdrops_GradientBackdrop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/backdrops/GradientBackdrop.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=_ref=>{let{decorators,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__.g,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_backdrops_GradientBackdrop__WEBPACK_IMPORTED_MODULE_2__.J,{size:"LETTER",darken:!0,swatch:"primary",children:decorators})})};StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/GradientBackdrop/Decorators",component:StoryComponent,parameters:{options:{showPanel:!1}}},Angles1={args:{decorators:_components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__.d.angles1}},Angles2={args:{decorators:_components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__.d.angles2}},Angles3={args:{decorators:_components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__.d.angles3}},Circles1={args:{decorators:_components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__.d.circles1}},Circles2={args:{decorators:_components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__.d.circles2}},Circles3={args:{decorators:_components_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_1__.d.circles3}};Angles1.parameters={...Angles1.parameters,docs:{...Angles1.parameters?.docs,source:{originalSource:"{\n  args: {\n    decorators: BackdropDecorators.angles1\n  }\n}",...Angles1.parameters?.docs?.source}}},Angles2.parameters={...Angles2.parameters,docs:{...Angles2.parameters?.docs,source:{originalSource:"{\n  args: {\n    decorators: BackdropDecorators.angles2\n  }\n}",...Angles2.parameters?.docs?.source}}},Angles3.parameters={...Angles3.parameters,docs:{...Angles3.parameters?.docs,source:{originalSource:"{\n  args: {\n    decorators: BackdropDecorators.angles3\n  }\n}",...Angles3.parameters?.docs?.source}}},Circles1.parameters={...Circles1.parameters,docs:{...Circles1.parameters?.docs,source:{originalSource:"{\n  args: {\n    decorators: BackdropDecorators.circles1\n  }\n}",...Circles1.parameters?.docs?.source}}},Circles2.parameters={...Circles2.parameters,docs:{...Circles2.parameters?.docs,source:{originalSource:"{\n  args: {\n    decorators: BackdropDecorators.circles2\n  }\n}",...Circles2.parameters?.docs?.source}}},Circles3.parameters={...Circles3.parameters,docs:{...Circles3.parameters?.docs,source:{originalSource:"{\n  args: {\n    decorators: BackdropDecorators.circles3\n  }\n}",...Circles3.parameters?.docs?.source}}};const __namedExportsOrder=["Angles1","Angles2","Angles3","Circles1","Circles2","Circles3"]},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="LETTER",scale=1,pageProps,theme,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale});const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:700,width:500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme,size:pageSize,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);