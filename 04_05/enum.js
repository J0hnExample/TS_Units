export function Demo() {
    let MyEnumErrorCode;
    (function (MyEnumErrorCode) {
        MyEnumErrorCode[MyEnumErrorCode["ERR_1"] = 0] = "ERR_1";
        MyEnumErrorCode[MyEnumErrorCode["ERR_199"] = 1] = "ERR_199";
        MyEnumErrorCode[MyEnumErrorCode["ERR_9000"] = 2] = "ERR_9000";
    })(MyEnumErrorCode || (MyEnumErrorCode = {}));
    const error = "ERR_9000";
    // Enum zugriff mit object schreibweise
    const error2 = MyEnumErrorCode.ERR_199;
    //Enum ausgeben
    console.log(MyEnumErrorCode);
}
Demo();
/* enum MyEnumErrorCode {
  ERR_1 = 5,
  ERR_199,
  ERR_9000,
}

type MyErrorCode = "ERR_1" | "ERR_199" | "ERR_9000";
const error: MyErrorCode = "ERR_9000";

const error2: MyEnumErrorCode = MyEnumErrorCode.ERR_199;
// MyEnumErrorCode.ERR_1 = 3;
console.log(MyEnumErrorCode); */ 
