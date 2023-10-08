import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

export default () => {
  if (mongoURI) {
    mongoose
      .connect(mongoURI)
      .then(() => console.log("connected to mongoDB"))
      .catch((e) => console.log(`failed to connect to mongoDB, error: ${e}`));
  } else {
    console.log("failed to connect to mongoDB");
  }
};
