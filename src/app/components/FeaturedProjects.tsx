import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import image1 from "../../imports/image-5.png";
import image2 from "../../imports/image-3.png";
import image3 from "../../imports/image-6.png";

const projects = [
  {
    title: "Poslovi & Prakse",
    subtitle: "Career Platform",
    description: "A modern web platform connecting students and alumni with tech companies for jobs and internships.",
    tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Custom UI components"],
    details: "Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Custom UI components. Backend: Server-side rendering, robust directory structures.",
    image: image1
  },
  {
    title: "Fitness Tracking & Billing System",
    subtitle: "Comprehensive Gym Management",
    description: "A comprehensive software system for tracking gym memberships, services, and managing billing transactions.",
    tech: ["C#", ".NET Framework", "SQL Database", "Layered Architecture"],
    details: "Architecture: Layered architecture including server logic, domain layers, and customized database broker classes.",
    image: image2
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Modern Developer Portfolio",
    description: "A high-end, dark-mode portfolio website showcasing projects, skills, and experience with stunning neon purple and cyan aesthetics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion (Framer Motion)", "Vite"],
    details: "Features: Gradient text effects, smooth animations, responsive design, interactive contact form, and modern SaaS-style UI components.",
    image: image3
  }
];

export function FeaturedProjects() {
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
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gray-900/50 border border-purple-500/30 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    isImport={true}
                  />
                </div>
                
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl text-cyan-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-purple-400 opacity-70" />
                  </div>
                  
                  <p className="text-purple-400 text-sm mb-4">{project.subtitle}</p>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-gray-400 text-sm mb-6">
                    {project.details}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}