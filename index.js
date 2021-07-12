const express = require('express');
const app= express();
const mongoose = require('mongoose')
// const path = require("path");
const Patient = require('./models/patient')
const seedDB = require('./seed')
const methodOverride = require("method-override");

// ----------------------------- Routes ----------------------------
const patientRoutes = require("./routes/patient");


// -------------------------------- mongoose -------------------------
mongoose
    .connect("mongodb://localhost:27017/covid-patients", { //process.env.DB_URL 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })

.then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("connection Failed");
        process.env.DB_URL
        console.log(err);
    });

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ====================== Seeding ========================
// seedDB();

// =================== Using Routes ======================
app.get("/", (req, res) => {
    res.render("landingpage/home");
});

app.use(patientRoutes);


// =============== Listening to Port ==============
app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running `);
});