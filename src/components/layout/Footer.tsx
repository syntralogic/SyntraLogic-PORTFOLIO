import { Code2, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { companyInfo, navLinks, footerExtraLinks, services } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

import logo from "@/assets/LOGO.png";


export function Footer() {
  const scrollTo = useScrollTo();

  const quickLinks = [...navLinks, ...footerExtraLinks].map((link) => ({
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
        backgroundColor: "var(--sl-bg)",
        borderColor: "rgb(var(--sl-gold-rgb) / 0.08)",
      }}
    >
      {/* Gold grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gold glow accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgb(var(--sl-gold-rgb) / 0.15) 0%, transparent 70%)",
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
              <span style={{ color: "var(--sl-fg)" }}>SyntraLogic</span>
            </a>
            <p className="text-sm text-pretty mb-6" style={{ color: "var(--sl-muted)" }}>
              Premium software development company delivering scalable, secure, and modern digital solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                  color: "var(--sl-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--sl-gold)";
                  e.currentTarget.style.color = "var(--sl-on-gold)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.08)";
                  e.currentTarget.style.color = "var(--sl-muted)";
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
                  backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                  color: "var(--sl-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--sl-gold)";
                  e.currentTarget.style.color = "var(--sl-on-gold)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.08)";
                  e.currentTarget.style.color = "var(--sl-muted)";
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
                  backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                  color: "var(--sl-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--sl-gold)";
                  e.currentTarget.style.color = "var(--sl-on-gold)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.08)";
                  e.currentTarget.style.color = "var(--sl-muted)";
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
                  backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                  color: "var(--sl-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--sl-gold)";
                  e.currentTarget.style.color = "var(--sl-on-gold)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.08)";
                  e.currentTarget.style.color = "var(--sl-muted)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--sl-fg)" }}>
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
                    style={{ color: "var(--sl-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--sl-gold-text)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--sl-muted)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--sl-fg)" }}>
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
                    style={{ color: "var(--sl-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--sl-gold-text)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--sl-muted)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--sl-fg)" }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5" style={{ color: "var(--sl-gold-text)" }} />
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="transition-colors duration-300"
                  style={{ color: "var(--sl-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--sl-gold-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--sl-muted)";
                  }}
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5" style={{ color: "var(--sl-gold-text)" }} />
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "var(--sl-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--sl-gold-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--sl-muted)";
                  }}
                >
                  {companyInfo.phoneLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-4 w-4 mt-0.5" style={{ color: "var(--sl-gold-text)" }} />
                <a
                  href={companyInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "var(--sl-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--sl-gold-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--sl-muted)";
                  }}
                >
                  SyntraLogic
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Github className="h-4 w-4 mt-0.5" style={{ color: "var(--sl-gold-text)" }} />
                <a
                  href={companyInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: "var(--sl-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--sl-gold-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--sl-muted)";
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
          style={{ borderColor: "rgb(var(--sl-gold-rgb) / 0.08)" }}
        >
          <p className="text-sm text-center md:text-left" style={{ color: "var(--sl-muted)" }}>
            &copy; {new Date().getFullYear()} SyntraLogic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="transition-colors duration-300"
              style={{ color: "var(--sl-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--sl-gold-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--sl-muted)";
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="transition-colors duration-300"
              style={{ color: "var(--sl-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--sl-gold-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--sl-muted)";
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