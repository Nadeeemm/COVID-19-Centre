const mongoose = require("mongoose");


const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
    },
    report: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"
    },
    detail: {
        type: String,
    },

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
