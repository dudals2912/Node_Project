//NIDAQ 설정, 시작 통합
var ffi = require('ffi-napi')
var ref = require('ref-napi')

var doublePtr = ref.refType('double');
var buf;

/*const timer = () => {
setTimeout(() => {}, 1000)
}*/


var SetSt = ffi.Library('./Node_Connection/Node_Connection_Un', { 
    'setStart': [ 'int', ['pointer',doublePtr] ]
  });


function init(){
  buf = Buffer.alloc(8 * 25600);
    var callback = ffi.Callback('void', ['String'],
    function(sInfo) {
        console.log(sInfo);
    });

    console.log("Before CallBack")
    console.log("registering the callback");
    SetSt.setStart(callback,buf);
    for (let i=0; i<25600; i++) {
        console.log("data [%d]: %d",i,buf.readDoubleLE(8 * i));
    }
  
    console.log('Done');
    process.on('exit', function() {
    callback
    });
}

for(var k=0 ; k<5 ; k++){
    var sum=0;
    console.time('for');   // 시작
    for(var i=0;i<10000;i++) {
    sum+=i;
    }
        init();
    console.timeEnd('for');  // 끝
  }




/*timer
playAlert = setInterval(function() {
    init();
 }, 2000);
 
/*
while(true){
    init();
    //timer;
}*/

//NIDAQ 설정하는 시간 : 0.2~0.6 sec
//25600개 배열 받아오는 시간 : 0.2~0.4 sec
//default: 0.05~0.1 sec
//설정: 0.05 sec
//CallBack : 0 sec

// -> 0.5sec ~ 1sec

