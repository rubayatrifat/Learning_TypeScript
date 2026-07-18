/// Inter faces

interface User {
  name: string;
  role: string;
  age: number;
}

function userDet(det: User) {
  return `${det.name} is a ${det.role}`;
}

console.log(
  userDet({ name: "Rubayat Rifat", role: "System Desinger", age: 26 }),
);

/// Extending Interfaces

interface Admin extends User {
  admin: boolean;
}

function retAdmin(ifAdmin: Admin) {
    if(ifAdmin.admin) {
        return "It is admin"
    }
}

console.log(
  retAdmin({ name: "Rubayat Rifat", role: "System Desinger", age: 26, admin: true }),
);


/// Type Aliases

type value = string | number | null
let a: value
function abc(para: value) {}
abc("Rubayat Rifat")

