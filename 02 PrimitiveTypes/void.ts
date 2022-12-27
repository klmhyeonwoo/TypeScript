function returnVoid(message: string): void {
    console.log(message);

    return;
}

const r = returnVoid('리턴이 없다');
// void 타입은 리턴 값을 가지고 무엇을 하지 않겠다라는 것을 명시해주는 타입이다.
// 유일하게 return에 들어갈 수 있는 값은 undefined이다.