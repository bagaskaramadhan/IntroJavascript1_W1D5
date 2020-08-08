let spc = '';
let num = 3;

for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {

        spc += j;
    }
    console.log(spc)
    spc = ''
}
// asd = (num) => {
//     let spc = '';

//     for (let i = num; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {

//             spc += j;
//         }
//         console.log(spc)
//         spc = ''
//     }

// }
// asd(4)
