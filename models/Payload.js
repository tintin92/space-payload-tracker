const mongoose = require("mongoose");

const PayloadSchema = mongoose.Schema({
    company: String,
    name: String,
    description: String,
    weight: Number,
    country: String,
    launchLation: String,
    launchDate: Date,
});

module.exports = mongoose.model("Payload", PayloadSchema);