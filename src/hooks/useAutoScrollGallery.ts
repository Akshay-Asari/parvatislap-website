import { useEffect, useRef, useCallback } from "react";

/**
 * useAutoScrollGallery Hook
 * Implements continuous auto-scrolling gallery with cloned items for seamless looping
 * Converts initGalleryNavigation() from new_index.html (lines 141-215)
 * 
 * @param scrollSpeed - Speed of auto-scroll in pixels per frame (default: 0.6)
 * @param itemWidth - Width of gallery item + gap in pixels (default: 424)
 * @returns {object} Refs and control functions for gallery
 */
export function useAutoScrollGallery(scrollSpeed: number = 0.6, itemWidth: number = 424) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const isScrollingRef = useRef(true);
  const animationIdRef = useRef<number>();
  const resumeTimeoutRef = useRef<NodeJS.Timeout>();

  /**
   * Clone all gallery items for seamless infinite loop
   */
  const cloneItems = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // Get original items (non-cloned)
    const originalItems = Array.from(track.children).filter(
      (child) => !child.hasAttribute("data-cloned")
    );

    // Clone and append items
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("data-cloned", "true");
      track.appendChild(clone);
    });
  }, []);

  /**
   * Continuous scroll animation
   */
  const continuousScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || !isScrollingRef.current) return;

    scrollPositionRef.current += scrollSpeed;
    const trackWidth = track.scrollWidth / 2; // Half because we cloned items

    // Reset position when reaching end
    if (scrollPositionRef.current >= trackWidth) {
      scrollPositionRef.current = 0;
    }

    track.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    track.style.transition = "none";

    animationIdRef.current = requestAnimationFrame(continuousScroll);
  }, [scrollSpeed]);

  /**
   * Stop auto-scrolling
   */
  const stopScroll = useCallback(() => {
    isScrollingRef.current = false;
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
  }, []);

  /**
   * Start auto-scrolling
   */
  const startScroll = useCallback(() => {
    isScrollingRef.current = true;
    continuousScroll();
  }, [continuousScroll]);

  /**
   * Navigate to previous item
   */
  const navigatePrev = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    stopScroll();
    scrollPositionRef.current = Math.max(0, scrollPositionRef.current - itemWidth);
    track.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    track.style.transition = "transform 0.4s ease";

    // Resume auto-scroll after 3 seconds
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(startScroll, 3000);
  }, [itemWidth, stopScroll, startScroll]);

  /**
   * Navigate to next item
   */
  const navigateNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    stopScroll();
    scrollPositionRef.current += itemWidth;
    track.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    track.style.transition = "transform 0.4s ease";

    // Resume auto-scroll after 3 seconds
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(startScroll, 3000);
  }, [itemWidth, stopScroll, startScroll]);

  /**
   * Initialize gallery on mount
   */
  useEffect(() => {
    cloneItems();
    startScroll();

    const container = containerRef.current;
    if (container) {
      // Pause on hover
      container.addEventListener("mouseenter", stopScroll);
      container.addEventListener("mouseleave", startScroll);
    }

    // Cleanup
    return () => {
      stopScroll();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      if (container) {
        container.removeEventListener("mouseenter", stopScroll);
        container.removeEventListener("mouseleave", startScroll);
      }
    };
  }, [cloneItems, startScroll, stopScroll]);

  return {
    containerRef,
    trackRef,
    navigatePrev,
    navigateNext,
  };
}

