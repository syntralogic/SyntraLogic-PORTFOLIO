import { Code2, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { companyInfo, navLinks, services } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

import logo from "@/assets/LOGO.png";


export function Footer() {
  const scrollTo = useScrollTo();

  const quickLinks = navLinks.map((link) => ({
    label: link.label,
    href: link.href,
  }));

  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: `#services`,
  }));

  return (
    <footer 
      className="relative border-t pt-16 pb-8 overflow-hidden"
      style={{
        backgroundColor: "#0B0B0B",
        borderColor: "rgba(212, 175, 55, 0.08)",
      }}
    >
      {/* Gold grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gold glow accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="flex items-center gap-2 text-2xl font-bold mb-4"
              aria-label="SyntraLogic Home"
            >
            <img src={logo} alt="SyntraLogic Logo" className="h-7 w-auto" />
              <span style={{ color: "#FFFFFF" }}>SyntraLogic</span>
            </a>
            <p className="text-sm text-pretty mb-6" style={{ color: "#E2E8F0" }}>
              Premium software development company delivering scalable, secure, and modern digital solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                  color: "#E2E8F0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4AF37";
                  e.currentTarget.style.color = "#0B0B0B";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
                  e.currentTarget.style.color = "#E2E8F0";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="p-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                  color: "#E2E8F0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4AF37";
                  e.currentTarget.style.color = "#0B0B0B";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
                  e.currentTarget.style.color = "#E2E8F0";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                  color: "#E2E8F0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4AF37";
                  e.currentTarget.style.color = "#0B0B0B";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
                  e.currentTarget.style.color = "#E2E8F0";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                  color: "#E2E8F0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4AF37";
                  e.currentTarget.style.color = "#0B0B0B";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
                  e.currentTarget.style.color = "#E2E8F0";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "#FFFFFF" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#E2E8F0" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D4AF37";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#E2E8F0";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "#FFFFFF" }}>
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 6).map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#E2E8F0" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D4AF37";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#E2E8F0";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "#FFFFFF" }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5" style={{ color: "#D4AF37" }} />
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="transition-colors duration-300"
                  style={{ color: "#E2E8F0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E2E8F0";
                  }}
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5" style={{ color: "#D4AF37" }} />
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "#E2E8F0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E2E8F0";
                  }}
                >
                  {companyInfo.phoneLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-4 w-4 mt-0.5" style={{ color: "#D4AF37" }} />
                <a
                  href={companyInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "#E2E8F0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E2E8F0";
                  }}
                >
                  SyntraLogic
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Github className="h-4 w-4 mt-0.5" style={{ color: "#D4AF37" }} />
                <a
                  href={companyInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "#E2E8F0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E2E8F0";
                  }}
                >
                  SyntraLogic
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(212, 175, 55, 0.08)" }}
        >
          <p className="text-sm text-center md:text-left" style={{ color: "#E2E8F0" }}>
            &copy; {new Date().getFullYear()} SyntraLogic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="transition-colors duration-300"
              style={{ color: "#E2E8F0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D4AF37";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#E2E8F0";
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="transition-colors duration-300"
              style={{ color: "#E2E8F0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D4AF37";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#E2E8F0";
              }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}