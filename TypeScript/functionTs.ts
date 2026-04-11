function makeChai(type : string, cups: number){
    console.log(`Making ${cups} of ${type} chai`)
}

makeChai("Masala", 2);
// when we call the function typescript suggests us what value types should be passed in the parameter

// Return types

function getChaiPrice() : number{
    return 25;
}

function makeOrder(order: string){
    if ( !order ) return null
    return order;
}

function logChai() : void {
    console.log(`Chai is ready`);
}

function orderChai (type ?: string){
    // optional parameter
}
function orderChhai (type : string = "Masala"){
    // deafult parameter
}

// Complex function definition

function createChai(order: {
    type: string;
    sugar: number;
    size : "small" | "large"
}) : number{
    return 5
}


