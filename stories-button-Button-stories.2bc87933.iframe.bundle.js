(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[952],{"./src/stories/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Pill:()=>Pill,Regular:()=>Regular,WithHref:()=>WithHref,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/Button.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layout/Box.tsx"),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>{const theme=_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_4__.B.default.build(),elements=[...Object.keys(theme.colorScheme?.colors??{}),...Object.keys(theme.colorScheme?.theme??{}),...Object.keys(theme.colorScheme?.greyscale??{})].map((swatch=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__.$,{wrap:!1,theme,swatch,...props,children:swatch.substring(0,1).toUpperCase()+swatch.substring(1)},swatch)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_2__.g,{pageProps:{theme},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__.a,{direction:"x",gap:15,style:{justifyContent:"center",flexWrap:"wrap"},children:[elements,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__.$,{children:"Default"})]})})};StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Button",component:StoryComponent,parameters:{options:{showPanel:!1}}},Regular={args:{}},Pill={args:{pill:!0}},WithHref={args:{href:"https://github.com/justinmahar/react-pdf-builder"}},Custom={args:{style:{borderRadius:20,width:250,fontSize:30}}};Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Regular.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:"{\n  args: {\n    pill: true\n  }\n}",...Pill.parameters?.docs?.source}}},WithHref.parameters={...WithHref.parameters,docs:{...WithHref.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://github.com/justinmahar/react-pdf-builder'\n  }\n}",...WithHref.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:"{\n  args: {\n    style: {\n      borderRadius: 20,\n      width: 250,\n      fontSize: 30\n    }\n  }\n}",...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Regular","Pill","WithHref","Custom"]},"./src/components/builder/PDFSafeChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>PDFSafeChildren});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFSafeChildren=_ref=>{let{children,textStyle,...props}=_ref;return(Array.isArray(children)?children:[children]).map(((c,i)=>"string"==typeof c?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:textStyle,children:c},`child-${i}`):c))};try{PDFSafeChildren.displayName="PDFSafeChildren",PDFSafeChildren.__docgenInfo={description:"Ensures children that are strings are wrapped in a Text component.",displayName:"PDFSafeChildren",props:{textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"Style"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"]={docgenInfo:PDFSafeChildren.__docgenInfo,name:"PDFSafeChildren",path:"src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const mergedProps={...theme?.buttonProps,...props},swatch=mergedProps.swatch??"primary",styleOverride={};swatch&&"link"!==swatch?(styleOverride.backgroundColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(swatch,theme.colorScheme),styleOverride.color=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getContrastColor(swatch,theme.colorScheme)):"link"===swatch&&(styleOverride.backgroundColor="#FFFFFF00",styleOverride.color=mergedProps.linkColor??_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor("blue",theme.colorScheme)),mergedProps.pill&&(styleOverride.borderRadius="50%");const hasHref=void 0!==mergedProps.href,child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{textStyle:hasHref?{textDecoration:"no-underline"}:void 0,children}),buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...mergedProps,style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",...mergedProps.style,...styleOverride,...style},children:child});return hasHref?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.N_,{href:mergedProps.href,children:buttonElement}):buttonElement};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},pill:{defaultValue:null,description:"",name:"pill",required:!1,type:{name:"boolean"}},linkColor:{defaultValue:null,description:"",name:"linkColor",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/ThemedPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>ThemedPage});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedPage=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const mergedProps={...theme.pageProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.backgroundColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.YW,{...mergedProps,style:{...mergedProps.style,...styleOverride,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};ThemedPage.displayName="ThemedPage";try{ThemedPage.displayName="ThemedPage",ThemedPage.__docgenInfo={description:"",displayName:"ThemedPage",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ThemedPage.tsx#ThemedPage"]={docgenInfo:ThemedPage.__docgenInfo,name:"ThemedPage",path:"src/components/pages/ThemedPage.tsx#ThemedPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/theme/ThemeBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>ThemeBuilder});var _util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/util.ts");class ThemeBuilder{constructor(colorScheme){this.colorScheme=colorScheme}build(config){const themeOverride={...config?.override},scale=config?.scale??1,colorScheme=ThemeBuilder.overrideColorScheme(this.colorScheme,themeOverride?.colorScheme),theme=this.doBuild(scale,colorScheme);return ThemeBuilder.overrideTheme(theme,themeOverride).colorScheme=colorScheme,theme}static overrideTheme(theme){let override=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,_util__WEBPACK_IMPORTED_MODULE_0__.$)(theme,override)}static overrideColorScheme(colorScheme){let overrides=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,_util__WEBPACK_IMPORTED_MODULE_0__.$)(colorScheme,overrides)}static getSwatchColor(swatch,colorScheme){return colorScheme?.theme[swatch]??colorScheme?.colors[swatch]??colorScheme?.greyscale[swatch]}static getContrastColor(swatch,colorScheme){return colorScheme?.contrast[swatch]}static decimalToHex(decimal){return Math.round(255*Math.min(1,Math.max(0,decimal))).toString(16).padStart(2,"0").toUpperCase()}}},"./src/components/theme/themes/Themes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Themes});var ThemeBuilder=__webpack_require__("./src/components/theme/ThemeBuilder.ts");const colors={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0"},greyscale={white:"#ffffff",gray100:"#f8f9fa",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#6c757d",gray700:"#495057",gray800:"#343a40",gray900:"#212529",black:"#000000"},bootstrapLightColorScheme={colors,greyscale,theme:{primary:colors.blue,secondary:greyscale.gray600,success:colors.green,info:colors.cyan,warning:colors.yellow,danger:colors.red,light:greyscale.gray100,dark:greyscale.gray900},contrast:{blue:greyscale.white,indigo:greyscale.white,purple:greyscale.white,pink:greyscale.white,red:greyscale.white,orange:greyscale.white,yellow:greyscale.black,green:greyscale.white,teal:greyscale.white,cyan:greyscale.white,white:greyscale.black,gray100:greyscale.black,gray200:greyscale.black,gray300:greyscale.black,gray400:greyscale.black,gray500:greyscale.black,gray600:greyscale.white,gray700:greyscale.white,gray800:greyscale.white,gray900:greyscale.white,black:greyscale.white,primary:greyscale.white,secondary:greyscale.white,success:greyscale.white,info:greyscale.white,warning:greyscale.black,danger:greyscale.white,light:greyscale.black,dark:greyscale.white}};class LightThemeBuilder extends ThemeBuilder.D{constructor(){super(bootstrapLightColorScheme)}doBuild(scale,colorScheme){return{colorScheme,buttonProps:{style:{padding:10*scale,width:150*scale,borderRadius:5*scale}},cardProps:{style:{marginBottom:22.5*scale}},cardBodyProps:{style:{backgroundColor:colorScheme.greyscale.white,padding:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,border:1*scale,borderColor:colorScheme.greyscale.gray400}},cardHeaderProps:{style:{backgroundColor:colorScheme.greyscale.gray200,paddingVertical:10*scale,paddingHorizontal:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,border:1*scale,borderColor:colorScheme.greyscale.gray400}},listItemContainerProps:{style:{marginBottom:6.3*scale,columnGap:20*scale}},listItemMarkerProps:{style:{}},listItemProps:{style:{}},orderedListProps:{style:{marginBottom:22.5*scale,fontSize:18*scale}},unorderedListProps:{style:{marginBottom:22.5*scale,fontSize:18*scale}},pageProps:{style:{padding:36*scale,fontSize:18*scale}},pageNumberProps:{style:{}},tableProps:{borderWidth:1*scale,borderStyle:"solid",borderColor:colorScheme.greyscale.black,stripeStyle:{backgroundColor:"#00000015"},style:{marginBottom:22.5*scale}},tableRowProps:{style:{}},tableCellProps:{style:{padding:8*scale}},headingProps:{style:{}},heading1Props:{style:{fontSize:(19.98+20)*scale,marginBottom:27*scale,borderBottom:4*scale}},heading2Props:{style:{fontSize:(19.98+16)*scale,marginBottom:25.2*scale,borderBottom:4*scale}},heading3Props:{style:{fontSize:31.98*scale,marginBottom:18*1.3*scale,borderBottom:3*scale}},heading4Props:{style:{fontSize:27.98*scale,marginBottom:18*1.2*scale,borderBottom:3*scale}},heading5Props:{style:{fontSize:23.98*scale,marginBottom:19.8*scale,borderBottom:2*scale}},heading6Props:{style:{fontSize:19.98*scale,marginBottom:18*scale,borderBottom:2*scale}},paragraphProps:{style:{fontSize:18*scale,marginBottom:22.5*scale}}}}}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class Themes{static light=new LightThemeBuilder;static#_=_defineProperty(this,"default",Themes.light)}},"./src/components/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>deepMerge,b:()=>randomUuid});var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");function randomUuid(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.A)()}function deepMerge(record1,record2){const merged={...record1};for(const key in record1)if(record2.hasOwnProperty(key)){const value1=merged[key],value2=record2[key];merged[key]="object"==typeof value1&&null!==value1&&"object"==typeof value2&&null!==value2?deepMerge(value1,value2):value2}return merged}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="A4",scale=1,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme:_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale}),size:pageSize,...pageProps,style:{...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"A4"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}},"?9157":()=>{}}]);