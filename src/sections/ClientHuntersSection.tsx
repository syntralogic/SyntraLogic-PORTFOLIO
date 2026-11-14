import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Briefcase, Send } from "lucide-react";
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
import { clientHunterSchema, type ClientHunterFormData } from "@/lib/validation";
import { sendEmail } from "@/lib/emailjs";
import { toast } from "sonner";

export function ClientHuntersSection() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ClientHunterFormData>({
    resolver: zodResolver(clientHunterSchema),
    defaultValues: {
      fullName: "",
      country: "",
      email: "",
      whatsapp: "",
      experience: "",
      linkedIn: "",
      message: "",
    },
  });

  async function onSubmit(values: ClientHunterFormData) {
    setLoading(true);
    try {
      await sendEmail("hunter", {
        from_name: values.fullName,
        country: values.country,
        email: values.email,
        whatsapp: values.whatsapp,
        experience: values.experience,
        linkedin: values.linkedIn || "Not provided",
        message: values.message,
      });
      toast.success("Application submitted! We will review and reach out soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section 
      id="client-hunters" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--sl-bg)" }}
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

      {/* Gold glow accents */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgb(var(--sl-gold-rgb) / 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span 
              className="inline-block mb-3 text-sm font-semibold tracking-wider uppercase"
              style={{ color: "var(--sl-gold-text)" }}
            >
              Partnership Program
            </span>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance mb-6"
              style={{ color: "var(--sl-fg)" }}
            >
              Become a Client Hunter
            </h2>
            <p 
              className="text-base md:text-lg text-pretty mb-8"
              style={{ color: "var(--sl-muted)" }}
            >
              Join the SyntraLogic Client Hunter program and earn commissions by referring successful software projects. Whether you are a consultant, agency, freelancer, or connector, we reward you for bringing us clients who need world-class software development.
            </p>

            <div className="space-y-4">
              {[
                "Earn competitive commissions on closed projects",
                "Work with a reliable engineering partner",
                "Get marketing support and proposal assistance",
                "Grow your network with premium technology solutions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div 
                    className="mt-1 p-1 rounded-full"
                    style={{
                      backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                      color: "var(--sl-gold-text)",
                    }}
                  >
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <p style={{ color: "var(--sl-muted)" }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 md:p-10 rounded-3xl border backdrop-blur-sm"
            style={{
              backgroundColor: "rgb(var(--sl-tint) / 0.02)",
              borderColor: "rgb(var(--sl-gold-rgb) / 0.08)",
            }}
          >
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--sl-fg)" }}
            >
              Apply to Become a Client Hunter
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "var(--sl-muted)" }}>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "var(--sl-muted)" }}>Country</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Pakistan" 
                            {...field} 
                            className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "var(--sl-muted)" }}>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="youremail@example.com" 
                            {...field} 
                            className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "var(--sl-muted)" }}>WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+92 300 1234567" 
                            {...field} 
                            className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>LinkedIn Profile (optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="url" 
                          placeholder="https://linkedin.com/in/your_id" 
                          {...field} 
                          className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Your Experience</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your background and how you find clients..."
                          rows={4}
                          {...field}
                          className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)] resize-none"
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
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Why do you want to join the Client Hunter program?"
                          rows={4}
                          {...field}
                          className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto transition-all duration-300 hover:shadow-lg hover:shadow-[color:rgb(var(--sl-gold-rgb)/0.2)]"
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
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Apply Now
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