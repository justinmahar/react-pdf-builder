"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[2990],{"./src/stories/signature/Signature.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomX:()=>CustomX,FullExample:()=>FullExample,NoX:()=>NoX,WithSwatch:()=>WithSwatch,WithX:()=>WithX,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_signature_Signature__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/signature/Signature.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Paragraph.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=_ref=>{let{paragraphText,...props}=_ref;return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.KQ.registerEmojiSource({format:"png",url:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_signature_Signature__WEBPACK_IMPORTED_MODULE_1__.t,{...props,className:"mb-1"}),paragraphText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_4__.f,{children:paragraphText})]})};StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Signature",component:StoryComponent,parameters:{options:{showPanel:!1}}},WithX={args:{x:!0}},NoX={args:{}},CustomX={args:{x:!0,xValue:"❌",xProps:{style:{fontSize:20,marginBottom:5,marginLeft:10}}}},WithSwatch={args:{x:!0,swatch:"primary"}},FullExample={args:{x:!0,className:"mb-0",paragraphText:"Sign here"}};WithX.parameters={...WithX.parameters,docs:{...WithX.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true\n  }\n}",...WithX.parameters?.docs?.source}}},NoX.parameters={...NoX.parameters,docs:{...NoX.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...NoX.parameters?.docs?.source}}},CustomX.parameters={...CustomX.parameters,docs:{...CustomX.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true,\n    xValue: '❌',\n    xProps: {\n      style: {\n        fontSize: 20,\n        marginBottom: 5,\n        marginLeft: 10\n      }\n    }\n  }\n}",...CustomX.parameters?.docs?.source}}},WithSwatch.parameters={...WithSwatch.parameters,docs:{...WithSwatch.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true,\n    swatch: 'primary'\n  }\n}",...WithSwatch.parameters?.docs?.source}}},FullExample.parameters={...FullExample.parameters,docs:{...FullExample.parameters?.docs,source:{originalSource:"{\n  args: {\n    x: true,\n    className: 'mb-0',\n    paragraphText: 'Sign here'\n  }\n}",...FullExample.parameters?.docs?.source}}};const __namedExportsOrder=["WithX","NoX","CustomX","WithSwatch","FullExample"]},"./src/components/basics/ThemedView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Div,j:()=>ThemedView});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedView=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build();const classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};ThemedView.displayName="ThemedView";const Div=ThemedView;try{ThemedView.displayName="ThemedView",ThemedView.__docgenInfo={description:"",displayName:"ThemedView",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#ThemedView"]={docgenInfo:ThemedView.__docgenInfo,name:"ThemedView",path:"src/components/basics/ThemedView.tsx#ThemedView"})}catch(__react_docgen_typescript_loader_error){}try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/ThemedView.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/Themes.ts"),_basics_ThemedView__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedView.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,theme,dir,grow,shrink,gap,padding,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_1__.B.default.build();const styleInnate={display:"flex",flexDirection:"column"===dir||"y"===dir?"column":"row",flexShrink:shrink?1:void 0,flexGrow:grow?1:void 0,gap,padding},classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedView__WEBPACK_IMPORTED_MODULE_2__.i,{theme,...props,style:{...styleInnate,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/signature/Signature.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Signature});__webpack_require__("./node_modules/react/index.js");var _children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_layout_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/Box.tsx"),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/basics/ThemedText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Signature=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build();const themeProps=theme?.signatureProps,mergedProps={...themeProps,...props},styleOverride={},xStyleOverride={};if(void 0!==mergedProps.lineSize&&(styleOverride.borderBottom=mergedProps.lineSize),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.borderColor=swatchColor,styleOverride.color=swatchColor,xStyleOverride.color=swatchColor}const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_layout_Box__WEBPACK_IMPORTED_MODULE_2__.a,{theme,...mergedProps,style:{alignItems:"flex-end",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:[mergedProps.x&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_4__.P,{theme,...mergedProps.xProps,style:{...mergedProps.xProps?.style,...xStyleOverride},children:mergedProps.xValue??"X"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__.p,{theme,children})]})};Signature.displayName="Signature";try{Signature.displayName="Signature",Signature.__docgenInfo={description:"",displayName:"Signature",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},lineSize:{defaultValue:null,description:"",name:"lineSize",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"boolean"}},xProps:{defaultValue:null,description:"",name:"xProps",required:!1,type:{name:"TextProps"}},xValue:{defaultValue:null,description:"",name:"xValue",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/signature/Signature.tsx#Signature"]={docgenInfo:Signature.__docgenInfo,name:"Signature",path:"src/components/signature/Signature.tsx#Signature"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/Themes.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_1__.B.default.build();const themeProps=theme?.paragraphProps,mergedProps={...themeProps,...props},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_2__.P,{theme,...mergedProps,style:{...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,allowStrings:!0,children})})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="LETTER",orientation,scale=1,pageProps,theme,width=500,height=700,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale});const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme,size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},width:{defaultValue:{value:"500"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"700"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);