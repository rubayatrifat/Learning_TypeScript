"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUser {
    name;
    role;
    age;
    constructor(name, role, age) {
        this.name = name;
        this.role = role;
        this.age = age;
    }
}
let userOne = new CreateUser("Rubayat Rifat", "System Designer", 26);
let userTwo = new CreateUser("Manush", "Artist", 36);
console.log(userOne, userTwo);
//# sourceMappingURL=classes-objects.js.map