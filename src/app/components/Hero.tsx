type HeroProps = {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaLink: string;
  };
  
  export default function Hero({ title, subtitle, ctaLabel, ctaLink }: HeroProps) {
    return (
      <section
        className="relative bg-cover bg-center text-white px-6 py-40"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#003582]/80 via-[#003582]/60 to-[#003582]/30"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-white/90 font-bold">{subtitle}</p>
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
  