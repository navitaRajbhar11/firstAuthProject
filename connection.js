const mongoose = require("mongoose");

async function connectMongoDb() {
  return mongoose
    .connect(
      "mongodb+srv://navita:(password)@cluster0.f1auc.mongodb.net/social?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
}
module.exports = connectMongoDb;
