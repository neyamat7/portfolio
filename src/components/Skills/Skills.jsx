import { motion } from "framer-motion";
import { FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiHibernate,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRender,
  SiSocketdotio,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      accent: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React.js", icon: SiReact, color: "text-cyan-400", level: 90 },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: 85 },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: 88 },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", level: 82 },
        { name: "TanStack Query", icon: SiReactquery, color: "text-rose-400", level: 85 },
        { name: "React Hook Form", icon: SiReacthookform, color: "text-pink-400", level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", level: 92 },
        { name: "MUI (Material UI)", icon: SiMui, color: "text-blue-500", level: 80 },
      ],
    },
    {
      title: "Backend Engineering",
      accent: "from-purple-500 to-indigo-400",
      skills: [
        { name: "NestJS", icon: SiNestjs, color: "text-red-500", level: 85 },
        { name: "Java Spring Boot", icon: SiSpringboot, color: "text-emerald-400", level: 78 },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400", level: 86 },
        { name: "Express.js", icon: SiExpress, color: "text-gray-200", level: 85 },
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-500", level: 80 },
        { name: "Java", icon: FaJava, color: "text-orange-400", level: 75 },
      ],
    },
    {
      title: "Database & ORM",
      accent: "from-emerald-500 to-teal-400",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400", level: 86 },
        { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400", level: 88 },
        { name: "Prisma ORM", icon: SiPrisma, color: "text-slate-200", level: 84 },
        { name: "JPA / Hibernate", icon: SiHibernate, color: "text-amber-400", level: 78 },
        { name: "Mongoose", icon: SiMongoose, color: "text-red-400", level: 86 },
      ],
    },
    {
      title: "Tools, Cloud & DevOps",
      accent: "from-pink-500 to-rose-400",
      skills: [
        { name: "Git & GitHub", icon: SiGit, color: "text-orange-500", level: 90 },
        { name: "Socket.io", icon: SiSocketdotio, color: "text-white", level: 82 },
        { name: "Firebase", icon: SiFirebase, color: "text-amber-400", level: 84 },
        { name: "Vercel", icon: SiVercel, color: "text-white", level: 88 },
        { name: "Render", icon: SiRender, color: "text-teal-300", level: 80 },
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
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
            A comprehensive overview of the modern programming languages, frameworks, databases, and development tools I engineer with.
          </p>
        </motion.div>

        {/* 4-Column / 2x2 Grid of Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white/5 backdrop-blur-sm rounded-[4px] p-7 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <span
                  className={`w-2.5 h-7 bg-gradient-to-b ${category.accent} rounded-[2px] mr-3.5`}
                />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                        >
                          <skill.icon />
                        </div>
                        <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs md:text-sm font-bold text-gray-300 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-1.5 bg-gray-800 rounded-[2px] overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-[2px]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: skillIndex * 0.05,
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
      </div>
    </section>
  );
};

export default Skills;
