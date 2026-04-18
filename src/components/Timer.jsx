export default function Timer() {
  return (
    <div className="flex items-center justify-center mb-5 w-full max-w-md">
      <div className="hidden sm:flex bg-amber-400 w-fit h-fit p-3.5 rounded-full">
        <img src="/left-hand.png" alt="left hand" className="size-20" />
      </div>

      <div className="text-6xl leading-none font-[Digital] text-center flex-1">
        0.00
      </div>
      <div className="hidden sm:flex bg-amber-400 w-fit h-fit p-3.5 rounded-full">
        <img src="/right-hand.png" alt="right hand" className="size-20" />
      </div>
    </div>
  );
}
