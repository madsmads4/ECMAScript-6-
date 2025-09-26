const wongsWords = document.getElementById(`message`);
        function findMultiverseNumber(number, successCallback, failureCallback){
            if (number < 0){
                failureCallback(new Error(`All universes in the multiverse give only integers.`));
            }else if (number !== Math.trunc(number)) {
                failureCallback(new Error(`All universes in the multiverse give only integers.`));
            }else {
                setTimeout( () => {
                    if (number === 0 || number === 1){
                        successCallback(1);
                    }else{
                        let result = number;
                        while (number > 1){
                            number -= 1;
                            result *= number;
                        }
                        successCallback(result);
                    }
                }, 5000);
            }
        }
        
        function logResult(result){
            document.getElementById(`message`).innerHTML = `The number you provided is sending you to Earth #${result}`;
            console.log(`This is your result: ${result}`);
        }
        function logError(error){
            document.getElementById(`message`).innerHTML = `There was an error with your sling-ring: ${error.message} and you remain where you are.`;
            console.log(`Error: ${error.message}`);
        }
            findMultiverseNumber(5, logResult, logError);