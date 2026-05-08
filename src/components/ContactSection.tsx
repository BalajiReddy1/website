import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="text-gradient-sunrise">Amazing Together</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Have a question, suggestion, or just want to say hi?
            We'd love to hear from you.
          </p>

          <motion.a
            href="mailto:hello@arkayenlabs.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-sunrise inline-flex items-center gap-3"
          >
            <Mail size={18} className="relative z-10" />
            <span className="relative z-10">hello@arkayenlabs.com</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
