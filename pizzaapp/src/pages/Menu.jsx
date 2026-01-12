import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pizzas")
      .then(res => setPizzas(res.data));
  }, []);

  const addToCart = async (p) => {
    await axios.post("http://localhost:5000/api/shoppingcart/add", {
      pizzaId: p.id,
      name: p.name,
      price: p.price,
      image: p.image
    });
    alert(`${p.name} added to cart`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map(p => (
          <div className="col-md-4" key={p.id}>
            <div className="card mb-3">
              <img src={p.image} className="card-img-top" />
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>₹{p.price}</p>

                <button
                  className="btn btn-success me-2"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>

                <Link
                  to={`/build/${p.id}`}
                  className="btn btn-warning"
                >
                  Customize
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
