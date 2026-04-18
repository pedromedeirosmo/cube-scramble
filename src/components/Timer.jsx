import { useEffect, useState } from "react";

export default function Timer() {
  const [gettingReady, setGettingReady] = useState({
    notPressing: true,
    preparing: false,
    ready: false,
  });
  const [timer, setTimer] = useState((0.0).toFixed(2));

  useEffect(() => {
    let timeout;

    function handleKeyDown(e) {
      if (e.code === "Space" && !e.repeat) {
        // virou vermelho
        setGettingReady({ notPressing: false, preparing: true, ready: false });

        // depois de 1s vira verde
        timeout = setTimeout(() => {
          setGettingReady({
            notPressing: false,
            preparing: false,
            ready: true,
          });
        }, 1000);
      }
    }

    function handleKeyUp(e) {
      if (e.code === "Space") {
        clearTimeout(timeout); // cancela se soltar antes

        setGettingReady({ notPressing: true, preparing: false, ready: false });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  function bgColor() {
    if (gettingReady.notPressing === true) {
      return "bg-amber-400";
    } else if (gettingReady.preparing === true) {
      return "bg-red-700";
    } else if (gettingReady.ready === true) {
      return "bg-green-800";
    }
  }

  return (
    <div className="flex items-center justify-center mb-5 w-full max-w-md">
      <div
        className={`hidden sm:flex w-fit h-fit p-3.5 rounded-full ${bgColor()}`}
      >
        <img src="/left-hand.png" alt="left hand" className="size-20" />
      </div>
      <div className="text-6xl leading-none font-[Digital] text-center flex-1">
        {timer}
      </div>
      <div
        className={`hidden sm:flex w-fit h-fit p-3.5 rounded-full ${bgColor()}`}
      >
        <img src="/right-hand.png" alt="right hand" className="size-20" />
      </div>
    </div>
  );
}
