const express = require('express');
const router = express.Router();
const {
    registerLoan,
    getLoanById,
    bidForLoan
} = require('../../controllers/loan');

router.post('/register', registerLoan);
router.get('/:loan_id', getLoanById);
router.post('/bid', bidForLoan);

module.exports = router;