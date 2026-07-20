// Generic Functions
function func<T>(a: T) {}
func<string>("hlw");

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

class createUser<T> {
  constructor(
    public name: string,
    public age: number,
    public id: T,
  ) {}
}

const user1 = new createUser<string>("Rubayat Rifat", 26, "rubayatrifat");
console.log(user1);
