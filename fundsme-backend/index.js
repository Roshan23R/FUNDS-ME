const express = require('express');
const mongoose = require('mongoose');
const smeRoutes = require("./routes/sme");
const dotenv = require('dotenv').config();
// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
require("./db/config");
app.use("/sme", smeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
