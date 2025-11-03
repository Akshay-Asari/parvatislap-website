"use client";

import { useAutoScrollGallery } from "@/hooks/useAutoScrollGallery";
import Image from "next/image";

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
   * For cloned images, use modulo to get the actual index
   */
  const handleImageClick = (index: number) => {
    if (onImageClick) {
      const actualIndex = index % images.length;
      onImageClick(images, actualIndex);
    }
  };

  if (images.length === 0) {
    return null;
  }

  // Render images twice for infinite loop effect
  const renderGalleryItems = (isClone: boolean = false) => {
    return images.map((image, index) => {
      const actualIndex = isClone ? index + images.length : index;
      return (
        <div
          key={`${image}-${actualIndex}`}
          className="gallery-item shrink-0 w-[400px] h-[300px] rounded-[20px] overflow-hidden relative cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_10px_30px_rgba(128,128,0,0.2)] border-[2px] border-[rgba(154,173,122,0.2)] 3xl:h-[36rem] 3xl:w-[46rem] zoomable-image"
          onClick={() => handleImageClick(actualIndex)}
          data-cloned={isClone ? "true" : undefined}
        >
          <Image
            src={image}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 320px, 400px"
          />
        </div>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className={`gallery-container relative ${className}`}
    >
      {/* Previous Button */}
      <button
        onClick={navigatePrev}
        className="gallery-nav gallery-prev 3xl:w-[99px] 3xl:h-[99px] 3xl:text-[3rem]"
        aria-label="Previous images"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={navigateNext}
        className="gallery-nav gallery-next 3xl:w-[99px] 3xl:h-[99px] 3xl:text-[3rem]"
        aria-label="Next images"
      >
        ›
      </button>

      {/* Gallery Track */}
      <div className="gallery-overflow">
        <div ref={trackRef} className="gallery-track">
          {/* Original images */}
          {renderGalleryItems(false)}
          {/* Cloned images for infinite loop */}
          {renderGalleryItems(true)}
        </div>
      </div>
    </div>
  );
}

