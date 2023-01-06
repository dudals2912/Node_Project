var ffi = require('ffi-napi');

// Interface into the native lib
var CB_Lib = ffi.Library('./TestFile/CallBack_Hello', {
  'setCallback': ['void', ['pointer']]
});

// Callback from the native lib back into js
var callback = ffi.Callback('void', ['string'],
  function(what) {

    for(var i=1;i<10;i++){
      console.log(what);
    }

  });

console.log("registering the callback");
CB_Lib.setCallback(callback);
console.log('Done');

// Make an extra reference to the callback pointer to avoid GC
process.on('exit', function() {
  callback
});