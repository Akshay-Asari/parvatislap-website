import Hero from "@/components/hero/Hero";
import BookingWidget from "@/components/booking/BookingWidget";
import HomeContent from "@/components/sections/HomeContent";
import Accommodations from "@/components/sections/Accommodations";
import CafeThingsToDo from "@/components/sections/CafeThingsToDo";
import Reviews from "@/components/sections/Reviews";
import Views from "@/components/sections/Views";
import Contact from "@/components/sections/Contact";

/**
 * Home page component
 * Matches the structure of new_index.html sections
 */
export default function Home() {
  return (
    <>
      {/* Hero section with video background and rain effect */}
      <Hero />
      
      {/* Fixed booking widget */}
      <BookingWidget />
      
      {/* Main content sections */}
      <HomeContent />
      <Accommodations />
      <CafeThingsToDo />
      <Reviews />
      <Views />
      <Contact />
    </>
  );
}
