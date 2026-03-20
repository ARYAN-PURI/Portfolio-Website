'use client';

import { Code, Cpu, Brain, Globe } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: textRef, isVisible: textVisible } = useInView();
  const { ref: statsRef, isVisible: statsVisible } = useInView();

  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Cpu, label: "CGPA", value: "9.96" },
    { icon: Brain, label: "AI/ML Models", value: "5+" },
    { icon: Globe, label: "Internships", value: "1" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Section header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-violet-400 mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Building Tomorrow&apos;s{' '}
            <span className="gradient-text">Technology</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <div ref={textRef} className={`reveal-left ${textVisible ? 'visible' : ''}`}>
            <div className="space-y-5">
              <p className="text-slate-300 leading-relaxed">
                I&apos;m a final-year Computer Science Engineering student at NIT Hamirpur with a passion for
                creating innovative solutions that bridge the gap between cutting-edge research and practical applications.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With a strong foundation in AI/ML, Computer Vision, and Full-Stack Development, I&apos;ve worked on
                diverse projects ranging from autonomous vehicle perception systems to enterprise web applications.
                My internship at DELL Technologies gave me hands-on experience in infrastructure automation and DevOps.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m always eager to learn new technologies and take on challenging projects that push the boundaries
                of what&apos;s possible.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div ref={statsRef} className={`grid grid-cols-2 gap-4 stagger-children ${statsVisible ? 'visible' : ''}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] card-hover"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center mb-4 border border-violet-500/10">
                  <stat.icon className="w-5 h-5 text-violet-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
