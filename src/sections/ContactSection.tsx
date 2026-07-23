import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Loader2,
  Mail,
  Phone,
  Send,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validation";
import { sendEmail } from "@/lib/emailjs";
import { companyInfo } from "@/lib/data";
import { toast } from "sonner";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    setLoading(true);
    try {
      await sendEmail("contact", {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      toast.success("Message sent successfully! We will reply shortly.");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: companyInfo.phoneLabel,
      href: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "SyntraLogic",
      href: companyInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SyntraLogic",
      href: companyInfo.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: companyInfo.address,
      href: "#",
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
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
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Custom Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-sm font-medium uppercase tracking-wider mb-4"
              style={{ color: "#D4AF37" }}
            >
              Contact Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#E2E8F0" }}
          >
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <p style={{ color: "#E2E8F0" }}>
              Whether you need a full product build, a reliable engineering
              team, or a long-term technology partner, we are here to help.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={
                      method.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                    style={{
                      borderColor: "rgba(212, 175, 55, 0.08)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                      e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.08)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
                    }}
                  >
                    <Icon 
                      className="h-5 w-5 transition-colors duration-300"
                      style={{ color: "#D4AF37" }}
                    />
                    <div>
                      <p className="text-sm" style={{ color: "#E2E8F0" }}>
                        {method.label}
                      </p>
                      <p className="font-medium" style={{ color: "#FFFFFF" }}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 p-6 md:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(212, 175, 55, 0.08)",
            }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "#E2E8F0" }}>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-[rgba(255,255,255,0.03)] border-[rgba(212,175,55,0.1)] text-[#FFFFFF] placeholder:text-[#E2E8F0]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "#E2E8F0" }}>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="bg-[rgba(255,255,255,0.03)] border-[rgba(212,175,55,0.1)] text-[#FFFFFF] placeholder:text-[#E2E8F0]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "#E2E8F0" }}>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Project inquiry"
                          {...field}
                          className="bg-[rgba(255,255,255,0.03)] border-[rgba(212,175,55,0.1)] text-[#FFFFFF] placeholder:text-[#E2E8F0]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "#E2E8F0" }}>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="How can we help you?"
                          {...field}
                          className="bg-[rgba(255,255,255,0.03)] border-[rgba(212,175,55,0.1)] text-[#FFFFFF] placeholder:text-[#E2E8F0]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
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
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}