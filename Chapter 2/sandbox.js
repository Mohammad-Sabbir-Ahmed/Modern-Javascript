
//=======================================================//
// // Lesson 06

// alert('hello, world');
// console.log(1);
// console.log(2);


//=======================================================//
// Lesson 07

// variable

// let age = 25; // 'let' is used to declare a variable 
// let year = 2019;

// console.log(age, year);

// let myAge = 50; //camelcase
// age = 30;
// console.log(age);

//  // 'const' is used to declare a constant value
// const points = 100;

// console.log(points);
// // points = 50;
// console.log(points);

// // // older way to creating a variable
// // var score = 75; 
// // console.log(score);


//=======================================================//
// Lesson 08

// Number 1, 2, 3, 45.6, 3.14
// String 'hello, world', "mario@thenetninja.com"
// Boolean true/false
// Null ==> Explicitly set a variable with no value
// Undefined => For variables that not yet been defined
// Object Complex data structures - Arrays, Dates, Literals
// Symbol ==> Used with Object

// Javascript is a loosly typed language

//=======================================================//
// Lesson 09
// Strings

// console.log('hello, world');

// let email = 'mario@thenetnija.co.uk';
// console.log(email);

// // String concateation

// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// // Extract songle character from a string

// console.log(fullName[0]);
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);


// // string method
// console.log(fullName.toUpperCase());
// console.log(fullName.toLocaleLowerCase())

// let result = fullName.toLowerCase();

// console.log(result);

// let index = email.indexOf('@');
// console.log(index);
// index = email.indexOf('e');
// console.log(index);
//=======================================================//
// Lesson 10
//common string methods


// let email = 'mario@thenetninja.co.uk';
// let result = email.lastIndexOf('n');

// console.log(result);

// result = email.slice(0, 10);

// console.log(result);

// result = email.substr(4, 10);
// console.log(result);

// result = email.replace('m', 'w'); // replace the first charcter that is found
// console.log(result);

// result = email.replace('n', 'w');
// console.log(result);


// result = email.replace('e', 'w');
// console.log(result);



//=======================================================//
// Lesson 011
// Numbers.mp4

// let radius = 10;
// const pi = 3.14;


// console.log(radius);
// console.log(pi);

// // math operators: +, -, *, /, **, %

// console.log(10/2);

// let result= radius % 3;
// result = pi * radius**2;
// console.log(result);


// // order of operations: BIDMAS

// result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;
// likes = likes +1;
// likes++;
// console.log(likes);
// likes--;
// console.log(likes);
// likes +=15;
// console.log(likes);


// console.log(++likes);


// // NaN - Not a Number

// result = 5 * "hello";
// console.log(result);
// console.log(5*'hi');

// result = 'the blog has ' + likes + ' likes';
// console.log(result);




//=======================================================//

// Lesson 012
// Template Strings.mp4


// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;
// let result = '';
// // concatenation way

// result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// // template string way / template literal

// result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);


// // creating html templates

// let html = `
//     <h2>${title}</h2>
//     <p>By ${author} </p>
//     <span>This  blog has ${likes} likes</span>
// `;
// console.log(html);



//=======================================================//
// Lesson 013
// Arrays.mp4


// let ninjas = ['shaun', 'ryu', 'chun-li'];
// console.log(ninjas);
// console.log(ninjas[1]);
// ninjas[1] = 'ken';

// console.log(ninjas);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random)

// // properties and methods

// console.log(ninjas.length);
// let result = ninjas.join(',');
// console.log(result);
// result = ninjas.join('#');
// console.log(result);

// result = ninjas.indexOf('chun-li');
// console.log(result);



// result = ninjas.concat(['ken', 'crystal']);
// console.log(result);


// result = ninjas.concat(ages);
// console.log(result);


// result = ninjas.push('ken'); // also returns lenth
// console.log(ninjas);
// console.log(result);

// ninjas.pop();
// console.log(ninjas);


//=======================================================//

// Lesson 014
// Null & Undefined.mp4


// let age;
// console.log(age, age+3,`the age is ${age}`);

// age = null;
// console.log(age, age+3,`the age is ${age}`);

//=======================================================//

// Lesson 015
// Booleans & Comparisons.mp4


// console.log(true, false, 'true', 'false');

// let email = 'luigi@thenetnija.co.uk';
// let names = ['mario', 'luigi', 'toad'];
// let result = email.includes('@');
// console.log(result);

// result = email.includes('#');
// console.log(result);


// result = names.includes('luigi');
// console.log(result);

// result = names.includes('bowser');
// console.log(result);


// let age = 25;

// console.log(age == 25);
// console.log(age == 35);
// console.log(age != 55);


//  // '>' = Right Chevron


//  let name = 'shaun';
//  console.log(name == 'shaun');
 
//  console.log(name == 'Shaun');



//=======================================================//

// Lesson 016
// Loose vs Strict Comparison.mp4

// let age = 25;

// console.log(age == '25');
// console.log(age === '25');
// console.log(age === 55);

// console.log(age != '25');
// console.log(age !== '25');


//=======================================================//
// Lesson 017
// Type Conversion.mp4


// let score = '100';
// console.log(typeof(score));

// score = Number(score);
// score += 1;
// console.log(score);
// console.log(typeof(score));

// let result = Number('hello');
// console.log(result);

// result = String(50);
// console.log(result);
// console.log(typeof(result));


//=======================================================//

// Lesson 018
// What is Control Flow.mp4




//=======================================================//
// Lesson 019
// For Loops.mp4


// for( let i=0; i<=10; i++){
//     console.log('iteration number: ' + i);
// }


// const names = ['shaun', 'mario', 'luigi'];

// for(let i=0; i<names.length; i++){
//     // console.log('item '+ i + ' is ' + names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }



//=======================================================//


// Lesson 020
// While Loops.mp4


// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }


//=======================================================//

// Lesson 021
// Do While Loops.mp4

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// do{
//     console.log(names[i]);
//     i++;
// }while(i<names.length);


//=======================================================//

// Lesson 022
// If Statements.mp4

// const age = 20;

// if(age > 20){
//     console.log('The age is over ' + age);
// }else{
//     console.log('The age is less ' + age);
// }


//=======================================================//

// Lesson 023
// Else & Else If.mp4


// const age = 14;

// if(age > 20){
//     console.log('The age is greater than ' + age);
// }else if(age < 20){
//     console.log('The age is less than ' + age);
// }
// else{
//     console.log('The age is ' + age );
// }




//=======================================================//



// Lesson 024
// Logical Operators.mp4 OR || AND &&

// const age = 44;

// if(age > 20 && age< 50){
//     console.log('The age is greater than 20 and less than 50');
// }else if(age < 20 || age > 10){
//     console.log('age < 20 || age > 10');
// }
// else{
//     console.log('The age is ' );
// }



//=======================================================//
// Lesson 025
// Logical NOT.mp4

// let user = false;

// if(!user){
//     console.log("You Must be Logged into to continue.");
// }

// console.log(true);
// console.log(false);

// console.log(!true);
// console.log(!false);


//=======================================================//


// Lesson 026
// Break & Continue.mp4

//=======================================================//

// Lesson 027
// Switch Statements.mp4

// const grade = 'A';


// switch(grade){
//     case 'A':
//         console.log('You got A');
//         break;
//     case 'B': 
//         console.log('You got B');
//         break;
//     case 'C': 
//         console.log('You got C');
//         break;
//     case 'D': 
//         console.log('You got D');
//         break;
//     case 'E': 
//         console.log('You got E');
//         break;
//     default:
//         console.log('You Failed');

// }


//=======================================================//

// Lesson 028
// Variables & Block Scope.mp4

// const age = 30;

// if(true){
//     const age = 40;
//     const name = 'shaun';
//     console.log('Inside the 1st codeBlog!', age, name);

//     if(true){
//         const age = 50;
//         console.log('Inside the 2nd codeBlog!', age, name);
//         var test = 'hello';
//     }
// }


// // var ignores block scope

// console.log('Outside the codeBlog!', age, test);



//=======================================================//

// Lesson 029
// What are Functions.mp4


//=======================================================//

// Lesson 030
// Function Declarations & Expressions.mp4

// // function declaration
// function greet(){
//     console.log('hello there..');
// }


// // function expression
// const speak = function(){
//     console.log('Good Day...');
// };


// greet();
// greet();
// greet();

// speak();
//=======================================================//
// Lesson 031
// Arguments & Parameters.mp4


// const speak= function(name, time){
//     console.log(`good ${time} ${name}`);
// };

// speak('mario', 'morning');

// const greet = function(name='luigi', time='night'){
//     console.log(`Good ${time}, ${name}`);
// };

// greet();
// greet('shaun', 'day');
// greet('Jack');



//=======================================================//
// Lesson 032
// Returning Values.mp4

// const calcArea = function(radius){
//     // let area = 3.14 * radius**2;
//     // return area;

//     // or we can write
//     return 3.14 * radius**2;
    
// };


// const area = calcArea(5);
// console.log(area);


// const calcVol = function(area){

// };

// console.log(area);

//=======================================================//
// Lesson 033
// Arrow Functions.mp4


// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// };


// // arrow function
// // const calcArea = (radius) => {
// //     return 3.14 * radius**2;
// // };


// // if we have  single parameter in the arrow function, we can write
// const calcArea = radius =>{
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log("Area is: ", area);


// // but if there is  multiple parameter or no parameter paranthesis are must
// const test = ()=>{
//     console.log("It's finger licking testy!");
// }
// test();



// const test2 = ()=> console.log('Another implementation of arrow function!');
// test2();



// // returns a value without return keyword
// const likeCount = like => `There are total ${like} likes`;
// console.log(likeCount(10));


// const greet = function(){
//     return 'hello, world';
// }


// const greet = ()=> 'hello, world';

// console.log(greet());


// const bill  = function(products, tax){
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total += products[i] + products[i]*tax;
//     }

//     return total;
// }


// const bill = (products, tax) =>{
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };


// console.log(bill([10, 15, 30], 0.2));


//=======================================================//
// Lesson 034
// Functions vs Methods.mp4

// const name = 'shaun';

// // function
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);


// // method

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);



//=======================================================//
// Lesson 035
// Foreach Method & Callbacks.mp4

// callback & foreach

// const myFunc = (callbackFunc)=>{
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// // myFunc(function(value){
// //     // do something
// //     console.log(value);
// // });

// myFunc(value => {
//      // do something
//      console.log(value);
// });


// let peopel = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// // peopel.forEach(function(person){
// //     console.log(person);
// // });

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }
// // peopel.forEach((person, index) =>{
// //     console.log(index, person);
// // });

// peopel.forEach(logPerson);

//=======================================================//
// Lesson 036
// Callback Functions in Action.mp4

// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];


// let html =``;
// people.forEach(person => {
//     // creates an html templates for each person
//     html += `<li style="color: purple"> ${person}</li>`;
// });

// console.log(html);

// ul.innerHTML = html;


//=======================================================//
// Lesson 037
// Objects at a Glance.mp4




//=======================================================//
// Lesson 038
// Creating an Object Literal.mp4


// object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetnija.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name)

// const key = 'location';

// user.age = 23;
// console.log(user.age);
// user['name'] = 'chun-li';
// console.log(user['name']);
// console.log(user['email']);


// console.log(typeof(user))


//=======================================================//

// Lesson 039
// Adding Methods.mp4

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetnija.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('user logged out');
//     },

// };

// user.login();
// user.logout();
// const name = 'mario';
// name.toUpperCase();


//=======================================================//
// Lesson 040
// 'this' Keyword.mp4




// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetnija.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('user logged out');
//     },
//     logBlogs: function(){
//         // console.log(this.blogs);
//         console.log('this user written the following blogs: ');
//         this.blogs.forEach( blog =>{
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// user.login();
// user.logout();
// const name = 'mario';
// name.toUpperCase();
//=======================================================//



// Lesson 041
// Objects in Arrays.mp4

// const blogs = [
//     {title: 'why mac & chese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// // console.log(blogs);


// let user = {

//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetnija.co.uk',
//     location: 'berlin',
//     blogs: [
//         {title: 'why mac & chese rules', likes: 30},
//         {title: '10 things to make with marmite', likes: 50}
//     ],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('user logged out');
//     },
//     logBlogs: function(){
//         // console.log(this.blogs);
//         console.log('this user written the following blogs: ');
//         this.blogs.forEach( blog =>{
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.logBlogs();


//=======================================================//
// Lesson 042
// Math Object.mp4


// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));

// // random numbers

// const random =  Math.random();

// console.log(random);
// console.log(Math.round(random*100));

//=======================================================//
// Lesson 043
// Primitive vs Reference Types.mp4



// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo ${scoreTwo}`);



// reference values

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40
console.log(userOne, userTwo);

//=======================================================//


//=======================================================//



//=======================================================//


//=======================================================//


//=======================================================//

//=======================================================//


//=======================================================//


//=======================================================//



//=======================================================//


//=======================================================//


//=======================================================//

//=======================================================//


//=======================================================//


//=======================================================//



//=======================================================//


//=======================================================//


//=======================================================//

//=======================================================//


//=======================================================//


//=======================================================//



//=======================================================//


//=======================================================//


//=======================================================//

//=======================================================//


//=======================================================//


//=======================================================//



//=======================================================//


//=======================================================//


//=======================================================//

//=======================================================//


//=======================================================//


//=======================================================//



//=======================================================//


//=======================================================//


//=======================================================//

//=======================================================//


//=======================================================//