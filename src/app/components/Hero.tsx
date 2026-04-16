import { motion } from "motion/react";
import { Badge } from "./ui/badge";

const techStack = [
  "Next.js",
  "TypeScript",
  "C# (.NET)",
  "Python",
  "SQL",
  "R",
  "Java"
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Mladen Andjelkovic
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-cyan-300 mb-4">
            Software Engineering Student & Full-Stack Developer
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Final-year Information Systems and Technologies student specializing in process automation, 
            software engineering, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-purple-500/50 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
