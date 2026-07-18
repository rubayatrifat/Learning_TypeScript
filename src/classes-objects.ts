/// TypeScript Classes

class CreateUser {
  constructor(
    public name: string,
    public role: string,
    public age: number,
    private id: string,
  ) {}

  showId() {
    return `${this.name}'s ID is ${this.id}`        // Id is accessable to a method
  }

}

let userOne = new CreateUser("Rubayat Rifat", "System Designer", 26, "7D4U5");
let userTwo = new CreateUser("Manush", "Artist", 36, "9LK2L");

// userOne.id = "something" --- ID is not accesable

console.log(userOne, userTwo);
console.log(userOne.showId(), userTwo.showId())

// Extends
class CreateAdmin extends CreateUser {
    constructor (name: string, role: string, age: number, id: string, public deletePer?: boolean) {
        super(name, role, age, id)
        this.deletePer = true
    }
}

let admin = new CreateAdmin("Admin Rifat", "System Designer", 26, "7D4U5");
console.log(admin)