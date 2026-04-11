const chaiFlavours : string[] = ["Masla", "ginger"]
const chaiPrice : number[] = [10,20]

const rating : Array<number> = [2,5]


// Array of Objects

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price : 2},
    {name: "Ginger", price : 3}
]

// Read Only Array : where we can define arrays but we can't modify them

const cities : readonly string[] = ["Karachi", "Islamabad"];
cities.push("Hyderabad"); // This action cant be done


// 2 Dimensional Arrays
const table: number[][] = [
    [1,2,3],
    [4,5,3]
]


// Tuples

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20]
chaiTuple = [10, "Ginger"]
// In tuples the exact same type of paramters must be passed as they are defined otherwise they will give an error

let userInfo : [string, number, boolean?]

userInfo = ["Masala", 10] // over here we have the choice if we want to include the optional value or not
userInfo = ["Masala", 10,false]

// Read Only Tuples

const location : readonly [number,number] = [10,2]

// Named Tuples

const chaiItems : [name: string, price: number] = ["Masala", 20]


// Enums

// We restrict the user to choose from the values we have

enum cupSize  {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE

// 

enum chaiType {
    MASALA = "masala"
    GINGER = "ginger"
}

function makeChai(type:chaiType){
    console.log(`Making : ${type}`)
}

makeChai(chaiType.GINGER)

// We can use enums with const keyword

const enum chaiType {
    MASALA = "masala"
    GINGER = "ginger"
}

let t: [string, number] = ["masala", 20]
t.push("extra")
// over here in tuples we can push because this tuple at the end of the day is actually an array and we ca push in array

