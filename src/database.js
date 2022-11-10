import mongoose, { connect } from "mongoose";
import mongoConfig from "./config/mongo.config.js";

export async function connectDB() {
  await connect(mongoConfig.mongoUri).then(() => {
    console.log("Connected to:", mongoConfig.mongoUri);
  });
}
