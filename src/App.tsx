import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Peperoni",
    toppings: ["Mushroom"],
  });
  return (
    <div className="flex flex-col w-full min-h-screen items-center mt-5 bg-secondary">
      <h2>Player info</h2>
      <p> name: {pizza.name}</p>
      <p>toppings: </p>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button
        className="bg-blue-500 rounded-2xl px-2 py-1 active:scale-95"
        onClick={() => {
          setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
        }}>
        update your pizza
      </button>
    </div>
  );
}

export default App;
