"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:flex justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Proyectos Destacados
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-md mt-6 md:mt-0"
          >
            Una selección de trabajos representativos en diseño de espacios comerciales y retail.
          </motion.p>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              className="col-span-1"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
