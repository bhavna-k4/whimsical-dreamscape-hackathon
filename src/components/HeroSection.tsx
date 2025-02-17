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

  const createCloudStyle = (index: number) => ({
    top: `${Math.sin(index * 0.5) * 30 + 50}%`,
    left: `${Math.cos(index * 0.5) * 30 + 50}%`,
    width: `${Math.random() * 40 + 30}vh`,
    height: `${Math.random() * 40 + 30}vh`,
    opacity: Math.random() * 0.4 + 0.6,
  });

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

        {/* Top Cover Cloud */}
        <motion.div 
          initial={{ y: 0, opacity: 1 }}
          animate={isLoaded ? { y: "-120%", opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          className="fixed inset-0 w-screen h-[120%] z-30"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#E5DEFF] via-[#FFDEE2]/90 to-transparent blur-2xl"></div>
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`top-cloud-${i}`}
                  className="absolute"
                  initial={createCloudStyle(i)}
                  animate={{
                    y: [0, Math.random() * 20 - 10],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#E5DEFF]/80 via-[#FFDEE2]/60 to-transparent blur-xl mix-blend-screen"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Upper Right Edge Cloud */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2.8 }}
          className="absolute right-[5%] top-[10%]"
        >
          <div className="cloud-group">
            <div className="w-72 h-72 rounded-full bg-gradient-to-bl from-[#E5DEFF]/60 via-[#FFDEE2]/40 to-transparent absolute blur-xl mix-blend-screen"></div>
            <div className="w-64 h-64 rounded-full bg-gradient-to-bl from-[#D6BCFA]/50 via-[#E5DEFF]/30 to-transparent absolute -top-8 right-12 blur-xl mix-blend-screen"></div>
            <div className="w-56 h-56 rounded-full bg-gradient-to-bl from-[#FFDEE2]/40 via-[#FDE1D3]/30 to-transparent absolute top-4 right-16 blur-xl mix-blend-screen"></div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-bl from-[#E5DEFF]/45 via-[#FFDEE2]/35 to-transparent absolute -top-4 right-8 blur-xl mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Lower Left Edge Cloud */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 3 }}
          className="absolute left-[5%] bottom-[10%]"
        >
          <div className="cloud-group">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-[#FFDEE2]/50 via-[#E5DEFF]/40 to-transparent absolute blur-xl mix-blend-screen"></div>
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#D6BCFA]/40 via-[#FFDEE2]/30 to-transparent absolute -bottom-6 left-10 blur-xl mix-blend-screen"></div>
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#E5DEFF]/30 via-[#FFDEE2]/20 to-transparent absolute bottom-4 left-14 blur-xl mix-blend-screen"></div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#FFDEE2]/35 via-[#E5DEFF]/25 to-transparent absolute -bottom-2 left-8 blur-xl mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Upper Left Corner Cloud */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2.5 }}
          className="absolute left-0 top-0"
        >
          <div className="cloud-group">
            <div className="w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-[#E5DEFF]/70 via-[#FFDEE2]/50 to-transparent absolute blur-2xl mix-blend-screen"></div>
            <div className="w-[25vw] h-[25vw] rounded-full bg-gradient-to-br from-[#D6BCFA]/60 via-[#E5DEFF]/40 to-transparent absolute top-[-8%] left-[-3%] blur-2xl mix-blend-screen"></div>
            <div className="w-[20vw] h-[20vw] rounded-full bg-gradient-to-br from-[#FFDEE2]/55 via-[#E5DEFF]/35 to-transparent absolute top-[5%] left-[8%] blur-2xl mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Bottom Right Corner Cloud */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2.7 }}
          className="absolute right-0 bottom-0"
        >
          <div className="cloud-group">
            <div className="w-[30vw] h-[30vw] rounded-full bg-gradient-to-tl from-[#FFDEE2]/70 via-[#E5DEFF]/50 to-transparent absolute blur-2xl mix-blend-screen"></div>
            <div className="w-[25vw] h-[25vw] rounded-full bg-gradient-to-tl from-[#D6BCFA]/60 via-[#FFDEE2]/40 to-transparent absolute bottom-[-8%] right-[-3%] blur-2xl mix-blend-screen"></div>
            <div className="w-[20vw] h-[20vw] rounded-full bg-gradient-to-tl from-[#E5DEFF]/55 via-[#FFDEE2]/35 to-transparent absolute bottom-[5%] right-[8%] blur-2xl mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Left Side Clouds */}
        <motion.div 
          style={{ x: leftX }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2.5 }}
          className="absolute left-[-5%] top-[20%] flex gap-8"
        >
          <div className="cloud-group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FFDEE2] via-[#FDE1D3] to-transparent absolute blur-[12px] mix-blend-screen"></div>
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E5DEFF] via-[#FFDEE2] to-transparent absolute -top-8 left-12 blur-[12px] mix-blend-screen"></div>
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#D6BCFA] via-[#E5DEFF] to-transparent absolute top-4 left-16 blur-[12px] mix-blend-screen"></div>
          </div>
          <div className="cloud-group translate-y-12">
            <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#E5DEFF] via-[#FFDEE2] to-transparent absolute blur-[12px] mix-blend-screen"></div>
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#D6BCFA] via-[#E5DEFF] to-transparent absolute -top-10 left-14 blur-[12px] mix-blend-screen"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FFDEE2] via-[#FDE1D3] to-transparent absolute top-6 left-20 blur-[12px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Right Side Clouds */}
        <motion.div 
          style={{ x: rightX }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="absolute right-[-5%] top-[30%] flex gap-8"
        >
          <div className="cloud-group">
            <div className="w-48 h-48 rounded-full bg-gradient-to-bl from-[#D6BCFA] via-[#E5DEFF] to-transparent absolute blur-[12px] mix-blend-screen"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-bl from-[#FFDEE2] via-[#FDE1D3] to-transparent absolute -top-12 right-16 blur-[12px] mix-blend-screen"></div>
            <div className="w-44 h-44 rounded-full bg-gradient-to-bl from-[#E5DEFF] via-[#FFDEE2] to-transparent absolute top-8 right-20 blur-[12px] mix-blend-screen"></div>
          </div>
          <div className="cloud-group -translate-y-16">
            <div className="w-44 h-44 rounded-full bg-gradient-to-bl from-[#FFDEE2] via-[#FDE1D3] to-transparent absolute blur-[12px] mix-blend-screen"></div>
            <div className="w-36 h-36 rounded-full bg-gradient-to-bl from-[#D6BCFA] via-[#E5DEFF] to-transparent absolute -top-8 right-12 blur-[12px] mix-blend-screen"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-bl from-[#E5DEFF] via-[#FFDEE2] to-transparent absolute top-4 right-16 blur-[12px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Bottom Clouds */}
        <motion.div 
          style={{ y: centerY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2.2 }}
          className="absolute left-1/2 bottom-[-5%] transform -translate-x-1/2 flex gap-6"
        >
          <div className="cloud-group">
            <div className="w-52 h-52 rounded-full bg-gradient-to-t from-[#D6BCFA] via-[#E5DEFF] to-transparent absolute blur-[12px] mix-blend-screen"></div>
            <div className="w-44 h-44 rounded-full bg-gradient-to-t from-[#FFDEE2] via-[#FDE1D3] to-transparent absolute -bottom-8 left-16 blur-[12px] mix-blend-screen"></div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-t from-[#E5DEFF] via-[#FFDEE2] to-transparent absolute bottom-4 left-20 blur-[12px] mix-blend-screen"></div>
          </div>
          <div className="cloud-group translate-y-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-t from-[#FFDEE2] via-[#FDE1D3] to-transparent absolute blur-[12px] mix-blend-screen"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-t from-[#D6BCFA] via-[#E5DEFF] to-transparent absolute -bottom-6 left-12 blur-[12px] mix-blend-screen"></div>
            <div className="w-44 h-44 rounded-full bg-gradient-to-t from-[#E5DEFF] via-[#FFDEE2] to-transparent absolute bottom-2 left-16 blur-[12px] mix-blend-screen"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
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
  );
};

export default HeroSection;
