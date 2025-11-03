"use client";

import { useImageModal } from "@/hooks/useImageModal";
import { ImageModal } from "@/components/modal/ImageModal";
import { Gallery } from "@/components/gallery/Gallery";

/**
 * CafeThingsToDo Component
 * Displays cafe information, galleries, and things to do with trek cards
 * Extracted from legacy-index.html (lines 1817-2011)
 */

// Cafe gallery images
const cafeImages = [
  "/images/Cafe/Picture52.jpg",
  "/images/Cafe/Picture51.jpg",
  "/images/Cafe/Picture54.jpg",
  "/images/Cafe/Picture53.jpg",
  "/images/Cafe/Picture56.jpg",
  "/images/Cafe/Picture50.jpg",
  "/images/Cafe/Picture55.jpg",
];

// Trek data
interface Trek {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const treks: Trek[] = [
  {
    id: "sargi-trek",
    title: "Sargi Trek",
    subtitle: "3 hr Trek",
    description: "Challenge yourself with the invigorating Sargi Trek. This full-day hike takes you through dense forests and over pristine streams, leading you to a breathtaking viewpoint with panoramic vistas of the surrounding glaciers and the entire Parvati Valley. A must-do for every serious trekker.",
    image: "/images/Trek/SargiTrek.jpg",
  },
  {
    id: "shikoi-hikes",
    title: "Shikoi Hikes",
    subtitle: "30 min trek",
    description: "Explore the beauty of the region on the picturesque Shikoi Hikes. These shorter, more accessible trails wind through local villages and terraced farms, offering a glimpse into the traditional way of life in the mountains. It's the perfect activity to reconnect with nature and soak in the tranquil atmosphere.",
    image: "/images/Trek/ShikoiHike.jpg",
  },
  {
    id: "kheerganga-trek",
    title: "Kheerganga Trek",
    subtitle: "4-6 hrs trek",
    description: "Famous hot springs trek through meadows and forests. Experience natural hot water pools surrounded by snow-capped peaks. This challenging trek rewards you with one of the most beautiful camping spots in the Himalayas.",
    image: "/images/Trek/KheerGanga.jpg",
  },
  {
    id: "kasol-exploration",
    title: "Kasol Exploration",
    subtitle: "1hr journey",
    description: "A 20 min short hike and 30 min drive away is the famous town of Kasol. Dive into its lively party scene, explore the eclectic cafes, and shop for unique handicrafts. Kasol is the perfect place to experience a mix of Israeli and local cultures.",
    image: "/images/Trek/KasolExp.jpg",
  },
];

export default function CafeThingsToDo() {
  const { isOpen, images, mode, openCarousel, closeModal } = useImageModal();

  const handleImageClick = (clickedImages: string[]) => {
    openCarousel(clickedImages);
  };

  return (
    <>
      <section id="cafe-things" className="bg-primary py-24 px-6 3xl:py-24 3xl:px-48">
        <div className="max-w-79rem mx-auto 3xl:max-w-[235rem]">
          <div className="text-center mb-12">
            <h1 className="section-title title-section">CAFE & THINGS TO DO</h1>
          </div>

          {/* Cafe Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-primary mb-8 text-center 3xl:text-[2.75rem]">
              Our Cafe: ADHIKARA - A Taste of the Himalayas
            </h2>

            <div className="max-w-4xl 3xl:max-w-[112rem] mx-auto mb-12">
              <p className="text-lg leading-[1.8] text-secondary text-center mb-6 3xl:text-[28px] 3xl:leading-[4rem]">
                Perched high on the mountain above Lapas Village, our cafe offers more than just a meal—it&apos;s an experience for the soul. Surrounded by majestic glaciers and the serene Parvati Valley, our traditional restaurant and cafe is a warm and welcoming space where every bite is a tribute to the peaceful surroundings.
              </p>
              <p className="text-lg leading-[1.8] text-secondary text-center 3xl:text-[28px] 3xl:leading-[4rem]">
                Based on what our guests have said, our food is a highlight of their stay. We&apos;re known for serving delicious and wholesome meals that perfectly complement a day of trekking and exploration. Whether you&apos;re craving authentic Indian cuisine or a hot cup of tea to warm you up after a trek, we are dedicated to providing a dining experience that feels like home.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card 3xl:h-[46rem]">
                <span className="feature-icon">
                  <img
                    src="/images/HeartyFood5.png"
                    alt="Hearty and Delicious Food"
                    className="icon-img w-[130px] h-[130px] 3xl:w-[250px] 3xl:h-[250px]"
                  />
                </span>
                <h3 className="feature-title 3xl:text-[3rem]">Hearty and Delicious Food</h3>
                <p className="feature-description 3xl:text-[28px] 3xl:leading-[3rem]">
                  Our food is often described as &quot;mind-blowing,&quot; &quot;very good,&quot; and &quot;tasty,&quot; with some guests mentioning that we make as per their taste.
                </p>
              </div>
              <div className="feature-card 3xl:h-[46rem]">
                <span className="feature-icon">
                  <img
                    src="/images/TasteOfHome4.png"
                    alt="A Taste of Home"
                    className="icon-img w-[130px] h-[130px] 3xl:w-[250px] 3xl:h-[250px]"
                  />
                </span>
                <h3 className="feature-title 3xl:text-[3rem]">A Taste of Home</h3>
                <p className="feature-description 3xl:text-[28px]">
                  Our team is committed to making you feel like family, serving meals with a hospitality that is as comforting as the food itself.
                </p>
              </div>
              <div className="feature-card 3xl:h-[46rem]">
                <span className="feature-icon">
                  <img
                    src="/images/PerfectSetting1.png"
                    alt="The Perfect Setting"
                    className="icon-img w-[130px] h-[130px] 3xl:w-[250px] 3xl:h-[250px]"
                  />
                </span>
                <h3 className="feature-title 3xl:text-[3rem]">The Perfect Setting</h3>
                <p className="feature-description 3xl:text-[28px] 3xl:leading-[3rem]">
                  Enjoy your meal with an unbeatable view of the Himalayas and starry night with full moons. Our cafe and outdoor seating areas are designed for you to relax, connect with fellow travelers, and savor the peaceful ambiance and enjoy sunrises and sunsets.
                </p>
              </div>
            </div>

            {/* Cafe Gallery */}
            <div className="mb-48">
              <h3 className="gallery-section-title 3xl:text-[2.75rem]">Cafe Gallery</h3>
              <Gallery
                images={cafeImages}
                onImageClick={handleImageClick}
                alt="Cafe"
              />
            </div>
          </div>

          {/* Things to Do Section */}
          <div>
            <h2 className="text-3xl font-light text-primary mb-8 text-center 3xl:text-[2.75rem]">
              THINGS TO DO
            </h2>

            <div className="max-w-4xl 3xl:max-w-[112rem] mx-auto mb-12">
              <p className="text-lg leading-[1.8] text-secondary text-center mb-6 3xl:text-[28px] 3xl:leading-[4rem]">
                Escape the crowds and discover a true mountain sanctuary, where adventure begins right at your doorstep. We are not just a place to stay; we are your gateway to the unexplored trails, vibrant culture, and breathtaking landscapes of this legendary region.
              </p>

              <h3 className="text-2xl font-light text-primary mb-8 text-center 3xl:text-[2.5rem]">
                Adventure Awaits: Hikes and Treks from Our Doorstep
              </h3>
              <p className="text-lg leading-[1.8] text-secondary text-center 3xl:text-[28px] 3xl:leading-[4rem]">
                At Parvati&apos;s Lap, you are perfectly positioned to embark on some of the most stunning hikes in the Himalayas. Our location offers unparalleled access to trails that take you far from the beaten path.
              </p>
            </div>

            {/* Trek Cards Gallery */}
            <div className="gallery-container mb-12">
              <button className="gallery-nav gallery-prev 3xl:w-[99px] 3xl:h-[99px] 3xl:text-[3rem]">‹</button>
              <button className="gallery-nav gallery-next 3xl:w-[99px] 3xl:h-[99px] 3xl:text-[3rem]">›</button>

              <div className="gallery-track">
                {treks.map((trek) => (
                  <div key={trek.id} className="trek-card w-[280px] md:w-[350px] 3xl:w-[40rem]">
                    <div className="trek-image 3xl:h-[30rem] 3xl:w-[40rem]">
                      <img
                        src={trek.image}
                        alt={trek.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 3xl:p-16">
                      <h4 className="text-xl font-light text-primary mb-4 3xl:text-[3rem]">
                        {trek.title}
                      </h4>
                      <p className="accommodation-subtitle 3xl:text-[26px]">{trek.subtitle}</p>
                      <p className="text-secondary leading-relaxed 3xl:text-[28px] 3xl:leading-[3rem]">
                        {trek.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card">
                <img
                  src="/images/HostelActivities1.png"
                  alt="Hostel Activities"
                  className="icon-img h-[120px] w-[120px] 3xl:h-[16rem] 3xl:w-[16rem]"
                />
                <h4 className="text-lg font-light text-primary mb-2 3xl:text-[3rem] 3xl:mb-[3rem]">
                  Hostel Activities
                </h4>
                <p className="feature-description 3xl:text-[28px] 3xl:leading-[3rem] 3xl:mb-[3rem]">
                  Inside the hostel, find your tribe. Our common areas are a haven for travelers to swap stories, play board games, or simply relax by a bonfire under a sky full of stars. We host jam sessions, movie nights, and community events to ensure a vibrant and welcoming atmosphere.
                </p>
              </div>
              <div className="feature-card">
                <img
                  src="/images/SpiritualImmersion1.png"
                  alt="Spiritual and Cultural Immersion"
                  className="icon-img h-[120px] w-[120px] 3xl:h-[16rem] 3xl:w-[16rem]"
                />
                <h4 className="text-lg font-light text-primary mb-2 3xl:text-[3rem] 3xl:mb-[3rem]">
                  Spiritual and Cultural Immersion
                </h4>
                <p className="feature-description 3xl:text-[28px] 3xl:leading-[3rem] 3xl:mb-[3rem]">
                  Visit ancient temples in Manikaran, meditate by the gushing Parvati River, or simply find a quiet spot to practice yoga. The spiritual energy of the valley is palpable and offers a unique experience for those seeking inner peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal for Gallery */}
      <ImageModal
        isOpen={isOpen}
        images={images}
        mode={mode}
        onClose={closeModal}
      />
    </>
  );
}
