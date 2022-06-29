const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentInfo = new Schema(
    {
        id:{type: Number, required: true },
        cardHolderName: { type: String, required: true },
        cardNumber: { type: Number, required: true },
        expiry: { type: String, required: true },
        cvc: { type: Number, required: true },
        
    }
)
module.exports = mongoose.model('payment', PaymentInfo);