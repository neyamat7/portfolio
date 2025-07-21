import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FiArrowLeft,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiTarget,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";

const ProjectDetails = ({ project, onClose }) => {
  const modalRef = useRef();
  if (!project) return null;

  const handleBackdropClick = (e) => {
    // Close only if click target is the backdrop (not modal content)
    if (e.target !== modalRef.current) {
      onClose();
    }
  };

  return (
    <motion.div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-3xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* project header */}
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <motion.button
                onClick={onClose}
                className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowLeft size={20} />
              </motion.button>

              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    {project.category.replace("-", " ")}
                  </span>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiCode className="mr-3 text-purple-400" />
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project?.description}
                </p>
              </motion.div>

              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiTool className="mr-3 text-blue-400" />
                  Technology Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project?.technologies?.map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiTarget className="mr-3 text-green-400" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project?.features?.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiTool className="mr-3 text-red-400" />
                  Challenges Faced
                </h2>
                <div className="space-y-3">
                  {project?.challenges?.map((challenge, index) => (
                    <motion.div
                      key={challenge}
                      className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <p className="text-gray-300">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Future Improvements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiTrendingUp className="mr-3 text-yellow-400" />
                  Future Improvements
                </h2>
                <div className="space-y-3">
                  {project?.improvements?.map((improvement, index) => (
                    <motion.div
                      key={improvement}
                      className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    >
                      <p className="text-gray-300">{improvement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href={project?.live}
                  target="_blank"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-2xl font-semibold text-center hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiExternalLink size={18} />
                  View Live Project
                </motion.a>
                <motion.a
                  href={project?.github}
                  target="_blank"
                  className="flex-1 border-2 border-white/20 text-white px-6 py-3 rounded-2xl font-semibold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiGithub size={18} />
                  View Source Code
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
