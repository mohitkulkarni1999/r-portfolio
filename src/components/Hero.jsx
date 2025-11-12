import React from 'react';
import { Mail, Phone, Download, MapPin, Calendar, Briefcase, Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float glow-teal"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float glow-aqua" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float glow-cyan" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-rainbow rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Enhanced Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary-50/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
          {/* Left Section - Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 h-full">
            {/* Name and Title */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-gradient-x">
                  ROHIT WALANKIKAR
                </span>
              </h1>
              
              {/* Role Pills */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
                  <Briefcase className="text-primary-600 flex-shrink-0" size={18} />
                  <span className="font-semibold text-dark-800 text-sm lg:text-base">Business Coordinator</span>
                </div>
                <div className="flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
                  <Award className="text-secondary-600 flex-shrink-0" size={18} />
                  <span className="font-semibold text-dark-800 text-sm lg:text-base">MIS Specialist</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-dark-600 mb-6 lg:mb-8 leading-relaxed px-4 lg:px-0">
              Transforming business operations through strategic coordination and data-driven insights. 
              <span className="block mt-2 lg:mt-3 text-base sm:text-lg lg:text-lg xl:text-xl text-dark-500">
                5+ years of excellence in team management and relationship building across diverse industries
              </span>
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-10 px-4 lg:px-0">
              <div className="glass-colorful rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:glow-teal group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-1 lg:mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-dark-700 font-medium text-xs sm:text-sm lg:text-sm">Years Experience</div>
              </div>
              <div className="glass-colorful rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:glow-aqua group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-700 bg-clip-text text-transparent mb-1 lg:mb-2 group-hover:scale-110 transition-transform">3</div>
                <div className="text-dark-700 font-medium text-xs sm:text-sm lg:text-sm">Major Companies</div>
              </div>
              <div className="glass-colorful rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:glow-cyan group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent mb-1 lg:mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-dark-700 font-medium text-xs sm:text-sm lg:text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-8 px-4 lg:px-0">
              <button className="btn-primary flex items-center gap-2 justify-center text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-4">
                <Download size={18} />
                Download Resume
              </button>
              <button 
                onClick={scrollToAbout}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white/80 backdrop-blur-sm text-primary-600 font-semibold rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm lg:text-base"
              >
                Learn More About Me
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="animate-bounce-slow text-primary-600 hover:text-primary-700 transition-colors"
              >
                <ChevronDown size={28} />
              </button>
            </div>
          </div>

          {/* Right Section - Visual Elements */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2 h-full">
            {/* Professional Avatar */}
            <div className="mb-6 lg:mb-8 relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-gradient-professional p-1 shadow-2xl animate-glow">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent text-shadow-colorful">
                  RW
                </div>
              </div>
              
              {/* Floating Elements - Responsive Sizes */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-lg glow-aqua animate-bounce-slow">
                <Award className="text-white" size={14} />
              </div>
              <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full glow-cyan animate-pulse"></div>
              <div className="absolute top-3 -right-3 sm:top-4 sm:-right-4 lg:top-6 lg:-right-6 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full glow-teal animate-ping"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 lg:space-y-4 w-full max-w-sm lg:max-w-md px-4 lg:px-0">
              <a href="tel:+917030748222" className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="text-white" size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs lg:text-sm text-dark-500 font-medium">Phone</div>
                  <div className="font-bold text-dark-700 text-sm lg:text-base">+91 7030 748222</div>
                </div>
              </a>
              
              <a href="mailto:walankikarrohit@gmail.com" className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="text-white" size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs lg:text-sm text-dark-500 font-medium">Email</div>
                  <div className="font-bold text-dark-700 text-xs lg:text-sm break-all">walankikarrohit@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs lg:text-sm text-dark-500 font-medium">Location</div>
                  <div className="font-bold text-dark-700 text-sm lg:text-base">Pune, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
