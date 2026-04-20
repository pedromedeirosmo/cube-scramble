export default function BestTimes({ times, bestTime }) {
  if (times.length === 0) return null;

  return (
    <div className="w-fit max-h-54 overflow-auto bg-gray-900 rounded-xl p-4 mb-4 border border-gray-800">
      <div className="text-center mb-3">
        <span className="text-gray-400 text-xs uppercase tracking-wider">
          Tempos
        </span>
      </div>
      {bestTime !== null && (
        <div className="text-sm text-amber-400 mb-2 font-bold">
          MELHOR: {bestTime.toFixed(2).replace(".", ",")}
        </div>
      )}
      <div className="flex flex-col items-center gap-1 w-full">
        {times.map((time, index) => {
          return (
            <span
              key={index}
              className={`text-sm w-full flex justify-between ${
                time === bestTime ? "text-green-400 font-bold" : "text-gray-300"
              }`}
            >
              <span>{time.toFixed(2).replace(".", ",")}</span>
              {bestTime !== null && time !== bestTime && (
                <span className="text-gray-500 text-xs">
                  (+{(time - bestTime).toFixed(2).replace(".", ",")})
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
