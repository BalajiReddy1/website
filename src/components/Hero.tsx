import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Animated Sun Rays Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Glow Core */}
        <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-radial from-sunrise-orange/20 via-sunrise-orange/5 to-transparent animate-pulse-glow" />
        
        {/* Rotating Sun Rays */}
        <div className="absolute w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] animate-sun-rays">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-[400px] md:h-[600px] origin-bottom"
              style={{
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
                background: `linear-gradient(to top, transparent, hsl(20, 100%, 60%, 0.15), transparent)`,
              }}
            />
          ))}
        </div>

        {/* Secondary Glow */}
        <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial from-sunrise-amber/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-6">
            <span className="block">Arkayen</span>
            <span className="text-gradient-sunrise">Labs</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Crafting everyday tools with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#featured" className="btn-sunrise">
            <span className="relative z-10">Discover Our Apps</span>
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

    </section>
  );
};
