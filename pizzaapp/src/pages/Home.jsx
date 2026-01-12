export default function Home() {
  return (
    <div className="container mt-4">

      
      <div className="text-center mb-5">
        <img
          src="https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg"
          alt="Pizza Logo"
          style={{ width: "200px", cursor: "pointer" }}
        />
        <h1 className="mt-3">Welcome to Pizzeria 🍕</h1>
        <p className="text-muted">
          Freshly baked pizzas, custom ingredients, and delicious flavors made just for you.
        </p>
      </div>

     

    
      <div className="row text-center">
        <div className="col-md-4">
          <h4>🍕 Pizza Menu</h4>
          <p>
            Choose from a wide variety of veg and non-veg pizzas prepared by expert chefs.
          </p>
        </div>

        <div className="col-md-4">
          <h4>Customize Your Pizza</h4>
          <p>
            Select your favorite ingredients and toppings add them to your pizza.
          </p>
        </div>

        <div className="col-md-4">
          <h4>Delivery Time</h4>
          <p>
            Estimated delivery time is 30-45 minutes.
          </p>
        </div>
      </div>

    </div>
  );
}
