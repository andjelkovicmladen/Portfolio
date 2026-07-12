import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import image1 from "../../imports/image-5.png";
import imageCashFlow from "../../imports/image-cashflow.jpg";
import imageFitness from "../../imports/image-fitness.jpg";
import imageFitnessMembers from "../../imports/image-fitness-members.jpg";
import imageFitnessInvoice from "../../imports/image-fitness-invoice.jpg";
import imageFitnessLogin from "../../imports/image-fitness-login.jpg";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  details: string;
  image: string;
  images?: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "CareerHub — Poslovi & Prakse",
    subtitle: "Full-Stack Career Platform",
    description: "A deployed web platform connecting students and companies: companies post jobs and internships, students search listings, track salary statistics, and read IT news.",
    tech: ["Next.js (App Router)", "PostgreSQL", "Prisma", "Tailwind CSS", "Recharts"],
    details: "Features: analytics dashboard (students vs. companies, average salaries), job & internship search, live IT news via GNews, salary data via Adzuna, and an admin panel. Live on Render.",
    image: image1,
    link: "https://career-hub-xolr.onrender.com/"
  },
  {
    title: "Cash Flow Forecasting & Analytics",
    subtitle: "Financial Analytics Dashboard",
    description: "An end-to-end financial analytics platform that pairs a Next.js/PostgreSQL dashboard with a Python time-series forecasting engine to predict and visualize cash flow, burn rate, and 90-day runway.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Python", "Time-Series Forecasting"],
    details: "Features: 90-day cash-flow forecasting (linear trend with day-of-month and weekday seasonality), burn-rate & runway metrics, anomaly alerts, and interactive charts. Deployed on Vercel with a Neon PostgreSQL database.",
    image: imageCashFlow,
    link: "https://model-za-predikciju-novcanih-tokova.vercel.app/"
  },
  {
    title: "Fitness Tracking & Billing System",
    subtitle: "Full-Stack Gym Management",
    description: "A full-stack system for managing gym members, fitness services, invoices, and training appointments — with three entry channels into the same business logic and database.",
    tech: ["C# / .NET 8", "ASP.NET Core (REST API + JWT)", "React 19", "TypeScript", "Azure & Vercel"],
    details: "Originally a C#/.NET WinForms client–server app (TCP sockets + JSON), extended with an ASP.NET Core 8 REST API (JWT, Swagger) and a React + TypeScript frontend. Deployed on Azure (API + SQL) and Vercel (web).",
    image: imageFitness,
    images: [imageFitness, imageFitnessMembers, imageFitnessInvoice, imageFitnessLogin],
    link: "https://sistem-za-evidenciju-i-naplatu-fitn.vercel.app"
  }
];

function ProjectMedia({ project }: { project: Project }) {
  const gallery = project.images && project.images.length > 1 ? project.images : null;
  const [active, setActive] = useState(0);
  const current = gallery ? gallery[active] : project.image;

  return (
    <div className="relative h-full min-h-[16rem]">
      <ImageWithFallback
        src={current}
        alt={project.title}
        className="w-full h-full object-cover"
        isImport={true}
      />
      {gallery && (
        <div className="absolute bottom-0 inset-x-0 flex gap-2 p-3 bg-gradient-to-t from-gray-950/80 to-transparent">
          {gallery.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${project.title} — screenshot ${i + 1}`}
              className={`h-12 w-16 shrink-0 overflow-hidden rounded-md border transition-all ${
                i === active
                  ? "border-cyan-400 ring-2 ring-cyan-400/50"
                  : "border-white/20 opacity-70 hover:opacity-100"
              }`}
            >
              <ImageWithFallback
                src={img}
                alt=""
                className="w-full h-full object-cover"
                isImport={true}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
                  <ProjectMedia project={project} />
                </div>
                
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mb-2 group/link w-fit"
                    >
                      <h3 className="text-2xl md:text-3xl text-cyan-300 group-hover/link:text-cyan-200 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-purple-400 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl md:text-3xl text-cyan-300">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-purple-400 opacity-70" />
                    </div>
                  )}
                  
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