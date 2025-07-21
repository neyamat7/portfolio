import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "text-yellow-400",
          level: 85,
          experience: "",
        },
        {
          name: "React",
          icon: SiReact,
          color: "text-blue-400",
          level: 90,
          experience: "",
        },

        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "text-cyan-400",
          level: 95,
          experience: "",
        },
        {
          name: "TanStack Query",
          icon: SiReactquery,
          color: "text-pink-500",
          level: 80,
          experience: "",
        },
        {
          name: "Redux Toolkit",
          icon: SiRedux,
          color: "text-white",
          level: 50,
          experience: "",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node",
          icon: FaNodeJs,
          color: "text-green-300",
          level: 50,
          experience: "",
        },
        {
          name: "Express",
          icon: SiExpress,
          color: "text-white",
          level: 60,
          experience: "",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "text-green-400",
          level: 60,
          experience: "",
        },
        {
          name: "JWT",
          icon: SiJsonwebtokens,
          color: "text-purple-600",
          level: 65,
          experience: "",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 scroll-mt-10 z-30 relative"
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with to create amazing web
            experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-4"></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <skill.icon />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {skill.experience}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">
                          {skill.level}%
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">
                          Proficiency
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <motion.div
                        className="absolute top-0 left-0 h-2 w-2 bg-white rounded-full shadow-lg"
                        initial={{ left: 0 }}
                        whileInView={{ left: `calc(${skill.level}% - 4px)` }}
                        transition={{
                          duration: 1.5,
                          delay: skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design",
              "API Integration",
              "Performance Optimization",
              "Version Control",
              "Problem Solving",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
