const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

// Create a new customer
router.post('/customers', customerController.createCustomer);

// Get a customer by ID
router.get('/customers/:id', customerController.getCustomer);

// Update a customer by ID
router.put('/customers/:id', customerController.updateCustomer);

// Delete a customer by ID
router.delete('/customers/:id', customerController.deleteCustomer);

// Get all customers
router.get('/customers', customerController.getAllCustomers);

module.exports = router;