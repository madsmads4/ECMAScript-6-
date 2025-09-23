// // Opgave 1.1
// const name = "Mads";
// const age = 24;
// const isMarried = false;
// const salary = 12345678901234567678901234567890n;

// const person = { 
//     name, 
//     age, 
//     isMarried, 
//     salary, 
// };

// function greet() {
// console.log('Hello, ' + person.name);
// }


// let address;
// let king = null; 
// console.log(person); 

// // sammentræk string med number
// const greeting = "Hej, jeg hedder " + name + " og jeg er " + age + " år gammel.";
// console.log(greeting);

// const ageMarried = age * isMarried;
// console.log(ageMarried)

// // const kingValue = king == address;
// const kingValue = king === address;
// console.log(kingValue)


// Opgave 1.2
// function checkUserInput(username, password) {
//     if (username && password) {
//         console.log(`Velkommen, ${username}.`);
//         return true;
//     } else {
//         console.log("Indtast venligst et gyldigt brugernavn og kodeord.");
//         return false;
//     }
// }

// checkUserInput('Julemand', 'password123')


// // Opgave 1.3
// function convertCurrency(usdAmount) {
//     const exchangeRate = 7.5;
//     const dkkAmount = usdAmount * exchangeRate;
//     const formattedAmount = new Intl.NumberFormat ('da-DK', {
//         style: 'currency',
//         currency: 'DKK'
//     }).format(dkkAmount)
//     return formattedAmount;
// }
// const beløbIDKK = convertCurrency(150);
// console.log(`${beløbIDKK}`);


// Opgave 1.4
// function checkUserInput(username, password) {
//     const regexEmail = /\S+@\S+\.\S+/;

//     if (!username && !password) {
//         console.log("Indtast venligst et gyldigt brugernavn og kodeord.");
//         return false;
//     }

//     if (!username) {
//         console.log("Indtast venligst et gyldigt brugernavn.");
//         return false;
//     }

//     if (!regexEmail.test(username)) {
//         console.log("Brugernavnet skal være en gyldig e-mailadresse.");
//         return false;
//     }

//     if (!password) {
//         console.log("Indtast venligst et gyldigt kodeord.");
//         return false;
//     }

//     if (password.length < 8) {
//         console.log("Kodeordet skal være mindst 8 tegn langt.");
//         return false;
//     }

//     console.log(`Velkommen, ${username}.`);
//     return true;
// }
// checkUserInput('test@example.com', 'password123');
// checkUserInput('Julemand', 'password123'); 




// // Opgave 1.5
// function generateRandomNumber(minNum = 66, maxNum = 500) {
//     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// }
// const randomNumber = generateRandomNumber();
// console.log(`Execute Order ${randomNumber}`);




// //Fremtidig dato
// function findFutureDate(days) {
//     var currentDate = new Date();
//     currentDate.setDate(currentDate.getDate() + days);
//     return currentDate.toLocaleDateString();
// }
// console.log(findFutureDate(5))





//Array med helte
// const canLiftMjolnir = [
//   "Thor", "IronMan", "CaptainAmerica", "Hulk", "BlackWidow", 
//   "SpiderMan", "DoctorStrange", "BlackPanther", "ScarletWitch", 
//   "Vision", "Falcon", "WarMachine"
// ];

// //Min men med arrow functions
// const parseNumbers = heroInput => {
//   const getHero = heroInput.slice(0, 12).map(hero => parseInt(hero));
//   return `${getHero.join('')} Batman`;
// };
// console.log(parseNumbers(canLiftMjolnir));

// Marc Batman sang
// function parseNumbers(heroInput) {
//     let getHero = heroInput.map(function(hero) {
//         return parseInt(hero);
//     });
//     return `${getHero.join('')} Batman`;
// }
// console.log(parseNumbers(canLiftMjolnir));


//Liste af superhelte som bliver vist på siden
// const superHeroes = [
//         { heroname: "Thor", age: 1000, powers: ["Strength", "Flight"] },
//         { heroname: "Doctor Strange", age: 35, powers: ["Flight", "Teleportation"] },
//         { heroname: "Spider Man", age: 17, powers: ["Agility", "Web Shooting"] },
//         { heroname: "Iron Man", age: 48, powers: ["Technology", "Armor"] },
//         { heroname: "Black Panther", age: 35, powers: ["Strength", "Stealth"] },
//         { heroname: "Captain Marvel", age: 34, powers: ["Energy", "Flight"] },
//         { heroname: "Scarlet Witch", age: 29, powers: ["Chaos", "Reality"] },
//         { heroname: "Hulk", age: 40, powers: ["Strength", "Regeneration"] },
//         { heroname: "Ant-Man", age: 38, powers: ["Size-Shifting", "Strength"] },
//         { heroname: "Wolverine", age: 150, powers: ["Regeneration", "Adamantium Claws"] }
//     ];

//     const heroList = document.getElementById('heroList');

//     heroList.innerHTML = superHeroes.map(hero => `
//         <li>
//             <div class="hero-name">${hero.heroname}</div>
//             <div class="hero-age">Age: ${hero.age}</div>
//             <div class="hero-powers">Powers: ${hero.powers.join(', ')}</div>
//         </li>
//     `).join('');



