const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGO_CONNECTION,
            { useNewUrlParser: true }
        );
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    };
};

module.exports = { connect };