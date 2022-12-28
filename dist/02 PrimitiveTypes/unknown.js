"use strict";
if (typeof maybe === 'number') {
    const aNumber = maybe;
}
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe;
    // 타입가드로 인해, maybe는 boolean 형태로 추측이 되고 string 형태는 받을 수 없다.
}
if (typeof maybe === "string") {
    const aString = maybe;
    // 타입가드로 인해, maybe는 string 형태로 추측이 되고 string 형태는 받을 수 있다.
}
