class People3 {
    public name: string = "Mark";
    public age!: number;
    // !를 넣어주면, age에 number 타입으로 값이 할당되지 않아도 에러를 일으키지 않겠다는 명시적인 표현이다.
    // !를 붙일 때는, 아래의 PeopleTest2.age = 30과 같이 정의를 해줘야하는데 이런 부분이 잘 정의되어질 수 있도록 개발자가 유의해줘야한다.

    public constructor(age?: number) {
        if (age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }

    // constructor을 여러개 만드는 것을 오버로딩이라고 한다.
    // 타입스크립트에서도 지원을 하지만, 추후 배울예정이다.

    // 25번줄의 클래스 호출을 사용하기 위한 코드
    // constructor() {
    // }
}

const PeopleTest3 = new People2(22);
PeopleTest2.age = 30;

const PeopleTest3_1 = new People2();

console.log(PeopleTest2);