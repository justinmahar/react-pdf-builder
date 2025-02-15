(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[3794],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/documentation/components/shapes/SquareShape.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_DocsPDF__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/documentation/DocsPDF.tsx"),_components_shapes_SquareShape__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shapes/SquareShape.tsx"),_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/shapes/Gradients.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Documentation/Components/Shapes/SquareShape"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1",{children:"SquareShape"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Description of the SquareShape component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"import { SquareShape } from 'react-pdf-builder';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Describe how to use the component here."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"<SquareShape size={300} />\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.strong,{children:"Required."})," Label shown in the component"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"backgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"string"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"undefined"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional. What background color to use"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"squareshape-example",children:"SquareShape Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DocsPDF__WEBPACK_IMPORTED_MODULE_2__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_shapes_SquareShape__WEBPACK_IMPORTED_MODULE_3__.b,{size:300,gradient:["red","blue"],gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_4__.h.leftToRight,rectProps:{stroke:"darkblue",strokeWidth:10}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { SquareShape, GradientType, ThemedPage } from 'react-pdf-builder';\nimport { PDFViewer, Document } from '@react-pdf/renderer';\n\nexport function Example() {\n  return (\n    <PDFViewer style={{ width: 420, height: 600 }}>\n      <Document>\n        <ThemedPage size=\"LETTER\">\n          <SquareShape \n            size={300}\n            gradient={['red', 'blue']}\n            gradientType={GradientType.leftToRight}\n            rectProps={{ stroke: 'darkblue', strokeWidth: 10 }}\n          />\n        </ThemedPage>\n      </Document>\n    </PDFViewer>\n  );\n}\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Components/Shapes/SquareShape",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/shapes/Gradients.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>Gradients,h:()=>GradientType});class Gradients{static normalizeGradientStops(gradient){const gradientStops=(gradient??[]).map(((g,i,arr)=>"string"==typeof g?{offset:`${Math.round(i/arr.length*100)}%`,stopColor:g}:g));return 1===gradientStops.length&&gradientStops.push({offset:"100%",stopColor:gradientStops[0].stopColor}),gradientStops}static toGradientCoords(gradientType){let gradientCoords={x1:0,y1:.5,x2:1,y2:.5};switch(gradientType){case GradientType.rightToLeft:gradientCoords={x1:1,y1:.5,x2:0,y2:.5};break;case GradientType.topToBottom:gradientCoords={x1:.5,y1:0,x2:.5,y2:1};break;case GradientType.bottomToTop:gradientCoords={x1:.5,y1:1,x2:.5,y2:0};break;case GradientType.topLeftToBottomRight:gradientCoords={x1:0,y1:0,x2:1,y2:1};break;case GradientType.topRightToBottomLeft:gradientCoords={x1:1,y1:0,x2:0,y2:1};break;case GradientType.bottomLeftToTopRight:gradientCoords={x1:0,y1:1,x2:1,y2:0};break;case GradientType.bottomRightToTopLeft:gradientCoords={x1:1,y1:1,x2:0,y2:0}}return Gradients.safeLinearCoords(gradientCoords)}static safeLinearCoords(coords){return{x1:0===coords.x1?1e-6:1===coords.x1?.999999:coords.x1,y1:0===coords.y1?1e-6:1===coords.y1?.999999:coords.y1,x2:0===coords.x2?1e-6:1===coords.x2?.999999:coords.x2,y2:0===coords.y2?1e-6:1===coords.y2?.999999:coords.y2}}static safeRadialCoords(coords){return{cx:0===coords.x?1e-6:1===coords.x?.999999:coords.x,cy:0===coords.y?1e-6:1===coords.y?.999999:coords.y}}}let GradientType=function(GradientType){return GradientType.leftToRight="leftToRight",GradientType.rightToLeft="rightToLeft",GradientType.topToBottom="topToBottom",GradientType.bottomToTop="bottomToTop",GradientType.topLeftToBottomRight="topLeftToBottomRight",GradientType.bottomLeftToTopRight="bottomLeftToTopRight",GradientType.bottomRightToTopLeft="bottomRightToTopLeft",GradientType.topRightToBottomLeft="topRightToBottomLeft",GradientType.radial="radial",GradientType}({})},"./src/components/shapes/RectangleShape.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>RectangleShape});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_util_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/util/util.ts"),_Gradients__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shapes/Gradients.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RectangleShape=_ref=>{let{width=100,height=100,fill,rectProps,linearGradientProps,radialGradientProps,gradient,gradientType=_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.topToBottom,linearGradientCoords:linearGradientCoordsProps,radialGradientCoords:radialGradientCoordsProps,theme,className,...svgProps}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build();const uuidRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef((0,_util_util__WEBPACK_IMPORTED_MODULE_5__.b)()),linearId=`linear-${uuidRef.current}`,radialId=`radial-${uuidRef.current}`,gradientStops=_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.normalizeGradientStops(gradient),linearGradientCoords=linearGradientCoordsProps?_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.safeLinearCoords(linearGradientCoordsProps):_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.toGradientCoords(gradientType),radialGradientCoords=radialGradientCoordsProps?_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.safeRadialCoords(radialGradientCoordsProps):void 0,widthNum=parseFloat(`${width}`),heightNum=parseFloat(`${height}`),rectFill=rectProps?.fill??fill??(gradient?gradientType===_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.radial?`url('#${radialId}')`:`url('#${linearId}')`:"black"),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.BS,{viewBox:`0 0 ${widthNum} ${heightNum}`,...svgProps,style:{width:widthNum,height:heightNum,...classNameStyles,...svgProps.style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.lA,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.W4,{id:linearId,...linearGradientCoords,...linearGradientProps,children:gradientStops.map(((s,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.VG,{...s},"linear-stop-"+i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ey,{id:radialId,...radialGradientCoords,...radialGradientProps,children:gradientStops.map(((s,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.VG,{...s},"radial-stop-"+i)))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.rw,{width:widthNum,height:heightNum,...rectProps,fill:rectFill})]})};RectangleShape.displayName="RectangleShape";try{RectangleShape.displayName="RectangleShape",RectangleShape.__docgenInfo={description:"",displayName:"RectangleShape",props:{rectProps:{defaultValue:null,description:"",name:"rectProps",required:!1,type:{name:"Partial<RectProps>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},linearGradientProps:{defaultValue:null,description:"",name:"linearGradientProps",required:!1,type:{name:"Partial<LinearGradientProps>"}},radialGradientProps:{defaultValue:null,description:"",name:"radialGradientProps",required:!1,type:{name:"Partial<RadialGradientProps>"}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string[] | GradientStop[]"}},gradientType:{defaultValue:{value:"GradientType.topToBottom"},description:"",name:"gradientType",required:!1,type:{name:"enum",value:[{value:'"leftToRight"'},{value:'"rightToLeft"'},{value:'"topToBottom"'},{value:'"bottomToTop"'},{value:'"topLeftToBottomRight"'},{value:'"bottomLeftToTopRight"'},{value:'"bottomRightToTopLeft"'},{value:'"topRightToBottomLeft"'},{value:'"radial"'}]}},linearGradientCoords:{defaultValue:null,description:"",name:"linearGradientCoords",required:!1,type:{name:"{ x1: number; y1: number; x2: number; y2: number; }"}},radialGradientCoords:{defaultValue:null,description:"",name:"radialGradientCoords",required:!1,type:{name:"{ x: number; y: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shapes/RectangleShape.tsx#RectangleShape"]={docgenInfo:RectangleShape.__docgenInfo,name:"RectangleShape",path:"src/components/shapes/RectangleShape.tsx#RectangleShape"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shapes/SquareShape.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>SquareShape});__webpack_require__("./node_modules/react/index.js");var _RectangleShape__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/shapes/RectangleShape.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SquareShape=_ref=>{let{size,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RectangleShape__WEBPACK_IMPORTED_MODULE_1__.R,{width:size,height:size,...props})};SquareShape.displayName="SquareShape";try{SquareShape.displayName="SquareShape",SquareShape.__docgenInfo={description:"",displayName:"SquareShape",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},rectProps:{defaultValue:null,description:"",name:"rectProps",required:!1,type:{name:"Partial<RectProps>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},linearGradientProps:{defaultValue:null,description:"",name:"linearGradientProps",required:!1,type:{name:"Partial<LinearGradientProps>"}},radialGradientProps:{defaultValue:null,description:"",name:"radialGradientProps",required:!1,type:{name:"Partial<RadialGradientProps>"}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string[] | GradientStop[]"}},gradientType:{defaultValue:null,description:"",name:"gradientType",required:!1,type:{name:"enum",value:[{value:'"leftToRight"'},{value:'"rightToLeft"'},{value:'"topToBottom"'},{value:'"bottomToTop"'},{value:'"topLeftToBottomRight"'},{value:'"bottomLeftToTopRight"'},{value:'"bottomRightToTopLeft"'},{value:'"topRightToBottomLeft"'},{value:'"radial"'}]}},linearGradientCoords:{defaultValue:null,description:"",name:"linearGradientCoords",required:!1,type:{name:"{ x1: number; y1: number; x2: number; y2: number; }"}},radialGradientCoords:{defaultValue:null,description:"",name:"radialGradientCoords",required:!1,type:{name:"{ x: number; y: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shapes/SquareShape.tsx#SquareShape"]={docgenInfo:SquareShape.__docgenInfo,name:"SquareShape",path:"src/components/shapes/SquareShape.tsx#SquareShape"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/documentation/DocsPDF.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>DocsPDF});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsPDF=_ref=>{let{children,pageSize="LETTER",orientation,scale=1,pageProps,theme,width=420,height=600,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale});const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme,size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};DocsPDF.displayName="DocsPDF";try{DocsPDF.displayName="DocsPDF",DocsPDF.__docgenInfo={description:"",displayName:"DocsPDF",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},width:{defaultValue:{value:"420"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/documentation/DocsPDF.tsx#DocsPDF"]={docgenInfo:DocsPDF.__docgenInfo,name:"DocsPDF",path:"src/stories/documentation/DocsPDF.tsx#DocsPDF"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);