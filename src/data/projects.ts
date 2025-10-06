import vidyavedaImg from '@/assets/vidyaveda.jpg';
import plantDiseaseImg from '@/assets/plant-disease.jpg';
import wasteManagementImg from '@/assets/waste-management.jpg';
import doodleImg from '@/assets/doodle-classification.jpg';
import wildlifeImg from '@/assets/wildlife-railguard.jpg';
import aiMonitoringImg from '@/assets/ai-monitoring.jpg';
import productRecImg from '@/assets/product-recommendation.jpg';
import qrCodeImg from '@/assets/qr-code.jpg';
import legalMgmtImg from '@/assets/legal-management.jpg';

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
    github: 'https://github.com/GuruAswinidath/Vidya_Veda',
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
    github: 'https://github.com/GuruAswinidath/Plant-Disease-Prediction-Using-Django',
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
    github: 'https://github.com/GuruAswinidath/waste-management-with-AI',
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
  },
  {
    id: 'wildlife',
    title: 'WildLife RailGuard — Train-Animal Collision Mitigation',
    description: 'AI-powered wildlife detection system for railway safety and conservation monitoring.',
    image: wildlifeImg,
    tags: ['Python', 'AI', 'Computer Vision', 'Conservation', 'YOLOv8'],
    metric: 'Enhanced railway safety & wildlife protection',
    problem: 'High rate of train-animal collisions in forest-adjacent tracks leads to significant wildlife fatalities and operational risks for trains.',
    approach: 'Developed an AI-based vision system using YOLOv8 for real-time detection of animals on railway tracks. Integrated edge devices with surveillance cameras and alert systems for instant operator notifications. Implemented dataset augmentation to handle low-light and foggy conditions.',
    results: 'Demonstrated 91% detection accuracy in simulated conditions and reduced potential collision risk by over 50%. Won 1st place at KSBB Youth Ideation Challenge for impactful innovation.',
    github: 'https://github.com/GuruAswinidath/WildLife',
  },
  {
    id: 'ai-monitoring',
    title: 'AI Monitoring Agent',
    description: 'End-to-end AI performance tracker with automated alerting, logging, and system diagnostics.',
    image: aiMonitoringImg,
    tags: ['Python', 'AI', 'Monitoring', 'Automation', 'DevOps'],
    metric: '30% reduction in downtime',
    problem: 'AI systems in production often experience unnoticed performance degradation, data drift, or inference bottlenecks.',
    approach: 'Built a lightweight Python-based monitoring agent capable of tracking AI model metrics, system resource usage, and pipeline health. Integrated alerting with Slack and email notifications for threshold breaches. Implemented real-time anomaly detection for model drift using statistical checks.',
    results: 'Reduced model downtime by 30%, improved response to data drift, and enhanced observability across deployed AI pipelines.',
    github: 'https://github.com/GuruAswinidath/AI-Monitoring-Agent',
  },
  {
    id: 'product-recommendation',
    title: 'Product Recommendation System',
    description: 'Personalized product suggestions using machine learning and collaborative filtering techniques.',
    image: productRecImg,
    tags: ['Python', 'ML', 'Recommendation System', 'Flask', 'Data Science'],
    metric: '25% increase in engagement',
    problem: 'Online shoppers often receive irrelevant product suggestions, leading to reduced sales and engagement.',
    approach: 'Developed a hybrid recommendation model combining collaborative filtering with content-based analysis using customer purchase history and product metadata. Deployed backend in Flask with dynamic result caching and a web dashboard for analytics visualization.',
    results: 'Improved click-through rates by 25% and boosted recommendation accuracy from 68% to 84%. Demonstrated scalable architecture for mid-size e-commerce platforms.',
    github: 'https://github.com/GuruAswinidath/Product-Recommendation-System',
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator & Decoder Using Python OpenCV',
    description: 'Lightweight utility for fast QR code creation and decoding with real-time preview.',
    image: qrCodeImg,
    tags: ['Python', 'OpenCV', 'Computer Vision', 'GUI', 'Automation'],
    metric: 'Instant QR generation & scanning',
    problem: 'Existing QR tools lack customization, offline functionality, and bulk generation capabilities.',
    approach: 'Implemented a Python-based tool using OpenCV and qrcode libraries for generating and decoding QR codes. Added options for batch creation, data encryption, and user-defined QR templates. GUI designed with Tkinter for easy usability.',
    results: 'Enabled instant QR creation, secure decoding, and offline batch processing for 500+ QR codes. Ideal for SMEs and internal business systems.',
    github: 'https://github.com/GuruAswinidath/QR-Code-Generator-and-Decoder-Using-Python-OpenCV',
  },
  {
    id: 'legal-management',
    title: 'Legal Management System',
    description: 'Comprehensive web platform for managing legal cases, client details, and document workflows.',
    image: legalMgmtImg,
    tags: ['Python', 'Django', 'Web App', 'Database', 'Admin Dashboard'],
    metric: 'Streamlined case tracking for legal professionals',
    problem: 'Law firms and independent advocates struggle to manage multiple cases and client communications efficiently.',
    approach: 'Developed a Django-based application with separate modules for clients, cases, documents, and hearings. Added authentication, role-based access, and automatic document upload categorization. Integrated dashboard for tracking ongoing cases and hearing schedules.',
    results: 'Reduced manual record-keeping by 60% and improved productivity for legal teams through centralized case data access and progress tracking.',
    github: 'https://github.com/GuruAswinidath/Legal-Management-System',
  },
];
