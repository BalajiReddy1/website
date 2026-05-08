import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* ── Ambient Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orange blob */}
        <div
          className="animate-blob absolute rounded-full opacity-[0.12]"
          style={{
            width: 600,
            height: 600,
            top: "10%",
            left: "15%",
            background: "radial-gradient(circle, hsl(20, 100%, 60%) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Amber blob */}
        <div
          className="animate-blob animation-delay-2000 absolute rounded-full opacity-[0.08]"
          style={{
            width: 500,
            height: 500,
            top: "40%",
            right: "10%",
            background: "radial-gradient(circle, hsl(30, 100%, 55%) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Rotating sun rays */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-sun-rays w-[1100px] h-[1100px]">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-0.5 h-[500px] origin-bottom"
                style={{
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  background: `linear-gradient(to top, transparent, hsl(20,100%,60%,0.1), transparent)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Stat badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{
            background: "rgba(255,120,40,0.10)",
            border: "1px solid rgba(255,120,40,0.22)",
            color: "hsl(20,100%,60%)",
            fontFamily: "Space Grotesk, sans-serif",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "hsl(20,100%,60%)" }}
          />
          2 Apps Live on Android
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-none">
            <span className="block">Arkayen</span>
            <span className="text-gradient-sunrise">Labs</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting everyday tools with precision.
          <br className="hidden md:block" />
          <span className="text-foreground/70">Apps that just work, beautifully.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#featured" className="btn-sunrise gap-2">
            <span className="relative z-10">Discover Our Apps</span>
          </a>
          <a href="#about" className="btn-ghost gap-2">
            Learn More
          </a>
        </motion.div>


      </div>
    </section>
  );
};
