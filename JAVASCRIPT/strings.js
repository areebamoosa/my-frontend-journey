// STRINGS in JS
// In JavaScript, strings are sequences of characters enclosed in either single or double quotes
let str = "Areeba";
console.log(str[1]);

// 

// While you can freely switch between single and double quotes
// it's essential to be consistent in your usage throughout your code to maintain readability and avoid confusion:

// Consistent use of single quotes
const message1 = 'This is a message.';
const name = 'John';

// Consistent use of double quotes
const message2 = "This is another message.";
// Whether you choose single or double quotes, the important thing is to be consistent in your usage to ensure clean and readable code.

// Escape Characters in Strings : \n => next line, \t => tab space

console.log("Areeba \nMoosa");
console.log("Areeba\tMoosa");

let x = "Areeba\tMoosa";
console.log(x.length); 
// /t is treated as a single character.

let y = "Areeba \nMoosa";
console.log(y.length); 
// space is also treated as a single character. so space + \n = 2 characters

// Escaping Quotes

const stringWithDoubleQuotes = "She said, \"Hi!\"";
console.log(stringWithDoubleQuotes);

// The \" tells JavaScript:
// This " is part of the text, not the end of the string.


// Template Literals

// Template literals provide a more powerful and flexible way to create strings in JavaScript. They offer improved syntax for embedding variables and expressions within strings, making the code more concise and readable.

let obj = {
    item : "pen",
    price : 10,
};

// In normal cases we would write our code like this :
console.log("The cost of ", obj.item, "is" , obj.price, "rupees"); // here the num is highlighted because its a number.

// But this is too complex, so we do this same but in easier way through template literals.

console.log(`The cost of ${obj.item} is ${obj.price} rupees.`) // here the num is not highlighted because its a string here.

// We can also do this
let specialStr = `This is a template literal ${1 + 2 + 3}`
console.log(specialStr);

// Multiline Strings
// Template literals also support multiline strings, making it more convenient to represent multiline text without resorting to concatenation or special characters:

const multilineString = `
  This is a multiline
  string using template literals.
`;

console.log(multilineString);

// STRING METHODS

// Immutability
// Immutability in JavaScript strings means that once a string is created, its content cannot be changed. Operations like concatenation or changing case create new strings, leaving the original string unmodified. This concept ensures predictability, simplifies debugging, and aligns with functional programming principles.

// Upper Case

xyz = "Areeba";

console.log(xyz.toUpperCase());

ary = "Areeba";
ary.toUpperCase()
console.log(ary); 
// here the original string is printed because these functions do not change the org string. They are immutable

// For change in same string , we do this

ary = "Areeba";
ary = ary.toUpperCase()
console.log(ary); 

// Trim : 
// The trim() method removes whitespaces from both ends of a string and returns the result: ( only starting and end ones, not middle)

let string = "   A.M      Restaurant  ";
console.log(string.trim());

trimStart()
// The trimStart() method (also known as trimLeft()) removes whitespaces from the beginning (start) of a string:

trimEnd()
// The trimEnd() method (also known as trimRight()) removes whitespaces from the end of a string:

// These methods do not modify the original string. Instead, they return a new string with the whitespaces removed. This is consistent with the immutability concept in JavaScript strings.

// String Searching

// indexOf() and lastIndexOf()
// The indexOf() method is used to find the first occurrence of a substring within a string. If the substring is not found, it returns -1:

const sentence = "JavaScript is powerful and versatile.";
const index = sentence.indexOf("is"); 
// 11

// The lastIndexOf() method works similarly but starts the search from the end of the string, allowing for reverse searching.

// Slice : str.slice(start,end)

string.slice(startIndex, endIndex);
// startIndex: The index at which the extraction begins.
// endIndex: The index before which the extraction ends (the character at this index is not included).

// Example with Positive and Negative Indices:
// let str = "Hello, World!";
// let sliced1 = str.slice(7);      // Extracts "World!"
// let sliced2 = str.slice(-12, -1); // Extracts "ello, World"
// In the first example, str.slice(7) extracts the substring starting from index 7 to the end. In the second example, str.slice(-12, -1) extracts the substring starting from 12 positions from the end to 1 position from the end.

// 

let str = "012345678910";
console.log(str.slice(2,5));
// ending value is not included (non-inclusive).

let c = "Hello";
console.log(c.slice(1));
// this will start printing from 1 till end values.

// Concat ( Joining one str with another)

let str1 = "Hello";
let str2 = "World";

// console.log(str1.concat(str2));

// we can also add strings in JS by + sign.

let res = str1 + str2 ;
// console.log(res);

// Addition of multiple Strings.
let resy = "I am writing my first line of code in JS : " + str1 + str2 ;
console.log(rat);

let rat = "hello" + 123;
console.log(rat);
// here numbers can also be added with strings, since js converts numbers into strings first and then adds.

// Splitting Strings with split()
// When a string needs to be divided into an array of substrings based on a specified separator, you can use the split() method:

const sentence = "Ja/vaScript is a powerful language.";
// const words = sentence.split(" "); 
// ["JavaScript", "is", "a", "powerful", "language."]
// This is particularly useful when dealing with space-separated words or CSV (Comma-Separated Values) data

// Replace

let char = "Meerub";
console.log(char.replace("r", "d"));

// ReplaceAll
let str4 = "Hellololo";
console.log(str4.replaceAll("lo", "d"));

// Char At

let h = "IloveJS";
console.log(h.charAt(2));

// Printing value at an index
let a = "Areeba"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

// To find out the length of string

console.log(a.length)

let my_name = "Areeba"
let friend = "Sara"

console.log("Hi, My name is " + my_name + "& my friend's name is " + friend)

// To make our code easier to write we use this template literals

console.log(`My name is ${my_name} and my friend's name is ${friend}`)
// To insert a variable directly inside a template literal is called string interpolation.

let r = "areeba"
let s = "sara"

console.log(r.toUpperCase())
console.log(r.toLowerCase())

console.log(r.slice(1,4))
console.log(r.slice(1))

console.log(r.replace("ar", "64"))
// if we have twop same ar in the value then the first currency will be replaced. areebaar then it will be 64eebaar

console.log(r.concat(s))
console.log(r.concat(s, "Sara"))


// We can access the char at any index by following this syntax 
let z = "mubeen"
z[3]

// More funnctions

z.charAt(1)
z.indexOf(n)
z.startsWith("Mu")
z.endsWith("een")