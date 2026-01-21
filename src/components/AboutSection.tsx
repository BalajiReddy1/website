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
    <section id="about" className="relative py-32 bg-cosmic-navy-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building the Future,
              <br />
              <span className="text-gradient-sunrise">One App at a Time</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Arkayen Labs, we believe in creating tools that seamlessly integrate into your daily life. 
              Our mission is to solve real problems with elegant solutions that respect your time and privacy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for clean design and powerful functionality, 
              we're dedicated to building applications that you'll actually love to use.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-5 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-sunrise-orange/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sunrise-orange/10 flex items-center justify-center shrink-0">
                  <value.icon size={24} className="text-sunrise-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
