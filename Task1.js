function mybio() {
    const biodata = {
        name : "Bagaskara Ramadhan",
        age : 23,
        hobbies : ["Renang", "Futsal", "Gambar"],
        IsMaried : false,
        schoolList : [
            {
                school : "SMK Grafika Desa Putera",
                yearIn : 2011,
                yearOut : 2014,
                major : 'Production'
            },
            {
                school : "Universitas Gunadarma",
                yearIn : 2014,
                yearOut : 2018,
                major : 'Information System'
            }
        ],
        skills : [
            {
                skillName : "PHP",
                level : "Advanced"
            },
            {
                skillName : "Javascript",
                level : "Beginner"
            }
        ],
        interestInCoding : true
    }
    
    console.log(biodata);
    // return biodata;
}
mybio();
// console.log(mybio());