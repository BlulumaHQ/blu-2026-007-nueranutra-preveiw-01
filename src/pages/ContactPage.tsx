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
          <div className="max-w-3xl mx-auto">
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

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
