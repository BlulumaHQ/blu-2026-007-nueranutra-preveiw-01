import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

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
            <div>
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

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Send Message
                  </button>
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
