import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FaqSection = () => {
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
    <div className="py-20 bg-gradient-to-br from-hackathon-purple/5 to-hackathon-lightPurple/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-hackathon-purple">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about the hackathon</p>
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
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 text-hackathon-purple hover:text-hackathon-purple/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqSection;