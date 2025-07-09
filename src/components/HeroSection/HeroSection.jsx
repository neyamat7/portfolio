import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.div>

        {/* Lines */}
        <div className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent to-purple-400/50 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[80vh] mt-12 lg:mt-0">
          {/* Left Side - Content */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mr-4 shadow-lg">
                ✨ Available for hire
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none mb-4">
                NEYAMAT
                <span className="block text-4xl lg:text-6xl font-light text-gray-300 mt-3">
                  ULLAH
                </span>
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 uppercase tracking-wider">
                  Front-End Developer
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Specializing in React, modern JavaScript, and responsive design—
                I transform creative concepts into polished, user-friendly web
                applications that bring ideas to life.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/Neyamat-Ullah-resume.pdf"
                download
              >
                <FiDownload className="mr-2" />
                Get Resume
              </motion.a>

              {/* <motion.button
                className="border-2 border-gray-600 text-gray-200 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" />
                Get Resume
              </motion.button> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex space-x-4">
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/neyamat7",
                    label: "GitHub",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Creative Image Section */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container with Creative Shape */}
              <div className="relative">
                {/* Background Shape */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-[3rem] transform rotate-6 scale-105"
                  animate={{ rotate: [6, 12, 6] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                ></motion.div>

                {/* Image Container */}
                <motion.div
                  className="relative w-80 h-96 lg:w-96 lg:h-[28rem] bg-gray-800 rounded-[3rem] p-2 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    <img
                      src="/profile.JPG"
                      alt="Neyamat Ullah - Front-End Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
