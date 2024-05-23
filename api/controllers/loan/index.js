const Loan = require('../../models/loan.schema');
const SME = require('../../models/sme.schema');

exports.registerLoan = async (req, res) => {
    try {
        const newLoan = new Loan(req.body);
        await newLoan.save();
        res.status(201).json({ message: "Loan registered successfully", data: newLoan });
    } catch (error) {
        res.status(500).json({ message: "Error registering Loan", error: error.message });
    }
}

exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.loan_id);
        if (!loan) {
            return res.status(404).json({ message: "Loan not found" });
        }
        res.status(200).json({ message: "Loan details retrieved successfully", data: loan });
    } catch (error) {
        res.status(500).json({ message: "Error fetching Loan details", error: error.message });
    }
}

exports.bidForLoan = async (req, res) => {
  try {
    const { smeId, loanId, bidInterest } = req.body;

    // Input validation
    if (!smeId || !loanId || !bidInterest) {
      return res.status(400).json({ message: "Missing required parameters" });
    }

    const sme = await SME.findOne({ _id: smeId });
    const loan = await Loan.findOne({ _id: loanId });

    // Check if SME and Loan exist
    if (!sme) {
      return res.status(404).json({ message: "SME not found" });
    }
    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

      // Update loan details
      if (bidInterest > loan.current_max_bid) {
          loan.current_max_bid = bidInterest;
          loan.sme = smeId;
          await loan.save();
          res
              .status(200)
              .json({
                  message: "SME bid for the loan successfully",
                  data: { loan },
              });
      }
      else {
          res.status(400).json({ message: "Bid interest should be greater than current max bid" });
      }

   
  } catch (error) {
    console.error("Error bidding for loan:", error);
    res
      .status(500)
      .json({ message: "Error bidding for loan", error: error.message });
  }
};

