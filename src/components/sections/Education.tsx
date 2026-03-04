'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "National Institute of Technology, Hamirpur",
      period: "2022 - 2026",
      location: "Hamirpur, Himachal Pradesh",
      cgpa: "9.96",
      achievements: ["Batch Topper", "Dean's List", "Academic Excellence Award"],
      icon: GraduationCap
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "G.S.S.S. Dhusara",
      period: "2020 - 2022",
      location: "Una, Himachal Pradesh",
      percentage: "98.4%",
      board: "HPBOSE",
      achievements: ["District Topper", "Science Stream"],
      icon: Award
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "JJPHS Dhusara",
      period: "2018 - 2020",
      location: "Una, Himachal Pradesh",
      percentage: "94.57%",
      board: "HPBOSE",
      achievements: ["School Topper"],
      icon: Award
    }
  ];

  const keyCourses = [
    "Data Structures & Algorithms",
    "Artificial Intelligence",
    "Neural Networks & Fuzzy Logic",
    "Computer Vision",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Distributed Systems",
    "Information Security"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap gap-4 text-purple-300 mb-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(edu.cgpa || edu.percentage) && (
                      <span className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-sm">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </span>
                    )}
                    {edu.board && (
                      <span className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-sm">
                        {edu.board}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/20"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
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
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {keyCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center px-3 py-2 bg-purple-800/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <span className="text-purple-300 text-sm">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
