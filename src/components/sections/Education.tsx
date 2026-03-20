'use client';

import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Education = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: listRef, isVisible: listVisible } = useInView();
  const { ref: coursesRef, isVisible: coursesVisible } = useInView();

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "National Institute of Technology, Hamirpur",
      period: "2022 - 2026",
      location: "Hamirpur, HP",
      score: "CGPA: 9.96",
      achievements: ["Batch Topper", "Dean's List", "Academic Excellence Award"],
      icon: GraduationCap
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "G.S.S.S. Dhusara",
      period: "2020 - 2022",
      location: "Una, HP",
      score: "98.4% (HPBOSE)",
      achievements: ["District Topper", "Science Stream"],
      icon: Award
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "JJPHS Dhusara",
      period: "2018 - 2020",
      location: "Una, HP",
      score: "94.57% (HPBOSE)",
      achievements: ["School Topper"],
      icon: Award
    }
  ];

  const keyCourses = [
    "Data Structures & Algorithms", "Artificial Intelligence", "Neural Networks & Fuzzy Logic",
    "Computer Vision", "Database Management Systems", "Computer Networks",
    "Operating Systems", "Software Engineering", "Distributed Systems", "Information Security"
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-violet-400 mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div ref={listRef} className={`relative max-w-3xl mx-auto mb-16 stagger-children ${listVisible ? 'visible' : ''}`}>
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-violet-500/10 to-transparent" />

          {education.map((edu, index) => (
            <div key={index} className="relative pl-16 md:pl-20 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-5 top-1 w-6 h-6 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center ring-4 ring-[#060918]">
                <edu.icon className="w-3 h-3 text-white" />
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/10">
                    {edu.score}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm text-slate-400 mb-4">{edu.institution}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-white/[0.04] text-slate-400 rounded-lg border border-white/[0.06]"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Coursework */}
        <div ref={coursesRef} className={`reveal ${coursesVisible ? 'visible' : ''}`}>
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Key Coursework</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {keyCourses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-white/[0.04] text-slate-400 rounded-lg border border-white/[0.06] hover:border-violet-500/20 hover:text-slate-300 transition-all duration-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
