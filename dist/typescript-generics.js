"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Functions
function func(a) { }
func("hlw");
/// Interface Generics
// interface User<T> {
//     name: string,
//     age: number,
//     id: T
// }
// function createUser(det: User<number>) {
//     console.log(det)
// }
// createUser({name: "Rubayat Rifat", age: 22, id: 34532})
/// Generics in classes
class createUser {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
const user1 = new createUser("Rubayat Rifat", 26, "rubayatrifat");
console.log(user1);
//# sourceMappingURL=typescript-generics.js.map