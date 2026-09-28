import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiGithub,
  FiKey,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router";
import { projects } from "../../data/projectsData";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter((p) => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black scroll-mt-8 z-40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Architected and developed high-impact SaaS platforms, enterprise backend services, and real-time management systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative bg-white/5 backdrop-blur-sm rounded-[4px] overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-semibold px-3 py-1 rounded-[4px] bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase tracking-wider">
                          {project.categoryLabel || project.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <div
                            className={`w-2 h-2 rounded-[2px] ${
                              project.status === "Active" || project.status === "Completed"
                                ? "bg-green-400"
                                : "bg-yellow-400"
                            }`}
                          />
                          <span>{project.status}</span>
                        </div>

                        {project.adminAccess && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 text-xs font-mono">
                            <FiKey size={11} className="text-cyan-400" />
                            Admin Demo Available
                          </span>
                        )}
                      </div>

                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                        layoutId={`title-${project.id}`}
                      >
                        {project.title}
                      </motion.h3>
                      {project.tagline && (
                        <p className="text-sm text-purple-200/70 font-medium">
                          {project.tagline}
                        </p>
                      )}
                    </div>

                    <div className="flex space-x-2 shrink-0 ml-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-[4px] flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub size={18} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Live site for ${project.title}`}
                          className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[4px] flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiArrowUpRight size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Project Image */}
                    <div className="relative rounded-[4px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 w-full md:w-1/2 aspect-video shrink-0 border border-white/10">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Image Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center w-full">
                      {/* Description */}
                      <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Admin Credentials Quick Pill (if present) */}
                      {project.adminAccess && (
                        <div className="mb-5 p-3 rounded-[4px] bg-cyan-500/10 border border-cyan-500/20 flex flex-wrap items-center gap-3 text-xs">
                          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
                            Demo Access:
                          </span>
                          <span className="text-gray-300">
                            Email:{" "}
                            <code className="bg-black/40 text-cyan-200 px-1.5 py-0.5 rounded-[4px] font-mono">
                              {project.adminAccess.email || project.adminAccess.username}
                            </code>
                          </span>
                          <span className="text-gray-300">
                            Password:{" "}
                            <code className="bg-black/40 text-cyan-200 px-1.5 py-0.5 rounded-[4px] font-mono">
                              {project.adminAccess.password}
                            </code>
                          </span>
                        </div>
                      )}

                      {/* Project Info */}
                      <div className="flex flex-wrap items-center gap-5 mb-5 text-xs md:text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <FiCalendar size={14} className="text-purple-400" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiUsers size={14} className="text-blue-400" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-[4px] text-xs md:text-sm font-medium border border-white/15 hover:bg-white/20 hover:border-purple-400/40 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="text-purple-400 hover:text-purple-300 font-medium text-base md:text-lg transition-colors duration-200 flex items-center gap-2 group/btn"
                      whileHover={{ x: 4 }}
                    >
                      <span>View Full Architecture & Details</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* Border Gradient Glow */}
                <motion.div className="absolute inset-0 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More Projects Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-lg rounded-[4px] shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>See More Projects ({projects.length})</span>
            <FiArrowRight
              size={20}
              className="group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </Link>
          <p className="text-gray-400 text-sm mt-3">
            Explore Mobile Banking Management, Worklix, Artifact Vault, and more
          </p>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
