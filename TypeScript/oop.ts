class Chai{
    flavour: string;
    price: number

    constructor (flavour: string, price:number){
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("Ginger", 20)

// Access modifiers

class Chai{
    public flavor: string = "Masala"

    private secretIngredients = "Adrak"

    reveal(){
        return this.secretIngredients 
    }

    protected shopName = "Chai corner "
}

const c = new Chai();


// Inheritance

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName; // here we can access 
    }
}

// We can write private access modifier like this as well

class Wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet()

// readonly

class Cup{
    readonly capacity: number = 250

    constructor(capacity : number){
        this.capacity = capacity;
        // this should only be asssignned one time 
    }
}

// Getters & Setters

class Modernchai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if (value > 5) throw new Error("Too sweet")
            this._sugar = value
    }
}

const c = new Modernchai()
c.sugar = 3;


// Static

class EkChai{
    static shopName = "Chaicode caffe"

    constructor(public flavour : string){}
}
console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai");
    }
}

// Composition

class Heater{
    heat(){}
}

class chaiMaker{
    constructor (private heater: Heater){}

    make(){
        return this.heater.heat
    }
}