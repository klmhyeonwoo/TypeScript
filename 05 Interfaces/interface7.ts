interface HelloPerson {
    (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
    console.log(`안녕하세요! ${name} 입니다!`);
}

helloPerson("mark", 39);
// 39는 helloPerson에서 인자로 받지 않았다, 왜?
// helloPerson에서 선언한 인자보다, interface에서 선언한 인자를 보는 것이 중요하다. interface에 초점을 맞춘다.