class Parent {
    constructor(protected _name: string, private _age: number) {

    }

    public print(): void {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다!`);
    }

    protected printName(): void {
        console.log(this._name, this._age);
    }
}

// const P11 = new Parent("Mark", 25);
// P11.print();

class Child extends Parent {
    // 상속을 받았을 때 Child는 Parent의 생성자를 호출해줘야한다.
    // 자식이 부모를 상속받았을 때는 무조건 super을 먼저 호출해줘야한다.
    public _name = 'Mark Jr.';
    public gender = 'male';

    constructor(age: number) {
        super('Mark Jr.', age);
        // 부모의 생성자 호출
        this.printName();
    }
}

const C11 = new Child(5);
C11.print();


