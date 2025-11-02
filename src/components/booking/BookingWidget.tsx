/**
 * BookingWidget Component
 * Fixed glassmorphism booking widget
 * Will be implemented with the exact design from new_index.html
 */
export default function BookingWidget() {
  return (
    <div
      id="booking-widget"
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 lg:transform-none w-11/12 max-w-[12rem] lg:w-85 rounded-3xl 2xl:rounded-[4rem] z-40 overflow-hidden transition-all duration-300 shadow-2xl booking-glass [@media(min-width:2560px)]:max-w-[33rem]"
    >
      <div
        id="booking-header"
        className="p-2 flex items-center justify-between relative booking-content-glass min-h-16 2xl:min-h-4xl cursor-pointer [@media(min-width:2560px)]:p-[1.5rem] [@media(min-width:2560px)]:min-h-[11rem]"
      >
        <a
          href="https://live.ipms247.com/booking/book-rooms-parvatislaphostelcamps"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center flex-1 no-underline"
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
      </div>
    </div>
  );
}

