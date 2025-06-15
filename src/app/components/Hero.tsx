export default function Hero() {
    return (
      <section
        className="relative bg-cover bg-center text-white px-6 py-40"
        style={{ backgroundImage: 'url(/hero.jpg)' }} // replace with your actual image
      >
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003582]/80 via-[#003582]/60 to-[#003582]/30"></div>
  
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Helping Brands Grow on Amazon & Walmart
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-white/90 font-bold">
            We partner with brands to increase marketplace reach—while protecting your identity, pricing integrity, and customer experience.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-[#003582] px-6 py-3 font-bold rounded-md shadow hover:bg-[#f3f3f3] transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    );
  }
  