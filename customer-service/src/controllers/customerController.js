const Customer = require('../models/customerModel');

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send(customer);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get a customer by ID
exports.getCustomer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).send();
        }
        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.send(customers);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!customer) {
            return res.status(404).send();
        }
        res.send(customer);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};