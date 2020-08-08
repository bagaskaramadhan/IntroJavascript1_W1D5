//count average
// 90 - 100 = a
// 80 - 89 = b
// 70 - 79 = c
// 60 - 69 = d
// 0 - 59 = e

function nilaiRata2(ind, eng, mtk, ipa) {
    const grade = "Grade =";
    const avg = ((ind + eng + mtk + ipa) / 4);
    let all = parseInt(avg);
    // const avgg = avg.toFixed(0);
    // console.log(typeof avg);
    // console.log(typeof avgg);
    console.log("Rata - rata:",all);
    if (all >= 90 && all <=100) {
        console.log(grade,"A");
    }else if (all >= 80 && all <= 89) {
        console.log(grade,'B');
    }else if (all >= 70 && all <= 79) {
        console.log(grade,'C');
    }else if (all >= 60 && all <= 69) {
        console.log(grade,'D');
    }else if (all >=0 && all <= 59) {
        console.log(grade,'E');
    }
}

nilaiRata2(69, 50, 64, 57);