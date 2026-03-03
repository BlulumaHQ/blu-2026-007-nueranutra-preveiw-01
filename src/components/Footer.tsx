import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-primary-foreground">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="NuEra Nutraceuticals Inc."
                className="h-14 w-auto brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Precision, Integrity & Quality, Packaged Together
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Our Services", path: "/our-services" },
                { label: "About Us", path: "/about-us" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Turnkey Manufacturing",
                "Formulation & Development",
                "Custom Packaging",
                "Regulatory Guidance",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/our-services"
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+1 (604) 271-8868</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>enquiry@nueranutra.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>12031 No.5 Road, Richmond, BC, Canada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-4">
          <p className="text-center text-xs opacity-60">
            <span className="hidden md:inline">
              © 2025 NuEra Nutraceuticals Inc. | Web Design by Bluluma.com
            </span>
            <span className="md:hidden">
              © 2025 NuEra Nutraceuticals Inc.
              <br />
              <span className="text-[10px] opacity-75">Web Design by Bluluma.com</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
