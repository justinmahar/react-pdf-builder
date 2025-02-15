"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[9151],{"./src/stories/card/CardHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderOnly:()=>HeaderOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_card_Card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/card/Card.tsx"),_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/card/CardHeader.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__.g,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_card_Card__WEBPACK_IMPORTED_MODULE_1__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_2__.a,{children:"Card header with no body"})})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Card",component:StoryComponent,parameters:{options:{showPanel:!1}}},HeaderOnly={args:{}};HeaderOnly.parameters={...HeaderOnly.parameters,docs:{...HeaderOnly.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...HeaderOnly.parameters?.docs?.source}}};const __namedExportsOrder=["HeaderOnly"]},"./src/components/basics/ThemedView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Div,j:()=>ThemedView});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedView=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children})})};ThemedView.displayName="ThemedView";const Div=ThemedView;try{ThemedView.displayName="ThemedView",ThemedView.__docgenInfo={description:"",displayName:"ThemedView",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#ThemedView"]={docgenInfo:ThemedView.__docgenInfo,name:"ThemedView",path:"src/components/basics/ThemedView.tsx#ThemedView"})}catch(__react_docgen_typescript_loader_error){}try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/ThemedView.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_layout_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/Box.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme.cardProps,mergedProps={...themeProps,...props},injectedChildArray=(0,_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__.N)(children).map(((c,i,arr)=>{const name=c.type?.displayName||c.type?.name||"Unknown",isBody="CardBody"===name,additionalProps={};return"CardHeader"===name?(0===i&&1===arr.length&&(additionalProps.noBody=!0),i>0&&(additionalProps.withHeader=!0),i===arr.length-1&&(additionalProps.noBody=!0)):isBody&&(0===i&&(additionalProps.noHeader=!0),i<arr.length-1&&(additionalProps.withFooter=!0)),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(c,{key:"card-child-"+i,swatch:mergedProps.swatch,swatchOpacity:mergedProps.swatchOpacity,...additionalProps,...c.props})})),themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_2__.a,{dir:"y",...mergedProps,style:{overflow:"hidden",width:"100%",...themeClassNameStyles,...themeProps?.style,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__.p,{children:injectedChildArray})})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/CardHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>CardHeader});var color__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/typography/Heading5.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardHeader=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Um)(),themeProps=theme.cardHeaderProps,mergedProps={...themeProps,...props},AsComponent=mergedProps.as??_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__.m;let child=children;"string"==typeof child&&(child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AsComponent,{className:"mb-0",children:child}));const styleOverride={};if(mergedProps.noBody||(styleOverride.borderBottomLeftRadius=0,styleOverride.borderBottomRightRadius=0),mergedProps.withHeader&&(styleOverride.borderTopLeftRadius=0,styleOverride.borderTopRightRadius=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme),contrastColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getContrastColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=contrastColor,styleOverride.borderColor=swatchColor;const swatchOpacity=mergedProps.swatchOpacity??1,swatchOpacityHex=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.decimalToHex(swatchOpacity);styleOverride.backgroundColor=`${new(color__WEBPACK_IMPORTED_MODULE_6___default())(swatchColor??"#888").hex()}${swatchOpacityHex}`}const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{wrap:!1,...mergedProps,style:{overflow:"hidden",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:child})};CardHeader.displayName="CardHeader";try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},noBody:{defaultValue:null,description:"",name:"noBody",required:!1,type:{name:"boolean"}},withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/card/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_ThemedView__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/ThemedView.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,dir,grow,shrink,gap,padding,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),styleInnate={display:"flex",flexDirection:"column"===dir||"y"===dir?"column":"row",flexShrink:shrink?1:void 0,flexGrow:grow?1:void 0,gap,padding},classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedView__WEBPACK_IMPORTED_MODULE_1__.i,{...props,style:{...styleInnate,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),mergedProps={...theme?.headingProps,...theme?.heading5Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading5Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}const themeClassName=`${theme?.headingProps.className??""} ${theme?.heading5Props.className??""}`.trim(),themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_1__.P,{...mergedProps,style:{...themeClassNameStyles,...mergedThemeStyles,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{allowStrings:!0,children})})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),_components_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="LETTER",orientation,scale=1,pageProps,themeBuilder,width=500,height=700}=_ref;const theme=(themeBuilder??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default).build({scale}),roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_5__.xP,{theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},themeBuilder:{defaultValue:null,description:"",name:"themeBuilder",required:!1,type:{name:"ThemeBuilder"}},width:{defaultValue:{value:"500"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"700"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);