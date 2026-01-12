const express = require("express");
const Ingredient = require("../models/Ingredient");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
