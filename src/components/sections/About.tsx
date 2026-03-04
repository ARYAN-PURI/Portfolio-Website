'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Cpu, label: "CGPA", value: "9.96" },
    { icon: Brain, label: "AI/ML Models", value: "5+" },
    { icon: Globe, label: "Internships", value: "1" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a final-year Computer Science Engineering student at NIT Hamirpur with a passion for 
              creating innovative solutions that bridge the gap between cutting-edge research and practical applications. 
              My journey in tech has been driven by curiosity and a desire to solve complex problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With a strong foundation in AI/ML, Computer Vision, and Full-Stack Development, I've worked on 
              diverse projects ranging from autonomous vehicle perception systems to enterprise web applications. 
              My internship at DELL Technologies gave me hands-on experience in infrastructure automation and DevOps.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, efficient code and staying updated with the latest technological trends. 
              When I'm not coding, you'll find me exploring new AI models, contributing to open-source projects, 
              or learning about emerging technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-purple-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300">Open to opportunities and collaborations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
