import { Rent, Car, Rented } from "../models/index.js";
import mongoose from "mongoose";

export const createRented = async (req, res) => {
  const rented = req.body;
  console.log("rent", rented);
  const { id_rent: idRent } = rented;
  try {
    const newRented = new Rented(rented);
    newRented.id_user = new mongoose.Types.ObjectId();
    newRented.id_rent = new mongoose.Types.ObjectId();
    const rentedNew = await newRented.save();
    if (rentedNew) {
      //First search rent
      const rent = await Rent.findById(idRent);
      Rent.updateOne(rent, { status_rent: 0 }, (err, updateRent) => {});
      const { id_car: idCar } = rent;
      //seacch the car to update field status rent
      const car = await Car.findById(idCar);
      Car.updateOne(car, { status_rent: 2 }, (er, updateCar) => {
        res.status(201).send(rentedNew);
      });
    } else res.status(204).send("Error al crear");
  } catch (err) {
    res.status(500).send(err);
  }
};
