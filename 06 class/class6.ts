class People6 {
    public constructor(private nameN: string, public ageN: number) { }

    get name() {
        // console.log("get");
        return this.nameN + " klm";
    }

    set name(n: string) {
        console.log("set");
        this.nameN = n;
    }
}

const PeopleTest6 = new People6("Mark", 22);
console.log(PeopleTest6.name); // get을 하는 함수 => getter
// 함수로 접근하면 private한 것에 접근할 수 있다.
PeopleTest6.name = "Test" // set을 하는 함수 => setter
console.log(PeopleTest6.name);