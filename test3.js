var ffi = require('ffi-napi')
var ref = require('ref-napi')

var doublePtr = ref.refType('double');

var SetCf = ffi.Library('./Node_Connection/Node_Connection_Dis', { 
    'setConfigure': [ 'int', [] ]
  });

  var SetSt = ffi.Library('./Node_Connection/Node_Connection_Dis', { 
    'setStart': [ 'int', ['pointer', doublePtr] ]
  });

function init(){
  buf = Buffer.alloc(8 * 25600);
  SetCf.setConfigure();
  
  function init_start(){
    var callback = ffi.Callback('void', ['string'],
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
  return init_start;
}
var a = init();
for(l=0;l<3;l++){
    a();
}   

