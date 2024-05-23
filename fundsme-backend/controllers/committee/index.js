const Committee = require("../../models/committee.schema");
const Loan = require("../../models/loan.schema");

exports.registerCommittee = async (req, res) => {
  try {
    // Create a new SME instance based on request body
    const newCommittee = new Committee(req.body);
    // Save the SME to the database
    await newCommittee.save();
    res
      .status(201)
      .json({
        message: "Committee registered successfully",
        data: newCommittee,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering Committee", error: error.message });
  }
};

exports.getCommitteeById = async (req, res) => {
  try {
    // Find the SME by ID in the database
    const committee = await Committee.findById(req.params.committee_id).populate('sme');
    if (!committee) {
      return res.status(404).json({ message: "Committee not found" });
    }
    res
      .status(200)
      .json({
        message: "Committee details retrieved successfully",
        data: committee,
      });
  }
  catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching Committee details",
        error: error.message,
      });
  }
}

exports.includeLoan = async (req, res) => {
  try {
    const { committeeId, loanId } = req.body;

    // Find the Committee by ID
    const committee = await Committee.findOne({ _id: committeeId });
    const loan = await Loan.findOne({ _id: loanId });
    console.log(committee, "committee");

    if (!committee) {
      return res.status(404).json({ message: "Committee not found" });
    }

// Check if the Committee is already part of the loan
    if (committee.loan.includes(loanId)) {
      return res
        .status(400)
        .json({ message: "Committee is already part of the loan" });
    }

    // Add the loan to the Committee's loan array
    committee.loan.push(loanId);
    await committee.save();
    res
      .status(200)
      .json({
        message: "Loan added to Committee successfully",
        data: committee,
      });
  }
  catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error adding the loan",
        error: error.message,
      });
  }
}



