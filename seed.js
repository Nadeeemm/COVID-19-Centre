const mongoose = require("mongoose");
const Patient = require("./models/patient");


const patients = [
    {
        name: "Lalit",
        gender: "male",
        age:21,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "+ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
        name: "Rohit",
        gender: "male",
        age:22,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "+ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
        name: "Kruti",
        gender: "female",
        age:20,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "-ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
        name: "Shivani",
        gender: "female",
        age:21,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "+ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
        name: "Sanjay",
        gender: "male",
        age:21,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "-ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
        name: "Nitin",
        gender: "male",
        age:21,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "-ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
        name: "Deepika",
        gender: "female",
        age:24,
        img: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png",
        report: "+ive",
        detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
   
]

const seedDB = async () => {
    await Patient.insertMany(patients);
    console.log("DB Seeded");
};

module.exports = seedDB;
