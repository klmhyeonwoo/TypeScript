class People {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const example = new People("Mark");

console.log(example.name);