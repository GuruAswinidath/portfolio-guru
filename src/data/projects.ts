import vidyavedaImg from '@/assets/vidyaveda.jpg';
import plantDiseaseImg from '@/assets/plant-disease.jpg';
import wasteManagementImg from '@/assets/waste-management.jpg';
import doodleImg from '@/assets/doodle-classification.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metric?: string;
  problem: string;
  approach: string;
  results: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'vidyaveda',
    title: 'VidyaVeda — Personalized AI Learning',
    description: 'Auto-generated quizzes & summaries with LLMs. Pilot boosted learner engagement by 40%.',
    image: vidyavedaImg,
    tags: ['Python', 'LLMs', 'Django', 'React', 'AI/ML'],
    metric: '40% increase in learner engagement',
    problem: 'Traditional learning platforms lack personalization and fail to adapt to individual student needs. Students struggle with generic content that doesn\'t match their learning pace or style.',
    approach: 'Built a personalized learning platform using large language models to generate custom quizzes and summaries. Implemented adaptive learning algorithms that analyze student performance and adjust content difficulty in real-time. Used Django for backend API, React for frontend, and integrated multiple LLM providers for content generation.',
    results: 'Pilot program showed 40% increase in learner engagement and 35% improvement in quiz scores. Students reported higher satisfaction with personalized content. Platform successfully processed 10,000+ quiz generations with 92% relevance rating.',
    github: 'https://github.com/guruaswinidath/vidyaveda',
    demo: 'https://vidyaveda-demo.com',
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Detection Web App',
    description: 'ML-powered diagnosis on Django. Current accuracy: 72% (target 85%).',
    image: plantDiseaseImg,
    tags: ['Python', 'TensorFlow', 'Django', 'Computer Vision', 'CNN'],
    metric: '72% accuracy (targeting 85%)',
    problem: 'Farmers lack quick, accessible tools for early plant disease detection, leading to crop losses and reduced yields. Manual diagnosis is time-consuming and requires expert knowledge.',
    approach: 'Developed a web-based plant disease detection system using convolutional neural networks (CNN) trained on thousands of plant leaf images. Built REST API with Django to serve predictions. Implemented image preprocessing pipeline to handle various lighting conditions and leaf positions. Used transfer learning with pre-trained models to improve accuracy.',
    results: 'Achieved 72% accuracy on validation set across 10 common plant diseases. Working on data augmentation and model architecture improvements to reach 85% target. Web app processes images in under 2 seconds. Deployed on AWS with 99.9% uptime.',
    github: 'https://github.com/guruaswinidath/plant-disease-detection',
  },
  {
    id: 'waste-management',
    title: 'Waste Management Segregation',
    description: 'Automated conveyor + detection system. Reduced manual sorting effort by ~60%.',
    image: wasteManagementImg,
    tags: ['Python', 'IoT', 'Computer Vision', 'Raspberry Pi', 'YOLOv5'],
    metric: '60% reduction in manual sorting effort',
    problem: 'Manual waste segregation is labor-intensive, error-prone, and poses health risks to workers. Inefficient sorting leads to contamination of recyclable materials.',
    approach: 'Designed and built an automated waste segregation system using computer vision and IoT. Implemented YOLOv5 object detection model to identify different waste types (plastic, paper, metal, organic). Integrated Raspberry Pi with conveyor belt system and sorting mechanisms. Developed real-time monitoring dashboard to track sorting efficiency.',
    results: 'System achieved 60% reduction in manual sorting effort and 85% classification accuracy. Processed 500+ items per hour with minimal human intervention. Reduced contamination rate from 30% to 8%. Project won 2nd place at Sustainability Hackathon 2023.',
    github: 'https://github.com/guruaswinidath/waste-segregation',
  },
  {
    id: 'doodle-classification',
    title: 'Doodle Classification',
    description: 'CNN trained on QuickDraw dataset. Achieved 85% accuracy on 10 categories.',
    image: doodleImg,
    tags: ['Python', 'TensorFlow', 'CNN', 'Machine Learning', 'Flask'],
    metric: '85% accuracy on 10 categories',
    problem: 'Need for real-time sketch recognition to power creative applications and educational tools. Challenge of handling varying drawing styles and incomplete sketches.',
    approach: 'Built a CNN-based doodle classification system trained on Google\'s QuickDraw dataset. Implemented data augmentation techniques to handle various drawing styles. Used Flask to create simple web interface for real-time drawing and prediction. Optimized model for low-latency inference.',
    results: 'Achieved 85% accuracy on 10 doodle categories (cat, house, tree, car, etc.). Model processes drawings in real-time with <100ms latency. Successfully deployed as interactive web demo. Model size optimized to 12MB for faster loading.',
    github: 'https://github.com/guruaswinidath/doodle-classifier',
    demo: 'https://doodle-classifier-demo.com',
  },
];
