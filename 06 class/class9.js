"use strict";
class Person9 {
    static hello() {
        // static을 붙이면 오브젝트에서는 이 함수를 메소드로 생각을 하지 않는다.
        // p9.hello()는 사용이 안되고, Person9.hello()는 사용이 되는 꼴이 된다.
        console.log(`안녕하세요 제가 좋아하는 음식은 ${Person9.FOOD}`);
    }
    change() {
        Person9.FOOD = "bibimbab";
    }
}
Person9.CITY = "Seoul";
Person9.FOOD = "chocolate";
const p9 = new Person9();
// p9.hello();
Person9.hello();
Person9.CITY;
// 이것을 쓰는 특징?
// 굳이 오브젝트로 쓰지 않아도 해당 클래스의 데이터를 공유할 수 있다.
// 전역변수처럼 공통적으로 사용하고자 하는 데이터를 이렇게 사용할 수 있다.
p9.change();
Person9.hello();
