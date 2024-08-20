import mongoose from "mongoose";

const connectToDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(`Database Connected ✔`.yellow.bold));
};

export default connectToDB;
