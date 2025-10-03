import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  function handleClick(id: number) {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === id ? {...item, quantity: item.quantity++} : item
      ),
    });
  }
  return (
    <div className="flex flex-col w-full min-h-screen items-center mt-5 bg-secondary">
      <button
        className="bg-blue-500 rounded-xl px-2 py-1 active:scale-95"
        onClick={() => handleClick(1)}>
        +
      </button>
    </div>
  );
}

export default App;
