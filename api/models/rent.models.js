import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const rentSchema = new Schema({
  id_user: {
    type: String,
    required: [true, ""],
  },
  max_days: {
    type: Number,
    required: [true, "Please, enter a max days of the rent this car"],
  },
  cost_day: {
    type: Number,
    set: function (v) {
      return Math.round(v, 2);
    },
  },
  date: {
    type: Date,
    required: [true, ""],
  },
  id_user: {
    type: String,
    required: [true, ""],
  },
  description: {
    type: String,
    required: [true, ""],
  },
  observation: {
    type: String,
    required: [true, ""],
  },
  rating: { type: Number },
  status: { type: Number },
});

const Rent = mongoose.model("Rent", rentSchema, "rent");
export default Rent;
