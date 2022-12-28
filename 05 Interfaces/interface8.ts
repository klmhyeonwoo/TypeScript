interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Mark",
    age: 30,
    gender: "male",
}

p81.gender = "female";
// readonly property는 오로지 읽기 전용, 오류 발생

interface Person9 {
    name: string;
    age?: number;
    gender: string;
}

const p82: Person9 = {
    name: "Mark",
    age: 30,
    gender: "male",
}

p82.gender = "female";
