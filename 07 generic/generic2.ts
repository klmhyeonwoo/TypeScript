function helloBasic<T>(message: T) {
    return message;
}

// (1) 사용법
helloBasic<string>("Mark");

// (2) 사용법, 자동으로 추론이 되어진다.
helloBasic("Mark");
helloBasic(36);


function helloBasic2<T, U>(message: T, age: U) {
    return [message, age];
}

helloBasic2<string, number>("Mark", 20);
helloBasic2("Mark", 20);
helloBasic2(30, 20);
