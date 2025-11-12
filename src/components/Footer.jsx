import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'walankikarrohit@gmail.com', href: 'mailto:walankikarrohit@gmail.com' },
    { icon: Phone, text: '+91 7030 748222', href: 'tel:+917030748222' },
    { icon: MapPin, text: 'Pune, Maharashtra, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                  RW
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Rohit Walankikar</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Business Coordinator & MIS Specialist</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transforming business operations through strategic coordination and data-driven insights. 
                Building bridges between teams, processes, and success.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      title={social.label}
                    >
                      <Icon className="text-gray-300 group-hover:text-white" size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <li key={index}>
                      <a
                        href={contact.href}
                        className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
                      >
                        <Icon className="group-hover:text-primary-400" size={16} />
                        <span className="text-sm">{contact.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2024 Rohit Walankikar. Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>and dedication.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">All rights reserved.</span>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title="Back to top"
                >
                  <ArrowUp className="text-white group-hover:translate-y-[-2px] transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
