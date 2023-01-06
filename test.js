var ffi = require('ffi-napi')
var ref = require('ref-napi')

let arr = [0,30,60,90];
let buffer = new Array(4);
buffer = [0,0,0,0];
console.log(buffer);

buffer = ref.alloc('int',arr[0]); 
    console.log(buffer[0]); // 0 ,0 ,0, 0
buffer = ref.alloc('int',arr[1]); 
    console.log(buffer[0]); // 30 ,0 ,0 ,0
buffer = ref.alloc('int',arr[2]); 
    console.log(buffer[0]); // 60 ,0 ,0 ,0
buffer = ref.alloc('int',arr[3]); 
    console.log(buffer[0]); // 90 ,0 ,0 ,0

console.log("\n")

//arr[0~4] 까지 배열을 넣어보았지만 
for(var i=0 ; i<4 ; i++){
    buffer = ref.alloc('int', arr[i]);
    console.log(buffer);
}

//buffer에서 받아버리는 건 결국 마지막 배열 값 -> 버퍼에서 입력이 되어도 순차적으로 
//쌓이지 않고 첫 배열값을 계속 삭제한다는 뜻
for(var j=0; j<4 ;j++){
    console.log(buffer[j]);
}  
