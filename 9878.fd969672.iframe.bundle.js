(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[9878],{"./src/components/builder/PDFSafeChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>PDFSafeChildren});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const PDFSafeChildren=_ref=>{let{children,textStyle,...props}=_ref;return(Array.isArray(children)?children:[children]).map(((c,i)=>"string"==typeof c?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:textStyle,children:c},`child-${i}`):c))};try{PDFSafeChildren.displayName="PDFSafeChildren",PDFSafeChildren.__docgenInfo={description:"Ensures children that are strings are wrapped in a Text component.",displayName:"PDFSafeChildren",props:{textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"Style"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"]={docgenInfo:PDFSafeChildren.__docgenInfo,name:"PDFSafeChildren",path:"src/components/builder/PDFSafeChildren.tsx#PDFSafeChildren"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/ThemedPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>ThemedPage});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/builder/PDFSafeChildren.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedPage=_ref=>{let{children,theme=_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build(),style,...props}=_ref;const themeProps=theme.pageProps,mergedProps={...themeProps,...props},styleOverride={};return mergedProps.swatch&&(styleOverride.backgroundColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.YW,{...mergedProps,style:{...themeProps?.style,...styleOverride,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_builder_PDFSafeChildren__WEBPACK_IMPORTED_MODULE_2__.P,{children})})};ThemedPage.displayName="ThemedPage";try{ThemedPage.displayName="ThemedPage",ThemedPage.__docgenInfo={description:"",displayName:"ThemedPage",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:{value:"Themes.default.build()"},description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ThemedPage.tsx#ThemedPage"]={docgenInfo:ThemedPage.__docgenInfo,name:"ThemedPage",path:"src/components/pages/ThemedPage.tsx#ThemedPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/themes/ThemeBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>ThemeBuilder});var color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__),_util_util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/util/util.ts");class ThemeBuilder{constructor(colorScheme){this.colorScheme=colorScheme}build(config){const themeOverride={...config?.override},scale=config?.scale??1,colorScheme=ThemeBuilder.overrideColorScheme(this.colorScheme,themeOverride?.colorScheme),theme=this.doBuild(scale,colorScheme),mergedTheme=ThemeBuilder.overrideTheme(theme,themeOverride);return mergedTheme.colorScheme=colorScheme,mergedTheme}static overrideTheme(theme){let override=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,_util_util__WEBPACK_IMPORTED_MODULE_0__.$)(theme,override)}static overrideColorScheme(colorScheme){let overrides=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,_util_util__WEBPACK_IMPORTED_MODULE_0__.$)(colorScheme,overrides)}static getSwatchColor(swatch,colorScheme){return colorScheme?.theme[swatch]??colorScheme?.colors[swatch]??colorScheme?.greyscale[swatch]}static getContrastColor(swatch,colorScheme){return colorScheme?.contrast[swatch]}static lighten(color,ratio){return new(color__WEBPACK_IMPORTED_MODULE_1___default())(color).lighten(ratio).hex()}static darken(color,ratio){return new(color__WEBPACK_IMPORTED_MODULE_1___default())(color).darken(ratio).hex()}static decimalToHex(decimal){return Math.round(255*Math.min(1,Math.max(0,decimal))).toString(16).padStart(2,"0").toUpperCase()}static getStylesForClassName(className,classNames){return(className??"").split(" ").map((c=>c.trim())).filter((c=>c)).reduce(((p,c)=>({...p,...classNames[c]})),{})}}},"./src/themes/Themes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Themes});var ThemeBuilder=__webpack_require__("./src/themes/ThemeBuilder.ts");const colors={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0"},greyscale={white:"#ffffff",gray100:"#f8f9fa",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#6c757d",gray700:"#495057",gray800:"#343a40",gray900:"#212529",black:"#000000"},lightColorScheme={colors,greyscale,theme:{primary:colors.blue,secondary:greyscale.gray600,success:colors.green,info:colors.cyan,warning:colors.yellow,danger:colors.red,light:greyscale.gray100,dark:greyscale.gray900},contrast:{blue:greyscale.white,indigo:greyscale.white,purple:greyscale.white,pink:greyscale.white,red:greyscale.white,orange:greyscale.white,yellow:greyscale.black,green:greyscale.white,teal:greyscale.white,cyan:greyscale.white,white:greyscale.black,gray100:greyscale.black,gray200:greyscale.black,gray300:greyscale.black,gray400:greyscale.black,gray500:greyscale.black,gray600:greyscale.white,gray700:greyscale.white,gray800:greyscale.white,gray900:greyscale.white,black:greyscale.white,primary:greyscale.white,secondary:greyscale.white,success:greyscale.white,info:greyscale.white,warning:greyscale.black,danger:greyscale.white,light:greyscale.black,dark:greyscale.white}},DarkColorScheme_colors={blue:ThemeBuilder.D.darken(lightColorScheme.colors.blue,.2),indigo:ThemeBuilder.D.darken(lightColorScheme.colors.indigo,.2),purple:ThemeBuilder.D.darken(lightColorScheme.colors.purple,.2),pink:ThemeBuilder.D.darken(lightColorScheme.colors.pink,.2),red:ThemeBuilder.D.darken(lightColorScheme.colors.red,.2),orange:ThemeBuilder.D.darken(lightColorScheme.colors.orange,.2),yellow:ThemeBuilder.D.darken(lightColorScheme.colors.yellow,.2),green:ThemeBuilder.D.darken(lightColorScheme.colors.green,.2),teal:ThemeBuilder.D.darken(lightColorScheme.colors.teal,.2),cyan:ThemeBuilder.D.darken(lightColorScheme.colors.cyan,.2)},DarkColorScheme_greyscale={white:ThemeBuilder.D.darken(lightColorScheme.greyscale.white,.01),gray100:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray100,.01),gray200:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray200,.01),gray300:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray300,.01),gray400:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray400,.05),gray500:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray500,.05),gray600:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray600,.05),gray700:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray700,.05),gray800:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray800,.05),gray900:ThemeBuilder.D.darken(lightColorScheme.greyscale.gray900,.05),black:lightColorScheme.greyscale.black},lightContrast=DarkColorScheme_greyscale.gray100,darkContrast=DarkColorScheme_greyscale.black,darkColorScheme={colors:DarkColorScheme_colors,greyscale:DarkColorScheme_greyscale,theme:{primary:DarkColorScheme_colors.blue,secondary:DarkColorScheme_greyscale.gray600,success:DarkColorScheme_colors.green,info:DarkColorScheme_colors.cyan,warning:DarkColorScheme_colors.yellow,danger:DarkColorScheme_colors.red,light:DarkColorScheme_greyscale.gray100,dark:DarkColorScheme_greyscale.gray900},contrast:{blue:lightContrast,indigo:lightContrast,purple:lightContrast,pink:lightContrast,red:lightContrast,orange:lightContrast,yellow:darkContrast,green:lightContrast,teal:lightContrast,cyan:lightContrast,white:darkContrast,gray100:darkContrast,gray200:darkContrast,gray300:darkContrast,gray400:darkContrast,gray500:darkContrast,gray600:lightContrast,gray700:lightContrast,gray800:lightContrast,gray900:lightContrast,black:lightContrast,primary:lightContrast,secondary:lightContrast,success:lightContrast,info:lightContrast,warning:darkContrast,danger:lightContrast,light:darkContrast,dark:lightContrast}};function createClasses(createClassName,createStyle,values){let cn={};for(let i=0;i<values.length;i++){const v=values[i],key=createClassName(v,i),style=createStyle(v,i);cn={...cn,[key]:style}}return cn}class LightThemeBuilder extends ThemeBuilder.D{constructor(){super(lightColorScheme)}doBuild(scale,colorScheme){const borderColor=colorScheme.greyscale.gray500,classNames=function(scale){let emSize=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;const spacer=emSize*scale,fontSizeBase=emSize*scale,sizingPercentageValues=[25,50,75,100],spacingMultiplierValues=[0,.25,.5,1,1.5,3],headingSizeMultiplierValues=[2.5,2,1.75,1.5,1.25,1];return{...createClasses((v=>`d-${v}`),(v=>({display:v})),["flex","none"]),...createClasses((v=>`flex-${v}`),(v=>({flexDirection:v})),["column","row","column-reverse","row-reverse"]),...createClasses((v=>`justify-content-${v.replace("flex-","").replace("space-","")}`),(v=>({justifyContent:v})),["center","flex-end","flex-start","space-around","space-between","space-evenly"]),...createClasses((v=>`align-items-${v.replace("flex-","")}`),(v=>({alignItems:v})),["baseline","center","flex-end","flex-start","stretch"]),...createClasses((v=>`align-self-${v.replace("flex-","")}`),(v=>({alignSelf:v})),["baseline","center","flex-end","flex-start","stretch","auto"]),...createClasses((v=>`flex-grow-${v}`),(v=>({flexGrow:v})),[0,1]),...createClasses((v=>`flex-shrink-${v}`),(v=>({flexShrink:v})),[0,1]),...createClasses((v=>`flex-${v}`),(v=>({flexWrap:v})),["nowrap","wrap","wrap-reverse"]),...createClasses((v=>`align-content-${v.replace("flex-","").replace("space-","")}`),(v=>({alignContent:v})),["center","flex-end","flex-start","space-around","space-between","space-evenly","stretch"]),"overflow-hidden":{overflow:"hidden"},...createClasses((v=>`position-${v}`),(v=>({position:v})),["absolute","relative","static"]),...createClasses((v=>`w-${v}`),(v=>({width:`${v}%`})),sizingPercentageValues),"w-auto":{width:"auto"},"mw-100":{maxWidth:"100%"},...createClasses((v=>`h-${v}`),(v=>({height:`${v}%`})),sizingPercentageValues),"h-auto":{height:"auto"},"mh-100":{maxHeight:"100%"},"vw-100":{width:"100vw"},"min-vw-100":{minWidth:"100vw"},"vh-100":{height:"100vh"},"min-vh-100":{minHeight:"100vh"},...createClasses(((v,i)=>`m-${i}`),(v=>({margin:spacer*v})),spacingMultiplierValues),"m-auto":{margin:"auto"},...createClasses(((v,i)=>`mt-${i}`),(v=>({marginTop:spacer*v})),spacingMultiplierValues),"mt-auto":{marginTop:"auto"},...createClasses(((v,i)=>`me-${i}`),(v=>({marginRight:spacer*v})),spacingMultiplierValues),"me-auto":{marginRight:"auto"},...createClasses(((v,i)=>`mb-${i}`),(v=>({marginBottom:spacer*v})),spacingMultiplierValues),"mb-auto":{marginBottom:"auto"},...createClasses(((v,i)=>`ms-${i}`),(v=>({marginLeft:spacer*v})),spacingMultiplierValues),"ms-auto":{marginLeft:"auto"},...createClasses(((v,i)=>`mx-${i}`),(v=>({marginLeft:spacer*v,marginRight:spacer*v})),spacingMultiplierValues),"mx-auto":{marginLeft:"auto",marginRight:"auto"},...createClasses(((v,i)=>`my-${i}`),(v=>({marginTop:spacer*v,marginBottom:spacer*v})),spacingMultiplierValues),"my-auto":{marginTop:"auto",marginBottom:"auto"},...createClasses(((v,i)=>`p-${i}`),(v=>({padding:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`pt-${i}`),(v=>({paddingTop:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`pe-${i}`),(v=>({paddingRight:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`pb-${i}`),(v=>({paddingBottom:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`ps-${i}`),(v=>({paddingLeft:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`px-${i}`),(v=>({paddingLeft:spacer*v,paddingRight:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`py-${i}`),(v=>({paddingTop:spacer*v,paddingBottom:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`gap-${i}`),(v=>({gap:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`row-gap-${i}`),(v=>({rowGap:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`column-gap-${i}`),(v=>({columnGap:spacer*v})),spacingMultiplierValues),...createClasses(((v,i)=>`h${i+1}`),(v=>({fontSize:fontSizeBase*v,lineHeight:1.2,fontWeight:500,marginBottom:.5*fontSizeBase})),headingSizeMultiplierValues),...createClasses(((v,i)=>`fs-${i+1}`),(v=>({fontSize:fontSizeBase*v})),headingSizeMultiplierValues),...createClasses((v=>`lh-${v}`),((v,i)=>({lineHeight:[1.25,1.5,2][i]})),["sm","base","lg"]),...createClasses(((v,i)=>`display-${i+1}`),(v=>({fontSize:fontSizeBase*v,fontWeight:300,lineHeight:1.2})),[5,4.5,4,3.5,3,2.5]),...createClasses((v=>`text-${v}`),(v=>({textAlign:v})),["center","justify","left","right"]),...createClasses((v=>`text-${v}`),(v=>({textTransform:v})),["capitalize","lowercase","uppercase"]),small:{fontSize:.875*fontSizeBase},...createClasses((v=>`fw-${v}`),((v,i)=>({fontWeight:100*(i+1)})),["lightest","lighter","light","normal","medium","semibold","bold","bolder","boldest"]),...createClasses((v=>`fst-${v}`),(v=>({fontStyle:v})),["italic","normal"]),...createClasses((v=>`text-decoration-${v.split(" ").join("-")}`),(v=>({textDecoration:v})),["line-through","none","underline","underline line-through"]),"text-overflow-ellipsis":{textOverflow:"ellipsis"}}}(scale,16);return console.log(classNames),{colorScheme,classNames,_bodyBackgroundColor:colorScheme.greyscale.white,_bodyColor:colorScheme.greyscale.black,_baseFontSize:16,buttonProps:{style:{padding:10*scale,width:150*scale,borderRadius:5*scale}},cardProps:{style:{marginBottom:20*scale}},cardBodyProps:{style:{backgroundColor:colorScheme.greyscale.white,padding:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,borderWidth:1*scale,borderColor}},cardHeaderProps:{style:{backgroundColor:colorScheme.greyscale.gray200,paddingVertical:10*scale,paddingHorizontal:15*scale,borderTopLeftRadius:10*scale,borderTopRightRadius:10*scale,borderBottomLeftRadius:10*scale,borderBottomRightRadius:10*scale,borderWidth:1*scale,borderColor}},linkProps:{style:{}},listItemContainerProps:{style:{marginBottom:5.6*scale,columnGap:20*scale}},listItemMarkerProps:{style:{}},listItemProps:{style:{}},orderedListProps:{style:{marginBottom:20*scale,fontSize:16*scale}},unorderedListProps:{style:{marginBottom:20*scale,fontSize:16*scale}},pageProps:{style:{padding:36*scale,fontSize:16*scale}},pageNumberProps:{style:{}},signatureProps:{style:{borderBottomWidth:3*scale,borderBottomColor:colorScheme.greyscale.black,minHeight:45*scale},xProps:{style:{fontSize:28*scale,marginLeft:12*scale,marginBottom:2*scale}}},tableProps:{borderWidth:1*scale,borderStyle:"solid",borderColor:colorScheme.greyscale.black,stripeStyle:{backgroundColor:"#00000015"},style:{marginBottom:20*scale}},tableRowProps:{style:{}},tableCellProps:{style:{padding:8*scale}},blockquoteProps:{style:{borderLeftWidth:5*scale,padding:15*scale,borderColor:colorScheme.greyscale.gray800,backgroundColor:colorScheme.greyscale.gray200}},headingProps:{style:{}},heading1Props:{className:"h1",style:{borderBottomWidth:4*scale}},heading2Props:{className:"h2",style:{borderBottomWidth:3*scale}},heading3Props:{className:"h3",style:{borderBottomWidth:3*scale}},heading4Props:{className:"h4",style:{borderBottomWidth:2*scale}},heading5Props:{className:"h5",style:{borderBottomWidth:2*scale}},heading6Props:{className:"h6",style:{borderBottomWidth:1*scale}},paragraphProps:{style:{fontSize:16*scale,marginBottom:16*scale}}}}}class DarkThemeBuilder extends ThemeBuilder.D{constructor(){super(darkColorScheme)}doBuild(scale,colorScheme){const lightTheme=(new LightThemeBuilder).build({override:{colorScheme}}),bodyBackgroundColor=colorScheme.greyscale.gray900,bodyColor=colorScheme.greyscale.gray300,borderColor=colorScheme.greyscale.gray700,linkColor=ThemeBuilder.D.lighten(lightColorScheme.colors.blue,.4),darkThemeOverride={colorScheme,_bodyBackgroundColor:bodyBackgroundColor,_bodyColor:bodyColor,buttonProps:{linkColor},cardBodyProps:{style:{backgroundColor:bodyBackgroundColor,borderColor}},cardHeaderProps:{style:{backgroundColor:colorScheme.greyscale.gray800,borderColor}},linkProps:{style:{color:linkColor}},pageProps:{style:{backgroundColor:bodyBackgroundColor,color:bodyColor}},signatureProps:{style:{borderBottomColor:bodyColor}},tableProps:{stripeOpacity:.3,borderColor:colorScheme.greyscale.gray300,stripeStyle:{backgroundColor:"#ffffff15"}},tableRowProps:{stripeOpacity:.3,style:{}},tableCellProps:{swatchOpacity:.3},blockquoteProps:{style:{borderColor:colorScheme.greyscale.gray200,backgroundColor:colorScheme.greyscale.gray800}},headingProps:{style:{borderColor:colorScheme.greyscale.gray300}}};return ThemeBuilder.D.overrideTheme(lightTheme,darkThemeOverride)}}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class Themes{static light=new LightThemeBuilder;static dark=new DarkThemeBuilder;static#_=_defineProperty(this,"default",Themes.light)}},"./src/util/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>deepMerge,b:()=>randomUuid});var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");function randomUuid(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.A)()}function deepMerge(record1,record2){const merged={...record1},record2Keys=Object.keys(record2??{});for(let i=0;i<record2Keys.length;i++){const key=record2Keys[i],value1=record1[key],value2=record2[key];merged[key]="object"==typeof value1&&null!==value1&&"object"==typeof value2&&null!==value2?deepMerge(value1,value2):value2}return merged}},"?9157":()=>{}}]);