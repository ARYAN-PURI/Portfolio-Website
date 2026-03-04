'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import GradientBackground from '@/components/ui/GradientBackground';

const Hero = () => {
  return (
    <>
      <GradientBackground />
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-800/20 to-pink-800/20"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <AnimatedText 
                  text="Aryan Puri" 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  type="letters"
                  delay={0.2}
                />
              </h1>
              <div className="text-xl md:text-2xl text-purple-200 font-light">
                <AnimatedText 
                  text="Computer Science Engineer"
                  type="words"
                  delay={0.8}
                />
              </div>
              <div className="text-lg text-purple-300 mt-2">
                <AnimatedText 
                  text="NIT Hamirpur | 22BEC032"
                  type="words"
                  delay={1.2}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              <AnimatedText 
                text="Passionate about building innovative solutions at the intersection of AI/ML, Computer Vision, and Full-Stack Development. Transforming complex problems into elegant, scalable applications."
                type="words"
                delay={1.6}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <MagneticButton
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold"
              >
                Get In Touch
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="px-8 py-3 border border-purple-400 text-purple-300 rounded-full font-semibold"
              >
                View Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6 justify-center"
            >
              {[
                { icon: Github, href: "https://github.com/aryanpuri600", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/aryan-puri-600", label: "LinkedIn" },
                { icon: Mail, href: "mailto:aryanpuri600@gmail.com", label: "Email" },
                { icon: Download, href: "/resume.pdf", label: "Resume", download: true }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" && social.label !== "Resume" ? "_blank" : undefined}
                  rel={social.label !== "Email" && social.label !== "Resume" ? "noopener noreferrer" : undefined}
                  download={social.download}
                  className="text-purple-300 hover:text-white transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
