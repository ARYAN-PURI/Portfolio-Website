'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';
import Card3D from '@/components/ui/3DCard';
import AnimatedText from '@/components/ui/AnimatedText';

const Projects = () => {
  const projects = [
    {
      title: "Night-to-Day Image Translation for Autonomous Vehicles",
      description: "Enhanced IRA-CycleGAN model for improved realism in low-light scenes using cross-attention fusion and multi-discriminator architecture to preserve semantic structure.",
      image: "/projects/autonomous-vehicles.jpg",
      technologies: ["Python", "PyTorch", "Computer Vision", "GAN", "CycleGAN", "OpenCV"],
      features: [
        "Trained on MSRS dataset with 1444 day/night images",
        "Achieved FID: 150.92, KID: 0.036 metrics",
        "Cross-attention fusion for better semantic preservation",
        "Multi-discriminator architecture for improved quality"
      ],
      metrics: [
        { label: "FID Score", value: "150.92" },
        { label: "KID Score", value: "0.036" },
        { label: "Dataset Size", value: "1444 images" }
      ],
      links: {
        github: "https://github.com/aryanpuri600/night-to-day-translation",
        kaggle: "https://kaggle.com/aryanpuri600/night-to-day-translation"
      },
      icon: Brain,
      category: "AI/ML"
    },
    {
      title: "E-Crescendo 2K25 Event Registration Website",
      description: "Official event registration portal for E-Cell NIT Hamirpur with comprehensive form submission system, real-time event management, and robust admin panel.",
      image: "/projects/e-crescendo.jpg",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "React", "Node.js"],
      features: [
        "Team leader registration and management system",
        "Real-time event rules and timelines display",
        "Downloadable resources integration",
        "Admin panel for participant database management",
        "Idea submission tracking system"
      ],
      metrics: [
        { label: "Events Managed", value: "15+" },
        { label: "Registrations", value: "500+" },
        { label: "Response Time", value: "<100ms" }
      ],
      links: {
        github: "https://github.com/aryanpuri600/e-crescendo",
        live: "https://e-crescendo-nith.vercel.app"
      },
      icon: Code,
      category: "Web Development"
    },
    {
      title: "Store Sales and Customer Management Web Application",
      description: "Comprehensive web application for tracking daily sales, cash management, purchase history, and customer analytics with automated reporting system.",
      image: "/projects/store-management.jpg",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js", "Analytics"],
      features: [
        "Daily sales tracking and reporting",
        "Cash and borrowed amount management",
        "Customer purchase history and logs",
        "Automated daily sales report generation",
        "Granular item and customer details tracking"
      ],
      metrics: [
        { label: "Daily Transactions", value: "100+" },
        { label: "Report Generation", value: "Automated" },
        { label: "Data Accuracy", value: "99.9%" }
      ],
      links: {
        github: "https://github.com/aryanpuri600/store-management",
        live: "https://store-management.vercel.app"
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
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            <AnimatedText 
              text="Explore my diverse portfolio spanning AI/ML, Web Development, and Full-Stack applications"
              type="words"
              delay={0.3}
            />
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card3D className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="relative mb-6">
                      <div className={`w-full h-48 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-xl flex items-center justify-center`}>
                        <project.icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs rounded-full`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-sm border border-purple-500/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-800/50 text-purple-200 rounded-lg hover:bg-purple-700/50 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                        </motion.a>
                      )}
                      {project.links.kaggle && (
                        <motion.a
                          href={project.links.kaggle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-800/50 text-blue-200 rounded-lg hover:bg-blue-700/50 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Kaggle</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: metricIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-purple-800/30 to-pink-800/10 p-4 rounded-lg border border-purple-500/20 text-center"
                          >
                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-sm text-purple-300">{metric.label}</div>
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
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <Github className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">More projects available on GitHub</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
