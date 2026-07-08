import { useCallback } from "react";

export function useScrollTo() {
  const scrollTo = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const navHeight = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return scrollTo;
}
