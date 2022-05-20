import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const carSchema = new Schema({
  model: String,
  mark: String,
  anio: String,
  seats: Number,
  description: String,
  id_user: String,
  status: Number,
  category: String,
  image: String,
});

const Car = mongoose.model("Car", carSchema, "cars");
export default Car;
