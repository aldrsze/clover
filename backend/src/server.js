const express = require('express');
const cors = require('cors');
const db = require('./config/db')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend API running on port ${PORT}`));