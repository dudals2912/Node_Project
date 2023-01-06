var ffi = require('ffi-napi')
var ref = require('ref-napi')

var doublePtr = ref.refType('double');

var libmylibrary = ffi.Library('./CallBack/CallBack_Address', { 
  'manipulate_Address': [ 'void', [doublePtr ] ]
});

//실수
//8byte를 하나의 공간으로 잡고 하나씩 값을 넘기는 방식

var buf = Buffer.alloc(8 * 25600);
libmylibrary.manipulate_Address(buf);
for (let i=0; i<25600; i++) {
    console.log(buf.readDoubleLE(8 * i));
}

 //25600 -> 0.6초 정도