var ffi = require('ffi-napi')
var ref = require('ref-napi')

let arr = [0,2,3,4];
let buffer = new Array(4);
buffer = [0,3,6,9];

for(var i=0; i<4; i++){
    buffer[i] = ref.alloc('int', arr[i]);
    //buffer[0] = arr[0];
    //buffer[1] = arr[1];
    //buffer[2] = arr[2];
    //buffer[3] = arr[3];
}

var actualNumber = buffer[1].deref();
console.log(actualNumber);
