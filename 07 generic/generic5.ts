class Generic5<T, K>{
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Generic5("Mark", 30);
// new Generic5<string>(39);
new Generic5<string, number>("Mark", 50)