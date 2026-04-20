export default function ScrambleDisplay({ updatingMovements }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-gray-500 text-md">Movimentos:</span>
      {[10, 15, 20, 25].map((len, i) => (
        <button
          key={len}
          className={`px-3 py-1 rounded text-sm font-mono transition-all text-gray-900 font-bold hover:scale-105 hover:cursor-pointer active:scale-110 ${
            ["bg-red-400", "bg-amber-400", "bg-green-400", "bg-blue-400"][i]
          }`}
          onClick={() => updatingMovements(len)}
        >
          {len}
        </button>
      ))}
    </div>
  );
}
