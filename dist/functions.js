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
//# sourceMappingURL=functions.js.map