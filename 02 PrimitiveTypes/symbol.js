"use strict";
console.log(Symbol('foo') === Symbol("foo"));
// 왜 다를까?
// 심볼은 고유하고 수정 불가능한 값으로 만들어준다, 그러기에 두 개는 다른 상태이다.
// 주로 접근을 제어하는데 사용을 한다.
const sym = Symbol();
const obj = {
    [sym]: "value",
};
obj[sym];
// Symbol로 key 값을 넣었을 때 value 값을 가져오기 위해서는 그대로 Symbol로만 가져올 수 있다.
// 함수로 사용할 때는 대문자 Symbol, 타입으로 사용할 때는 소문자 symbol 이라는 것을 알고있으면 된다.
