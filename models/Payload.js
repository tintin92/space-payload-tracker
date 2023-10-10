const mongoose = require("mongoose");

const PayloadSchema = mongoose.Schema({
    name: String,
    description: String,
    weight: Number,
    company: String,
    country: String,
    launchDate: Date,
});

module.exports = mongoose.model("Payload", PayloadSchema);