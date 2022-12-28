interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// 인터페이스를 상속받아 Person을 만들 수 있다.
class Person implements IPerson1 {
    // 아래 내용들은 구현체
    name: string;
    age?: number | undefined;

    // 생성자 : 클래스를 대상으로 객체를 생성하는 역할을 하는 친구
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        // age는 optional이라서 오류가 안뜸
    }
    hello(): void {
        // throw new Error("Method not implemented.");
        console.log(`안녕하세요! ${this.name} 입니다!`);
    }
}

const personTest: IPerson1 = new Person("Mark", 25);
personTest.hello();