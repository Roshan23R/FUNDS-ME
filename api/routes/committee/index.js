const express = require("express");
const router = express.Router();
const {
    registerCommittee,
    getCommitteeById,
    includeLoan
} = require("../../controllers/committee");


router.post("/create", registerCommittee);
router.get("/:committee_id", getCommitteeById);
router.put("/include-loan", includeLoan);

module.exports = router;

