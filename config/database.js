const mongoose = require('mongoose');


//need to be set from user
const connectionString = require('../connectionString');


module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected!');
    } catch (err) {
        console.error('Error initializng database');
        console.error(err.message);
        process.exit(1)
    }
}