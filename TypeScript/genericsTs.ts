function wrapInArray<T>(item: T) :T []{
    return [item]
}

wrapInArray("masala")
wrapInArray(45)
wrapInArray({flavour: "ginger"})

// 

function pair<A, B> (a:A, b:B) : [A,B]{
    return [a, b]
}

pair("masala" , "ginger")

//  Generic Interfaces

interface Box<T>{
    content : T;
}

const numBox : Box <number> = {content : 10}
const letterBox : Box <string> = {content : "Chai"}

// Generics are widely used in API's

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status : 100,
    data : {flavour : "masala"}
}