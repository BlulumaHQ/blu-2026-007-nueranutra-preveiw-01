import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const inquiryParam = searchParams.get("inquiry");
  const inquiryValues: Record<string, string> = {
    "new-product": "New Product Development",
    "existing-product": "Existing Product Assessment",
    services: "Manufacturing Services",
    regulatory: "Regulatory & Compliance",
    general: "General Inquiry",
  };
  const [inquiryType, setInquiryType] = useState(inquiryValues[inquiryParam ?? ""] ?? "General Inquiry");

  useEffect(() => {
    setInquiryType(inquiryValues[inquiryParam ?? ""] ?? "General Inquiry");
  }, [inquiryParam]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <PageHeader
        title="Let's Connect and Create Something Exceptional"
        backgroundImage="/images/hero-contact.jpg"
        compact
      />

      <section className="py-10 md:py-16 bg-background">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <div id="contact-form" className="scroll-mt-28">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href="tel:+16042718868" className="text-sm text-primary hover:underline">
                      +1 (604) 271-8868
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a
                      href="mailto:enquiry@nueranutra.com"
                      className="text-sm text-primary hover:underline"
                    >
                      enquiry@nueranutra.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-sm text-muted-foreground">
                      12031 No.5 Road, Richmond, BC, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 – 17:00</p>
                    <p className="text-sm text-muted-foreground">Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="/images/nuera-nutra-map.png"
                  alt="NuEra Location"
                  className="w-full max-w-sm"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                Have a Question or Project in Mind?
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                From startups to global brands, we've helped clients bring high-quality supplements
                to market with confidence. Fill out the form and let's start a conversation about how
                we can support your next product success.
              </p>

              {submitted ? (
                <div className="bg-secondary/20 border border-secondary rounded-sm p-6 text-center">
                  <p className="text-primary font-semibold">Thank you for your message!</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="site_name" value="NuEra Nutraceuticals Inc." />
                  <input type="hidden" name="client_name" value="NuEra Nutraceuticals Inc." />
                  <input type="hidden" name="mode" value="3" />
                  <input type="hidden" name="source_url" value="https://nueranutra.com/" />

                  <div>
                    <label htmlFor="inquiry-type" className="block text-sm font-semibold mb-1">
                      Inquiry Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="inquiry-type"
                      name="inquiry_type"
                      required
                      value={inquiryType}
                      onChange={(event) => setInquiryType(event.target.value)}
                      className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option>New Product Development</option>
                      <option>Existing Product Assessment</option>
                      <option>Manufacturing Services</option>
                      <option>Regulatory &amp; Compliance</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {inquiryType === "Existing Product Assessment" && (
                    <div className="space-y-4 border-t border-border pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                        Existing Product Details
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-1">Company Name</label>
                          <input
                            type="text"
                            name="company_name"
                            className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">Product Name</label>
                          <input
                            type="text"
                            name="product_name"
                            className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">Product Type</label>
                          <select
                            name="product_type"
                            defaultValue=""
                            className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            <option value="">Please select</option>
                            <option>Capsules</option>
                            <option>Tablets</option>
                            <option>Powder</option>
                            <option>Sachets</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">Current Product Status</label>
                          <select
                            name="product_status"
                            defaultValue=""
                            className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            <option value="">Please select</option>
                            <option>In market</option>
                            <option>In production</option>
                            <option>In development</option>
                            <option>On hold</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">NPN Status</label>
                          <select
                            name="npn_status"
                            defaultValue=""
                            className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            <option value="">Please select</option>
                            <option>NPN issued</option>
                            <option>Application submitted</option>
                            <option>Not yet applied</option>
                            <option>Not applicable</option>
                            <option>Unsure</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">Estimated Production Volume</label>
                          <input
                            type="text"
                            name="production_volume"
                            className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-1">Current Manufacturing Situation</label>
                        <select
                          name="manufacturing_situation"
                          defaultValue=""
                          className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                          <option value="">Please select</option>
                          <option>Currently with another manufacturer</option>
                          <option>Manufacturing in-house</option>
                          <option>Between manufacturers</option>
                          <option>Not yet manufacturing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-1">Primary Reason for Assessment</label>
                        <select
                          name="assessment_reason"
                          defaultValue=""
                          className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                          <option value="">Please select</option>
                          <option>Quality control and testing</option>
                          <option>Batch consistency</option>
                          <option>Regulatory and compliance support</option>
                          <option>Reformulation or improvement</option>
                          <option>Capacity or scale-up</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  )}



                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full border border-input rounded-sm px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-vertical"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto rounded-sm uppercase tracking-wide">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
