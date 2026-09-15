import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, FileCheck2, Quote, Repeat2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Turnkey Manufacturing Solutions", image: "/images/services-home-3.jpg" },
  { title: "Formulation & Development Support", image: "/images/services-home-1.jpg" },
  { title: "Custom Packaging Services", image: "/images/services-home-2.jpg" },
  { title: "Regulatory & Compliance Guidance", image: "/images/services-home-4.jpg" },
];

const standards = [
  {
    title: "Precision Blend Uniformity",
    baseline: "Standard mixing times based primarily on general process parameters.",
    nuera: "Rigorous blend uniformity verification for complex formulations. We evaluate active ingredient distribution throughout the manufacturing process to support consistent dosage across capsules, tablets and powder servings.",
  },
  {
    title: "Comprehensive Raw Material Identification",
    baseline: "Heavy reliance on supplier Certificates of Analysis.",
    nuera: "Incoming raw materials undergo identity verification as part of NuEra’s quality-control process before being released for manufacturing, helping verify that materials meet defined specifications before entering production.",
  },
  {
    title: "Targeted Impurity & Contaminant Screening",
    baseline: "Standard microbial and heavy-metal testing.",
    nuera: "Testing strategies can extend to relevant chemical impurities, residual solvents, pesticides and degradation products based on product and ingredient requirements—providing an additional layer of quality assurance for demanding formulations.",
  },
  {
    title: "Real-Time & Long-Term Stability Assurance",
    baseline: "Generic shelf-life assumptions or limited stability information.",
    nuera: "Structured stability protocols monitor physical and chemical product integrity over time, supporting product specifications, active potency and shelf-life decisions throughout the product lifecycle.",
  },
];

const protections = [
  { icon: FileCheck2, title: "Audit-Ready Documentation", copy: "Clear, comprehensive batch and quality records designed to support traceability and regulatory review." },
  { icon: Repeat2, title: "Batch Consistency", copy: "Controlled manufacturing procedures designed to minimize formulation drift between development, pilot and commercial production." },
  { icon: ShieldCheck, title: "Risk Mitigation", copy: "Stronger testing, documentation and process controls designed to reduce preventable quality issues, production delays and batch failures." },
];

const certifications = [
  { src: "/images/cert-health-canada.png", alt: "Canadian GMP Certified - Health Canada" },
  { src: "/images/cert-cgmp.png", alt: "Certified cGMP" },
  { src: "/images/cert-gmp-red.png", alt: "GMP Certified - Good Manufacturing Practices" },
  { src: "/images/cert-gmp-green.png", alt: "GMP Certified Practice" },
  { src: "/images/cert-fda.png", alt: "FDA Registered" },
  { src: "/images/cert-usda.png", alt: "USDA Organic" },
  { src: "/images/cert-halal.png", alt: "IFANCC Halal Certified" },
];

const testimonials = [
  { quote: "NuEra helped us take our concept from idea to shelf-ready product in record time. Their team was responsive, knowledgeable, and genuinely invested in our success. We couldn't have asked for a better manufacturing partner.", name: "David L." },
  { quote: "NuEra's regulatory team helped us secure product licenses for multiple SKUs in Canada and abroad. Their guidance saved us time, avoided compliance issues, and made international expansion possible.", name: "Natalie K." },
  { quote: "We've worked with several manufacturers over the years, and NuEra stands out for their consistency, communication, and attention to detail. Our orders are always on time and meet the highest quality standards.", name: "Richard C." },
];

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length), []);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const testimonial = testimonials[currentTestimonial] ?? testimonials[0];

  useEffect(() => {
    const interval = window.setInterval(nextTestimonial, 5000);
    return () => window.clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <>
      <section className="relative w-full min-h-[76vh] md:min-h-[82vh] flex items-center bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-home.jpg)" }}>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-secondary text-xs md:text-sm font-bold uppercase tracking-[0.16em] mb-4">Beyond Baseline Compliance</p>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground leading-tight">Built Beyond the Baseline.</h1>
            <p className="mt-4 text-lg md:text-2xl font-semibold text-primary-foreground">NHP Manufacturing Driven by Advanced Compliance.</p>
            <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-primary-foreground/85">A Health Canada Site Licence is only the starting point. At NuEra Nutraceuticals, our day-to-day manufacturing standards are built around rigorous SOPs, advanced testing, transparent documentation and repeatable quality control—helping ensure what is on your label is delivered consistently in every batch.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-sm uppercase tracking-wide"><Link to="/contact-us?inquiry=new-product#contact-form">Start a New Product</Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-primary-foreground/70 bg-transparent text-primary-foreground uppercase tracking-wide hover:bg-primary-foreground hover:text-primary"><Link to="/contact-us?inquiry=existing-product#contact-form">Review an Existing Product</Link></Button>
            </div>
            <p className="mt-5 text-xs md:text-sm font-semibold tracking-wide text-primary-foreground/80">Precision. Verification. Consistency. Every Batch.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-4xl text-center text-foreground mb-8">How Can We Help?</h2>
          <div className="grid md:grid-cols-2 border border-border">
            <article className="p-6 md:p-9 border-b md:border-b-0 md:border-r border-border">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">New Product Development</p>
              <h3 className="text-xl md:text-2xl text-foreground mb-3">Develop a New Product</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">From formulation and ingredient sourcing to manufacturing, packaging and regulatory support, work with our team to bring a new nutraceutical product from concept to commercial production.</p>
              <Button asChild variant="link" className="h-auto p-0 font-semibold"><Link to="/contact-us?inquiry=new-product#contact-form">Start a New Product <ArrowRight /></Link></Button>
            </article>
            <article className="p-6 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">Existing Product Review</p>
              <h3 className="text-xl md:text-2xl text-foreground mb-3">Review an Existing Product</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">Already have a product in market or in production? Let our team review your formulation, manufacturing requirements, quality controls and testing strategy to identify opportunities to strengthen consistency and compliance.</p>
              <Button asChild variant="link" className="h-auto p-0 font-semibold"><Link to="/contact-us?inquiry=existing-product#contact-form">Request a Product Review <ArrowRight /></Link></Button>
            </article>
          </div>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-site">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">The NuEra Standard</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Why Not All Supplement Manufacturing Is Created Equal</h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">Meeting Good Manufacturing Practices is the starting line—not the finish line. NuEra’s manufacturing and quality systems are designed to go beyond baseline requirements with additional verification, documentation and process control intended to reduce product variability and protect our clients’ brands.</p>
          </div>
          <div className="space-y-4">
            {standards.map((item, index) => (
              <article key={item.title} className="bg-card border border-border p-5 md:p-8">
                <div className="grid md:grid-cols-[0.75fr_0.9fr_1.35fr] gap-5 md:gap-8 md:items-start">
                  <div><span className="text-xs font-bold text-secondary">0{index + 1}</span><h3 className="mt-2 text-xl text-primary leading-snug">{item.title}</h3></div>
                  <div className="border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">The Baseline</p><p className="text-sm leading-relaxed text-muted-foreground">{item.baseline}</p></div>
                  <div className="border-t md:border-t-0 md:border-l border-secondary/60 pt-4 md:pt-0 md:pl-6"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary mb-2">The NuEra Standard</p><p className="text-sm leading-relaxed text-foreground">{item.nuera}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-14 md:py-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary mb-3">Quality That Protects More Than the Product</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground leading-tight">Protect Your Brand Before the Product Hits the Shelf</h2>
            <div className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-primary-foreground/80">
              <p>Manufacturing quality affects much more than a single production run. Documentation gaps, formulation drift, inconsistent testing or quality failures can create delays, rejected batches and regulatory exposure.</p>
              <p>NuEra’s enhanced quality systems are designed to give brand owners greater confidence before products reach the market.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/15 mt-10 border border-primary-foreground/15">
            {protections.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="bg-section-dark p-6 md:p-8">
                <Icon className="text-secondary mb-5" size={28} aria-hidden="true" />
                <h3 className="text-base uppercase text-primary-foreground mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Complete Manufacturing Support</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">From formulation to finished product, NuEra combines full-service manufacturing capabilities with disciplined quality systems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <Link key={service.title} to="/our-services" className="group relative overflow-hidden aspect-[3/4] rounded-sm">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent flex flex-col justify-end p-3 md:p-5">
                  <span className="text-xs text-primary-foreground/70 mb-1">See details</span>
                  <h3 className="font-heading text-sm md:text-base text-primary-foreground leading-snug">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8"><Button asChild size="lg" className="rounded-sm uppercase tracking-wide"><Link to="/our-services">Explore Our Services</Link></Button></div>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-site">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
            <img src="/images/about-reception.jpg" alt="NuEra Nutraceuticals facility reception" className="w-full h-auto rounded-sm" loading="lazy" />
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary leading-tight">Compliance Is Our Foundation. Execution Is Our Difference.</h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">Licensing, GMP compliance and recognized quality standards establish the foundation. NuEra builds on that foundation through disciplined SOPs, testing, documentation and process control.</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-5 items-center mt-8">
                {certifications.map((cert) => <img key={cert.alt} src={cert.src} alt={cert.alt} className="h-14 md:h-16 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-14 md:py-20">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground text-center mb-10">What Our Clients Say</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="text-center px-10">
              <Quote size={32} className="mx-auto mb-4 text-secondary" />
              <p className="text-primary-foreground/90 text-base md:text-lg italic leading-relaxed mb-6 min-h-[100px]">{testimonial?.quote}</p>
              <p className="text-secondary font-semibold">{testimonial?.name}</p>
            </div>
            <Button type="button" variant="ghost" size="icon" onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10" aria-label="Previous testimonial"><ChevronLeft /></Button>
            <Button type="button" variant="ghost" size="icon" onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10" aria-label="Next testimonial"><ChevronRight /></Button>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((item, index) => <Button type="button" variant="ghost" size="icon" key={item.name} onClick={() => setCurrentTestimonial(index)} className="h-8 w-8 hover:bg-primary-foreground/10" aria-label={`Go to testimonial ${index + 1}`}><span className={`block w-2.5 h-2.5 rounded-full ${index === currentTestimonial ? "bg-secondary" : "bg-primary-foreground/30"}`} /></Button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-secondary">
        <div className="container-site text-center max-w-4xl">
          <CheckCircle2 className="mx-auto text-primary mb-4" size={34} aria-hidden="true" />
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Ready to Upgrade Your Manufacturing Standards?</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground/80 max-w-2xl mx-auto">Whether you are developing a new nutraceutical product or reviewing an existing formulation, talk with NuEra about manufacturing, testing, quality control and compliance requirements.</p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="rounded-sm uppercase tracking-wide"><Link to="/contact-us?inquiry=general#contact-form">Schedule a Quality &amp; Technical Consultation</Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm border-primary bg-transparent text-primary uppercase tracking-wide hover:bg-primary hover:text-primary-foreground"><Link to="/contact-us?inquiry=new-product#contact-form">Start a New Product</Link></Button>
          </div>
          <Button asChild variant="link" className="mt-3 text-primary"><Link to="/contact-us?inquiry=existing-product#contact-form">Review an Existing Product</Link></Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;