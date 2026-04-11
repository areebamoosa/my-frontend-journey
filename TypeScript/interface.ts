interface Chai{
    flavour: string;
    price: number;
    milk?: number;
}

const masala: Chai = {
    flavour: "masala",
    price: 23
};

// 

interface DiscountCalculator{
    (price: number): number
}
const apply50 : DiscountCalculator = (p) => p*0.5

// 

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

// 

interface chaiRatings{
    [flavour : string] : number
}

const ratings : chaiRatings = {
    masala = 10,
    ginger = 5
}

// Merging of interfaces

interface user{
    name : string
}
interface user{
    age : number
}

const u: user{
    name = "Areeba",
    age = 20
}

// Interfaces can be extended

interface A{a: string}
interface B{b: string}

interface C extends A, B {}

