function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} of chai...`; // The output here is guaranteed to be string type
  }
  return `Chai order: ${kind}`; // The output here is guaranteed to be number type
}

// Here you can see if the msg exists it gives it but if it doesn't then it gives the default one

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

// Default Instances

class Ayra {
  serve() {
    return `Serving Ayra's Chai`;
  }
}
class Amariah {
  serve() {
    return `Serving Amariah's Chai`;
  }
}

function serve(chai: Ayra | Amariah) {
  if (chai instanceof Ayra) {
    return chai.serve();
  }
}



type chaiOrder = {
    type: "string"
    sugar: "number"
}

function isChaiOrder(obj:any): obj is chaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder | string){
    if (isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai ${item}`
}

type MasalaChai = {type: "masala"; spicelevel: number}
type GingerChai = {type: "ginger"; amount: number}
type ElaichiChai = {type: "elaichi"; aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function makeChai(order: Chai) {
    switch (order.type){
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `ginger Chai`;
            break;
        case "elaichi":
            return `elaichi Chai`;
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if ("spicelevel" in order){
        // over here it will give us object masala chai because only that has the property spicelevel
        // so this means if this property exists 
    }
}

function isStringArray(arr: unknown) : arr is string[]{
    // 
}