import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: '1',
    title: 'How I Improved Accuracy in Plant Disease Detection (72% → 85%)',
    excerpt: 'Deep dive into the techniques and strategies used to boost model performance, including data augmentation, transfer learning, and hyperparameter tuning.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Machine Learning', 'Computer Vision', 'Agriculture'],
    status: 'coming-soon',
  },
  {
    id: '2',
    title: 'Lessons from Building VidyaVeda: AI for Personalized Learning',
    excerpt: 'Key insights from developing an AI-powered learning platform, from LLM integration challenges to measuring learner engagement.',
    date: '2024-03-01',
    readTime: '10 min read',
    tags: ['AI/ML', 'LLMs', 'EdTech', 'Product Development'],
    status: 'coming-soon',
  },
  {
    id: '3',
    title: 'Hackathon Playbook: From Idea to Prototype in 24 Hours',
    excerpt: 'A practical guide to succeeding in hackathons, covering ideation, rapid prototyping, team collaboration, and presentation tips.',
    date: '2024-02-20',
    readTime: '6 min read',
    tags: ['Hackathons', 'Product Development', 'Team Work'],
    status: 'coming-soon',
  },
  {
    id: '4',
    title: 'Network Traffic Classification: From Research to Production',
    excerpt: 'Journey of taking academic research on mobile app traffic classification and turning it into a deployable system.',
    date: '2024-02-05',
    readTime: '12 min read',
    tags: ['Research', 'Network Security', 'ML Production'],
    status: 'coming-soon',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4">Blog & Insights</h1>
          <p className="text-secondary text-lg">
            Thoughts on AI engineering, research, and lessons learned from building real-world systems.
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-card-hover transition-smooth">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                    <p className="text-secondary mb-4">{post.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <Button variant="ghost" size="sm" disabled className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-muted/30 rounded-xl p-8"
        >
          <h3 className="mb-2">More articles coming soon!</h3>
          <p className="text-secondary">
            Stay tuned for in-depth articles on AI engineering, research, and practical insights from real projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
