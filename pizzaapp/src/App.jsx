import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import BuildPizza from "./pages/BuildPizza";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/build/:pizzaId" element={<BuildPizza />} />
      </Routes>
    </BrowserRouter>
  );
}
