var ref = require('ref-napi');
var ffi = require('ffi-napi');

var charptr = ref.refType('char');

var Lib = ffi.Library('./TestFile/CallExample', {
    'function': [ "void" , [charptr,'char'] ],
    'callback': ["void", [charptr]]
  });

Lib.function("", Lib.callback);

