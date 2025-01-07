// you can write js here
console.log('exo-5');
let input = "Buongiorno, voi gioccare con me ?";

const vowels = ["a", "e", "i", "o", "u", "y"];
resultArray = [];

for (let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
        if (input[i] === vowels[j]){
            resultArray.push(input[i]);
            break;
        }
    }

}
resultArray[0] = resultArray[0].toUpperCase();
resultArray = resultArray.join('');
console.log(resultArray);
