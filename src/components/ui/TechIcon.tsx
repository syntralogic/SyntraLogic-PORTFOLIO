import { techIconData } from "./techIconData";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, string> = {
  HTML5: "html5",
  CSS3: "css3",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  "Next.js": "nextdotjs",
  "Vue.js": "vuedotjs",
  "Nuxt.js": "nuxtdotjs",
  Angular: "angular",
  Svelte: "svelte",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap",
  "Material UI": "mui",
  "Shadcn/UI": "shadcnui",
  "Chakra UI": "chakraui",
  "Framer Motion": "framer",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  NestJS: "nestjs",
  PHP: "php",
  Laravel: "laravel",
  Python: "python",
  Django: "django",
  FastAPI: "fastapi",
  "ASP.NET Core": "dotnet",
  Flutter: "flutter",
  "React Native": "react",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MariaDB: "mariadb",
  SQLite: "sqlite",
  Firebase: "firebase",
  Redis: "redis",
  Supabase: "supabase",
  Docker: "docker",
  "Docker Compose": "docker",
  Kubernetes: "kubernetes",
  Git: "git",
  GitHub: "github",
  "GitHub Actions": "githubactions",
  Vercel: "vercel",
  Netlify: "netlify",
  AWS: "amazonwebservices",
  Azure: "microsoftazure",
  "Google Cloud": "googlecloud",
  Cloudflare: "cloudflare",
  Linux: "linux",
  Nginx: "nginx",
  "REST API": "swagger",
  GraphQL: "graphql",
  EmailJS: "emailjs",
  Stripe: "stripe",
  PayPal: "paypal",
  Razorpay: "razorpay",
  "Google Maps API": "googlemaps",
  Twilio: "twilio",
  "OpenAI API": "openai",
  JWT: "jsonwebtokens",
  OAuth: "auth0",
  "Firebase Authentication": "firebase",
  Clerk: "clerk",
  "Auth.js": "auth0",
  "Supabase Auth": "supabase",
  "VS Code": "visualstudiocode",
  Postman: "postman",
  npm: "npm",
  pnpm: "pnpm",
  Yarn: "yarn",
  "GitHub Desktop": "github",
};

export function TechIcon({ name, size = 28, className = "" }: TechIconProps) {
  const slug = iconMap[name];
  const icon = slug ? techIconData[slug] : null;
  const initial = name.charAt(0).toUpperCase();

  if (!icon) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-muted text-accent font-semibold ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.45 }}
        aria-label={name}
      >
        {initial}
      </div>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ color: `#${icon.hex}` }}
      aria-label={name}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
