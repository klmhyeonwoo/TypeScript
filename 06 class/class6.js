"use strict";
class People6 {
    constructor(nameN, ageN) {
        this.nameN = nameN;
        this.ageN = ageN;
    }
    get name() {
        // console.log("get");
        return this.nameN + " klm";
    }
    set name(n) {
        console.log("set");
        this.nameN = n;
    }
}
const PeopleTest6 = new People6("Mark", 22);
console.log(PeopleTest6.name); // get을 하는 함수 => getter
// 함수로 접근하면 private한 것에 접근할 수 있다.
PeopleTest6.name = "Test"; // set을 하는 함수 => setter
console.log(PeopleTest6.name);
