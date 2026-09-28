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


const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner() {
//     if (scoreDolphins > scoreKoalas) {
//         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
//         return;
//     } else {
//         console.log(`Koalas win (${scoreDolphins} vs. ${scoreKoalas})`)
//         return;
//     }
// }

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log(`No team wins!`)
    };
};

checkWinner(scoreDolphins, scoreKoalas);
