import { motion } from "framer-motion";
import { Users, Activity, Link as LinkIcon, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import freshtrackDashboard from "@/assets/freshtrack-dashboard1.jpeg";

const features = [
  { icon: Users,    text: "Group Step Leaderboards with shared weekly goals" },
  { icon: Activity, text: "Health Connect Integration for battery-efficient sync" },
  { icon: LinkIcon, text: "Invite via Link with zero sign-up friction for new members" },
  { icon: Shield,   text: "Private and Secure: invite-only groups, no data shared outside" },
];

export const PamojaFeature = () => {
  return (
    <section id="pamoja" className="relative py-32 overflow-hidden">

      {/* Background accent — teal/green for Pamoja */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #22C55E 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Phone Mockup (left on this card) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="phone-mockup-wrap">
              {/* Teal glow */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, #22C55E 0%, transparent 70%)",
                  filter: "blur(52px)",
                  transform: "scale(1.4)",
                }}
              />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                {/* Phone frame with Coming Soon overlay */}
                <div className="phone-frame">
                  <div className="phone-screen" style={{ position: "relative" }}>
                    <img
                      src={freshtrackDashboard}
                      alt="Coming Soon"
                      style={{ width: "100%", display: "block", filter: "blur(3px) brightness(0.35)" }}
                    />
                    {/* Coming Soon overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Clock size={28} style={{ color: "#22C55E", opacity: 0.9 }} />
                      <span
                        style={{
                          color: "#fff",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Header row: label + coming soon */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="section-label" style={{ marginBottom: 0 }}>New App</span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  color: "#22C55E",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                <Clock size={11} />
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
              Pamoja
            </h2>
            <p
              className="text-sm font-medium mb-6 tracking-wide"
              style={{ color: "#22C55E" }}
            >
              Swahili for "Together"
            </p>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A social group step-tracking app. Create private groups, share your daily step
              count, and walk further together.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <Icon size={18} className="mt-0.5 shrink-0" style={{ color: "#22C55E" }} />
                  {text}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Disabled Play Store button */}
              <div
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm cursor-not-allowed select-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#8A8F98",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                <Clock size={18} />
                Coming to Google Play
              </div>

              <Link
                to="/privacy/pamoja"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline decoration-dotted underline-offset-4"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
