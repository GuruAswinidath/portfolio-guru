import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metric?: string;
}

const ProjectCard = ({ id, title, description, image, tags, metric }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-secondary text-sm mb-4">{description}</p>
        {metric && (
          <p className="text-primary text-sm font-semibold mb-4">{metric}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/projects/${id}`}>
          <Button variant="ghost" size="sm" className="group">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
