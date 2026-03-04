'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Brain, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "from-blue-600 to-yellow-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-600" },
        { name: "C++", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "C", level: 75, color: "from-gray-600 to-gray-800" },
        { name: "HTML5", level: 90, color: "from-orange-500 to-red-600" },
        { name: "CSS3", level: 85, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-500 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-900 to-gray-600" },
        { name: "Node.js", level: 80, color: "from-green-600 to-green-800" },
        { name: "Express.js", level: 75, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-teal-600" },
        { name: "Bootstrap", level: 70, color: "from-purple-600 to-pink-600" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" },
        { name: "MySQL", level: 75, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Server,
      skills: [
        { name: "Git", level: 85, color: "from-orange-600 to-red-700" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "Jenkins", level: 65, color: "from-red-600 to-red-800" },
        { name: "Wireshark", level: 60, color: "from-green-500 to-green-700" }
      ]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: Brain,
      skills: [
        { name: "Neural Networks", level: 85, color: "from-purple-600 to-pink-600" },
        { name: "Computer Vision", level: 80, color: "from-green-600 to-teal-600" },
        { name: "GAN", level: 75, color: "from-blue-600 to-purple-600" },
        { name: "YOLO", level: 70, color: "from-orange-600 to-red-600" },
        { name: "OpenCV", level: 80, color: "from-green-500 to-green-700" }
      ]
    }
  ];

  const additionalSkills = [
    "RESTful APIs",
    "Microservices",
    "VMware",
    "Hyper-V",
    "Data Structures",
    "Algorithms",
    "OOP",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Digital Image Processing",
    "Information Security"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Comprehensive skill set spanning AI/ML, Full-Stack Development, and Infrastructure Technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-2 overflow-hidden">
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
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Skills & Concepts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center px-4 py-2 bg-purple-800/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <span className="text-purple-300 text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">Continuously learning and expanding skill set</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
