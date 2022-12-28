interface Person6 {
    name: string;
    age: number;
    hello(): void;
};

const p41: Person6 = {
    name: "Mark",
    age: 39,
    hello: function (): void {
        console.log(`안녕하세요, ${this.name} 입니다!`);
    }
}

const p42: Person6 = {
    name: "Mark",
    age: 39,
    hello(this: Person6): void {
        console.log(`안녕하세요, ${this.name} 입니다!`);
    }
}

// const p43: Person6 = {
//     name: "Mark",
//     age: 39,
//     hello: (): void => {
//         console.log(`안녕하세요, ${this.name} 입니다!`);
//     }
//     // arrow function은 this를 사용할 수 없다.
// }

p41.hello();
p42.hello();