const arrayGeral = new Array(1,2,3,4,5);

let dois = arrayGeral.find(item => item == 2);
console.log(dois);

let indexNumeroCinco =arrayGeral.findIndex(item => item == 5)
console.log(indexNumeroCinco);

const some3 = arrayGeral.some(item => item == 3);
console.log(some3);

const include4 = arrayGeral.includes(4);
console.log(include4);

var soma = 0;
arrayGeral.forEach(item => soma += item);
console.log(soma);

soma = 0;
for (const item of arrayGeral) {
    soma += item
}
console.log(soma);

// for (const index in arrayGeral) {
//     console.log(index);
//     if (index == 2) {
//         console.log(arrayGeral.in)
//     }
// }

arrayGeral.pop();
console.log(arrayGeral);
arrayGeral.shift();
console.log(arrayGeral);