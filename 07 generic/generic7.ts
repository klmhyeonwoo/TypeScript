interface IPerson7 {
    name: string,
    age: number,
}

// type Keys = keyof IPerson7;
// keyof를 개체에 붙이면, 그 결과물이 타입으로 나오는데, 그 타입은 key의 이름으로된 문자열의 union 타입으로 만들어진다.

const P7: IPerson7 = {
    name: "Mark",
    age: 39
}

// function getProp(obj: IPerson7, key: 'name' | 'age'): string | number {
//     return obj[key];
// }

// 리턴 타입은 IPerson7[keyof IPerson7]
// => IPerson7[keyof IPerson7]
// => IPerson7["name"] | IPerson7["age"]
// => string | number
// 이를 해결하기 위해 제네릭 함수를 사용한다.
function getProp(obj: IPerson7, key: keyof IPerson7): IPerson7[keyof IPerson7] {
    return obj[key];
}

// K에 name과 age에 따른 타입으로 제한을 시키고, 이를 key 타입에 담아준다.
// 그리고 return 타입에서 T에 K를 담아주면 유니온타입이 아닌 단일 해당하는 타입으로 제한이 된다.
function getProp2<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(P7, 'age');
getProp2(P7, 'age');


function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

setProp(P7, 'name', "mike");