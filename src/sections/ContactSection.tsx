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
} from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
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


      toast.success(
        "Message sent successfully! We will reply shortly.",
      );


      form.reset();


    } catch (error) {

      console.error("EmailJS Error:", error);

      toast.error(
        "Failed to send message. Please try again.",
      );


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

    <SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">


        {/* Contact Information */}

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >


          <p className="text-muted-foreground">
            Whether you need a full product build, a reliable engineering
            team, or a long-term technology partner, we are here to help.
          </p>



          <div className="space-y-4">

            {contactMethods.map((method)=>{

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
                  className="flex items-center gap-4 p-4 rounded-xl border hover:bg-muted transition"
                >

                  <Icon className="h-5 w-5"/>


                  <div>

                    <p className="text-sm text-muted-foreground">
                      {method.label}
                    </p>


                    <p className="font-medium">
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

          className="lg:col-span-3 p-6 md:p-10 rounded-3xl border"

        >


          <Form {...form}>


            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >



              <FormField

                control={form.control}

                name="name"

                render={({field})=>(

                  <FormItem>

                    <FormLabel>
                      Name
                    </FormLabel>


                    <FormControl>

                      <Input
                        placeholder="Your name"
                        {...field}
                      />

                    </FormControl>


                    <FormMessage/>

                  </FormItem>

                )}

              />





              <FormField

                control={form.control}

                name="email"

                render={({field})=>(

                  <FormItem>

                    <FormLabel>
                      Email
                    </FormLabel>


                    <FormControl>

                      <Input

                        type="email"

                        placeholder="your@email.com"

                        {...field}

                      />

                    </FormControl>


                    <FormMessage/>

                  </FormItem>

                )}

              />





              <FormField

                control={form.control}

                name="subject"

                render={({field})=>(

                  <FormItem>

                    <FormLabel>
                      Subject
                    </FormLabel>


                    <FormControl>

                      <Input

                        placeholder="Project inquiry"

                        {...field}

                      />

                    </FormControl>


                    <FormMessage/>

                  </FormItem>

                )}

              />





              <FormField

                control={form.control}

                name="message"

                render={({field})=>(

                  <FormItem>


                    <FormLabel>
                      Message
                    </FormLabel>


                    <FormControl>

                      <Textarea

                        rows={5}

                        placeholder="How can we help you?"

                        {...field}

                      />


                    </FormControl>


                    <FormMessage/>

                  </FormItem>


                )}

              />





              <Button

                type="submit"

                disabled={loading}

              >


                {

                  loading ?

                  (

                    <>

                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>

                      Sending...

                    </>

                  )

                  :

                  (

                    <>

                      <Send className="mr-2 h-4 w-4"/>

                      Send Message

                    </>

                  )

                }


              </Button>



            </form>


          </Form>


        </motion.div>



      </div>


    </SectionWrapper>

  );
}