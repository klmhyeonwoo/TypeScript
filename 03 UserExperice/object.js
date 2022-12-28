"use strict";
// 오브젝트를 매개변수로 넘길 때는 이렇게 키의 값에 타입을 명시해줘야한다.
function test(obj) {
    return obj.age;
}
//  그리고 아래와 같이 손쉽게 선언이 가능하다.
function test2(obj) {
    return obj.name;
}
// person과 person2의 구조는 같기 때문에, structural type system이라고 볼 수 있다.
// 그렇기에 서로 대입이 가능한, 아래와 같은 예제가 가능하다.
let personInterface = {};
let personType = {};
personType = personInterface;
personInterface = personType;
// 타입 스크립트는 nominal type system인 구조가 같아도 이름이 다르면 대입이 안되는 시스템을 따르지 않는다. 
