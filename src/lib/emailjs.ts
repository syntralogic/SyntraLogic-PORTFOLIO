import emailjs from "@emailjs/browser";


export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}



export function getEmailConfig(
  templateKey: "client" | "hunter" | "contact",
): EmailConfig {


  let serviceId = "";
  let templateId = "";
  let publicKey = "";



  if (templateKey === "contact") {


    serviceId =
      import.meta.env.VITE_EMAILJS_CONTACT_SERVICE_ID;


    templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;


    publicKey =
      import.meta.env.VITE_EMAILJS_CONTACT_PUBLIC_KEY;



  } else {


    serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID;


    publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



    if (templateKey === "client") {

      templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT;

    } else {

      templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HUNTER;

    }

  }



  if (!serviceId || !templateId || !publicKey) {

    throw new Error(
      `EmailJS configuration missing for ${templateKey}`
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


  const {
    serviceId,
    templateId,
    publicKey,
  } = getEmailConfig(templateKey);



  console.log({
    templateKey,
    serviceId,
    templateId,
  });



  await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey,
  );

}