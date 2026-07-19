"use strict";
/// TypeScript Classes
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUser {
    name;
    role;
    age;
    id;
    constructor(name, role, age, id) {
        this.name = name;
        this.role = role;
        this.age = age;
        this.id = id;
    }
    changeID() {
        // this.id = "4asdf45"     ID is not changeable
    }
    showId() {
        return `${this.name}'s ID is ${this.id}`; // Id is accessable to a method
    }
}
let userOne = new CreateUser("Rubayat Rifat", "System Designer", 26, "7D4U5");
let userTwo = new CreateUser("Manush", "Artist", 36, "9LK2L");
// userOne.id = "something" --- ID is not accesable
console.log(userOne, userTwo);
console.log(userOne.showId(), userTwo.showId());
// Extends
class CreateAdmin extends CreateUser {
    deletePer;
    constructor(name, role, age, id, deletePer) {
        super(name, role, age, id);
        this.deletePer = deletePer;
        this.deletePer = true;
    }
}
let admin = new CreateAdmin("Admin Rifat", "System Designer", 26, "7D4U5");
console.log(admin);
// Protected
//# sourceMappingURL=classes-objects.js.map