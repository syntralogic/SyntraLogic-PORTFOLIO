import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Briefcase, Send } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <SectionWrapper id="client-hunters" background="muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wider uppercase text-accent">
            Partnership Program
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
            Become a Client Hunter
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty mb-8">
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
                <div className="mt-1 p-1 rounded-full bg-accent/10 text-accent">
                  <Briefcase className="h-4 w-4" />
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6 md:p-10 rounded-3xl bg-card/60 border border-border backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-6">Apply to Become a Client Hunter</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Pakistan" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="youremail@example.com" {...field} />
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
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+92 300 1234567" {...field} />
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
                    <FormLabel>LinkedIn Profile (optional)</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="https://linkedin.com/in/your_id" {...field} />
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
                    <FormLabel>Your Experience</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your background and how you find clients..."
                        rows={4}
                        {...field}
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Why do you want to join the Client Hunter program?"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
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
    </SectionWrapper>
  );
}
