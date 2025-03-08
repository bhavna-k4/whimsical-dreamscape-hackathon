
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FaqSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Star effects for deeper zoom feeling
  const starScaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const starOpacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const starZProgress = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "High school students from grades 9-12 are eligible to participate in the hackathon.",
    },
    {
      question: "Do I need coding experience?",
      answer: "No coding experience is required! This is a business hackathon focused on innovative solutions and entrepreneurship.",
    },
    {
      question: "How do teams work?",
      answer: "Teams consist of 3-4 students. You can form your own team or join one during the team formation session.",
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any materials you'll need for brainstorming and presentation.",
    },
  ];

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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-white/80">Everything you need to know about the hackathon</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <AccordionTrigger className="px-6 text-white hover:text-white/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export default FaqSection;
