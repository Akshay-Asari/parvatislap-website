"use client";

/**
 * SiteHeader Component
 * Main navigation with mobile drawer menu and theme toggle
 * Extracted from new_index.html navigation section (lines 1480-1547)
 */
export function SiteHeader() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 2xl:h-40 flex items-center z-50 glass-bg border-b border-theme">
        <div className="w-full px-2 sm:px-6 lg:px-6 xl:px-8 2xl:px-10 flex items-center justify-between lg:justify-between">
          {/* Mobile Hamburger Button - Left Side */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg flex-shrink-0 transition-all order-1"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Logo - Center on Mobile, Left on Desktop */}
          <div className="flex items-center gap-2 flex-shrink-0 order-2 lg:order-1 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
            <a
              href="#home"
              className="flex items-center font-light text-xl sm:text-2xl tracking-widest no-underline text-olive-green flex-shrink-0"
            >
              <img
                src="/images/logo-updated.png"
                alt="Parvati's Lap Logo"
                className="w-[69px] h-[37px] mr-3 [@media(min-width:2560px)]:w-[240px] [@media(min-width:2560px)]:h-[120px]"
              />
              <img
                src="/images/logo-text.png"
                alt="PARVATI'S LAP"
                className="h-[169px] w-auto [@media(min-width:2560px)]:h-[373px] [@media(min-width:2560px)]:ml-[15px]"
              />
            </a>
          </div>

          {/* Desktop Menu & Theme Toggle - Right Side */}
          <div className="flex items-center gap-2 flex-shrink-0 order-3 lg:order-2">
            <ul className="hidden lg:flex gap-4 xl:gap-6 items-center list-none m-0 p-0">
              <li className="m-0 p-0">
                <a
                  href="#home"
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-colors block py-2 whitespace-nowrap"
                >
                  HOME
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#accommodations"
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-colors block py-2 whitespace-nowrap"
                >
                  HOSTEL & VILLA
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#cafe-things"
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-colors block py-2 whitespace-nowrap"
                >
                  CAFE & THINGS TO DO
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#reviews"
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-colors block py-2 whitespace-nowrap"
                >
                  REVIEWS
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#views"
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-colors block py-2 whitespace-nowrap"
                >
                  VIEWS
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#contact"
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-colors block py-2 whitespace-nowrap"
                >
                  CONTACT
                </a>
              </li>
            </ul>

            <button
              id="theme-toggle"
              className="hidden lg:inline-flex items-center gap-2 cursor-pointer transition-all ml-2 lg:ml-4 p-2 rounded-lg flex-shrink-0"
            >
              <span
                id="theme-icon"
                className="text-lg leading-none [@media(min-width:2560px)]:text-[30px]"
              >
                🌙
              </span>
              <span
                id="theme-label"
                className="text-sm font-medium tracking-wide leading-none [@media(min-width:2560px)]:text-[30px]"
              >
                Light
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu-drawer"
        className="fixed inset-0 z-[9999] invisible opacity-0 transition-[visibility,opacity] duration-300 [&.active]:visible [&.active]:opacity-100"
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          id="mobile-menu-overlay"
        ></div>
        <div className="absolute top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-primary shadow-[-4px_0_20px_rgba(0,0,0,0.2)] translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto [.active_&]:translate-x-0">
          <div className="flex items-center justify-between p-6 border-b border-theme">
            <h2 className="text-xl font-light tracking-widest text-primary">MENU</h2>
            <button
              id="mobile-menu-close"
              className="p-2 rounded-lg transition-all"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="p-6">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              <li className="m-0 p-0">
                <a href="#home" className="menu-link">
                  HOME
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#accommodations" className="menu-link">
                  HOSTEL & VILLA
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#cafe-things" className="menu-link">
                  CAFE & THINGS TO DO
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#reviews" className="menu-link">
                  REVIEWS
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#views" className="menu-link">
                  VIEWS
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#contact" className="menu-link">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-theme">
              <button
                id="theme-toggle-mobile"
                className="inline-flex items-center gap-3 cursor-pointer transition-all p-3 rounded-lg w-full justify-center"
              >
                <span id="theme-icon-mobile" className="text-2xl leading-none">
                  🌙
                </span>
                <span
                  id="theme-label-mobile"
                  className="text-base font-medium tracking-wide leading-none"
                >
                  Light Mode
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

