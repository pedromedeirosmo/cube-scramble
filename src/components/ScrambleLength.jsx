export default function ScrambleDisplay({ updatingMovements, newScramble }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
      <span className="text-gray-500 text-lg">Movimentos:</span>
      <div className="flex gap-2">
        {[10, 15, 20, 25, 30].map((len, i) => (
          <button
            key={len}
            className={`px-3 py-1 rounded text-sm sm:text-base font-mono transition-all text-gray-900 font-bold hover:scale-105 hover:cursor-pointer active:scale-95 ${
              [
                "bg-red-400",
                "bg-amber-400",
                "bg-green-400",
                "bg-blue-400",
                "bg-orange-400",
              ][i]
            }`}
            onClick={() => {
              updatingMovements(len);
              newScramble(len);
            }}
          >
            {len}
          </button>
        ))}
      </div>
    </div>
  );
}
