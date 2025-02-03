(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[988],{"./src/stories/box/BoxHorizontalFullPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullPageWithGap:()=>FullPageWithGap,FullPageWithoutGap:()=>FullPageWithoutGap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/typography/Paragraph.tsx"),_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Heading5.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{pageProps:{style:{padding:0}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{grow:!0,padding:30,style:{justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Grow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{padding:30,style:{justifyContent:"center",alignItems:"center",backgroundColor:"lightpink"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Shrink"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{direction:"y",padding:30,style:{width:300,backgroundColor:"lightyellow",textAlign:"justify"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__.m,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{children:"Width 300. Specify a width to allow text wrapping."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Box/Horizontal",component:StoryComponent,parameters:{options:{showPanel:!1}}},FullPageWithoutGap={args:{direction:"horizontal",style:{height:"100%"}}},FullPageWithGap={args:{gap:10,direction:"horizontal",style:{height:"100%"}}};FullPageWithoutGap.parameters={...FullPageWithoutGap.parameters,docs:{...FullPageWithoutGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: 'horizontal',\n    style: {\n      height: '100%'\n    }\n  }\n}",...FullPageWithoutGap.parameters?.docs?.source}}},FullPageWithGap.parameters={...FullPageWithGap.parameters,docs:{...FullPageWithGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    gap: 10,\n    direction: 'horizontal',\n    style: {\n      height: '100%'\n    }\n  }\n}",...FullPageWithGap.parameters?.docs?.source}}};const __namedExportsOrder=["FullPageWithoutGap","FullPageWithGap"]},"./src/components/builder/PDFSafeChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>PDFSafeChildren});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFSafeChildren=_ref=>{let{children,textStyle,...props}=_ref;return(Array.isArray(children)?children:[children]).map(((c,i)=>"string"==typeof c?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:textStyle,children:c},`child-${i}`):c))};try{PDFSafeChildren.displayName="PDFSafeChildren",PDFSafeChildren.__docgenInfo={description:"Ensures children that are strings are wrapped in a Text component.",displayName:"PDFSafeChildren",props:{textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"Style"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"]={docgenInfo:PDFSafeChildren.__docgenInfo,name:"PDFSafeChildren",path:"src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/ThemedPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>ThemedPage});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedPage=_ref=>{let{theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.create(),...props}=_ref;const themeProps=theme.pageProps??{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.YW,{...themeProps,...props,style:{...themeProps.style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children:props.children})})};ThemedPage.displayName="ThemedPage";try{ThemedPage.displayName="ThemedPage",ThemedPage.__docgenInfo={description:"",displayName:"ThemedPage",props:{theme:{defaultValue:{value:"Themes.default.create()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ThemedPage.tsx#ThemedPage"]={docgenInfo:ThemedPage.__docgenInfo,name:"ThemedPage",path:"src/components/pages/ThemedPage.tsx#ThemedPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/theme/themes/Themes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Themes});class ThemeFactory{static mergeProps(){let p1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{...p1,...p2,style:{...p1.style,...p2.style}}}static mergeThemes(themes){return(Array.isArray(themes)?themes:[themes]).reduce(((p,c)=>({...p,...c,pageProps:ThemeFactory.mergeProps(p.pageProps,c.pageProps)})))}}class OriginalLightThemeFactory extends ThemeFactory{static headingStartSize=20;static headingStepSize=4;create(){let scale=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{heading1Props:{style:{fontSize:scale*(OriginalLightThemeFactory.headingStartSize+5*OriginalLightThemeFactory.headingStepSize),marginBottom:10*scale,borderBottom:4*scale}},heading2Props:{style:{fontSize:scale*(OriginalLightThemeFactory.headingStartSize+4*OriginalLightThemeFactory.headingStepSize),marginBottom:10*scale,borderBottom:4*scale}},heading3Props:{style:{fontSize:scale*(OriginalLightThemeFactory.headingStartSize+3*OriginalLightThemeFactory.headingStepSize),marginBottom:10*scale,borderBottom:3*scale}},heading4Props:{style:{fontSize:scale*(OriginalLightThemeFactory.headingStartSize+2*OriginalLightThemeFactory.headingStepSize),marginBottom:10*scale,borderBottom:3*scale}},heading5Props:{style:{fontSize:scale*(OriginalLightThemeFactory.headingStartSize+1*OriginalLightThemeFactory.headingStepSize),marginBottom:10*scale,borderBottom:2*scale}},heading6Props:{style:{fontSize:scale*(OriginalLightThemeFactory.headingStartSize+0*OriginalLightThemeFactory.headingStepSize),marginBottom:10*scale,borderBottom:2*scale}},paragraphProps:{style:{fontSize:18*scale,marginBottom:10*scale}},pageProps:{style:{padding:30*scale,fontSize:18*scale}},cardProps:{style:{marginBottom:10*scale,overflow:"hidden"}},cardBodyProps:{style:{backgroundColor:"#ffffff",padding:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,border:1*scale,borderColor:"#CCCCCC",overflow:"hidden"}},cardHeaderProps:{wrap:!1,style:{backgroundColor:"#EEEEEE",paddingVertical:10*scale,paddingHorizontal:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,border:1*scale,borderColor:"#CCCCCC",overflow:"hidden"}}}}}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class Themes{static originalLight=new OriginalLightThemeFactory;static#_=_defineProperty(this,"default",Themes.originalLight)}},"./src/components/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/themes/Themes.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.create(),children,rule,...props}=_ref;const themeProps=theme?.heading5Props,style={};return rule||(style.borderBottom=0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...themeProps,...props,style:{...themeProps?.style,...style,...props.style},children})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},theme:{defaultValue:{value:"Themes.default.create()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/themes/Themes.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.create(),children,...props}=_ref;const themeProps=theme?.paragraphProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...themeProps,...props,style:{...themeProps?.style,...props.style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{theme:{defaultValue:{value:"Themes.default.create()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{size:"A4",...pageProps,style:{...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"PageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}},"?9157":()=>{}}]);