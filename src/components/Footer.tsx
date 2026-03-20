'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ARYAN-PURI/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-puri-b5338125a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aryanpuri600@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                AP
              </div>
              <div>
                <div className="text-white font-semibold">Aryan Puri</div>
                <div className="text-xs text-slate-500">Computer Science Engineer</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Passionate about building innovative solutions at the intersection of AI/ML,
              Computer Vision, and Full-Stack Development.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-sm text-slate-500 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm text-slate-500">
              <a href="mailto:aryanpuri600@gmail.com" className="block hover:text-white transition-colors">
                aryanpuri600@gmail.com
              </a>
              <p>NIT Hamirpur, Himachal Pradesh</p>
              <p className="text-violet-400 text-xs">Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <span>&copy; 2025 Aryan Puri</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-3 h-3 text-red-500/60" /> using Next.js
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>22BEC032</span>
              <span>&middot;</span>
              <span>NIT Hamirpur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
