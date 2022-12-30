"use strict";
class People5 {
    // name: string;
    // age: number;
    // 인자에 public을 붙여주면 위에 변수를 선언한 것과 동일한 효과를 얻을 수 있다.
    // public name => this.name = name과 같은 꼴
    // public age => this.age = age와 같은 꼴
    // 보통은 이 방식을 선호한다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const PeopleTest5 = new People5("Mark", 22);
console.log(PeopleTest5);
