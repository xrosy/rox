"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var BROWSERS=["last 3 versions","ie >= 9","ie_mob >= 10","ff >= 30","chrome >= 34","safari >= 6","opera >= 12.1","ios >= 6","android >= 4.4","bb >= 10","and_uc 9.9"],_default=[{test:/\.jsx?$/,use:{loader:"babel-loader",options:{cacheDirectory:!0,presets:[["@babel/preset-env",{/* 将此参数设置为false,既将module交由webpack处理，而不是babel */modules:"auto",// 'commonjs', 'amd', 'umd', 'systemjs', 'auto'
useBuiltIns:"usage",corejs:"3.4.7",// shippedProposals: true,
targets:{browsers:BROWSERS}}],["@babel/preset-react",{}]],plugins:["@babel/plugin-proposal-class-properties",["@babel/plugin-transform-runtime",{corejs:3,helpers:!0}]]}},// include : path.join(absWorkspace, 'src'),
exclude:/(node_modules|bower_components)/}];exports["default"]=_default;