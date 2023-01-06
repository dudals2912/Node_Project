var ffi = require('ffi-napi')
var ref = require('ref-napi')

var intPtr = ref.refType('int');

var libmylibrary = ffi.Library('TestFile/Pointer_Integer', { 
  'manipulate_number': [ 'int', [intPtr ] ]
});

//정수 배열
// var buffer = new Buffer.alloc(32);
// buffer[0] = 3;
// libmylibrary.manipulate_number(buffer);

//정수
var buffer = ref.alloc('int',12); 
libmylibrary.manipulate_number(buffer);
var actualNumber = buffer.deref();
console.log(actualNumber);
