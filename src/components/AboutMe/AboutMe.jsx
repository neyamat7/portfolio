import { motion } from "framer-motion";
import { FiCode, FiHeart, FiTarget, FiTrendingUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const AboutMe = () => {
  const interests = [
    {
      title: "Football",
      description:
        "Love everything about football - from tactical analysis to weekend kickabouts with friends. The sport that unites the world.",
      icon: "⚽",
      color: "from-green-400 to-blue-500",
    },
    {
      title: "Badminton",
      description:
        "Passionate about badminton! Love the fast-paced rallies and strategic gameplay. Play regularly to stay fit.",
      icon: "🏸",
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Travelling",
      description:
        "Love exploring new places and cultures. Traveling broadens my perspective and inspires creativity.",
      icon: "✈️",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Photography",
      description:
        "Love capturing moments and beautiful landscapes. It helps me see the world differently and appreciate details.",
      icon: "📸",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const values = [
    {
      icon: FiCode,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, readable code that other developers can easily understand.",
    },
    {
      icon: FiHeart,
      title: "User-Centric",
      description:
        "Every line of code I write is focused on creating amazing user experiences.",
    },
    {
      icon: FiTarget,
      title: "Goal-Oriented",
      description:
        "I set clear objectives for every project and work systematically to achieve them.",
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I'm committed to staying updated with the latest trends.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black scroll-mt-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Why I build, what I believe, and where I'm headed
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 ">
          {/* Left Side - Personal Story */}
          <motion.div
            className="space-y-8 lg:space-y-0 flex flex-col items-center lg:items-stretch lg:flex-row gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 lg:basis-[50%]">
              <div className="flex items-center mb-6">
                <HiOutlineSparkles className="text-3xl text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">
                  Console.log(aboutMe)
                </h3>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Neyamat, a Front-end developer who treats every bug
                  like a mystery and every feature like a creative challenge. My
                  journey started in 2024 when I got frustrated with a clunky
                  app and thought, 'I could build something better.'
                </p>
                <p>
                  My first attempt was terrible, but that failure taught me
                  perseverance. When I finally understood JavaScript promises,
                  it felt like unlocking a secret language that made the digital
                  world click.
                </p>
                <p>
                  What drives me is the puzzle-solving nature of development.
                  Whether optimizing databases, debugging state management, or
                  architecting features, I approach each challenge like a
                  detective. The satisfaction of clean, efficient code solving
                  tough problems keeps me coding late into the night.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 lg:flex-1">
              <h3 className="text-2xl font-bold text-white mb-6">
                What I Value
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <value.icon className="text-2xl text-purple-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Journey & Interests */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Interests & Hobbies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Beyond Coding
              </h3>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you'll find me pursuing various interests
                that keep me balanced and inspired:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    className={`bg-gradient-to-br ${interest.color} p-0.5 rounded-2xl`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gray-900 rounded-2xl p-4 h-full">
                      <div className="text-2xl mb-2">{interest.icon}</div>
                      <h4 className="text-white font-semibold mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {interest.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
