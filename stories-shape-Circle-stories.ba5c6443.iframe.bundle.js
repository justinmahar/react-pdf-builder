"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[1291],{"./src/stories/shape/Circle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomLinearGradient:()=>CustomLinearGradient,CustomRadialGradient:()=>CustomRadialGradient,Fill:()=>Fill,LinearGradient:()=>LinearGradient,RadialGradient:()=>RadialGradient,Size300:()=>Size300,Stroke:()=>Stroke,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _parts_PDFStory__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_shapes_CircleShape__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shapes/CircleShape.tsx"),_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shapes/Gradients.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_1__.g,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_shapes_CircleShape__WEBPACK_IMPORTED_MODULE_2__.W,{...props})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Shape/Circle",component:StoryComponent,parameters:{options:{showPanel:!1}}},Basic={args:{}},Stroke={args:{size:300,ellipseProps:{stroke:"red",strokeWidth:15}}},Fill={args:{size:300,fill:"red"}},LinearGradient={args:{size:300,gradient:["red","blue"],gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_3__.h.leftToRight}},RadialGradient={args:{size:300,gradient:["red","blue"],gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_3__.h.radial}},CustomLinearGradient={args:{size:300,gradient:[{offset:"0%",stopColor:"red",stopOpacity:1},{offset:"50%",stopColor:"blue",stopOpacity:1},{offset:"100%",stopColor:"green",stopOpacity:1}],linearGradientProps:{x1:0,y1:.7,x2:1,y2:.3}}},CustomRadialGradient={args:{size:300,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_3__.h.radial,gradient:[{offset:"0%",stopColor:"red",stopOpacity:1},{offset:"100%",stopColor:"blue",stopOpacity:1}],radialGradientProps:{cx:.5,cy:.5,fx:.3,fy:.3}}},Size300={args:{size:300}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Basic.parameters?.docs?.source}}},Stroke.parameters={...Stroke.parameters,docs:{...Stroke.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300,\n    ellipseProps: {\n      stroke: 'red',\n      strokeWidth: 15\n    }\n  }\n}",...Stroke.parameters?.docs?.source}}},Fill.parameters={...Fill.parameters,docs:{...Fill.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300,\n    fill: 'red'\n  }\n}",...Fill.parameters?.docs?.source}}},LinearGradient.parameters={...LinearGradient.parameters,docs:{...LinearGradient.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300,\n    gradient: ['red', 'blue'],\n    gradientType: GradientType.leftToRight\n  }\n}",...LinearGradient.parameters?.docs?.source}}},RadialGradient.parameters={...RadialGradient.parameters,docs:{...RadialGradient.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300,\n    gradient: ['red', 'blue'],\n    gradientType: GradientType.radial\n  }\n}",...RadialGradient.parameters?.docs?.source}}},CustomLinearGradient.parameters={...CustomLinearGradient.parameters,docs:{...CustomLinearGradient.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300,\n    gradient: [{\n      offset: '0%',\n      stopColor: 'red',\n      stopOpacity: 1\n    }, {\n      offset: '50%',\n      stopColor: 'blue',\n      stopOpacity: 1\n    }, {\n      offset: '100%',\n      stopColor: 'green',\n      stopOpacity: 1\n    }],\n    linearGradientProps: {\n      x1: 0,\n      y1: 0.7,\n      x2: 1,\n      y2: 0.3\n    }\n  }\n}",...CustomLinearGradient.parameters?.docs?.source}}},CustomRadialGradient.parameters={...CustomRadialGradient.parameters,docs:{...CustomRadialGradient.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300,\n    gradientType: GradientType.radial,\n    gradient: [{\n      offset: '0%',\n      stopColor: 'red',\n      stopOpacity: 1\n    }, {\n      offset: '100%',\n      stopColor: 'blue',\n      stopOpacity: 1\n    }],\n    radialGradientProps: {\n      cx: 0.5,\n      cy: 0.5,\n      fx: 0.3,\n      fy: 0.3\n    }\n  }\n}",...CustomRadialGradient.parameters?.docs?.source}}},Size300.parameters={...Size300.parameters,docs:{...Size300.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 300\n  }\n}",...Size300.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Stroke","Fill","LinearGradient","RadialGradient","CustomLinearGradient","CustomRadialGradient","Size300"]},"./src/components/shapes/CircleShape.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>CircleShape});__webpack_require__("./node_modules/react/index.js");var _EllipseShape__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/shapes/EllipseShape.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleShape=_ref=>{let{size,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_EllipseShape__WEBPACK_IMPORTED_MODULE_1__._,{width:size,height:size,...props})};CircleShape.displayName="CircleShape";try{CircleShape.displayName="CircleShape",CircleShape.__docgenInfo={description:"Read the [full documentation for CircleShape](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-shapes-circleshape--docs)",displayName:"CircleShape",props:{size:{defaultValue:null,description:"Optional. Width and height of circle in points.",name:"size",required:!1,type:{name:"number"}},ellipseProps:{defaultValue:null,description:"Optional. Props for the underlying SVG [Ellipse](https://react-pdf.org/svg#ellipse). Specify a stroke here, such as `{ stroke: 'darkblue', strokeWidth: 5 }`.",name:"ellipseProps",required:!1,type:{name:"Partial<EllipseProps>"}},linearGradientProps:{defaultValue:null,description:"Optional. Props for the underlying SVG [LinearGradient](https://react-pdf.org/svg#lineargradient). Use for advanced gradient customization.",name:"linearGradientProps",required:!1,type:{name:"Partial<LinearGradientProps>"}},radialGradientProps:{defaultValue:null,description:"Optional. Props for the underlying SVG [RadialGradient](https://react-pdf.org/svg#radialgradient). Use for advanced gradient customization.",name:"radialGradientProps",required:!1,type:{name:"Partial<RadialGradientProps>"}},gradient:{defaultValue:null,description:"Optional. An array of custom gradient colors, or [gradient stops](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs#gradient-stops).",name:"gradient",required:!1,type:{name:"string[] | GradientStop[]"}},gradientType:{defaultValue:null,description:"Optional. The [type of gradient](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs#gradient-types). Defaults to a linear gradient, `GradientType.topToBottom`.",name:"gradientType",required:!1,type:{name:"enum",value:[{value:'"leftToRight"'},{value:'"rightToLeft"'},{value:'"topToBottom"'},{value:'"bottomToTop"'},{value:'"topLeftToBottomRight"'},{value:'"bottomLeftToTopRight"'},{value:'"bottomRightToTopLeft"'},{value:'"topRightToBottomLeft"'},{value:'"radial"'}]}},linearGradientCoords:{defaultValue:null,description:"Optional. Specify two points defining the direction of the gradient. Values are normalized from `0` to `1`, `0` being left/top, `1` being right/bottom. Overrides the direction specified in the `gradientType` prop.",name:"linearGradientCoords",required:!1,type:{name:"{ x1: number; y1: number; x2: number; y2: number; }"}},radialGradientCoords:{defaultValue:null,description:"Optional. Specify the location of the radial gradient. Values are normalized from `0` to `1`, `0` being left/top, `1` being right/bottom. Use in conjunction with a `gradientType` of `GradientType.radial`.",name:"radialGradientCoords",required:!1,type:{name:"{ x: number; y: number; }"}},className:{defaultValue:null,description:"Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shapes/CircleShape.tsx#CircleShape"]={docgenInfo:CircleShape.__docgenInfo,name:"CircleShape",path:"src/components/shapes/CircleShape.tsx#CircleShape"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shapes/EllipseShape.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>EllipseShape});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_util_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/util/util.ts"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),_Gradients__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shapes/Gradients.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EllipseShape=_ref=>{let{width=100,height=100,fill,ellipseProps,linearGradientProps,radialGradientProps,gradient,gradientType=_Gradients__WEBPACK_IMPORTED_MODULE_3__.h.topToBottom,linearGradientCoords:linearGradientCoordsProps,radialGradientCoords:radialGradientCoordsProps,className,...svgProps}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Um)(),uuidRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef((0,_util_util__WEBPACK_IMPORTED_MODULE_5__.b)()),linearId=`linear-${uuidRef.current}`,radialId=`radial-${uuidRef.current}`,gradientStops=_Gradients__WEBPACK_IMPORTED_MODULE_3__.g.normalizeGradientStops(gradient),linearGradientCoords=linearGradientCoordsProps?_Gradients__WEBPACK_IMPORTED_MODULE_3__.g.safeLinearCoords(linearGradientCoordsProps):_Gradients__WEBPACK_IMPORTED_MODULE_3__.g.toGradientCoords(gradientType),radialGradientCoords=radialGradientCoordsProps?_Gradients__WEBPACK_IMPORTED_MODULE_3__.g.safeRadialCoords(radialGradientCoordsProps):void 0,widthNum=parseFloat(`${width}`),heightNum=parseFloat(`${height}`),strokeWidthNum=parseFloat(`${ellipseProps?.strokeWidth??0}`),ellipseFill=ellipseProps?.fill??fill??(gradient?gradientType===_Gradients__WEBPACK_IMPORTED_MODULE_3__.h.radial?`url('#${radialId}')`:`url('#${linearId}')`:"black"),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.BS,{viewBox:`0 0 ${widthNum} ${heightNum}`,...svgProps,style:{width:widthNum,height:heightNum,...classNameStyles,...svgProps.style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.lA,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.W4,{id:linearId,...linearGradientCoords,...linearGradientProps,children:gradientStops.map(((s,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.VG,{...s},"linear-stop-"+i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ey,{id:radialId,...radialGradientCoords,...radialGradientProps,children:gradientStops.map(((s,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.VG,{...s},"radial-stop-"+i)))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Pp,{cx:widthNum/2,cy:heightNum/2,rx:(widthNum-strokeWidthNum)/2,ry:(heightNum-strokeWidthNum)/2,...ellipseProps,fill:ellipseFill})]})};EllipseShape.displayName="EllipseShape";try{EllipseShape.displayName="EllipseShape",EllipseShape.__docgenInfo={description:"Read the [full documentation for EllipseShape](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-shapes-ellipseshape--docs)",displayName:"EllipseShape",props:{ellipseProps:{defaultValue:null,description:"Optional. Props for the underlying SVG [Ellipse](https://react-pdf.org/svg#ellipse). Specify a stroke here, such as `{ stroke: 'darkblue', strokeWidth: 5 }`.",name:"ellipseProps",required:!1,type:{name:"Partial<EllipseProps>"}},linearGradientProps:{defaultValue:null,description:"Optional. Props for the underlying SVG [LinearGradient](https://react-pdf.org/svg#lineargradient). Use for advanced gradient customization.",name:"linearGradientProps",required:!1,type:{name:"Partial<LinearGradientProps>"}},radialGradientProps:{defaultValue:null,description:"Optional. Props for the underlying SVG [RadialGradient](https://react-pdf.org/svg#radialgradient). Use for advanced gradient customization.",name:"radialGradientProps",required:!1,type:{name:"Partial<RadialGradientProps>"}},gradient:{defaultValue:null,description:"Optional. An array of custom gradient colors, or [gradient stops](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs#gradient-stops).",name:"gradient",required:!1,type:{name:"string[] | GradientStop[]"}},gradientType:{defaultValue:{value:"GradientType.topToBottom"},description:"Optional. The [type of gradient](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs#gradient-types). Defaults to a linear gradient, `GradientType.topToBottom`.",name:"gradientType",required:!1,type:{name:"enum",value:[{value:'"leftToRight"'},{value:'"rightToLeft"'},{value:'"topToBottom"'},{value:'"bottomToTop"'},{value:'"topLeftToBottomRight"'},{value:'"bottomLeftToTopRight"'},{value:'"bottomRightToTopLeft"'},{value:'"topRightToBottomLeft"'},{value:'"radial"'}]}},linearGradientCoords:{defaultValue:null,description:"Optional. Specify two points defining the direction of the gradient. Values are normalized from `0` to `1`, `0` being left/top, `1` being right/bottom. Overrides the direction specified in the `gradientType` prop.",name:"linearGradientCoords",required:!1,type:{name:"{ x1: number; y1: number; x2: number; y2: number; }"}},radialGradientCoords:{defaultValue:null,description:"Optional. Specify the location of the radial gradient. Values are normalized from `0` to `1`, `0` being left/top, `1` being right/bottom. Use in conjunction with a `gradientType` of `GradientType.radial`.",name:"radialGradientCoords",required:!1,type:{name:"{ x: number; y: number; }"}},className:{defaultValue:null,description:"Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shapes/EllipseShape.tsx#EllipseShape"]={docgenInfo:EllipseShape.__docgenInfo,name:"EllipseShape",path:"src/components/shapes/EllipseShape.tsx#EllipseShape"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shapes/Gradients.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Gradients,h:()=>GradientType});class Gradients{static normalizeGradientStops(gradient){const gradientStops=(gradient??[]).map(((g,i,arr)=>"string"==typeof g?{offset:`${Math.round(i/arr.length*100)}%`,stopColor:g}:g));return 1===gradientStops.length&&gradientStops.push({offset:"100%",stopColor:gradientStops[0].stopColor}),gradientStops}static toGradientCoords(gradientType){let gradientCoords={x1:0,y1:.5,x2:1,y2:.5};switch(gradientType){case GradientType.rightToLeft:gradientCoords={x1:1,y1:.5,x2:0,y2:.5};break;case GradientType.topToBottom:gradientCoords={x1:.5,y1:0,x2:.5,y2:1};break;case GradientType.bottomToTop:gradientCoords={x1:.5,y1:1,x2:.5,y2:0};break;case GradientType.topLeftToBottomRight:gradientCoords={x1:0,y1:0,x2:1,y2:1};break;case GradientType.topRightToBottomLeft:gradientCoords={x1:1,y1:0,x2:0,y2:1};break;case GradientType.bottomLeftToTopRight:gradientCoords={x1:0,y1:1,x2:1,y2:0};break;case GradientType.bottomRightToTopLeft:gradientCoords={x1:1,y1:1,x2:0,y2:0}}return Gradients.safeLinearCoords(gradientCoords)}static safeLinearCoords(coords){return{x1:0===coords.x1?1e-6:1===coords.x1?.999999:coords.x1,y1:0===coords.y1?1e-6:1===coords.y1?.999999:coords.y1,x2:0===coords.x2?1e-6:1===coords.x2?.999999:coords.x2,y2:0===coords.y2?1e-6:1===coords.y2?.999999:coords.y2}}static safeRadialCoords(coords){return{cx:0===coords.x?1e-6:1===coords.x?.999999:coords.x,cy:0===coords.y?1e-6:1===coords.y?.999999:coords.y}}}let GradientType=function(GradientType){return GradientType.leftToRight="leftToRight",GradientType.rightToLeft="rightToLeft",GradientType.topToBottom="topToBottom",GradientType.bottomToTop="bottomToTop",GradientType.topLeftToBottomRight="topLeftToBottomRight",GradientType.bottomLeftToTopRight="bottomLeftToTopRight",GradientType.bottomRightToTopLeft="bottomRightToTopLeft",GradientType.topRightToBottomLeft="topRightToBottomLeft",GradientType.radial="radial",GradientType}({})},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),_components_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="LETTER",orientation,scale=1,pageProps,themeBuilder,width=500,height=700}=_ref;const theme=(themeBuilder??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default).build({scale}),roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_5__.xP,{theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},themeBuilder:{defaultValue:null,description:"",name:"themeBuilder",required:!1,type:{name:"ThemeBuilder"}},width:{defaultValue:{value:"500"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"700"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);