import express from "express";
import validate from "../utils/userValidate.js";
import BusinessModel from "../models/businessModel.js";
import joi from "joi";

const router = express.Router();

router.get("/", validate, async (req, res) => {
  res.send(await BusinessModel.findOne({ owner: req.user._id }));
});

router.post("/", validate, async (req, res) => {
  const schema = joi.schema({
    name: joi.string().required(),
    deacription: joi.string().required(),
    category: joi.number().required(),
  });

  try {
    const data = await schema.validateAsync(req.body);
    const business = new BusinessModel({
      ...data,
      owner: req.user._id,
    });

    await business.save();

    return res.status(200).send(business);
  } catch (err) {
    return res.status(500).send("Something went wrong");
  }
});

export default router;
