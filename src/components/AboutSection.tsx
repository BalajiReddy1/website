import { motion } from "framer-motion";
import { Zap, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Precision",
    description: "Every line of code is crafted with meticulous attention to detail.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours. We build with privacy as a core principle.",
  },
  {
    icon: Heart,
    title: "User Focused",
    description: "Beautiful, intuitive interfaces that put the user experience first.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,120,40,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Mission</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building the Future,
              <br />
              <span className="text-gradient-sunrise">One App at a Time</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Arkayen Labs, we believe in creating tools that seamlessly integrate into your
              daily life. Our mission is to solve real problems with elegant solutions that
              respect your time and privacy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for clean design and powerful functionality, we're dedicated
              to building applications that you'll actually love to use.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card p-6 flex gap-5 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,120,40,0.1)" }}>
                  <value.icon size={22} className="text-sunrise-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
