"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[58],{"./src/stories/fonts/Fonts.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MonoCourierPrime:()=>MonoCourierPrime,MonoDMMono:()=>MonoDMMono,MonoJetBrainsMono:()=>MonoJetBrainsMono,MonoRobotoMono:()=>MonoRobotoMono,MonoSourceCodePro:()=>MonoSourceCodePro,MonoSpaceMono:()=>MonoSpaceMono,MonoUbuntuMono:()=>MonoUbuntuMono,NoFontFamilySpecified:()=>NoFontFamilySpecified,SansSerifInter:()=>SansSerifInter,SansSerifLato:()=>SansSerifLato,SansSerifMontserrat:()=>SansSerifMontserrat,SansSerifNotoSans:()=>SansSerifNotoSans,SansSerifOpenSans:()=>SansSerifOpenSans,SansSerifPoppins:()=>SansSerifPoppins,SansSerifRaleway:()=>SansSerifRaleway,SansSerifRoboto:()=>SansSerifRoboto,SansSerifRobotoCondensed:()=>SansSerifRobotoCondensed,SerifBitter:()=>SerifBitter,SerifCrimsonText:()=>SerifCrimsonText,SerifEBGaramond:()=>SerifEBGaramond,SerifLibreBaskerville:()=>SerifLibreBaskerville,SerifLora:()=>SerifLora,SerifMerriweather:()=>SerifMerriweather,SerifNotoSerif:()=>SerifNotoSerif,SerifPTSerif:()=>SerifPTSerif,SerifPlayfairDisplay:()=>SerifPlayfairDisplay,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/fonts/Fonts.ts")),_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layout/Box.tsx"),_components_typography_Heading1__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/typography/Heading1.tsx"),_components_typography_Heading2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/typography/Heading2.tsx"),_components_typography_Heading3__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/typography/Heading3.tsx"),_components_typography_Heading4__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/typography/Heading4.tsx"),_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/typography/Heading5.tsx"),_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/typography/Heading6.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/typography/Paragraph.tsx"),_parts_PDFStory__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/stories/parts/PDFStory.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryComponent=_ref=>{let{fontFamily,...props}=_ref;console.log("Loading",_components_fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__.U.length,"fonts..."),_components_fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__.U.forEach((f=>{const loadedFont=_components_fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__.v.load(f.family);loadedFont&&(console.log(`Loaded font: "${loadedFont.family}"`),_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(loadedFont))}));const fontDefinition=_components_fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__.U.find((f=>f.family===fontFamily));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_parts_PDFStory__WEBPACK_IMPORTED_MODULE_11__.g,{pageProps:{style:{fontFamily}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__.a,{direction:"y",style:{gap:10},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_8__.m,{rule:!0,style:{marginBottom:0},children:["Font Family ",fontFamily?`"${fontFamily}"`:"Not Specified"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_9__.T,{children:fontDefinition?`${fontDefinition?.type} font`:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading1__WEBPACK_IMPORTED_MODULE_4__._,{rule:!0,children:"Heading 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading2__WEBPACK_IMPORTED_MODULE_5__.f,{rule:!0,children:"Heading 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading3__WEBPACK_IMPORTED_MODULE_6__._,{rule:!0,children:"Heading 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading4__WEBPACK_IMPORTED_MODULE_7__.f,{rule:!0,children:"Heading 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading5__WEBPACK_IMPORTED_MODULE_8__.m,{rule:!0,children:"Heading 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_typography_Heading6__WEBPACK_IMPORTED_MODULE_9__.T,{rule:!0,children:"Heading 6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_10__.f,{children:["Paragraph text. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.N_,{href:"#",children:"This is a link."})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:{fontWeight:"bold"},children:"This is bold."})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:{fontStyle:"italic"},children:"This is italic."})," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})})};StoryComponent.displayName="StoryComponent";const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/Fonts",component:StoryComponent,parameters:{options:{showPanel:!1}}},NoFontFamilySpecified={args:{}},MonoCourierPrime={args:{fontFamily:"Courier Prime"}},MonoDMMono={args:{fontFamily:"DM Mono"}},MonoJetBrainsMono={args:{fontFamily:"JetBrains Mono"}},MonoRobotoMono={args:{fontFamily:"Roboto Mono"}},MonoSourceCodePro={args:{fontFamily:"Source Code Pro"}},MonoSpaceMono={args:{fontFamily:"Space Mono"}},MonoUbuntuMono={args:{fontFamily:"Ubuntu Mono"}},SansSerifInter={args:{fontFamily:"Inter"}},SansSerifLato={args:{fontFamily:"Lato"}},SansSerifMontserrat={args:{fontFamily:"Montserrat"}},SansSerifNotoSans={args:{fontFamily:"Noto Sans"}},SansSerifOpenSans={args:{fontFamily:"Open Sans"}},SansSerifPoppins={args:{fontFamily:"Poppins"}},SansSerifRaleway={args:{fontFamily:"Raleway"}},SansSerifRobotoCondensed={args:{fontFamily:"Roboto Condensed"}},SansSerifRoboto={args:{fontFamily:"Roboto"}},SerifBitter={args:{fontFamily:"Bitter"}},SerifCrimsonText={args:{fontFamily:"Crimson Text"}},SerifEBGaramond={args:{fontFamily:"EB Garamond"}},SerifLibreBaskerville={args:{fontFamily:"Libre Baskerville"}},SerifLora={args:{fontFamily:"Lora"}},SerifMerriweather={args:{fontFamily:"Merriweather"}},SerifNotoSerif={args:{fontFamily:"Noto Serif"}},SerifPlayfairDisplay={args:{fontFamily:"Playfair Display"}},SerifPTSerif={args:{fontFamily:"PT Serif"}};NoFontFamilySpecified.parameters={...NoFontFamilySpecified.parameters,docs:{...NoFontFamilySpecified.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...NoFontFamilySpecified.parameters?.docs?.source}}},MonoCourierPrime.parameters={...MonoCourierPrime.parameters,docs:{...MonoCourierPrime.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Courier Prime'\n  }\n}",...MonoCourierPrime.parameters?.docs?.source}}},MonoDMMono.parameters={...MonoDMMono.parameters,docs:{...MonoDMMono.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'DM Mono'\n  }\n}",...MonoDMMono.parameters?.docs?.source}}},MonoJetBrainsMono.parameters={...MonoJetBrainsMono.parameters,docs:{...MonoJetBrainsMono.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'JetBrains Mono'\n  }\n}",...MonoJetBrainsMono.parameters?.docs?.source}}},MonoRobotoMono.parameters={...MonoRobotoMono.parameters,docs:{...MonoRobotoMono.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Roboto Mono'\n  }\n}",...MonoRobotoMono.parameters?.docs?.source}}},MonoSourceCodePro.parameters={...MonoSourceCodePro.parameters,docs:{...MonoSourceCodePro.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Source Code Pro'\n  }\n}",...MonoSourceCodePro.parameters?.docs?.source}}},MonoSpaceMono.parameters={...MonoSpaceMono.parameters,docs:{...MonoSpaceMono.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Space Mono'\n  }\n}",...MonoSpaceMono.parameters?.docs?.source}}},MonoUbuntuMono.parameters={...MonoUbuntuMono.parameters,docs:{...MonoUbuntuMono.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Ubuntu Mono'\n  }\n}",...MonoUbuntuMono.parameters?.docs?.source}}},SansSerifInter.parameters={...SansSerifInter.parameters,docs:{...SansSerifInter.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Inter'\n  }\n}",...SansSerifInter.parameters?.docs?.source}}},SansSerifLato.parameters={...SansSerifLato.parameters,docs:{...SansSerifLato.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Lato'\n  }\n}",...SansSerifLato.parameters?.docs?.source}}},SansSerifMontserrat.parameters={...SansSerifMontserrat.parameters,docs:{...SansSerifMontserrat.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Montserrat'\n  }\n}",...SansSerifMontserrat.parameters?.docs?.source}}},SansSerifNotoSans.parameters={...SansSerifNotoSans.parameters,docs:{...SansSerifNotoSans.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Noto Sans'\n  }\n}",...SansSerifNotoSans.parameters?.docs?.source}}},SansSerifOpenSans.parameters={...SansSerifOpenSans.parameters,docs:{...SansSerifOpenSans.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Open Sans'\n  }\n}",...SansSerifOpenSans.parameters?.docs?.source}}},SansSerifPoppins.parameters={...SansSerifPoppins.parameters,docs:{...SansSerifPoppins.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Poppins'\n  }\n}",...SansSerifPoppins.parameters?.docs?.source}}},SansSerifRaleway.parameters={...SansSerifRaleway.parameters,docs:{...SansSerifRaleway.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Raleway'\n  }\n}",...SansSerifRaleway.parameters?.docs?.source}}},SansSerifRobotoCondensed.parameters={...SansSerifRobotoCondensed.parameters,docs:{...SansSerifRobotoCondensed.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Roboto Condensed'\n  }\n}",...SansSerifRobotoCondensed.parameters?.docs?.source}}},SansSerifRoboto.parameters={...SansSerifRoboto.parameters,docs:{...SansSerifRoboto.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Roboto'\n  }\n}",...SansSerifRoboto.parameters?.docs?.source}}},SerifBitter.parameters={...SerifBitter.parameters,docs:{...SerifBitter.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Bitter'\n  }\n}",...SerifBitter.parameters?.docs?.source}}},SerifCrimsonText.parameters={...SerifCrimsonText.parameters,docs:{...SerifCrimsonText.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Crimson Text'\n  }\n}",...SerifCrimsonText.parameters?.docs?.source}}},SerifEBGaramond.parameters={...SerifEBGaramond.parameters,docs:{...SerifEBGaramond.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'EB Garamond'\n  }\n}",...SerifEBGaramond.parameters?.docs?.source}}},SerifLibreBaskerville.parameters={...SerifLibreBaskerville.parameters,docs:{...SerifLibreBaskerville.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Libre Baskerville'\n  }\n}",...SerifLibreBaskerville.parameters?.docs?.source}}},SerifLora.parameters={...SerifLora.parameters,docs:{...SerifLora.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Lora'\n  }\n}",...SerifLora.parameters?.docs?.source}}},SerifMerriweather.parameters={...SerifMerriweather.parameters,docs:{...SerifMerriweather.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Merriweather'\n  }\n}",...SerifMerriweather.parameters?.docs?.source}}},SerifNotoSerif.parameters={...SerifNotoSerif.parameters,docs:{...SerifNotoSerif.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Noto Serif'\n  }\n}",...SerifNotoSerif.parameters?.docs?.source}}},SerifPlayfairDisplay.parameters={...SerifPlayfairDisplay.parameters,docs:{...SerifPlayfairDisplay.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'Playfair Display'\n  }\n}",...SerifPlayfairDisplay.parameters?.docs?.source}}},SerifPTSerif.parameters={...SerifPTSerif.parameters,docs:{...SerifPTSerif.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontFamily: 'PT Serif'\n  }\n}",...SerifPTSerif.parameters?.docs?.source}}};const __namedExportsOrder=["NoFontFamilySpecified","MonoCourierPrime","MonoDMMono","MonoJetBrainsMono","MonoRobotoMono","MonoSourceCodePro","MonoSpaceMono","MonoUbuntuMono","SansSerifInter","SansSerifLato","SansSerifMontserrat","SansSerifNotoSans","SansSerifOpenSans","SansSerifPoppins","SansSerifRaleway","SansSerifRobotoCondensed","SansSerifRoboto","SerifBitter","SerifCrimsonText","SerifEBGaramond","SerifLibreBaskerville","SerifLora","SerifMerriweather","SerifNotoSerif","SerifPlayfairDisplay","SerifPTSerif"]},"./src/stories/parts/PDFStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PDFStory});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/pages/ThemedPage.tsx")),_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/themes/Themes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PDFStory=_ref=>{let{children,pageSize="A4",scale=1,pageProps,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:600,width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_pages_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme:_components_theme_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale}),size:pageSize,...pageProps,style:{...pageProps?.style},children})})})};PDFStory.displayName="PDFStory";try{PDFStory.displayName="PDFStory",PDFStory.__docgenInfo={description:"",displayName:"PDFStory",props:{pageSize:{defaultValue:{value:"A4"},description:"",name:"pageSize",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/parts/PDFStory.tsx#PDFStory"]={docgenInfo:PDFStory.__docgenInfo,name:"PDFStory",path:"src/stories/parts/PDFStory.tsx#PDFStory"})}catch(__react_docgen_typescript_loader_error){}}}]);