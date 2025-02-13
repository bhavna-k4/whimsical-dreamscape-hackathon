import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      
      {/* Initial Cloud Cover */}
      <AnimatePresence>
        {/* Left Cover Cloud */}
        <motion.div 
          initial={{ x: 0, opacity: 1 }}
          animate={isLoaded ? { x: "-100%", opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="fixed inset-0 w-[100%] h-screen z-30"
        >
          <div className="w-full h-full bg-gradient-to-r from-white/95 via-white/80 to-transparent blur-xl"></div>
        </motion.div>

        {/* Right Cover Cloud */}
        <motion.div 
          initial={{ x: 0, opacity: 1 }}
          animate={isLoaded ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="fixed inset-0 w-[100%] h-screen z-30"
        >
          <div className="w-full h-full bg-gradient-to-l from-white/95 via-white/80 to-transparent blur-xl"></div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Side Cloud Group */}
        <motion.div 
          style={{ x: leftX }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="absolute left-[-20%] top-0 h-full"
        >
          <div className="relative h-full w-[50vw]">
            <div className="w-full h-full bg-gradient-to-r from-white/60 via-white/30 to-transparent absolute blur-[30px] mix-blend-screen"></div>
            <div className="w-[80%] h-full bg-gradient-to-r from-white/50 via-white/25 to-transparent absolute left-[10%] blur-[40px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Right Side Cloud Group */}
        <motion.div 
          style={{ x: rightX }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="absolute right-[-20%] top-0 h-full"
        >
          <div className="relative h-full w-[50vw]">
            <div className="w-full h-full bg-gradient-to-l from-white/60 via-white/30 to-transparent absolute blur-[30px] mix-blend-screen"></div>
            <div className="w-[80%] h-full bg-gradient-to-l from-white/50 via-white/25 to-transparent absolute right-[10%] blur-[40px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Center Cloud */}
        <motion.div 
          style={{ y: centerY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2.2 }}
          className="absolute left-1/2 bottom-[-20%] transform -translate-x-1/2"
        >
          <div className="relative">
            <div className="w-[80vw] h-[40vh] bg-gradient-to-t from-white/60 via-white/30 to-transparent rounded-full absolute blur-[30px] mix-blend-screen"></div>
            <div className="w-[70vw] h-[35vh] bg-gradient-to-t from-white/50 via-white/25 to-transparent rounded-full absolute left-[5vw] blur-[40px] mix-blend-screen"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="container mx-auto px-4 z-10"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Dream. Build. <span className="text-hackathon-lightPurple">Innovate.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Join the ultimate high school business hackathon where ideas become reality
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-hackathon-purple hover:bg-hackathon-lightPurple hover:text-white transition-all duration-300"
            >
              Register Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
