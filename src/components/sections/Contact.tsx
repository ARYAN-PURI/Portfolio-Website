'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryanpuri600@gmail.com",
      href: "mailto:aryanpuri600@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9882407374",
      href: "tel:+919882407374"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hamirpur, Himachal Pradesh",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aryanpuri600",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aryan-puri-600",
      label: "LinkedIn"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you have a project in mind or want to discuss opportunities, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/10 rounded-lg sm:rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="text-purple-300 text-xs sm:text-sm">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base truncate"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium text-sm sm:text-base truncate">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300 hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Me a Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-purple-300 mb-2 text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400/40 transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-purple-300 mb-2 text-sm sm:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400/40 transition-colors duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-purple-300 mb-2 text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400/40 transition-colors duration-300 resize-none text-sm sm:text-base"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/20 rounded-full border border-purple-500/20">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm">Available for freelance and full-time opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
