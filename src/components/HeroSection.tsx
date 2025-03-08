
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SpaceBackground from "./SpaceBackground";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced transform values for deeper zoom effect
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blurProgress = useTransform(scrollYProgress, [0, 0.8], [0, 10]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const createCloudStyle = (index: number) => ({
    top: `${Math.sin(index * 0.5) * 30 + 50}%`,
    left: `${Math.cos(index * 0.5) * 30 + 50}%`,
    width: `${Math.random() * 40 + 30}vh`,
    height: `${Math.random() * 40 + 30}vh`,
    opacity: Math.random() * 0.4 + 0.6,
  });

  return (
    <SpaceBackground>
      <div ref={containerRef} className="relative min-h-screen flex items-center justify-center">
        {/* Initial Cloud Cover */}
        <AnimatePresence>
          {/* Left Cover Cloud */}
          <motion.div 
            initial={{ x: 0, opacity: 1 }}
            animate={isLoaded ? { x: "-120%", opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 3, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
            className="fixed inset-0 w-[120%] h-screen z-30"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFDEE2] via-[#E5DEFF]/90 to-transparent blur-2xl"></div>
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`left-cloud-${i}`}
                    className="absolute"
                    initial={createCloudStyle(i)}
                    animate={{
                      y: [0, Math.random() * 20 - 10],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFDEE2]/80 via-[#E5DEFF]/60 to-transparent blur-xl mix-blend-screen"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Cover Cloud */}
          <motion.div 
            initial={{ x: 0, opacity: 1 }}
            animate={isLoaded ? { x: "120%", opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 3, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
            className="fixed inset-0 w-[120%] h-screen z-30"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-[#D6BCFA] via-[#FFDEE2]/90 to-transparent blur-2xl"></div>
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`right-cloud-${i}`}
                    className="absolute"
                    initial={createCloudStyle(i)}
                    animate={{
                      y: [0, Math.random() * 20 - 10],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-bl from-[#D6BCFA]/80 via-[#E5DEFF]/60 to-transparent blur-xl mix-blend-screen"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Content */}
        <motion.div 
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            filter: `blur(${blurProgress}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
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
    </SpaceBackground>
  );
};

export default HeroSection;
