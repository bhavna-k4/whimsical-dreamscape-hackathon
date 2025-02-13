import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Create different movement speeds for cloud layers
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1F2C]">
      {/* Stars background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #ffffff 1px, transparent 1px),
            radial-gradient(circle at 40% 70%, #ffffff 1.2px, transparent 1.2px),
            radial-gradient(circle at 60% 20%, #ffffff 0.8px, transparent 0.8px),
            radial-gradient(circle at 80% 50%, #ffffff 1px, transparent 1px),
            radial-gradient(circle at 10% 60%, #ffffff 1.5px, transparent 1.5px),
            radial-gradient(circle at 30% 90%, #ffffff 0.7px, transparent 0.7px),
            radial-gradient(circle at 70% 40%, #ffffff 1.3px, transparent 1.3px),
            radial-gradient(circle at 90% 80%, #ffffff 0.9px, transparent 0.9px)
          `,
          backgroundSize: '200px 200px',
          animation: 'twinkle 4s infinite alternate',
        }}
      ></div>
      
      {/* Parallax Cloud Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Floating Cloud Group */}
        <motion.div 
          style={{ x: leftX }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-[-10%] top-1/4"
        >
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-white/90 via-white/40 to-transparent rounded-full absolute blur-[3px] mix-blend-screen"></div>
            <div className="w-56 h-56 bg-gradient-to-br from-white/80 via-white/30 to-transparent rounded-full absolute -left-8 -top-8 blur-[4px] mix-blend-screen"></div>
            <div className="w-40 h-40 bg-gradient-to-br from-white/70 via-white/40 to-transparent rounded-full absolute left-4 top-4 blur-[2px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Right Floating Cloud Group */}
        <motion.div 
          style={{ x: rightX }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute right-[-10%] top-1/3"
        >
          <div className="relative">
            <div className="w-52 h-52 bg-gradient-to-bl from-white/90 via-white/40 to-transparent rounded-full absolute blur-[3px] mix-blend-screen"></div>
            <div className="w-60 h-60 bg-gradient-to-bl from-white/80 via-white/30 to-transparent rounded-full absolute -right-8 -top-8 blur-[4px] mix-blend-screen"></div>
            <div className="w-44 h-44 bg-gradient-to-bl from-white/70 via-white/40 to-transparent rounded-full absolute right-4 top-4 blur-[2px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Center Bottom Cloud Group */}
        <motion.div 
          style={{ y: centerY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute left-1/2 bottom-[-10%] transform -translate-x-1/2"
        >
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-t from-white/90 via-white/40 to-transparent rounded-full absolute blur-[3px] mix-blend-screen"></div>
            <div className="w-72 h-72 bg-gradient-to-t from-white/80 via-white/30 to-transparent rounded-full absolute -left-8 -top-8 blur-[4px] mix-blend-screen"></div>
            <div className="w-56 h-56 bg-gradient-to-t from-white/70 via-white/40 to-transparent rounded-full absolute left-4 top-4 blur-[2px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Top Cloud Group */}
        <motion.div 
          style={{ y: centerY }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="absolute left-1/4 top-[-10%]"
        >
          <div className="relative">
            <div className="w-56 h-56 bg-gradient-to-b from-white/90 via-white/40 to-transparent rounded-full absolute blur-[3px] mix-blend-screen"></div>
            <div className="w-64 h-64 bg-gradient-to-b from-white/80 via-white/30 to-transparent rounded-full absolute -left-8 -top-8 blur-[4px] mix-blend-screen"></div>
            <div className="w-48 h-48 bg-gradient-to-b from-white/70 via-white/40 to-transparent rounded-full absolute left-4 top-4 blur-[2px] mix-blend-screen"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Dream. Build. <span className="text-hackathon-lightPurple">Innovate.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Join the ultimate high school business hackathon where ideas become reality
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-hackathon-purple hover:bg-hackathon-lightPurple hover:text-white transition-all duration-300"
            >
              Register Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
