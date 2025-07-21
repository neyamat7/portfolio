import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiCalendar, FiGithub, FiUsers } from "react-icons/fi";
import { projects } from "../../data/projectsData";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-1 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                          {project.category.replace("-", " ")}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Completed"
                              ? "bg-green-400"
                              : project.status === "In Progress"
                              ? "bg-yellow-400"
                              : "bg-gray-400"
                          }`}
                        ></div>
                      </div>

                      <motion.h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
                        layoutId={`title-${project.id}`}
                      >
                        {project.title}
                      </motion.h3>
                    </div>

                    <motion.div
                      className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <motion.a
                        href={project?.github}
                        target="_blank"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub size={18} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiArrowUpRight size={18} />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Project Image */}
                    <div className="relative md:mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex-1">
                      <motion.img
                        src={project?.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Image Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Info */}
                      <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <FiCalendar size={14} />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiUsers size={14} />
                          <span>{project.team}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              project.status === "Completed"
                                ? "bg-green-400"
                                : project.status === "In Progress"
                                ? "bg-yellow-400"
                                : "bg-gray-400"
                            }`}
                          ></div>
                          <span>{project.status}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: techIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="text-purple-400 hover:text-purple-300 font-medium text-lg transition-colors duration-200 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                {/* Border Gradient */}
                <motion.div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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
