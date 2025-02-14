"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[3993],{"./src/stories/gradient-backdrop/GradientBackdrop.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomLeftToTopRight:()=>BottomLeftToTopRight,BottomRightToTopLeft:()=>BottomRightToTopLeft,BottomToTop:()=>BottomToTop,CustomColors:()=>CustomColors,CustomColorsDarken:()=>CustomColorsDarken,CustomColorsDesaturate:()=>CustomColorsDesaturate,CustomColorsLighten:()=>CustomColorsLighten,CustomColorsSaturate:()=>CustomColorsSaturate,CustomGradientStops:()=>CustomGradientStops,Darken:()=>Darken,Desaturate:()=>Desaturate,Landscape:()=>Landscape,LeftToRight:()=>LeftToRight,Lighten:()=>Lighten,Radial:()=>Radial,RightToLeft:()=>RightToLeft,Saturate:()=>Saturate,SolidDefault:()=>SolidDefault,SolidSingleColor:()=>SolidSingleColor,TopLeftToBottomRight:()=>TopLeftToBottomRight,TopRightToBottomLeft:()=>TopRightToBottomLeft,TopToBottom:()=>TopToBottom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_backdrops_GradientBackdrop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/backdrops/GradientBackdrop.tsx"),_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shapes/Gradients.ts"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_3__.g,{pageProps:{orientation:props.orientation??"portrait"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_backdrops_GradientBackdrop__WEBPACK_IMPORTED_MODULE_1__.J,{...props})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/GradientBackdrop",component:StoryComponent,parameters:{options:{showPanel:!1}}},SolidDefault={args:{size:"LETTER"}},SolidSingleColor={args:{size:"LETTER",gradient:["red"]}},CustomColors={args:{size:"LETTER",gradient:["red","purple"]}},CustomGradientStops={args:{size:"LETTER",gradient:[{offset:"0%",stopColor:"red"},{offset:"10%",stopColor:"darkred"},{offset:"12%",stopColor:"blue"},{offset:"60%",stopColor:"darkblue"},{offset:"70%",stopColor:"blue"},{offset:"100%",stopColor:"yellow"}]}},Darken={args:{size:"LETTER",darken:!0}},Lighten={args:{size:"LETTER",lighten:!0}},Saturate={args:{size:"LETTER",darken:!0,saturate:!0}},Desaturate={args:{size:"LETTER",darken:!0,desaturate:!0}},CustomColorsDarken={args:{size:"LETTER",gradient:["red","yellow","orange"],darken:!0,darkenAmounts:[.2,.5,.8]}},CustomColorsLighten={args:{size:"LETTER",gradient:["blue","teal","cyan"],lighten:!0,lightenAmounts:[.2,.5,.8]}},CustomColorsSaturate={args:{size:"LETTER",gradient:["red","yellow","orange"],saturate:!0,saturateAmounts:[.2,.5,.8]}},CustomColorsDesaturate={args:{size:"LETTER",gradient:["blue","teal","cyan"],desaturate:!0,desaturateAmounts:[.2,.5,.8]}},LeftToRight={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.leftToRight}},RightToLeft={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.rightToLeft}},TopToBottom={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.topToBottom}},BottomToTop={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.bottomToTop}},TopLeftToBottomRight={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.topLeftToBottomRight}},BottomLeftToTopRight={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.bottomLeftToTopRight}},BottomRightToTopLeft={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.bottomRightToTopLeft}},TopRightToBottomLeft={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.topRightToBottomLeft}},Radial={args:{size:"LETTER",swatch:"primary",darken:!0,gradientType:_components_shapes_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.radial}},Landscape={args:{size:"LETTER",darken:!0,orientation:"landscape"}};SolidDefault.parameters={...SolidDefault.parameters,docs:{...SolidDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER'\n  }\n}",...SolidDefault.parameters?.docs?.source}}},SolidSingleColor.parameters={...SolidSingleColor.parameters,docs:{...SolidSingleColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: ['red']\n  }\n}",...SolidSingleColor.parameters?.docs?.source}}},CustomColors.parameters={...CustomColors.parameters,docs:{...CustomColors.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: ['red', 'purple']\n  }\n}",...CustomColors.parameters?.docs?.source}}},CustomGradientStops.parameters={...CustomGradientStops.parameters,docs:{...CustomGradientStops.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: [{\n      offset: '0%',\n      stopColor: 'red'\n    }, {\n      offset: '10%',\n      stopColor: 'darkred'\n    }, {\n      offset: '12%',\n      stopColor: 'blue'\n    }, {\n      offset: '60%',\n      stopColor: 'darkblue'\n    }, {\n      offset: '70%',\n      stopColor: 'blue'\n    }, {\n      offset: '100%',\n      stopColor: 'yellow'\n    }]\n  }\n}",...CustomGradientStops.parameters?.docs?.source}}},Darken.parameters={...Darken.parameters,docs:{...Darken.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    darken: true\n  }\n}",...Darken.parameters?.docs?.source}}},Lighten.parameters={...Lighten.parameters,docs:{...Lighten.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    lighten: true\n  }\n}",...Lighten.parameters?.docs?.source}}},Saturate.parameters={...Saturate.parameters,docs:{...Saturate.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    darken: true,\n    saturate: true\n  }\n}",...Saturate.parameters?.docs?.source}}},Desaturate.parameters={...Desaturate.parameters,docs:{...Desaturate.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    darken: true,\n    desaturate: true\n  }\n}",...Desaturate.parameters?.docs?.source}}},CustomColorsDarken.parameters={...CustomColorsDarken.parameters,docs:{...CustomColorsDarken.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: ['red', 'yellow', 'orange'],\n    darken: true,\n    darkenAmounts: [0.2, 0.5, 0.8]\n  }\n}",...CustomColorsDarken.parameters?.docs?.source}}},CustomColorsLighten.parameters={...CustomColorsLighten.parameters,docs:{...CustomColorsLighten.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: ['blue', 'teal', 'cyan'],\n    lighten: true,\n    lightenAmounts: [0.2, 0.5, 0.8]\n  }\n}",...CustomColorsLighten.parameters?.docs?.source}}},CustomColorsSaturate.parameters={...CustomColorsSaturate.parameters,docs:{...CustomColorsSaturate.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: ['red', 'yellow', 'orange'],\n    saturate: true,\n    saturateAmounts: [0.2, 0.5, 0.8]\n  }\n}",...CustomColorsSaturate.parameters?.docs?.source}}},CustomColorsDesaturate.parameters={...CustomColorsDesaturate.parameters,docs:{...CustomColorsDesaturate.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    gradient: ['blue', 'teal', 'cyan'],\n    desaturate: true,\n    desaturateAmounts: [0.2, 0.5, 0.8]\n  }\n}",...CustomColorsDesaturate.parameters?.docs?.source}}},LeftToRight.parameters={...LeftToRight.parameters,docs:{...LeftToRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.leftToRight\n  }\n}",...LeftToRight.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.rightToLeft\n  }\n}",...RightToLeft.parameters?.docs?.source}}},TopToBottom.parameters={...TopToBottom.parameters,docs:{...TopToBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.topToBottom\n  }\n}",...TopToBottom.parameters?.docs?.source}}},BottomToTop.parameters={...BottomToTop.parameters,docs:{...BottomToTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.bottomToTop\n  }\n}",...BottomToTop.parameters?.docs?.source}}},TopLeftToBottomRight.parameters={...TopLeftToBottomRight.parameters,docs:{...TopLeftToBottomRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.topLeftToBottomRight\n  }\n}",...TopLeftToBottomRight.parameters?.docs?.source}}},BottomLeftToTopRight.parameters={...BottomLeftToTopRight.parameters,docs:{...BottomLeftToTopRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.bottomLeftToTopRight\n  }\n}",...BottomLeftToTopRight.parameters?.docs?.source}}},BottomRightToTopLeft.parameters={...BottomRightToTopLeft.parameters,docs:{...BottomRightToTopLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.bottomRightToTopLeft\n  }\n}",...BottomRightToTopLeft.parameters?.docs?.source}}},TopRightToBottomLeft.parameters={...TopRightToBottomLeft.parameters,docs:{...TopRightToBottomLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.topRightToBottomLeft\n  }\n}",...TopRightToBottomLeft.parameters?.docs?.source}}},Radial.parameters={...Radial.parameters,docs:{...Radial.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    swatch: 'primary',\n    darken: true,\n    gradientType: GradientType.radial\n  }\n}",...Radial.parameters?.docs?.source}}},Landscape.parameters={...Landscape.parameters,docs:{...Landscape.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'LETTER',\n    darken: true,\n    orientation: 'landscape'\n  }\n}",...Landscape.parameters?.docs?.source}}};const __namedExportsOrder=["SolidDefault","SolidSingleColor","CustomColors","CustomGradientStops","Darken","Lighten","Saturate","Desaturate","CustomColorsDarken","CustomColorsLighten","CustomColorsSaturate","CustomColorsDesaturate","LeftToRight","RightToLeft","TopToBottom","BottomToTop","TopLeftToBottomRight","BottomLeftToTopRight","BottomRightToTopLeft","TopRightToBottomLeft","Radial","Landscape"]},"./src/components/backdrops/GradientBackdrop.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>GradientBackdrop});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./src/components/layout/Box.tsx"),Gradients=__webpack_require__("./src/components/shapes/Gradients.ts"),RectangleShape=__webpack_require__("./src/components/shapes/RectangleShape.tsx");const pageSizes={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224],ID1:[153,243]};class PageSizes{static VALID_ORIENTATIONS=["portrait","landscape"];static getOrientation=page=>{const value=page.props?.orientation||"portrait";return PageSizes.VALID_ORIENTATIONS.includes(value)?value:"portrait"};static isLandscape=page=>"landscape"===PageSizes.getOrientation(page);static PAGE_SIZES=pageSizes;static parseValue=value=>{const match=/^(-?\d*\.?\d+)(in|mm|cm|pt|px)?$/g.exec(value);return match?{value:parseFloat(match[1]),unit:match[2]||"pt"}:{value,unit:void 0}};static transformUnit=(value,inputDpi)=>{const scalar=PageSizes.parseValue(value);switch(scalar.unit){case"in":return 72*scalar.value;case"mm":return 2.8346456692913384*scalar.value;case"cm":return 28.346456692913385*scalar.value;case"px":return Math.round(scalar.value*(72/inputDpi));default:return scalar.value}};static transformUnits=(_ref,dpi)=>{let{width,height}=_ref;return{width:PageSizes.transformUnit(width,dpi),height:PageSizes.transformUnit(height,dpi)}};static toSizeObject=v=>({width:v[0],height:v[1]});static flipSizeObject=v=>({width:v.height,height:v.width});static getStringSize=v=>PageSizes.toSizeObject(PageSizes.PAGE_SIZES[v]);static getNumberSize=n=>PageSizes.toSizeObject([n,n]);static getSize=page=>{const value=page.props?.size||"A4",dpi=parseFloat(`${page.props?.dpi||72}`),type=typeof value;let size;return size="string"===type?PageSizes.getStringSize(value):Array.isArray(value)?PageSizes.transformUnits(PageSizes.toSizeObject(value),dpi):"number"===type?PageSizes.transformUnits(PageSizes.getNumberSize(value),dpi):PageSizes.transformUnits(value,dpi),PageSizes.isLandscape(page)?PageSizes.flipSizeObject(size):size}}class Backdrops{static getDimensions(size,orientation){let wh;if("string"==typeof size){const stringSize=PageSizes.getStringSize(size);wh={width:"number"==typeof stringSize.width?stringSize.width:parseFloat(stringSize.width),height:"number"==typeof stringSize.height?stringSize.height:parseFloat(stringSize.height)}}else wh=size;return"landscape"===orientation&&(wh=PageSizes.flipSizeObject(wh)),wh}}var ThemeBuilder=__webpack_require__("./src/themes/ThemeBuilder.ts"),Themes=__webpack_require__("./src/themes/Themes.ts"),color=__webpack_require__("./node_modules/color/index.js"),color_default=__webpack_require__.n(color),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GradientBackdrop=_ref=>{let{children,size,orientation,gradient,gradientType=Gradients.h.topLeftToBottomRight,swatch="primary",darken=!1,darkenAmounts=[0,.5],lighten=!1,lightenAmounts=[0,.5],saturate=!1,saturateAmounts=[0,1],desaturate=!1,desaturateAmounts=[0,1],theme,className,style,...props}=_ref;theme=theme??Themes.B.default.build();const d=Backdrops.getDimensions(size,orientation),width=d.width,height=d.height;if(!gradient){const swatchColor=ThemeBuilder.D.getSwatchColor(swatch,theme.colorScheme);gradient=[`${swatchColor}`,`${swatchColor}`]}const transformGradient=(g,transform)=>g.length>0?"string"==typeof g[0]?g.map(((c,i)=>transform(`${c}`,i))):g.map(((s,i)=>{const gs=s;return{...gs,stopColor:transform(gs.stopColor,i)}})):g;darken&&(gradient=transformGradient(gradient,((c,i)=>new(color_default())(c).darken(darkenAmounts[i]??0).hex()))),lighten&&(gradient=transformGradient(gradient,((c,i)=>new(color_default())(c).lighten(lightenAmounts[i]??0).hex()))),saturate&&(gradient=transformGradient(gradient,((c,i)=>new(color_default())(c).saturate(saturateAmounts[i]??0).hex()))),desaturate&&(gradient=transformGradient(gradient,((c,i)=>new(color_default())(c).desaturate(desaturateAmounts[i]??0).hex())));const injectedChildArray=(Array.isArray(children)?children:void 0!==children?[children]:[]).map(((c,i,arr)=>react.cloneElement(c,{key:"gradient-child-"+i,theme,width,height,...c.props,style:{position:"absolute",...c.props?.style}}))),classNameStyles=ThemeBuilder.D.getStylesForClassName(className,theme.classNames);return(0,jsx_runtime.jsxs)(Box.a,{theme,fixed:!0,...props,style:{position:"absolute",top:0,left:0,right:0,bottom:0,...classNameStyles,...style},children:[(0,jsx_runtime.jsx)(RectangleShape.R,{theme,width,height,gradient,gradientType}),injectedChildArray]})};GradientBackdrop.displayName="GradientBackdrop";try{GradientBackdrop.displayName="GradientBackdrop",GradientBackdrop.__docgenInfo={description:"",displayName:"GradientBackdrop",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'"4A0" | "2A0" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "A7" | "A8" | "A9" | "A10" | "B0" | "B1" | "B2" | "B3" | "B4" | "B5" | "B6" | "B7" | "B8" | "B9" | "B10" | "C0" | "C1" | "C2" | ... 24 more ... | { ...; }'}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string[] | GradientStop[]"}},gradientType:{defaultValue:{value:"GradientType.topLeftToBottomRight"},description:"",name:"gradientType",required:!1,type:{name:"enum",value:[{value:'"leftToRight"'},{value:'"rightToLeft"'},{value:'"topToBottom"'},{value:'"bottomToTop"'},{value:'"topLeftToBottomRight"'},{value:'"bottomLeftToTopRight"'},{value:'"bottomRightToTopLeft"'},{value:'"topRightToBottomLeft"'},{value:'"radial"'}]}},swatch:{defaultValue:{value:"primary"},description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},darken:{defaultValue:{value:"false"},description:"",name:"darken",required:!1,type:{name:"boolean"}},darkenAmounts:{defaultValue:{value:"[0, 0.5]"},description:"How much to darken each gradient color from 0 to 1, as an array.",name:"darkenAmounts",required:!1,type:{name:"number[]"}},lighten:{defaultValue:{value:"false"},description:"",name:"lighten",required:!1,type:{name:"boolean"}},lightenAmounts:{defaultValue:{value:"[0, 0.5]"},description:"How much to lighten each gradient color from 0 to 1, as an array.",name:"lightenAmounts",required:!1,type:{name:"number[]"}},whiten:{defaultValue:null,description:"",name:"whiten",required:!1,type:{name:"boolean"}},whitenAmounts:{defaultValue:null,description:"How much to whiten each gradient color from 0 to 1, as an array.",name:"whitenAmounts",required:!1,type:{name:"number[]"}},blacken:{defaultValue:null,description:"",name:"blacken",required:!1,type:{name:"boolean"}},blackenAmounts:{defaultValue:null,description:"How much to blacken each gradient color from 0 to 1, as an array.",name:"blackenAmounts",required:!1,type:{name:"number[]"}},saturate:{defaultValue:{value:"false"},description:"",name:"saturate",required:!1,type:{name:"boolean"}},saturateAmounts:{defaultValue:{value:"[0, 1]"},description:"How much to saturate each gradient color from 0 to 1, as an array.",name:"saturateAmounts",required:!1,type:{name:"number[]"}},desaturate:{defaultValue:{value:"false"},description:"",name:"desaturate",required:!1,type:{name:"boolean"}},desaturateAmounts:{defaultValue:{value:"[0, 1]"},description:"How much to desaturate each gradient color from 0 to 1, as an array.",name:"desaturateAmounts",required:!1,type:{name:"number[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/backdrops/GradientBackdrop.tsx#GradientBackdrop"]={docgenInfo:GradientBackdrop.__docgenInfo,name:"GradientBackdrop",path:"src/components/backdrops/GradientBackdrop.tsx#GradientBackdrop"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/basics/ThemedView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Div,j:()=>ThemedView});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedView=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build();const classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};ThemedView.displayName="ThemedView";const Div=ThemedView;try{ThemedView.displayName="ThemedView",ThemedView.__docgenInfo={description:"",displayName:"ThemedView",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#ThemedView"]={docgenInfo:ThemedView.__docgenInfo,name:"ThemedView",path:"src/components/basics/ThemedView.tsx#ThemedView"})}catch(__react_docgen_typescript_loader_error){}try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/ThemedView.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/Themes.ts"),_basics_ThemedView__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedView.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,theme,direction,grow,shrink,gap,padding,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_1__.B.default.build();const styleInnate={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding},classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedView__WEBPACK_IMPORTED_MODULE_2__.i,{theme,...props,style:{...styleInnate,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shapes/Gradients.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Gradients,h:()=>GradientType});class Gradients{static normalizeGradientStops(gradient){const gradientStops=(gradient??[]).map(((g,i,arr)=>"string"==typeof g?{offset:`${Math.round(i/arr.length*100)}%`,stopColor:g}:g));return 1===gradientStops.length&&gradientStops.push({offset:"100%",stopColor:gradientStops[0].stopColor}),gradientStops}static toGradientCoords(gradientType){let gradientCoords={x1:0,y1:.5,x2:1,y2:.5};switch(gradientType){case GradientType.rightToLeft:gradientCoords={x1:1,y1:.5,x2:0,y2:.5};break;case GradientType.topToBottom:gradientCoords={x1:.5,y1:0,x2:.5,y2:1};break;case GradientType.bottomToTop:gradientCoords={x1:.5,y1:1,x2:.5,y2:0};break;case GradientType.topLeftToBottomRight:gradientCoords={x1:0,y1:0,x2:1,y2:1};break;case GradientType.topRightToBottomLeft:gradientCoords={x1:1,y1:0,x2:0,y2:1};break;case GradientType.bottomLeftToTopRight:gradientCoords={x1:0,y1:1,x2:1,y2:0};break;case GradientType.bottomRightToTopLeft:gradientCoords={x1:1,y1:1,x2:0,y2:0}}return Gradients.safeLinearCoords(gradientCoords)}static safeLinearCoords(coords){return{x1:0===coords.x1?1e-6:1===coords.x1?.999999:coords.x1,y1:0===coords.y1?1e-6:1===coords.y1?.999999:coords.y1,x2:0===coords.x2?1e-6:1===coords.x2?.999999:coords.x2,y2:0===coords.y2?1e-6:1===coords.y2?.999999:coords.y2}}static safeRadialCoords(coords){return{cx:0===coords.x?1e-6:1===coords.x?.999999:coords.x,cy:0===coords.y?1e-6:1===coords.y?.999999:coords.y}}}let GradientType=function(GradientType){return GradientType.leftToRight="leftToRight",GradientType.rightToLeft="rightToLeft",GradientType.topToBottom="topToBottom",GradientType.bottomToTop="bottomToTop",GradientType.topLeftToBottomRight="topLeftToBottomRight",GradientType.bottomLeftToTopRight="bottomLeftToTopRight",GradientType.bottomRightToTopLeft="bottomRightToTopLeft",GradientType.topRightToBottomLeft="topRightToBottomLeft",GradientType.radial="radial",GradientType}({})},"./src/components/shapes/RectangleShape.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>RectangleShape});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_util_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/util/util.ts"),_Gradients__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shapes/Gradients.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RectangleShape=_ref=>{let{width=100,height=100,fill,rectProps,linearGradientProps,radialGradientProps,gradient,gradientType=_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.topToBottom,linearGradientCoords:linearGradientCoordsProps,radialGradientCoords:radialGradientCoordsProps,theme,className,...svgProps}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build();const uuidRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef((0,_util_util__WEBPACK_IMPORTED_MODULE_5__.b)()),linearId=`linear-${uuidRef.current}`,radialId=`radial-${uuidRef.current}`,gradientStops=_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.normalizeGradientStops(gradient),linearGradientCoords=linearGradientCoordsProps?_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.safeLinearCoords(linearGradientCoordsProps):_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.toGradientCoords(gradientType),radialGradientCoords=radialGradientCoordsProps?_Gradients__WEBPACK_IMPORTED_MODULE_2__.g.safeRadialCoords(radialGradientCoordsProps):void 0,widthNum=parseFloat(`${width}`),heightNum=parseFloat(`${height}`),rectFill=rectProps?.fill??fill??(gradient?gradientType===_Gradients__WEBPACK_IMPORTED_MODULE_2__.h.radial?`url('#${radialId}')`:`url('#${linearId}')`:"black"),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.BS,{viewBox:`0 0 ${widthNum} ${heightNum}`,...svgProps,style:{width:widthNum,height:heightNum,...classNameStyles,...svgProps.style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.lA,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.W4,{id:linearId,...linearGradientCoords,...linearGradientProps,children:gradientStops.map(((s,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.VG,{...s},"linear-stop-"+i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ey,{id:radialId,...radialGradientCoords,...radialGradientProps,children:gradientStops.map(((s,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.VG,{...s},"radial-stop-"+i)))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.rw,{width:widthNum,height:heightNum,...rectProps,fill:rectFill})]})};RectangleShape.displayName="RectangleShape";try{RectangleShape.displayName="RectangleShape",RectangleShape.__docgenInfo={description:"",displayName:"RectangleShape",props:{rectProps:{defaultValue:null,description:"",name:"rectProps",required:!1,type:{name:"Partial<RectProps>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},linearGradientProps:{defaultValue:null,description:"",name:"linearGradientProps",required:!1,type:{name:"Partial<LinearGradientProps>"}},radialGradientProps:{defaultValue:null,description:"",name:"radialGradientProps",required:!1,type:{name:"Partial<RadialGradientProps>"}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string[] | GradientStop[]"}},gradientType:{defaultValue:{value:"GradientType.topToBottom"},description:"",name:"gradientType",required:!1,type:{name:"enum",value:[{value:'"leftToRight"'},{value:'"rightToLeft"'},{value:'"topToBottom"'},{value:'"bottomToTop"'},{value:'"topLeftToBottomRight"'},{value:'"bottomLeftToTopRight"'},{value:'"bottomRightToTopLeft"'},{value:'"topRightToBottomLeft"'},{value:'"radial"'}]}},linearGradientCoords:{defaultValue:null,description:"",name:"linearGradientCoords",required:!1,type:{name:"{ x1: number; y1: number; x2: number; y2: number; }"}},radialGradientCoords:{defaultValue:null,description:"",name:"radialGradientCoords",required:!1,type:{name:"{ x: number; y: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shapes/RectangleShape.tsx#RectangleShape"]={docgenInfo:RectangleShape.__docgenInfo,name:"RectangleShape",path:"src/components/shapes/RectangleShape.tsx#RectangleShape"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="LETTER",scale=1,pageProps,theme,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale});const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:700,width:500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme,size:pageSize,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);