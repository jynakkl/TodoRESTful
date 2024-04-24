import mongoose from "mongoose";

const connectMongoDB = (url) => {
    mongoose.connect(url)
    .then(() => console.log("MongoDB connection successful"))
    .catch((error) => console.log(error.message));
}

export default connectMongoDB;