import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const res = await axios.get("http://localhost:5000/api/shoppingcart");
    setCart(res.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQty = async (pizzaId, action) => {
    await axios.put(`http://localhost:5000/api/shoppingcart/${pizzaId}`, {
      action
    });
    loadCart();
  };

  const removeItem = async (pizzaId) => {
    await axios.delete(`http://localhost:5000/api/shoppingcart/${pizzaId}`);
    loadCart();
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h3>🛒 Shopping Cart</h3>

      <table className="table table-bordered text-center align-middle mt-3">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Pizza</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="6">Cart is empty</td>
            </tr>
          ) : (
            cart.map(item => (
              <tr key={item.pizzaId}>
                <td><img src={item.image} width="70" /></td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => updateQty(item.pizzaId, "dec")}
                  >−</button>

                  <span className="mx-2">{item.quantity}</span>

                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => updateQty(item.pizzaId, "inc")}
                  >+</button>
                </td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.pizzaId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h4 className="text-end">
        Grand Total: <span className="text-success">₹{totalAmount}</span>
      </h4>
    </div>
  );
}
