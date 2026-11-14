import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks, type NavLink } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

import logo from "@/assets/LOGO.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .flatMap((link) => (link.children ? link.children : [link]))
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      for (const id of [...sections].reverse()) {
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

  const isLinkActive = (link: NavLink) =>
    [link, ...(link.children ?? [])].some(
      (l) => activeSection === l.href.replace("#", ""),
    );

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
        scrolled 
          ? "bg-[#0B0B0B]/90 backdrop-blur-lg border-b border-[#D4AF37]/20 shadow-lg" 
          : "bg-transparent"
      }`}
      style={{
        boxShadow: scrolled ? "0 4px 30px rgba(212, 175, 55, 0.05)" : "none",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 text-xl md:text-2xl font-bold"
          aria-label="SyntraLogic Home"
        >
          <div className="flex items-center gap-2">
            <img src={logo} alt="SyntraLogic Logo" className="h-7 w-auto" />
            <span style={{ color: "#FFFFFF" }}>SyntraLogic</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);
            if (link.children) {
              return (
                <li key={link.label} role="none">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={`relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-[#E2E8F0] hover:text-[#D4AF37]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                            style={{ backgroundColor: "#D4AF37" }}
                          />
                        )}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      style={{
                        backgroundColor: "#0B0B0B",
                        borderColor: "rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      {link.children.map((child) => (
                        <DropdownMenuItem
                          key={child.href}
                          onSelect={() => handleNavClick(child.href)}
                          className="cursor-pointer text-[#E2E8F0] focus:bg-[#D4AF37]/10 focus:text-[#D4AF37]"
                        >
                          {child.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              );
            }
            return (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  role="menuitem"
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive 
                      ? "text-[#D4AF37]" 
                      : "text-[#E2E8F0] hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{ backgroundColor: "#D4AF37" }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button
            onClick={() => handleNavClick("#clients")}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            style={{
              backgroundColor: "#D4AF37",
              color: "#0B0B0B",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C5A030";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D4AF37";
            }}
          >
            Start a Project
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Open navigation menu"
                style={{ color: "#FFFFFF" }}
                className="hover:bg-[#D4AF37]/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-[calc(100%-2rem)] md:max-w-sm"
              style={{
                backgroundColor: "#0B0B0B",
                borderColor: "rgba(212, 175, 55, 0.2)",
              }}
            >
              <div className="flex flex-col h-full pt-8">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#home");
                  }}
                  className="flex items-center gap-2 text-2xl font-bold mb-8"
                  style={{ color: "#FFFFFF" }}
                >
                  <img src={logo} alt="SyntraLogic Logo" className="h-7 w-auto" />
                  SyntraLogic
                </a>
                <ul className="flex flex-col gap-2" role="menu">
                  {navLinks.flatMap((link) => (link.children ? link.children : [link])).map((link) => {
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
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            isActive
                              ? "text-[#D4AF37] bg-[#D4AF37]/10"
                              : "text-[#E2E8F0] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pb-8">
                  <Button
                    onClick={() => handleNavClick("#clients")}
                    className="w-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#0B0B0B",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#C5A030";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#D4AF37";
                    }}
                  >
                    Start a Project
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