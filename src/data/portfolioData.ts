import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalProfile = {
  name: "Shwetali Dumbare",
  brandName: "SHWETALI.",
  headline: "Software Developer | Python Developer | AI & ML Enthusiast",
  summary:
    "I am an Artificial Intelligence and Machine Learning engineering student passionate about software development, Python programming, and building intelligent applications. I enjoy solving problems, developing user-friendly interfaces, working with APIs, and exploring Generative AI technologies. I am continuously improving my technical skills by building projects and learning modern development tools.",
  shortBio:
    "I develop practical applications using Python, modern web technologies, APIs, and AI-powered tools. I enjoy turning ideas into reliable, user-friendly software.",
  location: "Pune, Maharashtra, India",
  availabilityStatus: "Open to Software Development Opportunities",
  isAvailable: true,
  // Contact & Social Links
  email: "shwetalidumbare16@gmail.com",
  github: "https://github.com/shwetadumbare24-netizen",
  linkedin: "https://www.linkedin.com/in/shwetali-dumbare",
  resumePath: "/resume.pdf",
};

export const aboutHighlights = [
  {
    title: "AI & ML Academic Foundation",
    description: "Pursuing B.Tech in Artificial Intelligence & Machine Learning at G. H. Raisoni College of Engineering and Management, Pune.",
    icon: "GraduationCap",
  },
  {
    title: "Python & Software Engineering",
    description: "Strong foundation in Python core concepts, object-oriented design, algorithm implementation, and automated workflows.",
    icon: "Code2",
  },
  {
    title: "Frontend & Full-Stack Interfaces",
    description: "Hands-on experience developing modular, responsive user interfaces with React, modern CSS, and REST API integration.",
    icon: "Layers",
  },
  {
    title: "GenAI & RAG Exploration",
    description: "Deep interest in LangChain, context-augmented retrieval, vector databases, and real-world conversational assistants.",
    icon: "Sparkles",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    iconName: "Terminal",
    skills: [
      { name: "Python", description: "Core, OOP, Data Structures, Scripting" },
      { name: "JavaScript", description: "ES6+, Async/Await, DOM manipulation" },
      { name: "PHP", description: "Server-side scripts, database interaction" },
      { name: "SQL", description: "Complex queries, joins, relational schema design" },
    ],
  },
  {
    name: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React", description: "Functional components, Hooks, State management" },
      { name: "HTML5", description: "Semantic markup, Accessibility standards" },
      { name: "CSS3", description: "Flexbox, CSS Grid, Responsive Design" },
      { name: "Bootstrap", description: "Rapid utility layouts, responsive grids" },
    ],
  },
  {
    name: "Backend & APIs",
    iconName: "Server",
    skills: [
      { name: "FastAPI", description: "High-performance Python asynchronous APIs" },
      { name: "REST APIs", description: "CRUD endpoints, JSON schemas, HTTP status handling" },
    ],
  },
  {
    name: "Data Science",
    iconName: "LineChart",
    skills: [
      { name: "Pandas", description: "Data aggregation, wrangling, transformation" },
      { name: "NumPy", description: "Vectorized array calculations & linear math" },
      { name: "Matplotlib", description: "Data visualizations, histograms, trend charts" },
      { name: "OpenPyXL", description: "Excel automation, workbook reading & writing" },
    ],
  },
  {
    name: "AI & Generative AI",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", description: "Supervised learning algorithms, evaluation metrics" },
      { name: "LangChain", description: "Prompt chaining, document loaders, vector stores" },
      { name: "RAG", description: "Retrieval-Augmented Generation architectures" },
      { name: "Generative AI concepts", description: "LLMs, embeddings, similarity search, tokenization" },
    ],
  },
  {
    name: "Databases & Tools",
    iconName: "Database",
    skills: [
      { name: "MongoDB", description: "NoSQL document collections, aggregation pipeline" },
      { name: "MySQL", description: "Relational database tables, normalization" },
      { name: "Git", description: "Version control, branching, merge conflict resolution" },
      { name: "GitHub", description: "Remote repository hosting, issue tracking, CI flow" },
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "student-result-analytics",
    title: "Student Result Analytics Dashboard",
    description:
      "A Python-based desktop application that analyzes student academic performance, identifies toppers, calculates subject-wise pass percentages, and exports formatted PDF and Excel reports.",
    technologies: ["Python", "Pandas", "Matplotlib", "OpenPyXL", "CustomTkinter", "ReportLab"],
    category: "Python & Data",
    featured: true,
    highlights: [
      "Automated computation of GPA, grade distributions, and fail/pass ratios across semesters",
      "Dynamic generation of chart visualisations using Matplotlib embedded in CustomTkinter UI",
      "Export capability generating structured Excel workbooks (OpenPyXL) and PDF report cards (ReportLab)",
    ],
    mockupType: "analytics",
    githubUrl: "https://github.com/shwetadumbare24-netizen", // [EDITABLE: Update with exact repo if made public]
  },
  {
    id: "rag-customer-support",
    title: "RAG Customer Support Assistant",
    description:
      "An AI-powered customer support project exploring document retrieval, context-aware responses, and Retrieval-Augmented Generation to answer user queries with grounded factual context.",
    technologies: ["Python", "LangChain", "RAG", "Embeddings", "Vector Search"],
    category: "AI & GenAI",
    featured: true,
    highlights: [
      "Implemented document chunking and vector embeddings for semantic document search",
      "Built context-injection prompt pipelines using LangChain to minimize LLM hallucinations",
      "Enabled interactive Q&A over internal knowledge bases with transparent citation retrieval",
    ],
    mockupType: "rag",
    githubUrl: "https://github.com/shwetadumbare24-netizen/RAG-Customer-Support-Assistant",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description:
      "A full-stack web application for managing academic student records, featuring seamless Create, Read, Update, and Delete (CRUD) operations connected via FastAPI and MongoDB.",
    technologies: ["React", "FastAPI", "MongoDB", "REST APIs", "Tailwind CSS"],
    category: "Full-Stack",
    featured: true,
    highlights: [
      "Modern React single-page frontend with responsive data tables, modal forms, and search filters",
      "High-throughput FastAPI backend implementing RESTful CRUD endpoints and input validation",
      "MongoDB database integration for flexible schema document storage and fast retrieval",
    ],
    mockupType: "student-crud",
    githubUrl: "https://github.com/shwetadumbare24-netizen/Student-Management-System",
  },
  {
    id: "tourism-management-system",
    title: "Tourism Management System",
    description:
      "A structured tourism portal designed to manage travel destinations, tour packages, tourist inquiries, and itinerary information through an intuitive web interface.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    category: "Full-Stack",
    featured: false,
    highlights: [
      "Relational MySQL database schema connecting destinations, bookings, and customer inquiries",
      "Server-side PHP authentication, session handling, and administrative management console",
      "Clean, user-centric catalog of travel destinations with detailed tour specifications",
    ],
    mockupType: "tourism",
    githubUrl: "https://github.com/shwetadumbare24-netizen", // [EDITABLE: Update with exact repo]
  },
  {
    id: "amazon-clone",
    title: "Amazon E-Commerce Clone",
    description:
      "A frontend e-commerce practice project focused on responsive layout engineering, multi-tier navigation structures, and interactive user interface components.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Frontend",
    featured: false,
    highlights: [
      "Engineered responsive product showcase grids with hover zoom and badge micro-interactions",
      "Implemented multi-level navigation header with sub-menus and mobile hamburger drawer",
      "Simulated interactive cart counter and product pricing breakdown using vanilla JavaScript DOM",
    ],
    mockupType: "ecommerce",
    githubUrl: "https://github.com/shwetadumbare24-netizen", // [EDITABLE: Update with exact repo]
  },
  {
    id: "api-data-fetcher-analyzer",
    title: "API Data Fetcher & Analyzer",
    description:
      "A modular Python utility that interfaces with remote REST APIs, handles authentication and rate limits, parses structured JSON payloads, and performs automated data summaries.",
    technologies: ["Python", "Requests", "JSON", "Error Handling"],
    category: "Python & Data",
    featured: false,
    highlights: [
      "Resilient HTTP request pipeline featuring automatic retries and custom error logging",
      "Fast parsing and transformation of deeply nested JSON responses into clean data structures",
      "Automated summary metrics generation ready for reporting and downstream consumption",
    ],
    mockupType: "api-fetcher",
    githubUrl: "https://github.com/shwetadumbare24-netizen", // [EDITABLE: Update with exact repo]
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Development Intern",
    company: "[Tech Organization / Internship]", // [EDITABLE PLACEHOLDER]
    isPlaceholder: true,
    period: "June 2024 – August 2024", // [EDITABLE PLACEHOLDER]
    location: "Pune, India (Remote / Hybrid)",
    type: "Internship",
    description:
      "Contributed to building modular, responsive user interface components and integrating client-side views with backend REST APIs.",
    achievements: [
      "Developed responsive frontend layouts using React and modern CSS, ensuring cross-browser consistency",
      "Integrated REST API endpoints for dynamic data fetching, form handling, and error states",
      "Collaborated using Git version control and participated in code walkthroughs to refine component structure",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
  },
  {
    id: "exp-2",
    role: "Data Science & Python Trainee",
    company: "[Analytics / AI Lab]", // [EDITABLE PLACEHOLDER]
    isPlaceholder: true,
    period: "January 2024 – April 2024", // [EDITABLE PLACEHOLDER]
    location: "Pune, Maharashtra, India",
    type: "Training / Internship",
    description:
      "Worked on data extraction, preprocessing pipelines, and automated performance reporting using Python data libraries.",
    achievements: [
      "Processed structured datasets using Pandas and NumPy, handling missing records and data transformation",
      "Generated visual analytical plots and summary charts using Matplotlib for stakeholder insights",
      "Automated spreadsheet workflows by reading and writing multi-sheet workbooks using OpenPyXL",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "OpenPyXL"],
  },
  {
    id: "exp-3",
    role: "AI & RAG Project Developer",
    company: "Academic & Personal Projects",
    isPlaceholder: false,
    period: "2024 – Present",
    location: "Pune, India",
    type: "Project Research",
    description:
      "Explored cutting-edge Generative AI workflows, implementing Retrieval-Augmented Generation prototypes and context-aware systems.",
    achievements: [
      "Engineered the RAG Customer Support Assistant utilizing LangChain and vector semantic indexing",
      "Built the Student Result Analytics Dashboard with CustomTkinter and ReportLab automated PDF engine",
      "Architected the Student Management System with FastAPI asynchronous endpoints and MongoDB",
    ],
    technologies: ["LangChain", "RAG", "FastAPI", "MongoDB", "CustomTkinter", "Python"],
  },
];

export const educationData: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Artificial Intelligence and Machine Learning (AI & ML)",
  institution: "G. H. Raisoni College of Engineering and Management (GHRCEM)",
  location: "Pune, Maharashtra, India",
  period: "2022 – 2026", // [EDITABLE PLACEHOLDER for expected graduation]
  status: "Undergraduate (Current)",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning & Pattern Recognition",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Web Application Development",
    "Artificial Intelligence Principles",
    "Software Engineering Methodologies",
  ],
};
