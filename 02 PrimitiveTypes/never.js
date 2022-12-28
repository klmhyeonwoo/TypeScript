"use strict";
function error(message) {
    throw new Error(message);
    // never은 리턴하지 않는다 뜻!
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== "string") {
    a;
}
