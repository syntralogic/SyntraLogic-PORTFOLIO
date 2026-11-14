import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("@sentry")) return "vendor-sentry";
          if (id.includes("@supabase")) return "vendor-supabase";
          if (id.includes("motion")) return "vendor-motion";
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (id.includes("react-hook-form") || id.includes("zod") || id.includes("@hookform"))
            return "vendor-forms";
          if (id.includes("react-dom") || id.includes("react-router") || /node_modules\/react\//.test(id))
            return "vendor-react";
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
