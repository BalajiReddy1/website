import { motion } from "framer-motion";
import { Timer, FileText, Sparkles } from "lucide-react";

const upcomingApps = [
  {
    name: "FocusTimer",
    description: "Boost productivity with intelligent focus sessions and break reminders.",
    icon: Timer,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "NoteSync",
    description: "Seamlessly sync notes across all your devices with end-to-end encryption.",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const LabSection = () => {
  return (
    <section id="apps" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-6">
            <Sparkles size={16} className="text-sunrise-orange" />
            In the Pipeline
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            The Lab
          </h2>
        </motion.div>

        {/* App Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingApps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 group cursor-pointer"
            >
              {/* Coming Soon Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-6">
                Coming Soon
              </span>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <app.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {app.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {app.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sunrise-orange/0 to-sunrise-orange/0 group-hover:from-sunrise-orange/5 group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
