import { Code2, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { companyInfo, navLinks, services } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

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
    <footer className="relative border-t border-border bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <Code2 className="h-7 w-7 text-accent" />
              <span className="gradient-text">SyntraLogic</span>
            </a>
            <p className="text-muted-foreground text-sm text-pretty mb-6">
              Premium software development company delivering scalable, secure, and modern digital solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="p-2 rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 6).map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {companyInfo.phoneLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Github className="h-4 w-4 mt-0.5 text-accent" />
                <a
                  href={companyInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  SyntraLogic
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} SyntraLogic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
