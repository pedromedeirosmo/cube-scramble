import { useEffect, useRef, useState } from "react";

export default function Timer({ saveBestTime }) {
  const [status, setStatus] = useState("idle");
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const timeoutRef = useRef(null);

  function startPress() {
    if (running) {
      // parar timer
      setRunning(false);
      return;
    }
    setStatus("preparing");

    // depois de 1s vira verde
    timeoutRef.current = setTimeout(() => {
      setStatus("ready");
    }, 500);
  }

  function endPress() {
    clearTimeout(timeoutRef.current); // cancela se soltar antes
    if (status === "ready") {
      setRunning(true);
      setTimer(0);
      setStatus("idle");
    } else {
      setStatus("idle");
    }
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Space" && !e.repeat) {
        startPress();
      }
    }

    function handleKeyUp(e) {
      if (e.code === "Space") {
        endPress();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, running]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (!running && timer > 0) {
      saveBestTime(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, timer]);

  function bgColor() {
    if (status === "idle") return "bg-amber-400";
    if (status === "preparing") return "bg-red-700";
    if (status === "ready") return "bg-green-800";
  }
  function textColor() {
    if (status === "idle") return "text-white";
    if (status === "preparing") return "text-red-700";
    if (status === "ready") return "text-green-800";
  }

  const minutes = Math.floor(timer / 60000);
  const seconds = Math.floor((timer % 60000) / 1000);

  // milissegundos → 1 ou 2 casas dependendo do estado
  const decimals = running
    ? Math.floor((timer % 1000) / 100) // 1 dígito (décimos)
    : Math.floor((timer % 1000) / 10); // 2 dígitos (centésimos)

  const formattedTime = running
    ? `${minutes}:${String(seconds).padStart(2, "0")},${decimals}`
    : `${minutes}:${String(seconds).padStart(2, "0")},${String(decimals).padStart(2, "0")}`;

  return (
    <div
      className="flex items-center justify-center mb-5 w-full max-w-md"
      onTouchStart={(e) => {
        e.preventDefault();
        startPress();
      }}
      onTouchEnd={endPress}
    >
      <div
        className={`hidden sm:flex w-fit h-fit p-3.5 rounded-full ${bgColor()}`}
      >
        <img src="/left-hand.png" alt="left hand" className="size-20" />
      </div>
      <div className="text-center flex-1">
        <div
          className={`text-9xl text-50 sm:text-7xl text- leading-none font-[Digital] sm:text-white ${textColor()} select-none`}
        >
          {formattedTime}
        </div>
      </div>

      <div
        className={`hidden sm:flex w-fit h-fit p-3.5 rounded-full ${bgColor()}`}
      >
        <img src="/right-hand.png" alt="right hand" className="size-20" />
      </div>
    </div>
  );
}
