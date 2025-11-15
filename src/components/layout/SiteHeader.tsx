"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { MobileDrawer } from "./MobileDrawer";
import { useState, useEffect } from "react";

/**
 * SiteHeader Component
 * Main navigation with mobile drawer menu and theme toggle
 * Extracted from new_index.html navigation section (lines 1480-1516)
 * jhjkjdjd test
 */
export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { isOpen: mobileMenuOpen, openMenu, closeMenu } = useMobileMenu();
  const [debugInfo, setDebugInfo] = useState({ width: 0, height: 0, computedHeight: '' });

  // Theme UI text and icons for desktop
  const themeIcon = theme === "dark" ? "🌞" : "🌙";
  const themeLabel = theme === "dark" ? "Dark" : "Light";

  // Smooth scroll to section with offset for fixed header
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = 80; // Default header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (mobileMenuOpen) {
      closeMenu();
    }
  };
  
  // Debug: Track viewport and nav height
  useEffect(() => {
    const updateDebugInfo = () => {
      const nav = document.querySelector('nav.site-nav');
      if (nav) {
        const computed = window.getComputedStyle(nav);
        const allClasses = nav.className;
        const info = {
          width: window.innerWidth,
          height: nav.getBoundingClientRect().height,
          computedHeight: computed.height
        };
        
        // // Console logging for deeper inspection
        // console.group('🐛 Navigation Debug Info');
        // console.log('Viewport Width:', info.width + 'px');
        // console.log('Actual Nav Height:', info.height + 'px');
        // console.log('Computed Height:', info.computedHeight);
        // console.log('All Classes:', allClasses);
        // console.log('Nav Element:', nav);
        
        // // Check what styles are being applied
        // const allStyles = Array.from(document.styleSheets).flatMap(sheet => {
        //   try {
        //     return Array.from(sheet.cssRules || []);
        //   } catch {
        //     return [];
        //   }
        // }).filter(rule => {
        //   const styleRule = rule as CSSStyleRule;
        //   return styleRule.selectorText && styleRule.selectorText.includes('site-nav');
        // });
        
        // console.log('Matching CSS Rules:', allStyles.map(r => r.cssText));
        // console.groupEnd();
        
        setDebugInfo(info);
      }
    };
    
    updateDebugInfo();
    window.addEventListener('resize', updateDebugInfo);
    
    // Update after a short delay to catch any style changes
    const timer = setTimeout(updateDebugInfo, 500);
    
    return () => {
      window.removeEventListener('resize', updateDebugInfo);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* DEBUG PANEL - Remove this after debugging */}
      {/* 
        <div 
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#39ff14',
            padding: '15px',
            borderRadius: '8px',
            zIndex: 99999,
            fontFamily: 'monospace',
            fontSize: '12px',
            border: '2px solid #39ff14',
            minWidth: '250px'
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>🐛 Nav Debug Info</div>
          <div>Viewport Width: <strong>{debugInfo.width}px</strong></div>
          <div>Nav Height (actual): <strong>{debugInfo.height}px</strong></div>
          <div>Computed Height: <strong>{debugInfo.computedHeight}</strong></div>
          <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #39ff14' }}>
            Expected Height:
            <div style={{ fontSize: '11px', marginTop: '5px' }}>
              {debugInfo.width < 1536 && '• < 1536px → 80px (5rem)'}
              {debugInfo.width >= 1536 && debugInfo.width < 2560 && '• 1536-2559px → 160px (10rem)'}
              {debugInfo.width >= 2560 && '• ≥ 2560px → 320px (20rem)'}
            </div>
          </div>
        </div>
      */}
      
      {/* Navigation */}
      <nav 
        className="site-nav fixed top-0 left-0 right-0 flex items-center z-50 glass-bg border-b h-20 [@media(min-width:1536px)]:h-40 [@media(min-width:2560px)]:h-40"
        style={{
          background: theme === 'dark' ? 'rgba(0,0,0,0.95)' : 'rgba(248, 253, 248, 0.95)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottomColor: theme === 'dark' ? 'rgba(57, 255, 20, 0.2)' : '#d4e6d4',
        }}
      >
        <div className="w-full px-2 sm:px-6 lg:px-6 xl:px-8 flex items-center justify-between lg:justify-between">
          {/* Mobile Hamburger Button - Left Side */}
          <button
            onClick={openMenu}
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
          <div className="flex items-center gap-2 flex-shrink-0 order-2 lg:order-1 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none lg:ml-[7rem] [@media(min-width:2560px)]:ml-80">
            <a
              href="#home"
              className="flex items-center font-light text-xl sm:text-2xl tracking-widest no-underline text-olive-green flex-shrink-0"
            >
              <Image 
                src="/images/logo-updated.png"
                alt="Parvati's Lap Logo"
                width={69}
                height={37}
                className="lg:ml-1 [@media(min-width:2560px)]:w-[240px] [@media(min-width:2560px)]:h-[120px]"
                style={{
                  width: undefined,
                  height: undefined,
                }}
              />
              <Image
                src="/images/logo-text.png"
                alt="PARVATI'S LAP"
                width={128}
                height={169}
                className="w-auto h-auto ml-2 lg:ml-3 [@media(min-width:2560px)]:h-[373px] [@media(min-width:2560px)]:w-auto [@media(min-width:2560px)]:ml-[24px]"
              />
            </a>
          </div>

          {/* Desktop Menu & Theme Toggle - Right Side */}
          <div className="flex items-center gap-2 flex-shrink-0 order-3 lg:order-2">
            <ul className="hidden lg:flex gap-4 xl:gap-6 items-center list-none m-0 p-0">
              <li className="m-0 p-0">
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, '#home')}
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-all duration-300 ease-in-out block py-2 whitespace-nowrap hover:scale-105"
                >
                  HOME
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#accommodations"
                  onClick={(e) => handleSmoothScroll(e, '#accommodations')}
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-all duration-300 ease-in-out block py-2 whitespace-nowrap hover:scale-105"
                >
                  HOSTEL & VILLA
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#cafe-things"
                  onClick={(e) => handleSmoothScroll(e, '#cafe-things')}
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-all duration-300 ease-in-out block py-2 whitespace-nowrap hover:scale-105"
                >
                  CAFE & THINGS TO DO
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#reviews"
                  onClick={(e) => handleSmoothScroll(e, '#reviews')}
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-all duration-300 ease-in-out block py-2 whitespace-nowrap hover:scale-105"
                >
                  REVIEWS
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#views"
                  onClick={(e) => handleSmoothScroll(e, '#views')}
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-all duration-300 ease-in-out block py-2 whitespace-nowrap hover:scale-105"
                >
                  VIEWS
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="text-secondary text-xs 2xl:text-3xl font-light tracking-wide no-underline hover:text-forest-green transition-all duration-300 ease-in-out block py-2 whitespace-nowrap hover:scale-105"
                >
                  CONTACT
                </a>
              </li>
            </ul>

            <button
              onClick={toggleTheme}
              id="theme-toggle"
              className="hidden lg:inline-flex items-center gap-2 cursor-pointer transition-all ml-2 lg:ml-4 p-2 rounded-lg flex-shrink-0"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              style={{
                background: theme === 'dark' ? 'rgba(57, 255, 20, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                border: theme === 'dark' ? '1px solid rgba(57, 255, 20, 0.4)' : '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <span
                className="text-lg leading-none 3xl:text-[30px]">
                {themeIcon}
              </span>
              <span 
                className="text-sm font-medium tracking-wide leading-none 3xl:text-[30px]"
                style={{
                  color: theme === 'light' ? '#9ab19a' : undefined,
                  fontWeight: 100
                }}
              >
                {themeLabel}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={closeMenu} />
    </>
  );
}

