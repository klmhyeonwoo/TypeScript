function hello1(person: { name: string, age: number }): void {
    console.log(`안녕하세요! ${person.name} 입니다!`);
}

const p1: { name: string, age: number } = {
    name: "Mark",
    age: 39
};

hello1(p1);

// { name: string, age: number } 의 반복?

interface Person1 {
    name: string, age: number
};

const p2: Person1 = {
    name: "hyeonwoo",
    age: 25,
}



