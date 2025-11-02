"use client";

import { useBookingWidget } from "@/hooks/useBookingWidget";

/**
 * BookingWidget Component
 * Glassmorphism booking widget with expand/collapse functionality
 * Extracted from new_index.html booking widget section (lines 1549-1616)
 * 
 * Features:
 * - Fixed position with glassmorphism effect
 * - Expandable form (currently kept collapsed for cleaner UX)
 * - Direct link to external booking system
 * - Analytics tracking on book button clicks
 */

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-parvatislaphostelcamps";

export default function BookingWidget() {
  const { isCollapsed, toggle } = useBookingWidget(true);

  /**
   * Track booking widget click for analytics
   */
  const handleBookingClick = () => {
    // Google Analytics tracking (if GA is configured)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "booking_click", {
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
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "booking_submit", {
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
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 lg:transform-none w-11/12 max-w-[12rem] lg:w-85 rounded-3xl 2xl:rounded-[4rem] z-40 overflow-hidden transition-all duration-300 shadow-2xl booking-glass [@media(min-width:2560px)]:max-w-[33rem] ${
        isCollapsed ? "" : "max-w-[24rem]"
      }`}
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
            <img
              src="/images/BookNow3.png"
              alt="Book Now"
              className="icon-img w-[59px] h-[59px] [@media(min-width:2560px)]:w-[155px] [@media(min-width:2560px)]:h-[155px]"
            />
          </div>
          <div>
            <h3
              className="text-lg 2xl:text-[2.25rem] font-black tracking-tight text-yellow-400"
              style={{ paddingBottom: "8px", WebkitTextStroke: "1px #000000" }}
            >
              Book Now
            </h3>
          </div>
        </a>

        {/* Minimize/Expand Button - Future use */}
        {/* Uncomment if you want to enable expand/collapse functionality */}
        {/*
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
            className="absolute top-4 right-5 bg-white bg-opacity-10 backdrop-blur-10 border border-white border-opacity-20 px-2.5 py-1.5 2xl:px-3.5 2xl:py-3 2xl:rounded-xl 2xl:text-5xl 2xl:top-4 rounded-lg text-sm cursor-pointer font-semibold hover:bg-opacity-20 hover:scale-105 transition-all"
            aria-label={isCollapsed ? "Expand booking form" : "Collapse booking form"}
          >
            {isCollapsed ? "+" : "−"}
          </button>
        </div>
        */}
      </div>

      {/* Booking Form - Expandable (currently hidden by default) */}
      {!isCollapsed && (
        <div
          id="booking-content"
          className="p-6 max-h-96 overflow-auto"
        >
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
