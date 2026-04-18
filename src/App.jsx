import Header from "./components/Header";
import ScrambleDisplay from "./components/ScrambleDisplay";
import Timer from "./components/Timer";
import ScrambleLenght from "./components/ScrambleLength";
import NewScramble from "./components/NewScramble";
import { useEffect, useState } from "react";

export default function App() {
  const [scramble, setScramble] = useState([]);
  const notation = [
    "U",
    "D",
    "R",
    "L",
    "F",
    "B",
    "U'",
    "D'",
    "R'",
    "L'",
    "F'",
    "B'",
    "U2",
    "D2",
    "R2",
    "L2",
    "F2",
    "B2",
  ];
  const [movements, setMoves] = useState(20);

  function updatingMovements(numberMovements) {
    setMoves(numberMovements);
  }

  const newScramble = (movements) => {
    const scrambling = [];
    while (scrambling.length < movements) {
      const randomNumber = Math.floor(Math.random() * 18);

      const ultimo = scrambling[scrambling.length - 1];

      // se não tem anterior, só adiciona
      if (!ultimo) {
        scrambling.push(notation[randomNumber]);
        continue;
      }

      if (
        ultimo.replace("'", "").replace("2", "") ===
        notation[randomNumber].replace("'", "").replace("2", "")
      ) {
        let newRandomNumber = Math.floor(Math.random() * 18);

        while (
          ultimo.replace("'", "").replace("2", "") ===
          notation[newRandomNumber].replace("'", "").replace("2", "")
        ) {
          newRandomNumber = Math.floor(Math.random() * 18);
        }

        scrambling.push(notation[newRandomNumber]);
      } else {
        scrambling.push(notation[randomNumber]);
      }
    }
    setScramble(scrambling);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    newScramble(movements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6"
      style={{ fontFamily: "'Courier New', monospace" }}
    >
      <Header />
      <Timer />
      <ScrambleDisplay scramble={scramble} movements={movements} />
      <ScrambleLenght updatingMovements={updatingMovements} />
      <NewScramble newScramble={newScramble} movements={movements} />
      <p className="text-gray-600 text-xs mt-8 hidden sm:block">
        Pressione ESPAÇO para iniciar/parar o timer
      </p>
      <p className="text-gray-600 text-xs mt-8 block sm:hidden">
        Pressione o CONTADOR para iniciar/parar o timer
      </p>
    </div>
  );
}
