'use strict'; 

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// function logger() {
//     console.log(`My name is Jonas`);
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);



// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1980, `Bob`));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`)
//         return -1;
//     };
    
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1950, `Mike`));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.


// const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// // function checkWinner() {
// //     if (scoreDolphins > scoreKoalas) {
// //         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
// //         return;
// //     } else {
// //         console.log(`Koalas win (${scoreDolphins} vs. ${scoreKoalas})`)
// //         return;
// //     }
// // }

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//     } else {
//         console.log(`No team wins!`)
//     };
// };

// checkWinner(scoreDolphins, scoreKoalas);


// const friends = [`Micheal`, `Steven`, `Peter`];

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends);

// const firstName = `Jonas`;
// const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
// console.log(jonas);
// console.log(jonas.length);



// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age = calcAge(years[0]);
// const age1 = calcAge(years[1]);
// const age2 = calcAge(years[years.length - 1]);

// console.log(age, age1, age2);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

// const friends = [`Micheal`, `Steven`, `Peter`];
// const newLenght = friends.push(`Jay`);
// console.log(friends);
// console.log(newLenght);

// friends.unshift(`John`);
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf(`Steven`));
// console.log(friends.includes(`Steven`));

// if (friends.includes(`Steven`)) {
//     console.log(`You have a friend called Steven!`);
// }


function calcTip (bill) {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals =[tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

