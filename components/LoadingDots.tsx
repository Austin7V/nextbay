"use client";

import { useEffect, useState } from "react";

export function LoadingDots() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((currentDots) => {
        if (currentDots === ".") {
          return "..";
        }

        if (currentDots === "..") {
          return "...";
        }

        return ".";
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{dots}</span>;
}
