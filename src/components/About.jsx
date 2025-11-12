import React from 'react';
import { Award, Briefcase, Calendar, Globe, Heart, MapPin, User, Target, TrendingUp, Users, Database, BarChart3, Zap, Star, Languages } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Team Management', level: 95, icon: Users, color: 'primary' },
    { name: 'MIS Reporting', level: 90, icon: BarChart3, color: 'secondary' },
    { name: 'CRM Systems', level: 88, icon: Database, color: 'accent' },
    { name: 'Target Planning', level: 92, icon: Target, color: 'primary' },
    { name: 'Banking Relations', level: 85, icon: TrendingUp, color: 'secondary' },
    { name: 'Salesforce', level: 87, icon: Zap, color: 'accent' },
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Team Members Led', icon: Users },
    { number: '3', label: 'Industries Mastered', icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="section-heading mb-12 sm:mb-16 text-center">About Me</h2>
        
        {/* Hero Introduction - Full Width Horizontal */}
        <div className="mb-16">
          <div className="card p-6 lg:p-10 mb-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Icon and Title Section */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center glow-teal flex-shrink-0">
                  <User className="text-white" size={36} />
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text leading-tight">My Professional Journey</h3>
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-9 space-y-4 lg:space-y-6">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg lg:text-xl text-dark-600 leading-relaxed">
                        As a seasoned <span className="font-semibold text-primary-700">Business Coordinator</span> and <span className="font-semibold text-secondary-700">MIS Specialist</span>, I bring over <span className="font-bold text-accent-600">five years</span> of transformative experience across diverse industries.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base lg:text-lg text-dark-600 leading-relaxed">
                        My expertise lies in orchestrating seamless business operations while leveraging <span className="font-semibold text-primary-700">data-driven insights</span> to drive strategic decision-making.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base lg:text-lg text-dark-600 leading-relaxed">
                        I excel in building <span className="font-semibold text-secondary-700">high-performing teams</span>, managing complex stakeholder relationships, and implementing innovative solutions.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base lg:text-lg text-dark-600 leading-relaxed">
                        My approach combines <span className="font-semibold text-accent-700">analytical rigor</span> with <span className="font-semibold text-primary-700">collaborative leadership</span> to deliver exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Key Highlights Bar */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-primary-700">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary-50 rounded-full">
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-secondary-700">Multi-Industry Expert</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-accent-700">Data-Driven Leader</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-primary-700">Team Builder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Core Expertise */}
          <div className="lg:col-span-1">
            <div className="card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800">Core Expertise</h3>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-dark-700">Team Leadership</span>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-dark-700">MIS Reporting</span>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl hover:from-accent-100 hover:to-accent-200 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-dark-700">CRM Management</span>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-dark-700">Strategic Planning</span>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-dark-700">Banking Relations</span>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl hover:from-accent-100 hover:to-accent-200 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-dark-700">P&L Analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="lg:col-span-1">
            <div className="card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800">Professional Skills</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-br from-${skill.color}-500 to-${skill.color}-600 rounded-lg flex items-center justify-center`}>
                            <Icon className="text-white" size={16} />
                          </div>
                          <span className="font-semibold text-dark-700">{skill.name}</span>
                        </div>
                        <div className={`px-3 py-1 bg-${skill.color}-100 text-${skill.color}-700 rounded-full text-sm font-bold`}>
                          {skill.level}%
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="lg:col-span-1">
            <div className="card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800">Personal Details</h3>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 font-medium">Born</div>
                    <div className="font-semibold text-dark-700">April 6, 1989</div>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 font-medium">Nationality</div>
                    <div className="font-semibold text-dark-700">Indian</div>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl hover:from-accent-100 hover:to-accent-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 font-medium">Status</div>
                    <div className="font-semibold text-dark-700">Married</div>
                  </div>
                </div>
                <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 font-medium">Location</div>
                    <div className="font-semibold text-dark-700">Pune, Maharashtra, India</div>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Languages className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 font-medium">Languages</div>
                    <div className="font-semibold text-dark-700">English, Hindi, Marathi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="icon-box w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                <div className="text-dark-600 font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
