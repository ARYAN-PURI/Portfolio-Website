'use client';

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 animate-fade-in-delay-200"
              style={{ animationDelay: `${index * 0.2}s` }}
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
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20 animate-fade-in-delay-600">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {keyCourses.map((course, index) => (
              <div
                key={index}
                className="text-center px-3 py-2 bg-purple-800/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-purple-300 text-sm">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
