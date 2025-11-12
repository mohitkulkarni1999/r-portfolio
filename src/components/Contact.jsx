import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7030 748222",
      href: "tel:+917030748222",
      color: "primary",
      description: "Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email",
      value: "walankikarrohit@gmail.com",
      href: "mailto:walankikarrohit@gmail.com",
      color: "secondary",
      description: "I'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, Maharashtra",
      href: "#",
      color: "accent",
      description: "Available for local meetings"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "primary" },
    { icon: Github, href: "#", label: "GitHub", color: "secondary" },
    { icon: Twitter, href: "#", label: "Twitter", color: "accent" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 via-secondary-50/30 to-accent-50/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="section-heading mb-12 sm:mb-16 text-center">Get In Touch</h2>
        
        {/* Horizontal Introduction */}
        <div className="card p-6 lg:p-8 mb-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center glow-teal">
                <MessageCircle className="text-white" size={32} />
              </div>
            </div>
            <div className="lg:col-span-10 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-4">Let's Start a Conversation</h3>
              <p className="text-lg text-dark-600 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborations, or just having a 
                conversation about business coordination and MIS. Feel free to reach out through any of 
                the channels below.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                className={`card p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center`}
              >
                <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-dark-800 mb-2">{contact.title}</h4>
                <p className={`text-${contact.color}-600 font-semibold mb-2 text-lg`}>{contact.value}</p>
                <p className="text-dark-500 text-sm">{contact.description}</p>
              </a>
            );
          })}
        </div>

        {/* Horizontal Form and Additional Info */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800">Send a Message</h3>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-secondary-50 border border-secondary-200 rounded-xl">
                  <div className="flex items-center gap-2 text-secondary-700">
                    <CheckCircle size={20} />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-secondary-600 text-sm mt-1">I'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar - Takes 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Social Links */}
            <div className="card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-dark-800 mb-6 text-center">Connect on Social Media</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-14 h-14 bg-gradient-to-br from-${social.color}-500 to-${social.color}-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-lg`}
                      title={social.label}
                    >
                      <Icon className="text-white group-hover:scale-110 transition-transform" size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="card p-6 lg:p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-dark-800 mb-3">Current Availability</h4>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="inline-block w-3 h-3 bg-secondary-500 rounded-full animate-pulse"></span>
                  <span className="text-secondary-700 font-semibold">Available Now</span>
                </div>
                <p className="text-dark-600 text-sm">
                  Ready for new opportunities and collaborations
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card p-6 lg:p-8">
              <h4 className="font-bold text-dark-800 mb-4 text-center">Response Time</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-dark-600 text-sm">Email</span>
                  <span className="text-primary-600 font-semibold text-sm">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-600 text-sm">Phone</span>
                  <span className="text-secondary-600 font-semibold text-sm">Same day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-600 text-sm">Meeting</span>
                  <span className="text-accent-600 font-semibold text-sm">Within 3 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
