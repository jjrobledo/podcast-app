const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({path: path.resolve(__dirname, "../.env")});

const MONGO_URI = process.env.MONGO_URI;

mongoose.connection.once("open", () => {
    console.log("➡️ Connected to MongoDb 🖥️.");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})

async function mongoConnect() {
    await mongoose.connect(MONGO_URI);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}