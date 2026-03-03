import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const milestones = [
  { year: "2007", text: "NuEra Nutraceuticals Inc. was established with a focus on capsule and tablet production." },
  { year: "2009", text: "Expanded with a 7,800 sq. ft. warehouse, installed two additional encapsulation lines, and upgraded tablet coating equipment." },
  { year: "2013", text: "Achieved U.S. FDA Food Facility Registration and added a 14,000 sq. ft. warehouse extension to support growing production needs." },
  { year: "2016", text: "Relocated to our current 30,000 sq. ft. dedicated manufacturing facility, featuring custom interior flow design and added Bosch high-speed encapsulation machines." },
  { year: "2019", text: "Successfully obtained UAE Ministry of Health Manufacturing Site Registration, marking our international regulatory compliance and export readiness." },
  { year: "2021–2024", text: "Introduction of blister, sachet, and stick-pak packaging options to meet the growing demand for convenience in today's market." },
];

const facilityImages = [
  "/images/about-1.jpg",
  "/images/about-4.jpg",
  "/images/about-reception.jpg",
  "/images/about-5.jpg",
  "/images/about-3.jpg",
];

const facilityEquipment = [
  "Full clean-room capabilities and climate-controlled zones",
  "5 high-speed encapsulation lines",
  "3 advanced tabletting lines",
  "1 pharmaceutical-grade coating drum",
  "3 powder blenders in various capacities",
  "2 fully automated bottling lines",
  "1 high-speed sachet filling line",
  "2 high-speed blister packaging lines",
];

const AboutPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Precision, Integrity & Quality, Packaged Together"
        backgroundImage="/images/hero-about.jpg"
      />

      {/* About Content */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-site max-w-4xl">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            NuEra Nutraceuticals Inc. is a proudly Canadian nutraceutical manufacturer committed to
            delivering exceptional quality, innovation, and trust. Since our founding in 2007, we
            have grown steadily to become a reliable partner to global health and wellness brands
            seeking scalable, science-driven manufacturing solutions. Our journey began with a clear
            mission: to offer turnkey, GMP-compliant contract manufacturing services that combine
            technical precision with personalized service. Over the years, we've continuously
            expanded our capabilities to meet increasing industry demand and regulatory standards.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-dark py-10 md:py-16">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-4xl text-primary-foreground text-center mb-4">
            Our Milestones
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-10">
            At the heart of NuEra Nutraceuticals Inc. is a mission to empower health-focused brands
            with reliable, high-quality manufacturing solutions that foster growth and consumer
            trust. We believe that great products start with great partnerships—and over the years,
            we've proudly supported hundreds of clients in launching and scaling their supplement
            lines with confidence.
          </p>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/20" />

            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-secondary -translate-x-1/2 mt-1.5" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-secondary font-heading text-lg font-bold">{m.year}</span>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mt-1">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-4xl text-primary text-center mb-4">
            Our Facility
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-6">
            Purpose-built for precision and efficiency, our 30,000 sq. ft. facility is designed with
            a fully optimized manufacturing floor plan that ensures seamless product flow and strict
            quality control. Equipped with:
          </p>
          <ul className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            {facilityEquipment.map((item) => (
              <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto text-center mb-8">
            With cutting-edge equipment and a highly skilled team, NuEra offers end-to-end contract
            manufacturing solutions—from custom formulation to encapsulation, tableting, packaging,
            and fulfillment. We proudly serve clients across North America and beyond, helping bring
            safe, effective, and compliant health products to market with confidence.
          </p>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {facilityImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="overflow-hidden rounded-sm aspect-square"
              >
                <img
                  src={img}
                  alt={`Facility ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="container-site text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-secondary-foreground mb-4">
            Need Scalable, Compliant Solutions?
          </h2>
          <Link to="/contact-us" className="btn-primary bg-primary">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + facilityImages.length) % facilityImages.length);
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={facilityImages[lightboxIndex]}
            alt="Facility"
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % facilityImages.length);
            }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
};

export default AboutPage;
