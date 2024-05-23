const SME = require("../../models/sme.schema");
const Committee = require("../../models/committee.schema");
const Loan = require("../../models/loan.schema");

// Controller to register a new SME
exports.registerSME = async (req, res) => {
  try {
    // Create a new SME instance based on request body
    const newSME = new SME(req.body);
    // Save the SME to the database
    await newSME.save();
    res
      .status(201)
      .json({ message: "SME registered successfully", data: newSME });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering SME", error: error.message });
  }
};

exports.getSMEById = async (req, res) => {
  try {
    // Find the SME by ID in the database
    const sme = await SME.findById(req.params.sme_id);
    if (!sme) {
      return res.status(404).json({ message: "SME not found" });
    }
    res
      .status(200)
      .json({ message: "SME details retrieved successfully", data: sme });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching SME details", error: error.message });
  }
};

exports.joinCommittee = async (req, res) => {
  try {
    const { smeId, committeeId } = req.body;

    // Find the SME by ID
    const sme = await SME.findOne({ _id: smeId });
    const committee = await Committee.findOne({ _id: committeeId });
    console.log(sme,"sme");

    if (!sme) {
      return res.status(404).json({ message: "SME not found" });
    }

    // Check if the SME is already part of the committee
    if (sme.committee.includes(committeeId)) {
      return res
        .status(400)
        .json({ message: "SME is already part of the committee" });
    }

    // Add the committee to the SME's committee array
    sme.committee.push(committeeId);
    committee.sme.push(smeId);

    // Save the updated SME
    await sme.save();
    await committee.save();

    res
      .status(200)
      .json({ message: "SME joined the committee successfully", data: {sme, committee} });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error joining the committee", error: error.message });
  }
};

exports.takeLoan = async (req, res) => {
  try {
    const { smeId, loanId } = req.body;

    // Find the SME by ID
    const sme = await SME.findOne({ _id: smeId });
    const loan = await Loan.findOne({ _id: loanId });
    console.log(sme, "sme");
    
    if (!sme) {
      return res.status(404).json({ message: "SME not found" });
    }

// Check if the SME is already part of the committee
    if (sme.loan.includes(loanId)) {
      return res
        .status(400)
        .json({ message: "SME has already taken the loan" });
    }

    // Add the loan to the SME's loan array
    sme.loan.push(loanId);
    // Keep the sme to the loan's sme 
    loan.sme = smeId;

    // Save the updated SME
    await sme.save();
    await loan.save();

    res
      .status(200)
      .json({ message: "SME taken the Loan", data: {sme, loan} });
  }
  catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error taking the loan", error: error.message });
  }
}
