import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-xc27rvh-shard-00-00.0uqd2i2.mongodb.net:27017,ac-xc27rvh-shard-00-01.0uqd2i2.mongodb.net:27017,ac-xc27rvh-shard-00-02.0uqd2i2.mongodb.net:27017/?ssl=true&replicaSet=atlas-41trog-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error connecting to the database", error.message);
  }
};

export default Connection;
