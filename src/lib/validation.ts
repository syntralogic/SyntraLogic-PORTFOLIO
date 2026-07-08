import { z } from "zod";

const phoneSchema = z
  .string()
  .regex(/^[+]?[\d\s()-]{8,20}$/, "Please enter a valid phone number");


export const clientInquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: phoneSchema,
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select an estimated budget"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(20, "Please describe your project in at least 20 characters"),
});

export type ClientInquiryFormData = z.infer<typeof clientInquirySchema>;


export const clientHunterSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  country: z.string().min(2, "Country is required"),
  email: z.string().email("Please enter a valid email"),
  whatsapp: phoneSchema,
  experience: z.string().min(20, "Please describe your experience"),
  linkedIn: z
    .string()
    .trim()
    .refine(
      (value) =>
        value === "" ||
        /^https?:\/\/(www\.)?linkedin\.com\/.+/.test(value),
      "Please enter a valid LinkedIn URL",
    ),
  message: z.string().min(20, "Please write a message of at least 20 characters"),
});

export type ClientHunterFormData = z.infer<typeof clientHunterSchema>;


export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;