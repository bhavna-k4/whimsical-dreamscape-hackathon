
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SpaceBackgroundProps {
  children: React.ReactNode;
}

const SpaceBackground = ({ children }: SpaceBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Track scroll position in document instead of relative to component
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate global scroll progress (0 to 1)
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced star effects for continuous zoom feeling based on global scroll
  const starScaleProgress = useTransform(
    () => Math.min(1 + scrollProgress * 2, 3),
    (value) => value
  );
  
  const starOpacityProgress = useTransform(
    () => {
      if (scrollProgress < 0.5) {
        return 1 - scrollProgress * 0.4;
      } else {
        return 0.8 - (scrollProgress - 0.5) * 0.4;
      }
    },
    (value) => value
  );
  
  const starZProgress = useTransform(
    () => -150 * scrollProgress,
    (value) => value
  );

  return (
    <div ref={containerRef} className="relative py-20 min-h-screen flex items-center overflow-hidden bg-[#1A1F2C]">
      {/* Distant stars layer (smaller, moves slower) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          scale: useTransform(() => 1 + scrollProgress, (value) => value),
          opacity: starOpacityProgress,
          z: useTransform(() => -50 * scrollProgress, (value) => value),
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
        className="absolute inset-0 pointer-events-none" 
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
        className="absolute inset-0 pointer-events-none" 
        style={{
          scale: useTransform(() => 1 + scrollProgress * 3, (value) => value),
          opacity: useTransform(() => {
            if (scrollProgress < 0.3) {
              return 0.6 - scrollProgress * 0.66;
            } else {
              return 0.4 - (scrollProgress - 0.3) * 0.5;
            }
          }, (value) => value),
          z: useTransform(() => -200 * scrollProgress, (value) => value),
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
        className="absolute inset-0 bg-gradient-radial from-transparent via-[#1A1F2C]/40 to-[#1A1F2C]/80 pointer-events-none"
        style={{
          scale: useTransform(() => 1 + scrollProgress * 0.8, (value) => value),
          transformOrigin: 'center center',
        }}
      ></motion.div>

      {/* Generate new stars as you scroll deeper */}
      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => {
          // Create stars with different depths
          const depth = Math.random();
          const size = depth * 3 + 0.5;
          const initialPos = Math.random() * 100;
          
          return (
            <motion.div
              key={`scroll-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: size + 'px',
                height: size + 'px',
                left: `${initialPos}%`,
                top: `${(initialPos * 7) % 100}%`,
                opacity: depth * 0.5 + 0.1,
                // This creates the effect of stars appearing far away and moving toward the viewer
                scale: useTransform(() => {
                  const offset = (i / 40); // Distribute star appearance
                  const starProgress = (scrollProgress * 3 + offset) % 1;
                  return Math.max(0.1, Math.min(1, starProgress * 2)) * size / 2;
                }, value => value),
                zIndex: useTransform(() => {
                  const offset = (i / 40);
                  const starProgress = (scrollProgress * 3 + offset) % 1;
                  return Math.floor(starProgress * 10);
                }, value => value)
              }}
            />
          );
        })}
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {children}
      </div>

      {/* Enhanced floating particles with varying depths - persistent across sections */}
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
