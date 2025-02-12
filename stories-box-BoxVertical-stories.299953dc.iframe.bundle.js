"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[6744],{"./src/stories/box/BoxVertical.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithGap:()=>WithGap,WithoutGap:()=>WithoutGap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/typography/Paragraph.tsx"),_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Heading5.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{direction:"y",grow:!0,padding:10,style:{justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__.m,{style:{textAlign:"center"},children:"Vertical box containing 3 nested boxes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Grow"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{padding:10,style:{justifyContent:"center",alignItems:"center",backgroundColor:"lightpink"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Shrink"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{direction:"y",padding:10,style:{backgroundColor:"lightyellow",textAlign:"justify"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__.m,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Box/Vertical",component:StoryComponent,parameters:{options:{showPanel:!1}}},WithoutGap={args:{direction:"vertical",style:{height:700}}},WithGap={args:{gap:10,direction:"vertical",style:{height:700}}};WithoutGap.parameters={...WithoutGap.parameters,docs:{...WithoutGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: 'vertical',\n    style: {\n      height: 700\n    }\n  }\n}",...WithoutGap.parameters?.docs?.source}}},WithGap.parameters={...WithGap.parameters,docs:{...WithGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    gap: 10,\n    direction: 'vertical',\n    style: {\n      height: 700\n    }\n  }\n}",...WithGap.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutGap","WithGap"]},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),direction,grow,shrink,gap,padding,className,style,...props}=_ref;const styleInnate={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding},classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...styleInnate,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/Themes.ts")),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),className,style,...props}=_ref;const mergedProps={...theme?.headingProps,...theme?.heading5Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading5Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}const themeClassName=`${theme?.headingProps.className??""} ${theme?.heading5Props.className??""}`.trim(),themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...themeClassNameStyles,...mergedThemeStyles,...styleOverride,...classNameStyles,...style},children})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),className,style,...props}=_ref;const themeProps=theme?.paragraphProps,mergedProps={...themeProps,...props},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="A4",scale=1,pageProps,...props}=_ref;const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:700,width:500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme:_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale}),size:pageSize,...pageProps,style:{fontFamily:"Roboto",...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"A4"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);