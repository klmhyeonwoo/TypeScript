class PersonExtends<T extends string | number> {
    // string과 number 타입을 상속받는 느낌보다는, 제네릭 타입이 string과 number만이 가능하다고 이해를 하면 된다.
    // 제네릭타입의 타입 지정이라고 생각을 하면 된다.
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(39);
new PersonExtends(true);