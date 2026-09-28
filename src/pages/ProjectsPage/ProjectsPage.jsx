import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCalendar,
  FiExternalLink,
  FiGithub,
  FiKey,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router";
import ProjectDetails from "../../components/Projects/ProjectDetails";
import { projects } from "../../data/projectsData";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "Full-Stack SaaS" },
  { id: "backend", label: "Enterprise Backend" },
  { id: "fintech", label: "FinTech & POS" },
  { id: "web-app", label: "Web Applications" },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q)) ||
        (project.tagline && project.tagline.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white pt-28 pb-20 relative overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Bar / Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs text-gray-400 font-mono">
            Showing {filteredProjects.length} of {projects.length} Projects
          </span>
        </div>

        {/* Page Hero Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            All Projects & Systems
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Browse through my full-stack SaaS platforms, enterprise backend services, POS systems, and web applications built with modern distributed architectures.
          </p>
        </motion.div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-[4px] text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by tech or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 bg-white/5 border border-white/15 rounded-[4px] text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FiX size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-white/5 rounded-[4px] border border-white/10">
            <p className="text-xl text-gray-300 mb-2">No projects matched your search.</p>
            <p className="text-sm text-gray-400 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-[4px] bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-[4px] overflow-hidden border border-white/10 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
                >
                  {/* Card Image Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-white/10 rounded-[4px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-[4px] text-xs font-semibold bg-black/60 backdrop-blur-md text-purple-300 border border-purple-400/30 uppercase tracking-wider">
                        {project.categoryLabel || project.category}
                      </span>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-black/60 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                        <div
                          className={`w-2 h-2 rounded-[2px] ${
                            project.status === "Active" || project.status === "Completed"
                              ? "bg-green-400"
                              : "bg-yellow-400"
                          }`}
                        />
                        <span>{project.status}</span>
                      </div>
                    </div>

                    {/* Live & GitHub Action Icons */}
                    <div className="absolute bottom-3 right-3 flex space-x-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="w-9 h-9 bg-black/70 backdrop-blur-md rounded-[4px] flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200"
                        >
                          <FiGithub size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Live site for ${project.title}`}
                          className="w-9 h-9 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[4px] flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                        >
                          <FiArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="text-xs text-purple-300/80 font-medium mb-3">
                          {project.tagline}
                        </p>
                      )}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Admin demo credential notice if available */}
                      {project.adminAccess && (
                        <div className="mb-4 p-2.5 rounded-[4px] bg-cyan-500/10 border border-cyan-500/20 text-xs">
                          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
                            <FiKey size={12} />
                            <span>Demo Access</span>
                          </div>
                          <div className="flex flex-wrap gap-x-3 text-gray-300 font-mono text-[11px]">
                            <span>
                              User:{" "}
                              <strong className="text-white">
                                {project.adminAccess.email || project.adminAccess.username}
                              </strong>
                            </span>
                            <span>
                              Pass:{" "}
                              <strong className="text-white">
                                {project.adminAccess.password}
                              </strong>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={12} className="text-purple-400" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiUsers size={12} className="text-blue-400" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-white/10 text-gray-300 rounded-[4px] text-xs font-medium border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-0.5 bg-white/5 text-gray-400 rounded-[4px] text-xs">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </button>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <FiExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
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
    </div>
  );
};

export default ProjectsPage;
