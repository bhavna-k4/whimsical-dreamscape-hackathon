
import { motion } from "framer-motion";
import SpaceBackground from "./SpaceBackground";

const SponsorsSection = () => {
  const sponsors = [
    { name: "Tech Corp", level: "Gold" },
    { name: "Innovation Labs", level: "Gold" },
    { name: "Future Fund", level: "Silver" },
    { name: "Dev Solutions", level: "Silver" },
    { name: "Startup Space", level: "Bronze" },
    { name: "Code Academy", level: "Bronze" },
  ];

  return (
    <SpaceBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Our Sponsors</h2>
        <p className="text-lg text-white/80">Supported by industry leaders</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold text-hackathon-lightPurple mb-2">{sponsor.name}</h3>
            <span className="text-sm text-white/80">{sponsor.level} Sponsor</span>
          </motion.div>
        ))}
      </div>
    </SpaceBackground>
  );
};

export default SponsorsSection;
