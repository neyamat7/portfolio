import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className=" border-t border-white/10 text-center py-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black z-20 relative">
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Neyamat Ullah. All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;
