import {
  GraduationCap,
  School,
  Code2,
  Layers,
  Globe,
  Layers2,
} from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  github: string;
  live: string;
  img: string;
  testcredentials?: {
    email: string;
    password: string;
  };
}

export const projects: Project[] = [
  {
    id: "caseopedia",
    name: "Caseopedia - Legal Case Management System",
    description:
      "Designed and developed a full-fledged Legal Case Management System tailored for law organization and independent advocates. The platform digitizes the complete law-firm workflow including client onboarding, case registration, court and hearing scheduling, document management, task tracking, and secure communication between lawyers and clients. Admin can manage multiple cases, assign tasks to lawyers, bulk upload data , track case status, and receive hearing reminders, while clients can securely view case progress and documents through a dedicated portal. The system streamlines daily legal operations, reduces manual data enty, and improves case visibility across the firm.",
    tech: [
      "React.js",
      "Firebase",
      "Django",
      "SQL",
      "AWS EC2",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Role-Based Access Control",
      "Performance Optimization",
      "Reusable Components",
      "Responsive Design",
    ],
    problem:
      "Most small and mid-size law organizations rely on spreadsheets, physical files, and WhatsApp/email communication to manage cases, leading to misplaced documents, missed hearings, poor task tracking, and lack of transparency between lawyers and clients.",
    solution:
      "Built a centralized, role-based legal management system with a modular frontend and scalable backend. Implemented secure authentication for lawyers, organizations, and clients, structured case and document workflows, real-time case status updates, hearing reminders, and intuitive dashboards for workload and case tracking. Optimized UI performance to handle large case and document datasets smoothly.",
    impact:
      "Reduced manual paperwork and administrative overhead by ~60%, improved case tracking and accountability across teams, and helped law firms manage hundreds of active cases with better organization, faster access to documents, and improved client trust through transparent case updates.",
    testcredentials: {
      email: "test@gmail.com",
      password: "T@1234567890",
    },
    github: "https://github.com",
    live: "https://caseopedia.onrender.com",
    img: "/caseopedia.png",
  },
  {
    id: "sales-dashboard",
    name: "Sales & E-commerce Analytics Dashboard",
    description:
      "A production-grade, frontend-only sales and e-commerce analytics dashboard designed to deliver clear, actionable business insights through interactive KPIs, advanced data visualizations, and structured reporting. The platform features state-based authentication, centralized global state management, and dynamic filtering to simulate real-world SaaS analytics workflows without requiring a backend.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Zustand",
      "Recharts",
      "JavaScript",
      "Responsive Design",
      "Performance Optimization",
      "Role-Based Access Control",
      "Reusable Components",
    ],
    problem:
      "Early-stage products and internal business teams often struggle to prototype analytics platforms quickly due to backend dependencies, infrastructure complexity, and extended development cycles.",
    solution:
      "Implemented a fully frontend-driven analytics architecture using Zustand for centralized state management and locally mocked datasets to replicate real sales and customer behavior. Interactive charts, KPIs, and tables dynamically respond to filters, closely mirroring enterprise analytics dashboards.",
    impact:
      "Showcases the ability to architect scalable, analytics-heavy user interfaces without backend services. The dashboard enables KPI monitoring, growth comparison, category-level revenue analysis, conversion tracking, and responsive admin layouts suitable for MVPs, demos, and stakeholder presentations.",
    github: "https://github.com",
    live: "https://salesflow-dashboard.onrender.com",
    img: "/sales-dashboard.png",
  },
  {
    id: "messageX-whatsapp",
    name: "MessageX - WhatsApp- Messaging Platform",
    description:
      "A production-grade, frontend-only messaging application inspired by WhatsApp, designed to closely replicate real-world chat, status, and call experiences using modern React architecture. The platform simulates authentication, real-time messaging behavior, delivery states, and user presence entirely on the client side, making it ideal for MVPs, demos, and frontend system design showcases.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Zustand",
      "localStorage",
      "JavaScript",
      "Responsive Design",
      "Performance Optimization",
      "Reusable Components",
    ],
    problem:
      "Building real-time chat applications typically requires complex backend infrastructure such as WebSockets, databases, and authentication services, which slows down prototyping and limits frontend-focused experimentation.",
    solution:
      "Implemented a fully frontend-driven messaging architecture using Zustand for centralized global state management and localStorage as a simulated persistence layer. Authentication, chats, message delivery states, online indicators, auto-replies, and UI navigation are all modeled on the client side to closely mirror WhatsApp-style workflows without backend dependencies.",
    impact:
      "Demonstrates the ability to architect scalable, state-heavy, real-time-like user interfaces using modern frontend tools. The application showcases chat lifecycle management, message status simulation, responsive mobile-first layouts, and multi-section navigation (Chats, Status, Calls, Settings), making it a strong portfolio project for frontend, product, and UI engineering roles.",
    github: "https://github.com/",
    live: "https://messagex-whatsapp.onrender.com",
    img: "/messageX.png",
  },
  {
    id: "online-savaari",
    name: "Online Ticket Booking System",
    description:
      "Developed and scaled a comprehensive travel-tech platform offering Flights, Hotels, Visa services, Travel Insurance, eSIM, Airport Lounge access, Holidays, and Activities. Built multiple end-to-end user journeys including search, comparison, booking, and payment flows while integrating 5+ airline APIs and other third-party services, supporting 1000+ daily searches across modules.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Google OCR API",
      "Airline APIs",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Razorpay",
      "Performance Optimization",
      "Reusable Components",
      "Responsive Design",
    ],
    problem:
      "Complex airline APIs and slow UI interactions caused a poor booking experience and high drop-offs during checkout.",
    solution:
      "Built a modular, scalable frontend with optimized search rendering, normalized API responses, and a smooth Razorpay payment flow with real-time UI feedback.",
    impact:
      "Improved booking completion rate by ~40% and reliably handled 1000+ daily searches with a fast, stable user experience.",
    github: "https://github.com",
    live: "https://onlinesavaari.com",
    img: "/savaari.webp",
  },
  {
    id: "medicheck",
    name: "MediCheck - OCR-Based Prescription Management System",
    description:
      "Built an AI-powered healthcare web platform that allows users to securely sign up, select a pricing plan, and access a personalized dashboard to manage medical prescriptions. Users can upload handwritten doctor prescriptions, which are processed using an OCR pipeline to extract structured data such as medicine names, dosage, frequency, and duration. The system transforms unstructured handwritten prescriptions into readable, digital medical records, enabling users to store, review, and manage their prescription history in one place.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "Redux",
      "TypeScript",
      "Aws",
      "Framer Motion",
      "OCR (Tesseract / AI Vision)",
      "REST APIs",
      "Responsive Design",
      "Performance Optimization",
    ],
    problem:
      "Handwritten medical prescriptions are often difficult to read, easy to lose, and hard to track over time. Patients struggle to understand medicine details, while digital health records are rarely available for offline or small-clinic prescriptions.",
    solution:
      "Developed a secure, step-based user flow starting with authentication and pricing access control, followed by a dashboard-driven experience. Implemented an OCR-based prescription scanning system that extracts and structures key medical data from handwritten prescriptions. Designed a clean UI to review, edit, and store extracted prescription details, ensuring accuracy and long-term accessibility.",
    impact:
      "Enabled users to digitize handwritten prescriptions in seconds, reduced prescription misinterpretation risks, and created a centralized, searchable medical record system that improves medication clarity and long-term health tracking.",
    github: "https://github.com",
    live: "http://51.21.252.2/",
    img: "/medicheck.png",
  },
  {
    id: "grocery-bays",
    name: "Grocery Bays E-commerce",
    description:
      "End-to-end grocery e-commerce platform enabling users to browse products, search categories, manage carts, and place orders with a strong emphasis on mobile usability. Focused on improving conversion, performance, and accessibility for daily-use shoppers.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    problem:
      "The existing platform suffered from high bounce rates, poor mobile navigation, and slow page loads, negatively impacting conversions.",
    solution:
      "Redesigned the complete user interface with a modern layout, optimized product grids, improved navigation flow, responsive breakpoints, and optimized images and assets.",
    impact:
      "Reduced bounce rate by ~25%, improved mobile retention, and increased overall engagement and usability for repeat customers.",
    github: "https://github.com",
    live: "https://www.grocerybays.com/",
    img: "/grocery.png",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "Full-featured e-commerce web application supporting complete shopping workflows including product listing, advanced filtering, product detail pages, cart management, and checkout experience. Built with a focus on performance, scalability, and responsive design to deliver a seamless shopping experience across mobile and desktop devices.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
      "ShadCN UI",
    ],
    problem:
      "Product discovery was slow and inconsistent due to inefficient filtering logic and unoptimized API calls, especially on mobile devices.",
    solution:
      "Implemented optimized client-side and server-side data handling, fast filtering and sorting mechanisms, reusable UI components, and a mobile-first checkout flow.",
    impact:
      "Improved page load and filtering performance by ~35%, increased session duration, and enhanced overall user engagement across all screen sizes.",
    github: "https://github.com",
    live: "https://next-e-commerce.onrender.com",
    img: "/ecommerce.svg",
  },
  {
    id: "pdf-analyzer",
    name: "AI-Powered PDF Analyzer",
    description:
      "AI-powered document analysis tool that allows users to upload PDFs such as resumes, reports, and research papers and instantly receive structured insights. Uses LangChain with the Google Gemini API to generate summaries, extract key points, suggest actions, and perform advanced resume analysis.",
    tech: [
      "LangChain",
      "Google Gemini API",
      "TypeScript",
      "Next.js",
      "ShadCN UI",
    ],
    problem:
      "Manually reviewing long documents and resumes was time-consuming, inconsistent, and inefficient for quick decision-making.",
    solution:
      "Built an AI-driven pipeline using LangChain and Gemini to parse PDFs, generate concise summaries, extract key insights, and provide actionable recommendations through a clean, user-friendly interface.",
    impact:
      "Reduced document review time by ~30%, enabling analysis of 50+ PDFs daily in under 5 seconds. Includes a Resume Special Mode with AI-generated resume scores, improvement suggestions, job domain fit analysis, and one-click export of insights as PDF or DOC.",
    github: "https://github.com",
    live: "https://ai-powered-pdf-analyzer.onrender.com",
    img: "/pdf.png",
  },
  // {
  //   id: "abalytics",
  //   name: "ABAlytics – Intelligent ABA Data & Progress Tracking System",
  //   description:
  //     "Developed a smart ABA therapy platform focused on real-time behavioral data collection, AI-generated session notes, and learner health tracking. The system is optimized for doctors and therapists conducting in-home ABA sessions, allowing them to log observations live, capture skill and behavior metrics, and automatically generate professional session documentation. Interactive graphs and analytics help clinicians evaluate learner performance trends and therapy effectiveness.",
  //   tech: [
  //     "Java",
  //     "Spring Boot",
  //     "React.js",
  //     "REST APIs",
  //     "Admin Control",
  //     "AI-Based Text Generation",
  //     "Recharts",
  //     "JWT Security",
  //     "Modular UI Components",
  //     "Performance Optimization",
  //   ],
  //   problem:
  //     "Manual ABA documentation is time-consuming, error-prone, and often completed after sessions, reducing data accuracy and making long-term learner tracking difficult.",
  //   solution:
  //     "Created a unified platform that combines live session data entry with AI-driven note generation and automated progress analytics. Designed clinician-friendly dashboards to visualize learner development and behavioral outcomes.",
  //   impact:
  //     "Improved documentation efficiency, enabled real-time clinical insights, and helped practitioners manage multiple learners with accurate, data-driven ABA therapy records.",
  //   testcredentials: {
  //     email: "sutanu.adhikary.8131@gmail.com",
  //     password: "Sonu@130",
  //   },
  //   github: "https://github.com",
  //   live: "https://lucidabanotesui.azurewebsites.net",
  //   img: "/abalytics.png",
  // },
];
export const educationData = [
  {
    id: 1,
    title: "Petbindhi D.K.M High School",
    subtitle: "12th Grade - WBCHSE",
    startDate: "01/2018",
    endDate: "03/2020",
    skills: [
      "Bengali",
      "English",
      "Nutrition",
      "Physical education",
      "Basic Computer Skills",
      "Logical Thinking",
      "Problem Solving",
    ],
    icon: School,
    link: "https://school.banglarshiksha.gov.in/ws/website/index/19230906602",
    gradient: "from-red-700 to-red-900",
  },
  {
    id: 2,
    startDate: "05/2020",
    endDate: "08/2023",
    skills: [
      "Critical Thinking",
      "Communication",
      "Problem Solving",
      "Research",
    ],
    title: "Jhargram Raj College",
    subtitle: "Bachelor of Arts (B.A.)",
    icon: GraduationCap,
    link: "https://jrc.ac.in/",
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 3,
    startDate: "02/2022",
    endDate: "09/2022",
    title: "Code with Random",
    subtitle: "Web Development Basics",
    icon: Globe,
    link: "https://codewithrandom.com/",
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    id: 4,
    startDate: "12/2022",
    endDate: "03/2023",
    skills: ["React.js", "JavaScript", "UI Development"],
    title: "Masai School",
    subtitle: "React Development",
    icon: Layers2,
    link: "https://masaischool.com/",
    gradient: "from-green-500 to-green-700",
  },
  {
    id: 5,
    startDate: "06/2023",
    endDate: "11/2023",
    skills: [
      "Next.js",
      "React.js",
      "Server-Side Rendering",
      "Static Site Generation",
    ],
    title: "Get SDE Ready",
    subtitle: "Next.js Projects",
    icon: Layers,
    link: "https://getsderedy.com/",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: 6,
    startDate: "02/2024",
    endDate: "07/2024",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Full Stack Development",
    ],
    title: "Bengali Coding Academy",
    subtitle: "MERN Stack",
    icon: Code2,
    link: "https://bengalicodingacademy.com/",
    gradient: "from-blue-500 to-blue-700",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Online Savaari",
    role: "Frontend Developer",
    period: "January 2024 - Present",
    location: "Kolkata, India",
    description:
      "Built an end-to-end flight booking platform integrating 5+ airline APIs, handling 100+ daily searches. Implemented Razorpay payments and optimized UI flows, reducing booking drop-offs and improving overall performance.",
    achievements: [
      "Integrated 5+ airline APIs enabling 100+ daily flight searches",
      "Designed and implemented scalable, reusable UI components using React and ShadCN UI",
      "Improved booking completion rate by ~40% through UX and performance optimizations",
      "Integrated secure Razorpay payment flow with error handling and edge-case coverage",
      "Collaborated with backend teams to optimize API contracts and reduce redundant calls",
      "Ensured mobile-first responsiveness across all critical booking screens",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Performance Optimization",
      "Reusable Components",
    ],
  },
  {
    company: "GroceryBays",
    role: "Frontend Developer (Part-time)",
    period: "May 2023 - December 2023",
    location: "Kolkata, India",
    description:
      "Redesigned and optimized the grocery e-commerce UI with a strong focus on responsiveness, accessibility, and SEO, leading to improved engagement and lower bounce rates.",
    achievements: [
      "Redesigned website layout to be fully responsive across mobile, tablet, and desktop",
      "Reduced mobile bounce rate by ~25% through layout and performance improvements",
      "Optimized images and assets to improve page load times",
      "Improved on-page SEO structure and semantic HTML usage",
      "Worked closely with product stakeholders to iterate on UI/UX feedback",
    ],
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "UI Components",
      "SEO Optimization",
      "Performance Improvement",
    ],
  },
];
