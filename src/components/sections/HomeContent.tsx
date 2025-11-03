import Image from "next/image";

/**
 * HomeContent Component
 * Main content section with introduction
 * Extracted from legacy-index.html (lines 1652-1675)
 */
export default function HomeContent() {
  return (
    <section className="bg-primary py-24 px-6 3xl:py-24 3xl:px-48">
      <div className="max-w-79rem mx-auto 3xl:max-w-[235rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="block text-[36px] font-light tracking-wide text-olive-light uppercase mb-4 3xl:text-[5rem] 3xl:mb-8 3xl:tracking-[0.05em]">
              WELCOME TO PARADISE
            </span>
            <h2 className="text-[20px] block font-light tracking-wider text-primary mb-8 3xl:text-[2.5rem]">
              Where Mountains Meet Luxury
            </h2>

            <p className="text-lg leading-[1.8] text-secondary mb-6 3xl:text-[2rem] 3xl:leading-[2] 3xl:mb-[2rem]">
              Parvati&apos;s Lap Hostel & Villa is the ideal starting point for your adventures. Wake up to the fresh mountain air, then set out to explore nearby treks, vibrant villages, and cascading waterfalls across the mountain. After a day of adventure, return to our peaceful retreat to relax by a bonfire, share stories with fellow travelers, and gaze at a sky full of stars untouched by city lights.
            </p>

            <p className="text-lg leading-[1.8] text-secondary mb-6 3xl:text-[2rem] 3xl:leading-[2] 3xl:mb-[2rem]">
              We are committed to providing a space that feels both secluded and connected. Our dedication to a high-quality guest experience, combined with our stunning location, makes Parvati&apos;s Lap the premier choice for your Himalayan adventure.
            </p>
          </div>

          <div className="sticky top-[100px] h-fit 3xl:top-[120px]">
            <div className="h-96 3xl:h-[42rem] rounded-xl overflow-hidden relative">
              <Image
                src="/images/home/home.jpg"
                alt="Mountain Resort"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

