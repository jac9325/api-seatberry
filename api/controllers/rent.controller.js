import { Rent, Car } from "../models/index.js";
import mongoose from "mongoose";

export const getAllRent = async (request, response) => {
  try {
    const rents = await Rent.find();
    if (rents.length > 0) {
      for (const rent of rents) {
        const { id_car } = rent;
        const carfind = await Car.findById(id_car);
        rent.aggregate(carfind);
        console.log(rent);
      }
      response.status(200).json(rents);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e + "error de servidor" });
  }
};

export const getAllRents2 = async (req, res) => {
  try {
    const resultado = await Rent.aggregate([
      {
        $lookup: {
          from: "cars",
          localField: "id_car",
          foreignField: "_id",
          as: "carRent",
        },
      },
      { $unwind: "$carRent" },
    ]);
    if (resultado) {
      res.status(200).json(resultado);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(204).send({ error: "no hay conexion con el servidor" });
  }
};
export const getRentbyId = async (req, res) => {
  const { id: idRent } = req.params;
  try {
    const resultado = await Rent.findById(idRent);
    if (resultado) {
      res.status(200).json(resultado);
    }
  } catch (error) {
    res.status(204).send({ error: "no hay conexion con el servidor" });
  }
};

export const getRentbyId2 = async (request, response) => {
  const { id: idRent } = request.params;
  try {
    const rent = await Rent.findById(idRent);
    if (rent) {
      response.status(200).json(rent);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e + "error de servidor" });
  }
};

export const createRent = async (req, res) => {
  const rent = req.body;
  console.log("rent", rent);
  const { id_car } = rent;
  //try {
  const newRent = new Rent(rent);
  newRent.id_user = new mongoose.Types.ObjectId();
  const rentNew = await newRent.save();
  if (rentNew) {
    //seacch the car to update field status rent
    const car = await Car.findById(id_car);
    Car.updateOne(car, { status_rent: 1 }, (err, updateCar) => {
      res.status(201).send(rentNew);
    });
  } else res.status(204).send("Error al crear");
  /*} catch (err) {
    res.status(500).send(err);
  }*/
};

export const updateRent = async (req, response) => {
  const { id: idRent } = req.params;
  const rentUpdate = req.body;
  const rent = await Rent.findById(idRent);
  try {
    Rent.updateOne(rent, rentUpdate, (error, updateRent) => {
      if (!error) {
        response.status(200).json(updateRent);
      } else response.status(500).send(error);
    });
  } catch (e) {
    response.status(500).send({ error: e });
  }
};

export const deleteRent = async (req, res) => {
  const { id: idRent } = req.params;
  try {
    const rent = await Rent.findById(idRent);
    console.log(rent);
    const { id_car } = rent;
    if (!rent) {
      response.status(204).json({ error: "No product to delete" });
    } else {
      const deletedRent = await Rent.deleteOne(rent);
      if (deletedRent) {
        const car = await Car.findById(id_car);
        Car.updateOne(car, { status_rent: 0 }, (err, updateCar) => {
          res.status(200).send(deletedRent);
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const cancelRent = async (req, res) => {
  const { id: idRent } = req.params;
  try {
    const rent = await Rent.findById(idRent);
    const { id_car } = rent;
    var actualizado = false;
    if (!rent) {
      response.status(204).json({ error: "No rent to cancel" });
    } else {
      Rent.updateOne(rent, { status: 0 }, (error, rentUpdate) => {
        if (rentUpdate) {
          const car = Car.findById(id_car);
          Car.updateOne(car, { status_rent: 0 }, (err, updateCar) => {
            res.status(200).send(rentUpdate);
          });
        } else {
          res.status(500).json();
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
