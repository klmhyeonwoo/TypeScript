function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any {
    return message;
}

console.log(hello('Mark').length);
console.log(hello(25).length);

// any 타입으로 받게 되면, 숫자 또한 .length 함수가 적용되는 것을 볼 수 있다.
// 현재 컴파일 타임에서는 오류 검출이 되지 않지만, 런타임에서 오류를 검출할 것이다.
// 들어가는 타입을 변수같은 것으로 활용해서 리턴 타입에 연관을 시켜준다면 된다, 여기서 출발한 것이 제네릭 타입

function helloGeneric<T>(message: T): T {
    return message;
}
// T에 타입이 저장된다.

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39).length);
console.log(helloGeneric(true));