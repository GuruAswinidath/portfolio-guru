import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    id: '1',
    role: 'Frontend Intern',
    company: 'Exposys Datalabs',
    period: '2024',
    type: 'internship',
    description:
      'Built bulk email automation with SMTP integration, saving 2+ hours per day in manual email operations. Developed responsive frontend interfaces using React and integrated RESTful APIs for data management.',
    achievements: [
      'Automated email workflow reducing processing time by 70%',
      'Implemented responsive UI components used across 5+ projects',
      'Collaborated with backend team to optimize API performance',
    ],
  },
  {
    id: '2',
    role: 'Research Intern',
    company: 'ACM Kollam',
    period: '2023',
    type: 'internship',
    description:
      'Worked on network traffic classification research, contributing to the development of machine learning models for granular mobile application traffic analysis.',
    achievements: [
      'Co-authored research paper published at IEEE IATMSI 2024',
      'Developed feature extraction pipeline for network packet analysis',
      'Achieved 94% classification accuracy on test dataset',
    ],
  },
  {
    id: '3',
    role: 'Club President',
    company: 'amESE',
    period: '2023-2024',
    type: 'leadership',
    description:
      'Led the amESE club, organizing ideathons and sustainability projects focused on green-tech solutions. Mentored team members and coordinated multiple hackathon participations.',
    achievements: [
      'Organized 3 successful ideathons with 150+ participants',
      'Led team to win 2nd place at Sustainability Hackathon 2023',
      'Mentored 20+ students in AI and full-stack development',
      'Established partnerships with 5 local tech companies',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4">Experience</h1>
          <p className="text-secondary text-lg">
            Professional journey spanning internships, research, and leadership roles in AI and software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                {/* Content */}
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary text-sm">
                      {exp.type === 'leadership' ? (
                        <Award className="h-5 w-5" />
                      ) : (
                        <Briefcase className="h-5 w-5" />
                      )}
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-secondary mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-secondary text-sm flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
