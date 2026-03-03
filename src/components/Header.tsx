import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Services", path: "/our-services" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-background ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-site flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="NuEra Nutraceuticals Inc."
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container-site py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide uppercase py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
