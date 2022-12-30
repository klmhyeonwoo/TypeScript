class Students {
    [index: string]: string;
    // 아래의 같은 식으로 더 정확하게 표기할 수도 있다.
    // [index: string]: "male" | "female";
    // {mark : female} 이면 이름과 성별은 동적으로 작용하기 때문에, index Signatures를 사용해줘야한다.
}

const class1 = new Students();
class1.Mark = 'male';
class1.Cherry = 'female';

console.log(class1);

const class2 = new Students();
class2.Chole = 'female';
class2.Ales = 'male';
class2.Anna = 'female';

console.log(class2);