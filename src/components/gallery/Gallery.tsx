"use client";

import { useAutoScrollGallery } from "@/hooks/useAutoScrollGallery";

/**
 * Gallery Component
 * Auto-scrolling image gallery with manual controls
 * Uses useAutoScrollGallery hook for continuous marquee effect
 * 
 * @param images - Array of image URLs to display
 * @param onImageClick - Callback when an image is clicked
 * @param scrollSpeed - Speed of auto-scroll (default: 0.6)
 * @param itemWidth - Width of each item + gap in pixels (default: 424)
 * @param className - Additional CSS classes
 */

interface GalleryProps {
  images: string[];
  onImageClick?: (images: string[], startIndex: number) => void;
  scrollSpeed?: number;
  itemWidth?: number;
  className?: string;
  alt?: string;
}

export function Gallery({
  images,
  onImageClick,
  scrollSpeed = 0.6,
  itemWidth = 424,
  className = "",
  alt = "Gallery image",
}: GalleryProps) {
  const { containerRef, trackRef, navigatePrev, navigateNext } =
    useAutoScrollGallery(scrollSpeed, itemWidth);

  /**
   * Handle image click - open modal with all images
   */
  const handleImageClick = (index: number) => {
    if (onImageClick) {
      onImageClick(images, index);
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`gallery-container relative ${className}`}
    >
      {/* Previous Button */}
      <button
        onClick={navigatePrev}
        className="gallery-prev"
        aria-label="Previous images"
      >
        ‹
      </button>

      {/* Gallery Track */}
      <div className="gallery-overflow">
        <div ref={trackRef} className="gallery-track">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="gallery-item zoomable-image"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`${alt} ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={navigateNext}
        className="gallery-next"
        aria-label="Next images"
      >
        ›
      </button>
    </div>
  );
}

