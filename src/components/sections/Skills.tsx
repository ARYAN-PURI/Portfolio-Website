'use client';

import { Code, Globe, Brain, Server, Cpu } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: gridRef, isVisible: gridVisible } = useInView(0.05);
  const { ref: extraRef, isVisible: extraVisible } = useInView();

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Tailwind", level: 85 }
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: [
        { name: "Neural Networks", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "GAN", level: 75 },
        { name: "OpenCV", level: 80 }
      ]
    },
    {
      title: "Tools & DB",
      icon: Server,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    "RESTful APIs", "Microservices", "VMware", "Data Structures",
    "Algorithms", "OOP", "Software Engineering", "Computer Networks"
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-violet-400 mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive skill set spanning AI/ML, Full-Stack Development, and Infrastructure
          </p>
        </div>

        {/* Skill categories */}
        <div ref={gridRef} className={`grid sm:grid-cols-2 gap-5 mb-8 stagger-children ${gridVisible ? 'visible' : ''}`}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center border border-violet-500/10">
                  <category.icon className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                        style={{ width: gridVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div ref={extraRef} className={`reveal ${extraVisible ? 'visible' : ''}`}>
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Additional Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-white/[0.04] text-slate-400 rounded-lg border border-white/[0.06] hover:border-violet-500/20 hover:text-slate-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-slate-400">
            <Cpu className="w-4 h-4 text-violet-400" />
            Continuously learning and expanding skill set
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
