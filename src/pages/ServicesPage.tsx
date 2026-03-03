import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const servicesData = [
  {
    title: "Turnkey Manufacturing Solutions",
    subtitle: "End-to-end support from concept to commercialization.",
    description:
      "From initial concept to final product, we provide comprehensive, end-to-end manufacturing services. Whether you need capsule filling, tablet pressing, or powder blending, our GMP-certified processes ensure quality, scalability, and speed—helping you bring products to market efficiently and with confidence.",
    cta: "Request a Full-Service Quote",
    image: "/images/service-1.jpg",
    imageLeft: true,
  },
  {
    title: "Formulation & Development Support",
    subtitle: "Specialty ingredient sourcing and product optimization.",
    description:
      "Our expert R&D team works closely with you to create high-performance formulas that meet your brand's goals. From sourcing specialty ingredients to optimizing taste, texture, and bioavailability, we help transform your product idea into a science-backed solution.",
    cta: "Request R&D Support",
    image: "/images/service-6.jpg",
    imageLeft: false,
  },
  {
    title: "Custom Packaging Services",
    subtitle: "Innovative formats, labeling, and design execution.",
    description:
      "Navigating the complex landscape of nutraceutical regulations can be challenging—but we've got you covered. We assist with NHP product licensing, health claim substantiation, and documentation to ensure your products comply with Health Canada and international standards.",
    cta: "Request Packaging Consultation",
    image: "/images/services-home-2.jpg",
    imageLeft: true,
  },
  {
    title: "Regulatory & Compliance Guidance",
    subtitle: "Licensing, health claims, and document preparation.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum lorem ipsum.\n\nVivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci.",
    cta: "Book a Regulatory Review",
    image: "/images/services-home-4.jpg",
    imageLeft: false,
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Custom Formulation. Scalable Production. Trusted Delivery."
        backgroundImage="/images/hero-services.jpg"
      />

      <section className="py-10 md:py-16 bg-background">
        <div className="container-site text-center mb-12">
          <h2 className="font-heading text-xl md:text-3xl text-primary">
            GMP-Certified Capabilities That Evolve With Your Business.
          </h2>
        </div>

        <div className="space-y-0">
          {servicesData.map((service, idx) => (
            <div
              key={service.title}
              className={`${idx % 2 === 0 ? "bg-background" : "section-light"}`}
            >
              <div className="container-site py-10 md:py-16">
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    service.imageLeft ? "" : "md:[direction:rtl]"
                  }`}
                >
                  <div className={service.imageLeft ? "" : "md:[direction:ltr]"}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-sm"
                      loading="lazy"
                    />
                  </div>
                  <div className={service.imageLeft ? "" : "md:[direction:ltr]"}>
                    <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                      {service.title}
                    </h2>
                    <p className="text-secondary font-semibold text-sm mb-4">{service.subtitle}</p>
                    {service.description.split("\n\n").map((p, i) => (
                      <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}
                    <Link to="/contact-us" className="btn-primary mt-4">
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-12 md:py-16">
        <div className="container-site text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-2">
            Talk to Our Manufacturing Experts Today
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Let's Tailor a Solution for Your Brand
          </p>
          <Link to="/contact-us" className="btn-outline-light">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
