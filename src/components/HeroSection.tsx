import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hackathon-purple via-hackathon-pink to-hackathon-blue">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
      
      {/* Decorative Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Purple Cloud */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-20 w-64 h-32 bg-[#E5DEFF]/40 rounded-full blur-2xl"
        />
        {/* Soft Pink Cloud */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-40 right-32 w-72 h-36 bg-[#FFDEE2]/40 rounded-full blur-2xl"
        />
        {/* Soft Blue Cloud */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-32 left-1/4 w-80 h-40 bg-[#D3E4FD]/40 rounded-full blur-2xl"
        />
        {/* Soft Peach Cloud */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-1/3 right-1/4 w-56 h-28 bg-[#FDE1D3]/40 rounded-full blur-2xl"
        />
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

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-1/4 left-1/4 w-32 h-32 bg-hackathon-lightPurple/20 rounded-full blur-xl"></div>
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 w-40 h-40 bg-hackathon-pink/20 rounded-full blur-xl"></div>
        <div className="animate-float absolute top-1/2 right-1/3 w-24 h-24 bg-hackathon-blue/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;