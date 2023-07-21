'use strict';
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / johnHeight ** 2;
//  const isMarkBMIHeigher = markBmi > johnBmi;
//  console.log(markBmi);
//  console.log(johnBmi);
//  console.log(isMarkBMIHeigher);
 
// function greetings(){
//     console.log
//     ('Good Evening dear');
// }
// const dishes = {
//     maindish:"rice",
//     dessert:"cake",
//     appetizer:"salad",
//     alldishes: function() {
//         return this.maindish + " " + this.dessert + " " + this.appetizer; 
//     }  
// }
// console.log(dishes);
// console.log(dishes.maindish);
// console.log(dishes.dessert);
// console.log(dishes.appetizer);
// console.log(dishes.alldishes());

// // statements and expressions
// // const age = 12;
// // // functions
// // function myself(){
// //     console.log("Chika");
// // }

// function student(studentName, studentCourse){
// const details = `${studentName} is a student at axia africa. Taking ${studentCourse}.`;
// return details;
// }
// const studentData = student("Chika","Frontend development");
// console.log(studentData);

// const studentData2 = student("Doyin","Backend development");
// console.log(studentData2);

// const student2 = function (studentName, studentCourse){
//     const details2 = `${studentName} is a student at axia africa. Taking ${studentCourse}.`;
// return details2;
// }
// const studentData3 = student2("lovelyn","Product Design");
// console.log(studentData3);
// // arrow function
// const student3 = (studentName, studentCourse) => `${studentName} is a student at axia africa. Taking ${studentCourse}.`;
// const studentData4 = student3("finbarr","product marketing");
// console.log(studentData4);

// //function in a function

//fruit cutter function
const fruitCutter = fruitNumber => fruitNumber * 3;
// function fruitCutter(fruitNumber){
//     const detail = fruitNumber * 3;
//     return detail;
// }
// fruitJuicer
// const fruitJuicer = function (apples, mango, orange){
//     const appleNumber = fruitCutter(apples);
//     const mangoNumber = fruitCutter(mango);
//     const orangeNumber = fruitCutter(orange);

//     const fruitJuice = `Juice made with ${appleNumber} pieces of apples and ${mangoNumber} pieces of mango and 
//     ${orangeNumber} pieces of orange.`;
//     return fruitJuice;
// }
// console.log(fruitJuicer(2, 1, 4));

// // age calculator
// const currentAge = birthYear => 2023 -birthYear;

// //alchol caution machine
// const ageToTakeAlcohol = function(birthYear, firstName){
//     const age = currentAge(birthYear);
//     const eligibleAge = age;
//     const remainingAge = 18 - age;
//     if(age >= 18){
//         console.log(`${firstName} is old enough to take alcohol`);
//         return age;
//     }
//     else{
//         console.log(`${firstName}!!!!!!..........you are not old enough to take alcohol,you have ${remainingAge} years to take alcohol.`);
//         return age;
//     }
// }
// console.log(ageToTakeAlcohol("1995", "Blessing"));
// console.log(ageToTakeAlcohol("2006", "Chika"));
 
// // BMI Calculator
    
// const bodyMassIndex = (mass,height) => mass / (height**2);

// //INFO ON YOUR WEIGHT
// const bodyweight = function(mass,height,firstName){
//     const weight = bodyMassIndex(mass,height);
//     const currentWeight = weight;

//     if(weight <= 18.5){
//         console.log(`${firstName} you are underweight.`);
//         return weight;
//     }
//     if(weight > 19 && weight < 25 ){
//         console.log(`${firstName} you have a normal weight.`);
//         return weight;
//     }
//     if(weight > 25){
//         console.log(`${firstName} you are overweight.Try to get into shape`);
//         return weight;
//     }
    
// }
// console.log(bodyweight("40","1.69","Doyin"));
// console.log(bodyweight("60","1.65","Blessing"));
// console.log(bodyweight("90","1.0","Finbarr"));
 

// Arrays
// const myNumber = [1, 2, 3, 4];
// console.log (myNumber);
// console.log (myNumber[0]);

// const favDishes = ['Peppered Chicken','Egg Sauce','Noodles','Soya milk'];
// console.log(favDishes);
// console.log(favDishes[0]);
// console.log(favDishes[1]);
// console.log(favDishes[2]);
// console.log(favDishes[3]);

// favDishes[2] = 'Eba';
// console.log(favDishes);
// const myList = [1, 'elephant', true, { name : 'Chika'}, [1, 2, 3,4]];
// console.log(myList);
// console.log(typeof[1,2,3,4]);
// console.log(typeof('Chika'));
// console.log(typeof(true));
// console.log(typeof({ name : 'Chika'}));
// // lenghth properties
// console.log(favDishes.length);
// console.log(myList.length);
// //methods
// favDishes.push('Rice');
// console.log(favDishes);
// favDishes.splice(0, 1);
// console.log(favDishes);

// // Arrays continued in class
// const frontendStnd = ['doyin','blessing','chika','mubarak'];
// // const courses = new Array('frontend', 'product','data');

// console.log(frontendStnd);
// // console.log(courses);
// console.log(frontendStnd[1]);
// console.log(frontendStnd[frontendStnd.length - 1]);

// const currentYear = 2023;
// const birthYear = 1999;
// const firstName = 'dimeji';
// const lastName = 'Balogun';
// const sex = 'male';
// const colleagues = ['doyin','blessing', 'finbarr'];
// const age = currentYear - birthYear;

// const dimeji = [firstName, sex,colleagues,currentYear - birthYear];
// console.log(dimeji);

// //array operators
// //push adds to the end while unshift adds at the begining
// const bestFood = 'rice';
// dimeji.push(bestFood);
// console.log(dimeji);
// dimeji.unshift(lastName);
// console.log(dimeji);
// // pop removes last value while shift removes at the beginning
// dimeji.pop();
// console.log(dimeji);
// dimeji.shift();
// console.log(dimeji);

// //indexof
// console.log(dimeji.indexOf(firstName));
// //includes
// console.log(dimeji.includes(firstName));

// if  (dimeji.includes(sex)){
//     console.log('dimeji is a male');
// } else{
//     console.log('dimeji please add your location')
// }

// //objects ----------keys/key variables
// const doyin = {
//     firstName:'dimeji', 
//     birthYear: 1999,
//     lastName:'Balogun',
//     sex:'male',
//     colleagues:  ['doyin','blessing', 'finbarr'],
//     bestFood: 'rice',

    
//     // currentAge: function(birthYear){ 
//     //     return 2023 -birthYear;
//     // },
// //     currentAge: function(){
// //         return 2023 -this.birthYear;
// //     }

// // currentAgeFunct: function(){
// //     this.age = 2023 - this.birthYear;
// //     return this.age;
// // }
// // }
// // console.log(doyin.age);
// // console.log(doyin.currentAgeFunct(birthYear));

// // console.log(dimejiObject.currentAge(birthYear));

// // console.log(dimejiObject);
// // //destructuring an object
// // //dot method
// // console.log(dimejiObject.lastName);
// // //bracket method
// // console.log(dimejiObject['colleagues']);

// // //example
// // const aboutDimeji = prompt('what do you want to know? firstName, birthYear, lastName, sex, colleagues,bestFood');

// // if (dimejiObject[aboutDimeji]){
// //     console.log(dimejiObject[aboutDimeji]);
// // } else{
// //     console.log('i dont share such info with strangers');
// // }

//iteration
// const blessingPushUps = 8;
// if (blessingPushUps < 8){
//     console.log('push more');
// }else {
//     console.log('you can rest now');
// }

// for(let pushUps = 1; pushUps <= 20; pushUps++){
//     console.log(`push more, you just did ${pushUps} pushup`);
// }
// //looping through an array
// const favDishes  = ['rice','Egusi soup','Peppered Chikaen','Plantain'];
// for(let i = 0; i <= favDishes.length - 1; i++){
//     console.log(favDishes[i]);
// }

//example
// const birthYears = [1999, 2021, 1990,2023];
// const ages= [];
// const currentYear = 2023;

// for(let i = 0; i < birthYears.length; i++){
//     // currentYear -birthYears[i];
//     ages.push(currentYear - birthYears[i])  
// }
// console.log(ages);
//while loop
// let pushUps = 1;
// while (pushUps <= 8){
//     console.log(`push more, you just did ${pushUps} pushup`);
//     pushUps ++;
// }

// dom manipulation
const grandChild = document.getElementById('grandChild2');
console.log(grandChild);