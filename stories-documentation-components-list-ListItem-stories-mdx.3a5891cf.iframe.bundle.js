(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[7913],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/documentation/components/list/ListItem.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_DocsPDF__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/documentation/DocsPDF.tsx"),_components_lists_UnorderedList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/lists/UnorderedList.tsx"),_components_lists_OrderedList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/lists/OrderedList.tsx"),_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/lists/ListItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Documentation/Components/Lists/ListItem"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1",{children:"ListItem"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["A ListItem contains the content used in an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-lists-orderedlist--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"OrderedList"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-lists-unorderedlist--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"UnorderedList"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["The text color can be customized with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"swatch"})," prop and a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch color"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{className:"language-jsx",children:"import { ListItem } from 'react-pdf-builder';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{className:"language-jsx",children:"<ListItem>List item</ListItem>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Inherits all props from"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-div--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Div"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.a,{href:"https://react-pdf.org/components#view",target:"_blank",rel:"nofollow noopener noreferrer",children:"View"})})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"And supports the following props:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.tbody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:"swatch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"SwatchColor"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.td,{children:["Optional. One of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch color names"})," from the theme, as a string."]})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"listitem-example",children:"ListItem Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_DocsPDF__WEBPACK_IMPORTED_MODULE_2__.C,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_lists_UnorderedList__WEBPACK_IMPORTED_MODULE_3__.X,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__.c,{children:"First list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__.c,{children:"Second list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__.c,{children:"Third list item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_lists_OrderedList__WEBPACK_IMPORTED_MODULE_4__._,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__.c,{children:"First list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__.c,{children:"Second list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_5__.c,{children:"Third list item"})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { UnorderedList, OrderedList, ListItem, ThemedPage } from 'react-pdf-builder';\nimport { PDFViewer, Document } from '@react-pdf/renderer';\n\nexport function Example() {\n  return (\n    <PDFViewer style={{ width: 420, height: 600 }}>\n      <Document>\n        <ThemedPage size=\"LETTER\">\n          <UnorderedList>\n            <ListItem>First list item</ListItem>\n            <ListItem>Second list item</ListItem>\n            <ListItem>Third list item</ListItem>\n          </UnorderedList>\n          <OrderedList>\n            <ListItem>First list item</ListItem>\n            <ListItem>Second list item</ListItem>\n            <ListItem>Third list item</ListItem>\n          </OrderedList>\n        </ThemedPage>\n      </Document>\n    </PDFViewer>\n  );\n}\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Components/Lists/ListItem",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/basics/Div.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Div});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Div=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children})})};Div.displayName="Div";try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/Div.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/Div.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/ListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>ListItem});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListItem=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme?.listItemProps,mergedProps={...themeProps,...props},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...mergedProps,style:{width:"100%",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children})})};ListItem.displayName="ListItem";try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/ListItem.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/lists/ListItem.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/ListItemContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>ListItemContainer});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_basics_Div__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListItemContainer=_ref=>{let{children,markerStyle,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Um)(),mergedProps={...theme?.listItemContainerProps,...props},markerStyleOverride={};mergedProps.markerSwatch&&(markerStyleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.markerSwatch,theme.colorScheme));const mergedMarkerStyle={...mergedProps.markerStyle,...theme.listItemMarkerProps?.style,...markerStyleOverride,...markerStyle},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const numberRenderer=mergedProps.numberRenderer??(num=>`${num}.`),isNumbered=void 0!==mergedProps.num,bullet=mergedProps.bullet??"•";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_basics_Div__WEBPACK_IMPORTED_MODULE_2__.i,{...mergedProps,style:{display:"flex",flexDirection:"row",...mergedProps.style,...styleOverride,...style},children:[!mergedProps.unstyled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_1__.P,{style:{...mergedMarkerStyle},children:isNumbered?numberRenderer(mergedProps.num??0):bullet}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{children})]})};ListItemContainer.displayName="ListItemContainer";try{ListItemContainer.displayName="ListItemContainer",ListItemContainer.__docgenInfo={description:"",displayName:"ListItemContainer",props:{num:{defaultValue:null,description:"",name:"num",required:!1,type:{name:"number"}},markerStyle:{defaultValue:null,description:"",name:"markerStyle",required:!1,type:{name:"Style"}},markerSwatch:{defaultValue:null,description:"",name:"markerSwatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},bullet:{defaultValue:null,description:"",name:"bullet",required:!1,type:{name:"string"}},numberRenderer:{defaultValue:null,description:"",name:"numberRenderer",required:!1,type:{name:"((num: number) => string)"}},unstyled:{defaultValue:null,description:"",name:"unstyled",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/ListItemContainer.tsx#ListItemContainer"]={docgenInfo:ListItemContainer.__docgenInfo,name:"ListItemContainer",path:"src/components/lists/ListItemContainer.tsx#ListItemContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/OrderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>OrderedList});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),_ListItemContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/lists/ListItemContainer.tsx"),romans__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/romans/romans.js"),number_to_alphabet__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/number-to-alphabet/dist/number-to-alphabet.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const toRoman=num=>{try{return(0,romans__WEBPACK_IMPORTED_MODULE_5__.romanize)(num)}catch(e){}return`${num}`},toAlpha=num=>{try{return(new number_to_alphabet__WEBPACK_IMPORTED_MODULE_6__.NumberToAlphabet).numberToString(num)}catch(e){}return`${num}`},romanUpperNumberRenderer=num=>toRoman(num).toUpperCase()+".",romanLowerNumberRenderer=num=>toRoman(num).toLowerCase()+".",alphaUpperNumberRenderer=num=>toAlpha(num).toUpperCase()+".",alphaLowerNumberRenderer=num=>toAlpha(num).toLowerCase()+".",OrderedList=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme.orderedListProps,mergedProps={...themeProps,...props};mergedProps.romanUpper?mergedProps.numberRenderer=romanUpperNumberRenderer:mergedProps.romanLower?mergedProps.numberRenderer=romanLowerNumberRenderer:mergedProps.alphaUpper?mergedProps.numberRenderer=alphaUpperNumberRenderer:mergedProps.alphaLower&&(mergedProps.numberRenderer=alphaLowerNumberRenderer);const mergedWrapperProps={...theme.listItemContainerProps,...props.containerProps},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_8__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const liElements=(Array.isArray(children)?children:void 0!==children?[children]:[]).map(((c,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ListItemContainer__WEBPACK_IMPORTED_MODULE_4__.B,{wrap:!!mergedProps.wrapItems,markerStyle:mergedProps.markerStyle,markerSwatch:mergedProps.markerSwatch,numberRenderer:mergedProps.numberRenderer,unstyled:mergedProps.unstyled,...mergedWrapperProps,num:i+1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children:c})},"ol-li-"+i))),themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_8__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_8__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...mergedProps,style:{display:"flex",flexDirection:"column",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:liElements})};OrderedList.displayName="OrderedList";try{OrderedList.displayName="OrderedList",OrderedList.__docgenInfo={description:"",displayName:"OrderedList",props:{wrapItems:{defaultValue:null,description:"",name:"wrapItems",required:!1,type:{name:"boolean"}},markerStyle:{defaultValue:null,description:"",name:"markerStyle",required:!1,type:{name:"Style"}},markerSwatch:{defaultValue:null,description:"",name:"markerSwatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"ListItemContainerProps"}},romanUpper:{defaultValue:null,description:"",name:"romanUpper",required:!1,type:{name:"boolean"}},romanLower:{defaultValue:null,description:"",name:"romanLower",required:!1,type:{name:"boolean"}},alphaUpper:{defaultValue:null,description:"",name:"alphaUpper",required:!1,type:{name:"boolean"}},alphaLower:{defaultValue:null,description:"",name:"alphaLower",required:!1,type:{name:"boolean"}},numberRenderer:{defaultValue:null,description:"",name:"numberRenderer",required:!1,type:{name:"((num: number) => string)"}},unstyled:{defaultValue:null,description:"",name:"unstyled",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/OrderedList.tsx#OrderedList"]={docgenInfo:OrderedList.__docgenInfo,name:"OrderedList",path:"src/components/lists/OrderedList.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/UnorderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>UnorderedList});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),_ListItemContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/lists/ListItemContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnorderedList=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme.unorderedListProps,mergedProps={...themeProps,...props},mergedWrapperProps={...theme.listItemContainerProps,...props.containerProps},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const liElements=(Array.isArray(children)?children:void 0!==children?[children]:[]).map(((c,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ListItemContainer__WEBPACK_IMPORTED_MODULE_4__.B,{wrap:!!mergedProps.wrapItems,markerStyle:mergedProps.markerStyle,markerSwatch:mergedProps.markerSwatch,bullet:mergedProps.bullet,unstyled:mergedProps.unstyled,...mergedWrapperProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children:c})},"ul-li-"+i))),themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...mergedProps,style:{display:"flex",flexDirection:"column",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:liElements})};UnorderedList.displayName="UnorderedList";try{UnorderedList.displayName="UnorderedList",UnorderedList.__docgenInfo={description:"",displayName:"UnorderedList",props:{wrapItems:{defaultValue:null,description:"",name:"wrapItems",required:!1,type:{name:"boolean"}},markerStyle:{defaultValue:null,description:"",name:"markerStyle",required:!1,type:{name:"Style"}},markerSwatch:{defaultValue:null,description:"",name:"markerSwatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"ListItemContainerProps"}},bullet:{defaultValue:null,description:"",name:"bullet",required:!1,type:{name:"string"}},unstyled:{defaultValue:null,description:"",name:"unstyled",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/UnorderedList.tsx#UnorderedList"]={docgenInfo:UnorderedList.__docgenInfo,name:"UnorderedList",path:"src/components/lists/UnorderedList.tsx#UnorderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/documentation/DocsPDF.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>DocsPDF});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsPDF=_ref=>{let{children,pageSize="LETTER",orientation,pageProps,width=420,height=600}=_ref;const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};DocsPDF.displayName="DocsPDF";try{DocsPDF.displayName="DocsPDF",DocsPDF.__docgenInfo={description:"",displayName:"DocsPDF",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},width:{defaultValue:{value:"420"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/documentation/DocsPDF.tsx#DocsPDF"]={docgenInfo:DocsPDF.__docgenInfo,name:"DocsPDF",path:"src/stories/documentation/DocsPDF.tsx#DocsPDF"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/number-to-alphabet/dist/number-to-alphabet.js":(module,__unused_webpack_exports,__webpack_require__)=>{parcelRequire=function(modules,cache,entry,globalName){var error,previousRequire="function"==typeof parcelRequire&&parcelRequire;function newRequire(name,jumped){if(!cache[name]){if(!modules[name]){var currentRequire="function"==typeof parcelRequire&&parcelRequire;if(!jumped&&currentRequire)return currentRequire(name,!0);if(previousRequire)return previousRequire(name,!0);if("string"==typeof name)return __webpack_require__("./node_modules/number-to-alphabet/dist sync recursive")(name);var err=new Error("Cannot find module '"+name+"'");throw err.code="MODULE_NOT_FOUND",err}localRequire.resolve=function resolve(x){return modules[name][1][x]||x},localRequire.cache={};var module=cache[name]=new newRequire.Module(name);modules[name][0].call(module.exports,localRequire,module,module.exports,this)}return cache[name].exports;function localRequire(x){return newRequire(localRequire.resolve(x))}}newRequire.isParcelRequire=!0,newRequire.Module=function Module(moduleName){this.id=moduleName,this.bundle=newRequire,this.exports={}},newRequire.modules=modules,newRequire.cache=cache,newRequire.parent=previousRequire,newRequire.register=function(id,exports){modules[id]=[function(require,module){module.exports=exports},{}]};for(var i=0;i<entry.length;i++)try{newRequire(entry[i])}catch(e){error||(error=e)}if(entry.length){var mainExports=newRequire(entry[entry.length-1]);module.exports=mainExports}if(parcelRequire=newRequire,error)throw error;return newRequire}({hquK:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var DEfAULT_ALPHABET=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],NumberToAlphabet=function(){function NumberToAlphabet(_alphabet){if(void 0===_alphabet&&(_alphabet=DEfAULT_ALPHABET),this._alphabet=_alphabet,_alphabet.length<=0)throw new Error("Alphabet must contain at least 1 item.");this._alphabet.forEach((function(letter){if("string"!=typeof letter||1!==letter.length)throw new Error("Each item in the alphabet must be a single letter.")})),this._alphabetLength=_alphabet.length}return NumberToAlphabet.prototype.numberToString=function(number){if("number"!=typeof number)throw new Error("Must be a nunber.");if(number<=0)throw new RangeError("Number must be > 0.");for(var res="",a=number-1;;){var remainder=a%this._alphabetLength;if(res=this._alphabet[remainder]+res,a<this._alphabetLength)break;a=Math.floor(a/this._alphabetLength)-1}return res},NumberToAlphabet.prototype.stringToNumber=function(input){var _this=this;if(!input.length)throw new Error("Input must not be empty.");return input.split("").reverse().reduce((function(acc,letter,i){var offset=_this._alphabet.indexOf(letter);if(offset<=-1)throw new Error("Letter missing from alphabet: "+letter);return acc+(offset+1)*Math.pow(_this._alphabetLength,i)}),0)},NumberToAlphabet}();exports.NumberToAlphabet=NumberToAlphabet},{}]},{},["hquK"])},"./node_modules/number-to-alphabet/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/number-to-alphabet/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/romans/romans.js":module=>{const roman_map={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},allChars=Object.keys(roman_map),allNumerals=Object.values(roman_map),romanPattern=/^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;module.exports={deromanize:romanStr=>{if("string"!=typeof romanStr||!romanPattern.test(romanStr))throw new Error("requires valid roman numeral string");const invalidPatterns={I:/I{4,}/,V:/V{2,}/,X:/X{4,}/,L:/L{2,}/,C:/C{4,}/,D:/D{2,}/,M:/M{4,}/};for(const[_,pattern]of Object.entries(invalidPatterns))if(pattern.test(romanStr))throw new Error("requires valid roman numeral string");let result=0,prevValue=0;for(let i=romanStr.length-1;i>=0;i--){const currentValue=roman_map[romanStr[i]];result+=currentValue<prevValue?-currentValue:currentValue,prevValue=currentValue}return result},romanize:decimal=>{if(decimal<=0||"number"!=typeof decimal||Math.floor(decimal)!==decimal)throw new Error("requires an unsigned integer");if(decimal>=4e3)throw new Error("requires max value of less than 4000");decimal=decimal.toString().replace(/^0+/,"");const result=[];for(let i=0;i<allChars.length;i++){const count=Math.floor(decimal/allNumerals[i]);if(count>0&&(result.push(allChars[i].repeat(count)),decimal%=allNumerals[i]),0===decimal)break}return result.join("")},allChars,allNumerals}}}]);