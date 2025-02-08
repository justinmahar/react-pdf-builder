"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[888],{"./src/stories/card/CardMultiple.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultipleCards:()=>MultipleCards,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_card_CardHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/card/CardHeader.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/typography/Paragraph.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_card_Card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/card/Card.tsx"),_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/card/CardBody.tsx"),_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/typography/Heading6.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_1__.a,{children:"This is the first card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{withHeader:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_2__.f,{style:{marginBottom:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_1__.a,{children:"Hey, it's the second one"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{withHeader:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Incididunt ut labore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_2__.f,{style:{marginBottom:0},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_1__.a,{children:"Third card, reporting for duty"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{withHeader:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_6__.T,{children:"Dolor in reprehenderit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_2__.f,{style:{marginBottom:0},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})]});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Card",component:StoryComponent,parameters:{options:{showPanel:!1}}},MultipleCards={args:{}};MultipleCards.parameters={...MultipleCards.parameters,docs:{...MultipleCards.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...MultipleCards.parameters?.docs?.source}}};const __namedExportsOrder=["MultipleCards"]},"./src/components/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/builder/PDFSafeChildren.tsx"),_layout_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/Box.tsx"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const themeProps=theme.cardProps,mergedProps={...themeProps,...props},injectedChildArray=(Array.isArray(children)?children:void 0!==children?[children]:[]).map(((c,i,arr)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(c,{key:"card-child-"+i,theme,swatch:mergedProps.swatch,swatchOpacity:mergedProps.swatchOpacity,...c.props})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_2__.a,{...mergedProps,style:{overflow:"hidden",...themeProps?.style,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_1__.P,{children:injectedChildArray})})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/CardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>CardBody});__webpack_require__("./node_modules/react/index.js");var _layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/builder/PDFSafeChildren.tsx"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),color__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardBody=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const themeProps=theme.cardBodyProps,mergedProps={...themeProps,...props},styleOverride={};if(mergedProps.withHeader&&(styleOverride.borderTopLeftRadius=0,styleOverride.borderTopRightRadius=0),mergedProps.withFooter&&(styleOverride.borderBottomLeftRadius=0,styleOverride.borderBottomRightRadius=0),mergedProps.swatch){const swatchColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.borderColor=swatchColor;const swatchOpacity=mergedProps.swatchOpacity??.134,swatchOpacityHex=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.decimalToHex(swatchOpacity);styleOverride.backgroundColor=`${new(color__WEBPACK_IMPORTED_MODULE_6___default())(swatchColor??"#888").hex()}${swatchOpacityHex}`}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{...mergedProps,style:{overflow:"hidden",...themeProps?.style,...styleOverride,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};CardBody.displayName="CardBody";try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"",displayName:"CardBody",props:{withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},withFooter:{defaultValue:null,description:"",name:"withFooter",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/CardBody.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"src/components/card/CardBody.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/CardHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>CardHeader});__webpack_require__("./node_modules/react/index.js");var _layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/themes/Themes.ts"),_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/typography/Heading5.tsx"),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),color__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardHeader=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const themeProps=theme?.cardHeaderProps,mergedProps={...themeProps,...props},AsComponent=mergedProps.as??_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__.m;let child=children;"string"==typeof child&&(child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AsComponent,{theme,style:{marginBottom:0},children:child}));const styleOverride={};if(mergedProps.noBody||(styleOverride.borderBottomLeftRadius=0,styleOverride.borderBottomRightRadius=0),mergedProps.swatch){const swatchColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme),contrastColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getContrastColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=contrastColor,styleOverride.borderColor=swatchColor;const swatchOpacity=mergedProps.swatchOpacity??1,swatchOpacityHex=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.decimalToHex(swatchOpacity);styleOverride.backgroundColor=`${new(color__WEBPACK_IMPORTED_MODULE_6___default())(swatchColor??"#888").hex()}${swatchOpacityHex}`}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{wrap:!1,...mergedProps,style:{overflow:"hidden",...themeProps?.style,...styleOverride,...style},children:child})};CardHeader.displayName="CardHeader";try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},noBody:{defaultValue:null,description:"",name:"noBody",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/card/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/themes/Themes.ts")),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const mergedProps={...theme?.headingProps,...theme?.heading5Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading5Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...mergedThemeStyles,...styleOverride,...style},children})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading6.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Heading6});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/themes/Themes.ts")),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading6=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const mergedProps={...theme?.headingProps,...theme?.heading6Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading6Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_3__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...mergedThemeStyles,...styleOverride,...style},children})};Heading6.displayName="Heading6";try{Heading6.displayName="Heading6",Heading6.__docgenInfo={description:"",displayName:"Heading6",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading6.tsx#Heading6"]={docgenInfo:Heading6.__docgenInfo,name:"Heading6",path:"src/components/typography/Heading6.tsx#Heading6"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/ThemeBuilder.ts")),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const themeProps=theme?.paragraphProps,mergedProps={...themeProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.color=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_2__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...themeProps?.style,...styleOverride,...style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="A4",scale=1,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme:_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale}),size:pageSize,...pageProps,style:{...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"A4"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);