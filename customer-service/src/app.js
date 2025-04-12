const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/customerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/', customerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Customer Service running on port ${PORT}`);
});