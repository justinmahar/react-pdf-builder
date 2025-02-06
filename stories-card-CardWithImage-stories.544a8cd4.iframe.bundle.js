(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[487],{"./src/stories/card/CardWithImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardWithImage:()=>CardWithImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_card_Card__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/card/Card.tsx")),_components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/card/CardBody.tsx"),_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Heading6.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/typography/Paragraph.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_6__.g,{pageProps:{style:{backgroundColor:"#333388"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__.b,{withFooter:!0,style:{padding:0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__._V,{src:"https://justinmahar.github.io/react-pdf-builder/images/600x200.jpg",style:{width:"100%",borderTopLeftRadius:9,borderTopRightRadius:9}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__.b,{withHeader:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_4__.T,{children:"Card with image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_5__.f,{style:{marginBottom:0},children:"This card has two card bodies. The first is a card body with no padding and a 100% width placeholder image inside. The image has a top border radius to allow it to fit snugly within the card body. The second card body contains this text."})]})]})});StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Card",component:StoryComponent,parameters:{options:{showPanel:!1}}},CardWithImage={args:{}};CardWithImage.parameters={...CardWithImage.parameters,docs:{...CardWithImage.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...CardWithImage.parameters?.docs?.source}}};const __namedExportsOrder=["CardWithImage"]},"./src/components/builder/PDFSafeChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>PDFSafeChildren});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFSafeChildren=_ref=>{let{children,textStyle,...props}=_ref;return(Array.isArray(children)?children:[children]).map(((c,i)=>"string"==typeof c?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:textStyle,children:c},`child-${i}`):c))};try{PDFSafeChildren.displayName="PDFSafeChildren",PDFSafeChildren.__docgenInfo={description:"Ensures children that are strings are wrapped in a Text component.",displayName:"PDFSafeChildren",props:{textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"Style"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"]={docgenInfo:PDFSafeChildren.__docgenInfo,name:"PDFSafeChildren",path:"src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Card});__webpack_require__("./node_modules/react/index.js");var _builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/builder/PDFSafeChildren.tsx"),_layout_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/Box.tsx"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const mergedProps={...theme.cardProps,...props};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_2__.a,{...mergedProps,style:{overflow:"hidden",...mergedProps?.style,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_1__.P,{children})})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/CardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>CardBody});__webpack_require__("./node_modules/react/index.js");var _layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/builder/PDFSafeChildren.tsx"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardBody=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const mergedProps={...theme.cardBodyProps,...props},styleOverride={};return mergedProps.withHeader&&(styleOverride.borderTopLeftRadius=0,styleOverride.borderTopRightRadius=0),mergedProps.withFooter&&(styleOverride.borderBottomLeftRadius=0,styleOverride.borderBottomRightRadius=0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{...mergedProps,style:{overflow:"hidden",...mergedProps?.style,...styleOverride,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};CardBody.displayName="CardBody";try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"",displayName:"CardBody",props:{withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},withFooter:{defaultValue:null,description:"",name:"withFooter",required:!1,type:{name:"boolean"}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/CardBody.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"src/components/card/CardBody.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,direction,grow,shrink,gap,padding,...props}=_ref;const style={display:"flex",flexDirection:"horizontal"===direction||"x"===direction?"row":"column",flexGrow:grow?1:void 0,flexShrink:shrink?1:void 0,gap,padding};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...style,...props.style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"x"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/ThemedPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>ThemedPage});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedPage=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const mergedProps={...theme.pageProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.backgroundColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.YW,{...mergedProps,style:{...mergedProps.style,...styleOverride,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};ThemedPage.displayName="ThemedPage";try{ThemedPage.displayName="ThemedPage",ThemedPage.__docgenInfo={description:"",displayName:"ThemedPage",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ThemedPage.tsx#ThemedPage"]={docgenInfo:ThemedPage.__docgenInfo,name:"ThemedPage",path:"src/components/pages/ThemedPage.tsx#ThemedPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/theme/ThemeBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>ThemeBuilder});var _util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/util.ts");class ThemeBuilder{constructor(colorScheme){this.colorScheme=colorScheme}build(config){const themeOverride={...config?.override},scale=config?.scale??1,colorScheme=ThemeBuilder.overrideColorScheme(this.colorScheme,themeOverride?.colorScheme),theme=this.doBuild(scale,colorScheme);return ThemeBuilder.overrideTheme(theme,themeOverride).colorScheme=colorScheme,theme}static overrideTheme(theme){let override=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,_util__WEBPACK_IMPORTED_MODULE_0__.$)(theme,override)}static overrideColorScheme(colorScheme){let overrides=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,_util__WEBPACK_IMPORTED_MODULE_0__.$)(colorScheme,overrides)}static getSwatchColor(swatch,colorScheme){return colorScheme?.theme[swatch]??colorScheme?.colors[swatch]??colorScheme?.greyscale[swatch]}static getContrastColor(swatch,colorScheme){return colorScheme?.contrast[swatch]}static decimalToHex(decimal){return Math.round(255*Math.min(1,Math.max(0,decimal))).toString(16).padStart(2,"0").toUpperCase()}}},"./src/components/theme/themes/Themes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Themes});var ThemeBuilder=__webpack_require__("./src/components/theme/ThemeBuilder.ts");const colors={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0"},greyscale={white:"#ffffff",gray100:"#f8f9fa",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#6c757d",gray700:"#495057",gray800:"#343a40",gray900:"#212529",black:"#000000"},bootstrapLightColorScheme={colors,greyscale,theme:{primary:colors.blue,secondary:greyscale.gray600,success:colors.green,info:colors.cyan,warning:colors.yellow,danger:colors.red,light:greyscale.gray100,dark:greyscale.gray900},contrast:{blue:greyscale.white,indigo:greyscale.white,purple:greyscale.white,pink:greyscale.white,red:greyscale.white,orange:greyscale.white,yellow:greyscale.black,green:greyscale.white,teal:greyscale.white,cyan:greyscale.white,white:greyscale.black,gray100:greyscale.black,gray200:greyscale.black,gray300:greyscale.black,gray400:greyscale.black,gray500:greyscale.black,gray600:greyscale.white,gray700:greyscale.white,gray800:greyscale.white,gray900:greyscale.white,black:greyscale.white,primary:greyscale.white,secondary:greyscale.white,success:greyscale.white,info:greyscale.white,warning:greyscale.black,danger:greyscale.white,light:greyscale.black,dark:greyscale.white}};class LightThemeBuilder extends ThemeBuilder.D{constructor(){super(bootstrapLightColorScheme)}doBuild(scale,colorScheme){return{colorScheme,buttonProps:{style:{padding:10*scale,width:150*scale,borderRadius:5*scale}},cardProps:{style:{marginBottom:22.5*scale}},cardBodyProps:{style:{backgroundColor:colorScheme.greyscale.white,padding:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,border:1*scale,borderColor:colorScheme.greyscale.gray400}},cardHeaderProps:{style:{backgroundColor:colorScheme.greyscale.gray200,paddingVertical:10*scale,paddingHorizontal:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,border:1*scale,borderColor:colorScheme.greyscale.gray400}},listItemContainerProps:{style:{marginBottom:6.3*scale,columnGap:20*scale}},listItemMarkerProps:{style:{}},listItemProps:{style:{}},orderedListProps:{style:{marginBottom:22.5*scale,fontSize:18*scale}},unorderedListProps:{style:{marginBottom:22.5*scale,fontSize:18*scale}},pageProps:{style:{padding:36*scale,fontSize:18*scale}},pageNumberProps:{style:{}},tableProps:{borderWidth:1*scale,borderStyle:"solid",borderColor:colorScheme.greyscale.black,stripeStyle:{backgroundColor:"#00000015"},style:{marginBottom:22.5*scale}},tableRowProps:{style:{}},tableCellProps:{style:{padding:8*scale}},headingProps:{style:{}},heading1Props:{style:{fontSize:(19.98+20)*scale,marginBottom:27*scale,borderBottom:4*scale}},heading2Props:{style:{fontSize:(19.98+16)*scale,marginBottom:25.2*scale,borderBottom:4*scale}},heading3Props:{style:{fontSize:31.98*scale,marginBottom:18*1.3*scale,borderBottom:3*scale}},heading4Props:{style:{fontSize:27.98*scale,marginBottom:18*1.2*scale,borderBottom:3*scale}},heading5Props:{style:{fontSize:23.98*scale,marginBottom:19.8*scale,borderBottom:2*scale}},heading6Props:{style:{fontSize:19.98*scale,marginBottom:18*scale,borderBottom:2*scale}},paragraphProps:{style:{fontSize:18*scale,marginBottom:22.5*scale}}}}}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class Themes{static light=new LightThemeBuilder;static#_=_defineProperty(this,"default",Themes.light)}},"./src/components/typography/Heading6.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Heading6});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/themes/Themes.ts")),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading6=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const mergedProps={...theme?.headingProps,...theme?.heading6Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading6Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...mergedThemeStyles,...styleOverride,...style},children})};Heading6.displayName="Heading6";try{Heading6.displayName="Heading6",Heading6.__docgenInfo={description:"",displayName:"Heading6",props:{rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading6.tsx#Heading6"]={docgenInfo:Heading6.__docgenInfo,name:"Heading6",path:"src/components/typography/Heading6.tsx#Heading6"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/theme/ThemeBuilder.ts")),_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme=_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build(),style,...props}=_ref;const mergedProps={...theme?.paragraphProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.color=_theme_ThemeBuilder__WEBPACK_IMPORTED_MODULE_4__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{...mergedProps,style:{...mergedProps?.style,...styleOverride,...style},children})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>deepMerge,b:()=>randomUuid});var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");function randomUuid(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.A)()}function deepMerge(record1,record2){const merged={...record1};for(const key in record1)if(record2.hasOwnProperty(key)){const value1=merged[key],value2=record2[key];merged[key]="object"==typeof value1&&null!==value1&&"object"==typeof value2&&null!==value2?deepMerge(value1,value2):value2}return merged}},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="A4",scale=1,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme:_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale}),size:pageSize,...pageProps,style:{...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"A4"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}},"?9157":()=>{}}]);