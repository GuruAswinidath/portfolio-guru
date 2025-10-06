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
          {/* <a href="/resume.pdf" download>
            <Button size="lg" className="group">
              <Download className="mr-2 h-5 w-5 transition-smooth group-hover:translate-y-1" />
              Download Full Resume (PDF)
            </Button>
          </a> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl p-8 shadow-card"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Guru Aswini Dath</h2>
              <p className="text-secondary">AI Engineer & Full-Stack Developer</p>
              <p className="text-secondary text-sm">
                +91 9550793200 | guruaswinidath25@gmail.com
              </p>
              <p className="text-secondary text-sm">
                linkedin.com/in/aswinidath-chinni-405880271 | github.com/GuruAswinidath
              </p>
              <p className="text-secondary text-sm">Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Summary */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Professional Summary</h3>
              <p className="text-secondary leading-relaxed">
                I am Guru Aswini Dath, a passionate and tech-driven Computer Science student with strong expertise in AI development,
                full-stack development, and problem-solving. Experienced in leading projects, collaborating with teams, and effectively
                communicating complex ideas. I am eager to contribute technical expertise and innovation to impactful projects.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold">Amrita Vishwa Vidyapeetham, Amritapuri, Kerala</p>
                <p className="text-secondary">B.Tech in Computer Science & Engineering (AI), CGPA: 8.2, 2021 – 2025</p>

                <p className="font-semibold mt-2">Narayana Junior College, Nellore, Andhra Pradesh</p>
                <p className="text-secondary">Higher Secondary Education (MPC), Marks: 894, 2019 – 2021</p>

                <p className="font-semibold mt-2">Kuppam Public School, Kuppam, Andhra Pradesh</p>
                <p className="text-secondary">Secondary Education, CGPA: 9.5, 2018 – 2019</p>
              </div>
            </section>

            {/* Internships */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Experience</h3>
              <ul className="space-y-4 text-secondary">
                <li>
                  <p className="font-semibold">AI Engineer - Amrita Vishwa Vidyapeetham, Faridabad, New Delhi (Jul 2025 - Present)</p>
                  <ul className="list-disc ml-5 mt-1">
                    {/* <li></li>
                    <li></li> */}
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Software Intern – NeST Digital, Trivendrum, Kerala (Jun 2025 - Jul 2025)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Implemented an AI-Monitoring-Agent using Python and Flask to track Meeting and Automatically extract Keypoints.</li>
                    <li>Developed internal tools to optimize workflow efficiency</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Frontend Developer – Exposys Datalabs, Bangalore, Karnataka (Dec 2024 – Jan 2025)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Developed an automated email-sending system, improving bulk email efficiency by 70%.</li>
                    <li>Integrated SMTP for secure email dispatch and optimized system performance for large-scale email distribution.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Research Intern – ACM Kollam, Kerala (Aug 2023 – Nov 2023)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Conducted research on network traffic classification and granular network technologies.</li>
                    <li>Designed a hybrid model for analyzing mobile network traffic.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Web Developer – Datalense Services, Kuppam, Andhra Pradesh (Aug 2023 – Sep 2023)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Gained hands-on experience in web development using Laravel and PHP through real-world projects.</li>
                    <li>Contributed to deployment of the G-Star Elevator website as part of the deployment team.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Projects */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Projects</h3>
              <ul className="space-y-4 text-secondary">
                <li>
                  <p className="font-semibold">VidyaVeda – Personalized AI (Ongoing, Nov 2024 – Present)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Developing a web application leveraging Generative AI to personalize learning experiences.</li>
                    <li>Integrating features such as automated quizzes, note generation, and video summaries to enhance engagement.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Waste Management Segregation (Ongoing, Jan 2025 – Present)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Designing an AI-powered system to automate waste segregation using a conveyor belt mechanism.</li>
                    <li>Implementing top-view object detection to classify and separate materials like plastic, paper, and metal efficiently.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Plant Disease Detection | Python, Deep Learning, Django (Oct 2024 – Jan 2025)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Developed a Django-based web application to predict plant diseases using ML & DL models.</li>
                    <li>Implemented image classification techniques to diagnose diseases and provide treatment recommendations.</li>
                  </ul>
                </li>
                {/* <li>
                  <p className="font-semibold">Doodle Classification | Python, CNN, Google QuickDraw Dataset (Aug 2024 – Oct 2024)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Developed a CNN model to classify doodle images into different categories.</li>
                    <li>Trained and evaluated on the Google QuickDraw Dataset, achieving high accuracy.</li>
                  </ul>
                </li> */}
              </ul>
            </section>

            {/* Publications */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Publications</h3>
              <ul className="space-y-4 text-secondary">
                <li>
                  <p className="font-semibold">Deep Cyclone: A Data-Driven Approach to Enhanced Cyclone Prediction (ICAMSC 2023, May 2024 – July 2024)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Utilized MobileNetV2 for cyclone intensity prediction, achieving MAE of 4.69 hours.</li>
                    <li>Enhanced disaster response by improving lead times for evacuation.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Granular Network Traffic Classification on Mobile Applications (IEEE IATMSI 2024, Apr 2024)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Developed mobile network traffic classifier using ML (SVM, Adaboost) and DL (RNN, LSTM, CNN) with 80% accuracy.</li>
                    <li>Implemented adaptive parental control with 70% accuracy for new applications.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Beyond Tears: An AI Framework for Baby Cry Interpretation (ICCCNT 2024, Dec 2023 – Jan 2024)</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Designed baby cry classification system using MFCC, PCA, and decision trees achieving 95% accuracy.</li>
                    <li>Improved pediatric healthcare by accurately distinguishing between baby needs.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Achievements</h3>
              <ul className="space-y-2 text-secondary">
                <li>CMRIT National Level Social Hackathon 2024 – 2nd Place: SageAI, an AI-driven learning platform using Generative AI (Gemini, LLaMA).</li>
                <li>KSBB Youth Ideation Challenge Jan 2024 – Mar 2024 – 1st Place: Wildlife RailGuard, AI-based railway wildlife detection system.</li>
                <li>CodeByte-Idea Ignite Feb 2024 – Aug 2024 – 13th Place: AI-driven agricultural system with 72% accuracy and 30% water savings.</li>
              </ul>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Technical Skills</h3>
              <ul className="space-y-2 text-secondary">
                <li>Languages: Python, SQL (PostgreSQL)</li>
                <li>Frontend: HTML, CSS, JavaScript, React.js</li>
                <li>Backend: Laravel, PHP, Django</li>
                <li>Developer Tools: Git, VS Code</li>
                <li>Data Visualization: Tableau</li>
              </ul>
            </section>

            {/* Position of Responsibility */}
            <section>
              <h3 className="font-bold text-lg mb-3 text-primary">Position of Responsibility</h3>
              <ul className="space-y-2 text-secondary">
                <li>
                  President, amESE Club (Feb 2024 – Present) – Amrita Energy Swaraj Environment Club
                  <ul className="list-disc ml-5 mt-1">
                    <li>Organized talks, ideathons, and competitions on sustainability and environmental conservation.</li>
                    <li>Led initiatives promoting renewable energy and eco-friendly practices within the community.</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
