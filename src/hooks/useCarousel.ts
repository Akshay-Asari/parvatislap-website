import { useState, useEffect, useCallback, useRef } from "react";

/**
 * useCarousel Hook
 * Manages image carousel with auto-scroll, navigation, and keyboard support
 * Converts initImageModal() carousel logic from new_index.html (lines 253-380)
 * 
 * @param images - Array of image URLs
 * @param autoScrollDelay - Auto-scroll interval in ms (default: 2500)
 * @returns {object} Carousel state and control functions
 */
export function useCarousel(images: string[], autoScrollDelay: number = 2500) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout>();
  const resumeTimeoutRef = useRef<NodeJS.Timeout>();

  /**
   * Navigate to next slide
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % images.length);
  }, [images.length]);

  /**
   * Navigate to previous slide
   */
  const prevSlide = useCallback(() => {
    setCurrentSlide((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  /**
   * Go to specific slide
   */
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  /**
   * Start auto-scroll
   */
  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setIsAutoScrolling(true);
    autoScrollIntervalRef.current = setInterval(nextSlide, autoScrollDelay);
  }, [nextSlide, autoScrollDelay]);

  /**
   * Stop auto-scroll
   */
  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = undefined;
    }
    setIsAutoScrolling(false);
  }, []);

  /**
   * Handle manual navigation (stops auto-scroll temporarily)
   */
  const handlePrev = useCallback(() => {
    stopAutoScroll();
    prevSlide();
    
    // Resume after 5 seconds
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(startAutoScroll, 5000);
  }, [stopAutoScroll, prevSlide, startAutoScroll]);

  const handleNext = useCallback(() => {
    stopAutoScroll();
    nextSlide();
    
    // Resume after 5 seconds
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(startAutoScroll, 5000);
  }, [stopAutoScroll, nextSlide, startAutoScroll]);

  /**
   * Handle keyboard navigation
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  /**
   * Start auto-scroll on mount
   */
  useEffect(() => {
    if (images.length > 1) {
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [images.length, startAutoScroll, stopAutoScroll]);

  /**
   * Reset slide when images change
   */
  useEffect(() => {
    setCurrentSlide(0);
  }, [images]);

  /**
   * Get prev, current, and next slide indices for display
   */
  const prevIndex = (currentSlide - 1 + images.length) % images.length;
  const nextIndex = (currentSlide + 1) % images.length;

  return {
    currentSlide,
    prevIndex,
    nextIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handlePrev,
    handleNext,
    isAutoScrolling,
    startAutoScroll,
    stopAutoScroll,
  };
}

