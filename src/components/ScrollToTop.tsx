import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Route change scroll reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show/hide button
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:opacity-90"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} strokeWidth={2} />
    </button>
  );
};

export default ScrollToTop;
