interface Iperson2 {
    name: string;
    age: number;
}

interface IKorean extends Iperson2 {
    city: string;
}

const k: IKorean = {
    name: "홍길동",
    age: 25,
    city: "Seoul",
};