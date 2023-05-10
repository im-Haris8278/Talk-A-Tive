const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const DB_URI =
    "mongodb://Haris:seeker47@ac-xr6aooe-shard-00-00.ig4lwir.mongodb.net:27017,ac-xr6aooe-shard-00-01.ig4lwir.mongodb.net:27017,ac-xr6aooe-shard-00-02.ig4lwir.mongodb.net:27017/MERN_CHAT-APP?ssl=true&replicaSet=atlas-13y7tm-shard-0&authSource=admin&retryWrites=true&w=majority";

  try {
    const conn = await mongoose.connect(DB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
