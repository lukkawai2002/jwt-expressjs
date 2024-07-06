const express = require('express');
const baseRoute = require('./routes/base.route');
const receiptRoute = require('./routes/receipt.route');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwtAuth = require('./middlewares/jwt.middleware');

const app = express();

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', baseRoute);
app.use('/api/receipt', jwtAuth, receiptRoute);

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@jwtapi.qpxeobz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=JWTAPI')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch(() => {
        console.log('Error connecting to MongoDB');
    });


