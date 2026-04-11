let tea : {
    name : string;
    price : number;
    isHot: boolean
}

tea = {
    name : "Masala",
    price : 20,
    isHot : true
}

// Allias Object

type Tea = {
    name : string;
    price : number;
    ingrediennts : string[]
}

const Adrakchai: Tea = {
    name : "Adrak",
    price : 50,
    ingrediennts : ["ginger", "tea leaves"]

}

// 

type Cup = {size : string}
let smallCup: Cup = {size: "200ml"};

let bigCup = {size: "500ml", material: "steel"}
// over here even though we added extra property but typescript does not declare it as error

smallCup = bigCup

// 

type item = {name: string, quantity : number}
type address = {street: string, pin: number}

type order = {
    id : string;
    items : item[],
    address : address
}

// 

type Chai = {
    name: string;
    price: number;
    isHot : boolean
}

const updateChai = (updates : Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
// this partial makes the types optional


// we can pass empty objects
updateChai({})

// 

type chaiOrder = {
    name?: string;
    quantity ?: number
}

const placeOrder = (order: Required<chaiOrder>) =>{
    console.log(order)
}

placeOrder({
    name: string;
    price : number

    // this shows us error because in defining the type we have declared this as optional and at the funnction we defined it to e required so we would have to make the optional as not optional
})

type Chai = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients: string[]
}

type basicChaiInfo = Pick<Chai, "name" | "price">;
// This shows we can pick a number of properties according to what we want

const chaiInfo: basicChaiInfo = {
    name : "Masala",
    price : 20
}


// Omitting a type

type NewChai = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients: string
}


type publicChai = Omit<NewChai, "ingredients">;
// when we will make a type then we wont have to define the ommitted property

