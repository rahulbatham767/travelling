import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide the username"], // Fixed typo: "provied" to "provide"
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide the email"], // Fixed typo: "provied" to "provide"
    unique: true,
    lowercase: true, // Optional: to ensure all emails are stored in lowercase
  },
  password: {
    type: String,
    required: [true, "Please provide the password"], // Fixed typo: "provied" to "provide"
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String, // Fixed typo: "veifyToken" to "verifyToken"
  verifyTokenExpiry: Date,
});

userSchema.methods.generatePasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.forgetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.forgetPasswordTokenExpiry = Date.now() + 3600000; // 1 hour
  return resetToken;
};

// Ensure the model is only created once
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
