(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[879],{"./src/stories/card/CardHeaderBody.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderWithBody:()=>HeaderWithBody,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_builder_parts_layout_CardHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/builder/parts/layout/CardHeader.tsx"),_components_builder_parts_typography_Paragraph__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/builder/parts/typography/Paragraph.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_builder_parts_layout_Card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/builder/parts/layout/Card.tsx"),_components_builder_parts_layout_CardBody__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/builder/parts/layout/CardBody.tsx"),_components_builder_parts_typography_Heading6__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/builder/parts/typography/Heading6.tsx"),_components_builder_parts_layout_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/builder/parts/layout/Box.tsx"),_components_builder_parts_widgets_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/builder/parts/widgets/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__.g,{pageProps:{style:{backgroundColor:"#333388"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_builder_parts_layout_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_builder_parts_layout_CardHeader__WEBPACK_IMPORTED_MODULE_1__.a,{children:"Card Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_builder_parts_layout_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{withHeader:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_builder_parts_typography_Heading6__WEBPACK_IMPORTED_MODULE_6__.T,{children:"This is the card body"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_builder_parts_typography_Paragraph__WEBPACK_IMPORTED_MODULE_2__.f,{style:{marginBottom:30},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_builder_parts_layout_Box__WEBPACK_IMPORTED_MODULE_7__.a,{direction:"x",style:{justifyContent:"flex-end"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_builder_parts_widgets_Button__WEBPACK_IMPORTED_MODULE_8__.$,{href:"#",style:{width:120},children:"Learn More"})})]})]})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Card",component:StoryComponent,parameters:{options:{showPanel:!1}}},HeaderWithBody={args:{}};HeaderWithBody.parameters={...HeaderWithBody.parameters,docs:{...HeaderWithBody.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...HeaderWithBody.parameters?.docs?.source}}};const __namedExportsOrder=["HeaderWithBody"]},"./src/components/builder/parts/PDFChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PDFChildren});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFChildren=_ref=>{let{children,textStyle,...props}=_ref;return(Array.isArray(children)?children:[children]).map(((c,i)=>"string"==typeof c?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:textStyle,children:c},`child-${i}`):c))};try{PDFChildren.displayName="PDFChildren",PDFChildren.__docgenInfo={description:"",displayName:"PDFChildren",props:{textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"Style"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/PDFChildren.tsx#PDFChildren"]={docgenInfo:PDFChildren.__docgenInfo,name:"PDFChildren",path:"src/components/builder/parts/PDFChildren.tsx#PDFChildren"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_PDFChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/parts/PDFChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PDFChildren__WEBPACK_IMPORTED_MODULE_2__.i,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/builder/parts/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/layout/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Card});__webpack_require__("./node_modules/react/index.js");var _PDFChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/builder/parts/PDFChildren.tsx"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/builder/parts/layout/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.a,{...props,style:{marginBottom:10,overflow:"hidden",...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PDFChildren__WEBPACK_IMPORTED_MODULE_1__.i,{children})})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/layout/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/builder/parts/layout/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/layout/CardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>CardBody});__webpack_require__("./node_modules/react/index.js");var _PDFChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/builder/parts/PDFChildren.tsx"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/builder/parts/layout/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardBody=_ref=>{let{children,withHeader,withFooter,...props}=_ref;const style={backgroundColor:"#ffffff",padding:15,borderTopLeftRadius:withHeader?0:10,borderTopRightRadius:withHeader?0:10,borderBottomLeftRadius:withFooter?0:10,borderBottomRightRadius:withFooter?0:10,border:1,borderColor:"#CCCCCC",overflow:"hidden"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.a,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PDFChildren__WEBPACK_IMPORTED_MODULE_1__.i,{children})})};CardBody.displayName="CardBody";try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"",displayName:"CardBody",props:{withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},withFooter:{defaultValue:null,description:"",name:"withFooter",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/layout/CardBody.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"src/components/builder/parts/layout/CardBody.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/layout/CardHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>CardHeader});__webpack_require__("./node_modules/react/index.js");var _PDFChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/builder/parts/PDFChildren.tsx"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/builder/parts/layout/Box.tsx"),_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/builder/parts/typography/Heading5.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardHeader=_ref=>{let{children,noBody,as,...props}=_ref;const AsComponent=as??_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__.m;let child=children;"string"==typeof child&&(child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AsComponent,{style:{marginBottom:0},children:child}));const style={backgroundColor:"#EEEEEE",paddingVertical:10,paddingHorizontal:15,borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:noBody?10:0,borderBottomRightRadius:noBody?10:0,border:1,borderColor:"#CCCCCC",overflow:"hidden"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.a,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PDFChildren__WEBPACK_IMPORTED_MODULE_1__.i,{children:child})})};CardHeader.displayName="CardHeader";try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},noBody:{defaultValue:null,description:"",name:"noBody",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/layout/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/builder/parts/layout/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/typography/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>headingStepSize,m:()=>headingStartSize});const headingStartSize=20,headingStepSize=4},"./src/components/builder/parts/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_Heading__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/parts/typography/Heading.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{children,rule,...props}=_ref;const fontSize=_Heading__WEBPACK_IMPORTED_MODULE_3__.m+1*_Heading__WEBPACK_IMPORTED_MODULE_3__._;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...props,style:{fontSize,marginBottom:10,borderBottom:rule?2:void 0,...props.style},children})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/builder/parts/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/typography/Heading6.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Heading6});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_Heading__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/parts/typography/Heading.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading6=_ref=>{let{children,rule,...props}=_ref;const fontSize=_Heading__WEBPACK_IMPORTED_MODULE_3__.m+0*_Heading__WEBPACK_IMPORTED_MODULE_3__._;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...props,style:{fontSize,marginBottom:10,borderBottom:rule?2:void 0,...props.style},children})};Heading6.displayName="Heading6";try{Heading6.displayName="Heading6",Heading6.__docgenInfo={description:"",displayName:"Heading6",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/typography/Heading6.tsx#Heading6"]={docgenInfo:Heading6.__docgenInfo,name:"Heading6",path:"src/components/builder/parts/typography/Heading6.tsx#Heading6"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Paragraph=_ref=>{let{children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...props,style:{fontSize:18,marginBottom:10,...props.style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/builder/parts/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/builder/parts/widgets/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_PDFChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/parts/PDFChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{href,children,variant,pill,...props}=_ref;const backgroundColor=variant?defaultVariantBackgrounds[variant]:defaultVariantBackgrounds.primary,color=variant?defaultVariantForegrounds[variant]:defaultVariantForegrounds.primary,hasHref=void 0!==href,child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PDFChildren__WEBPACK_IMPORTED_MODULE_2__.i,{textStyle:hasHref?{textDecoration:"no-underline"}:void 0,children});return hasHref?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.N_,{href,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{color,backgroundColor,padding:10,width:150,textAlign:"center",borderRadius:pill?"50%":5,...props.style},children:child})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{color,backgroundColor,padding:10,width:150,textAlign:"center",borderRadius:pill?"50%":5,...props.style},children:child})},defaultVariantBackgrounds={primary:"#007BFF",secondary:"#6C757D",success:"#28A745",danger:"#DC3445",warning:"#FFC106",info:"#19A1B8",light:"#F8F9FA",dark:"#343A41",link:"transparent"},defaultVariantForegrounds={primary:"white",secondary:"white",success:"white",danger:"white",warning:"black",info:"white",light:"black",dark:"white",link:"#007BFF"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},pill:{defaultValue:null,description:"",name:"pill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/parts/widgets/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/builder/parts/widgets/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFStory=_ref=>{let{children,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.YW,{size:"A4",...pageProps,style:{flexDirection:"column",padding:30,...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"PageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}},"?9157":()=>{}}]);