// We can assign more than one type

let subs : string | number = "1M"


// We can assign our own default options
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = "success"


// To avoid any data type

let orders = ["12", "20", "54"];

let currentOrder: string | undefined

for (let order of orders){
    if (order === "28"){
        currentOrder = order
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder)