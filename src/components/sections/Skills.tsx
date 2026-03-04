'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Brain, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "from-blue-600 to-yellow-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-600" },
        { name: "C++", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "C", level: 75, color: "from-gray-600 to-gray-800" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-600" }
      ]
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-500 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-900 to-gray-600" },
        { name: "Node.js", level: 80, color: "from-green-600 to-green-800" },
        { name: "Tailwind", level: 85, color: "from-cyan-400 to-teal-600" }
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: [
        { name: "Neural Networks", level: 85, color: "from-purple-600 to-pink-600" },
        { name: "Computer Vision", level: 80, color: "from-green-600 to-teal-600" },
        { name: "GAN", level: 75, color: "from-blue-600 to-purple-600" },
        { name: "OpenCV", level: 80, color: "from-green-500 to-green-700" }
      ]
    },
    {
      title: "Tools",
      icon: Server,
      skills: [
        { name: "Git", level: 85, color: "from-orange-600 to-red-700" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" },
        { name: "MySQL", level: 75, color: "from-blue-600 to-blue-800" }
      ]
    }
  ];

  const additionalSkills = [
    "RESTful APIs", "Microservices", "VMware", "Data Structures", 
    "Algorithms", "OOP", "Software Engineering", "Computer Networks"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Comprehensive skill set spanning AI/ML, Full-Stack Development, and Infrastructure Technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-purple-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-purple-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center px-2 sm:px-3 py-1.5 sm:py-2 bg-purple-800/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <span className="text-purple-300 text-xs sm:text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm">Continuously learning and expanding skill set</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
