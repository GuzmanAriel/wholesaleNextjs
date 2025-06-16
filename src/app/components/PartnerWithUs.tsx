export default function PartnerWithUs() {
    return (
      <section id="contact" className="bg-white px-6 py-20 text-[#003582]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Let’s Grow Together</h2>
          <p className="max-w-2xl mx-auto mb-6 text-base text-[#003582]/90">
            Interested in working with us? Reach out and we’ll get back to you within 1 business day.
            We’re happy to share our resale certificate, storefront links, and everything you need to
            evaluate us as a partner.
          </p>
  
          <p className="mb-8 text-sm text-[#003582]/70">
            Email: <a href="mailto:your@email.com" className="underline">your@email.com</a>
          </p>
  
          <iframe
            src="http://f4fsellscom.local/contact-form/"
            className="w-full mx-auto h-[800px] border-0"
            title="Partner With Us Form"
            loading="lazy"
          />
        </div>
      </section>
    );
  }
  