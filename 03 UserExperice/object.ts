// 오브젝트를 매개변수로 넘길 때는 이렇게 키의 값에 타입을 명시해줘야한다.
function test(obj: { name: string, age: number }): number {
    return obj.age;
}

// 인자에 위와 같이 달면 길어질 수 있기 때문에 아래와 같이 interface와 type으로 명시가 가능하다.

interface person {
    name: string,
    age: number,
}

type person2 = {
    name: string;
    age: number;
}

//  그리고 아래와 같이 손쉽게 선언이 가능하다.
function test2(obj: person): string {
    return obj.name;
}

// person과 person2의 구조는 같기 때문에, structural type system이라고 볼 수 있다.
// 그렇기에 서로 대입이 가능한, 아래와 같은 예제가 가능하다.

let personInterface: person = {} as any;
let personType: person2 = {} as any;

personType = personInterface;
personInterface = personType;

// 타입 스크립트는 nominal type system인 구조가 같아도 이름이 다르면 대입이 안되는 시스템을 따르지 않는다. 