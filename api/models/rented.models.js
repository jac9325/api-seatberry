import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const rentedSchema = new Schema({
  id_rent: {
    type: mongoose.Types.ObjectId,
    required: [true, ""],
  },
  start_date: {
    type: Date,
    required: [true, ""],
  },
  end_date: {
    type: Date,
    required: [true, ""],
  },
  cost: {
    type: Number,
    required: [true, "Please, enter a max days of the rent this car"],
  },
  extra_cost: {
    type: Number,
    set: function (v) {
      return Math.round(v, 2);
    },
  },
  time: {
    type: Number,
    required: [true, ""],
  },
  observation: {
    type: String,
    required: [true, "Introduzca las observaciones"],
  },
  description: {
    type: String,
    required: [true, ""],
  },
  status: {
    type: Number,
    required: [true, ""],
  },
  id_user: {
    type: mongoose.Types.ObjectId,
    required: [true, ""],
  },
});

const Rented = mongoose.model("Rented", rentedSchema, "rented");
export default Rented;
