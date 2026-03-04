'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "DELL Technologies",
      department: "Infrastructure Solutions Group (ISG)",
      period: "May 2025 - July 2025",
      location: "Bangalore",
      type: "Internship",
      responsibilities: [
        "Automated deployment of VMware ESXi hosts, vCenter Servers, PowerStore systems, and PowerShell hosts",
        "Developed pre-validation scripts to verify component readiness before executing the Atlas test suite",
        "Dockerized automation code and integrated it with Jenkins CI/CD for streamlined deployment",
        "Worked on infrastructure automation and DevOps practices in enterprise environment"
      ],
      technologies: ["Python", "RESTful APIs", "Microservices", "VMware", "Hyper-V", "Docker", "Jenkins"],
      highlights: [
        "Reduced deployment time by 40% through automation",
        "Implemented robust pre-validation system improving reliability",
        "Gained hands-on experience with enterprise infrastructure"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-300 font-semibold">{exp.company}</p>
                        <p className="text-purple-400 text-sm">{exp.department}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-purple-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-900/30 to-emerald-900/10 p-3 rounded-lg border border-green-500/20"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-green-300 text-sm">{highlight}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-full mt-8">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <ExternalLink className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">Open to new opportunities and challenges</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
