const BASE_URL = "http://localhost:5000/api";

export const getPizzas = async () => {
  const res = await fetch(`${BASE_URL}/pizzas`);
  return res.json();
};

export const getIngredients = async () => {
  const res = await fetch(`${BASE_URL}/ingredients`);
  return res.json();
};

export const addToCart = async (item) => {
  await fetch(`${BASE_URL}/shoppingcart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });
};
