//NIDAQ 설정, 시작 구분 -> DLL 일회성
var ffi = require('ffi-napi')
var ref = require('ref-napi')

var doublePtr = ref.refType('double');

var SetConfigure = ffi.Library('./Node_Connection/Node_Connection_Dis', { 
  'setConfigure': [ 'int', [] ]
});

var SetStart = ffi.Library('./Node_Connection/Node_Connection_Dis', { 
  'setStart': [ 'int', [] ]
});

var GetData = ffi.Library('./Node_Connection/Node_Connection_Dis', { 
  'Callback_getData': [ 'int', ['pointer'] ]
});

var buf_Con = ffi.Library('./Node_Connection/Node_Connection_Dis', { 
  'Buf_Alloc': [ 'int', [ doublePtr ]]
});


//버퍼 공간 할당
var buf = Buffer.alloc(8 * 25600);
console.log("Before CallBack")

//데이터를 받아오기
function init(){
  //Node-> C 미리 버퍼 공간 전달
  buf_Con.Buf_Alloc(buf);

  //설정 등록
  SetConfigure.setConfigure(); 

  //시작
  SetStart.setStart();

}

//콜백 함수 호출과 데이터 수집
function CB_Data(){
    var callback = ffi.Callback('void', ['string'],
    function(sInfo) {
      console.log(sInfo);
    });

    
  //CallBack을 등록해 C -> Node로 데이터가 받아와졌다고 알림
  console.log("registering the callback");
  GetData.Callback_getData(callback);
  for (let i=0; i<25600; i++) {
    console.log("data [%d]: %d",i,buf.readDoubleLE(8 * i));
  }

  console.log('Done');
  process.on('exit', function() {
  callback
  });
}




var sum=0;
console.time('for');   // 시작
for(var i=0;i<10000;i++) { //시간(msec)
  sum+=i;
}
//설정
init();

//실행
for(var k=0 ; k<4 ; k++){
  CB_Data();
}

console.timeEnd('for');  // 끝





/*playAlert = setInterval(function() {
  init();
  CB_Start();
}, 2000);
*/

/*
for(var k=0;k<3;k++){
  var settingstart = init();
  settingstart();
}
*/

/*
for(var l=0;l<3;l++){
  SetCf.setConfigure();
}*/


