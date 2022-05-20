import { Rent } from "../models/index.js";

export const getAllRent = async (request, response) => {
  try {
    const rents = await Rent.find();
    if (rents.length > 0) {
      response.status(200).json(rents);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e + "error de servidor" });
  }
};

export const createRent = async (req, res) => {
  const rent = req.body;
  try {
    const newRent = new Rent(rent);
    const rentNew = await newRent.save();
    if (rentNew) res.status(201).send(rentNew);
    else res.status(204).send("Error al crear");
  } catch (err) {
    res.status(500).send(err);
  }
};
