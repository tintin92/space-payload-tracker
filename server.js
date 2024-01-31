const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/spacePayloads", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.send("Space Payload Tracker API");
});

app.listen(PORT, () => 
    console.log(`Server is running on PORT: http://localhost:${PORT}`));


