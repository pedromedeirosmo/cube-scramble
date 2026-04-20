export default function ScrambleDisplay({ scramble, movements }) {
  return (
    <div className="w-full max-w-2xl bg-gray-900 rounded-xl p-4 mb-4 border border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-400 text-xs uppercase tracking-wider">
          Embaralhamento ({movements} Movimentos)
        </span>
      </div>
      {scramble.map((letra, index) => (
        <span key={index}>
          {letra}
          {index !== scramble.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
