var ffi = require('ffi-napi')

var Morning = ffi.Library('./TestFile/Print_Hello_World', {
  'HelloString': [ "char" , [ "char" ] ]
})

Morning.HelloString("")
