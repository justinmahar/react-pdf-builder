/*! For license information please see 1-README-stories-mdx.e6bb0b00.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[8617],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  📄 React PDF Builder\n</h2>\n<h3 align="center">\n  Build beautiful PDF documents in React.\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/react-pdf-builder" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-pdf-builder.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-pdf-builder/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-pdf-builder/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-pdf-builder/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\n<p align="center">\n  <a href="https://paypal.me/thejustinmahar/5"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n</p>\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\n\n<h3><a href="https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--demo">👁️ View live demo</a></h3>\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/react-pdf-builder/)**.\n\n## Overview\n\nReact PDF Builder is a fully themeable component framework built on [react-pdf](https://react-pdf.org/) and [pdfkit](https://pdfkit.org/).\n\nThe framework includes ready-to-use components for headings, paragraphs, lists, tables, buttons, cards, and more.\n\nIf you want to build beautiful PDFs in React without starting from scratch, this is the library for you!\n\n### Features include:\n\n- **🌟 Pre-made components to make building PDFs a breeze**\n  - Styled and done for you, so you can start building right away.\n- **🎨 Fully themeable with built-in light and dark modes**\n  - All colors and component props can be overridden easily.\n- **📏 Scalable to any page size**\n  - Easily scale all components to match your preferred size.\n- **🖋️ Drop-in support for 25 commonly used fonts (including bold/italics!)**\n  - Easily use popular fonts like Roboto, Lato, Raleway, or Montserrat—including formatting styles!\n- **📊 Table support with page wrapping, theming, and colspans**\n  - Need tables? Look no further. Beautiful tables are at your fingertips.\n- **🟦 Easy to use gradient backdrops for your pages**\n  - Quickly and easily spruce up your PDF with gradient backdrops, with optional pre-made decorators.\n- **📦 Box layout system using Flexbox**\n  - If you\'re familiar with CSS Flexbox, you\'ll feel right at home using the Box component to lay out your design.\n- **🔧 Built on well-maintained libraries**\n  - This component framework is built on [react-pdf](https://react-pdf.org/) and [pdfkit](https://pdfkit.org/), which are maintained by only the best and brightest.\n- **🚀 Much more!** \n  - Dive into the documentation to learn more!\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\n\n## Donate \n\nIf this project helped save you time, please consider buying me a coffee (my body can\'t function without it). Your support is much appreciated!\n\n<a href="https://github.com/sponsors/justinmahar"><img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>\n\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i @react-pdf/renderer react-pdf-builder \n```\n\n> Note: This project has a dependency on [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer). Make sure it\'s installed along with `react-pdf-builder`.\n\n## Quick Start\n\nBelow is a component that renders a standard A4 size PDF with a heading, paragraph, card, and table. You can use this as a starting point.\n\nMost components can be themed using the `swatch` prop, and custom styled using `style` and CSS. Use `LETTER` page size for 8.5x11" paper used in the US.\n\n```jsx\nimport { ReactPDFBuilder, Themes } from \'react-pdf-builder\';\nimport { Document, PDFViewer } from \'@react-pdf/renderer\';\n\nexport const QuickStart = () => {\n  const RPB = new ReactPDFBuilder(Themes.light.build());\n  return (\n    <PDFViewer style={{ height: 700, width: 500 }}>\n      <Document>\n        <RPB.Page size="A4">\n          <RPB.Heading3 rule>Hello, world!</RPB.Heading3>\n          <RPB.Paragraph>Let\'s get started building the PDF.</RPB.Paragraph>\n          <RPB.Box direction="y" gap={15}>\n            <RPB.Box direction="x">\n              <RPB.Button href="#">Button</RPB.Button>\n            </RPB.Box>\n            <RPB.Box direction="x" gap={15}>\n              <RPB.Card swatch="gray300" style={{ marginBottom: 0, width: \'50%\' }}>\n                <RPB.CardHeader>Example</RPB.CardHeader>\n                <RPB.CardBody withHeader>This is a card with some text inside as an example</RPB.CardBody>\n              </RPB.Card>\n              <RPB.Table bordered inverseStriped swatch="cyan" style={{ borderRadius: 10, width: \'50%\' }}>\n                <RPB.TableRow swatch="cyan">\n                  <RPB.TableCell>Header 1</RPB.TableCell>\n                  <RPB.TableCell>Header 2</RPB.TableCell>\n                </RPB.TableRow>\n                <RPB.TableRow>\n                  <RPB.TableCell>Cell A</RPB.TableCell>\n                  <RPB.TableCell>Cell Y</RPB.TableCell>\n                </RPB.TableRow>\n                <RPB.TableRow>\n                  <RPB.TableCell>Cell B</RPB.TableCell>\n                  <RPB.TableCell>Cell Z</RPB.TableCell>\n                </RPB.TableRow>\n              </RPB.Table>\n            </RPB.Box>\n          </RPB.Box>\n        </RPB.Page>\n      </Document>\n    </PDFViewer>\n  );\n};\n```\n\nThis will create the following PDF:\n\n<a href="https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--quick-start"><img src="https://justinmahar.github.io/react-pdf-builder/images/quick-start.png" width="400" border="1" /></a>\n\nClick [here](https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--quick-start) to see a live demo of this quick start.\n\nYou can also see the <a href="https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--demo">main project demo</a> for a deeper look at what\'s possible with this library.\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\n\n## TypeScript\n\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\n\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\n\n## Icon Attribution\n\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\n\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\n\n## Contributing\n\nOpen source software is awesome and so are you. 😎\n\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\n\nFor major changes, open an issue first to discuss what you\'d like to change.\n\n\x3c!-- [/lock:contributing] ---------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-pdf-builder/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-pdf-builder/stargazers): [👉⭐](https://github.com/justinmahar/react-pdf-builder/stargazers)\n\n\x3c!-- [lock:support] 🚫--------------------------------------- --\x3e\nWant to support the project? Feel free to grab me a coffee, which is my main source of fuel for development:\n\n<a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>\n\n\x3c!-- [/lock:support] ---------------------------------------🚫 --\x3e\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/react-pdf-builder/?path=/docs/license--docs).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.oz,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);