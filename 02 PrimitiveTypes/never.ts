function error(message: string): never {
    throw new Error(message);
    // never은 리턴하지 않는다 뜻!
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while (true) { }
}

declare const a: string | number;
if (typeof a !== "string") {
    a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// T(타입)를 변수처럼 T가 만약 string이라면에 관련된 조건부
type ObjectIndexable = Indexable<{}>;