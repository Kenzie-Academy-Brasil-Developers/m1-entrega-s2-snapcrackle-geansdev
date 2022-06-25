function snapCrackle(maxValue){
let newString = "";   
for(let i = 1; i <= maxValue; i ++){
    if (i == 1) {
       newString += "Snap";
    }
    else if (i % 2 == 1 && i % 5 == 0) {
        newString += ", SnapCrackle";
    }
    else if (i % 2 == 1){
        newString += ", Snap"; 
    }
    else if (i % 5 == 0) {
        newString += ", Crackle";
    }
    else{
        newString += `, ${i}`;
    }
}
return newString
}
console.log(snapCrackle(12))

// function snapCracklePrime(maxValue){
//     let newString = "";   
//     for(let i = 1; i <= maxValue; i ++){
//         function checarNumPrimo(newString){
//           if (1 % i && i % i == 0){
//         newString += ", Prime";
//         }
//         else{
//             newString ++
//         }
//         }

//         if (i == 1) {
//            newString += "Snap";
//         }
//         else if (i % 2 == 1 && i % 5 == 0) {
//             //3. Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar __"SnapCrackle"__ no final da string.
//             newString += ", SnapCrackle";
//         }
//         else if (i % 2 == 1){
//             // 1. Se o número for ímpar, no lugar dele, concatenar __"Snap"__ no final da string.
//             newString += ", Snap"; 
//         }
//         else if (i % 5 == 0) {
//             //2. Se o número for múltiplo de 5, no lugar dele, concatenar __"Crackle"__ no final da string.
//             newString += ", Crackle";
//         }
//         //4. Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número no final da string.
//     //     else{
//     //         newString += `, ${i}`;
//     //     }
//     // }
//     // return newString
//     // }
//     // console.log(snapCracklePrime(15))
