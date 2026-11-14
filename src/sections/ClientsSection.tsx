import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clientInquirySchema, type ClientInquiryFormData } from "@/lib/validation";
import { sendEmail } from "@/lib/emailjs";
import { projectTypes, budgetRanges, timelines } from "@/lib/data";
import { toast } from "sonner";

export function ClientsSection() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ClientInquiryFormData>({
    resolver: zodResolver(clientInquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    },
  });

  async function onSubmit(values: ClientInquiryFormData) {
    setLoading(true);
    try {
      await sendEmail("client", {
        from_name: values.fullName,
        company_name: values.companyName,
        email: values.email,
        phone: values.phone,
        project_type: values.projectType,
        budget: values.budget,
        timeline: values.timeline,
        message: values.description,
      });
      toast.success("Inquiry sent successfully! We will contact you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section 
      id="clients" 
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
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgb(var(--sl-gold-rgb) / 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgb(var(--sl-gold-rgb) / 0.08) 0%, transparent 70%)",
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
              style={{ color: "var(--sl-gold-text)" }}
            >
              For Clients
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "var(--sl-fg)" }}
          >
            Start Your Project With SyntraLogic
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--sl-muted)" }}
          >
            Tell us about your project. We will review your requirements and prepare a tailored proposal.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto p-6 md:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300"
          style={{
            backgroundColor: "rgb(var(--sl-tint) / 0.02)",
            borderColor: "rgb(var(--sl-gold-rgb) / 0.08)",
          }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Acme Inc." 
                          {...field} 
                          className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] placeholder:text-[rgb(var(--sl-muted-rgb)/0.4)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="yourcompany@email.com" 
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Phone Number</FormLabel>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[color:var(--sl-bg)] border-[rgb(var(--sl-gold-rgb)/0.1)]">
                          {projectTypes.map((type) => (
                            <SelectItem 
                              key={type} 
                              value={type}
                              className="text-[color:var(--sl-muted)] hover:text-[color:var(--sl-gold-text)] hover:bg-[rgb(var(--sl-gold-rgb)/0.05)] focus:bg-[rgb(var(--sl-gold-rgb)/0.05)]"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Estimated Budget</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[color:var(--sl-bg)] border-[rgb(var(--sl-gold-rgb)/0.1)]">
                          {budgetRanges.map((range) => (
                            <SelectItem 
                              key={range} 
                              value={range}
                              className="text-[color:var(--sl-muted)] hover:text-[color:var(--sl-gold-text)] hover:bg-[rgb(var(--sl-gold-rgb)/0.05)] focus:bg-[rgb(var(--sl-gold-rgb)/0.05)]"
                            >
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--sl-muted)" }}>Timeline</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[rgb(var(--sl-tint)/0.03)] border-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-fg)] focus:border-[color:var(--sl-gold)] focus:ring-[rgb(var(--sl-gold-rgb)/0.2)]">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[color:var(--sl-bg)] border-[rgb(var(--sl-gold-rgb)/0.1)]">
                          {timelines.map((timeline) => (
                            <SelectItem 
                              key={timeline} 
                              value={timeline}
                              className="text-[color:var(--sl-muted)] hover:text-[color:var(--sl-gold-text)] hover:bg-[rgb(var(--sl-gold-rgb)/0.05)] focus:bg-[rgb(var(--sl-gold-rgb)/0.05)]"
                            >
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "var(--sl-muted)" }}>Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your goals, features, and any specific requirements..."
                        rows={5}
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}