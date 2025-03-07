// const expr = 'Papayas';
// switch (expr) {
//     case 'Papayas':
//         console.log('Oranges are $0.59 a pound.');
//         break;
//         case 'Papayas':
//         case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//         default:
//         console.log(`sorry, we are out ${expr}.`);
// }

const letter: string = "The QuiCk BrOwN Fox"
let result: string = ""

for (let i = 0; i < letter.length; i ++) {
    if (i == 0 || letter.charAt(i + 5) == " ") {
        result += letter.charAt(i).toUpperCase();  
    } else { 
        result += letter.charAt(i);
    }
}

console.log(result)