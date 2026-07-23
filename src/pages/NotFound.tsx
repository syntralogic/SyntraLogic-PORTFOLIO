import { Link } from "react-router-dom";
import PageMeta from "@/components/common/PageMeta";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="" />
      <div 
        className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden"
        style={{ backgroundColor: "#0B0B0B" }}
      >
        {/* Gold grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        {/* Gold glow accent */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 pointer-events-none opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 
              className="mb-8 font-bold text-title-md xl:text-title-2xl"
              style={{ color: "#D4AF37" }}
            >
              ERROR
            </h1>

            <div className="relative">
              <div 
                className="text-8xl sm:text-9xl font-extrabold tracking-wider"
                style={{ color: "#D4AF37" }}
              >
                404
              </div>
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: "#D4AF37" }}
              />
            </div>

            <p 
              className="mt-10 mb-6 text-base sm:text-lg"
              style={{ color: "#E2E8F0" }}
            >
              The page may have been deleted or does not exist. Please check the
              URL is correct.
            </p>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
              style={{
                backgroundColor: "#D4AF37",
                color: "#0B0B0B",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A030";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Back to home
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <p 
          className="absolute text-sm text-center -translate-x-1/2 bottom-6 left-1/2"
          style={{ color: "#E2E8F0" }}
        >
          &copy; {new Date().getFullYear()} SyntraLogic. All rights reserved.
        </p>
      </div>
    </>
  );
}