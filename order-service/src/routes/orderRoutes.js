const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/orders', orderController.createOrder);

// Get an order by ID
router.get('/orders/:id', orderController.getOrder);

// Update an order by ID
router.put('/orders/:id', orderController.updateOrder);

// Delete an order by ID
router.delete('/orders/:id', orderController.cancelOrder);

// Get all orders
router.get('/orders', orderController.getAllOrders);

module.exports = router;