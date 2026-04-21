export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center gap-1 mb-3">
        {["R", "U", "B", "I", "K"].map((l, i) => (
          <span
            key={i}
            className={`text-5xl sm:text-6xl font-black px-1 ${
              [
                "text-red-400",
                "text-amber-400",
                "text-green-400",
                "text-blue-400",
                "text-orange-400",
              ][i]
            }`}
          >
            {l}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-sm sm:text-base tracking-widest uppercase">
        Embaralhador de Cubo Mágico
      </p>
    </div>
  );
}
