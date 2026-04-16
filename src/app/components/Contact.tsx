import { motion } from "motion/react";
import { Mail, MapPin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-400 text-lg">
            Looking for a dedicated software engineering intern or developer? Let's discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.a
            href="mailto:mladenandjelkovic13@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-cyan-300">mladenandjelkovic13@gmail.com</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 bg-gray-900/50 border border-purple-500/30 rounded-xl p-6"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-purple-300">Belgrade, Serbia</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-gray-800/50 border-purple-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 transition-colors"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-gray-800/50 border-purple-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 transition-colors"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-gray-800/50 border-purple-500/30 text-gray-200 placeholder:text-gray-500 focus:border-cyan-500 transition-colors resize-none"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-cyan-500/30"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/andjelkovicmladen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>github.com/andjelkovicmladen</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
