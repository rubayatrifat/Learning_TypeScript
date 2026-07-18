"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1m";
let apiRequestStat = "pending";
apiRequestStat = "err"; /// I can use only that 3 values
// Avoiding any
const orders = ["20", "21", "34", "62"];
let currentOrder;
for (let order of orders) {
    if (order === "21") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionNany.js.map