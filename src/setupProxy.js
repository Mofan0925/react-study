const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
          '/user',{
            target: 'http://localhost:4000',
            changeOrigin: true
          })
  )
  app.use(
    createProxyMiddleware(
          '/login',{
            target: 'http://localhost:4000',
            changeOrigin: true
          })
     
  )
};