
// // Random number generator
// function generateRandomNumber(minNum = 66, maxNum = 500) {
//     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// }
// const randomNumber = generateRandomNumber();
// console.log(`Execute Order ${randomNumber}`);





// // Valuta omregner
// function convertCurrency(usdAmount) {
//     const exchangeRate = 7.5;
//     const dkkAmount = usdAmount * exchangeRate;
//     const formattedAmount = new Intl.NumberFormat ('da-DK', {
//         style: 'currency',
//         currency: 'DKK'
//     }).format(dkkAmount)
//     return dkkAmount.toFixed(2);
// }
// const beløbIDKK = convertCurrency(150);
// console.log(`${beløbIDKK}`);




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



