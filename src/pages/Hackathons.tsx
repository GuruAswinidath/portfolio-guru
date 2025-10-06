import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const hackathons = [
  {
    id: '1',
    name: 'KSBB Youth Ideation Challenge 2024',
    position: '1st Place',
    date: 'Jan 2024 – Mar 2024',
    organizer: 'Kerala State Biodiversity Board (KSBB)',
    description:
      'Developed Wildlife RailGuard, an AI-based railway wildlife detection system. Implemented deep learning for real-time wildlife detection and train operator alerts, contributing to wildlife safety and operational efficiency.',
    project: 'Wildlife RailGuard',
    impact: 'Prevented wildlife-train collisions and enhanced railway safety',
    tags: ['AI', 'Deep Learning', 'Computer Vision', 'Wildlife Conservation'],
    teamSize: '3 members',
  },
  {
    id: '2',
    name: 'CMRIT National Level Social Hackathon 2024',
    position: '2nd Place',
    date: 'May 2024',
    organizer: 'CMRIT',
    description:
      'Created SageAI, an AI-driven learning platform using Generative AI (Gemini, LLaMA) to enhance student engagement through summarization and content recommendations.',
    project: 'SageAI - Generative AI Learning Platform',
    impact: 'Improved student engagement and personalized learning experiences',
    tags: ['AI', 'Education', 'Generative AI', 'RAG', 'LLM', 'EdTech'],
    teamSize: '3 members',
  },
  {
    id: '3',
    name: 'CodeByte-Idea Ignite 2024',
    position: '13th Place',
    date: 'Feb 2024 – Aug 2024',
    organizer: 'CodeByte',
    description:
      'Developed an AI-driven agricultural system for precision farming. Achieved 72% accuracy in crop disease detection and optimized irrigation to save 30% water.',
    project: 'AI Agricultural System',
    impact: 'Increased crop yield efficiency and reduced water usage',
    tags: ['AI', 'Agriculture', 'Machine Learning', 'Computer Vision', 'IoT'],
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
