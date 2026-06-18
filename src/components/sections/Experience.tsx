'use client';

import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: cardRef, isVisible: cardVisible } = useInView();

  const company = {
    name: "Dell Technologies",
    department: "Infrastructure Solutions Group (ISG)",
    location: "Bangalore, India",
  };

  const roles = [
    {
      title: "Software Engineering Intern (Winter)",
      period: "Jan 2026 – Jun 2026",
      isCurrent: true,
      responsibilities: [
        "Enabled native OpenShift VM visibility in Dell PowerStore by designing cluster registration and resource discovery workflows using OpenShift APIs.",
        "Developed REST APIs and PostgreSQL-backed services to expose relationships between VMs, Pods, Persistent Volumes, Nodes, and Applications within the PowerStore UI.",
        "Authored design specifications and implemented features through an SDD-based development workflow leveraging AI-assisted code generation.",
      ],
      technologies: ["OpenShift APIs", "REST APIs", "PostgreSQL", "PowerStore", "Python", "AI-assisted Dev"],
    },
    {
      title: "Software Engineering Intern (Summer)",
      period: "May 2025 – Jul 2025",
      isCurrent: false,
      responsibilities: [
        "Automated deployment of VMware ESXi hosts, vCenter Servers, PowerStore systems, and PowerShell hosts.",
        "Developed pre-validation scripts to verify infrastructure readiness before Atlas test execution.",
        "Dockerized automation code and integrated Jenkins CI/CD pipelines.",
      ],
      technologies: ["Python", "VMware", "Docker", "Jenkins", "RESTful APIs", "CI/CD"],
    },
  ];

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

        {/* Company card */}
        <div ref={cardRef} className={`max-w-4xl mx-auto reveal-scale ${cardVisible ? 'visible' : ''}`}>
          <div className="p-6 sm:p-8 rounded-2xl card-themed border card-hover">
            {/* Company header */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8 pb-8 border-b" style={{ borderColor: 'var(--border-card)' }}>
              <div className="w-14 h-14 icon-container-themed rounded-2xl flex items-center justify-center border flex-shrink-0">
                <Briefcase className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold theme-text">{company.name}</h3>
                <p className="text-sm theme-text-faint">{company.department}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="flex items-center gap-1.5 text-xs theme-text-faint">
                    <MapPin className="w-3 h-3" /> {company.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 2 Internships
                  </span>
                </div>
              </div>
            </div>

            {/* Roles timeline */}
            <div className="relative space-y-8">
              {/* Vertical connector line */}
              <div className="absolute left-3 top-2 bottom-8 w-px bg-gradient-to-b from-violet-500/50 to-transparent hidden sm:block" />

              {roles.map((role, idx) => (
                <div key={idx} className="relative sm:pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 items-center justify-center hidden sm:flex">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl highlight-themed border">
                    {/* Role header */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h4 className="text-base font-semibold theme-text">{role.title}</h4>
                      {role.isCurrent && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Most Recent
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs theme-text-faint mb-4">
                      <Calendar className="w-3 h-3" /> {role.period}
                    </span>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                          <span className="text-sm theme-text-muted leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {role.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs tag-themed rounded-lg border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
