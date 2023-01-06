var ffi = require('ffi-napi')

var libfactorial = ffi.Library('./TestFile/Print_factorial', {
  'factorial': [ 'uint64', [ 'int' ] ]
})

  let result = libfactorial.factorial(6);
  console.log(result) 

