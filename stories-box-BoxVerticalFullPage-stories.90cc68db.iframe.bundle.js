(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[602],{"./src/stories/box/BoxVerticalFullPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullPageWithGap:()=>FullPageWithGap,FullPageWithoutGap:()=>FullPageWithoutGap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/typography/Paragraph.tsx"),_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Heading5.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{pageProps:{style:{padding:0}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{direction:"y",grow:!0,padding:50,style:{justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__.m,{style:{textAlign:"center"},children:"Vertical box containing 3 nested boxes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Grow"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{padding:50,style:{justifyContent:"center",alignItems:"center",backgroundColor:"lightpink"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Shrink"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{direction:"y",padding:50,style:{backgroundColor:"lightyellow",textAlign:"justify"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_4__.m,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_3__.f,{style:{marginBottom:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Box/Vertical",component:StoryComponent,parameters:{options:{showPanel:!1}}},FullPageWithoutGap={args:{direction:"vertical",style:{height:"100%"}}},FullPageWithGap={args:{gap:10,direction:"vertical",style:{height:"100%"}}};FullPageWithoutGap.parameters={...FullPageWithoutGap.parameters,docs:{...FullPageWithoutGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: 'vertical',\n    style: {\n      height: '100%'\n    }\n  }\n}",...FullPageWithoutGap.parameters?.docs?.source}}},FullPageWithGap.parameters={...FullPageWithGap.parameters,docs:{...FullPageWithGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    gap: 10,\n    direction: 'vertical',\n    style: {\n      height: '100%'\n    }\n  }\n}",...FullPageWithGap.parameters?.docs?.source}}};const __namedExportsOrder=["FullPageWithoutGap","FullPageWithGap"]},"./src/components/PDFSafeChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>PDFSafeChildren});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFSafeChildren=_ref=>{let{children,textStyle,...props}=_ref;return(Array.isArray(children)?children:[children]).map(((c,i)=>"string"==typeof c?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:textStyle,children:c},`child-${i}`):c))};try{PDFSafeChildren.displayName="PDFSafeChildren",PDFSafeChildren.__docgenInfo={description:"Ensures children that are strings are wrapped in a Text component.",displayName:"PDFSafeChildren",props:{textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"Style"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PDFSafeChildren.tsx#PDFSafeChildren"]={docgenInfo:PDFSafeChildren.__docgenInfo,name:"PDFSafeChildren",path:"src/components/PDFSafeChildren.tsx#PDFSafeChildren"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>headingStepSize,m:()=>headingStartSize});const headingStartSize=20,headingStepSize=4},"./src/components/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_Heading__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/typography/Heading.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{children,rule,...props}=_ref;const fontSize=_Heading__WEBPACK_IMPORTED_MODULE_3__.m+1*_Heading__WEBPACK_IMPORTED_MODULE_3__._;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...props,style:{fontSize,marginBottom:10,borderBottom:rule?2:void 0,...props.style},children})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Paragraph=_ref=>{let{children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...props,style:{fontSize:18,marginBottom:10,...props.style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFStory=_ref=>{let{children,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.YW,{size:"A4",...pageProps,style:{flexDirection:"column",padding:30,...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"PageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}},"?9157":()=>{}}]);