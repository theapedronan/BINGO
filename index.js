console.log("Hello World!");
//generateNumber(75);


let isB = false,
    isI = false,
    isN = false,
    isG = false,
    isO = false;

    let BNumber, INumber, NNumber, GNumber, ONumber;


function generateNumber(max) {
    // addition = +
    // substraction = -
    // multiplicatiion = *
    // divition = +
    // addition = +
    // remainder = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    //if.... else if ... else
    // GT >, GTE > =, LT <, LTE < =, EQ =, NEQ ! +, AND &&, OR ||
    if (randomNumber <= 15) {
    BNumber = randomNumber;
        isB = true;
        console.log(`The number ${randomNumber} is in B`);
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        INumber = randomNumber;
        isI = true;
        console.log(`The number ${randomNumber} is in I`);
    } else if (randomNumber >= 31 && randomNumber <= + 45) {
        NNumber = randomNumber;
        isN = true;
        console.log(`The number ${randomNumber} is in N`);
    } else if (randomNumber >= 46 && randomNumber <= + 60) {
        GNumber = randomNumber;
        isG = true
        console.log(`The number ${randomNumber} is in G`);
    } else if (randomNumber >= 61 && randomNumber <= + 75) {
        ONumber = randomNumber;
        isO = true;
        console.log(`The number ${randomNumber} is in O`);
    } else {
        console.log(`The number is in valid`);
    }

    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
        console.log('BINGOOO !!');
        console.table({
            B: BNumber,
            I: INumber,
            N: NNumber,
            G: GNumber,
            O: ONumber,
            
        });



    }


//return console.log(randomNumber);
}

//Loops
let counter =10;
//for (counter; counter > 0; counter -= 1) 
// console.log(*Counter is ${counter}*);
// generateNumber(75);
//   // if (counter == 5){
//        // break;
//     // }
// }


// while (counter . 0){
//console.log(*Counter is $ {counter}*);
// counter -= 1;
// }
while (
    isB == false||
    isI == false||
    isN == false||
    isG == false||
    isO == false
    
) {
    generateNumber(75)
}

