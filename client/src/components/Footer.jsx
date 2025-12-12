import { assets, footerLinks } from "../assets/assets";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 pt-16 pb-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden border-t border-gray-700/50"
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/30 to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-24 bg-white/5 hover:bg-white/10 rounded-2xl p-6 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-xl"
            >
              <img 
                src={assets.logo1} 
                alt="logo" 
                className="h-20 w-auto max-w-full object-contain drop-shadow-2xl brightness-0 invert"
              />
            </motion.div>
            
            <p className="text-base leading-relaxed max-w-md text-gray-400">
              Thank you for visiting our website. Stay connected with us for more
              updates, news, and support. We are committed to bringing you the
              best experience and services.
            </p>
            
         
          </motion.div>

          
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li key={i}>
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 4, color: 'rgb(248 250 252)' }}
                      className="block py-2 text-gray-400 hover:text-white font-medium transition-all duration-300 border-b border-gray-700/50 hover:border-gray-500/50"
                    >
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-12 border-t border-gray-700/30 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-500"
        >
          <p>Copyright {new Date().getFullYear()} © Md Ajharul Islam. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-gray-300 transition-colors">Privacy</motion.a>
            <span className="w-px h-4 bg-gray-600" />
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-gray-300 transition-colors">Terms</motion.a>
            <span className="w-px h-4 bg-gray-600" />
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-gray-300 transition-colors">Cookies</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
