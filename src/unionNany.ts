 let subs: number | string = "1m"

 let apiRequestStat: "pending" | "success" | "err" = "pending"

 apiRequestStat = "err"  /// I can use only that 3 values


 // Avoiding any

 const orders = ["20", "21", "34", "62"]
 let currentOrder: string | undefined

 for (let order of orders) {
    if(order === "21") {
        currentOrder = order
        break
    }
 }

 console.log(currentOrder)

