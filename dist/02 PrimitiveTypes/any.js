"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
any1.toString();
// 어떤 타입이어도 상관없으며, 무엇이든 할 수 있다의 의미를 가진 것이 Any 타입이다.
// 위의 함수와 같이 콘솔만 찍는 경우에는 any 타입이 적절하지만, 최대한 사용을 하지 않는 것이 바람직하다.
// 리턴 값이 없기 때문에 타입 스크립트도 any로 인식
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;
// any를 사용하면 이렇게 객체를 통해 계속 전파할 수 있으며, 이는 타입 안정성을 위배한다.
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
c.indexOf("0");
function leakingAny2(obj) {
    const a = obj.num;
    // 타입 지정시켜 a에서 막을 수 있지만, 애초에 obj에서 타입을 타입 가드를 해주는 것이 바람직하다.
    const b = a + 1;
    return b;
}
const f = leakingAny2({ num: 0 });
f.indexOf("0");
