"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

/**
 * Theme Context
 * Manages light/dark mode state with localStorage persistence
 * Replaces the initThemeToggle() function from new_index.html
 */

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on client side
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update body classes and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;

    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // Remove both theme classes first
    htmlElement.classList.remove("theme-light", "theme-dark");
    bodyElement.classList.remove("theme-light", "theme-dark");

    // Add the active theme class
    const themeClass = `theme-${theme}`;
    htmlElement.classList.add(themeClass);
    bodyElement.classList.add(themeClass);

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Prevent flash of unstyled content by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

