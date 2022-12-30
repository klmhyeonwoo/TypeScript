type HelloFunctionGeneric1 = <T>(message: T) => T;

// type으로 제네릭 함수를 지정해줄 때는, Arrow Function을 이용해야한다.
const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
    return message;
}

interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

// 인터페이스로 제네릭 함수를 지정해줄 때는, Arrow Function을 이용해야한다.
const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
    return message;
}