
// 타입을 지정해놓고, 타이핑량을 줄일 수 있다.

// string or number의 별칭 예시
type StringOrNumber = string | number;

let another: StringOrNumber = 0;

// 튜플의 별칭 예시

type tup = [string, number];
let another2: tup = ["myNumber", 7];

// 함수의 별칭 예시

type fuc = (name: string) => void;

const fucTest: fuc = (name) => {
    return;
}

// 타입의 존재가치가 명확하면 인터페이스를 사용하는 편
// 대상을 가리킬 뿐이던가, 그저 별명으로써만 존재를 한다면 type alias를 사용한다.
