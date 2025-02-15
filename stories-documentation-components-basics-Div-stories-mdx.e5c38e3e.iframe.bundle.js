(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[7712],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/documentation/components/basics/Div.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_DocsPDF__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/documentation/DocsPDF.tsx"),_components_basics_ThemedView__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/basics/ThemedView.tsx"),_components_basics_ThemedText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/typography/Paragraph.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Documentation/Components/Basics/Div"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1",{children:"Div"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"Description of the Div component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{className:"language-jsx",children:"import { Div } from 'react-pdf-builder';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"Describe how to use the component here."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{className:"language-jsx",children:"<Div>This is a div</Div>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:"label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.strong,{children:"Required."})," Label shown in the component"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:"backgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"string"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"undefined"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:"Optional. What background color to use"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"div-example",children:"Div Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DocsPDF__WEBPACK_IMPORTED_MODULE_2__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_basics_ThemedView__WEBPACK_IMPORTED_MODULE_3__.i,{className:"text-green border border-green p-3 rounded bg-faded-green fw-bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_5__.f,{children:"This is a Div with a variety of class names from the theme to achieve a unique look. It contains 3 Paragraph components and a ThemedText containing the class names."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_5__.f,{children:"A Div can be used like an HTML div in this framework. It supports both the className and style props to make styling easy. Div is an alias for the component ThemedView."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_typography_Paragraph__WEBPACK_IMPORTED_MODULE_5__.f,{className:"mb-0",children:"Class names used:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_basics_ThemedText__WEBPACK_IMPORTED_MODULE_4__.P,{children:'"text-green border border-green p-3 rounded bg-faded-green fw-bold"'})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from \'react\';\nimport { Div, Paragraph, ThemedText, ThemedPage } from \'react-pdf-builder\';\nimport { PDFViewer, Document } from \'@react-pdf/renderer\';\n\nexport function Example() {\n  return (\n    <PDFViewer style={{ width: 420, height: 600 }}>\n      <Document>\n        <ThemedPage size="LETTER">\n          <Div className="text-green border border-green p-3 rounded bg-faded-green fw-bold">\n            <Paragraph>\n              This is a Div with a variety of class names from the theme to achieve a unique look. It contains 3 Paragraph\n              components and a ThemedText containing the class names.\n            </Paragraph>\n            <Paragraph>\n              A Div can be used like an HTML div in this framework. It supports both the className and style props to make\n              styling easy. Div is an alias for the component ThemedView.\n            </Paragraph>\n            <Paragraph className="mb-0">Class names used:</Paragraph>\n            <ThemedText>"text-green border border-green p-3 rounded bg-faded-green fw-bold"</ThemedText>\n          </Div>\n        </ThemedPage>\n      </Document>\n    </PDFViewer>\n  );\n}\n'})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Components/Basics/Div",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/basics/ThemedView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Div,j:()=>ThemedView});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedView=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build();const classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};ThemedView.displayName="ThemedView";const Div=ThemedView;try{ThemedView.displayName="ThemedView",ThemedView.__docgenInfo={description:"",displayName:"ThemedView",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#ThemedView"]={docgenInfo:ThemedView.__docgenInfo,name:"ThemedView",path:"src/components/basics/ThemedView.tsx#ThemedView"})}catch(__react_docgen_typescript_loader_error){}try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/ThemedView.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>Paragraph});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/Themes.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_1__.B.default.build();const themeProps=theme?.paragraphProps,mergedProps={...themeProps,...props},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_2__.P,{theme,...mergedProps,style:{...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,allowStrings:!0,children})})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/documentation/DocsPDF.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>DocsPDF});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsPDF=_ref=>{let{children,pageSize="LETTER",orientation,scale=1,pageProps,theme,width=420,height=600,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale});const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme,size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};DocsPDF.displayName="DocsPDF";try{DocsPDF.displayName="DocsPDF",DocsPDF.__docgenInfo={description:"",displayName:"DocsPDF",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},width:{defaultValue:{value:"420"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/documentation/DocsPDF.tsx#DocsPDF"]={docgenInfo:DocsPDF.__docgenInfo,name:"DocsPDF",path:"src/stories/documentation/DocsPDF.tsx#DocsPDF"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);