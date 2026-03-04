'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ARYAN-PURI/",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aryan-puri-b5338125a/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:aryanpuri600@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AP</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Aryan Puri</h3>
                <p className="text-purple-300 text-sm">Computer Science Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate about building innovative solutions at the intersection of AI/ML, 
              Computer Vision, and Full-Stack Development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-purple-300 hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-purple-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <a
                  href="mailto:aryanpuri600@gmail.com"
                  className="text-purple-300 hover:text-white transition-colors duration-300"
                >
                  aryanpuri600@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300">
                  NIT Hamirpur, Himachal Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2025 Aryan Puri</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>using Next.js</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>22BEC032</span>
              <span>•</span>
              <span>NIT Hamirpur</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
