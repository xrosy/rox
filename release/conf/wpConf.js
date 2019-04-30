"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _path=_interopRequireDefault(require("path")),_fs=_interopRequireDefault(require("fs")),_webpack=_interopRequireDefault(require("webpack")),_cleanWebpackPlugin=_interopRequireDefault(require("clean-webpack-plugin")),_nodeYaml=_interopRequireDefault(require("node-yaml"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var userConfigLoader=function(a){var b=_path["default"].join(a,"./.xrosyrc.yml");return!1===_fs["default"].existsSync(b)?{}:_nodeYaml["default"].readSync(b,{encoding:"utf8"})},XrosyConf=/*#__PURE__*/function(){function a(b){_classCallCheck(this,a),this.__=_objectSpread({},b),this.engine="react",this.env=this.getEnvironment(),this.projectContext=this.getProjectContext(),this.userConf=this.getUserConfig(),this.entriesObj=this.getEntriesObj(),this.ModuleRules=this.getModuleRules(),this.resolveExtensions=this.getResolveExtensions()}return _createClass(a,[{key:"getProjectContext",value:function(){return this.projectContext||_path["default"].resolve(this.__.projectDir)}},{key:"getEnvironment",value:function getEnvironment(){return this.__.env||process.env.xrosy_env||process.env.NODE_ENV||"dev"}},{key:"getUserConfig",value:function getUserConfig(){return this.userConf||userConfigLoader(this.projectContext)}},{key:"getEntriesObj",value:function getEntriesObj(){var a=this.getProjectContext(),b=this.getUserConfig(),c=b.entries;return c.map(function(b){return _path["default"].join(a,b)})}},{key:"getResolveExtensions",value:function getResolveExtensions(){return[".js",".jsx"]}},{key:"getModuleRules",value:function getModuleRules(){return[{test:/\.(js|jsx)$/,loader:"babel-loader",exclude:/node_modules/}]}}]),a}(),getProjectContext=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:".";return _path["default"].resolve(a)},_default=function(a){var b=a.workspace,c=getProjectContext(b);/* Generate configs Object */return{context:c,mode:"none",entry:["./src/admin/index.js"],output:{path:"./build",filename:"[name].js"// publicPath: '',
},// chunkFilename: 'libs',
resolve:{/* 引入依赖或者文件时，强制要求添加文件的扩展名 */ // enforceExtension: true,
// enforceModuleExtension: false,
alias:{},extensions:[".js",".jsx"]},module:{rules:[{test:/\.(js|jsx)$/,exclude:/(node_modules|bower_components)/,use:{loader:"babel-loader",options:{presets:["@babel/preset-env","@babel/preset-react"]}}}]},plugins:[new _webpack["default"].ProgressPlugin,new _cleanWebpackPlugin["default"]({})],optimization:{minimize:!0}}};exports["default"]=_default;