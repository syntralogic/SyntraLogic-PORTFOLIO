import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = "SyntraLogic | Premium Software Development Company",
  description = "Transforming ideas into powerful software solutions. Scalable, secure, and modern digital products for global businesses.",
  keywords = "software development, web applications, mobile apps, SaaS, APIs, enterprise software",
  url = "https://syntralogic.com/",
  image = "https://syntralogic.com/og-image.jpg",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SyntraLogic",
          url: "https://syntralogic.com/",
          logo: "https://syntralogic.com/favicon.png",
          description,
          contactPoint: {
            "@type": "ContactPoint",
            email: "contact@syntralogic.com",
            contactType: "sales",
          },
          sameAs: [
            "https://linkedin.com/company/syntralogic",
          ],
        })}
      </script>
    </Helmet>
  );
}
