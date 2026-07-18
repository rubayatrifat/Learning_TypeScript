"use strict";
// Type Narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function findUser(identity) {
    if (typeof findUser === "string") {
        return `User name is ${identity}`;
    }
    return `User id is ${identity}`;
}
// Finding out with truthiness
function userMsg(msg) {
    if (msg) {
        return `The msg is ${msg}`;
    }
    return "There is no msg";
}
// exhaustive check 
function orderPizza(size) {
    if (size === "small") {
        return `Take ur ${size} pizza!!`;
    }
    else if (size === "medium") {
        return `Take ur ${size} pizza!!`;
    }
    else if (size === "large") {
        return `Take ur ${size} pizza!!`;
    }
    return `Take ur ${size}inch pizza!!`;
}
class User {
    greet() {
        return `Hello User`;
    }
}
class Admin {
    greet() {
        return "Hello Admin";
    }
}
function showGreet(role) {
    if (role instanceof User) {
        role.greet();
    }
}
//# sourceMappingURL=typeNarrowing.js.map