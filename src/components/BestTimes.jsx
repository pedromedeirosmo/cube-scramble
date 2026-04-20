export default function BestTimes({ times, bestTime }) {
  if (times.length === 0) return null;

  return (
    <div className="text-center mb-4">
      <div className="w-fit max-h-54 overflow-auto bg-gray-900 rounded-xl p-4 border border-gray-800">
        <div className="text-center mb-3">
          <span className="text-gray-400 text-sm uppercase tracking-wider">
            Tempos
          </span>
        </div>
        {bestTime !== null && (
          <div className="text-md text-amber-400 mb-2 font-bold">
            MELHOR: {bestTime.toFixed(2).replace(".", ",")}
          </div>
        )}
        <div className="flex flex-col items-center gap-1 w-full">
          {times.map((time, index) => {
            return (
              <span
                key={index}
                className={`text-md w-full flex items-center justify-between ${
                  time === bestTime
                    ? "text-green-400 font-bold"
                    : "text-gray-300"
                }`}
              >
                <span>{time.toFixed(2).replace(".", ",")}</span>
                {bestTime !== null && time !== bestTime && (
                  <span className="text-gray-500 text-sm">
                    (+{(time - bestTime).toFixed(2).replace(".", ",")})
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
      <button className="mt-2 px-4 py-2 rounded-lg bg-red-400/10 text-red-400 text-xs font-bold uppercase tracking-wider hover:bg-red-400/20 transition-all active:scale-95 border border-red-400/20">
        Limpar Tempos
      </button>
    </div>
  );
}
