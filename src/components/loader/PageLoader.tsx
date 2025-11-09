"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * PageLoader Component
 * Displays a loading screen with spinner before the entire page loads
 * Automatically fades out when the page is ready
 */
export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Wait for the page to be fully loaded
    const handleLoad = () => {
      // Start fade out animation
      setFadeOut(true);
      
      // Remove loader after animation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Match this with CSS transition duration
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: theme === "dark" 
          ? "linear-gradient(135deg, #000000 0%, #0a0a0a 100%)" 
          : "linear-gradient(135deg, #fefffe 0%, #f8fdf8 100%)",
      }}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img
            src="/images/logo-updated.png"
            alt="Parvati's Lap"
            className="w-24 h-24 mx-auto mb-4"
            style={{ filter: theme === "dark" ? "brightness(1.2)" : "none" }}
          />
          <h1
            className="text-3xl md:text-4xl font-light tracking-widest"
            style={{
              color: theme === "dark" ? "#e6f4e6" : "#1a2e1a",
            }}
          >
            PARVATI'S LAP
          </h1>
          <p
            className="text-sm md:text-base font-light tracking-wide mt-2"
            style={{
              color: theme === "dark" ? "#9fb3a0" : "#4a6b4a",
            }}
          >
            Loading your Himalayan experience...
          </p>
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              border: `3px solid ${theme === "dark" ? "rgba(57, 255, 20, 0.2)" : "rgba(154, 173, 122, 0.2)"}`,
              borderTopColor: theme === "dark" ? "#39ff14" : "#808000",
            }}
          ></div>
        </div>

        {/* Optional: Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: theme === "dark" ? "#39ff14" : "#808000",
              animationDelay: "0ms",
            }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: theme === "dark" ? "#39ff14" : "#808000",
              animationDelay: "150ms",
            }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: theme === "dark" ? "#39ff14" : "#808000",
              animationDelay: "300ms",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}







