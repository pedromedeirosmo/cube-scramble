export default function NewScramble({ newScramble }) {
  return (
    <button
      onClick={newScramble}
      className="px-8 py-3 rounded-xl bg-linear-to-r from-amber-400 to-orange-400 text-gray-900 font-black text-sm tracking-widest uppercase hover:cursor-pointer hover:scale-105 transition-all shadow-xl shadow-amber-400/20"
    >
      Novo Embaralhamento
    </button>
  );
}
