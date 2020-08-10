let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// console.log(data);
//spread data
let real = {...data,
    name: 'Bagaskara Ramadhan',
    email: 'bagaskaramadhan@gmail.com',
    hobby: 'Lari'
}
console.log(real);
//destruc
let = {address:{street,city}} = data;
console.log(`${street},${city}`)