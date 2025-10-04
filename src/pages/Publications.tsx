import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const publications = [
  {
    id: '1',
    title: 'Deep Cyclone: A Data-Driven Approach to Enhanced Cyclone Prediction',
    conference: 'ICAMSC 2023',
    year: '2023',
    metric: 'MAE: 4.69 hours',
    abstract:
      'This paper presents Deep Cyclone, a novel deep learning framework for enhanced cyclone trajectory and intensity prediction. By leveraging historical meteorological data and advanced neural network architectures, we achieved a mean absolute error of 4.69 hours in cyclone path prediction, significantly improving upon traditional forecasting methods. Our approach combines CNN and LSTM layers to capture both spatial and temporal patterns in atmospheric data.',
    doi: 'https://doi.org/10.example/icamsc2023',
    tags: ['Deep Learning', 'Weather Prediction', 'CNN', 'LSTM'],
  },
  {
    id: '2',
    title: 'Granular Network Traffic Classification on Mobile Applications',
    conference: 'IEEE IATMSI 2024',
    year: '2024',
    metric: '94% classification accuracy',
    abstract:
      'We present a granular approach to classifying network traffic from mobile applications using machine learning techniques. Our methodology employs feature engineering on packet-level data to identify application-specific traffic patterns. Achieved 94% accuracy in distinguishing between different app categories (social media, streaming, gaming, etc.). The system operates in real-time with minimal computational overhead, making it suitable for network monitoring and security applications.',
    doi: 'https://doi.org/10.example/ieee-iatmsi2024',
    tags: ['Network Security', 'Machine Learning', 'Mobile Computing', 'Classification'],
  },
  {
    id: '3',
    title: 'Beyond Tears: An AI Framework for Baby Cry Interpretation',
    conference: 'ICCCNT 2024',
    year: '2024',
    metric: '89% interpretation accuracy',
    abstract:
      'This research introduces an AI-powered framework for interpreting baby cries to identify underlying needs (hunger, discomfort, pain, etc.). Using audio signal processing and deep learning, we trained models on a diverse dataset of infant vocalizations. Our system achieves 89% accuracy in classifying cry types, potentially helping new parents respond appropriately to infant needs. The framework includes a mobile application for real-time cry analysis and historical tracking.',
    doi: 'https://doi.org/10.example/icccnt2024',
    tags: ['Audio Processing', 'Healthcare AI', 'Mobile App', 'Deep Learning'],
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4">Publications</h1>
          <p className="text-secondary text-lg">
            Research papers published in peer-reviewed conferences, combining theoretical insights with practical applications.
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion type="single" collapsible className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth">
                <AccordionItem value={pub.id} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{pub.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-secondary">
                          <span>{pub.conference}</span>
                          <span>•</span>
                          <span>{pub.year}</span>
                          {pub.metric && (
                            <>
                              <span>•</span>
                              <span className="text-primary font-semibold">{pub.metric}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-secondary leading-relaxed">{pub.abstract}</p>
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="group">
                          View Publication
                          <ExternalLink className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                        </Button>
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
