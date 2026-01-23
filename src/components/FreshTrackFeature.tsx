import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import freshtrackDashboard from "@/assets/freshtrack-dashboard.png";

export const FreshTrackFeature = () => {
  return (
    <section id="featured" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 bg-gradient-radial from-sunrise-orange/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sunrise-orange/10 text-sunrise-orange text-sm font-semibold mb-6">
              Featured Product
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              FreshTrack
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Stop wasting food. Track grocery expiry dates instantly and save money.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Smart expiry date reminders",
                "Scan barcodes for instant tracking",
                "Reduce food waste by up to 40%",
                "Beautiful, intuitive interface",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-sunrise-orange" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-sunrise inline-flex items-center gap-3"
              >
                <Play size={20} className="relative z-10" />
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

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-sunrise-orange/30 via-sunrise-orange/10 to-transparent blur-3xl scale-150" />

              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative phone-mockup w-[280px] md:w-[320px]"
              >
                <div className="rounded-[2.5rem] overflow-hidden bg-cosmic-navy-light">
                  <img
                    src={freshtrackDashboard}
                    alt="FreshTrack App Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
