// Cojntrol structures
// If statement

let age = 16;
if ( age <= 18 ){
    console.log('you are too young')};

// if...else statement -the age has been declare in age=16
if ( age >= 18 ){
    console.log('You are an adult')
} else {console.log('You are a tenager')};


// if...else if statement
let marks = 80;
if(marks > 80){           // comparison and logical operators -(marks >=90 && marks <=100)
    console.log('Grade A')
} else if(marks >= 60){
    console.log('Grade B')
} else if(marks >= 50 ){
    console.log('Grade C')
} else{console.log('Grade D')};


// switch statement
switch (true){
    case(marks >= 80):
        console.log('Grade: A')
        break
    case(marks >= 60):
        console.log('Grade: B')
        break
    case(marks >= 50):
    console.log('Grade: C')
        break
    default:
        console.log('Grade: D');
}

// loop
//for loop  for(initialize; success; counter){statement()};
let num;
for(num = 9; num >= 1; num--){  //  opposite -(num = 0; num <= 20; num++)
    console.log(num)
};

// while loop         -DYOR

// do...while loop  -DYOR

//Array
let cars = ['Toyota', 'BMW']
console.log(cars)

// push() -to add to the end
cars.push('Cyber truck')
console.log(cars)
//unshift -add to the beginning
cars.unshift('Nissan')
console.log(cars)
//pop -to remove item at the end of an array
cars.pop('Cyber truck')
console.log(cars)
//shift -to remove item at the beginning of an array
cars.shift('Nissan')
console.log(cars)

// forEach -iterates/loops through each item in an array
cars.forEach( function(car){
    console.log(car)
});
// With index -numbering
cars.forEach( function(car, index){
    console.log(index + ':' + car)
})

// String                                      FINF OTHER STRING METHODS
let text = 'Losotho';
console.log(text);
console.log(text.length);  // Length of alphabelt

// position of a character -starting from index 0
let char = text.charAt(0);
console.log(char);

// same work buh diff
const name = "Losotho";
let letter = name.at(5);
console.log(letter);
// specifies the beginning and end
let fruits = 'Apple, Banana, Orange';
let fru = fruits.slice(7,13);
console.log(fru)
// specifies only beginning to the last string -slice method
let frui = fruits.slice(7);
console.log(frui);
// sub-string method
let countries = 'Madagascar, Kenya, Nigeria';
let part = countries.substring(7,13);
console.log(part);

// lowercase and uppercase method
// uppercase
let greetings = 'Hello mi amor';
let respect = greetings.toUpperCase();
console.log(respect);
// lowercase
let regard = greetings.toLowerCase();
console.log(regard);

// Concat method -concatination of words
let txt = 'Hello'+ ' ' +'world!'+ ' ' +'good, morning';
let greet = 'Hello'.concat(' ', 'Mag');
console.log(txt);
console.log(greet);

// Array method

