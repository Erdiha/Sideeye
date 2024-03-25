import { useEffect, useState } from "react";

export function useWindowSize() {
  const isSSR = typeof window === "undefined";

  const [size, setSize] = useState({
    width: isSSR ? 0 : window.innerWidth,
    height: isSSR ? 0 : window.innerHeight,
  });

  useEffect(() => {
    if (isSSR) return;

    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSSR]);

  return size;
}
