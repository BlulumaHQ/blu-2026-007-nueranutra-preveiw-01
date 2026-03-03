import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const services = [
  {
    title: "Turnkey Manufacturing Solutions",
    image: "/images/services-home-3.jpg",
  },
  {
    title: "Formulation & Development Support",
    image: "/images/services-home-1.jpg",
  },
  {
    title: "Custom Packaging Services",
    image: "/images/services-home-2.jpg",
  },
  {
    title: "Regulatory & Compliance Guidance",
    image: "/images/services-home-4.jpg",
  },
];

const features = [
  { icon: "/images/icon-facility.png", title: "Industry-Leading Facility" },
  { icon: "/images/icon-solutions.png", title: "Comprehensive Solutions" },
  { icon: "/images/icon-track-record.png", title: "Proven Track Record" },
  { icon: "/images/icon-regulatory.png", title: "Regulatory Expertise" },
];

const testimonials = [
  {
    quote:
      "NuEra helped us take our concept from idea to shelf-ready product in record time. Their team was responsive, knowledgeable, and genuinely invested in our success. We couldn't have asked for a better manufacturing partner.",
    name: "David L.",
  },
  {
    quote:
      "NuEra's regulatory team helped us secure product licenses for multiple SKUs in Canada and abroad. Their guidance saved us time, avoided compliance issues, and made international expansion possible.",
    name: "Natalie K.",
  },
  {
    quote:
      "We've worked with several manufacturers over the years, and NuEra stands out for their consistency, communication, and attention to detail. Our orders are always on time and meet the highest quality standards.",
    name: "Richard C.",
  },
];

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl text-primary-foreground leading-tight max-w-2xl"
          >
            Precision, Integrity & Quality, Packaged Together
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Link to="/contact-us" className="btn-primary">
              Contact Us Today!
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-primary-foreground/80 text-sm md:text-base underline underline-offset-4"
          >
            Build Your Brand With A Manufacturer That Gets It Right
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-4xl text-center mb-10 text-foreground">
            Full-Service Nutraceutical Manufacturing
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/our-services"
                className="group relative overflow-hidden aspect-[3/4] rounded-sm"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-3 md:p-4">
                  <span className="text-xs text-primary-foreground/70 mb-1">see details</span>
                  <h3 className="font-heading text-sm md:text-base text-primary-foreground leading-snug">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/our-services" className="btn-primary">
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-dark py-12 md:py-20">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-4xl text-primary-foreground leading-tight mb-4">
                Comprehensive Manufacturing Solutions. Uncompromising Quality.
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-6">
                Custom formulas, scalable production, and regulatory compliance—seamlessly delivered.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-center gap-3">
                    <img src={f.icon} alt={f.title} className="w-10 h-10" />
                    <span className="text-primary-foreground text-xs md:text-sm font-semibold">
                      {f.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-primary-foreground/90 text-sm leading-relaxed">
              <p>
                At NuEra Nutraceuticals Inc., our manufacturing practices are fully compliant with
                Good Manufacturing Practices (GMP), ensuring every product meets the highest
                standards of safety, quality, and consistency. Whether you're launching a new
                supplement or expanding your product line, our scalable solutions adapt to your
                evolving needs—providing flexibility, efficiency, and compliance at every stage of
                your brand's growth.
              </p>
              <Link to="/contact-us" className="btn-outline-light mt-6">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GMP Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/about-reception.jpg"
                alt="NuEra Facility"
                className="w-full h-auto rounded-sm"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-heading text-xl md:text-3xl text-primary mb-2">
                GMP-Certified Solutions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Our state-of-the-art facility operates under strict Good Manufacturing Practice
                standards, ensuring consistent quality across all products. From encapsulation to
                packaging, every step is monitored for precision.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                {[
                  { src: "/images/cert-health-canada.png", alt: "Canadian GMP Certified - Health Canada" },
                  { src: "/images/cert-cgmp.png", alt: "Certified cGMP" },
                  { src: "/images/cert-gmp-red.png", alt: "GMP Certified - Good Manufacturing Practices" },
                  { src: "/images/cert-gmp-green.png", alt: "GMP Certified Practice" },
                  { src: "/images/cert-fda.png", alt: "FDA Registered" },
                  { src: "/images/cert-usda.png", alt: "USDA Organic" },
                  { src: "/images/cert-halal.png", alt: "IFANCC Halal Certified" },
                ].map((cert) => (
                  <img
                    key={cert.alt}
                    src={cert.src}
                    alt={cert.alt}
                    className="h-16 md:h-20 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-12 md:py-20">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="text-center px-8">
              <Quote size={32} className="mx-auto mb-4 text-secondary" />
              <p className="text-primary-foreground/90 text-base md:text-lg italic leading-relaxed mb-6 min-h-[100px]">
                {testimonials[currentTestimonial].quote}
              </p>
              <p className="text-secondary font-semibold">
                {testimonials[currentTestimonial].name}
              </p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentTestimonial ? "bg-secondary" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-site text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-secondary-foreground mb-4">
            Ready to Start Your Next Project?
          </h2>
          <Link to="/contact-us" className="btn-primary bg-primary mt-2">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
