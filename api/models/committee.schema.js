const mongoose = require('mongoose');
const SME = require('./sme.schema');
const Loan = require('./loan.schema');

const committeeSchema = new mongoose.Schema({
    max_members:{
        type:Number,
        // required:true
    },
    sip_amount:{
        type:Number,
        // required:true
    },
    sip_period:{
        type:Number,
        // required:true
    },
    committee_tenure:{
        type:Number,
        // required:true
    },
    committee_status:{
        type:String,
        enum:['Open','Closed']
    },
    committee_start_date:{
        type:Date,
        // required:true
    },
    committee_end_date:{
        type:Date,
    },
    committee_fund_amount:{
        type:Number,
    },
    loan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }],
    sme: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SME' }]
});

const Committee = mongoose.model('Committee', committeeSchema);
module.exports = Committee;