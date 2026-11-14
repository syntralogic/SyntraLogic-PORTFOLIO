import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

// Keeps the browser UI colour (mobile address bar) in sync with the active theme.
function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", resolvedTheme === "light" ? "#FBFAF6" : "#0B0B0B");
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="syntralogic-theme"
      disableTransitionOnChange
    >
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}
