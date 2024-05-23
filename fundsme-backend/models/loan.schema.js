const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loan_amount: {
    type: Number,
    // required: true
  },
  loan_type: {
    type: String,
    enum: ["Small", "Medium", "Large"],
    // required: true
  },
  base_bidding_percentage: {
    type: Number,
    // required: true
  },
  current_max_bid : {
    type: Number,
  },
  loan_status: {
    type: String,
    enum: ["Open", "Closed"],
        // required: true
    },
  sme: { type: mongoose.Schema.Types.ObjectId, ref: 'SME' },
});

const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;
