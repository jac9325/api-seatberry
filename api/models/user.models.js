import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, enter a name"],
  },
  document: {
    type: String,
    required: [true, "Please, enter a document"],
  },
  email: {
    type: String,
    required: [true, "Please, enter a email"],
  },
  password: {
    type: String,
    required: [true, "Please, enter a password"],
  },
  role: { type: String },
  status: { type: Number },
});

const User = mongoose.model("User", userSchema, "users");
export default User;
