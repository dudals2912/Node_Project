function Test(){
    if(!Test.val ){
        Test.val = "hello";
        console.log("초기화 됨");
    }
}
Test();
console.log(Test.val);