'use client';

import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import GradientBackground from '@/components/ui/GradientBackground';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ARYAN-PURI/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-puri-b5338125a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aryanpuri600@gmail.com", label: "Email" },
    { icon: Download, href: "/Aryan_Puri_Resume.pdf", label: "Resume", download: true }
  ];

  return (
    <>
      <GradientBackground />
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-[#060918]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
          >
            <span className="text-white">Aryan</span>{' '}
            <span className="gradient-text">Puri</span>
          </h1>

          {/* Title */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-slate-400 font-light mb-3"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards' }}
          >
            Computer Science Engineer
          </p>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base text-slate-500 mb-8"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards' }}
          >
            NIT Hamirpur &middot; 22BEC032
          </p>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards' }}
          >
            Building innovative solutions at the intersection of AI/ML, Computer Vision, and Full-Stack Development.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards' }}
          >
            <a
              href="#contact"
              className="group px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02]"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="group px-8 py-3 border border-white/15 text-slate-300 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex gap-3 justify-center"
            style={{ opacity: 0, animation: 'hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.15s forwards' }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" && social.label !== "Resume" ? "_blank" : undefined}
                rel={social.label !== "Email" && social.label !== "Resume" ? "noopener noreferrer" : undefined}
                download={social.label === "Resume" ? true : undefined}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
            style={{ animation: 'scroll-hint 2.5s ease-in-out infinite' }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
