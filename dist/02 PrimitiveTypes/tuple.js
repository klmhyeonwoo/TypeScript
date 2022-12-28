"use strict";
let x;
x = ["hello", 39];
// 순서와 타입 모두 일치해야한다.
x = [39, "hello"];
// 순서가 다르면 다음과 같이 오류가 뜬다.
x[2] = "world";
// 타입을 부여할 수 없어 오류가 뜬다.
const person = ["Mark", 39];
const [first, twice, third] = person;
// 분해할당, first는 string 타입을 받고, twice는 number 타입을 상속 받는다.
// third는 당연하게 오류가 뜬다.
