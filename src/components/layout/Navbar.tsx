import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      for (const id of sections.reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground"
          aria-label="SyntraLogic Home"
        >
          <Code2 className="h-7 w-7 text-accent" />
          <span className="gradient-text">SyntraLogic</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  role="menuitem"
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-[calc(100%-2rem)] md:max-w-sm bg-background border-border"
            >
              <div className="flex flex-col h-full pt-8">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#home");
                  }}
                  className="flex items-center gap-2 text-2xl font-bold mb-8"
                >
                  <Code2 className="h-7 w-7 text-accent" />
                  <span className="gradient-text">SyntraLogic</span>
                </a>
                <ul className="flex flex-col gap-2" role="menu">
                  {navLinks.map((link) => (
                    <li key={link.href} role="none">
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        role="menuitem"
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-muted ${
                          activeSection === link.href.replace("#", "")
                            ? "text-accent bg-muted"
                            : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pb-8">
                  <Button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-gradient-primary text-primary-foreground"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
