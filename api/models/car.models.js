import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const carSchema = new Schema({
  model: String,
  mark: String,
  year: Number,
  seats: Number,
  description: String,
  id_user: String,
  status: Number,
  category: String,
  image: String,
  type: String,
  status_rent: String,
});

const Car = mongoose.model("Car", carSchema, "cars");
export default Car;
