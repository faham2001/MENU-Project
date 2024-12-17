const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');

require('dotenv').config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/menus', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
