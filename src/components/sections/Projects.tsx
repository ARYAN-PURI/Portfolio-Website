'use client';

import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: projectsRef, isVisible: projectsVisible } = useInView(0.05);

  const projects = [
    {
      title: "Night-to-Day Image Translation",
      description: "Enhanced IRA-CycleGAN model for improved realism in low-light scenes using cross-attention fusion and multi-discriminator architecture.",
      technologies: ["Python", "PyTorch", "Computer Vision", "GAN", "OpenCV"],
      features: [
        "Trained on MSRS dataset with 1444 day/night images",
        "Achieved FID: 150.92, KID: 0.036 metrics",
        "Cross-attention fusion for better semantic preservation"
      ],
      metrics: [
        { label: "FID Score", value: "150.92" },
        { label: "KID Score", value: "0.036" },
        { label: "Dataset", value: "1444 imgs" }
      ],
      links: {
        github: "https://github.com/ARYAN-PURI/Night-to-Day-Image-Translation-using-IRACycleGAN",
        kaggle: "https://www.kaggle.com/code/aryanpuri032/night-day-iracycle-gan-multi-dis-cross-attention"
      },
      icon: Brain,
      category: "AI/ML",
      accent: "from-blue-500 to-violet-500"
    },
    {
      title: "E-Crescendo 2K25 Event Registration",
      description: "Official event registration portal for E-Cell NIT Hamirpur with comprehensive form submission system and real-time event management.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "React", "Node.js"],
      features: [
        "Team leader registration and management system",
        "Real-time event rules and timelines display",
        "Admin panel for participant database management"
      ],
      metrics: [
        { label: "Events", value: "15+" },
        { label: "Registrations", value: "500+" },
        { label: "Response", value: "<100ms" }
      ],
      links: {
        github: "https://github.com/ARYAN-PURI/E-Crescendo",
        live: "https://e-crescendo.vercel.app/"
      },
      icon: Code,
      category: "Web Dev",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "Store Sales Management System",
      description: "Web application for tracking daily sales, cash management, purchase history, and customer analytics with automated reporting.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
      features: [
        "Daily sales tracking and reporting",
        "Cash and borrowed amount management",
        "Automated daily sales report generation"
      ],
      metrics: [
        { label: "Transactions", value: "100+/day" },
        { label: "Reports", value: "Automated" },
        { label: "Accuracy", value: "99.9%" }
      ],
      links: {
        github: "https://github.com/ARYAN-PURI/Account",
        live: "https://account-orpin.vercel.app/"
      },
      icon: Database,
      category: "Full-Stack",
      accent: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-violet-400 mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold theme-text mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <p className="theme-text-muted mt-6 max-w-xl mx-auto text-sm sm:text-base">
            A selection of projects spanning AI/ML, Web Development, and Full-Stack applications
          </p>
        </div>

        {/* Project cards */}
        <div ref={projectsRef} className={`space-y-6 stagger-children ${projectsVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl card-themed border card-hover"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: Icon + Meta */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:w-28 flex-shrink-0">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.accent} rounded-2xl flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-medium bg-gradient-to-r ${project.accent} text-white rounded-full opacity-80`}>
                    {project.category}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-xl font-semibold theme-text mb-2 group-hover:text-violet-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm theme-text-muted leading-relaxed mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs tag-themed rounded-lg border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features + Metrics row */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-5">
                    <div>
                      <h4 className="text-xs font-semibold theme-text-secondary uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                            <span className="text-xs theme-text-muted leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl metric-card border text-center">
                          <div className="text-base font-bold theme-text">{m.value}</div>
                          <div className="text-[10px] theme-text-faint mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium code-link-themed rounded-lg border transition-all duration-300"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                    {project.links.kaggle && (
                      <a
                        href={project.links.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium kaggle-link-themed rounded-lg border transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Kaggle
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ARYAN-PURI/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-themed border text-sm transition-all duration-300"
          >
            <Github className="w-4 h-4 text-violet-400" />
            More projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
