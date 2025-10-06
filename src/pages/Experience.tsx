import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    id: '1',
    role: 'AI Engineering',
    company: 'Amrita Vishwa Vidyapeetham',
    period: 'Jul 2024 - Present',
    type: 'Full-Time',
    description:
      'Working as an AI Engineer, implementing AI models for medical field projects.',
    achievements: [
      'Implemented AI-based diagnostic tool improving accuracy by 20%',
      'Automated data preprocessing and feature extraction pipelines for healthcare datasets',
      'Collaborated with medical professionals to optimize AI solutions for real-world use cases',
      'Deployed AI models into production systems used by healthcare teams',
    ],
  },
  
  {
    id: '2',
    role: 'Software Intern',
    company: 'NeST Digital',
    period: 'Jun 2025- Jul 2025',
    type: 'Internship',
    description:
      'Interned as a software developer, gaining experience in full-stack development, database management.',
    achievements: [
      'Implemented an AI-Monitoring-Agent using Python and Flask to track Meeting and Automatically extract Deadlines, Requests, Progress updates, Assigned tasks.Send the extracted meeting summary to any email via Gmail performance',
      'Developed internal tools to optimize workflow efficiency',
      'Contributed to frontend and backend features in ongoing projects',
      'Received positive feedback from team lead for code quality and problem-solving',

    ],
  },
  {
    id: '3',
    role: 'Club President',
    company: 'amESE - Amrita Energy Swaraj Environment Club',
    period: 'Dec 2024- Jul 2025',
    type: 'leadership',
    description:
      'Led the amESE club, organizing ideathons and sustainability projects focused on green-tech solutions. Mentored team members and coordinated multiple hackathon participations.',
    achievements: [
      'Organized 4 successful ideathons, talks with industry experts, with 150+ participants',
      'Led team to win 1st KSBB Youth Ideation Challenge, 2nd place at Sustainability Hackathon 2023',
      'Mentored 10+ students in AI projects',
    ],
  },

  {
    id: '4',
    role: 'Frontend Intern',
    company: 'Exposys Datalabs',
    period: 'Dec 2024- Jan 2025',
    type: 'Internship',
    description:
      'Built bulk email automation with SMTP integration, saving 2+ hours per day in manual email operations. Developed responsive frontend interfaces using React and integrated RESTful APIs for data management.',
    achievements: [
      'Automated email workflow reducing processing time by 50%',
      'Implemented responsive UI components used across 3+ projects',
      'Collaborated with backend team to optimize API performance',
    ],
  },
  {
    id: '5',
    role: 'Research Intern',
    company: 'ACM Kollam',
    period: 'Aug 2023 - Nov 2023',
    type: 'Internship',
    description:
      'Worked on network traffic classification research, contributing to the development of machine learning models for granular mobile application traffic analysis.',
    achievements: [
      'Co-authored research paper published at IEEE IATMSI 2024',
      'Developed feature extraction pipeline for network packet analysis',
      'Achieved 94% classification accuracy on test dataset',
    ],
  },

  {
    id: '6',
    role: 'Web Development Intern',
    company: 'Datalense Services',
    period: 'Aug 2023 - Sep 2023',
    type: 'Internship',
    description:
      'Gained hands-on experience in web development using Laravel and PHP through real-world projects. Contributed to website deployment and maintenance tasks.',
    achievements: [
       'Developed frontend and backend features for client websites',
      'Contributed to deployment of G-Star Elevator website as part of the team',
      'Learned best practices in web application development and version control',
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
