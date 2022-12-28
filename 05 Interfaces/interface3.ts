interface Person5 {
    name: string;
    age?: number;
    [index: string]: any;
    // 이렇게 넣어주면 오브젝트를 새롭게 받을 수 있다.
};

function hello3(person: Person5): void {
    console.log(`안녕하세요, ${person.name} 입니다!`);
}

const p5: Person5 = {
    name: "Mark",
    age: 39,
};

const p32: Person5 = {
    name: "hyeonwoo",
    age: 25,
    hobby: "soccer",
}

const p33: Person5 = {
    name: "minwoo",
    age: 24,
    skill: "java",
}

