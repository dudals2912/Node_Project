var ffi = require('ffi-napi')
var ref = require('ref-napi')

var libmylibrary = ffi.Library('TestFile/Pointer_String', {
    'get_md5_string': [ 'void', [ 'string' ] ]
  });


var buffer = ref.alloc('String');
var buffer = new Buffer.from('come true\0');
libmylibrary.get_md5_string(buffer);
var actualString = ref.readCString(buffer, 0);

