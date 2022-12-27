let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// Array<number>의 경우 JSX나 TSX에서 충돌이 날 수도 있기에 1번 예제를 사용하는 것이 바람직하다.

let list3: (string | number)[] = [1, 2, 3, '4'];