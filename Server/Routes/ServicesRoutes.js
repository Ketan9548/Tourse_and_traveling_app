import express from "express";
import ServicesModels from "../Moduals/ServicesModel.js";

const Serviceapp = express();

Serviceapp.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newService = new ServicesModels(data);
    await newService.save();
    res.status(200).json({ message: "Services Added Succesfully" });
  } catch (error) {
    console.log("Service added error in database", error);
    res.status(400).json({ message: "Error in the add service in database" });
  }
});

Serviceapp.get("/alldata", async (req, res) => {
  try {
    const alldata = await ServicesModels.findAll();
    res.status(200).json(alldata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all data", error });
  }
});

export default Serviceapp;
