"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function demoFunc(nm, cb) {
    cb("hlw");
}
demoFunc("Rubayat Rifat", (value) => {
    console.log(value);
});
// Optional and Default Parameters
function greetUser(userName = "user") {
    console.log(`Hello ${userName}`);
}
greetUser();
// Rest Parameters
function restOp(...arr) {
    console.log(arr);
}
restOp(1, 2, 3, 4, 5, 6, 7, 8);
//# sourceMappingURL=functions.js.map