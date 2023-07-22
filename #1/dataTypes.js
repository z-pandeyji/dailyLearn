// STRING, NULL, NUMBER, ARRAY, UNDEFINED, SYMBOLS, OBJECTS, BIGINTNUMBER, BOOLEAN, SYMBOLS

const myAge = 22 ; // Number
const myName = "Shivanshu Pandey"; //String
const iAmEmployed = true; //boolean
const friends = ['a', 22, 'b', true];
const friendsName = {
    'firstName': 'Ayush',
    'secondName': 'Arun',
} // Objects
const salary = undefined;
const BigInt = 4372394380923013095823098409328049430957024375089748957983457892437508974328756489365897435787538947892834758743895748935783478597438957489375897234895729843578947358974589743985798423705089742509827435897204357093842578904327589743589734895783495874358973495807342957403579384579843584589458974398574839758943758475897483957894375897435897438957438957894375980423705982743095872438095748957438957489235789423570985402953095270572;
let bro = null ; //null
//Symbols are unique and immutable
// Symbols are often used as keys for object properties to prevent naming collisions in JavaScript objects.
const sym1 = Symbol();
const sym2 = Symbol('description');

console.log(typeof sym1);  // Output: symbol
console.log(sym1);         // Output: Symbol()
console.log(sym2);         // Output: Symbol(description)
