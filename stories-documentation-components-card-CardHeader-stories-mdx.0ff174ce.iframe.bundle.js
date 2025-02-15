(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[4639],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/documentation/components/card/CardHeader.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_DocsPDF__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/documentation/DocsPDF.tsx"),_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layout/Box.tsx"),_components_card_Card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/card/Card.tsx"),_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/card/CardBody.tsx"),_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/card/CardHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Documentation/Components/Cards/CardHeader"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{children:"CardHeader"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p,{children:"Description of the CardHeader component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.code,{className:"language-jsx",children:"import { CardHeader } from 'react-pdf-builder';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p,{children:"Describe how to use the component here."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.code,{className:"language-jsx",children:"<Card>\n  <CardHeader>Header</CardHeader>\n  <CardBody>This is the card body.</CardBody>\n</Card>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.td,{children:"label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.code,{children:"string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.strong,{children:"Required."})," Label shown in the component"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.td,{children:"backgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.code,{children:"string"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.code,{children:"undefined"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.td,{children:"Optional. What background color to use"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2,{id:"cardheader-example",children:"CardHeader Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DocsPDF__WEBPACK_IMPORTED_MODULE_2__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_3__.a,{dir:"y",className:"gap-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_6__.a,{children:"Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{className:"lh-1",children:"This is the card body."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{swatch:"blue",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_6__.a,{children:"Blue Card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{children:'You can easily theme cards by providing the "swatch" prop. This card is using the "blue" swatch.'})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{swatch:"yellow",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_6__.a,{children:"Yellow Card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{children:'You can easily theme cards by providing the "swatch" prop. This card is using the "yellow" swatch.'})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_card_Card__WEBPACK_IMPORTED_MODULE_4__.Z,{swatch:"indigo",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardHeader__WEBPACK_IMPORTED_MODULE_6__.a,{children:"Indigo Card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_card_CardBody__WEBPACK_IMPORTED_MODULE_5__.b,{children:'You can easily theme cards by providing the "swatch" prop. This card is using the "indigo" swatch.'})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from \'react\';\nimport { Box, Card, CardBody, CardHeader, ThemedPage } from \'react-pdf-builder\';\nimport { PDFViewer, Document } from \'@react-pdf/renderer\';\n\nexport function Example() {\n  return (\n    <PDFViewer style={{ width: 420, height: 600 }}>\n      <Document>\n        <ThemedPage size="LETTER">\n          <Box dir="y" className="gap-3">\n            <Card>\n              <CardHeader>Header</CardHeader>\n              <CardBody className="lh-1">This is the card body.</CardBody>\n            </Card>\n            <Card swatch="blue">\n              <CardHeader>Blue Card</CardHeader>\n              <CardBody>\n                You can easily theme cards by providing the "swatch" prop. This card is using the "blue" swatch.\n              </CardBody>\n            </Card>\n            <Card swatch="yellow">\n              <CardHeader>Yellow Card</CardHeader>\n              <CardBody>\n                You can easily theme cards by providing the "swatch" prop. This card is using the "yellow" swatch.\n              </CardBody>\n            </Card>\n            <Card swatch="indigo">\n              <CardHeader>Indigo Card</CardHeader>\n              <CardBody>\n                You can easily theme cards by providing the "swatch" prop. This card is using the "indigo" swatch.\n              </CardBody>\n            </Card>\n          </Box>\n        </ThemedPage>\n      </Document>\n    </PDFViewer>\n  );\n}\n'})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Components/Cards/CardHeader",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/basics/ThemedView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Div,j:()=>ThemedView});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedView=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build();const classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};ThemedView.displayName="ThemedView";const Div=ThemedView;try{ThemedView.displayName="ThemedView",ThemedView.__docgenInfo={description:"",displayName:"ThemedView",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#ThemedView"]={docgenInfo:ThemedView.__docgenInfo,name:"ThemedView",path:"src/components/basics/ThemedView.tsx#ThemedView"})}catch(__react_docgen_typescript_loader_error){}try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedView.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/ThemedView.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_layout_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/Box.tsx"),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build();const themeProps=theme.cardProps,mergedProps={...themeProps,...props},injectedChildArray=(0,_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__.N)(children).map(((c,i,arr)=>{const name=c.type?.displayName||c.type?.name||"Unknown",isBody="CardBody"===name,additionalProps={};return"CardHeader"===name?(0===i&&1===arr.length&&(additionalProps.noBody=!0),i>0&&(additionalProps.withHeader=!0),i===arr.length-1&&(additionalProps.noBody=!0)):isBody&&(0===i&&(additionalProps.noHeader=!0),i<arr.length-1&&(additionalProps.withFooter=!0)),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(c,{key:"card-child-"+i,theme,swatch:mergedProps.swatch,swatchOpacity:mergedProps.swatchOpacity,...additionalProps,...c.props})})),themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_2__.a,{dir:"y",theme,...mergedProps,style:{overflow:"hidden",width:"100%",...themeClassNameStyles,...themeProps?.style,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_1__.p,{theme,children:injectedChildArray})})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/CardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>CardBody});__webpack_require__("./node_modules/react/index.js");var _layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),color__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardBody=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build();const themeProps=theme.cardBodyProps,mergedProps={...themeProps,...props},styleOverride={};if(mergedProps.noHeader||(styleOverride.borderTopLeftRadius=0,styleOverride.borderTopRightRadius=0),mergedProps.withFooter&&(styleOverride.borderBottomLeftRadius=0,styleOverride.borderBottomRightRadius=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.borderColor=swatchColor;const swatchOpacity=mergedProps.swatchOpacity??.134,swatchOpacityHex=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.decimalToHex(swatchOpacity);styleOverride.backgroundColor=`${new(color__WEBPACK_IMPORTED_MODULE_6___default())(swatchColor??"#888").hex()}${swatchOpacityHex}`}const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{dir:"y",theme,...mergedProps,style:{overflow:"hidden",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{theme,children})})};CardBody.displayName="CardBody";try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"",displayName:"CardBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},noHeader:{defaultValue:null,description:"",name:"noHeader",required:!1,type:{name:"boolean"}},withFooter:{defaultValue:null,description:"",name:"withFooter",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/CardBody.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"src/components/card/CardBody.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/card/CardHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>CardHeader});__webpack_require__("./node_modules/react/index.js");var _layout_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Box.tsx"),_themes_Themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/Themes.ts"),_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/typography/Heading5.tsx"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),color__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardHeader=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_2__.B.default.build();const themeProps=theme.cardHeaderProps,mergedProps={...themeProps,...props},AsComponent=mergedProps.as??_typography_Heading5__WEBPACK_IMPORTED_MODULE_3__.m;let child=children;"string"==typeof child&&(child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AsComponent,{theme,className:"mb-0",children:child}));const styleOverride={};if(mergedProps.noBody||(styleOverride.borderBottomLeftRadius=0,styleOverride.borderBottomRightRadius=0),mergedProps.withHeader&&(styleOverride.borderTopLeftRadius=0,styleOverride.borderTopRightRadius=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme),contrastColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getContrastColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=contrastColor,styleOverride.borderColor=swatchColor;const swatchOpacity=mergedProps.swatchOpacity??1,swatchOpacityHex=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.decimalToHex(swatchOpacity);styleOverride.backgroundColor=`${new(color__WEBPACK_IMPORTED_MODULE_6___default())(swatchColor??"#888").hex()}${swatchOpacityHex}`}const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Box__WEBPACK_IMPORTED_MODULE_1__.a,{theme,wrap:!1,...mergedProps,style:{overflow:"hidden",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:child})};CardHeader.displayName="CardHeader";try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},noBody:{defaultValue:null,description:"",name:"noBody",required:!1,type:{name:"boolean"}},withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},swatchOpacity:{defaultValue:null,description:"",name:"swatchOpacity",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/card/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/Themes.ts"),_basics_ThemedView__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedView.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,theme,dir,grow,shrink,gap,padding,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_1__.B.default.build();const styleInnate={display:"flex",flexDirection:"column"===dir||"y"===dir?"column":"row",flexShrink:shrink?1:void 0,flexGrow:grow?1:void 0,gap,padding},classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedView__WEBPACK_IMPORTED_MODULE_2__.i,{theme,...props,style:{...styleInnate,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,children})})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/Heading5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>Heading5});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/Themes.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading5=_ref=>{let{children,theme,className,style,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_1__.B.default.build();const mergedProps={...theme?.headingProps,...theme?.heading5Props,...props},mergedThemeStyles={...theme?.headingProps?.style,...theme?.heading5Props?.style},styleOverride={};if(mergedProps.rule||(styleOverride.borderBottom=0),mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor,styleOverride.borderColor=swatchColor}const themeClassName=`${theme?.headingProps.className??""} ${theme?.heading5Props.className??""}`.trim(),themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_2__.P,{theme,...mergedProps,style:{...themeClassNameStyles,...mergedThemeStyles,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{theme,allowStrings:!0,children})})};Heading5.displayName="Heading5";try{Heading5.displayName="Heading5",Heading5.__docgenInfo={description:"",displayName:"Heading5",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Heading5.tsx#Heading5"]={docgenInfo:Heading5.__docgenInfo,name:"Heading5",path:"src/components/typography/Heading5.tsx#Heading5"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/documentation/DocsPDF.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>DocsPDF});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_themes_Themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/Themes.ts"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsPDF=_ref=>{let{children,pageSize="LETTER",orientation,scale=1,pageProps,theme,width=420,height=600,...props}=_ref;theme=theme??_themes_Themes__WEBPACK_IMPORTED_MODULE_3__.B.default.build({scale});const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{theme,size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};DocsPDF.displayName="DocsPDF";try{DocsPDF.displayName="DocsPDF",DocsPDF.__docgenInfo={description:"",displayName:"DocsPDF",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},width:{defaultValue:{value:"420"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/documentation/DocsPDF.tsx#DocsPDF"]={docgenInfo:DocsPDF.__docgenInfo,name:"DocsPDF",path:"src/stories/documentation/DocsPDF.tsx#DocsPDF"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);