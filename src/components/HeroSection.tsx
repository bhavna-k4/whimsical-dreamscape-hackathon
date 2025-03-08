
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

  // Enhanced transform values for deeper zoom effect
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blurProgress = useTransform(scrollYProgress, [0, 0.8], [0, 10]);
  
  // Enhanced star effects for deeper zoom feeling
  const starScaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const starOpacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  // New transform for the star field to create a tunnel effect
  const starZProgress = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
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
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1F2C]">
      {/* Enhanced Stars background with depth/tunnel effect */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          scale: starScaleProgress,
          opacity: starOpacityProgress,
          z: starZProgress,
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
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      ></motion.div>
      
      {/* Deep space background with enhanced depth effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-[#1A1F2C]/40 to-[#1A1F2C]/80"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.8]),
          transformOrigin: 'center center',
        }}
      ></motion.div>
      
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

      {/* Enhanced floating particles with depth effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              z: [0, Math.random() * 500 - 250],
              scale: [1, Math.random() * 2 + 0.5, 1],
              opacity: [
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.8 + 0.2,
                Math.random() * 0.5 + 0.3
              ],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
