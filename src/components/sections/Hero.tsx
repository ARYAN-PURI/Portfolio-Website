'use client';

import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-800/20 to-pink-800/20"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="text-center">
            <div className="mb-6 animate-fade-in">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-4">
                <AnimatedText 
                  text="Aryan Puri" 
                  className="text-white drop-shadow-lg"
                  type="letters"
                  delay={0.2}
                />
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light mb-2">
                <AnimatedText 
                  text="Computer Science Engineer"
                  type="words"
                  delay={0.8}
                />
              </div>
              <div className="text-sm sm:text-base md:text-lg text-purple-300">
                <AnimatedText 
                  text="NIT Hamirpur | 22BEC032"
                  type="words"
                  delay={1.2}
                />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 animate-fade-in-delay-200">
              <AnimatedText 
                text="Passionate about building innovative solutions at the intersection of AI/ML, Computer Vision, and Full-Stack Development."
                type="words"
                delay={1.6}
              />
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 animate-fade-in-delay-400">
              <MagneticButton
                href="#contact"
                className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm sm:text-base"
              >
                Get In Touch
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="px-6 py-2 sm:px-8 sm:py-3 border border-purple-400 text-purple-300 rounded-full font-semibold text-sm sm:text-base"
              >
                View Projects
              </MagneticButton>
            </div>

            <div className="flex gap-4 sm:gap-6 justify-center animate-fade-in-delay-600">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" && social.label !== "Resume" ? "_blank" : undefined}
                  rel={social.label !== "Email" && social.label !== "Resume" ? "noopener noreferrer" : undefined}
                  download={social.download}
                  className="text-purple-300 hover:text-white transition-colors duration-300 hover:scale-110 animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
