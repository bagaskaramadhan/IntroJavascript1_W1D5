//count average
// 90 - 100 = a
// 80 - 89 = b
// 70 - 79 = c
// 60 - 69 = d
// 0 - 59 = e

function nilaiRata2(ind, eng, mtk, ipa) {
    const grade = "Grade =";
    const avg = ((ind + eng + mtk + ipa) / 4);
    // const avgg = avg.toFixed(0);
    // console.log(typeof avg);
    // console.log(typeof avgg);
    console.log("Rata - rata:",avg);
    if (avg >= 90 && avg <=100) {
        console.log(grade,"A");
    }else if (avg >= 80 && avg <= 89) {
        console.log(grade,'B');
    }else if (avg >= 70 && avg <= 79) {
        console.log(grade,'C');
    }else if (avg >= 60 && avg <= 69) {
        console.log(grade,'D');
    }else if (avg >=0 && avg <= 59) {
        console.log(grade,'E');
    }
}

nilaiRata2(69, 50, 64, 78);