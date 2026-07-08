import emailjs from "@emailjs/browser";

export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function getEmailConfig(
  templateKey: "client" | "hunter" | "contact",
): EmailConfig {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  let serviceId: string | undefined;
  let templateId: string | undefined;

  if (templateKey === "contact") {
    serviceId = import.meta.env.VITE_EMAILJS_CONTACT_SERVICE_ID;
    templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
  } else {
    serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    templateId =
      templateKey === "client"
        ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT
        : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HUNTER;
  }

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      `EmailJS configuration missing for ${templateKey} form.`,
    );
  }

  return {
    serviceId,
    templateId,
    publicKey,
  };
}

export async function sendEmail<T extends Record<string, unknown>>(
  templateKey: "client" | "hunter" | "contact",
  templateParams: T,
): Promise<void> {
  const { serviceId, templateId, publicKey } =
    getEmailConfig(templateKey);

  await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    {
      publicKey,
    },
  );
}