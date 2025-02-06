try{
(()=>{var y=__STORYBOOK_API__,{ActiveTabs:f,Consumer:S,ManagerContext:_,Provider:T,addons:s,combineParameters:O,controlOrMetaKey:v,controlOrMetaSymbol:x,eventMatchesShortcut:M,eventToShortcut:P,isMacLike:A,isShortcutTaken:C,keyToSymbol:j,merge:B,mockChannel:w,optionOrAltSymbol:G,shortcutMatchesShortcut:I,shortcutToHumanString:R,types:K,useAddonState:D,useArgTypes:H,useArgs:Y,useChannel:E,useGlobalTypes:N,useGlobals:J,useParameter:q,useSharedState:F,useStoryPrepared:L,useStorybookApi:U,useStorybookState:V}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ie,create:i,createCache:ne,createGlobal:ae,createReset:ce,css:le,darken:pe,ensure:de,ignoreSsrWarning:ue,isPropValid:be,jsx:me,keyframes:he,lighten:ke,styled:ge,themes:ye,typography:fe,useTheme:Se,withTheme:_e}=__STORYBOOK_THEMING__;var r={name:"react-pdf-builder",version:"0.1.11",author:"Justin Mahar <contact@justinmahar.com>",description:"Build beautiful PDF documents in React.",homepage:"https://justinmahar.github.io/react-pdf-builder/",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/react-pdf-builder.git"},bugs:{url:"https://github.com/justinmahar/react-pdf-builder/issues"},keywords:[],peerDependencies:{"@react-pdf/renderer":"^4.0.0 || ^5.0.0 || ^6.0.0",react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@types/color":"^4.2.0","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-storybook":"^0.6.15",lockblocks:"^1.1.10",prettier:"^3.4.2",react:"^18.2.0","react-dom":"^18.2.0","react-html-props":"^2.0.9","remark-gfm":"^3.0.1","replace-in-file":"^8.3.0",storybook:"^7.6.12",typescript:"^5.7.3",webpack:"^5.97.1"},dependencies:{color:"^4.2.3",uuid:"^11.0.5"}};var c=r.name,l=r.homepage,p="light",d=void 0,n=i({base:p,brandTitle:c,brandUrl:l,brandImage:d});s.setConfig({theme:n});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
