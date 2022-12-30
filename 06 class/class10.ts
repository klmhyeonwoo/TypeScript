class ClassName {
    private static instance: ClassName | null = null;
    public static getInstance(): ClassName {
        // ClassName으로부터 만든 object가 있으면 그것을 리턴한다.
        // 없으면 만들어서 리턴하는 로직을 이 함수에서 만들 것이다.
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }

        return ClassName.instance;
    }
    private constructor() { }
}

const class10 = ClassName.getInstance;
// class10의 함수에서는 오브젝트가 없으니까 만들어서 리턴을 할 것이고,
const class11 = ClassName.getInstance;
// class11에서는 오브젝트가 있으니까 기존 오브젝트를 리턴할 것이다.