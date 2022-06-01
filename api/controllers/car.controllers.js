import { Car } from "../models/index.js";

export const getAllCarsByUser = async (request, response) => {
  try {
    const cars = await Car.find({ status_rent: 0 });

    if (cars.length > 0) {
      response.status(200).json(cars);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e + "error de servidor" });
  }
};

export const updateCar = async (req, response) => {
  const { id: idCar } = req.params;
  const carUpdate = req.body;
  const car = await Car.findById(idCar);
  try {
    Car.updateOne(car, carUpdate, (error, updateCar) => {
      if (!error) {
        response.status(200).json(updateCar);
      } else response.status(500).send(error);
    });
  } catch (e) {
    response.status(500).send({ error: e });
  }
};

export const createCar = async (req, res) => {
  const car = req.body;
  try {
    const newCar = new Car(car);
    const carnew = await newCar.save();
    if (carnew) res.status(201).send(carnew);
    else res.status(204).send("Error al crear");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const findCar = async (req, res, next) => {
  const { id: idCar } = req.params;
  try {
    const car = await Car.findById(idCar);
    if (car) {
      req.data = { car };
      next();
    } else {
      res.status(204).json({ error: "No found Car" });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const deleteCar = async (request, response) => {
  const { id: idCar } = request.params;
  try {
    const car = await Car.findById(idCar);
    if (!car) {
      response.status(204).json({ error: "No product to delete" });
    } else {
      const deletedCar = await Car.deleteOne(car);
      if (deletedCar) response.status(200).send(deletedCar);
    }
  } catch (error) {
    response.status(500).json({ error });
  }
};
