// function triangle(height: number) {
//     console.log("1");
//     console.log("1 2");
//     console.log("1 2 3");
//     console.log("1 2 3 4");
//     console.log("1 2 3 4 5");
// }

// triangle(5);

// function triangle(height: number) {
//     for (let i = 1; i <= height; i++) {
//         let str: string = "";
//         for (let j = 1; j <= i; j++) {
//             str = str + j;
//             str = str + "";
//         }
//         console.log(str);
//     }
// } 

// triangle(3);

// function triangle(height: number) {
//     let count: number = 0;
//     for (let i = 1; i <= height; i++) {
//         let str: string = "";
//         for (let j = 1; j <= i; j++) {
//             count++;
//             str = str + count + " ";
//         }
//         console.log(str);
//     }
// }

// triangle(4);

function triangle(height: number) {
    let count: number = 0;
    for (let i = 1; i <= height; i++) {
        let str: string = "";
        for (let j = 1; j <= i; j++) {
            count++;
            if (count < 10) {
                str = str + "0" + count + " ";
            } else {
                str = 
            }
        }
    }
}