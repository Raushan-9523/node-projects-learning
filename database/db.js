require("dotenv").config();
const monngoose = require("mongoose");

const connectDB = async () => {
  try {
    await monngoose.connect(process.env.MONGODB_URL);
    console.log("mongodb is connected successfully !");
  } catch (err) {
    console.error("Mongodb connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
