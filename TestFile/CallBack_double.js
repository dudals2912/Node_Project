const { request } = require('express');
var ffi = require('ffi-napi');
var ref = require('ref-napi');

var doublePtr = ref.refType('double'); //포인터

// Interface into the native lib
var CB_Lib = ffi.Library('./TestFile/CallBack_double', {
  'setCallback': ['void', ['pointer']]
});

// Callback from the native lib back into js
var callback = ffi.Callback('void', [doublePtr],
  function(array) {
    console.log(array.length);
    buffer = ref.alloc// 버퍼공간

  });

console.log("registering the callback");
CB_Lib.setCallback(callback);
console.log('Done');

// Make an extra reference to the callback pointer to avoid GC
process.on('exit', function() {
  callback
});