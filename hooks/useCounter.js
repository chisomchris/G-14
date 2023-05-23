import { useState, useRef, useId, useEffect } from "react";

export const useCounter = (limit = 5) => {
  const counterRef = useRef(useId());
  const [count, setCount] = useState(0);
  const [isLimit, setIsLimit] = useState(false);

  const startTimer = () => {
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(counterRef.current);
    setCount(0);
  };

  const pauseTimer = () => {
    clearInterval(counterRef.current);
  };

  const clearElapsed = () => {
    setIsLimit(false);
  };

  useEffect(() => {
    if (count === limit || count > limit) {
      setIsLimit(true);
    }
  }, [count, limit]);

  return {
    count,
    startTimer,
    stopTimer,
    pauseTimer,
    elapsed: isLimit,
    clearElapsed,
  };
};
