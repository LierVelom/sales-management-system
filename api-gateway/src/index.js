const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the routes for the microservices
const productServiceUrl = 'http://product-service:3000';
const orderServiceUrl = 'http://order-service:3000';
const customerServiceUrl = 'http://customer-service:3000';

// Proxy middleware for Product Service
app.use('/products', createProxyMiddleware({ target: productServiceUrl, changeOrigin: true }));

// Proxy middleware for Order Service
app.use('/orders', createProxyMiddleware({ target: orderServiceUrl, changeOrigin: true }));

// Proxy middleware for Customer Service
app.use('/customers', createProxyMiddleware({ target: customerServiceUrl, changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});