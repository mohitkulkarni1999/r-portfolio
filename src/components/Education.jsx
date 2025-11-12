import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, TrendingUp, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "MBA (Marketing)",
      institution: "Punjab Technical University",
      year: "2013-2015",
      percentage: 55.05,
      grade: "First Class",
      description: "Specialized in Marketing Management with focus on strategic planning and consumer behavior.",
      subjects: ["Strategic Marketing", "Consumer Behavior", "Brand Management", "Digital Marketing"],
      color: "primary",
      icon: GraduationCap
    },
    {
      id: 2,
      degree: "PGP (Marketing)",
      institution: "MITCOM",
      year: "2011-2012",
      percentage: 48.05,
      grade: "Second Class",
      description: "Post Graduate Program focusing on practical marketing applications and industry exposure.",
      subjects: ["Market Research", "Sales Management", "Advertising", "Retail Management"],
      color: "secondary",
      icon: BookOpen
    },
    {
      id: 3,
      degree: "B.Sc",
      institution: "SRTMU",
      year: "2008-2011",
      percentage: 67.02,
      grade: "First Class",
      description: "Bachelor of Science with strong foundation in analytical and advanced research methodologies.",
      subjects: ["Mathematics", "Statistics", "Computer Science", "Research Methods"],
      color: "accent",
      icon: Award
    }
  ];

  const getGradeColor = (percentage) => {
    if (percentage >= 60) return "text-secondary-600";
    if (percentage >= 50) return "text-primary-600";
    return "text-accent-600";
  };

  const getProgressWidth = (percentage) => {
    return Math.min(percentage, 100);
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-secondary-50/30 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-16 text-center">Educational Background</h2>
        
        {/* Education Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div key={edu.id} className="card p-8 hover:scale-105 transition-all duration-300 group">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`icon-box w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-${edu.color}-100 to-${edu.color}-200 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-${edu.color}-600`} size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-800 mb-2">{edu.degree}</h3>
                  <p className={`text-lg font-semibold text-${edu.color}-600 mb-2`}>{edu.institution}</p>
                  <div className="flex items-center justify-center gap-2 text-dark-600">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-dark-600 text-center mb-6 leading-relaxed">{edu.description}</p>

                {/* Grade & Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-dark-700">Academic Performance</span>
                    <span className={`text-sm font-bold ${getGradeColor(edu.percentage)}`}>
                      {edu.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`bg-gradient-to-r from-${edu.color}-500 to-${edu.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${getProgressWidth(edu.percentage)}%` }}
                    ></div>
                  </div>
                  <div className={`text-center text-sm font-medium text-${edu.color}-600`}>
                    {edu.grade}
                  </div>
                </div>

                {/* Key Subjects */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-800 mb-3">
                    <Star className={`text-${edu.color}-600`} size={18} />
                    Key Subjects
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <div key={idx} className={`text-xs px-3 py-2 bg-${edu.color}-50 text-${edu.color}-700 rounded-full text-center font-medium border border-${edu.color}-100`}>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Achievements Summary */}
        <div className="card p-8">
          <div className="text-center mb-8">
            <div className="icon-box w-16 h-16 mx-auto mb-4">
              <TrendingUp className="text-primary-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Educational Achievements</h3>
            <p className="text-dark-600 max-w-2xl mx-auto">
              A comprehensive educational foundation spanning business management, marketing specialization, 
              and scientific methodology, providing the analytical and strategic thinking skills essential 
              for modern business coordination roles.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-primary-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-dark-600 font-medium text-sm">Degrees Earned</div>
            </div>
            <div className="text-center p-4 bg-secondary-50 rounded-xl">
              <div className="text-2xl font-bold text-secondary-600 mb-2">7</div>
              <div className="text-dark-600 font-medium text-sm">Years of Study</div>
            </div>
            <div className="text-center p-4 bg-accent-50 rounded-xl">
              <div className="text-2xl font-bold text-accent-600 mb-2">67%</div>
              <div className="text-dark-600 font-medium text-sm">Highest Score</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-dark-600 font-medium text-sm">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
