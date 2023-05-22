const colors = require('colors')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require("./routes/auth");

const app = express();
const port = 8080;
const { errorHandler } = require('./middleware/errorMiddleware');
const customerRoutes = require('./routes/customerRoutes');
const employeeRoutes = require("./routes/employeeRoutes");


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const colorz = require('colors')

const connectDB = require("./config/db")

// Error handler middleware
app.use(errorHandler);

// Routes
app.use('/api/users', require('./routes/userRoute'));
app.use('/api', customerRoutes);
app.use("/api", employeeRoutes);
app.use("/api/auth", authRouter);

// Connect to MongoDB
console.log(connectDB());

// connection established?
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})  
