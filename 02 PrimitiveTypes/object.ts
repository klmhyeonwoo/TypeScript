// primitive type이 아닌 것을 나타내고 싶을 떄, object를 사용한다.

const person1 = { name: 'Mark', age: 39 };
console.log(typeof person1);

const person2 = Object.create({ name: 'Mark', age: 39 });
// Object.create으로 만들어질때의 인자는 null 또는 object로 구성할 수 있다.
console.log(typeof person2);
