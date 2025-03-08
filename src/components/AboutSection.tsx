
import { motion } from "framer-motion";
import SpaceBackground from "./SpaceBackground";

const AboutSection = () => {
  return (
    <SpaceBackground>
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
    </SpaceBackground>
  );
};

export default AboutSection;
