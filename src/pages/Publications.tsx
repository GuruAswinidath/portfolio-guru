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
    doi: 'https://pubs.aip.org/aip/acp/article-abstract/3171/1/070003/3302633/Deep-cyclone-A-data-driven-approach-to-enhanced',
    tags: ['Deep Learning', 'Weather Prediction', 'CNN', 'LSTM'],
    status: 'Published',
  },
  {
    id: '2',
    title: 'Granular Network Traffic Classification on Mobile Applications',
    conference: 'IEEE IATMSI 2024',
    year: '2024',
    metric: '94% classification accuracy',
    abstract:
      'We present a granular approach to classifying network traffic from mobile applications using machine learning techniques. Our methodology employs feature engineering on packet-level data to identify application-specific traffic patterns. Achieved 94% accuracy in distinguishing between different app categories (social media, streaming, gaming, etc.). The system operates in real-time with minimal computational overhead, making it suitable for network monitoring and security applications.',
    doi: 'https://ieeexplore.ieee.org/document/10503043',
    tags: ['Network Security', 'Machine Learning', 'Mobile Computing', 'Traffic Classification','Granularity','parental control','Deep learning'],
    status: 'Published',
  },
  {
    id: '3',
    title: 'Beyond Tears: An AI Framework for Baby Cry Interpretation',
    conference: 'ICCCNT 2024',
    year: '2024',
    metric: '89% interpretation accuracy',
    abstract:
      'This research introduces an AI-powered framework for interpreting baby cries to identify underlying needs (hunger, discomfort, pain, etc.). Using audio signal processing and deep learning, we trained models on a diverse dataset of infant vocalizations. Our system achieves 89% accuracy in classifying cry types, potentially helping new parents respond appropriately to infant needs. The framework includes a mobile application for real-time cry analysis and historical tracking.',
    doi: 'https://ieeexplore.ieee.org/document/10725318',
    tags: ['Audio Processing', 'Healthcare AI', 'Mobile App', 'Deep Learning','Mel-frequency Cepstral Coefficients','Principle Component Analysis','Decision Tree','MongoDB','Streamlit'],
    status: 'Published',
  },
  // Presented papers with updated content
  {
    id: '4',
    title: 'Enhanced Autonomous Landing for Disaster Response Drones Using Deep Learning: A Comparative Study of YOLOv8 and VGG Architectures',
    conference: 'ICRM (Presented)',
    year: '2024',
    metric: '',
    abstract:
      'In the view of disaster management, timely and efficient delivery of essential supplies such as food, medicine, and water is critical. Drones, or micro aerial vehicles (MAVs), provide a reliable solution for rapid and targeted distribution. However, the accuracy of landing drones in unpredictable and harsh environments to deliver the essentials is often a challenge. This study explores the application of vision-based landing techniques for MAVs landing with a focus on precision in landmark detection under unpredictable environmental conditions. We conduct a comparative analysis study on two deep learning architectures, VGG and YOLOv8, for this purpose.',
    doi: '', // Not published
    tags: ['Drones', 'Deep Learning', 'Disaster Response', 'YOLOv8', 'VGG'],
    status: 'Presented',
  },
  {
    id: '5',
    title: 'VidyaVeda: Empowering Learning with Personalized AI',
    conference: 'ICTIS 2025 (Presented)',
    year: '2024',
    metric: '',
    abstract:
      'VidyaVeda is an AI-driven generative platform focused on delivering personalized learning experiences. It combines traditional learning methods with modern ones and uses AI techniques to solve complicated problems in the education sector and deliver an all-inclusive and changing learning journey. The system employs various technologies to revolutionize educational experience. It combines factors such as the lack of personalization, slow feedback, and poor engagement strategies to the focus on education. VidyaVeda tackles these important challenges in education by using AI to recommend video content based on subtitles, train a specialized Large Language Model (LLM), and create clear, concise summaries through a Retrieval-Augmented Generation (RAG) method. More than just delivering content, the platform actively supports students by offering interactive questions and detailed feedback, helping them understand and retain information better. One of VidyaVeda’s key strengths is its ability to transform user-provided text into high-quality educational material, making learning more personal and adaptable to each student’s needs. This AI-driven approach is a meaningful step toward reshaping education into a smarter, more responsive experience. We believe that with thoughtful guidance, AI has the power to transform how we learn—making education more efficient, inclusive, and accessible for everyone. VidyaVeda embraces this vision by moving beyond technology alone to create a supportive learning environment that encourages student independence, deeper understanding, and lasting success. Index Terms: Generative AI, Personalized Learning, Large Language Models, Subtitle-Based Recommendations, Interactive Quizzes, Retrieval-Augmented Generation, Adaptive Education, Video Summarization, AI in Education, Performance Analytics.',
    doi: '',
    tags: ['AI', 'Education', 'Personalized Learning', 'RAG', 'LLM', 'EdTech'],
    status: 'Presented',
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
            Research papers published in peer-reviewed conferences, as well as presented works that are not yet published.
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
              <Accordion
                type="single"
                collapsible
                className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth"
              >
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
                          <span>•</span>
                          <span
                            className={
                              pub.status === 'Published'
                                ? 'text-green-600 font-semibold'
                                : 'text-yellow-600 font-semibold'
                            }
                          >
                            {pub.status}
                          </span>
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
                      {pub.status === 'Published' && pub.doi && (
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            View Publication
                            <ExternalLink className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                          </Button>
                        </a>
                      )}
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
