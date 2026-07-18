class CreateUser {
  constructor(
    public name: string,
    public role: string,
    public age: number,
  ) {}
}

let userOne = new CreateUser("Rubayat Rifat", "System Designer", 26);
let userTwo = new CreateUser("Manush", "Artist", 36);

console.log(userOne, userTwo);
