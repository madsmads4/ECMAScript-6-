
// Random number generator
function generateRandomNumber(minNum = 66, maxNum = 500) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

const randomNumber = generateRandomNumber();
console.log(`Execute Order ${randomNumber}`);


// Valuta omregner
function convertCurrency(usdAmount) {
    const exchangeRate = 7.5;
    const dkkAmount = usdAmount * exchangeRate;
    const formattedAmount = new Intl.NumberFormat ('da-DK', {
        style: 'currency',
        currency: 'DKK'
    }).format(dkkAmount)
    return dkkAmount.toFixed(2);
}

const beløbIDKK = convertCurrency(150);
console.log(`${beløbIDKK}`);


//Fremtidig dato
function findFutureDate(days) {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate.toLocaleDateString();
}
console.log(findFutureDate(5))




