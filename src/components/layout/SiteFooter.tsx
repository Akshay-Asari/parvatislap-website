/**
 * SiteFooter Component
 * Footer section with quick links and contact info
 * Extracted from new_index.html footer section (lines 2274-2304)
 */
export function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-text-dark text-white [@media(min-width:2560px)]:py-24 [@media(min-width:2560px)]:px-48">
      <div className="max-w-79rem mx-auto [@media(min-width:2560px)]:max-w-[235rem]">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-80">
            <h3 className="font-light tracking-widest mb-4 text-xl [@media(min-width:2560px)]:text-[2rem]">
              PARVATI&apos;S LAP
            </h3>
            <p className="text-gray-300 leading-relaxed [@media(min-width:2560px)]:text-[1.5rem]">
              A sanctuary in the heart of the Himalayas, where adventure meets
              tranquility in perfect harmony.
            </p>
          </div>

          <div>
            <h4 className="font-light mb-4 text-lg [@media(min-width:2560px)]:text-[2rem]">
              Quick links
            </h4>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#accommodations"
                  className="text-gray-300 no-underline hover:text-white transition-colors [@media(min-width:2560px)]:text-[1.5rem]"
                >
                  Hostel & Villa
                </a>
              </li>
              <li>
                <a
                  href="#cafe-things"
                  className="text-gray-300 no-underline hover:text-white transition-colors [@media(min-width:2560px)]:text-[1.5rem]"
                >
                  Cafe & Things to Do
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-gray-300 no-underline hover:text-white transition-colors [@media(min-width:2560px)]:text-[1.5rem]"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#views"
                  className="text-gray-300 no-underline hover:text-white transition-colors [@media(min-width:2560px)]:text-[1.5rem]"
                >
                  Views
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-4 text-lg [@media(min-width:2560px)]:text-[2rem]">
              Phone
            </h4>
            <p className="text-gray-300 [@media(min-width:2560px)]:text-[1.5rem]">
              +91 908 222 9363
            </p>
          </div>

          <div>
            <h4 className="font-light mb-4 text-lg [@media(min-width:2560px)]:text-[2rem]">
              Email
            </h4>
            <p className="text-gray-300 [@media(min-width:2560px)]:text-[1.5rem]">
              parvatislap@gmail.com
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-700 text-gray-400 [@media(min-width:2560px)]:text-[2rem]">
          © 2024 Parvati&apos;s Lap
        </div>
      </div>
    </footer>
  );
}

