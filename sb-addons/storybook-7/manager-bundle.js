try{
(()=>{var g=__STORYBOOK_API__,{ActiveTabs:f,Consumer:S,ManagerContext:_,Provider:T,addons:r,combineParameters:v,controlOrMetaKey:O,controlOrMetaSymbol:x,eventMatchesShortcut:P,eventToShortcut:M,isMacLike:A,isShortcutTaken:w,keyToSymbol:B,merge:C,mockChannel:j,optionOrAltSymbol:R,shortcutMatchesShortcut:G,shortcutToHumanString:I,types:D,useAddonState:K,useArgTypes:H,useArgs:Y,useChannel:E,useGlobalTypes:N,useGlobals:F,useParameter:J,useSharedState:q,useStoryPrepared:L,useStorybookApi:U,useStorybookState:V}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ie,create:s,createCache:ae,createGlobal:ne,createReset:ce,css:pe,darken:le,ensure:de,ignoreSsrWarning:ue,isPropValid:be,jsx:me,keyframes:he,lighten:ke,styled:ye,themes:ge,typography:fe,useTheme:Se,withTheme:_e}=__STORYBOOK_THEMING__;var i={name:"react-pdf-builder",version:"2.0.1",author:"Justin Mahar <contact@justinmahar.com>",description:"Build beautiful PDF documents in React.",homepage:"https://justinmahar.github.io/react-pdf-builder/",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/react-pdf-builder.git"},bugs:{url:"https://github.com/justinmahar/react-pdf-builder/issues"},keywords:["react","pdf","builder","generator","document","pdfkit","renderer","framework","typography","theme","themes","component","components","tables","flexbox","style","styles","dark","light","print","printable","viewer","maker","kit","TypeScript","gradient","cards","bootstrap","layout"],peerDependencies:{"@react-pdf/renderer":"^4.0.0 || ^5.0.0 || ^6.0.0",react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@types/color":"^4.2.0","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0",bootstrap:"^5.3.3","copy-to-clipboard":"^3.3.3",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-storybook":"^0.6.15",lockblocks:"^1.1.10",openai:"^4.83.0",prettier:"^3.4.2",react:"^18.2.0","react-bootstrap":"^2.10.9","react-dom":"^18.2.0","react-html-props":"^2.0.9","react-storage-complete":"^1.1.12","remark-gfm":"^3.0.1","replace-in-file":"^8.3.0",storybook:"^7.6.12",typescript:"^5.7.3",webpack:"^5.97.1"},dependencies:{color:"^4.2.3","number-to-alphabet":"^1.0.0",romans:"^3.0.0",uuid:"^11.0.5"}};var c="React PDF Builder",p=i.homepage,l="light",d=void 0,a=s({base:l,brandTitle:c,brandUrl:p,brandImage:d});r.setConfig({theme:a});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
