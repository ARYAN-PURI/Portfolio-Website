'use client';

import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: cardRef, isVisible: cardVisible } = useInView();

  const experience = {
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
      { label: "Deployment Time", value: "-40%", desc: "Reduced through automation" },
      { label: "Pre-validation", value: "Robust", desc: "Improved system reliability" },
      { label: "Experience", value: "Enterprise", desc: "Infrastructure at scale" }
    ]
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-violet-400 mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold theme-text mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
        </div>

        {/* Experience card */}
        <div ref={cardRef} className={`max-w-4xl mx-auto reveal-scale ${cardVisible ? 'visible' : ''}`}>
          <div className="p-6 sm:p-8 rounded-2xl card-themed border card-hover">
            {/* Company header */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
              <div className="w-14 h-14 icon-container-themed rounded-2xl flex items-center justify-center border flex-shrink-0">
                <Briefcase className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold theme-text">{experience.title}</h3>
                <p className="text-violet-400 font-medium">{experience.company}</p>
                <p className="text-sm theme-text-faint">{experience.department}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="flex items-center gap-1.5 text-xs theme-text-faint">
                    <Calendar className="w-3 h-3" /> {experience.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs theme-text-faint">
                    <MapPin className="w-3 h-3" /> {experience.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {experience.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Responsibilities */}
              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold theme-text-secondary uppercase tracking-wider mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                      <span className="text-sm theme-text-muted leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold theme-text-secondary uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs tag-themed rounded-lg border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-semibold theme-text-secondary uppercase tracking-wider mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {experience.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl highlight-themed border"
                    >
                      <div className="text-lg font-bold text-emerald-400 mb-0.5">{h.value}</div>
                      <div className="text-xs font-medium theme-text-secondary">{h.label}</div>
                      <div className="text-xs theme-text-faint mt-0.5">{h.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-themed border text-sm">
            <ExternalLink className="w-4 h-4 text-violet-400" />
            Open to new opportunities and challenges
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
