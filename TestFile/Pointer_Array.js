
var ffi = require('ffi-napi')
var ref = require('ref-napi')

var doublePtr = ref.refType('double');

var libmylibrary = ffi.Library('TestFile/Pointer_Array', { 
  'manipulate_Array': [ 'void', [doublePtr] ]
});

let arr = new Array(4);
for(var j=0; j<4; j++){
    var k = 0
    arr[j] = k;
}
let buffer = new Array(4);
var buf = Buffer.alloc(4);
for(var i=0; i<4 ;i++){
    console.log
    // buffer[i] = ref.alloc('double',arr[i]); 
    libmylibrary.manipulate_Array(buf[i],i);
    // var actualNumber = buffer[i].deref();
}





/*배열
let arr = new Array(100);
for(var j=0; j<100; j++){
    var k = 0
    arr[j] = k;
}
let buffer = new Array(100);
for(var i=0; i<100 ;i++){
    buffer[i] = ref.alloc('double',arr[i]); 
    libmylibrary.manipulate_Array(buffer[i],i);
    var actualNumber = buffer[i].deref();
}
*/


