const mongoose=require('mongoose');
const Loan = require('./loan.schema');
const Committee = require('./committee.schema');

const basicSchema = new mongoose.Schema({
    sme_name: {
        type: String,
        // required:true
    },
    company_email:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    phone_number:{
        type:Number,
        // required:true
    },
    pan_card:{
        type:String,
    },
    gst_number:{
        type:String
    },

});


const addressSchema = new mongoose.Schema({
    building: {
        type: String,
        //required: true
    },
    street: {
        type: String,
        //required: true
    },
    city: {
        type: String,
        //required: true
    },
    state: {
        type: String,
        //required: true
    },
    pincode: {
        type: Number,
        //required: true
    }
});
const founderSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    phone_number: {
        type: Number,
        //required: true
    },
    pan_number:{
        type:String,
        // required:true
    },
    aadhar_number:{
        type:Number,
        // required:true
    }
});

const documentSchema = new mongoose.Schema({
    tax_returns: {
        type: String,
        //required: true
    },
    other_documents: {
        type: String,
    }
});

const bankSchema = new mongoose.Schema({
    account_number: {
        type: Number,
        //required: true
    },
    acccount_holder_name: {
        type: String,
        //required: true
    },
    ifsc_code: {
        type: String,
        //required: true
    },
    bank_name: {
        type: String,
        //required: true
    },
    branch_name: {
        type: String,
        //required: true
    }
});



const smeSchema=new mongoose.Schema({
    basic: basicSchema,
    address: addressSchema,
    founders: [founderSchema],
    documents:documentSchema,
    bank: bankSchema,
    loan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }],
    committee: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Committee' }]
});

const SME = mongoose.model('SME', smeSchema);
module.exports = SME;