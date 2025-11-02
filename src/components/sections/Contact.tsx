/**
 * Contact Component
 * Contact information and map section
 * Will be implemented with the exact design from new_index.html
 */
export default function Contact() {
  return (
    <section id="contact" className="section-spacing container-responsive">
      <div className="text-center mb-12">
        <h2 className="title-section">CONTACT</h2>
        <p className="text-secondary">Get in touch with us</p>
      </div>
      
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div>
          <h3 className="font-light text-lg mb-2">Phone</h3>
          <p className="text-secondary">+91 908 222 9363</p>
        </div>
        <div>
          <h3 className="font-light text-lg mb-2">Email</h3>
          <p className="text-secondary">parvatislap@gmail.com</p>
        </div>
        <div>
          <h3 className="font-light text-lg mb-2">Location</h3>
          <p className="text-secondary">Lapas Village, Kasol, Himachal Pradesh</p>
        </div>
      </div>
    </section>
  );
}

