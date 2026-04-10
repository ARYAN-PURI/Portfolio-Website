'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: contentRef, isVisible: contentVisible } = useInView();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "aryanpuri600@gmail.com", href: "mailto:aryanpuri600@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-9882407374", href: "tel:+919882407374" },
    { icon: MapPin, label: "Location", value: "Hamirpur, Himachal Pradesh", href: null }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ARYAN-PURI/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-puri-b5338125a/" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-violet-400 mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold theme-text mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <p className="theme-text-muted mt-6 max-w-xl mx-auto text-sm sm:text-base">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div ref={contentRef} className={`grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto reveal ${contentVisible ? 'visible' : ''}`}>
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold theme-text mb-2">Let&apos;s Connect</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate with creative minds.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3.5 rounded-xl card-themed border card-hover"
                >
                  <div className="w-10 h-10 icon-container-themed rounded-xl flex items-center justify-center border flex-shrink-0">
                    <info.icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs theme-text-faint">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-sm theme-text-secondary hover:theme-text transition-colors truncate block">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm theme-text-secondary truncate block">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold theme-text-secondary mb-3">Follow Me</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl card-themed border social-link transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl card-themed border">
              <h3 className="text-lg font-semibold theme-text mb-6">Send a Message</h3>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/10">
                    <Send className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-semibold theme-text mb-1">Message Sent!</h4>
                  <p className="text-sm theme-text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm theme-text-muted mb-1.5">Name</label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-2.5 input-themed rounded-xl text-sm focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm theme-text-muted mb-1.5">Email</label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-2.5 input-themed rounded-xl text-sm focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm theme-text-muted mb-1.5">Message</label>
                    <textarea
                      id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                      className="w-full px-4 py-2.5 input-themed rounded-xl text-sm focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-themed border text-sm">
            <Mail className="w-4 h-4 text-violet-400" />
            Available for freelance and full-time opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
