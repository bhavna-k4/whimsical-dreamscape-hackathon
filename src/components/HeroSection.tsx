import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1F2C]">
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
        
        {/* Additional twinkling layer */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `
              radial-gradient(circle at 15% 25%, #ffffff 0.8px, transparent 0.8px),
              radial-gradient(circle at 35% 65%, #ffffff 1px, transparent 1px),
              radial-gradient(circle at 55% 15%, #ffffff 1.1px, transparent 1.1px),
              radial-gradient(circle at 75% 45%, #ffffff 0.7px, transparent 0.7px),
              radial-gradient(circle at 95% 75%, #ffffff 1.2px, transparent 1.2px)
            `,
            backgroundSize: '150px 150px',
            animation: 'twinkle 3s infinite alternate-reverse',
            opacity: 0.7,
          }}
        ></div>
      
      {/* Decorative Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Side Clouds */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 left-20"
        >
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-[#ffffff]/80 via-[#E5DEFF]/60 to-[#ffffff]/70 rounded-full absolute -left-12 blur-[2px] mix-blend-screen"></div>
            <div className="w-40 h-40 bg-gradient-to-tr from-[#ffffff]/90 via-[#E5DEFF]/70 to-[#ffffff]/80 rounded-full absolute -left-6 -top-6 blur-[3px] mix-blend-screen"></div>
            <div className="w-36 h-36 bg-gradient-to-bl from-[#ffffff]/85 via-[#E5DEFF]/65 to-[#ffffff]/75 rounded-full absolute left-8 -top-2 blur-[2.5px] mix-blend-screen"></div>
            <div className="w-28 h-28 bg-gradient-to-tl from-[#ffffff]/95 via-[#E5DEFF]/75 to-[#ffffff]/85 rounded-full absolute left-4 top-4 blur-[1.5px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Right Side Clouds */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-40 right-32"
        >
          <div className="relative">
            <div className="w-36 h-36 bg-gradient-to-br from-[#ffffff]/85 via-[#FFDEE2]/65 to-[#ffffff]/75 rounded-full absolute -right-12 blur-[2px] mix-blend-screen"></div>
            <div className="w-44 h-44 bg-gradient-to-tr from-[#ffffff]/90 via-[#FFDEE2]/70 to-[#ffffff]/80 rounded-full absolute -right-6 -top-6 blur-[3px] mix-blend-screen"></div>
            <div className="w-40 h-40 bg-gradient-to-bl from-[#ffffff]/85 via-[#FFDEE2]/65 to-[#ffffff]/75 rounded-full absolute right-8 -top-2 blur-[2.5px] mix-blend-screen"></div>
            <div className="w-32 h-32 bg-gradient-to-tl from-[#ffffff]/95 via-[#FFDEE2]/75 to-[#ffffff]/85 rounded-full absolute right-4 top-4 blur-[1.5px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Bottom Clouds - Enhanced and Added More */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-32 left-1/4"
        >
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-[#ffffff]/90 via-[#D3E4FD]/70 to-[#ffffff]/80 rounded-full absolute -left-16 blur-[3px] mix-blend-screen"></div>
            <div className="w-56 h-56 bg-gradient-to-tr from-[#ffffff]/85 via-[#D3E4FD]/65 to-[#ffffff]/75 rounded-full absolute -left-8 -top-8 blur-[4px] mix-blend-screen"></div>
            <div className="w-52 h-52 bg-gradient-to-bl from-[#ffffff]/95 via-[#D3E4FD]/75 to-[#ffffff]/85 rounded-full absolute left-8 -top-4 blur-[3.5px] mix-blend-screen"></div>
            <div className="w-44 h-44 bg-gradient-to-tl from-[#ffffff]/90 via-[#D3E4FD]/70 to-[#ffffff]/80 rounded-full absolute left-4 top-4 blur-[2.5px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Additional Bottom Clouds */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-48 right-1/3"
        >
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-[#ffffff]/85 via-[#E5DEFF]/65 to-[#ffffff]/75 rounded-full absolute -right-12 blur-[2.5px] mix-blend-screen"></div>
            <div className="w-48 h-48 bg-gradient-to-tr from-[#ffffff]/90 via-[#E5DEFF]/70 to-[#ffffff]/80 rounded-full absolute -right-6 -top-6 blur-[3px] mix-blend-screen"></div>
            <div className="w-44 h-44 bg-gradient-to-bl from-[#ffffff]/85 via-[#E5DEFF]/65 to-[#ffffff]/75 rounded-full absolute right-8 -top-2 blur-[2.5px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* New Bottom Center Clouds */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
        >
          <div className="relative">
            <div className="w-52 h-52 bg-gradient-to-br from-[#ffffff]/90 via-[#D3E4FD]/70 to-[#ffffff]/80 rounded-full absolute -left-16 blur-[3px] mix-blend-screen"></div>
            <div className="w-60 h-60 bg-gradient-to-tr from-[#ffffff]/85 via-[#D3E4FD]/65 to-[#ffffff]/75 rounded-full absolute -left-8 -top-8 blur-[4px] mix-blend-screen"></div>
            <div className="w-56 h-56 bg-gradient-to-bl from-[#ffffff]/95 via-[#D3E4FD]/75 to-[#ffffff]/85 rounded-full absolute left-8 -top-4 blur-[3.5px] mix-blend-screen"></div>
          </div>
        </motion.div>

        {/* Top Center Clouds */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="absolute top-1/3 right-1/4"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-[#FDE1D3]/70 rounded-full absolute -right-12 blur-sm"></div>
            <div className="w-32 h-32 bg-[#FDE1D3]/60 rounded-full absolute -right-6 -top-6 blur-sm"></div>
            <div className="w-28 h-28 bg-[#FDE1D3]/65 rounded-full absolute right-8 -top-2 blur-sm"></div>
            <div className="w-20 h-20 bg-[#FDE1D3]/75 rounded-full absolute right-4 top-4 blur-sm"></div>
          </div>
        </motion.div>

        {/* Additional Top Center Small Clouds */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
          className="absolute top-1/4 right-1/3"
        >
          <div className="relative">
            <div className="w-20 h-20 bg-[#FDE1D3]/60 rounded-full absolute -right-10 blur-sm"></div>
            <div className="w-24 h-24 bg-[#FDE1D3]/50 rounded-full absolute -right-5 -top-5 blur-sm"></div>
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
