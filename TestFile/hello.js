const ffi = require("ffi-napi");
const ref = require("ref-napi");


// 2. DLL을 불러오고 DLL에서 사용할 함수 정의
// hello world 반환
const libadd = ffi.Library("./TestFile/hello", {
  hello_w: ["int*", []],
});

// // 3. DLL의 함수를 호출하고 결과 출력
// hello world 반환
let result = libadd.hello_w();

// result.type = ref.types.char;
// console.log(ref.refType(result));
// console.log(result);
console.log([...result]);

// const tmp = Buffer.from(result);
// console.log([...tmp]);
// console.log(tmp.hexAddress());
// console.log([...result]);
// console.log("%s", result);
