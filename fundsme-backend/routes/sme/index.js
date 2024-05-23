const express = require("express");
const router = express.Router();
const {
  registerSME,
  getSMEById,
  joinCommittee,
  takeLoan
} = require("../../controllers/sme");

// Route for registering a new SME
router.post("/register", registerSME);

// Route for fetching details of a specific SME by ID
router.get("/:sme_id", getSMEById);

router.put("/join", joinCommittee);

router.put("/loan", takeLoan);

module.exports = router;
