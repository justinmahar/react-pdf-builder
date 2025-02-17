(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[1092],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/documentation/components/list/UnorderedList.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_DocsPDF__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/documentation/DocsPDF.tsx"),_components_lists_UnorderedList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/lists/UnorderedList.tsx"),_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/lists/ListItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Documentation/Components/Lists/UnorderedList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1",{children:"UnorderedList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"The UnorderedList component helps you create bullet point lists easily."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["You can customize the bullet with a custom character, although you may need to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs#using-custom-fonts",target:"_blank",rel:"nofollow noopener noreferrer",children:"register a custom font"})," that includes your desired symbol."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["The text color can also be customized with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"swatch"})," prop and a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch color"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"import { UnorderedList, ListItem } from 'react-pdf-builder';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"<UnorderedList>\n  <ListItem>First list item</ListItem>\n  <ListItem>Second list item</ListItem>\n  <ListItem>Third list item</ListItem>\n</UnorderedList>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h3,{id:"list-item-margin-and-marker-gap",children:"List item margin and marker gap"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Internally, the list item marker and list item itself are wrapped in a container. By default, this container uses a Flexbox with a column gap and a bottom margin for spacing."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["The default spacing can be customized by providing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"containerProps"})," with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"style"})," overriding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"marginBottom"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"columnGap"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"The following will remove all default spacing from the list:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-tsx",children:"<UnorderedList containerProps={{ style: { marginBottom: 0, columnGap: 0 }}}>\n  <ListItem>First list item</ListItem>\n  <ListItem>Second list item</ListItem>\n  <ListItem>Third list item</ListItem>\n</UnorderedList>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Inherits all props from"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-div--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Div"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://react-pdf.org/components#view",target:"_blank",rel:"nofollow noopener noreferrer",children:"View"})})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"And supports the following props:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"wrapItems"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"boolean"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"markerStyle"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Style"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"markerSwatch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"SwatchColor"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:["Optional. One of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch color names"})," from the theme, as a string."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"containerProps"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"ListItemContainerProps"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"bullet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"unstyled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"boolean"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"swatch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"SwatchColor"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:["Optional. One of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch color names"})," from the theme, as a string."]})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"unorderedlist-example",children:"UnorderedList Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DocsPDF__WEBPACK_IMPORTED_MODULE_2__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_lists_UnorderedList__WEBPACK_IMPORTED_MODULE_3__.X,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_4__.c,{children:"First list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_4__.c,{children:"Second list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_lists_ListItem__WEBPACK_IMPORTED_MODULE_4__.c,{children:"Third list item"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { UnorderedList, ListItem, ThemedPage } from 'react-pdf-builder';\nimport { PDFViewer, Document } from '@react-pdf/renderer';\n\nexport function Example() {\n  return (\n    <PDFViewer style={{ width: 420, height: 600 }}>\n      <Document>\n        <ThemedPage size=\"LETTER\">\n          <UnorderedList>\n            <ListItem>First list item</ListItem>\n            <ListItem>Second list item</ListItem>\n            <ListItem>Third list item</ListItem>\n          </UnorderedList>\n        </ThemedPage>\n      </Document>\n    </PDFViewer>\n  );\n}\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Components/Lists/UnorderedList",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/basics/Div.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Div});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Div=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children})})};Div.displayName="Div";try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/Div.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/Div.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/ListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>ListItem});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListItem=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme?.listItemProps,mergedProps={...themeProps,...props},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...mergedProps,style:{width:"100%",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children})})};ListItem.displayName="ListItem";try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/ListItem.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/lists/ListItem.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/ListItemContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>ListItemContainer});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_ThemedText__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/ThemedText.tsx"),_basics_Div__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListItemContainer=_ref=>{let{children,markerStyle,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Um)(),mergedProps={...theme?.listItemContainerProps,...props},markerStyleOverride={};mergedProps.markerSwatch&&(markerStyleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.markerSwatch,theme.colorScheme));const mergedMarkerStyle={...mergedProps.markerStyle,...theme.listItemMarkerProps?.style,...markerStyleOverride,...markerStyle},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const numberRenderer=mergedProps.numberRenderer??(num=>`${num}.`),isNumbered=void 0!==mergedProps.num,bullet=mergedProps.bullet??"•";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_basics_Div__WEBPACK_IMPORTED_MODULE_2__.i,{...mergedProps,style:{display:"flex",flexDirection:"row",...mergedProps.style,...styleOverride,...style},children:[!mergedProps.unstyled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_ThemedText__WEBPACK_IMPORTED_MODULE_1__.P,{style:{...mergedMarkerStyle},children:isNumbered?numberRenderer(mergedProps.num??0):bullet}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_3__.p,{children})]})};ListItemContainer.displayName="ListItemContainer";try{ListItemContainer.displayName="ListItemContainer",ListItemContainer.__docgenInfo={description:"",displayName:"ListItemContainer",props:{num:{defaultValue:null,description:"",name:"num",required:!1,type:{name:"number"}},markerStyle:{defaultValue:null,description:"",name:"markerStyle",required:!1,type:{name:"Style"}},markerSwatch:{defaultValue:null,description:"",name:"markerSwatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},bullet:{defaultValue:null,description:"",name:"bullet",required:!1,type:{name:"string"}},numberRenderer:{defaultValue:null,description:"",name:"numberRenderer",required:!1,type:{name:"((num: number) => string)"}},unstyled:{defaultValue:null,description:"",name:"unstyled",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/ListItemContainer.tsx#ListItemContainer"]={docgenInfo:ListItemContainer.__docgenInfo,name:"ListItemContainer",path:"src/components/lists/ListItemContainer.tsx#ListItemContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lists/UnorderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>UnorderedList});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/ThemedChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),_ListItemContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/lists/ListItemContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnorderedList=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme.unorderedListProps,mergedProps={...themeProps,...props},mergedWrapperProps={...theme.listItemContainerProps,...props.containerProps},styleOverride={};mergedProps.swatch&&(styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme));const liElements=(Array.isArray(children)?children:void 0!==children?[children]:[]).map(((c,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ListItemContainer__WEBPACK_IMPORTED_MODULE_4__.B,{wrap:!!mergedProps.wrapItems,markerStyle:mergedProps.markerStyle,markerSwatch:mergedProps.markerSwatch,bullet:mergedProps.bullet,unstyled:mergedProps.unstyled,...mergedWrapperProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_children_ThemedChildren__WEBPACK_IMPORTED_MODULE_2__.p,{children:c})},"ul-li-"+i))),themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...mergedProps,style:{display:"flex",flexDirection:"column",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:liElements})};UnorderedList.displayName="UnorderedList";try{UnorderedList.displayName="UnorderedList",UnorderedList.__docgenInfo={description:"",displayName:"UnorderedList",props:{wrapItems:{defaultValue:null,description:"",name:"wrapItems",required:!1,type:{name:"boolean"}},markerStyle:{defaultValue:null,description:"",name:"markerStyle",required:!1,type:{name:"Style"}},markerSwatch:{defaultValue:null,description:"",name:"markerSwatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"ListItemContainerProps"}},bullet:{defaultValue:null,description:"",name:"bullet",required:!1,type:{name:"string"}},unstyled:{defaultValue:null,description:"",name:"unstyled",required:!1,type:{name:"boolean"}},swatch:{defaultValue:null,description:"",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lists/UnorderedList.tsx#UnorderedList"]={docgenInfo:UnorderedList.__docgenInfo,name:"UnorderedList",path:"src/components/lists/UnorderedList.tsx#UnorderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/documentation/DocsPDF.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>DocsPDF});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsPDF=_ref=>{let{children,pageSize="LETTER",orientation,pageProps,width=420,height=600}=_ref;const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};DocsPDF.displayName="DocsPDF";try{DocsPDF.displayName="DocsPDF",DocsPDF.__docgenInfo={description:"",displayName:"DocsPDF",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},width:{defaultValue:{value:"420"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/documentation/DocsPDF.tsx#DocsPDF"]={docgenInfo:DocsPDF.__docgenInfo,name:"DocsPDF",path:"src/stories/documentation/DocsPDF.tsx#DocsPDF"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);