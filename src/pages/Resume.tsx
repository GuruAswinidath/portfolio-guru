import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4">Resume</h1>
          <p className="text-secondary text-lg mb-6">
            Complete overview of my experience, education, skills, and achievements.
          </p>
          <a href="/resume.pdf" download>
            <Button size="lg" className="group">
              <Download className="mr-2 h-5 w-5 transition-smooth group-hover:translate-y-1" />
              Download Full Resume (PDF)
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl p-8 shadow-card"
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Guru Aswini Dath</h2>
              <p className="text-secondary">AI Engineer & Full-Stack Developer</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Summary */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Professional Summary</h3>
              <p className="text-secondary leading-relaxed">
                AI Engineer and Full-Stack Developer with proven expertise in building scalable intelligent systems. 
                Strong track record of 3 published research papers, 3 hackathon awards, and 3 internships. 
                Specialized in machine learning, deep learning, and production-ready software engineering. 
                Successfully developed AI-powered applications with measurable impact, including 40% improvement in learner engagement 
                and 60% reduction in manual processes.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold">Amrita Vishwa Vidyapeetham</p>
                <p className="text-secondary">Bachelor of Technology in Computer Science & Engineering</p>
                <p className="text-sm text-secondary">2021 - 2025 (Expected)</p>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Programming Languages</p>
                  <p className="text-secondary text-sm">Python, JavaScript, TypeScript, SQL</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">AI/ML Frameworks</p>
                  <p className="text-secondary text-sm">TensorFlow, PyTorch, Scikit-learn, Keras</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Web Technologies</p>
                  <p className="text-secondary text-sm">React, Django, Flask, Node.js, REST APIs</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Tools & Platforms</p>
                  <p className="text-secondary text-sm">Git, Docker, AWS, MongoDB, PostgreSQL</p>
                </div>
              </div>
            </section>

            {/* Key Achievements */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Key Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-secondary">3 research papers published in peer-reviewed conferences (ICAMSC, IEEE IATMSI, ICCCNT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-secondary">Winner/Runner-up at 3 hackathons including 2nd place at Sustainability Hackathon 2023</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-secondary">VidyaVeda AI platform achieved 40% increase in learner engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-secondary">Waste segregation system reduced manual sorting by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-secondary">Email automation tool saved 2+ hours/day at Exposys Datalabs</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Contact Information</h3>
              <div className="space-y-1 text-secondary">
                <p>Email: guruaswinidath25@gmail.com</p>
                <p>Phone: +91 9550793200</p>
                <p>LinkedIn: linkedin.com/in/guruaswinidath</p>
                <p>GitHub: github.com/guruaswinidath</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
