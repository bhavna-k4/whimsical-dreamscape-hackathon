import { motion } from "framer-motion";

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
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-hackathon-purple">Our Sponsors</h2>
          <p className="text-lg text-gray-600">Supported by industry leaders</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-br from-hackathon-purple/5 to-hackathon-lightPurple/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-hackathon-purple/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-hackathon-purple mb-2">{sponsor.name}</h3>
              <span className="text-sm text-gray-600">{sponsor.level} Sponsor</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;