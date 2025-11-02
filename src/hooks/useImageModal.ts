import { useState, useCallback, useEffect } from "react";

/**
 * useImageModal Hook
 * Manages fullscreen image modal state with single image or carousel support
 * Converts initImageModal() from new_index.html (lines 253-380)
 * 
 * @returns {object} Modal state and control functions
 */
export function useImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [mode, setMode] = useState<"single" | "carousel">("single");

  /**
   * Open modal with a single image
   */
  const openSingleImage = useCallback((imageSrc: string) => {
    setImages([imageSrc]);
    setMode("single");
    setIsOpen(true);
  }, []);

  /**
   * Open modal with carousel of images
   */
  const openCarousel = useCallback((imageArray: string[]) => {
    setImages(imageArray);
    setMode("carousel");
    setIsOpen(true);
  }, []);

  /**
   * Close modal
   */
  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Clear images after animation completes
    setTimeout(() => {
      setImages([]);
    }, 300);
  }, []);

  /**
   * Handle Escape key to close modal
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  return {
    isOpen,
    images,
    mode,
    openSingleImage,
    openCarousel,
    closeModal,
  };
}

