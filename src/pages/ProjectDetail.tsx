import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link to="/projects">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-smooth group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero */}
          <div className="mb-8">
            <h1 className="mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            {project.metric && (
              <p className="text-primary text-lg font-semibold mb-6">
                {project.metric}
              </p>
            )}
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="group">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                    <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </Button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button className="group">
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          {/* Sections */}
          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">Problem</h2>
              <p className="text-secondary leading-relaxed">{project.problem}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4">Approach</h2>
              <p className="text-secondary leading-relaxed">{project.approach}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4">Results</h2>
              <p className="text-secondary leading-relaxed">{project.results}</p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
