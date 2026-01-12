const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/PizzariaDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/ingredients", require("./routes/ingredientRoutes"));
app.use("/api/shoppingcart", require("./routes/cartRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
