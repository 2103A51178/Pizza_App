import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-dark px-4">
      <Link to="/">
        <img src="pizzeria-logo.png" width="50" />
      </Link>
          
      <div>
        <Link className="btn btn-dark text-white me-2" to="/menu">
          Order Pizza
        </Link>
        <Link className="btn btn-dark text-white me-2" to="/cart">
          ShoppingCart
        </Link>
      </div>
    </nav>
  );
}
