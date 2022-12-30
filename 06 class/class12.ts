abstract class AbstractPerson {
    protected _name: string = "Mark";

    abstract setName(name: string): void;
    // abstract 메소드는 구현을 하지 않는다.
    // abstract를 사용하게 되면 클래스 앞에도 명시를 해줘야한다.
};

class Class12 extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }

    Print() {
        console.log(`안녕하세요 저는 ${this._name} 입니다!`);
    }
}

const p12 = new Class12();
p12.setName("Mark");
p12.Print();