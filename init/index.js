const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
if(process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
    // console.log("MongoDB Connection String:", process.env.ATLASDB_URL); // Debugging
}
// Database Connection
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = "mongodb+srv://SkTheMongo:3vq31gcwHfgp5YG7@cluster0.46ca8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
}

async function initDb() {
    try {
        await Listing.deleteMany({});
        const modifiedData = initData.data.map((obj)=> ({...obj,owner:"67cb322897574447e56bac3d"}));
        await Listing.insertMany( modifiedData);
        console.log("Database initialized with hotel data");
    } catch (err) {
        console.error("Error initializing database:", err);
    } finally {
        mongoose.connection.close(); // Close the connection after seeding
    }
}

main()
    .then(() => initDb())
    .catch((err) => console.error(err))

