import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import heroImg from '@/assets/hero-bg.jpg';

const Home = () => {
  const featuredProjects = projects.filter(p => 
    ['vidyaveda', 'plant-disease', 'wildlife'].includes(p.id)
  );

  const stats = [
    { icon: BookOpen, label: 'Publications', value: '3' },
    { icon: Award, label: 'Hackathon Awards', value: '3' },
    { icon: Briefcase, label: 'Internships', value: '4' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="mb-6 text-balance">
              Guru Aswini Dath
              <br />
              <span className="text-xl text-muted-foreground">AI Engineer & Software Developer</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-8 font-normal max-w-3xl">
              Building scalable, intelligent systems that turn research into production.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
                </Button>
              </Link>
              {/* <a href="/resume.pdf" download>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5 transition-smooth group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-card-hover transition-smooth cursor-pointer">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-secondary text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-secondary text-lg max-w-2xl">
              Explore my latest work combining AI research with production-ready engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruiter CTA */}
      <section className="py-16 px-4 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-4 text-primary-foreground">
              Looking for AI engineers who combine research + engineering?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's connect and discuss how I can contribute to your team.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
