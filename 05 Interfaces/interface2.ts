interface Person3 {
    name: string;
    age?: number;
};

interface Person4 {
    name: string;
    age: number;
};

function hello2(person: Person3): void {
    console.log(`안녕하세요! ${person.name} 입니다!`);
}


hello2({ name: "Mark", age: 39 });
hello2({ name: "hyeonwoo" });

// ?를 붙여주면 있을 수도 있고, 없을 수도 있는 프로퍼티를 제공할 수 있다.