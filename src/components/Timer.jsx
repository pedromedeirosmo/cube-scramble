export default function Timer() {
  return (
    <div className="flex gap-5 mb-5">
      <div className="bg-amber-400 w-fit h-fit p-3.5 rounded-full">
        <img
          src="src\assets\left-hand.png"
          alt="left hand"
          className="size-20"
        />
      </div>

      <div className="text-6xl font-bold leading-none">0.00</div>
      <div className="bg-amber-400 w-fit h-fit p-3.5 rounded-full">
        <img
          src="src\assets\right-hand.png"
          alt="right hand"
          className="size-20"
        />
      </div>
    </div>
  );
}
