export default function ScrambleDisplay({ scramble, movements }) {
  return (
    <div className="w-fit bg-gray-900 rounded-xl p-4 mb-6 border border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
          Embaralhamento ({movements} Movimentos)
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto leading-relaxed">
        {scramble.map((letra, index) => (
          <span
            key={index}
            className="text-base sm:text-lg px-2.5 py-1.5 bg-gray-800/80 backdrop-blur rounded-lg font-semibold"
          >
            {letra}
          </span>
        ))}
      </div>
    </div>
  );
}
