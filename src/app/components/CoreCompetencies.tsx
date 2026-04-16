import { motion } from "motion/react";
import { Code, Database, BarChart3 } from "lucide-react";

const competencies = [
  {
    icon: Code,
    title: "Modern Web Development",
    points: [
      "Next.js & React Architectures",
      "TypeScript & JavaScript (ES6+)",
      "UI/UX Optimization",
      "Responsive & Interactive UIs"
    ]
  },
  {
    icon: Database,
    title: "Backend & Software Engineering",
    points: [
      "Object-Oriented Programming (OOP)",
      "C# (.NET) & Java Core",
      "Database Management & SQL",
      "Layered System Architecture"
    ]
  },
  {
    icon: BarChart3,
    title: "Data & Automation",
    points: [
      "Process Automation & Python Scripting",
      "Complex Data Analysis in R",
      "Algorithms & Data Structures"
    ]
  }
];

export function CoreCompetencies() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Core Competencies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                
                <h3 className="text-xl text-purple-300 mb-4">
                  {competency.title}
                </h3>
                
                <ul className="space-y-3">
                  {competency.points.map((point) => (
                    <li key={point} className="text-gray-400 flex items-start">
                      <span className="text-cyan-400 mr-2">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
