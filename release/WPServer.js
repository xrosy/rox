"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _path=_interopRequireDefault(require("path")),_fs=_interopRequireDefault(require("fs")),_express=_interopRequireDefault(require("express")),_webpackDevMiddleware=_interopRequireDefault(require("webpack-dev-middleware")),_webpackHotMiddleware=_interopRequireDefault(require("webpack-hot-middleware")),_utils=require("./utils.js"),_constant=require("./constant"),_WPServer=_interopRequireDefault(require("./WPServer.router")),app=(0,_express["default"])(),_default=function _default(a){var b=a.options;b=void 0===b?{}:b;var c=b.output;c=void 0===c?{}:c;var d=c.path,e=c.publicPath;// app.engine('html', require('express-art-template'));
// app.set('view engine', 'html');
// app.set('views', opPath);
// app.use('/gmall', router);
// app.get('/', (req, res) => res.redirect('defaultRedirect'));
app.use((0,_webpackDevMiddleware["default"])(a,{publicPath:e,noInfo:!1,writeToDisk:!1,headers:{"X-Custom-Header":"yes"},logLevel:"warn",stats:{colors:!0,chunks:!1}})),app.use((0,_webpackHotMiddleware["default"])(a)),app.get(["/gmall","/gmall/*"],function(a,b){b.redirect("/gmall.html")}),app.use(_express["default"]["static"](d)),app.use(function(a,b){b.status(404).send("Sorry cant find that!")}),app.listen(_constant.DEFAULT_SERVICE_PORT,function(a){return a?_utils.logger.log(a):void _utils.logger.primary("Listening on port :".concat(_constant.DEFAULT_SERVICE_PORT,". Open up http://127.0.0.1:").concat(_constant.DEFAULT_SERVICE_PORT,"/ in your browser."))})};exports["default"]=_default;