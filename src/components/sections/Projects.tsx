'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';
import Card3D from '@/components/ui/3DCard';
import AnimatedText from '@/components/ui/AnimatedText';

const Projects = () => {
  const projects = [
    {
      title: "Night-to-Day Image Translation",
      description: "Enhanced IRA-CycleGAN model for improved realism in low-light scenes using cross-attention fusion and multi-discriminator architecture.",
      image: "/projects/autonomous-vehicles.jpg",
      technologies: ["Python", "PyTorch", "Computer Vision", "GAN", "OpenCV"],
      features: [
        "Trained on MSRS dataset with 1444 day/night images",
        "Achieved FID: 150.92, KID: 0.036 metrics",
        "Cross-attention fusion for better semantic preservation"
      ],
      metrics: [
        { label: "FID Score", value: "150.92" },
        { label: "KID Score", value: "0.036" },
        { label: "Dataset Size", value: "1444 images" }
      ],
      links: {
        github: "https://github.com/ARYAN-PURI/Night-to-Day-Image-Translation-using-IRACycleGAN",
        kaggle: "https://www.kaggle.com/code/aryanpuri032/night-day-iracycle-gan-multi-dis-cross-attention"
      },
      icon: Brain,
      category: "AI/ML"
    },
    {
      title: "E-Crescendo 2K25 Event Registration",
      description: "Official event registration portal for E-Cell NIT Hamirpur with comprehensive form submission system and real-time event management.",
      image: "/projects/e-crescendo.jpg",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "React", "Node.js"],
      features: [
        "Team leader registration and management system",
        "Real-time event rules and timelines display",
        "Admin panel for participant database management"
      ],
      metrics: [
        { label: "Events Managed", value: "15+" },
        { label: "Registrations", value: "500+" },
        { label: "Response Time", value: "<100ms" }
      ],
      links: {
        github: "https://github.com/ARYAN-PURI/E-Crescendo",
        live: "https://e-crescendo.vercel.app/"
      },
      icon: Code,
      category: "Web Development"
    },
    {
      title: "Store Sales Management System",
      description: "Web application for tracking daily sales, cash management, purchase history, and customer analytics with automated reporting.",
      image: "/projects/store-management.jpg",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
      features: [
        "Daily sales tracking and reporting",
        "Cash and borrowed amount management",
        "Automated daily sales report generation"
      ],
      metrics: [
        { label: "Daily Transactions", value: "100+" },
        { label: "Report Generation", value: "Automated" },
        { label: "Data Accuracy", value: "99.9%" }
      ],
      links: {
        github: "https://github.com/ARYAN-PURI/Account",
        live: "https://account-orpin.vercel.app/"
      },
      icon: Database,
      category: "Full-Stack"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "from-blue-600 to-purple-600";
      case "Web Development":
        return "from-green-600 to-teal-600";
      case "Full-Stack":
        return "from-orange-600 to-red-600";
      default:
        return "from-purple-600 to-pink-600";
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
            <AnimatedText 
              text="Explore my diverse portfolio spanning AI/ML, Web Development, and Full-Stack applications"
              type="words"
              delay={0.3}
            />
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card3D className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-full sm:w-24 h-32 sm:h-48 flex-shrink-0">
                      <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg sm:rounded-xl flex items-center justify-center`}>
                        <project.icon className="w-8 h-8 sm:w-16 sm:h-16 text-white" />
                      </div>
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <span className={`px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs rounded-full`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-800/50 text-purple-200 rounded-full text-xs sm:text-sm border border-purple-500/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-800/50 text-purple-200 rounded-full text-xs sm:text-sm border border-purple-500/20">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.links.github && (
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-800/50 text-purple-200 rounded-lg hover:bg-purple-700/50 transition-colors duration-300 text-xs sm:text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Code</span>
                          </motion.a>
                        )}
                        {project.links.live && (
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-xs sm:text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Live</span>
                          </motion.a>
                        )}
                        {project.links.kaggle && (
                          <motion.a
                            href={project.links.kaggle}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-800/50 text-blue-200 rounded-lg hover:bg-blue-700/50 transition-colors duration-300 text-xs sm:text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Kaggle</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-2">Key Features</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-2">Performance</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {project.metrics.slice(0, 3).map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: metricIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-purple-800/30 to-pink-800/10 p-2 sm:p-3 rounded-lg border border-purple-500/20 text-center"
                          >
                            <div className="text-sm sm:text-lg md:text-2xl font-bold text-white mb-0.5">{metric.value}</div>
                            <div className="text-xs sm:text-sm text-purple-300">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm">More projects on GitHub</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
