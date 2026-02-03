require("dotenv").config({
    path: "../.env"
});
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

console.log(process.env.MONGODB_URI);

const DB_NAME = "wanderlust";
 
// const MONGO_URL = `${process.env.MONGODB_URI}/${DB_NAME}`;

main()
.then(() => {
    console.log("Connected to db");
})
.catch((err) =>{
    console.log(err);
})
async function main() {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(process.env.MONGODB_URI);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66f19576848dd0e39cb180bd"}))
    await Listing.insertMany(initData.data);
    console.log("data was initilized");
}

initDB();
