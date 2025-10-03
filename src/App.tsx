import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "abc",
      age: 12,
    },
  });
  return (
    <div className="flex flex-col w-full min-h-screen items-center mt-5 bg-secondary">
      <h2>Player info</h2>
      <p> age: {game.player.age}</p>
      <p>name: {game.player.name}</p>
      <button
      className="bg-blue-500 rounded-2xl px-2 py-1 active:scale-95"
        onClick={() => {
          const newgame = {
            ...game,
            player: { ...game.player, name: prompt("enter your name")|| game.player.name },
          };
          setGame(newgame);
        }}>
        update your name
      </button>
    </div>
  );
}

export default App;
