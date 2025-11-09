"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * BookingWidget Component
 * Fixed position booking widget with glassmorphism effect
 * Features booking form and external booking link
 * Replica of new_index.html Booking Widget (lines 1549-1616)
 * Starts in minimized state by default
 */

// Google Analytics gtag type
type GtagFunction = (command: string, eventName: string, params: Record<string, string | number>) => void;

// Get booking URL from environment variable
const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://live.ipms247.com/booking/book-rooms-parvatislaphostelcamps";

export default function BookingWidget() {
  // Collapsed by default (minimized state)
  const [isCollapsed] = useState(true);

  /**
   * Track booking widget click for analytics
   */
  const handleBookingClick = () => {
    // Google Analytics tracking (if GA is configured)
    if (typeof window !== "undefined" && (window as unknown as { gtag?: GtagFunction }).gtag) {
      ((window as unknown as { gtag: GtagFunction }).gtag)("event", "booking_click", {
        event_category: "engagement",
        event_label: "booking_widget_header",
        value: 1,
      });
    }

    // Console log for development/debugging
    console.log("Booking widget clicked - redirecting to booking system");
  };

  /**
   * Track internal form submission for analytics
   */
  const handleFormBookingClick = () => {
    // Google Analytics tracking
    if (typeof window !== "undefined" && (window as unknown as { gtag?: GtagFunction }).gtag) {
      ((window as unknown as { gtag: GtagFunction }).gtag)("event", "booking_submit", {
        event_category: "conversion",
        event_label: "booking_widget_form",
        value: 1,
      });
    }

    console.log("Booking form submitted - redirecting to booking system");
  };

  return (
    <div
      id="booking-widget"
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-[-41px] [@media(min-width:2560px)]:right-[-152px] lg:transform-none w-11/12 ${
        isCollapsed ? "max-w-[12rem]" : ""
      } lg:w-85 rounded-3xl [@media(min-width:1536px)]:rounded-[5rem] z-40 overflow-hidden transition-all duration-300 shadow-2xl booking-glass [@media(min-width:2560px)]:max-w-[33rem] [@media(min-width:2560px)]:w-[33rem]`}
    >
      {/* Header - Always Visible */}
      <div
        id="booking-header"
        className="p-2 flex items-center justify-between relative booking-content-glass min-h-16 2xl:min-h-4xl cursor-pointer [@media(min-width:2560px)]:p-[1.5rem] [@media(min-width:2560px)]:min-h-[11rem]"
      >
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center flex-1 no-underline"
          onClick={handleBookingClick}
        >
          <div>
        <Image
          src="/images/BookNow3.png"
          alt="Book Now"
          width={59}
          height={59}
          className="inline w-[59px] h-[59px] [@media(min-width:2560px)]:w-[155px] [@media(min-width:2560px)]:h-[155px]"
          style={{
            filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.35))'
          }}
        />
          </div>
          <div>
            <h3 
              className="text-lg 2xl:text-[2rem] font-bold tracking-wide pb-2"
              style={{
                fontFamily: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: '#fbbf24',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.8)',
                letterSpacing: '0.05em'
              }}
            >
              Book Now
            </h3>
          </div>
        </a>
        
        {/* Minimize/Expand button - for future use
        To enable: uncomment this code and add setIsCollapsed to useState above
        <div>
          <button
            id="minimize-btn"
            onClick={(e) => {
              e.preventDefault();
              setIsCollapsed(!isCollapsed);
            }}
            className="absolute top-4 right-5 bg-white bg-opacity-10 backdrop-blur-10 border border-white border-opacity-20 px-2.5 py-1.5 2xl:px-3.5 2xl:py-3 2xl:rounded-xl 2xl:text-5xl 2xl:top-4 rounded-lg text-sm cursor-pointer font-semibold hover:bg-opacity-20 hover:scale-105 transition-all"
            aria-label={isCollapsed ? "Expand booking form" : "Collapse booking form"}
          >
            {isCollapsed ? "+" : "−"}
          </button>
        </div>
        */}
      </div>

      {/* Booking Form - Hidden when collapsed */}
      {!isCollapsed && (
        <div id="booking-content" className="p-6 max-h-96 overflow-auto">
          {/* Experience Type */}
          <div className="mb-4">
            <label
              htmlFor="experienceType"
              className="block text-xs text-muted mb-2 uppercase tracking-wide font-semibold"
            >
              Experience Type
            </label>
            <select
              id="experienceType"
              className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium transition-all focus:border-white focus:border-opacity-40 focus:bg-white focus:bg-opacity-15 focus:-translate-y-0.5"
            >
              <option>Hostel Stay</option>
              <option>Villa Stay</option>
            </select>
          </div>

          {/* Check-in / Check-out */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label
                htmlFor="checkin"
                className="block text-xs text-muted mb-2 uppercase tracking-wide font-semibold"
              >
                Check-in
              </label>
              <input
                id="checkin"
                type="date"
                className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium transition-all focus:border-white focus:border-opacity-40 focus:bg-white focus:bg-opacity-15 focus:-translate-y-0.5"
              />
            </div>
            <div>
              <label
                htmlFor="checkout"
                className="block text-xs text-muted mb-2 uppercase tracking-wide font-semibold"
              >
                Check-out
              </label>
              <input
                id="checkout"
                type="date"
                className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium transition-all focus:border-white focus:border-opacity-40 focus:bg-white focus:bg-opacity-15 focus:-translate-y-0.5"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="mb-4">
            <label
              htmlFor="guests"
              className="block text-xs text-muted mb-2 uppercase tracking-wide font-semibold"
            >
              Guests
            </label>
            <select
              id="guests"
              className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium transition-all focus:border-white focus:border-opacity-40 focus:bg-white focus:bg-opacity-15 focus:-translate-y-0.5"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
              <option>7 Guests</option>
              <option>8 Guests</option>
              <option>9 Guests</option>
              <option>10 Guests</option>
              <option>11 Guests</option>
              <option>12 Guests</option>
              <option>13 Guests</option>
              <option>14 Guests</option>
            </select>
          </div>

          {/* Book Now Button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFormBookingClick}
            className="w-full inline-block bg-gradient-to-r from-black to-gray-800 text-white border-0 px-4 py-3.5 rounded-xl text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg uppercase tracking-wide relative overflow-hidden text-center no-underline"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-20 to-transparent transform -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
            <span className="block text-[0.95em] text-yellow-300 font-normal relative z-10 mt-1">
              click here to book online
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
