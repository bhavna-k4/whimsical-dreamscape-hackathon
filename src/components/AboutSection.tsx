import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-hackathon-purple">About the Hackathon</h2>
          <p className="text-lg mb-8 text-gray-600">
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
                className="p-6 rounded-lg bg-gradient-to-br from-hackathon-purple/5 to-hackathon-lightPurple/5 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-hackathon-purple">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;