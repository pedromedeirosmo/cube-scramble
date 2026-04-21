export default function BestTimes({ times, bestTime, openConfirm }) {
  if (times.length === 0) return null;

  return (
    <div className="text-center mb-5">
      <div className="w-fit max-h-54 overflow-auto bg-gray-900 rounded-xl p-4 border border-gray-800">
        <div className="text-center mb-2">
          <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            Tempos
          </span>
        </div>
        {bestTime !== null && (
          <div className="text-base sm:text-lg text-amber-400 mb-2 font-bold">
            MELHOR: {bestTime.toFixed(2).replace(".", ",")}
          </div>
        )}
        <div className="flex flex-col items-center gap-1 w-full">
          {times.map((time, index) => {
            return (
              <span
                key={index}
                className={`text-base sm:text-lg w-full flex items-center justify-between tabular-nums ${
                  time === bestTime
                    ? "text-green-400 font-bold bg-green-400/10 rounded px-1"
                    : "text-gray-300"
                }`}
              >
                <span>{time.toFixed(2).replace(".", ",")}</span>
                {bestTime !== null && time !== bestTime && (
                  <span className="text-gray-500 text-sm sm:text-base">
                    (+{(time - bestTime).toFixed(2).replace(".", ",")})
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
      <button
        onClick={openConfirm}
        className="mt-2 px-5 py-2 rounded-lg bg-red-400/10 text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-red-400/20 transition-all active:scale-95 hover:cursor-pointer hover:scale-105 border border-red-400/20"
      >
        Limpar Tempos
      </button>
    </div>
  );
}
