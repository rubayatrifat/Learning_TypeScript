"use strict";
/// Inter faces
Object.defineProperty(exports, "__esModule", { value: true });
function userDet(det) {
    return `${det.name} is a ${det.role}`;
}
console.log(userDet({ name: "Rubayat Rifat", role: "System Desinger", age: 26 }));
function retAdmin(ifAdmin) {
    if (ifAdmin.admin) {
        return "It is admin";
    }
}
console.log(retAdmin({ name: "Rubayat Rifat", role: "System Desinger", age: 26, admin: true }));
let a;
function abc(para) { }
abc("Rubayat Rifat");
//# sourceMappingURL=interfaces-typeAliases.js.map