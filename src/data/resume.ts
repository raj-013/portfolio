export interface Education {
  degree: string;
  school: string;
  location: string;
  gpa: string;
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

export interface Project {
  name: string;
  tech: string[];
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedinLabel: string;
  githubLabel: string;
  roles: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export const resumeData: ResumeData = {
  name: "Raj Patel",
  email: "rajpatel@nyu.edu",
  phone: "+1 3322607816",
  linkedinLabel: "LinkedIn",
  githubLabel: "GitHub",
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
      gpa: "3.93/4.0",
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
      gpa: "3.49/4.0",
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
      name: "LLM-Powered RAG Chatbot",
      tech: ["LLMs", "RAG", "LangChain", "GPT", "Java"],
      period: "Sep 2024 – Dec 2024",
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
      bullets: [
        "Fine-tuned T5, BART, and LLaMA models using Hugging Face Transformers on 1,000+ Amazon product reviews to generate high-quality abstractive summaries.",
        "Evaluated models using ROUGE-1, ROUGE-2, and ROUGE-L metrics, identifying T5 as the most balanced model with a ROUGE-1 score of 0.55.",
      ],
    },
    {
      name: "Real-Time Predictive Maintenance",
      tech: ["LSTM", "PySpark", "Apache Kafka"],
      period: "Jan 2024 – May 2024",
      bullets: [
        "Built a real-time data pipeline using Apache Kafka and PySpark to ingest, preprocess, and stream turbine sensor data for continuous telemetry monitoring.",
        "Trained and deployed an LSTM model for anomaly detection, achieving 92% accuracy and reducing unplanned downtime by 50%.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: ["Python", "Java"],
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
  ],
};
