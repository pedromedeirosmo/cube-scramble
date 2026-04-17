export default function ScrambleDisplay({ scramble }) {
  return (
    <div className="w-full max-w-2xl bg-gray-900 rounded-xl p-4 mb-6 border border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-400 text-xs uppercase tracking-wider">
          Embaralhamento
        </span>
      </div>
      {scramble.map((letra) => letra + ", ")}
    </div>
  );
}
