
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Star effects for deeper zoom feeling
  const starScaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const starOpacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const starZProgress = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="relative py-20 min-h-screen flex items-center overflow-hidden bg-[#1A1F2C]">
      {/* Stars background with depth/tunnel effect */}
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

      {/* Deep space background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-[#1A1F2C]/40 to-[#1A1F2C]/80"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.8]),
          transformOrigin: 'center center',
        }}
      ></motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">About the Hackathon</h2>
          <p className="text-lg mb-8 text-white/80">
            A 48-hour journey where high school innovators come together to solve real-world business challenges. 
            Work with mentors, learn from industry experts, and transform your ideas into viable business solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Learn",
                description: "Get guidance from industry experts and workshops",
                icon: "🎓",
              },
              {
                title: "Build",
                description: "Create innovative solutions with your team",
                icon: "🛠️",
              },
              {
                title: "Launch",
                description: "Present your ideas to investors and win prizes",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating particles with depth effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
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

export default AboutSection;
