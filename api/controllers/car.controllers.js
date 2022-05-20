import { Car } from "../models/index.js";

export const getAllCarsByUser = async (request, response) => {
  const { id: idCar } = request.params;
  try {
    const cars = await Car.find({ id_user: idCar });

    if (cars.length > 0) {
      response.status(200).json(cars);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e + "error de servidor" });
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
