const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;