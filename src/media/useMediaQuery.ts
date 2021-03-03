import { useCallback, useEffect, useState } from "react";

/**
 * Return boolean value if match media query
 * @param mediaQuery Media query string
 */
export function useMediaQuery(mediaQuery: string) {
  const [matches, setMatches] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    const { matches } = matchMedia(mediaQuery);
    setMatches(matches);
  }, [mediaQuery]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return matches;
}
