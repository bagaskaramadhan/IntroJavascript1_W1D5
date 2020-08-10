printSegitiga = (num) => {

    if (typeof num !== 'number') {
        console.log('Input Have to Number');
    } else {

        for (let i = num; i >= 1; i--) {
            let bL = '';
            for (let j = 1; j <= i; j++) {
                bL += j + ' '
            }
            console.log(bL);
        }
    }
}

printSegitiga(12);