
import { motion } from "framer-motion";
import SpaceBackground from "./SpaceBackground";

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Day 1",
      events: [
        { time: "9:00 AM", title: "Opening Ceremony" },
        { time: "10:00 AM", title: "Team Formation" },
        { time: "11:00 AM", title: "Workshops Begin" },
        { time: "6:00 PM", title: "Mentoring Sessions" },
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "9:00 AM", title: "Progress Check-in" },
        { time: "2:00 PM", title: "Pitch Practice" },
        { time: "5:00 PM", title: "Final Submissions" },
        { time: "7:00 PM", title: "Closing Ceremony" },
      ],
    },
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
        <h2 className="text-4xl font-bold mb-4 text-white">Event Schedule</h2>
        <p className="text-lg text-white/80">Two days of innovation, learning, and creation</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {schedule.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">{day.day}</h3>
            <div className="space-y-4">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={event.time}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-hackathon-lightPurple font-medium">{event.time}</span>
                  <span className="text-white/80">{event.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SpaceBackground>
  );
};

export default ScheduleSection;
