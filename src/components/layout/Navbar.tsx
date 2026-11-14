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
import { ThemeToggle } from "@/components/common/ThemeToggle";

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
          ? "bg-[rgb(var(--sl-bg-rgb)/0.9)] backdrop-blur-lg border-b border-[rgb(var(--sl-gold-rgb)/0.2)] shadow-lg" 
          : "bg-transparent"
      }`}
      style={{
        boxShadow: scrolled ? "0 4px 30px rgb(var(--sl-gold-rgb) / 0.05)" : "none",
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
            <span style={{ color: "var(--sl-fg)" }}>SyntraLogic</span>
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
                        className={`relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sl-gold)] ${
                          isActive
                            ? "text-[color:var(--sl-gold-text)]"
                            : "text-[color:var(--sl-muted)] hover:text-[color:var(--sl-gold-text)]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                            style={{ backgroundColor: "var(--sl-gold)" }}
                          />
                        )}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      style={{
                        backgroundColor: "var(--sl-bg)",
                        borderColor: "rgb(var(--sl-gold-rgb) / 0.3)",
                      }}
                    >
                      {link.children.map((child) => (
                        <DropdownMenuItem
                          key={child.href}
                          onSelect={() => handleNavClick(child.href)}
                          className="cursor-pointer text-[color:var(--sl-muted)] focus:bg-[rgb(var(--sl-gold-rgb)/0.1)] focus:text-[color:var(--sl-gold-text)]"
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
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sl-gold)] ${
                    isActive 
                      ? "text-[color:var(--sl-gold-text)]" 
                      : "text-[color:var(--sl-muted)] hover:text-[color:var(--sl-gold-text)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{ backgroundColor: "var(--sl-gold)" }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button
            onClick={() => handleNavClick("#clients")}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-[color:rgb(var(--sl-gold-rgb)/0.2)]"
            style={{
              backgroundColor: "var(--sl-gold)",
              color: "var(--sl-on-gold)",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--sl-gold-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--sl-gold)";
            }}
          >
            Start a Project
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Open navigation menu"
                style={{ color: "var(--sl-fg)" }}
                className="hover:bg-[rgb(var(--sl-gold-rgb)/0.1)]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-[calc(100%-2rem)] md:max-w-sm"
              style={{
                backgroundColor: "var(--sl-bg)",
                borderColor: "rgb(var(--sl-gold-rgb) / 0.2)",
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
                  style={{ color: "var(--sl-fg)" }}
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
                              ? "text-[color:var(--sl-gold-text)] bg-[rgb(var(--sl-gold-rgb)/0.1)]"
                              : "text-[color:var(--sl-muted)] hover:bg-[rgb(var(--sl-gold-rgb)/0.05)] hover:text-[color:var(--sl-gold-text)]"
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
                    className="w-full transition-all duration-300 hover:shadow-lg hover:shadow-[color:rgb(var(--sl-gold-rgb)/0.2)]"
                    style={{
                      backgroundColor: "var(--sl-gold)",
                      color: "var(--sl-on-gold)",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--sl-gold-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--sl-gold)";
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