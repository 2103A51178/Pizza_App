import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BuildPizza() {
  const { pizzaId } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pizzas")
      .then(res => {
        const p = res.data.find(x => x.id === pizzaId);
        setPizza(p);
        setTotal(p.price); 
      });

    
    axios.get("http://localhost:5000/api/ingredients")
      .then(res => setIngredients(res.data));
  }, [pizzaId]);

  const handleCheckbox = (ing, isChecked) => {
    if (isChecked) {
      setSelected(prev => [...prev, ing]);
      setTotal(prev => prev + ing.price);
    } else {
      setSelected(prev => prev.filter(i => i.id !== ing.id));
      setTotal(prev => prev - ing.price);
    }
  };

  const addCustomizedPizza = async () => {
    if (!pizza) return;

    try {
      await axios.post("http://localhost:5000/api/shoppingcart/add", {
        pizzaId: `${pizza.id}-custom-${Date.now()}`, 
        name: `${pizza.name} (Customized)`,
        price: total,
        image: pizza.image,
        ingredients: selected.map(i => i.tname) 
      });

      alert("Customized pizza added to cart");
      navigate("/cart"); 
    } catch (err) {
      console.error("Add to cart failed", err);
      alert("Failed to add pizza to cart");
    }
  };

  if (!pizza) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-4">
      <h3>Customize {pizza.name}</h3>
      <img src={pizza.image} width="200" className="mb-3" />

      <h5>Select Ingredients</h5>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Select</th>
            <th>Image</th>
            <th>Ingredient</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(ing => (
            <tr key={ing.id}>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={selected.some(i => i.id === ing.id)}
                  onChange={e => handleCheckbox(ing, e.target.checked)}
                />
              </td>
              <td className="text-center">
                <img src={ing.image} width="50" height="50" alt={ing.tname} />
              </td>
              <td>{ing.tname}</td>
              <td>₹{ing.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Total Price: ₹{total}</h4>

      <button className="btn btn-success mt-3" onClick={addCustomizedPizza}>
        Add Customized Pizza to Cart
      </button>
    </div>
  );
}
