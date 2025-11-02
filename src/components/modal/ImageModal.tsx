"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { useEffect } from "react";

/**
 * ImageModal Component
 * Fullscreen image modal with carousel support
 * Extracted from new_index.html modal section (lines 2306-2315)
 * 
 * @param isOpen - Whether the modal is open
 * @param images - Array of image URLs
 * @param mode - Display mode: "single" or "carousel"
 * @param onClose - Callback to close the modal
 */

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  mode: "single" | "carousel";
  onClose: () => void;
}

export function ImageModal({ isOpen, images, mode, onClose }: ImageModalProps) {
  const carousel = useCarousel(images, 2500);

  /**
   * Handle click on modal backdrop to close
   */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  /**
   * Prevent body scroll when modal is open
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className={`image-modal ${isOpen ? "active" : ""}`}
      id="imageModal"
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        className="close-modal"
        id="closeImageModal"
        onClick={onClose}
        aria-label="Close image"
      >
        ×
      </button>

      {/* Single Image Mode */}
      {mode === "single" && (
        <img
          className="modal-image"
          id="modalImage"
          src={images[0]}
          alt="Full size view"
        />
      )}

      {/* Carousel Mode */}
      {mode === "carousel" && (
        <div id="carouselContainer" className="carousel-container">
          {/* Previous Button */}
          <button
            className="carousel-nav carousel-nav-prev"
            id="carouselPrev"
            onClick={(e) => {
              e.stopPropagation();
              carousel.handlePrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Carousel Track */}
          <div id="carouselTrack" className="carousel-track">
            {images.map((image, index) => {
              let slideClass = "carousel-slide";
              
              if (index === carousel.prevIndex) {
                slideClass += " carousel-slide-prev";
              } else if (index === carousel.currentSlide) {
                slideClass += " carousel-slide-active";
              } else if (index === carousel.nextIndex) {
                slideClass += " carousel-slide-next";
              }

              return (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={slideClass}
                />
              );
            })}
          </div>

          {/* Next Button */}
          <button
            className="carousel-nav carousel-nav-next"
            id="carouselNext"
            onClick={(e) => {
              e.stopPropagation();
              carousel.handleNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Slide Indicators */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${
                  index === carousel.currentSlide ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  carousel.goToSlide(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

