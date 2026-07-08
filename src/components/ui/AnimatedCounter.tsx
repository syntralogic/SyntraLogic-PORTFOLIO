import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", label, duration = 1.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-muted-foreground">{label}</div>
    </motion.div>
  );
}
