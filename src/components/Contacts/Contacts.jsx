import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiCheck, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { toast } from "react-toastify";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    emailjs
      .sendForm("service_55gdedf", "template_abl0pcg", formRef.current, {
        publicKey: "Gv7FHhVdkO0_pEEXJ",
      })
      .then(
        (res) => {
          toast.success("Thanks for contacting us.");
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "neyamat7.ullah@gmail.com",
      href: "mailto:neyamat7.ullah@gmail.com",
      description: "Send me an email",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+88 01316350853",
      href: "tel:+8801316350853",
      description: "Give me a call",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Chandpur, Bangladesh",
      href: "#",
      description: "",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black scroll-mt-8 z-20 relative"
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
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-4"></span>
                Send me a message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-purple-400 pointer-events-none"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{
                        opacity: focusedField === "name" ? 1 : 0,
                        scale: focusedField === "name" ? 1 : 1.05,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-purple-400 pointer-events-none"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{
                        opacity: focusedField === "email" ? 1 : 0,
                        scale: focusedField === "email" ? 1 : 1.05,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Project discussion"
                    required
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-purple-400 pointer-events-none"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: focusedField === "subject" ? 1 : 0,
                      scale: focusedField === "subject" ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-purple-400 pointer-events-none"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: focusedField === "message" ? 1 : 0,
                      scale: focusedField === "message" ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <FiCheck size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in touch
              </h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{info.value}</p>
                      <p className="text-gray-500 text-xs">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            {/* <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Follow me
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <social.icon size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {social.label}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div> */}

            {/* Availability Status */}
            {/* <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold text-green-300">
                  Available for work
                </span>
              </div>
              <p className="text-green-200 text-sm">
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
