"use client";
import {
  createContext,
  useContext,
  useState,
  startTransition,
  useEffect,
} from "react";
import { countries } from "@/lib/countries";
import { useCounter } from "@/hooks/useCounter";

export const AppContext = createContext();

export function Provider({ children }) {
  const [alphabet, setAlphabet] = useState("X");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const {
    count: counter,
    startTimer,
    stopTimer,
    pauseTimer,
    elapsed,
    clearElapsed
  } = useCounter();

  const setAlpha = (value) => {
    startTransition(() => {
      setAlphabet(value);
    });
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      startTransition(() => setSearchResult([]));
    } else {
      startTransition(() =>
        setSearchResult(
          countries.filter((country) =>
            country
              .toLowerCase()
              .trim()
              .includes(searchTerm.toLowerCase().trim())
          )
        )
      );
    }
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        alphabet,
        setAlpha,
        searchTerm,
        setSearchTerm,
        searchResult,
        counter,
        startTimer,
        stopTimer,
        pauseTimer,
        elapsed,
        clearElapsed
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
