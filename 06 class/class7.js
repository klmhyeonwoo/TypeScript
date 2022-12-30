"use strict";
class People7 {
    constructor(nameN, ageN, country) {
        this.nameN = nameN;
        this.ageN = ageN;
        this.name = 'Mark';
        // constructor 안에서만 readonly 키워드가 달린 변수를 변경 및 초기화해줄 수 있다.
        this.country = country;
    }
}
const PeopleTest7 = new People7("Mark", 22);
console.log(PeopleTest7.name);
PeopleTest7.name = "Test"; // readonly로 지정된 변수이기 때문에 변수에 새로운 값 지정이 불가하다, 못 바꾸게 하고 싶을 때는 readonly를 사용하면 된다.
console.log(PeopleTest7.name);
