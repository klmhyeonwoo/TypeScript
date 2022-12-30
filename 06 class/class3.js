"use strict";
class People2 {
    // !를 넣어주면, age에 number 타입으로 값이 할당되지 않아도 에러를 일으키지 않겠다는 명시적인 표현이다.
    // !를 붙일 때는, 아래의 PeopleTest2.age = 30과 같이 정의를 해줘야하는데 이런 부분이 잘 정의되어질 수 있도록 개발자가 유의해줘야한다.
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const PeopleTest2 = new People2(22);
PeopleTest2.age = 30;
const PeopleTest2_1 = new People2();
console.log(PeopleTest2);
