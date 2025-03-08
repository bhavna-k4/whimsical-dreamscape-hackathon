
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SpaceBackgroundProps {
  children: React.ReactNode;
}

const SpaceBackground = ({ children }: SpaceBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced star effects for continuous zoom feeling
  const starScaleProgress = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const starOpacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const starZProgress = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="relative py-20 min-h-screen flex items-center overflow-hidden bg-[#1A1F2C]">
      {/* Distant stars layer (smaller, moves slower) */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
          opacity: starOpacityProgress,
          z: useTransform(scrollYProgress, [0, 1], [0, -50]),
          background: `
            radial-gradient(circle at 15% 25%, #ffffff 0.6px, transparent 0.6px),
            radial-gradient(circle at 35% 65%, #ffffff 0.7px, transparent 0.7px),
            radial-gradient(circle at 55% 15%, #ffffff 0.5px, transparent 0.5px),
            radial-gradient(circle at 75% 45%, #ffffff 0.6px, transparent 0.6px),
            radial-gradient(circle at 5% 55%, #ffffff 0.8px, transparent 0.8px),
            radial-gradient(circle at 25% 85%, #ffffff 0.4px, transparent 0.4px),
            radial-gradient(circle at 65% 35%, #ffffff 0.7px, transparent 0.7px),
            radial-gradient(circle at 85% 75%, #ffffff 0.5px, transparent 0.5px)
          `,
          backgroundSize: '300px 300px',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      ></motion.div>

      {/* Middle stars layer (medium size, medium speed) */}
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
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      ></motion.div>

      {/* Close stars layer (larger, moves faster) */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 4]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 0.4, 0.2]),
          z: useTransform(scrollYProgress, [0, 1], [0, -200]),
          background: `
            radial-gradient(circle at 25% 35%, #ffffff 1.4px, transparent 1.4px),
            radial-gradient(circle at 45% 75%, #ffffff 1.6px, transparent 1.6px),
            radial-gradient(circle at 65% 25%, #ffffff 1.2px, transparent 1.2px),
            radial-gradient(circle at 85% 55%, #ffffff 1.4px, transparent 1.4px),
            radial-gradient(circle at 15% 65%, #ffffff 1.8px, transparent 1.8px),
            radial-gradient(circle at 35% 95%, #ffffff 1.2px, transparent 1.2px),
            radial-gradient(circle at 75% 45%, #ffffff 1.7px, transparent 1.7px),
            radial-gradient(circle at 95% 85%, #ffffff 1.3px, transparent 1.3px)
          `,
          backgroundSize: '150px 150px',
          perspective: '800px',
          transformStyle: 'preserve-3d',
        }}
      ></motion.div>

      {/* Deep space background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-[#1A1F2C]/40 to-[#1A1F2C]/80"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.8]),
          transformOrigin: 'center center',
        }}
      ></motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {children}
      </div>

      {/* Enhanced floating particles with varying depths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          // Create varying depths of stars
          const depth = Math.random();
          const size = depth * 4 + 1;
          const speed = 10 - depth * 5; // Faster for closer stars
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white/20"
              style={{
                width: size + 'px',
                height: size + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: depth * 0.7 + 0.3,
              }}
              animate={{
                z: [0, Math.random() * 500 - 250],
                scale: [1, Math.random() * 1.5 + 0.5, 1],
                opacity: [
                  depth * 0.5 + 0.3,
                  depth * 0.8 + 0.2,
                  depth * 0.5 + 0.3
                ],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpaceBackground;
