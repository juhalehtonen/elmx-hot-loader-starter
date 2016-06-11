'use strict';

require('./index.html');
var Elm = require('./Main');

var app = Elm.Main.fullscreen();

//interop
app.ports.alert.subscribe(function(message) {
  alert(message);
  app.ports.log.send('Alert called: ' + message);
});
