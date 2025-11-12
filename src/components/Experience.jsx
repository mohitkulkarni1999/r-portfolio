import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Target, Award, Star, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "XRBIA Developers PVT. LTD.",
      position: "Executive Assistant & MIS",
      duration: "2019 - Present",
      location: "Pune, India",
      type: "Full-time",
      description: "Leading business coordination and MIS operations for a premier real estate development company.",
      achievements: [
        "Managed presales and CRM team operations",
        "Achieved 100% target completion rate",
        "Implemented Salesforce platform successfully",
        "Created Green Wheel Banking system reducing TAT",
        "Coordinated with multiple departments for seamless operations"
      ],
      responsibilities: [
        { title: "Team Management", desc: "Handled presales and CRM team" },
        { title: "Target Planning", desc: "Coordinated with sales, Collection, Marketing team to set targets" },
        { title: "Banking Relations", desc: "Managed banking department with full attention" },
        { title: "Salesforce Implementation", desc: "Complete responsibility from implementation to functionality" },
        { title: "Reports Generation", desc: "Generated daily, weekly and monthly reports" },
        { title: "Customer Relations", desc: "Handled all customer queries within timeline" }
      ],
      color: "primary"
    },
    {
      id: 2,
      company: "Samsung Electronics India Ltd.",
      position: "Store Executive Consultant",
      duration: "2017 - 2019",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Managed exclusive Samsung store operations maintaining brand standards and achieving sales targets.",
      achievements: [
        "Consistently achieved monthly sales targets",
        "Maintained brand standards as per guidelines",
        "Coordinated successful product launch campaigns",
        "Managed inventory efficiently"
      ],
      responsibilities: [
        { title: "Store Management", desc: "Handled Exclusive store maintaining all standards" },
        { title: "Sales Reporting", desc: "Presented Sales and Inventory reports" },
        { title: "Target Achievement", desc: "Responsible for daily, weekly and monthly targets" },
        { title: "Marketing Coordination", desc: "Coordinated with marketing team for launches" }
      ],
      color: "secondary"
    },
    {
      id: 3,
      company: "L&T Finance Ltd",
      position: "Sales Officer",
      duration: "2015 - 2017",
      location: "Pune, India",
      type: "Full-time",
      description: "Drove business growth through channel sales and team management in the financial services sector.",
      achievements: [
        "Appointed new channels for business generation",
        "Successfully managed sales officer team",
        "Maintained excellent customer relationships",
        "Planned effective marketing events"
      ],
      responsibilities: [
        { title: "Channel Sales", desc: "Appointed new channels to generate business" },
        { title: "Team Management", desc: "Handled team of sales officers" },
        { title: "Fraud Prevention", desc: "Critical KYC and fraud prevention activities" },
        { title: "Client Relations", desc: "Maintained good customer relationships" }
      ],
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <h2 className="section-heading mb-12 sm:mb-16 text-center">Professional Experience</h2>
        
        {/* Horizontal Experience Layout */}
        <div className="relative">
          {/* Horizontal Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 rounded-full transform -translate-y-1/2"></div>
          
          {/* Experience Cards - Equal Height Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative w-full h-full">
                {/* Timeline Node */}
                <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-${exp.color}-400 to-${exp.color}-600 rounded-full flex items-center justify-center shadow-lg glow-${exp.color === 'primary' ? 'teal' : exp.color === 'secondary' ? 'aqua' : 'cyan'} animate-pulse`}>
                    <Briefcase className="text-white" size={14} />
                  </div>
                </div>
                
                {/* Experience Card - Fixed Height */}
                <div className="card p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative h-full flex flex-col justify-between min-h-[500px] lg:min-h-[550px]">
                  {/* Year Badge */}
                  <div className={`absolute -top-3 -right-3 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-${exp.color}-500 to-${exp.color}-600 rounded-full flex items-center justify-center shadow-lg glow-${exp.color === 'primary' ? 'teal' : exp.color === 'secondary' ? 'aqua' : 'cyan'} animate-bounce`}>
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {exp.duration.split(' - ')[1] === 'Present' ? 'NOW' : exp.duration.split(' - ')[1].slice(-2)}
                    </span>
                  </div>

                  {/* Top Content */}
                  <div className="flex-1">
                    {/* Company Header - Horizontal Layout */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${exp.color}-500 to-${exp.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-dark-800 group-hover:text-primary-700 transition-colors leading-tight">
                          {exp.company}
                        </h3>
                        <p className={`text-sm sm:text-base font-semibold text-${exp.color}-600 mb-2`}>{exp.position}</p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
                          <span className="flex items-center gap-1 px-2 py-1 bg-primary-50 text-primary-700 rounded-full font-medium">
                            <Calendar size={12} />
                            <span className="hidden sm:inline">{exp.duration}</span>
                            <span className="sm:hidden">{exp.duration.split(' - ')[1] === 'Present' ? 'Current' : exp.duration.split(' - ')[1]}</span>
                          </span>
                          <span className="flex items-center gap-1 px-2 py-1 bg-secondary-50 text-secondary-700 rounded-full font-medium">
                            <MapPin size={12} />
                            <span className="hidden sm:inline">{exp.location}</span>
                            <span className="sm:hidden">{exp.location.split(',')[0]}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description - Compact */}
                    <p className="text-xs sm:text-sm text-dark-600 leading-relaxed mb-4 sm:mb-6 bg-gray-50 p-3 sm:p-4 rounded-xl">
                      {exp.description}
                    </p>

                    {/* Horizontal Achievements & Responsibilities */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Key Achievements - Horizontal Pills */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-1.5 sm:p-2 bg-${exp.color}-100 rounded-lg`}>
                            <Award className={`text-${exp.color}-600`} size={14} />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-dark-800">Key Achievements</h4>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.achievements.slice(0, 2).map((achievement, idx) => (
                            <div key={idx} className={`px-2 sm:px-3 py-1 bg-${exp.color}-50 text-${exp.color}-700 rounded-full text-xs font-medium hover:bg-${exp.color}-100 transition-colors cursor-pointer`}>
                              {achievement.length > 20 ? `${achievement.substring(0, 20)}...` : achievement}
                            </div>
                          ))}
                          {exp.achievements.length > 2 && (
                            <div className={`px-2 sm:px-3 py-1 bg-${exp.color}-100 text-${exp.color}-700 rounded-full text-xs font-bold`}>
                              +{exp.achievements.length - 2}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Core Responsibilities - Horizontal Pills */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-1.5 sm:p-2 bg-${exp.color}-100 rounded-lg`}>
                            <Target className={`text-${exp.color}-600`} size={14} />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-dark-800">Responsibilities</h4>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                            <div key={idx} className={`px-2 sm:px-3 py-1 bg-${exp.color}-50 border border-${exp.color}-200 text-${exp.color}-700 rounded-full text-xs font-medium hover:bg-${exp.color}-100 transition-colors cursor-pointer`} title={resp.desc}>
                              {resp.title}
                            </div>
                          ))}
                          {exp.responsibilities.length > 3 && (
                            <div className={`px-2 sm:px-3 py-1 bg-${exp.color}-100 text-${exp.color}-700 rounded-full text-xs font-bold`}>
                              +{exp.responsibilities.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Content - Fixed Position */}
                  <div className="mt-auto pt-4">
                    {/* Horizontal Stats Bar */}
                    <div className="flex justify-around items-center pt-3 sm:pt-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-2 sm:p-3 mb-4">
                      <div className="text-center flex-1">
                        <div className={`text-base sm:text-lg font-bold text-${exp.color}-600`}>
                          {exp.duration.split(' - ')[1] === 'Present' ? '5+' : '2'}
                        </div>
                        <div className="text-xs text-dark-500">Years</div>
                      </div>
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="text-center flex-1">
                        <div className={`text-base sm:text-lg font-bold text-${exp.color}-600`}>{exp.achievements.length}</div>
                        <div className="text-xs text-dark-500">Achievements</div>
                      </div>
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="text-center flex-1">
                        <div className={`text-base sm:text-lg font-bold text-${exp.color}-600`}>{exp.responsibilities.length}</div>
                        <div className="text-xs text-dark-500">Roles</div>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-dark-500">Experience Level</span>
                        <span className={`text-xs font-semibold text-${exp.color}-600`}>
                          {exp.duration.split(' - ')[1] === 'Present' ? 'Expert' : 'Advanced'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r from-${exp.color}-500 to-${exp.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: exp.duration.split(' - ')[1] === 'Present' ? '95%' : '75%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary - Fully Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="card p-4 sm:p-6 lg:p-8 xl:p-12">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center glow-teal flex-shrink-0">
                <TrendingUp className="text-white" size={20} />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text text-center sm:text-left">Career Journey</h3>
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-dark-600 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
              A progressive career spanning <span className="font-bold text-primary-700">5+ years</span> across diverse industries, 
              consistently delivering exceptional results in business coordination, team leadership, and strategic operations.
            </p>
            
            {/* Responsive Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {/* Years Experience */}
              <div className="group p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl lg:rounded-2xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-dark-600 font-semibold text-sm sm:text-base lg:text-lg">Years Experience</div>
                <div className="text-xs sm:text-sm text-dark-500 mt-1">Continuous Growth</div>
              </div>
              
              {/* Major Companies */}
              <div className="group p-4 sm:p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl lg:rounded-2xl hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-secondary-600 mb-2 group-hover:scale-110 transition-transform">3</div>
                <div className="text-dark-600 font-semibold text-sm sm:text-base lg:text-lg">Major Companies</div>
                <div className="text-xs sm:text-sm text-dark-500 mt-1">Industry Leaders</div>
              </div>
              
              {/* Team Members */}
              <div className="group p-4 sm:p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl lg:rounded-2xl hover:from-accent-100 hover:to-accent-200 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-accent-600 mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-dark-600 font-semibold text-sm sm:text-base lg:text-lg">Team Members</div>
                <div className="text-xs sm:text-sm text-dark-500 mt-1">Successfully Led</div>
              </div>
              
              {/* Success Rate */}
              <div className="group p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl lg:rounded-2xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-dark-600 font-semibold text-sm sm:text-base lg:text-lg">Success Rate</div>
                <div className="text-xs sm:text-sm text-dark-500 mt-1">Target Achievement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
