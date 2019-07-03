require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var fs = require('fs')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable
var mockTable = config.dev.mockTable

var app = express()
var compiler = webpack(webpackConfig)

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache,no-store');
  next();
});

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

if (process.argv.indexOf('--proxy') > 0) {
  console.log('proxy')
  // 使用代理请求远端数据
  Object.keys(proxyTable).forEach(function (context) {
    let pathRewrite = {};
    if (typeof proxyTable[context] !== 'string') {
      pathRewrite = proxyTable[context];
    }
    app.use(context, proxyMiddleware({
      target: 'https//v1.itooi.cn',
      changeOrigin: true,
      headers: {
        referer: 'https//v1.itooi.cn'
      },
      pathRewrite: pathRewrite
    }))
  })
} else {
  console.log('mock')
  // 使用本地的模拟数据
  Object.keys(mockTable).forEach(function (context) {
    let filename = path.resolve('.' + mockTable[context]);
    app.use(context, function (req, res, next) {
      if (filename.endsWith('.json')) {
        res.json(JSON.parse(fs.readFileSync(filename)));
      } else {
        delete require.cache[filename];
        require(filename)(req, res, next);
      }
    });
  })
}

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://127.0.0.1:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
