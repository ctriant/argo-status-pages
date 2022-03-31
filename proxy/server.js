/**
 * Module dependencies.
 */
 const express = require('express');
 const { createProxyMiddleware } = require('http-proxy-middleware') // require('http-proxy-middleware');
 
 /**
  * Configure proxy middleware
  */
 const jsonPlaceholderProxy = createProxyMiddleware({
   target: 'https://api.argo.grnet.gr',
   changeOrigin: true, // for vhosted sites, changes host header to match to target's host
   logLevel: 'debug',
   onProxyReq: function (proxyReq) {
    proxyReq.setHeader('x-api-key', '85f0977868598ee029fc4a06d1790676');
    console.log('RAW Response from the target', JSON.stringify(proxyReq.headers, true, 2));
   },
 });
 
 const app = express();
 
 /**
  * Add the proxy to express
  */
 app.use('/api/v2/status/CORE/SITES', jsonPlaceholderProxy);
 app.use('/api/v2/results/CORE/NGI', jsonPlaceholderProxy);
 
 app.listen(8080);
 
 console.log('[DEMO] Server: listening on port 3000');
 console.log('[DEMO] Opening: http://localhost:3000/users');
