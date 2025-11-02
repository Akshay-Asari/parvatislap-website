/**
 * Image Asset Mappings
 * Central location for all image paths used across the application
 * Makes it easy to update paths and track which images are used where
 */

// Accommodation Images
export const accommodationImages = {
  meghbariVilla: [
    "/images/MeghbariVilla/Villa1.jpg",
    "/images/MeghbariVilla/Villa2.jpg",
    "/images/MeghbariVilla/Villa3.jpg",
    "/images/MeghbariVilla/Villa4.jpg",
    "/images/MeghbariVilla/Villa5.jpg",
    "/images/MeghbariVilla/Villa6.jpg",
    "/images/MeghbariVilla/Villa7.jpg",
    "/images/MeghbariVilla/Villa8.jpg",
    "/images/MeghbariVilla/Villa9.jpg",
    "/images/MeghbariVilla/Villa10.jpg",
    "/images/MeghbariVilla/Villa11.jpg",
    "/images/MeghbariVilla/Villa12.jpg",
    "/images/MeghbariVilla/Villa13.jpg",
  ],
  fourBedsWoodRoom: [
    "/images/4BedsWoodRoom/WoodRoom1.jpg",
    "/images/4BedsWoodRoom/WoodRoom2.jpg",
    "/images/4BedsWoodRoom/WoodRoom3.jpg",
    "/images/4BedsWoodRoom/WoodRoom4.jpg",
    "/images/4BedsWoodRoom/WoodRoom5.jpg",
  ],
  threeBedsBalconyRoom: [
    "/images/3BedsBalconyRoom/3BedsBalconyRoom1.jpg",
    "/images/3BedsBalconyRoom/3BedsBalconyRoom2.jpg",
    "/images/3BedsBalconyRoom/3BedsBalconyRoom3.jpg",
    "/images/3BedsBalconyRoom/3BedsBalconyRoom4.jpg",
  ],
  fourBedsBalconyRoom: [
    "/images/4BedsBalconyRoom/4BedsBalconyRoom1.jpg",
    "/images/4BedsBalconyRoom/4BedsBalconyRoom2.jpg",
    "/images/4BedsBalconyRoom/4BedsBalconyRoom3.jpg",
    "/images/4BedsBalconyRoom/4BedsBalconyRoom4.jpg",
  ],
  fourBedsHempRoom: [
    "/images/4BedsHempRoom/HempRoom1.jpg",
    "/images/4BedsHempRoom/HempRoom2.jpg",
    "/images/4BedsHempRoom/HempRoom3.jpg",
    "/images/4BedsHempRoom/HempRoom4.jpg",
  ],
  fourteenBedsStoneRoom: [
    "/images/14BedsStoneRoom/StoneRoom1.jpg",
    "/images/14BedsStoneRoom/StoneRoom2.jpg",
    "/images/14BedsStoneRoom/StoneRoom3.jpg",
    "/images/14BedsStoneRoom/StoneRoom4.jpg",
    "/images/14BedsStoneRoom/StoneRoom5.jpg",
  ],
};

// Views Gallery Images
export const viewsImages = [
  "/images/Views/Picture36.jpg",
  "/images/Views/Picture37.jpg",
  "/images/Views/Picture38.jpg",
  "/images/Views/Picture39.jpg",
  "/images/Views/Picture40.jpg",
  "/images/Views/Picture41.jpg",
  "/images/Views/Picture42.jpg",
  "/images/Views/Picture44.jpg",
  "/images/Views/Picture45.jpg",
  "/images/Views/Picture46.jpg",
  "/images/Views/Picture47.jpg",
  "/images/Views/Picture48.jpg",
  "/images/Views/Picture49.jpg",
];

// Cafe Images
export const cafeImages = [
  "/images/Cafe/Picture50.jpg",
  "/images/Cafe/Picture51.jpg",
  "/images/Cafe/Picture52.jpg",
  "/images/Cafe/Picture53.jpg",
  "/images/Cafe/Picture54.jpg",
  "/images/Cafe/Picture55.jpg",
  "/images/Cafe/Picture56.jpg",
];

// Trek Images
export const trekImages = {
  kheerGanga: "/images/Trek/KheerGanga.jpg",
  kasolExperience: "/images/Trek/KasolExp.jpg",
  sargiTrek: "/images/Trek/SargiTrek.jpg",
  shikoiHike: "/images/Trek/ShikoiHike.jpg",
};

// Feature Icons
export const featureIcons = {
  heartyFood: "/images/HeartyFood5.png",
  perfectSetting: "/images/PerfectSetting1.png",
  spiritualImmersion: "/images/SpiritualImmersion1.png",
  tasteOfHome: "/images/TasteOfHome4.png",
  hostelActivities: "/images/HostelActivities1.png",
  foodIcon: "/images/food-icon.png",
};

// Logo & Branding
export const branding = {
  logo: "/images/logo-updated.png",
  logoText: "/images/logo-text.png",
  bookNow: "/images/BookNow3.png",
};

// Home Content
export const homeImages = {
  main: "/images/home/home.jpg",
};

/**
 * Get all accommodation images as a flat array
 */
export const getAllAccommodationImages = (): string[] => {
  return Object.values(accommodationImages).flat();
};

/**
 * Get all images from all galleries
 */
export const getAllGalleryImages = (): string[] => {
  return [
    ...viewsImages,
    ...cafeImages,
    ...getAllAccommodationImages(),
  ];
};

