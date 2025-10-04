import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: '1',
    quote: 'Guru brings creativity and discipline to every AI project. His ability to bridge research and implementation is exceptional.',
    author: 'Dr. Priya Sharma',
    role: 'Research Mentor',
    company: 'Amrita Vishwa Vidyapeetham',
    initials: 'PS',
  },
  {
    id: '2',
    quote: 'He translates research into working software fast. One of the most reliable team members I have worked with.',
    author: 'Rajesh Kumar',
    role: 'Hackathon Judge',
    company: 'TechInnovate Hackathon',
    initials: 'RK',
  },
  {
    id: '3',
    quote: 'A sharp mind for both backend and AI models. Guru consistently delivered high-quality work during his internship.',
    author: 'Sarah Chen',
    role: 'Engineering Lead',
    company: 'Exposys Datalabs',
    initials: 'SC',
  },
  {
    id: '4',
    quote: 'Outstanding leadership as club president. Guru mentored many students and organized impactful sustainability projects.',
    author: 'Prof. Anand Menon',
    role: 'Faculty Advisor',
    company: 'amESE Club',
    initials: 'AM',
  },
  {
    id: '5',
    quote: 'His work on network traffic classification showed deep understanding of both ML theory and practical implementation.',
    author: 'Dr. Michael Zhang',
    role: 'Research Supervisor',
    company: 'ACM Kollam',
    initials: 'MZ',
  },
  {
    id: '6',
    quote: 'Guru\'s plant disease detection project demonstrated innovative thinking and solid engineering practices. Impressive work!',
    author: 'Lisa Martinez',
    role: 'Industry Mentor',
    company: 'AgriTech Solutions',
    initials: 'LM',
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4">Testimonials</h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            What mentors, colleagues, and industry professionals say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-card-hover transition-smooth">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-secondary mb-6 flex-1 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                    <p className="text-xs text-secondary">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
