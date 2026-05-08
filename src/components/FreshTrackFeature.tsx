import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import freshtrackDashboard from "@/assets/freshtrack-dashboard1.jpeg";

const features = [
  "Smart expiry date reminders",
  "Scan barcodes for instant tracking",
  "Reduce food waste by up to 40%",
  "Beautiful, intuitive interface",
];

/** Pure-CSS phone mockup that wraps any image */
export const PhoneMockup = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <div className="phone-frame">
    <div className="phone-screen">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export const FreshTrackFeature = () => {
  return (
    <section id="featured" className="relative py-32 overflow-hidden">

      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, hsl(20,100%,60%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="section-label">Featured App</span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              FreshTrack
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stop wasting food. Track grocery expiry dates instantly and save money.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle2
                    size={18}
                    className="text-sunrise-orange shrink-0"
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.arkayenlabs.freshtrack"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-sunrise inline-flex items-center gap-3"
              >
                <Play size={18} className="relative z-10" fill="currentColor" />
                <span className="relative z-10">Download on Google Play</span>
              </motion.a>

              <Link
                to="/privacy/freshtrack"
                className="text-muted-foreground hover:text-sunrise-orange transition-colors text-sm underline decoration-dotted underline-offset-4"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>

          {/* ── Phone Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="phone-mockup-wrap">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(20,100%,60%) 0%, transparent 70%)",
                  filter: "blur(48px)",
                  transform: "scale(1.4)",
                }}
              />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneMockup src={freshtrackDashboard} alt="FreshTrack App Dashboard" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
