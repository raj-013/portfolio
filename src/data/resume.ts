export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  coursework?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  tech: string[];
  period: string;
  bullets: string[];
  link?: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
}

export interface Certification {
  name: string;
  link: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  roles: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
}

export const resumeData: ResumeData = {
  name: "Raj Patel",
  email: "rajpatel@nyu.edu",
  linkedinUrl: "https://www.linkedin.com/in/rajpatel013/",
  githubUrl: "https://github.com/raj-013",
  roles: [
    "Machine Learning Engineer",
    "Software Engineer",
    "AI Systems Builder",
  ],
  education: [
    {
      degree: "M.S. in Computer Engineering",
      school: "NYU Tandon School of Engineering",
      location: "New York City, USA",
      period: "Sep 2023 – May 2025",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Big Data",
        "Systems Engineering",
        "Computing Systems Architecture",
      ],
    },
    {
      degree: "B.Tech. in Computer Engineering",
      school: "NMIMS MPSTME",
      location: "Mumbai, India",
      period: "Jun 2019 – May 2023",
    },
  ],
  experience: [
    {
      title: "Lead Machine Learning Engineer",
      company: "Emotionall",
      location: "Remote, USA",
      period: "Oct 2025 – Present",
      bullets: [
        "Built and deployed LLM-powered backend services and retrieval systems in production, supporting AI-driven application features.",
        "Designed evaluation pipelines, monitoring systems, and safeguards to ensure reliable model behavior in production environments.",
        "Developed data pipelines and backend services to support RAG workflows and AI-powered recommendations.",
        "Deployed and managed GPU-accelerated inference services and model serving infrastructure using AWS, Docker, and CI/CD pipelines.",
        "Collaborated with product, backend, and data teams to integrate AI capabilities into production applications.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Tiny Archives",
      location: "New York City, USA",
      period: "Feb 2025 – Oct 2025",
      bullets: [
        "Developed RESTful APIs using Python (Django) to support data ingestion, processing, and export workflows.",
        "Optimized PostgreSQL queries and backend services, improving API response time and data processing performance by 30%.",
        "Deployed containerized backend services using Docker and AWS ECS with CI/CD pipelines, improving system reliability and reducing service latency by 45%.",
        "Worked with frontend and data teams to integrate APIs across platforms and ensure seamless data flow between services.",
      ],
    },
    {
      title: "AI-ML Software Engineer",
      company: "Ontos Information Systems",
      location: "Vadodara, India",
      period: "May 2023 – Aug 2023",
      bullets: [
        "Developed API-driven backend services for a conversational assistant using Python, OpenAI APIs, and Azure Search, enabling scalable query processing and response generation.",
        "Improved search and retrieval performance by optimizing query logic, ranking algorithms, and API response handling, reducing latency and improving relevance.",
      ],
    },
  ],
  projects: [
    {
      name: "ContextForge — LLM Context Analytics Platform",
      tech: ["FastAPI", "DuckDB", "Celery", "OpenAI", "Next.js", "Docker"],
      period: "Jan 2026 – Apr 2026",
      link: "https://github.com/raj-013/ContextForge",
      featured: true,
      metrics: [
        { value: "30%", label: "Token Reduction" },
        { value: "100+", label: "Context Variants" },
      ],
      bullets: [
        "Built a self-hosted LLM context analytics platform (69 modules, 216 tests) to measure Quality-Per-Token (QPT), reducing unnecessary token usage by 20–30%.",
        "Developed a FastAPI backend with PostgreSQL metadata storage, DuckDB analytics, MinIO/Parquet trace storage, and Celery workers for async experiment execution.",
        "Implemented a Next.js dashboard, Python CLI, LangChain callback handler, and OpenAI SDK wrapper to ingest traces, analyze token cost and waste, and compare context strategies end-to-end.",
        "Added experiment evaluation and GitHub regression gating to measure QPT, enabling before/after comparison of context policies on benchmark workflows.",
      ],
    },
    {
      name: "LLM-Powered RAG Chatbot",
      tech: ["LLMs", "RAG", "LangChain", "GPT", "Java"],
      period: "Sep 2024 – Dec 2024",
      link: "https://github.com/raj-013/LLM-Chatbot-Agent-Using-Java",
      featured: true,
      metrics: [
        { value: "38%", label: "Accuracy Gain" },
        { value: "500+", label: "Concurrent Users" },
      ],
      bullets: [
        "Built an LLM-powered RAG system using LangChain and vector search to retrieve and generate domain-specific responses.",
        "Designed backend services and APIs to orchestrate LLM workflows, retrieval pipelines, and response generation.",
        "Implemented multi-threaded and asynchronous request handling to support 500+ concurrent AI interactions.",
        "Developed evaluation and retrieval ranking mechanisms to improve answer accuracy by 38%.",
      ],
    },
    {
      name: "Fine-Tuning Large Language Models",
      tech: ["Transformers", "Hugging Face", "T5", "BART", "LLaMA"],
      period: "Jan 2024 – May 2024",
      link: "https://github.com/raj-013/Fine-Tuning-Language-Models",
      featured: true,
      metrics: [
        { value: "0.55", label: "ROUGE-1 Score" },
        { value: "1K+", label: "Reviews Processed" },
      ],
      bullets: [
        "Fine-tuned T5, BART, and LLaMA models using Hugging Face Transformers on 1,000+ Amazon product reviews to generate high-quality abstractive summaries.",
        "Evaluated models using ROUGE-1, ROUGE-2, and ROUGE-L metrics, identifying T5 as the most balanced model with a ROUGE-1 score of 0.55.",
      ],
    },
    {
      name: "Real-Time Predictive Maintenance",
      tech: ["LSTM", "PySpark", "Apache Kafka"],
      period: "Jan 2024 – May 2024",
      link: "https://github.com/raj-013/Predictive-Maintenance-for-Wind-Turbines",
      featured: false,
      metrics: [
        { value: "92%", label: "Detection Accuracy" },
        { value: "50%", label: "Downtime Reduced" },
      ],
      bullets: [
        "Built a real-time data pipeline using Apache Kafka and PySpark to ingest, preprocess, and stream turbine sensor data for continuous telemetry monitoring.",
        "Trained and deployed an LSTM model for anomaly detection, achieving 92% accuracy and reducing unplanned downtime by 50%.",
      ],
    },
    {
      name: "Sign Language Recognition",
      tech: ["CNN", "Deep Learning", "Computer Vision"],
      period: "Jun 2022 – Apr 2023",
      link: "https://github.com/raj-013/Sign-Language-Recognition-System",
      bullets: [
        "Developed a real-time sign language recognition system using CNNs, comparing model performance across architectures to find the best model for SLR.",
        "Tested skeleton data against existing models to evaluate accuracy for seamless communication between sign language and non-sign language users.",
      ],
    },
    {
      name: "Airline Fare Predictor",
      tech: ["Scikit-Learn", "Linear Regression", "Decision Tree", "KNN"],
      period: "Dec 2021 – Mar 2022",
      link: "https://github.com/raj-013/Airline-Fare-Calculator",
      bullets: [
        "Applied ML algorithms including Linear Regression, Decision Tree Regressor, and K-Neighbor Regressor to predict airline ticket prices, achieving 96.65% training accuracy.",
      ],
    },
    {
      name: "Notes WebApp",
      tech: ["React.js", "MongoDB", "Axios", "CSS3"],
      period: "Sep 2021 – Nov 2021",
      link: "https://github.com/raj-013/Notes-App",
      bullets: [
        "Built a modular React.js CRUD application with MongoDB backend for note creation, deletion, and search with sub-200ms response time.",
        "Applied responsive design principles improving accessibility scores by 30% in usability tests.",
      ],
    },
    {
      name: "Keeper App",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      period: "Jun 2021 – Aug 2021",
      link: "https://github.com/raj-013/Keeper-App",
      bullets: [
        "Built a full-stack to-do application with Node.js/Express.js backend and MongoDB, processing 500+ task entries in real-time.",
        "Achieved 98% Lighthouse performance score with responsive, mobile-first frontend design.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: ["Python", "Java", "TypeScript"],
    },
    {
      category: "ML & AI",
      skills: [
        "LLM Agents",
        "RAG",
        "LangChain",
        "LangGraph",
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "NLP",
        "Transformers",
        "Hugging Face",
      ],
    },
    {
      category: "Data & Libraries",
      skills: [
        "NumPy",
        "Pandas",
        "PySpark",
        "Apache Kafka",
        "Elasticsearch",
        "DuckDB",
        "OpenSearch",
      ],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Lambda",
        "ECS",
        "EKS",
        "S3",
        "EC2",
      ],
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "Linux/Unix",
        "Prometheus",
        "Grafana",
        "JIRA",
      ],
    },
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Django", "REST APIs", "Celery"],
    },
  ],
  certifications: [
    {
      name: "AWS Educate Machine Learning Foundations",
      link: "https://www.credly.com/badges/2e7af601-949a-4918-b5db-1eced75d16ae/linked_in_profile",
    },
  ],
};
