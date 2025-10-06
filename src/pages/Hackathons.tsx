import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const hackathons = [
  {
    id: '1',
    name: 'Sustainability Hackathon 2023',
    position: '2nd Place',
    date: '2023',
    organizer: 'Tech for Good Foundation',
    description:
      'Developed an innovative waste management solution using computer vision and AI to automatically classify and sort recyclables. Our solution aimed to reduce contamination in recycling streams and improve overall sustainability.',
    project: 'Smart Waste Segregation System',
    impact: 'Potential to reduce waste contamination by 35%',
    tags: ['Computer Vision', 'Sustainability', 'AI', 'Environmental Tech'],
    teamSize: '4 members',
  },
  {
    id: '2',
    name: 'AI Innovation Challenge 2024',
    position: 'Finalist',
    date: '2024',
    organizer: 'National AI Institute',
    description:
      'Created VidyaVeda, a personalized AI learning platform that revolutionizes education through intelligent content recommendations, RAG-based summarization, and adaptive learning paths. The platform combines video analysis, LLM integration, and interactive assessments.',
    project: 'VidyaVeda - Personalized AI Learning Platform',
    impact: 'Improved learning efficiency by 40% in pilot testing',
    tags: ['AI', 'Education', 'RAG', 'LLM', 'EdTech', 'Personalization'],
    teamSize: '3 members',
  },
  {
    id: '3',
    name: 'Healthcare Hackathon 2024',
    position: 'Participant',
    date: '2024',
    organizer: 'MedTech Innovators',
    description:
      'Built an AI-powered baby cry interpretation system that helps new parents identify infant needs through audio signal processing and deep learning. The solution achieved 89% accuracy in classifying cry types.',
    project: 'Baby Cry Interpreter',
    impact: '89% accuracy in cry classification',
    tags: ['Healthcare AI', 'Audio Processing', 'Deep Learning', 'Mobile App'],
    teamSize: '4 members',
  },
  {
    id: '4',
    name: 'AgriTech Challenge 2023',
    position: 'Participant',
    date: '2023',
    organizer: 'Agriculture Innovation Hub',
    description:
      'Developed a plant disease detection web application using deep learning to help farmers identify crop diseases early. The system analyzes leaf images and provides treatment recommendations.',
    project: 'Plant Disease Detection System',
    impact: 'Early detection with 92% accuracy',
    tags: ['AgriTech', 'Computer Vision', 'CNN', 'Web App'],
    teamSize: '3 members',
  },
];

const Hackathons = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4">Hackathons</h1>
          <p className="text-secondary text-lg">
            Competitive innovation events where I've built impactful solutions, collaborated with talented teams, and pushed the boundaries of what's possible in limited time.
          </p>
        </motion.div>

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-card-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{hackathon.name}</CardTitle>
                      <CardDescription className="text-base">
                        {hackathon.organizer}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="default" className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" />
                        {hackathon.position}
                      </Badge>
                      <div className="flex items-center gap-1 text-secondary text-sm">
                        <Calendar className="h-4 w-4" />
                        {hackathon.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{hackathon.project}</h4>
                    <p className="text-secondary leading-relaxed">{hackathon.description}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-secondary">{hackathon.teamSize}</span>
                    </div>
                    <div className="h-4 w-px bg-border" />
                    <div className="text-primary font-semibold">{hackathon.impact}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
