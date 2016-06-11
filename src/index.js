'use strict';

require('./index.html');
var Elm = require('./App');

var app = Elm.App.fullscreen();

//interop
app.ports.alert.subscribe(function(message) {
  alert(message);
  app.ports.log.send('Alert called: ' + message);
});
