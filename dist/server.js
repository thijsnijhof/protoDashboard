'use strict';

// server.js
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);

// Imports.
var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();
// Express server.
var staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);
var port = 5555;
app.listen(port, function () {
  console.log('App listening on port ' + 5555 + '!');
});

// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);
//# sourceMappingURL=server.js.map