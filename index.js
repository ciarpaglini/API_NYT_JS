var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy middleware options
var filter = function (pathname, req) {
  
  // replace www.myapp.example with origin(s) that your content will be served from
  // return (req.headers.origin === 'https://www.myapp.example');
  // multiple origin version:
  return ((req.headers.origin === 'https://xxxxxx') || (req.headers.origin === 'https://xxxxxx.com'));   
};

var apiOptions = {
  // replace api.datasource.example with the url of your target host
  target: 'https://api.nytimes.com',
  changeOrigin: true, // needed for virtual hosted sites like Heroku
  pathRewrite: {
    '^/svc/': '/', // remove endpoint from request path ('^/api/': '/')
  },
  onProxyReq: (proxyReq) => {
    // append key-value pair for API key to end of path
    // using KEYNAME provided by web service
    // and KEYVALUE stored in Heroku environment variable
    proxyReq.path += ('?api-key=' + process.env.NYT_BOOKS);
  },
  logLevel: 'debug' // verbose server logging
};


// create the proxy (without context)
var apiProxy = proxy(filter, apiOptions);
//var streetsProxy = proxy(filter, smartyOptions);

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use('/svc', apiProxy);
//app.use('/streets', streetsProxy);

app.listen(app.get('port'));
