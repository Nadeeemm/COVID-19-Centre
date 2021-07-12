const express = require('express');
const router = express.Router();
const Patient = require("../models/patient");





router.get("/", async (req, res) => {
    const patients = await Patient.find({});
    res.render("patient/home", { patients });
});

// =========== Display All Patients ==============
router.get("/patients", async (req, res) => {
    const patients = await Patient.find({});
    res.render("patient/home", { patients });
});

// =========== new patient form ================
router.get("/patients/new", (req, res) => {
    res.render("patient/new");
});


// ============== create new patient ===============
router.post("/patients", async (req, res) => {
    try {
        await Patient.create(req.body.patient);
        res.redirect("/patients");
    } catch (e) {
        console.log(e)
    }
});

//  ================= show Patient ============
router.get("/patients/:id", async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.render("patient/show", { patient });
    } catch (e) {
        console.log(e.message);
    }
});


// ========== Edit And Update Patient  =============
router.get("/patients/:id/edit", async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.render("patient/edit", { patient });
    } catch (e) {
        console.log(e.message);
    }
});

router.patch("/patients/:id", async (req, res) => {
    await Patient.findByIdAndUpdate(req.params.id, req.body.patient);
    res.redirect(`/patients/${req.params.id}`);
});


// =============== Delete a Patient ================
router.delete("/patients/:id", async (req, res) => {
    try {
      await Patient.findByIdAndDelete(req.params.id);
      res.redirect("/patients");
    } catch (e) {
      console.log(e.message);
    }
  });


module.exports = router;