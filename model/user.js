const mongoose = require("mongoose");
//schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // ✅ fixed
    },
    email: {
      type: String,
      required: true, // ✅ fixed
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // ✅ placed correctly
  {
    timestamps: true,
  }
);

//model
const userModel = mongoose.model("SoialMediaUser", userSchema);

module.exports = userModel;
