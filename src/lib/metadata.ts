import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi, FaTasks, FaStripeS, FaPython, FaDocker, FaGitAlt, FaLinux, FaServer, FaBrain, FaEye } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact, SiPrometheus, SiGrafana, SiGoogledrive, SiTensorflow, SiApachekafka, SiApachespark, SiStreamlit, SiTableau } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Princy Patel - Portfolio',
  description: 'Professional portfolio showcasing my projects and skills',
  author: 'Princy Patel',
  siteUrl: 'https://princy1862.github.io/portfolio/',
  twitterHandle: '@princy1862',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;

  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/princy.png`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${currentUrl}/images/princy.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
};

export const experiences = [
  {
    title: "Data Science Intern",
    company: "Quarks Systems",
    location: "Ahmedabad, IN",
    type: "Internship",
    date: "2023 - 2024",
    description: "At Quark Systems, I worked on large-scale data projects where I designed and implemented over 10 data strategies that improved project outcomes by 15%. I performed in-depth analysis on more than 500,000 records using SQL, Python, Spark, and Tableau, leading to a 10% improvement in decision-making accuracy. I also completed 25+ hours of advanced training in TensorFlow and Scikit-learn to enhance my machine learning expertise, while contributing to cross-functional collaboration that ensured 90%+ on-time project delivery.",
    skills: ["Python", "Apache Spark", "Tableau", "TensorFlow", "Scikit-learn", "SQL"],
  },
  {
    title: "Software Developer Intern",
    company: "Sapphire Software Solutions",
    location: "Pune, IN",
    type: "Internship",
    date: "2022 - 2023",
    description: "During my internship at Sapphire, I helped develop and deploy key features for the Vidyalaya ERP system using React.js, Node.js, and MongoDB, resulting in a 20% boost in system performance and a 15% increase in user satisfaction. I integrated the WhatsApp Business API and built three biometric authentication tools using Python, which streamlined workflows for over 500 users. I also managed more than 10 e-learning modules and enhanced platform scalability and reliability using Docker, Kubernetes, and AWS.",
    skills: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "AWS", "WhatsApp Business API", "Python", "Biometric Authentication"],
  },
];

export const education = [
  {
    title: "Master of Science in Data Science, Analytics and Engineering",
    institution: "Arizona State University",
    location: "Tempe, AZ",
    date: "2025 - 2026",
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    institution: "Silver Oak University",
    location: "Ahmedabad, IN",
    date: "2020 - 2024",
  }
];

export const projects = [
  {
    id: 1,
    title: "VisionClarity",
    des: "Visual AI system for accurate product descriptions and search, with Docker deployment and real-time monitoring using Prometheus and Grafana.",
    img: "images/visionclarity.png",
    icons: [
      { icon: FaPython, color: "#3776AB" },  // Python
      { icon: SiTensorflow, color: "#FF6F00" },  // Deep Learning (TensorFlow)
      { icon: FaDocker, color: "#2496ED" },  // Docker
      { icon: SiPrometheus, color: "#E6522C" },  // Prometheus
      { icon: SiGrafana, color: "#F46800" },  // Grafana
      { icon: FaGitAlt, color: "#F05032" },  // Git (Version Control)
      { icon: SiGoogledrive, color: "#4285F4" },  // Google Drive (Model Storage & Retrieval)
      { icon: FaLinux, color: "#FCC624" }  // Linux Shell
    ],
    link: "https://github.com/princy1862/princy1862-VisionClarity--Mitigating-Object-Hallucination-in-MLLM-Models",
  },
  {
    id: 2,
    title: "Real-time Election Voting System",
    des: "Built a Dockerized real-time voting system with Kafka, Spark, PostgreSQL, and Streamlit for live analytics and fault tolerance.",
    img: "images/RT.png",
    icons: [
      { icon: FaPython, color: "#3776AB" },  // Python
      { icon: SiApachekafka, color: "#231F20" },  // Apache Kafka
      { icon: SiApachespark, color: "#E25A1C" },  // Apache Spark Streaming
      { icon: SiPostgresql, color: "#336791" },  // PostgreSQL
      { icon: SiStreamlit, color: "#FF4B4B" },  // Streamlit
      { icon: FaDocker, color: "#2496ED" },  // Docker & Docker Compose
      { icon: FaServer, color: "#FF6600" },  // Zookeeper
      { icon: FaGitAlt, color: "#F05032" },  // Git (Version Control)
    ],

    link: "https://github.com/princy1862/RealTimeVotingEngineering",
  },
  {
    id: 3,
    title: "Deep Learning-Based Flower Classification and Object Detection",
    des: "Built a CNN-based flower classifier and sliding window car detector, achieving 71.7% accuracy and 0.72 IoU.",
    img: "images/OD.png",
    icons: [
      { icon: FaPython, color: "#3776AB" },  // Python
      { icon: SiTensorflow, color: "#FF6F00" },  // TensorFlow/Keras
      { icon: FaBrain, color: "#FF6B6B" },  // CNN (Convolutional Neural Network)
      { icon: FaEye, color: "#4ECDC4" },  // Sliding Window Technique (Computer Vision)
    ],
    link: "https://github.com/princy1862/Deep-Learning-Based-Flower-Classification-and-Object-Detection",
  },
  {
    id: 4,
    title: "Sales Dashboard – Tableau",
    des: "Built an interactive Tableau dashboard to visualize sales trends, track KPIs, and support data-driven business decisions",
    img: "images/TB.png",
    icons: [
      { icon: SiTableau, color: "#E97627" } // Tableau
      // { icon: SiReact, color: "#61DAFB" },  // React
      // { icon: SiTypescript, color: "#3178C6" },  // TypeScript
      // { icon: SiFirebase, color: "#FFCA28" },  // Firebase
      // { icon: FaStripeS, color: "#008CDD" }  // Stripe (Using Stripe S icon as there's no specific SiStripe)
    ],
    link: "https://github.com/princy1862/Data-Analytics-Sales-Dashboard",
  },
  // {
  //   id: 5,
  //   title: "E-commerce Backend Application",
  //   des: " E-commerce app with functionalities such as product listings, categories, order processing, shopping carts, and user profiles which supports smooth scalability as business needs grow.",
  //   img: "images/projects/project3.png",
  //   icons: [
  //     { icon: SiSpring, color: "#6DB33F" },  // Spring Boot
  //     { icon: FaJava, color: "#007396" },  // Java
  //     { icon: SiPostman, color: "#FF6C37" },  // Postman
  //     { icon: SiPostgresql, color: "#336791" },  // PostgreSQL
  //     { icon: SiHibernate, color: "#59666C" },  // Hibernate (Assumed color, as no official color is widely recognized)
  //     { icon: SiGithub, color: "#181717" }  // GitHub
  //   ],

  //   link: "https://github.com/devika7300/Spring-boot-ecommerce-app",
  // },
  // {
  //   id: 6,
  //   title: "Shift Management",
  //   des: "A web application that enables streamlined scheduling, real-time adjustments, and enhanced visibility into workforce allocation, thereby boosting overall operational efficiency and reducing labor costs.",
  //   img: "images/projects/project5.png",
  //   icons: [
  //     { icon: SiMysql, color: "#00758F" },  // MySQL
  //     { icon: SiPostman, color: "#FF6C37" },  // Postman
  //     { icon: SiSpringboot, color: "#6DB33F" },  // Spring Boot
  //     { icon: FaJava, color: "#007396" },  // Java
  //     { icon: FaTasks, color: "#0074D9" },  // Kanban (Using a tasks icon in a blue shade as a symbolic representation)
  //   ],
  //   link: "https://github.com/devika7300/Shift-Management",
  // },
];
