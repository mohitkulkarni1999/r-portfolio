import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'backdrop-blur-2xl bg-white/95 shadow-2xl border-b border-primary-100/50' 
        : 'bg-gradient-to-b from-black/30 via-black/20 to-transparent'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Ultra Modern Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              {/* Logo with Morphing Effect */}
              <div className={`relative w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${
                scrolled 
                  ? 'bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 shadow-2xl' 
                  : 'bg-white/15 backdrop-blur-xl border border-white/40 shadow-xl'
              }`}>
                <span className={`text-2xl font-black transition-all duration-700 ${
                  scrolled ? 'text-white' : 'text-white drop-shadow-2xl'
                }`}>
                  RW
                </span>
                
                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 animate-spin-slow"></div>
              </div>
              
              {/* Dynamic Particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-2xl animate-bounce opacity-90 shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary-400 rounded-2xl animate-pulse shadow-lg"></div>
              <div className="absolute top-1 -left-3 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
            </div>
            
            {/* Elegant Typography */}
            <div className="ml-6 hidden sm:block">
              <div className={`text-2xl font-black transition-all duration-700 ${
                scrolled 
                  ? 'bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 bg-clip-text text-transparent' 
                  : 'text-white drop-shadow-2xl'
              }`}>
                Rohit Walankikar
              </div>
              <div className={`text-sm font-medium transition-all duration-700 ${
                scrolled ? 'text-primary-600/80' : 'text-white/90'
              }`}>
                Portfolio
              </div>
            </div>
          </div>
          
          {/* Futuristic Navigation */}
          <div className="hidden lg:flex items-center">
            <div className={`flex items-center space-x-1 p-3 rounded-3xl transition-all duration-700 ${
              scrolled 
                ? 'bg-gray-50/80 backdrop-blur-xl border border-gray-200/50 shadow-xl' 
                : 'bg-white/10 backdrop-blur-2xl border border-white/30'
            }`}>
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-xl scale-105'
                        : scrolled
                          ? 'text-dark-600 hover:bg-white hover:text-primary-600 hover:shadow-lg'
                          : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {/* Icon with Micro Animation */}
                    <div className={`transition-all duration-300 ${
                      isActive ? 'scale-110 rotate-6' : 'group-hover:scale-110 group-hover:rotate-12'
                    }`}>
                      <Icon size={18} />
                    </div>
                    
                    {/* Label with Underline */}
                    <span className="font-semibold text-sm whitespace-nowrap relative">
                      {item.label}
                      <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}></div>
                    </span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Futuristic Mobile Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 group ${
              scrolled
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-xl'
                : 'bg-white/15 backdrop-blur-xl border border-white/40 text-white shadow-xl'
            }`}
          >
            {/* Morphing Hamburger */}
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-500 ${
                mobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-500 mt-1.5 ${
                mobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-500 mt-1.5 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-3' : ''
              }`}></span>
            </div>
            
            {/* Pulse Ring */}
            {mobileMenuOpen && (
              <div className="absolute inset-0 rounded-2xl border-2 border-current animate-ping opacity-30"></div>
            )}
          </button>
        </div>
      </div>

      {/* Futuristic Mobile Menu */}
      <div className={`lg:hidden transition-all duration-700 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="backdrop-blur-2xl bg-white/95 border-t border-gray-200/50 shadow-2xl">
          
          <div className="relative px-8 py-10 space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center gap-5 w-full px-8 py-5 rounded-3xl transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-2xl scale-105'
                      : 'text-dark-600 hover:bg-gray-100 hover:text-primary-600 hover:shadow-lg hover:scale-105'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: mobileMenuOpen ? 'slideInUp 0.5s ease-out forwards' : ''
                  }}
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 shadow-lg' 
                      : 'bg-gray-100 group-hover:bg-primary-100 group-hover:scale-110 group-hover:rotate-6'
                  }`}>
                    <Icon size={22} className={isActive ? 'text-white' : 'text-primary-600'} />
                  </div>
                  
                  {/* Label */}
                  <span className="font-bold text-xl flex-1 text-left">
                    {item.label}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-white scale-100' : 'bg-primary-400 scale-0 group-hover:scale-100'
                  }`}></div>
                </button>
              );
            })}
          </div>
          
          {/* Elegant Footer */}
          <div className="px-8 pb-8">
            <div className="flex items-center justify-center gap-3 py-6 border-t border-gray-200/50">
              <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-dark-500 font-semibold">Rohit Walankikar</span>
              <div className="w-3 h-3 bg-secondary-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
