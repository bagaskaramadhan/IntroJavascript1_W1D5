printSegitiga = (num) =>{
    for(let i = num; i>=1; i--){
        let bL = '';
        for(let j = 1; j<=i;j++){
            bL += j + ' '
        }
        console.log(bL);
    }
}

printSegitiga(5);