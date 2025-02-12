"use strict";(self.webpackChunkreact_pdf_builder=self.webpackChunkreact_pdf_builder||[]).push([[524],{"./src/components/demo/Demo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Demo});var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js"),_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/backdrops/BackdropDecorators.tsx")),_builder_ReactPDFBuilder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/builder/ReactPDFBuilder.tsx"),_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/fonts/Fonts.ts"),_shapes_Gradients__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/shapes/Gradients.ts"),_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/themes/ThemeBuilder.ts"),_themes_Themes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/Themes.ts"),_shapes_RectangleShape__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/shapes/RectangleShape.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Demo=_ref=>{let{themeName="light",pageSize="LETTER",orientation="portrait",showCoverPage=!0,override,scale=1,...props}=_ref;const buttonHref="https://github.com/justinmahar/react-pdf-builder",themeBuilder="dark"===themeName?_themes_Themes__WEBPACK_IMPORTED_MODULE_6__.B.dark:_themes_Themes__WEBPACK_IMPORTED_MODULE_6__.B.light,bodyFont=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.sansSerif.lato);bodyFont&&_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(bodyFont);const titleFont=_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.load(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.serif.ebGaramond);titleFont&&_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.register(titleFont),_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.registerEmojiSource(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.emojis.joyPixels()),_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.KQ.registerHyphenationCallback(_fonts_Fonts__WEBPACK_IMPORTED_MODULE_4__.v.noHyphenation);const themeOverride={classNames:{demo:{backgroundColor:"lightred",transform:"rotate(50deg)"}},pageProps:{style:{fontFamily:bodyFont?.family}}},themeConfig={scale,override:_themes_ThemeBuilder__WEBPACK_IMPORTED_MODULE_9__.D.overrideTheme(override??{},themeOverride)},theme=themeBuilder.build(themeConfig),RPB=new _builder_ReactPDFBuilder__WEBPACK_IMPORTED_MODULE_3__.p(theme),bodyColor=theme._bodyColor;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.TO,{style:{height:700,width:500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.yo,{children:[showCoverPage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Page,{size:pageSize,orientation,style:{flexDirection:"column",color:"white",padding:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.GradientBackdrop,{size:pageSize,orientation,swatch:"blue",darken:!0,darkenAmounts:[.4,.7],children:_backdrops_BackdropDecorators__WEBPACK_IMPORTED_MODULE_2__.d.circles3}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"y",style:{height:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{style:{height:"5%",backgroundColor:"#00000022"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{style:{height:"15%"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{shrink:!0,style:{justifyContent:"center",padding:30*scale,backgroundColor:"#00000022"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading1,{style:{fontFamily:titleFont?.family,textAlign:"center",fontSize:63*scale},children:"React PDF Builder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{style:{textAlign:"center",fontSize:28*scale,fontWeight:400},children:"Build beautiful PDF documents in React."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{grow:!0,style:{justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__._V,{src:"https://justinmahar.github.io/react-pdf-builder/images/logo-red.png",style:{width:200*scale}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{style:{height:"5%",backgroundColor:"#00000022"}})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Page,{size:pageSize,orientation,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.GradientBackdrop,{size:pageSize,orientation,gradient:[{offset:"0%",stopColor:"red",stopOpacity:0},{offset:"100%",stopColor:"red",stopOpacity:0}],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shapes_RectangleShape__WEBPACK_IMPORTED_MODULE_7__.R,{linearGradientCoords:{x1:.85,y1:.5,x2:.87,y2:0},gradient:[{offset:"0%",stopColor:"#000000",stopOpacity:0},{offset:"96%",stopColor:"#000000",stopOpacity:0},{offset:"96%",stopColor:theme.colorScheme.greyscale.black,stopOpacity:.05},{offset:"100%",stopColor:theme.colorScheme.greyscale.black,stopOpacity:.05}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shapes_RectangleShape__WEBPACK_IMPORTED_MODULE_7__.R,{linearGradientCoords:{x1:.83,y1:.5,x2:.88,y2:0},gradient:[{offset:"0%",stopColor:"#000000",stopOpacity:0},{offset:"96%",stopColor:"#000000",stopOpacity:0},{offset:"96%",stopColor:theme.colorScheme.greyscale.black,stopOpacity:.05},{offset:"100%",stopColor:theme.colorScheme.greyscale.black,stopOpacity:.05}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shapes_RectangleShape__WEBPACK_IMPORTED_MODULE_7__.R,{linearGradientCoords:{x1:.81,y1:.5,x2:.9,y2:0},gradient:[{offset:"0%",stopColor:"#000000",stopOpacity:0},{offset:"96%",stopColor:"#000000",stopOpacity:0},{offset:"96%",stopColor:theme.colorScheme.greyscale.black,stopOpacity:.05},{offset:"100%",stopColor:theme.colorScheme.greyscale.black,stopOpacity:.05}]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"y",style:{gap:10*scale},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,children:"Basic Typography"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading1,{rule:!0,children:"Heading 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading2,{rule:!0,children:"Heading 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading3,{rule:!0,children:"Heading 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading4,{rule:!0,children:"Heading 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,children:"Heading 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{rule:!0,children:"Heading 6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Paragraph,{children:["Paragraph text. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Link,{href:"#",children:"This is a link."})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:{fontWeight:"bold"},children:"This is bold."})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{style:{fontStyle:"italic"},children:"This is italic."})," Emojis ☕️👍✅"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{gap:8*scale,style:{marginLeft:"auto",width:400*scale},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Signature,{x:!0,className:"mb-0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{fontSize:16*scale},children:"Sign here"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,break:!0,children:"Unordered Lists"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.UnorderedList,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"React"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"PDF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"Builder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,children:"Ordered Lists"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.OrderedList,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"List Item A"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"List Item B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"List Item C"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,children:"Unstyled Lists"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.OrderedList,{unstyled:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"This list has no bullets or numbers"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"Second list item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.ListItem,{children:"Third list item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,break:!0,children:"Blockquotes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",gap:20*scale,style:{flexWrap:"wrap",justifyContent:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Blockquote,{className:"mb-0",wrap:!1,style:{width:220*scale},children:"Default blockquote"}),Object.keys(theme.colorScheme?.contrast??{}).map(((swatch,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Blockquote,{className:"mb-0",wrap:!1,break:i>0&&(i+1)%16==0,swatch,style:{width:220*scale},children:`"${swatch}" swatch`},`bq-${swatch}`)))]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,break:!0,children:"Tables"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{children:"Plain and bordered inside, 80% width"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{direction:"x",style:{justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Table,{borderedInside:!0,style:{width:"80%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{style:{textAlign:"right"},children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{style:{textAlign:"center"},children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{style:{textAlign:"right"},children:"Incididunt ut labore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{style:{textAlign:"center"},children:"Lorem ipsum dolor sit amet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Dolore magna aliqua"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{style:{textAlign:"right"},children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{style:{textAlign:"center"},children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{children:"Striped, horizontal bordered, with page wrapping support"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{style:{position:"relative",marginBottom:10*scale},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Table,{borderedOutside:!0,borderedHorizontal:!0,striped:!0,style:{marginBottom:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Incididunt ut labore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Dolore magna aliqua"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Incididunt ut labore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Dolore magna aliqua"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Consectetur adipiscing elit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{children:"Styled with column widths 30%, 50%, 20%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Table,{bordered:!0,inverseStriped:!0,swatch:"primary",style:{borderRadius:10*scale},colWidths:["30%","50%","20%"],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{swatch:"primary",inverseStriped:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{style:{marginBottom:0},children:"Col 30% "})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{style:{marginBottom:0},children:"Column 50%"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{style:{marginBottom:0},children:"20%"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:'This table has the "primary" swatch with inverseStriped'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Sed do eiusmod"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{swatch:"blue",children:"Blue swatch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"Dolore magna aliqua"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{colWidths:["80%","20%"],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"This row has only two cells. The first is 80%, the second is 20%. This imitates a colspan."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{swatch:"teal",children:"Teal swatch"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.TableRow,{colWidths:["50%","50%"],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"50% col width"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.TableCell,{children:"50% col width"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,break:!0,children:"Cards & Buttons"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Card,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.CardHeader,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{style:{marginBottom:0},children:"Card Title"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.CardBody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",style:{flexWrap:"wrap",justifyContent:"center",gap:"10"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"primary",href:buttonHref,children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"secondary",href:buttonHref,children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"success",href:buttonHref,children:"Success"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"danger",href:buttonHref,children:"Danger"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"warning",href:buttonHref,children:"Warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"info",href:buttonHref,children:"Info"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"light",href:buttonHref,children:"Light"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"dark",href:buttonHref,children:"Dark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"link",href:buttonHref,children:"Link"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Card,{swatch:"primary",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.CardHeader,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{style:{marginBottom:0},children:"Primary Card"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.CardBody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{children:"Cards can be swatched using theme colors, greyscale colors, or palette colors. Border, background, and the header text contrast color will be configured based on the theme's color scheme."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",style:{flexWrap:"wrap",justifyContent:"center",gap:10*scale},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"blue",href:buttonHref,children:"Blue"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"indigo",href:buttonHref,children:"Indigo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"purple",href:buttonHref,children:"Purple"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"pink",href:buttonHref,children:"Pink"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"red",href:buttonHref,children:"Red"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"orange",href:buttonHref,children:"Orange"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"yellow",href:buttonHref,children:"Yellow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"green",href:buttonHref,children:"Green"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"teal",href:buttonHref,children:"Teal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Button,{swatch:"cyan",href:buttonHref,children:"Cyan"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,break:!0,children:"Layout"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{children:"Horizontal Box"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{grow:!0,padding:10*scale,style:{justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderRight:0,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"Grow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{padding:10*scale,style:{justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderRight:0,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"Shrink"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"y",padding:10*scale,style:{width:"50%",justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderColor:theme.colorScheme?.greyscale.gray500,textAlign:"justify"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{children:"Width 50%. Specify a width to allow text wrapping."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",gap:10,style:{marginBottom:20*scale},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{grow:!0,padding:10*scale,style:{justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"Grow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{shrink:!0,padding:10*scale,style:{justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"Shrink"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{padding:10*scale,style:{width:"40%",justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"40%"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Blockquote,{swatch:"info",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",gap:15*scale,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{children:"ℹ️"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{children:"Borders have been added to visualize boundaries."})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading6,{break:!0,children:"Vertical Box"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"y",style:{marginBottom:20*scale},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{padding:10*scale,style:{justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderBottom:0,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"A"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{grow:!0,padding:10*scale,style:{justifyContent:"center",alignItems:"center",borderWidth:1*scale,borderBottom:0,borderColor:theme.colorScheme?.greyscale.gray500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"B"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"y",padding:10*scale,style:{justifyContent:"center",borderWidth:1*scale,borderColor:theme.colorScheme?.greyscale.gray500,textAlign:"justify"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Paragraph,{style:{marginBottom:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Blockquote,{swatch:"info",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",gap:15*scale,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{children:"ℹ️"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.EY,{children:"Borders have been added to visualize boundaries."})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Heading5,{rule:!0,break:!0,children:"Shapes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",gap:20*scale,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.CircleShape,{size:75*scale,fill:"red"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{style:{padding:10*scale},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.CircleShape,{size:100*scale,gradient:["white","darkgray"],ellipseProps:{stroke:"green",strokeWidth:5*scale},gradientType:_shapes_Gradients__WEBPACK_IMPORTED_MODULE_5__.h.radial})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{style:{transform:"rotate(20deg)",marginTop:20*scale},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.LineShape,{length:200*scale,width:5*scale,gradient:["white","blue"],gradientType:_shapes_Gradients__WEBPACK_IMPORTED_MODULE_5__.h.leftToRight})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{direction:"x",gap:20*scale,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.RectangleShape,{width:75*scale,height:150*scale,fill:"orange",color:"red"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Box,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.RectangleShape,{width:150*scale,height:150*scale,gradient:["lightblue","darkblue"],gradientType:_shapes_Gradients__WEBPACK_IMPORTED_MODULE_5__.h.topLeftToBottomRight,style:{transform:"rotate(-15deg)",marginLeft:30*scale}})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(RPB.Box,{fixed:!0,direction:"x",style:{position:"absolute",left:0,bottom:0,width:"100%",height:"12.12%",justifyContent:"space-between",gap:10*scale,alignItems:"flex-end",paddingLeft:36*scale,paddingRight:36*scale,paddingBottom:36*scale},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.Link,{href:"https://github.com/justinmahar/react-pdf-builder",style:{textDecoration:"none",color:bodyColor},children:"React PDF Builder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RPB.PageNumber,{format:"Page %n of %t"})]})]})]})})})};Demo.displayName="Demo";try{Demo.displayName="Demo",Demo.__docgenInfo={description:"This is the description for the Demo component",displayName:"Demo",props:{themeName:{defaultValue:{value:"light"},description:"",name:"themeName",required:!1,type:{name:"string"}},pageSize:{defaultValue:{value:"LETTER"},description:"",name:"pageSize",required:!1,type:{name:'"4A0" | "2A0" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "A7" | "A8" | "A9" | "A10" | "B0" | "B1" | "B2" | "B3" | "B4" | "B5" | "B6" | "B7" | "B8" | "B9" | "B10" | "C0" | "C1" | "C2" | ... 25 more ...'}},orientation:{defaultValue:{value:"portrait"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},showCoverPage:{defaultValue:{value:"true"},description:"",name:"showCoverPage",required:!1,type:{name:"boolean"}},override:{defaultValue:null,description:"",name:"override",required:!1,type:{name:"DeepPartial<Theme>"}},scale:{defaultValue:{value:"1"},description:"",name:"scale",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/demo/Demo.tsx#Demo"]={docgenInfo:Demo.__docgenInfo,name:"Demo",path:"src/components/demo/Demo.tsx#Demo"})}catch(__react_docgen_typescript_loader_error){}}}]);