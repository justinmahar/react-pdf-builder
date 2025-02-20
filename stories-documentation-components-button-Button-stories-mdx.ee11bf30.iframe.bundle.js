(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[5568],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/documentation/components/button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_DocsPDF__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/documentation/DocsPDF.tsx"),_components_button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/button/Button.tsx"),_components_layout_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/layout/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Documentation/Components/Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1",{children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"The Button component is an interactive element that users can click on."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["By specifying the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"href"})," prop, the button can link to any URL of your choice."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["You can customize the look with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch colors"}),", styles, and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names",target:"_blank",rel:"nofollow noopener noreferrer",children:"class names"}),". In addition to the theme's ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch colors"}),", a special swatch is available called ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"'link'"})," that will make the button appear as a link."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"import { Button } from 'react-pdf-builder';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:'<Button href="https://justinmahar.github.io/react-pdf-builder/">Click Me</Button>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Inherits all props from"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-div--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Div"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.tr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://react-pdf.org/components#view",target:"_blank",rel:"nofollow noopener noreferrer",children:"View"})})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"And supports the following props:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"href"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"Optional. When provided, Button becomes a clickable link."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"pill"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"boolean"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:["Optional. When ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"true"}),", corners will be round."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"linkColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"string"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:["Optional. Color for the button text when the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"link"})," swatch is used."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.td,{children:"swatch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"SwatchColor"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"'link'"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.td,{children:["Optional. One of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"swatch color names"})," from the theme, as a string, or the special ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"'link'"})," swatch."]})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"button-example",children:"Button Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DocsPDF__WEBPACK_IMPORTED_MODULE_2__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Box__WEBPACK_IMPORTED_MODULE_4__.a,{className:"gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{href:"https://justinmahar.github.io/react-pdf-builder/",children:"Click Me"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{href:"https://justinmahar.github.io/react-pdf-builder/",swatch:"gray200",children:"Gray 200"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{href:"https://justinmahar.github.io/react-pdf-builder/",swatch:"yellow",children:"Yellow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{href:"https://justinmahar.github.io/react-pdf-builder/",swatch:"danger",children:"Danger"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{href:"https://justinmahar.github.io/react-pdf-builder/",swatch:"success",children:"Success"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{href:"https://justinmahar.github.io/react-pdf-builder/",swatch:"link",children:"Link"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { Button, Box, ThemedPage } from 'react-pdf-builder';\nimport { PDFViewer, Document } from '@react-pdf/renderer';\n\nexport function Example() {\n  return (\n    <PDFViewer style={{ width: 420, height: 600 }}>\n      <Document>\n        <ThemedPage size=\"LETTER\">\n          <Box className=\"gap-2\">\n            <Button href=\"https://justinmahar.github.io/react-pdf-builder/\">Click Me</Button>\n            <Button href=\"https://justinmahar.github.io/react-pdf-builder/\" swatch='gray200'>Gray 200</Button>\n            <Button href=\"https://justinmahar.github.io/react-pdf-builder/\" swatch='yellow'>Yellow</Button>\n            <Button href=\"https://justinmahar.github.io/react-pdf-builder/\" swatch='danger'>Danger</Button>\n            <Button href=\"https://justinmahar.github.io/react-pdf-builder/\" swatch='success'>Success</Button>\n            <Button href=\"https://justinmahar.github.io/react-pdf-builder/\" swatch='link'>Link</Button>\n          </Box>\n        </ThemedPage>\n      </Document>\n    </PDFViewer>\n  );\n}\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Components/Button",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_pdf_builder_react_pdf_builder_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/basics/Div.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Div});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/sanitizeChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Div=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.Ss,{...props,style:{...classNameStyles,...style},children:(0,_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_2__.j)(children)})};Div.displayName="Div";try{Div.displayName="Div",Div.__docgenInfo={description:"Read the [full documentation for Div](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-div--docs)",displayName:"Div",props:{className:{defaultValue:null,description:"Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/Div.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/basics/Div.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/basics/ThemedLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>ThemedLink});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeBuilder.ts")),_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/sanitizeChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemedLink=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),themeProps=theme?.linkProps,mergedProps={...themeProps,...props},styleInnate={color:theme.colorScheme?.colors.blue},styleOverride={};if(mergedProps.swatch){const swatchColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getSwatchColor(mergedProps.swatch,theme.colorScheme);styleOverride.color=swatchColor}const themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.N_,{...mergedProps,style:{...styleInnate,...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:(0,_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_2__.j)(children)})};ThemedLink.displayName="ThemedLink";try{ThemedLink.displayName="ThemedLink",ThemedLink.__docgenInfo={description:"Read the [full documentation for ThemedLink](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedlink--docs)",displayName:"ThemedLink",props:{className:{defaultValue:null,description:"Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes.",name:"className",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string.",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/basics/ThemedLink.tsx#ThemedLink"]={docgenInfo:ThemedLink.__docgenInfo,name:"ThemedLink",path:"src/components/basics/ThemedLink.tsx#ThemedLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_basics_ThemedLink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/basics/ThemedLink.tsx"),_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/children/sanitizeChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{children,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Um)(),themeProps=theme?.buttonProps,mergedProps={...themeProps,...props},swatch=mergedProps.swatch??"primary",styleOverride={};swatch&&"link"!==swatch?(styleOverride.backgroundColor=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor(swatch,theme.colorScheme),styleOverride.color=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getContrastColor(swatch,theme.colorScheme)):"link"===swatch&&(styleOverride.backgroundColor="#FFFFFF00",styleOverride.color=mergedProps.linkColor??_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getSwatchColor("blue",theme.colorScheme)),mergedProps.pill&&(styleOverride.borderRadius="50%");const hasHref=void 0!==mergedProps.href,themedChildren=(0,_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_3__.j)(children,hasHref?{textDecoration:"no-underline"}:void 0),themeClassName=themeProps.className,themeClassNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(themeClassName,theme.classNames),classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_6__.D.getStylesForClassName(className,theme.classNames),buttonElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...mergedProps,style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",...themeClassNameStyles,...themeProps?.style,...styleOverride,...classNameStyles,...style},children:themedChildren});return hasHref?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basics_ThemedLink__WEBPACK_IMPORTED_MODULE_2__.G,{href:mergedProps.href,children:buttonElement}):buttonElement};try{Button.displayName="Button",Button.__docgenInfo={description:"Read the [full documentation for Button](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-button--docs)",displayName:"Button",props:{href:{defaultValue:null,description:"Optional. When provided, Button becomes a clickable link.",name:"href",required:!1,type:{name:"string"}},pill:{defaultValue:null,description:"Optional. When `true`, corners will be round.",name:"pill",required:!1,type:{name:"boolean"}},linkColor:{defaultValue:null,description:"Optional. Color for the button text when the `link` swatch is used.",name:"linkColor",required:!1,type:{name:"string"}},swatch:{defaultValue:null,description:"Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string, or the special `'link'` swatch.",name:"swatch",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"light"'},{value:'"blue"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"teal"'},{value:'"cyan"'},{value:'"white"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"gray800"'},{value:'"gray900"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});__webpack_require__("./node_modules/react/index.js");var _themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_basics_Div__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/basics/Div.tsx"),_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/children/sanitizeChildren.tsx"),_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/PDFThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=_ref=>{let{children,dir,grow,shrink,gap,padding,className,style,...props}=_ref;const theme=(0,_theme_PDFThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Um)(),styleInnate={display:"flex",flexDirection:"column"===dir||"y"===dir?"column":"row",flexShrink:shrink?1:void 0,flexGrow:grow?1:void 0,gap,padding},classNameStyles=_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_5__.D.getStylesForClassName(className,theme.classNames);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basics_Div__WEBPACK_IMPORTED_MODULE_1__.i,{...props,style:{...styleInnate,...classNameStyles,...style},children:(0,_children_sanitizeChildren__WEBPACK_IMPORTED_MODULE_2__.j)(children)})};Box.displayName="Box";try{Box.displayName="Box",Box.__docgenInfo={description:"Read the [full documentation for Box](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-box--docs)",displayName:"Box",props:{dir:{defaultValue:null,description:"Optional. The flex direction. Use `row` or `x` for horizontal row layout. Use `column` or `y` for vertical column layout. Default is `'row'`.",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"x"'},{value:'"column"'},{value:'"y"'}]}},grow:{defaultValue:null,description:"Optional. When `true`, the Box will expand within its parent Box.",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"Optional. When `true`, the Box will shrink within its parent Box.",name:"shrink",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"Optional. Convenient way to quickly set the `gap` style.",name:"gap",required:!1,type:{name:"number"}},padding:{defaultValue:null,description:"Optional. Convenient way to quickly set the `padding` style.",name:"padding",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layout/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/documentation/DocsPDF.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>DocsPDF});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/basics/ThemedPage.tsx")),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/fonts/Fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsPDF=_ref=>{let{children,pageSize="LETTER",orientation,pageProps,width=420,height=600}=_ref;const roboto=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_3__.v.sansSerif.roboto);return _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(roboto),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_basics_ThemedPage__WEBPACK_IMPORTED_MODULE_2__.L,{size:pageSize,orientation,...pageProps,style:{fontFamily:roboto.family,...pageProps?.style},children})})})};DocsPDF.displayName="DocsPDF";try{DocsPDF.displayName="DocsPDF",DocsPDF.__docgenInfo={description:"",displayName:"DocsPDF",props:{pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},pageProps:{defaultValue:null,description:"",name:"pageProps",required:!1,type:{name:"ThemedPageProps"}},width:{defaultValue:{value:"420"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/documentation/DocsPDF.tsx#DocsPDF"]={docgenInfo:DocsPDF.__docgenInfo,name:"DocsPDF",path:"src/stories/documentation/DocsPDF.tsx#DocsPDF"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);