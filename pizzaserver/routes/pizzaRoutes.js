const express = require("express");
const Pizza = require("../models/Pizza");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
