"use strict";var _path=_interopRequireDefault(require("path"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var XrosyConf=/*#__PURE__*/function(){function a(b){_classCallCheck(this,a),this.__=_objectSpread({},b),this.projectContext=this.getProjectContext(),this.entriesObj=this.getEntriesObj(),this.ModuleRules=this.getModuleRules(),this.resolveExtensions=this.getResolveExtensions()}return _createClass(a,[{key:"getProjectContext",value:function a(){return _path.default.resolve(this.__.projectDir)}},{key:"getResolveExtensions",value:function a(){return[".js",".jsx"]}},{key:"getModuleRules",value:function a(){return[{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}]}},{key:"getEntriesObj",value:function a(){}}]),a}(),_default=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=_construct(XrosyConf,b);/* Generate configs Object */return{context:d.projectContext,entry:d.entriesObj,output:{},resolve:{extensions:d.resolveExtensions}}};exports.default=_default;