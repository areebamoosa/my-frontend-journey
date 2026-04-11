function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
// over here you can see both the functions have same set of types so we can avoid this and write this in readable and more cleaner way

type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function chai(order: chaiOrder) {
  console.log(order);
}
function serve(order: chaiOrder) {
  console.log(order);
}


// 

type TeaRecipe = {
    water : number;
    milk : number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}


type CupSize = "small" | "medium"
// These types are called literal types

class Chai implements CupSize{
// this will not be implemented because we can't implement fixed values so we would have to do this with interface
}


interface CupSizee {
    size :  "small" | "medium";
}

class Chaai implements CupSizee{
    size: "small" | "medium" = "medium";
}

interface response {
    ok : "true" | "false";
}

class myRes implements response{
    ok: "true" | "false" = "false";
}


// Example of Union

type TeaType = "Ginger" | "lemon" | "masala";

function orderChai (t : TeaType){
    console.log(t);
}

// Example of Intersection

type BaseChai = {teaLeaves: number};
type ExtraChai = {masala: number};

type MasalaChai = BaseChai & ExtraChai

const cup: MasalaChai{
    teaLeaves = 100,
    masala = 20
}


// 

type config = {
    readonly appName: string,
    version: number
}

const cfg: config {
    appName = "A.M",
    version = 1
}

cfg.appName = "Areeba" // over here this gives us errors because we cann't reassign a readonly value, but it is must that we should assign it one time

