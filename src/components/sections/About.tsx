'use client';

import { Code, Cpu, Brain, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Cpu, label: "CGPA", value: "9.96" },
    { icon: Brain, label: "AI/ML Models", value: "5+" },
    { icon: Globe, label: "Internships", value: "1" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-delay-200">
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a final-year Computer Science Engineering student at NIT Hamirpur with a passion for 
              creating innovative solutions that bridge the gap between cutting-edge research and practical applications. 
              My journey in tech has been driven by curiosity and a desire to solve complex problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With a strong foundation in AI/ML, Computer Vision, and Full-Stack Development, I've worked on 
              diverse projects ranging from autonomous vehicle perception systems to enterprise web applications. 
              My internship at DELL Technologies gave me hands-on experience in infrastructure automation and DevOps.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm always eager to learn new technologies and take on challenging projects that push the boundaries 
              of what's possible. My goal is to contribute to meaningful technological advancements that make a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 animate-fade-in-delay-400"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
