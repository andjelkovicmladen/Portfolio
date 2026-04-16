import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "FON DIGITAL",
    role: "IT & Web Team Member",
    period: "2022",
    achievements: [
      "Developed internal automation Python scripts",
      "Optimized web platforms"
    ]
  },
  {
    company: "AIESEC in Serbia",
    role: "Team Leader",
    period: "Feb 2023 - July 2023",
    achievements: [
      "Coordinated participant experiences",
      "Led cross-functional product development"
    ]
  }
];

export function Experience() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience & Leadership
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl text-cyan-300">
                      {exp.company}
                    </h3>
                    <span className="text-purple-400 text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-purple-300 mb-4">{exp.role}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="text-gray-400 flex items-start">
                        <span className="text-cyan-400 mr-2">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
