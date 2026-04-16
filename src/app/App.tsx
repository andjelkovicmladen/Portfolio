import { Toaster } from "./components/ui/sonner";
import { Hero } from "./components/Hero";
import { CoreCompetencies } from "./components/CoreCompetencies";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <Hero />
      <CoreCompetencies />
      <FeaturedProjects />
      <Experience />
      <Contact />
      
      <footer className="border-t border-purple-500/20 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Mladen Andjelkovic. All rights reserved.</p>
      </footer>
      
      <Toaster />
    </div>
  );
}
